#!/usr/bin/env python3
"""Local controller + driver-monitoring server for the NH-44 Truck Simulator.

Run this file from the extracted simulator folder. It serves index.html, runs the
Python MediaPipe webcam pipeline from the supplied reference script, produces
the original pygame beep alarm, and reads a connected steering wheel through
pygame's joystick API. The browser receives state through /api/state.
"""
from __future__ import annotations

import hashlib
import json
import math
import mimetypes
import os
import subprocess
import sys
import venv
import threading
import time
import urllib.request
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent
HOST = "127.0.0.1"
PORT = int(os.environ.get("TRUCK_SIM_PORT", "8000"))


def _venv_python(venv_dir: Path) -> Path:
    """Return the platform-specific Python executable inside a virtualenv."""
    if os.name == "nt":
        return venv_dir / "Scripts" / "python.exe"
    return venv_dir / "bin" / "python"


def _imports_work(python_exe: Path) -> bool:
    """Check runtime imports in a subprocess without importing them in this process."""
    probe = (
        "import cv2, mediapipe, numpy, pygame; "
        "from mediapipe.tasks import python; "
        "from mediapipe.tasks.python import vision"
    )
    try:
        result = subprocess.run(
            [str(python_exe), "-c", probe],
            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
            timeout=45, check=False,
        )
        return result.returncode == 0
    except (OSError, subprocess.SubprocessError):
        return False


def _choose_venv_dir() -> Path:
    """Reuse a remembered environment, then a project .venv, then a stable user env."""
    override = os.environ.get("NH44_VENV_DIR")
    if override:
        return Path(override).expanduser().resolve()

    state_dir = Path.home() / ".cache" / "nh44-truck-simulator"
    pointer = state_dir / "venv_path.txt"
    if pointer.is_file():
        try:
            remembered = Path(pointer.read_text(encoding="utf-8").strip()).expanduser()
            if _venv_python(remembered).is_file():
                return remembered.resolve()
        except OSError:
            pass

    local_venv = ROOT / ".venv"
    if _venv_python(local_venv).is_file():
        return local_venv.resolve()

    # This path is outside the downloaded ZIP and project folder. It survives
    # updated ZIPs even when they are extracted into a different directory.
    return (state_dir / "venv").resolve()


def _bootstrap_python_environment() -> None:
    """Create/reuse the Python environment and re-exec server.py inside it.

    Dependencies are installed only on first setup, when an import is broken,
    or when requirements.txt changes. The environment itself is never packed
    into the ZIP, so it is not overwritten by project updates.
    """
    requirements = ROOT / "requirements.txt"
    if not requirements.is_file():
        raise SystemExit(f"Missing requirements file: {requirements}")

    # If the interpreter already has all required packages and no stored/local
    # venv exists, keep using it instead of creating a duplicate environment.
    local_venv = ROOT / ".venv"
    state_dir = Path.home() / ".cache" / "nh44-truck-simulator"
    pointer = state_dir / "venv_path.txt"
    remembered_exists = False
    if pointer.is_file():
        try:
            remembered = Path(pointer.read_text(encoding="utf-8").strip()).expanduser()
            remembered_exists = _venv_python(remembered).is_file()
        except OSError:
            pass
    managed_exists = remembered_exists or _venv_python(local_venv).is_file()
    active_has_packages = _imports_work(Path(sys.executable))
    if not managed_exists and active_has_packages:
        print("Using the current Python environment; required packages are already available.")
        return

    venv_dir = _choose_venv_dir()
    python_exe = _venv_python(venv_dir)
    if not python_exe.is_file():
        print(f"Creating reusable Python environment: {venv_dir}")
        venv_dir.parent.mkdir(parents=True, exist_ok=True)
        try:
            venv.EnvBuilder(with_pip=True, clear=False).create(venv_dir)
        except Exception as exc:
            raise SystemExit(
                "Could not create the Python environment. Install Python's venv/ensurepip "
                f"support and retry. Details: {exc}"
            ) from exc
        python_exe = _venv_python(venv_dir)

    try:
        requirement_hash = hashlib.sha256(requirements.read_bytes()).hexdigest()
    except OSError as exc:
        raise SystemExit(f"Cannot read requirements.txt: {exc}") from exc
    stamp = venv_dir / ".nh44-requirements.sha256"
    try:
        installed_hash = stamp.read_text(encoding="utf-8").strip() if stamp.is_file() else ""
    except OSError:
        installed_hash = ""

    imports_ok = _imports_work(python_exe)
    if not imports_ok or installed_hash != requirement_hash:
        print("Preparing simulator dependencies (only missing/changed packages are installed)…")
        command = [
            str(python_exe), "-m", "pip", "install",
            "--disable-pip-version-check", "--no-input", "-r", str(requirements),
        ]
        completed = subprocess.run(command, check=False)
        if completed.returncode != 0 or not _imports_work(python_exe):
            raise SystemExit(
                "Dependency setup failed. Check the internet connection and Python version, "
                "then run server.py again. Existing installed packages have not been deleted."
            )
        stamp.write_text(requirement_hash, encoding="utf-8")
        print("Dependency setup complete. This environment will be reused on future launches.")
    else:
        print("Reusing existing Python environment; requirements are unchanged, skipping installation.")

    # Remember the environment outside the project so updated ZIPs can find it.
    try:
        state_dir.mkdir(parents=True, exist_ok=True)
        pointer.write_text(str(venv_dir.resolve()), encoding="utf-8")
    except OSError:
        # The active environment still works even if the convenience pointer
        # cannot be saved (for example, a locked-down account profile).
        pass

    try:
        active_prefix = Path(sys.prefix).resolve()
    except OSError:
        active_prefix = Path(sys.prefix)
    if active_prefix != venv_dir.resolve():
        print("Starting simulator inside the reusable Python environment…")
        os.execv(
            str(python_exe),
            [str(python_exe), str(Path(__file__).resolve()), *sys.argv[1:]],
        )


# server.py can be launched directly; bootstrap before importing OpenCV,
# MediaPipe, NumPy or Pygame so those imports always use the selected runtime.
if __name__ == "__main__":
    _bootstrap_python_environment()

# ---------------------------------------------------------------------------
# The following constants and helper functions intentionally mirror the
# supplied Python driving / eye-monitoring program.
# ---------------------------------------------------------------------------
TARGET_FPS = 30

EYE_CLOSED_THRESHOLD = 0.55
EYE_OPEN_THRESHOLD = 0.30
DROWSINESS_WARNING_LIMIT = 1.0
ALARM_CLOSURE_LIMIT = 2.0

INITIAL_BEEP_INTERVAL = 1.00
MIN_BEEP_INTERVAL = 0.12
BEEP_INTERVAL_REDUCTION = 0.35
BEEP_DURATION = 0.12
BEEP_FREQUENCY = 1000
DRIVER_MISSING_LIMIT = 1.0

MODEL_FILENAME = "face_landmarker.task"
MODEL_URL = (
    "https://storage.googleapis.com/mediapipe-models/"
    "face_landmarker/face_landmarker/float16/1/"
    "face_landmarker.task"
)
MODEL_PATH = ROOT / MODEL_FILENAME
PREFERENCES_DIR = Path.home() / ".cache" / "nh44-truck-simulator"
PREFERENCES_FILE = PREFERENCES_DIR / "settings.json"
PREFERENCES_LOCK = threading.RLock()


def _load_preferences() -> dict[str, Any]:
    with PREFERENCES_LOCK:
        try:
            data = json.loads(PREFERENCES_FILE.read_text(encoding="utf-8"))
            return data if isinstance(data, dict) else {}
        except (OSError, ValueError, TypeError):
            return {}


def _save_preferences(data: dict[str, Any]) -> None:
    with PREFERENCES_LOCK:
        PREFERENCES_DIR.mkdir(parents=True, exist_ok=True)
        temp = PREFERENCES_FILE.with_suffix(".tmp")
        temp.write_text(json.dumps(data, indent=2), encoding="utf-8")
        temp.replace(PREFERENCES_FILE)


def _update_preferences(**changes: Any) -> None:
    """Atomically merge settings so simultaneous camera/controller edits survive."""
    with PREFERENCES_LOCK:
        try:
            current = json.loads(PREFERENCES_FILE.read_text(encoding="utf-8"))
            if not isinstance(current, dict): current = {}
        except (OSError, ValueError, TypeError):
            current = {}
        current.update(changes)
        PREFERENCES_DIR.mkdir(parents=True, exist_ok=True)
        temp = PREFERENCES_FILE.with_suffix(".tmp")
        temp.write_text(json.dumps(current, indent=2), encoding="utf-8")
        temp.replace(PREFERENCES_FILE)


_RUNTIME_PREFERENCES = _load_preferences()
try:
    CAMERA_INDEX = max(0, min(15, int(_RUNTIME_PREFERENCES.get("cameraIndex", 0))))
except (TypeError, ValueError):
    CAMERA_INDEX = 0

# Imports are checked up-front so the server gives a useful installation error.
try:
    import cv2
    import mediapipe as mp
    import numpy as np
    import pygame
    from mediapipe.tasks import python
    from mediapipe.tasks.python import vision
except Exception as exc:  # pragma: no cover - message is exercised on user PC
    print("\nMissing or broken Python dependency:", exc)
    print("From this folder, run:\n")
    print(f'  "{sys.executable}" -m pip install -r requirements.txt\n')
    raise SystemExit(1)


def download_model() -> None:
    """Download the exact Face Landmarker task used by the reference code."""
    if MODEL_PATH.exists() and MODEL_PATH.stat().st_size > 1_000_000:
        print("MediaPipe model already exists.")
        return
    print("Downloading MediaPipe face model...")
    urllib.request.urlretrieve(MODEL_URL, str(MODEL_PATH))
    if MODEL_PATH.stat().st_size < 1_000_000:
        raise RuntimeError("Model download is incomplete.")
    print("Model downloaded successfully.")


def create_alarm_sound() -> pygame.mixer.Sound:
    """Original 1000 Hz / 0.12 s pygame alarm tone from the supplied code."""
    sample_rate = 22050
    sample_count = int(sample_rate * BEEP_DURATION)
    t = np.arange(sample_count, dtype=np.float32) / sample_rate
    waveform = (
        0.45 * np.sin(2 * np.pi * BEEP_FREQUENCY * t) * 32767
    ).astype(np.int16)

    fade_samples = max(1, int(sample_rate * 0.01))
    waveform[:fade_samples] = (
        waveform[:fade_samples] * np.linspace(0, 1, fade_samples, dtype=np.float32)
    ).astype(np.int16)
    waveform[-fade_samples:] = (
        waveform[-fade_samples:] * np.linspace(1, 0, fade_samples, dtype=np.float32)
    ).astype(np.int16)

    stereo_waveform = np.ascontiguousarray(np.column_stack((waveform, waveform)))
    return pygame.mixer.Sound(buffer=stereo_waveform.tobytes())


def get_beep_interval(duration_over_limit: float) -> float:
    interval = INITIAL_BEEP_INTERVAL - (BEEP_INTERVAL_REDUCTION * duration_over_limit)
    return max(MIN_BEEP_INTERVAL, interval)


def open_camera(camera_index: int | None = None) -> Any:
    """Open a selected OpenCV camera, preferring DirectShow on Windows."""
    index = CAMERA_INDEX if camera_index is None else int(camera_index)
    if os.name == "nt":
        camera = cv2.VideoCapture(index, cv2.CAP_DSHOW)
        if camera.isOpened():
            return camera
        camera.release()
    camera = cv2.VideoCapture(index)
    if camera.isOpened():
        return camera
    camera.release()
    raise RuntimeError(f"Cannot open camera {index}. Check connection and permissions.")


def probe_camera(index: int) -> bool:
    """Probe a camera briefly. Always release the handle, including failures."""
    capture = None
    try:
        if os.name == "nt":
            capture = cv2.VideoCapture(index, cv2.CAP_DSHOW)
            if not capture.isOpened():
                capture.release()
                capture = cv2.VideoCapture(index)
        else:
            capture = cv2.VideoCapture(index)
        return bool(capture is not None and capture.isOpened())
    except Exception:
        return False
    finally:
        if capture is not None:
            try:
                capture.release()
            except Exception:
                pass


def discover_cameras(limit: int = 8, selected: int | None = None, selected_busy: bool = False) -> list[dict[str, Any]]:
    """Find local cameras; skip probing only the selected camera while it is open."""
    found: list[dict[str, Any]] = []
    for index in range(max(1, min(int(limit), 12))):
        if selected == index and selected_busy:
            found.append({"index": index, "name": f"Camera {index}", "selected": True, "busy": True, "available": True})
            continue
        if probe_camera(index):
            found.append({"index": index, "name": f"Camera {index}", "selected": index == selected, "busy": False, "available": True})
    if selected is not None and all(item["index"] != selected for item in found):
        found.insert(0, {"index": selected, "name": f"Camera {selected} (selected / unavailable)", "selected": True, "busy": False, "available": False})
    return found


STATE_LOCK = threading.RLock()
STATE: dict[str, Any] = {
    "server": "ready",
    "eye": {
        "enabled": False,
        "status": "OFF",
        "message": "Click Enable eye monitoring to start the Python camera detector.",
        "warning": False,
        "emergency": False,
        "driverNotVisible": False,
        "eyesClosed": False,
        "closureDuration": 0.0,
        "alarmActive": False,
        "leftClosure": None,
        "rightClosure": None,
        "debug": "Python MediaPipe detector is idle",
        "error": None,
    },
    "controller": {
        "connected": False,
        "source": "pygame",
        "name": "No steering wheel detected",
        "steeringActive": False,
        "steer": 0.0,
        "throttle": False,
        "brake": False,
        "axes": [],
        "buttons": [],
        "hats": [],
        "axisCount": 0,
        "buttonCount": 0,
        "hatCount": 0,
        "devices": [],
        "selectedDeviceIndex": -1,
        "controls": {"connected": False, "steeringActive": False, "steer": 0.0, "throttle": False, "brake": False, "throttleValue": 0.0, "brakeValue": 0.0},
    },
    "camera": {"selectedIndex": CAMERA_INDEX, "devices": [], "active": False},
    "audio": {"available": False, "message": "Audio not initialized"},
}


def update_eye(**values: Any) -> None:
    with STATE_LOCK:
        STATE["eye"].update(values)


def snapshot_state() -> dict[str, Any]:
    with STATE_LOCK:
        return json.loads(json.dumps(STATE))


class EyeMonitor:
    """Runs the reference MediaPipe camera / blendshape / alarm loop locally."""

    def __init__(self) -> None:
        self._thread: threading.Thread | None = None
        self._stop = threading.Event()
        self._start_lock = threading.Lock()
        self.camera = None
        self.landmarker = None
        self.alarm_sound = None
        self.alarm_channel = None
        self.latest_jpeg: bytes | None = None
        self.jpeg_condition = threading.Condition()
        self.camera_index = CAMERA_INDEX
        self._camera_config_lock = threading.RLock()

    def camera_devices(self) -> list[dict[str, Any]]:
        with self._camera_config_lock:
            selected = self.camera_index
        active = bool(self._thread and self._thread.is_alive())
        devices = discover_cameras(selected=selected, selected_busy=active)
        with STATE_LOCK:
            STATE["camera"].update({"selectedIndex": selected, "devices": devices, "active": active})
        return devices

    def select_camera(self, index: int) -> tuple[bool, str]:
        try:
            requested = max(0, min(15, int(index)))
        except (TypeError, ValueError):
            return False, "Select a valid camera index."
        was_running = bool(self._thread and self._thread.is_alive())
        with self._camera_config_lock:
            old_index = self.camera_index
        if was_running:
            stopped, stop_message = self.stop()
            if not stopped:
                return False, stop_message
        if not probe_camera(requested):
            if was_running:
                self.start()
            return False, f"Camera {requested} could not be opened. Previous camera selection was kept."
        with self._camera_config_lock:
            self.camera_index = requested
        try:
            _update_preferences(cameraIndex=requested)
        except OSError as exc:
            print("Could not persist camera selection:", exc)
        with STATE_LOCK:
            STATE["camera"].update({"selectedIndex": requested, "active": False})
        if was_running:
            ok, message = self.start()
            return ok, f"Driver camera changed to Camera {requested}. {message}"
        self.camera_devices()
        return True, f"Driver camera set to Camera {requested}. Start eye monitoring to use it."

    def start(self) -> tuple[bool, str]:
        with self._start_lock:
            if self._thread and self._thread.is_alive():
                return True, "Eye monitoring is already running."
            self._stop.clear()
            update_eye(
                enabled=False, status="STARTING",
                message="Starting Python webcam and MediaPipe detector…",
                warning=False, emergency=False, alarmActive=False, error=None,
                debug="Opening camera and loading Face Landmarker",
            )
            self._thread = threading.Thread(target=self._run, name="EyeMonitor", daemon=True)
            self._thread.start()
            return True, "Eye monitoring is starting."

    def stop(self) -> tuple[bool, str]:
        self._stop.set()
        if self.alarm_channel is not None:
            try:
                self.alarm_channel.stop()
            except Exception:
                pass
        # Let the camera loop perform its own orderly release in its finally
        # block. Releasing MediaPipe from a second thread can race inference.
        if self._thread and self._thread.is_alive():
            self._thread.join(timeout=1.5)
        if self._thread and self._thread.is_alive() and self.camera is not None:
            try:
                self.camera.release()  # fallback to unblock a stuck camera read
            except Exception:
                pass
            self._thread.join(timeout=1.0)
        thread_stopped = not bool(self._thread and self._thread.is_alive())
        self.alarm_channel = None
        with self.jpeg_condition:
            self.latest_jpeg = None
            self.jpeg_condition.notify_all()
        update_eye(
            enabled=False, status="OFF" if thread_stopped else "ERROR",
            message="Eye monitoring stopped." if thread_stopped else "Camera worker did not stop cleanly; restart server.py before changing cameras.",
            warning=False, emergency=False, driverNotVisible=False,
            eyesClosed=False, closureDuration=0.0, alarmActive=False,
            leftClosure=None, rightClosure=None, debug="Camera stopped" if thread_stopped else "Camera worker still terminating",
            error=None if thread_stopped else "Camera worker shutdown timeout",
        )
        return thread_stopped, "Eye monitoring stopped." if thread_stopped else "Camera worker is still terminating."

    def _publish_frame(self, frame) -> None:
        ok, encoded = cv2.imencode(".jpg", frame, [int(cv2.IMWRITE_JPEG_QUALITY), 82])
        if ok:
            with self.jpeg_condition:
                self.latest_jpeg = encoded.tobytes()
                self.jpeg_condition.notify_all()

    def frame_stream(self):
        """Yield the most recent webcam frame as an MJPEG stream."""
        while not self._stop.is_set():
            with self.jpeg_condition:
                self.jpeg_condition.wait_for(
                    lambda: self.latest_jpeg is not None or self._stop.is_set(), timeout=1.0
                )
                frame = self.latest_jpeg
            if frame is None:
                current = snapshot_state()["eye"]
                if current.get("status") == "ERROR" or (not current.get("enabled") and current.get("status") == "OFF"):
                    break
                continue
            yield (
                b"--frame\r\nContent-Type: image/jpeg\r\nContent-Length: "
                + str(len(frame)).encode("ascii")
                + b"\r\n\r\n" + frame + b"\r\n"
            )
            time.sleep(1 / 20)

    def _run(self) -> None:
        # These are the same MediaPipe VIDEO-mode options used by the reference.
        camera = None
        landmarker = None
        try:
            if not MODEL_PATH.exists() or MODEL_PATH.stat().st_size < 1_000_000:
                download_model()

            try:
                pygame.mixer.quit()
                pygame.mixer.init(frequency=22050, size=-16, channels=2, buffer=512)
                self.alarm_sound = create_alarm_sound()
                with STATE_LOCK:
                    STATE["audio"] = {"available": True, "message": "pygame alarm audio ready"}
            except Exception as audio_error:
                # As in the reference application, audio failure must not stop
                # face detection or the emergency-braking signal.
                self.alarm_sound = None
                with STATE_LOCK:
                    STATE["audio"] = {"available": False, "message": str(audio_error)}
                print("Audio initialization failed:", audio_error)

            base_options = python.BaseOptions(model_asset_path=str(MODEL_PATH))
            options = vision.FaceLandmarkerOptions(
                base_options=base_options,
                running_mode=vision.RunningMode.VIDEO,
                num_faces=1,
                output_face_blendshapes=True,
            )
            landmarker = vision.FaceLandmarker.create_from_options(options)
            with self._camera_config_lock:
                selected_camera_index = self.camera_index
            camera = open_camera(selected_camera_index)
            self.camera = camera
            with STATE_LOCK:
                STATE["camera"].update({"selectedIndex": selected_camera_index, "active": True})
            self.landmarker = landmarker

            start_time = time.monotonic()
            last_timestamp_ms = -1
            eyes_are_closing = False
            closure_started_at = None
            current_closure_duration = 0.0
            face_missing_since = None
            alarm_active = False
            alarm_triggered_at = None
            next_beep_at = None

            update_eye(
                enabled=True, status="ACTIVE",
                message="HIGHWAY MONITORING ACTIVE · Keep your face visible.",
                warning=False, emergency=False, driverNotVisible=False,
                eyesClosed=False, closureDuration=0.0, alarmActive=False,
                leftClosure=None, rightClosure=None, debug="Camera active · waiting for face",
                error=None,
            )
            print("Eye monitoring active: Python MediaPipe + OpenCV webcam.")

            while not self._stop.is_set():
                success, frame = camera.read()
                if not success:
                    update_eye(status="CAMERA ERROR", message="Webcam frame could not be read.", error="Camera read failed")
                    time.sleep(0.05)
                    continue

                # Exact horizontal flip + BGR -> RGB + VIDEO timestamp pipeline.
                frame = cv2.flip(frame, 1)
                height, width = frame.shape[:2]
                rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb_frame)

                now = time.monotonic()
                elapsed = now - start_time
                timestamp_ms = max(int(elapsed * 1000), last_timestamp_ms + 1)
                last_timestamp_ms = timestamp_ms

                result = landmarker.detect_for_video(mp_image, timestamp_ms)
                face_detected = bool(result.face_landmarks)
                analysis_available = face_detected and bool(result.face_blendshapes)

                eye_crop = None
                both_eyes_closed = False
                both_eyes_open = False

                if not face_detected:
                    if face_missing_since is None:
                        face_missing_since = now
                else:
                    face_missing_since = None

                driver_not_visible = (
                    face_missing_since is not None
                    and now - face_missing_since >= DRIVER_MISSING_LIMIT
                )

                left_closure = 0.0
                right_closure = 0.0
                if analysis_available:
                    blendshapes = result.face_blendshapes[0]
                    scores = {item.category_name: item.score for item in blendshapes}
                    left_closure = scores.get("eyeBlinkLeft", 0.0)
                    right_closure = scores.get("eyeBlinkRight", 0.0)

                    both_eyes_closed = (
                        left_closure >= EYE_CLOSED_THRESHOLD
                        and right_closure >= EYE_CLOSED_THRESHOLD
                    )
                    both_eyes_open = (
                        left_closure <= EYE_OPEN_THRESHOLD
                        and right_closure <= EYE_OPEN_THRESHOLD
                    )

                    if both_eyes_open and not driver_not_visible and alarm_active:
                        alarm_active = False
                        alarm_triggered_at = None
                        next_beep_at = None
                        if self.alarm_channel is not None:
                            self.alarm_channel.stop()
                        self.alarm_channel = None

                    if not eyes_are_closing and both_eyes_closed:
                        eyes_are_closing = True
                        closure_started_at = now
                        current_closure_duration = 0.0
                    elif eyes_are_closing and both_eyes_open:
                        eyes_are_closing = False
                        closure_started_at = None
                        current_closure_duration = 0.0

                    if eyes_are_closing and closure_started_at is not None:
                        current_closure_duration = now - closure_started_at

                    # Same eye-crop landmark list and padding as supplied code.
                    eye_indices = [
                        33, 7, 163, 144, 145, 153, 154, 155,
                        133, 173, 157, 158, 159, 160, 161, 246,
                        362, 382, 381, 380, 374, 373, 390, 249,
                        263, 466, 388, 387, 386, 385, 384, 398,
                    ]
                    landmarks = result.face_landmarks[0]
                    x_values = [int(landmarks[i].x * width) for i in eye_indices]
                    y_values = [int(landmarks[i].y * height) for i in eye_indices]
                    padding = 25
                    x_min = max(0, min(x_values) - padding)
                    x_max = min(width, max(x_values) + padding)
                    y_min = max(0, min(y_values) - padding)
                    y_max = min(height, max(y_values) + padding)

                    if x_max > x_min and y_max > y_min:
                        eye_region = frame[y_min:y_max, x_min:x_max]
                        if eye_region.size > 0:
                            eye_crop = cv2.resize(eye_region, (240, 102))
                            cv2.rectangle(frame, (x_min, y_min), (x_max, y_max), (70, 230, 135), 2)
                else:
                    if not driver_not_visible and not alarm_active:
                        eyes_are_closing = False
                        closure_started_at = None
                        current_closure_duration = 0.0

                show_red_warning = (
                    (eyes_are_closing and current_closure_duration > DROWSINESS_WARNING_LIMIT)
                    or driver_not_visible
                )

                was_alarm_active = alarm_active
                is_drowsy_critical = (
                    analysis_available
                    and eyes_are_closing
                    and closure_started_at is not None
                    and current_closure_duration > ALARM_CLOSURE_LIMIT
                )

                if is_drowsy_critical or driver_not_visible:
                    alarm_active = True

                if alarm_active and not was_alarm_active:
                    alarm_triggered_at = now

                # Original beep timing: the alarm begins at the 2s critical limit
                # (or after the driver has been missing for 1s).
                if alarm_active:
                    if next_beep_at is None or now >= next_beep_at:
                        if self.alarm_sound is not None:
                            self.alarm_channel = self.alarm_sound.play()
                        time_active = (now - alarm_triggered_at) if alarm_triggered_at else 0.0
                        interval = get_beep_interval(time_active)
                        next_beep_at = now + interval
                else:
                    next_beep_at = None
                    if self.alarm_channel is not None:
                        self.alarm_channel.stop()
                    self.alarm_channel = None

                if driver_not_visible:
                    status = "CRITICAL: DRIVER NOT VISIBLE!"
                    status_color = (255, 85, 85)
                elif alarm_active:
                    status = "CRITICAL: ACUTE DROWSINESS DETECTED!"
                    status_color = (255, 85, 85)
                elif show_red_warning:
                    status = "WARNING: DROWSINESS DETECTED"
                    status_color = (255, 200, 70)
                else:
                    status = "HIGHWAY MONITORING ACTIVE"
                    status_color = (80, 255, 140)

                # Camera preview carries the detection state and a live eye crop.
                cv2.rectangle(frame, (8, 8), (min(width - 8, 540), 48), (15, 22, 32), -1)
                cv2.putText(frame, status, (18, 36), cv2.FONT_HERSHEY_SIMPLEX, 0.62, status_color, 2, cv2.LINE_AA)
                if eye_crop is not None:
                    h, w = eye_crop.shape[:2]
                    x0, y0 = max(0, width - w - 12), 58
                    frame[y0:y0+h, x0:x0+w] = eye_crop
                    cv2.rectangle(frame, (x0, y0), (x0+w, y0+h), status_color, 2)
                if show_red_warning:
                    overlay = frame.copy()
                    cv2.rectangle(overlay, (0, 0), (width, height), (0, 0, 210), -1)
                    frame = cv2.addWeighted(overlay, 0.18, frame, 0.82, 0)
                    cv2.putText(frame, "OPEN YOUR EYES", (max(20, width//2-170), height-28), cv2.FONT_HERSHEY_SIMPLEX, 1.0, (255,255,255), 3, cv2.LINE_AA)
                self._publish_frame(frame)

                message = status
                level = "critical" if alarm_active or driver_not_visible else "warning" if show_red_warning else "normal"
                debug = (
                    f"MediaPipe Face Landmarker · Blink L {left_closure:.2f} / R {right_closure:.2f}"
                    if analysis_available else
                    ("Face detected · blendshape analysis unavailable" if face_detected else "NO FACE SIGNAL")
                )
                update_eye(
                    enabled=True,
                    status="CRITICAL" if alarm_active else "WARNING" if show_red_warning else "ACTIVE",
                    message=message,
                    warning=show_red_warning,
                    emergency=bool(alarm_active),
                    driverNotVisible=bool(driver_not_visible),
                    eyesClosed=bool(eyes_are_closing),
                    closureDuration=round(current_closure_duration, 3),
                    alarmActive=bool(alarm_active),
                    leftClosure=round(float(left_closure), 3) if analysis_available else None,
                    rightClosure=round(float(right_closure), 3) if analysis_available else None,
                    debug=debug,
                    error=None,
                )
                # The reference program targets 30 FPS; camera/landmarker speed
                # controls the actual rate, with a small backoff when over target.
                elapsed_frame = time.monotonic() - now
                if elapsed_frame < 1.0 / TARGET_FPS:
                    time.sleep((1.0 / TARGET_FPS) - elapsed_frame)

        except Exception as exc:
            print("Eye monitoring error:", exc)
            update_eye(
                enabled=False, status="ERROR",
                message=f"Eye monitoring failed: {exc}", error=str(exc),
                warning=False, emergency=False, alarmActive=False,
                debug="See the server console for the Python traceback",
            )
        finally:
            if self.alarm_channel is not None:
                try:
                    self.alarm_channel.stop()
                except Exception:
                    pass
            if camera is not None:
                camera.release()
            if landmarker is not None:
                landmarker.close()
            self.camera = None
            self.landmarker = None
            with STATE_LOCK:
                STATE["camera"]["active"] = False
            if self._stop.is_set():
                update_eye(enabled=False, status="OFF", alarmActive=False, emergency=False)

    def test_sound(self) -> tuple[bool, str]:
        if self.alarm_sound is None:
            try:
                if not pygame.mixer.get_init():
                    pygame.mixer.init(frequency=22050, size=-16, channels=2, buffer=512)
                self.alarm_sound = create_alarm_sound()
            except Exception as exc:
                return False, f"Audio initialization failed: {exc}"
        try:
            self.alarm_sound.play()
            return True, "1000 Hz pygame alarm test played."
        except Exception as exc:
            return False, f"Could not play alarm: {exc}"


EYE_MONITOR = EyeMonitor()


class GamepadReader:
    """Python-owned controller discovery, mapping, calibration and safety logic.

    Raw hardware events are interpreted here, never in browser JavaScript.
    Defaults reproduce the supplied working Pygame mapping (axis 0 steering,
    axis 4 throttle and axis 3 brake, both pedals active above -0.5). Optional
    released/pressed calibration safely replaces the legacy threshold.
    """
    DEFAULT_CONFIG: dict[str, Any] = {
        "deviceIndex": -1,
        "steerAxis": 0,
        "steerInvert": True,
        "steerCenter": 0.0,
        "steerDeadzone": 0.08,
        "throttleType": "axis",
        "throttleChannel": 4,
        "throttleCalibration": {"rest": None, "pressed": None},
        "brakeType": "axis",
        "brakeChannel": 3,
        "brakeCalibration": {"rest": None, "pressed": None},
    }

    def __init__(self) -> None:
        self.stop_event = threading.Event()
        self.joystick = None
        self.device_index: int | None = None
        self.instance_id: int | None = None
        self.config_lock = threading.RLock()
        self.configured = isinstance(_RUNTIME_PREFERENCES.get("controller"), dict)
        self.config = self._normalise_config(_RUNTIME_PREFERENCES.get("controller", {}))
        self.thread = threading.Thread(target=self._run, name="GamepadReader", daemon=True)
        self._last_devices_refresh = 0.0
        self._available_devices: list[dict[str, Any]] = []

    @classmethod
    def _normalise_config(cls, incoming: dict[str, Any] | None) -> dict[str, Any]:
        data = dict(cls.DEFAULT_CONFIG)
        incoming = incoming if isinstance(incoming, dict) else {}
        data.update(incoming)
        def safe_int(value: Any, default: int, low: int, high: int) -> int:
            try: return max(low, min(high, int(value)))
            except (TypeError, ValueError): return default
        data["deviceIndex"] = safe_int(data.get("deviceIndex", -1), -1, -1, 32)
        for key, default in (("steerAxis", 0), ("throttleChannel", 4), ("brakeChannel", 3)):
            data[key] = safe_int(data.get(key), default, -1, 128)
        data["steerInvert"] = bool(data.get("steerInvert", True))
        try: data["steerCenter"] = max(-1.0, min(1.0, float(data.get("steerCenter", 0.0))))
        except (TypeError, ValueError): data["steerCenter"] = 0.0
        try: data["steerDeadzone"] = max(0.0, min(0.35, float(data.get("steerDeadzone", 0.08))))
        except (TypeError, ValueError): data["steerDeadzone"] = 0.08
        for kind in ("throttle", "brake"):
            data[f"{kind}Type"] = "button" if data.get(f"{kind}Type") == "button" else "axis"
            cal = data.get(f"{kind}Calibration")
            if not isinstance(cal, dict): cal = {}
            normal = {"rest": None, "pressed": None}
            for point in normal:
                try:
                    value = cal.get(point)
                    numeric = None if value is None else float(value)
                    normal[point] = None if numeric is None or not math.isfinite(numeric) else max(-1.0, min(1.0, numeric))
                except (TypeError, ValueError): normal[point] = None
            data[f"{kind}Calibration"] = normal
        return data

    def get_config(self) -> dict[str, Any]:
        with self.config_lock:
            return json.loads(json.dumps(self.config))

    def get_config_state(self) -> dict[str, Any]:
        with self.config_lock:
            return {"config": json.loads(json.dumps(self.config)), "configured": bool(self.configured)}

    def apply_config(self, incoming: dict[str, Any]) -> dict[str, Any]:
        if not isinstance(incoming, dict):
            raise ValueError("Controller settings must be a JSON object.")
        with self.config_lock:
            old_device = self.config.get("deviceIndex", -1)
            merged = dict(self.config)
            merged.update(incoming)
            self.config = self._normalise_config(merged)
            self.configured = True
            new_device = self.config.get("deviceIndex", -1)
            saved = json.loads(json.dumps(self.config))
        _update_preferences(controller=saved)
        if new_device != old_device:
            self._drop_device()
        return saved

    def reset_config(self) -> dict[str, Any]:
        return self.apply_config(self.DEFAULT_CONFIG)

    def rescan(self) -> list[dict[str, Any]]:
        self._last_devices_refresh = 0.0
        self._refresh_devices()
        return list(self._available_devices)

    def capture_calibration(self, kind: str, point: str) -> dict[str, Any]:
        if kind not in ("steering", "throttle", "brake"):
            raise ValueError("Unknown calibration input.")
        with STATE_LOCK:
            controller = dict(STATE.get("controller", {}))
            axes = list(controller.get("axes", []))
        if not controller.get("connected"):
            raise RuntimeError("Connect the controller before calibration.")
        if kind == "steering":
            if point != "center": raise ValueError("Steering calibration point must be center.")
            config = self.get_config()
            axis = config["steerAxis"]
            if axis < 0 or axis >= len(axes): raise RuntimeError("Selected steering axis is unavailable.")
            return self.apply_config({"steerCenter": float(axes[axis])})
        if point not in ("rest", "pressed"):
            raise ValueError("Pedal calibration point must be rest or pressed.")
        config = self.get_config()
        if config[f"{kind}Type"] == "button":
            raise RuntimeError("Digital button pedals do not require analogue calibration.")
        axis = config[f"{kind}Channel"]
        if axis < 0 or axis >= len(axes): raise RuntimeError(f"Selected {kind} axis is unavailable.")
        calibration = dict(config[f"{kind}Calibration"])
        calibration[point] = float(axes[axis])
        return self.apply_config({f"{kind}Calibration": calibration})

    def _pedal_value(self, raw: float | None, calibration: dict[str, Any]) -> float:
        if raw is None or not math.isfinite(raw):
            return 0.0
        rest, pressed = calibration.get("rest"), calibration.get("pressed")
        # The uncalibrated default is deliberately the exact legacy threshold
        # from the known-working Pygame script. Calibration overrides it.
        if rest is None or pressed is None or abs(float(pressed) - float(rest)) < 0.18:
            return 1.0 if raw > -0.5 else 0.0
        return max(0.0, min(1.0, (raw - float(rest)) / (float(pressed) - float(rest))))

    def _mapped_pedal(self, axes: list[float], buttons: list[bool], kind: str, config: dict[str, Any]) -> float:
        channel = int(config.get(f"{kind}Channel", -1))
        if channel < 0:
            return 0.0
        if config.get(f"{kind}Type") == "button":
            return 1.0 if channel < len(buttons) and buttons[channel] else 0.0
        raw = axes[channel] if channel < len(axes) else None
        return self._pedal_value(raw, config[f"{kind}Calibration"])

    def _mapped_controls(self, axes: list[float], buttons: list[bool], connected: bool, config: dict[str, Any]) -> dict[str, Any]:
        if not connected:
            return {"connected": False, "steeringActive": False, "steer": 0.0, "throttle": False, "brake": False, "throttleValue": 0.0, "brakeValue": 0.0}
        steer_axis = int(config.get("steerAxis", -1))
        raw_steer = axes[steer_axis] if 0 <= steer_axis < len(axes) else 0.0
        if not math.isfinite(raw_steer): raw_steer = 0.0
        steer = raw_steer - float(config.get("steerCenter", 0.0))
        if config.get("steerInvert", True): steer = -steer
        deadzone = float(config.get("steerDeadzone", 0.08))
        # Match the original Pygame loop: retain raw steering magnitude after
        # applying its 0.08 dead-zone rather than rescaling small movements.
        if abs(steer) < deadzone: steer = 0.0
        steer = max(-1.0, min(1.0, steer))
        throttle_value = self._mapped_pedal(axes, buttons, "throttle", config)
        brake_value = self._mapped_pedal(axes, buttons, "brake", config)
        brake = brake_value > 0.16
        throttle = throttle_value > 0.16 and not brake
        return {
            "connected": True,
            "steeringActive": abs(steer) > 0.001,
            "steer": round(steer, 4),
            "throttle": bool(throttle),
            "brake": bool(brake),
            "throttleValue": round(throttle_value, 4),
            "brakeValue": round(brake_value, 4),
        }

    def start(self) -> None:
        try:
            pygame.display.init()
        except Exception as exc:
            print("Pygame display init warning (joystick may still work):", exc)
        try:
            pygame.joystick.init()
        except Exception as exc:
            print("Pygame joystick initialization warning:", exc)
        if not self.thread.is_alive():
            self.thread = threading.Thread(target=self._run, name="GamepadReader", daemon=True)
            self.thread.start()

    def _drop_device(self) -> None:
        old = self.joystick
        self.joystick = None
        self.device_index = None
        self.instance_id = None
        if old is not None:
            try: old.quit()
            except Exception: pass
        with STATE_LOCK:
            STATE["controller"].update({
                "connected": False, "name": "No steering wheel detected",
                "steeringActive": False, "steer": 0.0, "throttle": False, "brake": False,
                "axes": [], "buttons": [], "hats": [], "axisCount": 0, "buttonCount": 0,
                "hatCount": 0, "controls": self._mapped_controls([], [], False, self.get_config()),
            })

    def _refresh_devices(self) -> None:
        devices: list[dict[str, Any]] = []
        try:
            count = pygame.joystick.get_count()
            for index in range(count):
                name = f"Controller {index}"
                candidate = None
                try:
                    candidate = pygame.joystick.Joystick(index)
                    candidate.init()
                    name = candidate.get_name()
                except Exception:
                    pass
                finally:
                    if candidate is not None:
                        try: candidate.quit()
                        except Exception: pass
                devices.append({"index": index, "name": name})
        except Exception:
            devices = []
        self._available_devices = devices
        self._last_devices_refresh = time.monotonic()

    def _connect_first(self) -> None:
        try: count = pygame.joystick.get_count()
        except Exception: count = 0
        config = self.get_config()
        wanted = int(config.get("deviceIndex", -1))
        if self.joystick is not None:
            try:
                still_valid = self.joystick.get_init() and self.device_index is not None and self.device_index < count
                if wanted >= 0 and self.device_index != wanted: still_valid = False
            except Exception:
                still_valid = False
            if still_valid: return
            self._drop_device()
        indexes = [wanted] if wanted >= 0 and wanted < count else (list(range(count)) if wanted < 0 else [])
        for index in indexes:
            try:
                candidate = pygame.joystick.Joystick(index)
                candidate.init()
                self.joystick = candidate
                self.device_index = index
                try: self.instance_id = candidate.get_instance_id()
                except Exception: self.instance_id = index
                print(f"Connected controller [{index}]: {candidate.get_name()}")
                return
            except Exception as exc:
                print(f"Could not initialise controller {index}: {exc}")

    def _run(self) -> None:
        while not self.stop_event.is_set():
            try:
                try:
                    pygame.event.pump()
                    events = pygame.event.get()
                except Exception:
                    events = []
                removed_ids = {
                    getattr(event, "instance_id", getattr(event, "which", None))
                    for event in events
                    if getattr(event, "type", None) == getattr(pygame, "JOYDEVICEREMOVED", -999)
                }
                if self.joystick is not None and self.instance_id in removed_ids:
                    self._drop_device()
                if time.monotonic() - self._last_devices_refresh > 1.0:
                    self._refresh_devices()
                self._connect_first()
                wheel = self.joystick
                config = self.get_config()
                if wheel is not None and wheel.get_init():
                    # Any exception during hot-unplug immediately clears controls.
                    axes = []
                    for axis_index in range(wheel.get_numaxes()):
                        raw_axis = float(wheel.get_axis(axis_index))
                        axes.append(max(-1.0, min(1.0, raw_axis)) if math.isfinite(raw_axis) else 0.0)
                    buttons = [bool(wheel.get_button(i)) for i in range(wheel.get_numbuttons())]
                    hats = [list(wheel.get_hat(i)) for i in range(wheel.get_numhats())]
                    controls = self._mapped_controls(axes, buttons, True, config)
                    with STATE_LOCK:
                        STATE["controller"].update({
                            "connected": True, "source": "pygame", "name": wheel.get_name(),
                            "deviceIndex": self.device_index, "instanceId": self.instance_id,
                            "steeringActive": controls["steeringActive"], "steer": controls["steer"],
                            "throttle": controls["throttle"], "brake": controls["brake"],
                            "axes": axes, "buttons": buttons, "hats": hats,
                            "axisCount": len(axes), "buttonCount": len(buttons), "hatCount": len(hats),
                            "devices": self._available_devices, "selectedDeviceIndex": config["deviceIndex"],
                            "controls": controls,
                        })
                else:
                    if wheel is not None: self._drop_device()
                    else:
                        with STATE_LOCK:
                            STATE["controller"].update({
                                "connected": False, "name": "No steering wheel detected",
                                "steeringActive": False, "steer": 0.0, "throttle": False, "brake": False,
                                "axes": [], "buttons": [], "hats": [], "axisCount": 0, "buttonCount": 0,
                                "hatCount": 0, "devices": self._available_devices,
                                "selectedDeviceIndex": config["deviceIndex"],
                                "controls": self._mapped_controls([], [], False, config),
                            })
            except Exception as exc:
                print("Controller polling warning:", exc)
                self._drop_device()
            self.stop_event.wait(0.02)

    def stop(self) -> None:
        self.stop_event.set()
        if self.thread.is_alive(): self.thread.join(timeout=1.0)
        self._drop_device()


GAMEPAD = GamepadReader()


class TruckRequestHandler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, fmt: str, *args) -> None:
        # Keep console output useful; suppress noisy per-frame asset requests.
        if self.path.startswith("/api/") or self.path == "/":
            super().log_message(fmt, *args)

    def _send_json(self, payload: dict[str, Any], status: int = 200) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def _read_json(self) -> dict[str, Any]:
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if length <= 0:
                return {}
            return json.loads(self.rfile.read(min(length, 16_384)).decode("utf-8"))
        except Exception:
            return {}

    def do_GET(self) -> None:
        path = urlparse(self.path).path
        if path == "/api/state":
            self._send_json(snapshot_state())
            return
        if path == "/api/controller/config":
            self._send_json({"ok": True, **GAMEPAD.get_config_state()})
            return
        if path == "/api/cameras":
            devices = EYE_MONITOR.camera_devices()
            self._send_json({"ok": True, "devices": devices, "selectedIndex": EYE_MONITOR.camera_index})
            return
        if path == "/api/controller/devices":
            self._send_json({"ok": True, "devices": GAMEPAD.rescan(), "selectedIndex": GAMEPAD.get_config()["deviceIndex"]})
            return
        if path == "/api/camera.mjpg":
            self.send_response(200)
            self.send_header("Content-Type", "multipart/x-mixed-replace; boundary=frame")
            self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
            self.send_header("Connection", "close")
            self.end_headers()
            try:
                for chunk in EYE_MONITOR.frame_stream():
                    self.wfile.write(chunk)
                    self.wfile.flush()
            except (BrokenPipeError, ConnectionResetError, OSError):
                pass
            return
        if path == "/api/health":
            self._send_json({"ok": True, "root": ROOT.name})
            return
        super().do_GET()

    def do_POST(self) -> None:
        path = urlparse(self.path).path
        if path == "/api/eye/start":
            ok, message = EYE_MONITOR.start()
            self._send_json({"ok": ok, "message": message}, 200 if ok else 500)
            return
        if path == "/api/eye/stop":
            ok, message = EYE_MONITOR.stop()
            self._send_json({"ok": ok, "message": message})
            return
        if path == "/api/alarm/test":
            ok, message = EYE_MONITOR.test_sound()
            self._send_json({"ok": ok, "message": message}, 200 if ok else 500)
            return
        if path == "/api/controller/config":
            try:
                config = GAMEPAD.apply_config(self._read_json())
                self._send_json({"ok": True, "config": config, "message": "Python controller settings saved."})
            except Exception as exc:
                self._send_json({"ok": False, "message": str(exc)}, 400)
            return
        if path == "/api/controller/calibrate":
            try:
                payload = self._read_json()
                config = GAMEPAD.capture_calibration(str(payload.get("kind", "")), str(payload.get("point", "")))
                self._send_json({"ok": True, "config": config, "message": "Calibration captured by Python."})
            except Exception as exc:
                self._send_json({"ok": False, "message": str(exc)}, 400)
            return
        if path == "/api/controller/reset":
            try:
                config = GAMEPAD.reset_config()
                self._send_json({"ok": True, "config": config, "message": "Controller mappings reset to the original Pygame defaults."})
            except Exception as exc:
                self._send_json({"ok": False, "message": str(exc)}, 400)
            return
        if path == "/api/camera/select":
            payload = self._read_json()
            ok, message = EYE_MONITOR.select_camera(payload.get("index", -1))
            self._send_json({"ok": ok, "message": message}, 200 if ok else 400)
            return
        self._send_json({"ok": False, "message": "Unknown API endpoint"}, 404)


def main() -> None:
    print("\nGRAND TRUNK NH-44 · LOCAL SERVER")
    print("Checking / downloading MediaPipe model...")
    try:
        download_model()
    except Exception as exc:
        # Keep the simulator usable even if the first-time model download fails;
        # the eye-monitor button will display the exact error and can be retried.
        print("Model download unavailable at startup:", exc)
        print("The simulator server will still start; eye monitoring needs this model.")

    try:
        pygame.mixer.init(frequency=22050, size=-16, channels=2, buffer=512)
        with STATE_LOCK:
            STATE["audio"] = {"available": True, "message": "pygame mixer ready"}
    except Exception as exc:
        with STATE_LOCK:
            STATE["audio"] = {"available": False, "message": str(exc)}
        print("Audio initialization warning:", exc)

    GAMEPAD.start()
    with STATE_LOCK:
        STATE["camera"].update({"selectedIndex": EYE_MONITOR.camera_index, "active": False})

    server = None
    for port in range(PORT, PORT + 10):
        try:
            server = ThreadingHTTPServer((HOST, port), TruckRequestHandler)
            break
        except OSError:
            continue
    if server is None:
        GAMEPAD.stop()
        raise RuntimeError(f"Could not bind localhost ports {PORT}-{PORT+9}.")

    # Match the supplied standalone Python program: camera monitoring starts
    # automatically when server.py is run. The browser panel can still stop
    # and restart it at any time.
    EYE_MONITOR.start()

    url = f"http://{HOST}:{server.server_port}/"
    print(f"\nSimulator URL: {url}")
    print("Eye detection: Python OpenCV + MediaPipe Face Landmarker")
    print("Alarm: original pygame 1000 Hz beep / escalating interval")
    print("Controller: raw Pygame axes/buttons/hats; calibrate steering and pedals in Driver Monitor → Controller test")
    print("Press Ctrl+C here to stop the server, camera and controller.\n")
    try:
        threading.Timer(0.8, lambda: webbrowser.open(url)).start()
        server.serve_forever(poll_interval=0.25)
    except KeyboardInterrupt:
        print("\nStopping simulator services...")
    finally:
        EYE_MONITOR.stop()
        GAMEPAD.stop()
        server.shutdown()
        server.server_close()
        try:
            pygame.mixer.quit()
            pygame.joystick.quit()
            pygame.display.quit()
        except Exception:
            pass
        print("Server stopped.")


if __name__ == "__main__":
    main()
