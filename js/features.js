/* NH-44 Driver Command Centre.
 * Python/Pygame owns all physical controller discovery, mapping, calibration
 * and safety filtering. The browser renders telemetry and sends settings.
 */
(() => {
  'use strict';

  const EMPTY_PAD = () => ({
    connected: false, steeringActive: false, steer: 0,
    throttle: false, brake: false, throttleValue: 0, brakeValue: 0,
    axes: [], buttons: [], hats: [], id: ''
  });
  window.__truckGamepad = EMPTY_PAD();
  window.__truckEyeState = { warning: false, emergency: false, alarmActive: false, message: 'Eye monitoring off' };

  const UI = `
    <div id="driver-tools" class="dt-root">
      <button id="driver-tools-toggle" class="dt-launcher" type="button" aria-expanded="false" aria-controls="driver-tools-panel">
        <span class="dt-launch-icon">◉</span><span>DRIVER MONITOR</span><span id="launcher-state" class="dt-launch-state">STANDBY</span>
      </button>
      <aside id="driver-tools-panel" class="dt-panel" aria-label="Driver monitoring and vehicle input settings">
        <header class="dt-header">
          <div><div class="dt-eyebrow">GRAND TRUNK · NH-44</div><h2>Driver command centre</h2><p>Driver safety · hardware inputs · camera sources</p></div>
          <button id="driver-tools-close" class="dt-close" type="button" aria-label="Close panel">×</button>
        </header>
        <nav class="dt-tabs" role="tablist" aria-label="Driver panel sections">
          <button class="dt-tab active" type="button" role="tab" aria-selected="true" data-tab="monitor">Monitor</button>
          <button class="dt-tab" type="button" role="tab" aria-selected="false" data-tab="controller">Inputs</button>
          <button class="dt-tab" type="button" role="tab" aria-selected="false" data-tab="devices">Devices</button>
        </nav>

        <section id="dt-view-monitor" class="dt-view">
          <div class="dt-section-head"><span class="dt-section-icon">◉</span><div><strong>Driver attention</strong><small>PYTHON · OPENCV + MEDIAPIPE</small></div><span id="eye-mode" class="dt-pill neutral">OFF</span></div>
          <div id="eye-status" class="dt-status" role="status" aria-live="polite">Waiting for Python camera monitor…</div>
          <div id="eye-preview-wrap" class="dt-camera-wrap">
            <img id="eye-preview" alt="Live driver camera preview">
            <div class="dt-camera-overlay"><span class="dt-live-dot"></span> DRIVER CAMERA <span id="camera-face-state">WAITING FOR FACE</span></div>
          </div>
          <div class="dt-metrics">
            <div class="dt-metric"><span>LEFT EYE</span><strong id="eye-left-value">--</strong><div class="dt-meter"><i id="eye-left-meter"></i></div></div>
            <div class="dt-metric"><span>RIGHT EYE</span><strong id="eye-right-value">--</strong><div class="dt-meter"><i id="eye-right-meter"></i></div></div>
          </div>
          <div id="eye-debug" class="dt-debug">Waiting for Python server…</div>
          <div class="dt-actions">
            <button id="eye-start" class="dt-button primary" type="button">Start eye monitoring</button>
            <button id="eye-stop" class="dt-button danger" type="button" hidden>Stop monitoring</button>
            <button id="eye-test" class="dt-button secondary" type="button">♫ Test alarm</button>
          </div>
          <div class="dt-rule-note"><b>Safety sequence</b><span>1.0s warning · 2.0s alarm + emergency braking · 1.0s driver-not-visible timeout</span></div>
          <div class="dt-divider"></div>
          <div class="dt-section-head"><span class="dt-section-icon blue">⌁</span><div><strong>Steering connection</strong><small>PYGAME HARDWARE INPUT</small></div><span id="controller-status" class="dt-pill neutral">DISCONNECTED</span></div>
          <div class="dt-device-card"><span class="dt-device-mark">⌘</span><div><strong id="controller-name">No steering wheel detected</strong><small id="controller-summary">Connect a wheel; Python scans for it automatically.</small></div></div>
          <button id="open-controller-test" class="dt-button secondary full" type="button">Open input diagnostics <span>↗</span></button>
        </section>

        <section id="dt-view-controller" class="dt-view" hidden>
          <div class="dt-section-head"><span class="dt-section-icon blue">⌁</span><div><strong>External controller</strong><small>PYGAME READS + MAPS HARDWARE</small></div><span id="controller-test-state" class="dt-pill neutral">WAITING</span></div>
          <div class="dt-device-card"><span class="dt-device-mark">⌘</span><div><strong id="controller-test-name">No controller connected</strong><small id="controller-device-count">Connect the device before testing.</small></div></div>
          <label class="dt-field">Active controller<select id="controller-device"><option value="-1">Automatic · first available</option></select></label>
          <button id="controller-rescan" class="dt-small-button" type="button">↻ Scan / reconnect controllers</button>
          <div class="dt-subhead"><strong>Live axes</strong><span>Raw Python/Pygame values</span></div>
          <div id="axis-list" class="dt-axis-list"><div class="dt-empty">Waiting for controller telemetry…</div></div>
          <div class="dt-subhead"><strong>Buttons & hat switches</strong><span>Live press test</span></div>
          <div id="button-list" class="dt-button-grid"><div class="dt-empty">Button states appear when connected.</div></div>
          <div id="hat-list" class="dt-hat-list"></div>

          <div class="dt-divider"></div>
          <div class="dt-subhead"><strong>Driving assignments</strong><span>Saved by Python on this computer</span></div>
          <div class="dt-mapping-grid">
            <label>Steering axis<select id="map-steer"></select></label>
            <label>Throttle input<select id="map-throttle-type"><option value="axis">Analogue axis</option><option value="button">Button / paddle</option></select></label>
            <label>Throttle channel<select id="map-throttle-channel"></select></label>
            <label>Brake input<select id="map-brake-type"><option value="axis">Analogue axis</option><option value="button">Button / paddle</option></select></label>
            <label>Brake channel<select id="map-brake-channel"></select></label>
          </div>
          <div class="dt-check-row"><label><input id="map-steer-invert" type="checkbox" checked> Invert steering direction</label><span id="steer-live-value">STEER 0.00</span></div>
          <button id="steer-center-capture" class="dt-small-button" type="button">Capture current steering centre</button>
          <div class="dt-calibration" id="throttle-calibration">
            <div class="dt-calibration-head"><strong>Throttle pedal calibration</strong><span id="throttle-cal-status">LEGACY INPUT</span></div>
            <div class="dt-calibration-actions"><button id="throttle-rest" type="button">Capture released</button><button id="throttle-press" type="button">Capture fully pressed</button></div>
            <div class="dt-pedal-track"><i id="throttle-pedal-meter"></i></div><small id="throttle-pedal-value">Default matches the original Python threshold (axis value &gt; -0.5). Calibrate if your wheel differs.</small>
          </div>
          <div class="dt-calibration" id="brake-calibration">
            <div class="dt-calibration-head"><strong>Brake pedal calibration</strong><span id="brake-cal-status">LEGACY INPUT</span></div>
            <div class="dt-calibration-actions"><button id="brake-rest" type="button">Capture released</button><button id="brake-press" type="button">Capture fully pressed</button></div>
            <div class="dt-pedal-track"><i id="brake-pedal-meter"></i></div><small id="brake-pedal-value">Default matches the original Python threshold (axis value &gt; -0.5). Calibrate if your wheel differs.</small>
          </div>
          <div class="dt-actions"><button id="controller-reset" class="dt-button secondary" type="button">Reset to Python defaults</button><button id="controller-cal-clear" class="dt-button secondary" type="button">Clear calibrations</button></div>
          <div id="controller-config-status" class="dt-debug">Python is the authority for device input and mapping.</div>

          <div class="dt-divider"></div>
          <div class="dt-subhead"><strong>Keyboard test</strong><span>Browser key state · game hotkeys</span></div>
          <div class="dt-keyboard-grid" id="keyboard-test">
            <div class="dt-key-item" data-keys="KeyW,ArrowUp"><kbd>W / ↑</kbd><span>Accelerate</span></div>
            <div class="dt-key-item" data-keys="KeyS,ArrowDown"><kbd>S / ↓</kbd><span>Service brake</span></div>
            <div class="dt-key-item" data-keys="KeyA,ArrowLeft"><kbd>A / ←</kbd><span>Steer left</span></div>
            <div class="dt-key-item" data-keys="KeyD,ArrowRight"><kbd>D / →</kbd><span>Steer right</span></div>
            <div class="dt-key-item" data-keys="Space"><kbd>SPACE</kbd><span>Air brake</span></div>
            <div class="dt-key-item" data-keys="ShiftLeft,ShiftRight,BracketRight"><kbd>SHIFT / ]</kbd><span>Gear up</span></div>
            <div class="dt-key-item" data-keys="ControlLeft,ControlRight,BracketLeft"><kbd>CTRL / [</kbd><span>Gear down</span></div>
            <div class="dt-key-item" data-keys="KeyH"><kbd>H</kbd><span>Horn</span></div>
            <div class="dt-key-item" data-keys="KeyC"><kbd>C</kbd><span>Cycle in-game camera</span></div>
            <div class="dt-key-item" data-keys="KeyG"><kbd>G</kbd><span>Auto / manual</span></div>
            <div class="dt-key-item" data-keys="KeyL"><kbd>L</kbd><span>Headlights</span></div>
            <div class="dt-key-item" data-keys="KeyQ"><kbd>Q</kbd><span>Left indicator</span></div>
            <div class="dt-key-item" data-keys="KeyE"><kbd>E</kbd><span>Right indicator</span></div>
            <div class="dt-key-item" data-keys="KeyX"><kbd>X</kbd><span>Hazard lights</span></div>
            <div class="dt-key-item" data-keys="KeyB"><kbd>B</kbd><span>Engine brake</span></div>
            <div class="dt-key-item" data-keys="KeyT"><kbd>T</kbd><span>Time of day</span></div>
            <div class="dt-key-item" data-keys="KeyF"><kbd>F</kbd><span>Graphics quality</span></div>
            <div class="dt-key-item" data-keys="KeyM"><kbd>M</kbd><span>Mute audio</span></div>
            <div class="dt-key-item" data-keys="KeyR"><kbd>R</kbd><span>Restart run</span></div>
            <div class="dt-key-item" data-keys="KeyU"><kbd>U</kbd><span>Hide / show HUD</span></div>
            <div class="dt-key-item" data-keys="Escape,KeyP"><kbd>ESC / P</kbd><span>Pause</span></div>
            <div class="dt-key-item" data-keys="Enter"><kbd>ENTER</kbd><span>Start / continue</span></div>
          </div>
          <div id="keyboard-last-event" class="dt-debug">No key pressed yet. Click the simulator if it has lost keyboard focus.</div>
        </section>

        <section id="dt-view-devices" class="dt-view" hidden>
          <div class="dt-section-head"><span class="dt-section-icon">▣</span><div><strong>Camera inputs</strong><small>LOCAL OPENCV DEVICE MANAGER</small></div><span id="camera-device-state" class="dt-pill neutral">SCANNING</span></div>
          <div class="dt-device-card"><span class="dt-device-mark">◉</span><div><strong>Driver-facing camera</strong><small>Used for eye detection and driver visibility, not the in-game chase/cabin view.</small></div></div>
          <label class="dt-field">Driver camera source<select id="driver-camera-select"><option value="0">Camera 0 · default</option></select></label>
          <div class="dt-actions"><button id="camera-rescan" class="dt-button secondary" type="button">↻ Scan cameras</button><button id="camera-apply" class="dt-button primary" type="button">Apply camera</button></div>
          <div id="camera-device-status" class="dt-debug">Camera list is provided by OpenCV on the Python server.</div>
          <div class="dt-rule-note"><b>Camera management</b><span>Choose the USB/external webcam that faces the driver. Applying a different source restarts the eye monitor cleanly if it is running. The simulator's Cabin / Chase / Orbit camera remains controlled by the game HUD or C key.</span></div>
          <div class="dt-divider"></div>
          <div class="dt-section-head"><span class="dt-section-icon blue">⌁</span><div><strong>Input safety</strong><small>FAIL-SAFE BEHAVIOUR</small></div></div>
          <div class="dt-safety-list">
            <div><b>Controller unplugged</b><span>Python immediately publishes neutral steering, throttle and brake values.</span></div>
            <div><b>Device not found</b><span>Selected device stays selected; use Automatic to return to first available.</span></div>
            <div><b>Conflicting pedals</b><span>Brake takes priority and throttle is suppressed.</span></div>
            <div><b>Window loses focus</b><span>Keyboard-held inputs are released by the simulator.</span></div>
            <div><b>Unknown pedal orientation</b><span>Original Python threshold is the default; capture rest and pressed positions to calibrate a different wheel.</span></div>
          </div>
        </section>
        <footer class="dt-footer"><span>LOCAL ONLY · PYTHON DEVICE CONTROL</span><span>NH-44 / DRIVER ASSIST</span></footer>
      </aside>
    </div>
    <div id="drowsy-alert" role="alert" aria-live="assertive"></div>
  `;

  const $ = id => document.getElementById(id);
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const DEFAULT_CONFIG = {
    deviceIndex: -1, steerAxis: 0, steerInvert: true, steerCenter: 0, steerDeadzone: 0.08,
    throttleType: 'axis', throttleChannel: 4, throttleCalibration: { rest: null, pressed: null },
    brakeType: 'axis', brakeChannel: 3, brakeCalibration: { rest: null, pressed: null }
  };
  let config = structuredCloneSafe(DEFAULT_CONFIG);
  let serverAvailable = false;
  let eyeEnabled = false;
  let statePollTimer = 0;
  let lastEyeStatus = '';
  let latestController = null;
  let pressedKeys = new Set();
  let axisListSignature = '';
  let buttonListSignature = '';
  let deviceListSignature = '';
  let cameraListSignature = '';
  let configSaveQueue = Promise.resolve();
  let pollInFlight = false;

  function structuredCloneSafe(value) { return JSON.parse(JSON.stringify(value)); }
  function readLocalConfig() {
    try {
      const old = JSON.parse(localStorage.getItem('nh44-controller-config') || 'null');
      if (!old || typeof old !== 'object') return null;
      return {
        ...old,
        throttleChannel: old.throttleChannel ?? old.throttleAxis ?? 4,
        brakeChannel: old.brakeChannel ?? old.brakeAxis ?? 3,
        deviceIndex: old.deviceIndex ?? -1
      };
    } catch (_) { return null; }
  }

  function buildUI() {
    if ($('driver-tools')) return;
    document.body.insertAdjacentHTML('beforeend', UI);
    $('driver-tools-toggle').addEventListener('click', togglePanel);
    $('driver-tools-close').addEventListener('click', closePanel);
    document.querySelectorAll('.dt-tab').forEach(tab => tab.addEventListener('click', () => selectTab(tab.dataset.tab)));
    $('open-controller-test').addEventListener('click', () => { openPanel(); selectTab('controller'); });
    $('eye-start').addEventListener('click', startEyeMonitoring);
    $('eye-stop').addEventListener('click', stopEyeMonitoring);
    $('eye-test').addEventListener('click', testAlarmSound);

    $('map-steer').addEventListener('change', e => updateConfig({ steerAxis: Number(e.target.value), steerCenter: 0 }));
    $('map-throttle-type').addEventListener('change', e => updateConfig({ throttleType: e.target.value, throttleCalibration: { rest: null, pressed: null } }));
    $('map-brake-type').addEventListener('change', e => updateConfig({ brakeType: e.target.value, brakeCalibration: { rest: null, pressed: null } }));
    $('map-throttle-channel').addEventListener('change', e => updateConfig({ throttleChannel: Number(e.target.value), throttleCalibration: { rest: null, pressed: null } }));
    $('map-brake-channel').addEventListener('change', e => updateConfig({ brakeChannel: Number(e.target.value), brakeCalibration: { rest: null, pressed: null } }));
    $('map-steer-invert').addEventListener('change', e => updateConfig({ steerInvert: e.target.checked }));
    $('controller-device').addEventListener('change', e => updateConfig({ deviceIndex: Number(e.target.value) }));
    $('controller-rescan').addEventListener('click', scanControllers);
    $('steer-center-capture').addEventListener('click', () => captureRemote('steering', 'center'));
    $('throttle-rest').addEventListener('click', () => captureRemote('throttle', 'rest'));
    $('throttle-press').addEventListener('click', () => captureRemote('throttle', 'pressed'));
    $('brake-rest').addEventListener('click', () => captureRemote('brake', 'rest'));
    $('brake-press').addEventListener('click', () => captureRemote('brake', 'pressed'));
    $('controller-reset').addEventListener('click', resetMappings);
    $('controller-cal-clear').addEventListener('click', clearCalibrations);
    $('camera-rescan').addEventListener('click', loadCameras);
    $('camera-apply').addEventListener('click', applyCamera);
    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('keyup', onKeyUp, true);
    window.addEventListener('blur', () => { pressedKeys.clear(); renderKeyboardTest(); });
    document.addEventListener('visibilitychange', () => { if (document.hidden) { pressedKeys.clear(); renderKeyboardTest(); } });
    renderCalibrationStatus();
  }

  function togglePanel() { $('driver-tools-panel').classList.toggle('open'); $('driver-tools-toggle').setAttribute('aria-expanded', String($('driver-tools-panel').classList.contains('open'))); }
  function openPanel() { $('driver-tools-panel').classList.add('open'); $('driver-tools-toggle').setAttribute('aria-expanded', 'true'); }
  function closePanel() { $('driver-tools-panel').classList.remove('open'); $('driver-tools-toggle').setAttribute('aria-expanded', 'false'); }
  function selectTab(name) {
    document.querySelectorAll('.dt-tab').forEach(tab => { const active = tab.dataset.tab === name; tab.classList.toggle('active', active); tab.setAttribute('aria-selected', String(active)); });
    $('dt-view-monitor').hidden = name !== 'monitor';
    $('dt-view-controller').hidden = name !== 'controller';
    $('dt-view-devices').hidden = name !== 'devices';
    if (name === 'devices' && serverAvailable) loadCameras();
  }
  function setEyeStatus(message, level = 'normal') { const el = $('eye-status'); if (el) { el.textContent = message; el.dataset.level = level; } }
  function setEyeDebug(message) { if ($('eye-debug')) $('eye-debug').textContent = message; }

  async function requestJson(path, options = {}) {
    const response = await fetch(path, { cache: 'no-store', ...options });
    let data = {}; try { data = await response.json(); } catch (_) {}
    if (!response.ok || data.ok === false) throw new Error(data.message || `Local server returned HTTP ${response.status}`);
    return data;
  }
  async function apiPost(path, payload = {}) {
    return requestJson(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  }
  function setConfigFromServer(value) {
    if (!value || typeof value !== 'object') return;
    config = { ...structuredCloneSafe(DEFAULT_CONFIG), ...value };
    // Accept the old key names when upgrading an existing browser profile.
    config.throttleChannel = Number(config.throttleChannel ?? config.throttleAxis ?? 4);
    config.brakeChannel = Number(config.brakeChannel ?? config.brakeAxis ?? 3);
    syncConfigControls();
  }
  async function initializeRemoteConfig() {
    try {
      const data = await requestJson('/api/controller/config');
      if (!data.configured) {
        const local = readLocalConfig();
        if (local) {
          const migrated = await apiPost('/api/controller/config', local);
          setConfigFromServer(migrated.config);
          $('controller-config-status').textContent = 'Imported your previous browser controller settings into Python.';
        } else setConfigFromServer(data.config);
      } else setConfigFromServer(data.config);
    } catch (error) {
      $('controller-config-status').textContent = `Cannot load Python controller settings: ${error.message}`;
    }
  }
  function syncConfigControls() {
    if (!$('map-steer')) return;
    $('map-steer-invert').checked = Boolean(config.steerInvert);
    $('map-throttle-type').value = config.throttleType || 'axis';
    $('map-brake-type').value = config.brakeType || 'axis';
    refreshInputSelectors();
    renderCalibrationStatus();
  }
  function updateConfig(patch) {
    config = { ...config, ...patch };
    syncConfigControls();
    configSaveQueue = configSaveQueue.then(async () => {
      try {
        const result = await apiPost('/api/controller/config', config);
        setConfigFromServer(result.config);
        $('controller-config-status').textContent = result.message || 'Saved by Python.';
      } catch (error) {
        $('controller-config-status').textContent = `Settings were not saved: ${error.message}`;
      }
    });
    return configSaveQueue;
  }

  async function startEyeMonitoring() {
    if (!serverAvailable) { setEyeStatus('Python server is not responding. Start server.py from the simulator folder.', 'critical'); return; }
    $('eye-start').disabled = true; $('eye-start').textContent = 'Starting camera…';
    setEyeStatus('Starting selected OpenCV camera and MediaPipe detector…');
    try {
      const data = await apiPost('/api/eye/start');
      eyeEnabled = true;
      $('eye-preview').src = `/api/camera.mjpg?start=${Date.now()}`;
      $('eye-preview-wrap').classList.add('visible');
      $('eye-start').hidden = true; $('eye-stop').hidden = false;
      setEyeStatus(data.message || 'Eye monitoring started.');
    } catch (error) {
      setEyeStatus(`Camera start failed: ${error.message}`, 'critical');
      $('eye-start').disabled = false; $('eye-start').textContent = 'Retry camera';
    }
  }
  async function stopEyeMonitoring() {
    try { await apiPost('/api/eye/stop'); } catch (error) { setEyeStatus(`Stop request failed: ${error.message}`, 'critical'); }
    eyeEnabled = false; $('eye-preview').removeAttribute('src'); $('eye-preview-wrap').classList.remove('visible');
    $('eye-start').hidden = false; $('eye-start').disabled = false; $('eye-start').textContent = 'Start eye monitoring'; $('eye-stop').hidden = true;
    window.__truckEyeState = { warning: false, emergency: false, alarmActive: false, message: 'Eye monitoring off' };
    $('eye-mode').textContent = 'OFF'; setEyeStatus('Eye monitoring stopped.'); setEyeDebug('Camera stopped.');
    $('drowsy-alert').classList.remove('show', 'warning');
  }
  async function testAlarmSound() {
    $('eye-test').disabled = true;
    try { const data = await apiPost('/api/alarm/test'); setEyeStatus(data.message || 'Alarm test played.'); }
    catch (error) { setEyeStatus(`Alarm test failed: ${error.message}`, 'critical'); }
    finally { $('eye-test').disabled = false; }
  }
  function updateEyeState(eye) {
    if (!eye) return;
    const enabled = Boolean(eye.enabled);
    eyeEnabled = enabled || (eyeEnabled && eye.status === 'STARTING');
    const emergency = Boolean(eye.emergency), warning = Boolean(eye.warning);
    window.__truckEyeState = {
      warning, emergency, driverNotVisible: Boolean(eye.driverNotVisible),
      eyesClosed: Boolean(eye.eyesClosed), closureDuration: Number(eye.closureDuration || 0),
      alarmActive: Boolean(eye.alarmActive), leftClosure: eye.leftClosure ?? null,
      rightClosure: eye.rightClosure ?? null, message: eye.message || eye.status || 'Waiting for eye monitor'
    };
    $('eye-mode').textContent = eye.status || (enabled ? 'ACTIVE' : 'OFF');
    $('eye-mode').className = `dt-pill ${emergency ? 'red' : warning ? 'amber' : enabled ? 'green' : 'neutral'}`;
    $('camera-face-state').textContent = eye.driverNotVisible ? 'FACE NOT VISIBLE' : eye.eyesClosed ? 'EYES CLOSED' : enabled ? 'FACE TRACKED' : 'CAMERA OFF';
    const left = eye.leftClosure == null ? null : Number(eye.leftClosure);
    const right = eye.rightClosure == null ? null : Number(eye.rightClosure);
    $('eye-left-value').textContent = left == null ? '--' : left.toFixed(2);
    $('eye-right-value').textContent = right == null ? '--' : right.toFixed(2);
    $('eye-left-meter').style.width = `${clamp((left || 0) * 100, 0, 100)}%`;
    $('eye-right-meter').style.width = `${clamp((right || 0) * 100, 0, 100)}%`;
    if (enabled) {
      $('eye-start').hidden = true; $('eye-stop').hidden = false; $('eye-preview-wrap').classList.add('visible');
      if (!$('eye-preview').getAttribute('src')) $('eye-preview').src = `/api/camera.mjpg?auto=${Date.now()}`;
    } else if (eye.status === 'STARTING') { $('eye-start').disabled = true; $('eye-start').textContent = 'Starting camera…'; }
    if (eye.message && eye.message !== lastEyeStatus) {
      setEyeStatus(eye.message, emergency ? 'critical' : warning ? 'warning' : eye.error ? 'critical' : 'normal');
      lastEyeStatus = eye.message;
    }
    setEyeDebug(eye.debug || eye.error || 'Waiting for face analysis…');
    const alert = $('drowsy-alert');
    alert.textContent = eye.driverNotVisible ? 'DRIVER NOT VISIBLE · EMERGENCY BRAKING ACTIVE' : emergency ? 'EYES CLOSED TOO LONG · ALARM + EMERGENCY BRAKING ACTIVE' : warning ? 'DROWSINESS WARNING · OPEN YOUR EYES' : '';
    alert.classList.toggle('show', warning || emergency || Boolean(eye.driverNotVisible));
    alert.classList.toggle('warning', warning && !emergency && !eye.driverNotVisible);
    $('launcher-state').textContent = emergency ? 'DANGER' : warning ? 'WARNING' : enabled ? 'MONITORING' : latestController?.connected ? 'WHEEL READY' : 'STANDBY';
    $('driver-tools-toggle').dataset.state = enabled ? (warning || emergency ? 'alert' : 'active') : 'off';
    if (eye.status === 'ERROR') {
      $('eye-start').hidden = false; $('eye-start').disabled = false; $('eye-start').textContent = 'Retry camera';
      $('eye-stop').hidden = true; $('eye-preview-wrap').classList.remove('visible'); $('eye-preview').removeAttribute('src'); eyeEnabled = false;
    }
    if (eye.status === 'OFF' && !enabled && !eyeEnabled) {
      $('eye-preview').removeAttribute('src'); $('eye-preview-wrap').classList.remove('visible');
      $('eye-start').hidden = false; $('eye-start').disabled = false; $('eye-start').textContent = 'Start eye monitoring'; $('eye-stop').hidden = true;
    }
  }

  function populateSelect(id, count, prefix, chosen) {
    const el = $(id); if (!el) return;
    const options = Array.from({ length: Math.max(0, count) }, (_, i) => `<option value="${i}">${prefix} ${i}</option>`).join('');
    el.innerHTML = `<option value="-1">Not assigned</option>${options}`;
    el.value = count && Number(chosen) >= 0 && Number(chosen) < count ? String(chosen) : '-1';
  }
  function refreshInputSelectors(axisCount = latestController?.axes?.length || 0, buttonCount = latestController?.buttons?.length || 0) {
    populateSelect('map-steer', axisCount, 'Axis', config.steerAxis);
    $('map-throttle-type').value = config.throttleType || 'axis';
    $('map-brake-type').value = config.brakeType || 'axis';
    populateSelect('map-throttle-channel', config.throttleType === 'button' ? buttonCount : axisCount, config.throttleType === 'button' ? 'Button' : 'Axis', config.throttleChannel);
    populateSelect('map-brake-channel', config.brakeType === 'button' ? buttonCount : axisCount, config.brakeType === 'button' ? 'Button' : 'Axis', config.brakeChannel);
    $('throttle-calibration').classList.toggle('disabled', config.throttleType === 'button');
    $('brake-calibration').classList.toggle('disabled', config.brakeType === 'button');
  }
  function renderCalibrationStatus() {
    for (const kind of ['throttle', 'brake']) {
      const cal = config[`${kind}Calibration`] || {};
      const isButton = config[`${kind}Type`] === 'button';
      const calibrated = Number.isFinite(cal.rest) && Number.isFinite(cal.pressed) && Math.abs(cal.pressed - cal.rest) >= 0.18;
      const label = isButton ? 'BUTTON MAPPED' : calibrated ? 'CALIBRATED' : 'PYTHON DEFAULT';
      $(`${kind}-cal-status`).textContent = label;
      $(`${kind}-cal-status`).classList.toggle('ready', isButton || calibrated);
      $(`${kind}-pedal-value`).textContent = isButton ? 'Digital paddle mapped; Python reads its pressed/released state.' : calibrated ? `Released ${cal.rest.toFixed(2)} · Fully pressed ${cal.pressed.toFixed(2)} · Python normalises the travel.` : 'Uses the original Pygame threshold raw value > -0.5. Capture released and fully pressed positions to override it.';
    }
  }
  async function captureRemote(kind, point) {
    try {
      const result = await apiPost('/api/controller/calibrate', { kind, point });
      setConfigFromServer(result.config);
      $('controller-config-status').textContent = result.message || 'Captured by Python.';
    } catch (error) { $('controller-config-status').textContent = `Calibration failed: ${error.message}`; }
  }
  async function resetMappings() {
    try {
      const result = await apiPost('/api/controller/reset');
      setConfigFromServer(result.config);
      $('controller-config-status').textContent = result.message || 'Mappings reset.';
    } catch (error) { $('controller-config-status').textContent = `Reset failed: ${error.message}`; }
  }
  async function clearCalibrations() {
    await updateConfig({ throttleCalibration: { rest: null, pressed: null }, brakeCalibration: { rest: null, pressed: null } });
    $('controller-config-status').textContent = 'Pedal calibrations cleared. Original Python thresholds are active.';
  }

  function refreshDeviceOptions(controller) {
    const devices = controller?.devices || [];
    const signature = `${devices.map(d => `${d.index}:${d.name}`).join('|')}|selected:${config.deviceIndex ?? -1}`;
    if (signature !== deviceListSignature) {
      deviceListSignature = signature;
      const selected = Number(config.deviceIndex ?? -1);
      const selectedMissing = selected >= 0 && !devices.some(d => Number(d.index) === selected);
      const missingOption = selectedMissing ? `<option value="${selected}">Selected device ${selected} · not currently detected</option>` : '';
      $('controller-device').innerHTML = '<option value="-1">Automatic · first available</option>' + missingOption + devices.map(d => `<option value="${Number(d.index)}">${String(d.name).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))} · ${d.index}</option>`).join('');
    }
    $('controller-device').value = String(config.deviceIndex ?? -1);
  }
  function updateController(controller) {
    latestController = controller || null;
    const connected = Boolean(controller?.connected);
    $('controller-status').textContent = connected ? 'CONNECTED' : 'DISCONNECTED';
    $('controller-status').className = `dt-pill ${connected ? 'green' : 'neutral'}`;
    $('controller-name').textContent = connected ? (controller.name || 'Steering wheel') : 'No steering wheel detected';
    $('controller-summary').textContent = connected ? `${(controller.axes || []).length} axes · ${(controller.buttons || []).length} buttons · Python/Pygame` : 'Python is scanning for the selected controller.';
    $('controller-test-state').textContent = connected ? 'LIVE INPUT' : 'WAITING';
    $('controller-test-state').className = `dt-pill ${connected ? 'green' : 'neutral'}`;
    $('controller-test-name').textContent = connected ? (controller.name || 'External controller') : 'No controller connected';
    $('controller-device-count').textContent = connected ? `${controller.axisCount ?? controller.axes?.length ?? 0} axes · ${controller.buttonCount ?? controller.buttons?.length ?? 0} buttons · ${controller.hatCount ?? controller.hats?.length ?? 0} hats · Pygame` : 'Reconnect the controller or select Automatic.';
    refreshDeviceOptions(controller);
    if (connected) {
      renderAxisList(controller); renderButtons(controller);
      const controls = controller.controls || {};
      window.__truckGamepad = {
        ...EMPTY_PAD(), ...controls, connected: true,
        axes: controller.axes || [], buttons: controller.buttons || [], hats: controller.hats || [],
        id: controller.name || 'Steering wheel'
      };
      $('launcher-state').textContent = window.__truckEyeState?.emergency ? 'DANGER' : window.__truckEyeState?.warning ? 'WARNING' : 'WHEEL READY';
    } else {
      window.__truckGamepad = EMPTY_PAD();
      renderAxisList(null); renderButtons(null);
      $('launcher-state').textContent = eyeEnabled ? 'MONITORING' : 'STANDBY';
    }
    $('steer-live-value').textContent = `STEER ${Number(window.__truckGamepad.steer || 0).toFixed(2)}`;
    $('throttle-pedal-meter').style.width = `${clamp(Number(window.__truckGamepad.throttleValue || 0) * 100, 0, 100)}%`;
    $('brake-pedal-meter').style.width = `${clamp(Number(window.__truckGamepad.brakeValue || 0) * 100, 0, 100)}%`;
  }
  function renderAxisList(controller) {
    const axes = controller?.axes || [];
    const signature = `${axes.length}:${controller?.buttons?.length || 0}`;
    if (axisListSignature !== signature) {
      axisListSignature = signature;
      $('axis-list').innerHTML = axes.length ? axes.map((_, i) => `<div class="dt-axis-row" data-axis-row="${i}"><span>AXIS ${i}</span><div class="dt-axis-track"><i></i><b></b></div><strong>0.00</strong></div>`).join('') : '<div class="dt-empty">No axes reported by the device.</div>';
      refreshInputSelectors(axes.length, controller?.buttons?.length || 0);
    }
    axes.forEach((raw, i) => {
      const row = document.querySelector(`[data-axis-row="${i}"]`); if (!row) return;
      const value = clamp(Number(raw) || 0, -1, 1);
      const track = row.querySelector('.dt-axis-track');
      track.querySelector('i').style.left = `${(value + 1) * 50}%`;
      track.querySelector('b').style.width = `${Math.abs(value) * 50}%`;
      track.querySelector('b').style.left = value >= 0 ? '50%' : `${(value + 1) * 50}%`;
      row.querySelector('strong').textContent = value.toFixed(2);
      row.classList.toggle('mapped', config.steerAxis === i || (config.throttleType === 'axis' && config.throttleChannel === i) || (config.brakeType === 'axis' && config.brakeChannel === i));
    });
  }
  function renderButtons(controller) {
    const buttons = controller?.buttons || [];
    if (buttonListSignature !== buttons.length) {
      buttonListSignature = buttons.length;
      $('button-list').innerHTML = buttons.length ? buttons.map((_, i) => `<div class="dt-button-state" data-button="${i}"><span>B${i}</span><i></i></div>`).join('') : '<div class="dt-empty">No buttons reported by the device.</div>';
    }
    buttons.forEach((pressed, i) => {
      const item = document.querySelector(`[data-button="${i}"]`);
      if (item) item.classList.toggle('pressed', Boolean(pressed));
    });
    const hats = controller?.hats || [];
    $('hat-list').textContent = hats.length ? hats.map((hat, i) => `HAT ${i}: ${hat[0]}, ${hat[1]}`).join('  ·  ') : 'No hat switches reported';
  }

  async function scanControllers() {
    $('controller-rescan').disabled = true;
    $('controller-config-status').textContent = 'Asking Python/Pygame to rescan attached controllers…';
    try {
      const result = await requestJson('/api/controller/devices');
      deviceListSignature = '';
      refreshDeviceOptions({ devices: result.devices || [] });
      $('controller-config-status').textContent = `${(result.devices || []).length} controller device(s) detected by Python.`;
    } catch (error) {
      $('controller-config-status').textContent = `Controller scan failed: ${error.message}`;
    } finally { $('controller-rescan').disabled = false; }
  }
  async function loadCameras() {
    $('camera-rescan').disabled = true;
    $('camera-device-state').textContent = 'SCANNING';
    try {
      const data = await requestJson('/api/cameras');
      const devices = data.devices || [];
      const signature = devices.map(d => `${d.index}:${d.name}:${Boolean(d.busy)}:${d.available !== false}`).join('|');
      if (signature !== cameraListSignature) {
        cameraListSignature = signature;
        $('driver-camera-select').innerHTML = devices.length
          ? devices.map(d => `<option value="${Number(d.index)}">${String(d.name)}${d.busy ? ' · IN USE' : d.available === false ? ' · NOT FOUND' : ''}</option>`).join('')
          : '<option value="0">No cameras detected</option>';
      }
      $('driver-camera-select').value = String(data.selectedIndex ?? 0);
      const availableCount = devices.filter(d => d.available !== false).length;
      $('camera-device-state').textContent = availableCount ? `${availableCount} FOUND` : 'NONE FOUND';
      $('camera-device-state').className = `dt-pill ${availableCount ? 'green' : 'amber'}`;
      $('camera-device-status').textContent = availableCount
        ? `Detected ${devices.filter(d => d.available !== false).map(d => `${d.name} (${d.index})`).join(', ')}. Current source: Camera ${data.selectedIndex}.`
        : `No camera is currently available. Saved source: Camera ${data.selectedIndex}. Check the USB connection and permissions.`;
    } catch (error) {
      $('camera-device-state').textContent = 'SERVER ERROR';
      $('camera-device-state').className = 'dt-pill red';
      $('camera-device-status').textContent = `Camera scan failed: ${error.message}`;
    } finally { $('camera-rescan').disabled = false; }
  }
  async function applyCamera() {
    const index = Number($('driver-camera-select').value);
    $('camera-apply').disabled = true;
    $('camera-device-status').textContent = `Switching driver camera to Camera ${index}…`;
    try {
      const result = await apiPost('/api/camera/select', { index });
      $('camera-device-status').textContent = result.message || `Driver camera switched to Camera ${index}.`;
      await loadCameras();
    } catch (error) { $('camera-device-status').textContent = `Camera change failed: ${error.message}`; }
    finally { $('camera-apply').disabled = false; }
  }

  function onKeyDown(event) {
    if (event.repeat) return;
    pressedKeys.add(event.code); renderKeyboardTest();
    $('keyboard-last-event').textContent = `${event.code} · ${event.key || event.code} · KEY DOWN`;
  }
  function onKeyUp(event) {
    pressedKeys.delete(event.code); renderKeyboardTest();
    $('keyboard-last-event').textContent = `${event.code} · KEY UP`;
  }
  function renderKeyboardTest() {
    document.querySelectorAll('.dt-key-item').forEach(item => {
      const keys = item.dataset.keys.split(',');
      item.classList.toggle('active', keys.some(key => pressedKeys.has(key)));
    });
  }
  async function pollServer() {
    if (pollInFlight) return;
    pollInFlight = true;
    try {
      const data = await requestJson('/api/state'); serverAvailable = true;
      updateEyeState(data.eye);
      updateController(data.controller || null);
      if (data.camera?.selectedIndex != null && $('driver-camera-select') && !$('driver-camera-select').matches(':focus')) {
        // Keep the selector consistent after a server-side camera restart without
        // rebuilding it on every state tick.
        if ($('driver-camera-select').options.length && [...$('driver-camera-select').options].some(o => Number(o.value) === Number(data.camera.selectedIndex))) {
          $('driver-camera-select').value = String(data.camera.selectedIndex);
        }
      }
    } catch (error) {
      serverAvailable = false; updateController(null);
      if (!lastEyeStatus.startsWith('Python server')) {
        setEyeStatus('Python server is not responding. Run server.py from the simulator folder.', 'critical');
        lastEyeStatus = 'Python server is not responding';
      }
    } finally {
      pollInFlight = false;
    }
  }
  function startPolling() {
    if (statePollTimer) clearInterval(statePollTimer);
    // Python samples the wheel at 50 Hz; this bridge refreshes browser controls
    // at 25 Hz to keep steering smooth without overlapping HTTP requests.
    statePollTimer = setInterval(pollServer, 40); pollServer();
  }

  function init() {
    buildUI();
    startPolling();
    initializeRemoteConfig();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
