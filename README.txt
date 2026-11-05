GRAND TRUNK NH-44 TRUCK SIMULATOR - PYTHON SERVER PACKAGE

START THE SIMULATOR
1. Extract the ZIP.
2. Run server.py directly:
       python3 server.py
   Or use START_SERVER.sh / START_SERVER.bat.
3. server.py starts the Python eye camera / detector and controller reader, then
   opens the simulator at http://127.0.0.1:8000/ (or the next free port).
4. Keep the server console open while playing. Press Ctrl+C to stop all services.

REUSABLE PYTHON ENVIRONMENT (IMPORTANT)
- On first launch, server.py checks the current Python, an existing project .venv,
  and the saved simulator environment before installing anything.
- When needed, it creates one reusable environment and remembers its location
  outside the ZIP, under your home cache directory:
       ~/.cache/nh44-truck-simulator/venv
  On Windows the same cache path is kept under your user profile.
- The environment path is saved outside the project folder. Future updated ZIPs
  reuse the same environment even if you extract the update into a new folder.
- Dependencies are installed only on first setup, if an import is missing/broken,
  or if requirements.txt has changed. Unchanged requirements skip pip entirely.
- If requirements change, pip updates the existing environment in place. It does
  NOT delete the environment or reinstall every package from scratch.
- The ZIP deliberately excludes .venv, Python caches and installed packages.
  Never put a virtual environment inside an update ZIP.
- Optional override: set NH44_VENV_DIR to choose a different persistent location.

FIRST-TIME MODEL DOWNLOAD
The first server start downloads face_landmarker.task from Google's MediaPipe model
storage into the project folder. Later launches reuse that file as long as it stays
in the folder. Internet is required for the initial model download.

EYE-CLOSURE / DROWSINESS DETECTION
- Running server.py automatically opens the webcam and starts eye monitoring.
- server.py uses OpenCV + the supplied MediaPipe Face Landmarker / blendshape logic.
- The browser displays the local MJPEG camera preview; camera frames are not uploaded.
- Both eyeBlinkLeft and eyeBlinkRight >= 0.55: eyes closed.
- Both scores <= 0.30: eyes open.
- Warning after 1 second of continuous closure.
- Alarm + emergency braking after 2 seconds of continuous closure.
- Driver missing for 1 second: critical alarm + emergency braking.
- Original Pygame 1000 Hz beep waveform (0.12 s) and escalating beep interval are used.
- Opening both eyes clears the alarm.
- Use Test alarm in the Driver Monitor panel to verify speakers.

EXTERNAL STEERING WHEEL / PEDALS
- Connect the wheel to the same computer that runs server.py.
- Open Driver Monitor -> Inputs. Python/Pygame owns device discovery, raw polling,
  device selection, steering/pedal mapping and calibration. The browser only shows
  raw telemetry and receives Python's already-mapped controls.
- The default assignments reproduce the supplied working Python script:
      steering axis 0 (inverted, dead zone 0.08)
      accelerator axis 4 (active when raw value > -0.5)
      brake axis 3 (active when raw value > -0.5)
- If your particular wheel has different axes or reverse pedal travel, choose the
  right axis/button and calibrate: capture released, then fully pressed.
- Digital paddles can be assigned as buttons. Brake takes priority if both pedals
  report pressed simultaneously.
- Choose Automatic or a specific controller when multiple controllers are attached.
  The selected device and all mappings persist outside the project folder in:
      ~/.cache/nh44-truck-simulator/settings.json
- The diagnostics show raw axis bars, every button, hat switches, mapped steering,
  throttle and brake values, plus keyboard activity.
- Pygame polls the physical wheel at 50 Hz; the browser receives mapped inputs at
  about 25 Hz. No browser Gamepad API is used for vehicle control.
- If the wheel is unplugged or a read fails, Python clears all physical inputs to
  neutral immediately. Reconnection is scanned automatically.
- Input settings can be reset to the original Python defaults from the Inputs tab.

CAMERA INPUT MANAGEMENT
- Open Driver Monitor -> Devices to scan attached cameras and choose the
  driver-facing USB/external camera used by OpenCV/MediaPipe eye monitoring.
- Applying another camera stops the current camera worker, switches the index and
  restarts monitoring. If the new camera cannot open, the previous selection is kept.
- The driver-facing camera is separate from the simulator's Cabin / Chase / Orbit
  in-game camera. The latter remains controlled by the HUD camera button or C key.
- Camera selection persists outside the ZIP in the same NH-44 settings file.

INPUT FAIL-SAFES
- Browser control mapping is not used; Python produces final steering/throttle/brake.
- Disconnected/invalid controllers publish neutral inputs, never the previous frame.
- Missing axis or button channels evaluate to neutral.
- Brake suppresses throttle if both mapped pedal inputs are active.
- Calibrated pedal travel supports either increasing or decreasing raw values.
- Keyboard held states are released by the simulator when the browser loses focus.
- Controller disconnect does not silently shift gears; it only clears controller input.

KEYBOARD
- W / Up arrow: accelerate
- S / Down arrow: service brake
- A / Left arrow: steer left
- D / Right arrow: steer right
- Space: service air brake
- Shift / ]: gear up; Ctrl / [: gear down
- C: switch camera; G: toggle Auto / Manual transmission
- L: headlights; Q / E: turn indicators; X: hazard lights
- B: engine brake; H: horn
- T: time of day; F: graphics quality; M: mute
- R: restart; U: hide/show HUD
- Esc / P: pause; Enter: start/continue

TROUBLESHOOTING
- If venv creation fails on Linux, install the python3-venv package for your Python
  version, then run server.py again.
- If pip cannot install MediaPipe, use a supported desktop Python 3.9+ installation.
- If the camera cannot open, close other apps using it, then choose another source
  under Driver Monitor -> Devices. Camera indexes can vary after USB reconnection.
- If the alarm test does not make sound, check the computer's output device and
  OS volume. The server console shows audio initialization errors.
- If no wheel appears, confirm that the operating system detects it and that
  Pygame can access it. Reconnect it after starting server.py; hot-plug is polled.
- If port 8000 is occupied, server.py tries ports 8001-8009 and prints the URL.

PACKAGE CONTENTS
- index.html, css/, js/: standalone browser simulator and assets
- server.py: reusable-environment bootstrap, HTTP server, Python eye detection,
  Pygame alarm, controller mapping/calibration and camera/device APIs
- requirements.txt: Python runtime dependencies
- CREDITS.md: original third-party/data credits
