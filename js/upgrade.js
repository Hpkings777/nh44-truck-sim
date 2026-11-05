/* NH44 Truck Simulator — Premium Upgrade Pack (v1)
 * Runtime patch layered on top of the shipped minified game (simulator.js).
 * It never rewrites the bundle: it harvests the game's own THREE classes from
 * live objects, then patches lighting, textures, biomes, trucks, props and
 * the cabin at runtime. Safe no-ops if any handle is missing.
 */
(function () {
  'use strict';
  var LOG = '[NH44-UPGRADE]';
  /* Phased rollout: Phase 1 = sun/bloom fix (WS4) + impeccable UI (WS1) only.
   * Phase 2 builders (trucks, maps, photo textures, cabin) stay inert until
   * window.__NH44_PHASE is set to 2 BEFORE upgrade.js runs. */
  var PHASE = (window.__NH44_PHASE === 2) ? 2 : 1;
  function log() { try { console.log.apply(console, [LOG].concat([].slice.call(arguments))); } catch (e) {} }

  function whenReady(cb) {
    if (window.__truckSimulator) return cb(window.__truckSimulator);
    var tries = 0;
    var iv = setInterval(function () {
      tries++;
      if (window.__truckSimulator) { clearInterval(iv); cb(window.__truckSimulator); }
      else if (tries > 200) { clearInterval(iv); log('simulator never appeared'); }
    }, 100);
  }

  /* ------------------------------------------------------------------ */
  /* 1. Harvest THREE constructors from live game objects                */
  /* ------------------------------------------------------------------ */
  function harvest(sim) {
    var T = {};
    function findMesh(root, pred) {
      var found = null;
      try {
        root.traverse(function (o) { if (!found && o.isMesh && pred(o)) found = o; });
      } catch (e) {}
      return found;
    }
    var scene = sim.scene, rig = sim.playerRig || {};
    T.Group = (rig.tractorRoot && rig.tractorRoot.constructor) || scene.constructor;
    T.Mesh = (rig.rpmNeedle && rig.rpmNeedle.constructor) || null;
    var geoNames = ['BoxGeometry', 'CylinderGeometry', 'TorusGeometry', 'PlaneGeometry', 'ConeGeometry', 'SphereGeometry', 'IcosahedronGeometry'];
    geoNames.forEach(function (name) {
      var m = findMesh(scene, function (o) { return o.geometry && o.geometry.type === name; })
        || (rig.cabinSuspensionGroup && findMesh(rig.cabinSuspensionGroup, function (o) { return o.geometry && o.geometry.type === name; }));
      if (m) T[name] = m.geometry.constructor;
    });
    ['MeshStandardMaterial', 'MeshBasicMaterial', 'MeshPhysicalMaterial'].forEach(function (name) {
      var m = findMesh(scene, function (o) { return o.material && o.material.type === name; });
      if (m) T[name] = m.material.constructor;
    });
    var tex = sim.textures && (sim.textures.asphaltMap || sim.textures.terrainMap);
    if (tex) T.CanvasTexture = tex.constructor;
    T.Color = (sim.fogColor && sim.fogColor.constructor) || (sim.sunLight && sim.sunLight.color.constructor);
    T.Vector3 = (sim.camera && sim.camera.position.constructor) || null;
    T.Vector2 = null;
    // Vector2 via texture repeat object
    if (tex && tex.repeat) T.Vector2 = tex.repeat.constructor;
    return T;
  }

  /* ------------------------------------------------------------------ */
  /* 2. Procedural canvas textures (seat fabric, curtains, signs, ...)   */
  /* ------------------------------------------------------------------ */
  function makeCanvas(w, h, draw) {
    var c = document.createElement('canvas');
    c.width = w; c.height = h;
    draw(c.getContext('2d'), w, h);
    return c;
  }
  function canvasTexture(T, canvas, opts) {
    var t = new T.CanvasTexture(canvas);
    t.wrapS = 1000; t.wrapT = 1000; // RepeatWrapping
    if (opts && opts.repeat) t.repeat.set(opts.repeat[0], opts.repeat[1]);
    if (opts && opts.colorSpace === false) { /* keep linear */ } else { t.colorSpace = 'srgb'; }
    t.anisotropy = 4;
    t.needsUpdate = true;
    return t;
  }
  function patternSeatCover() {
    return makeCanvas(256, 256, function (g, w, h) {
      g.fillStyle = '#7f1d1d'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#f59e0b'; g.lineWidth = 5;
      for (var y = 0; y <= h; y += 64) for (var x = 0; x <= w; x += 64) {
        g.beginPath(); g.moveTo(x + 32, y); g.lineTo(x + 64, y + 32); g.lineTo(x + 32, y + 64); g.lineTo(x, y + 32); g.closePath(); g.stroke();
        g.fillStyle = '#fbbf24'; g.beginPath(); g.arc(x + 32, y + 32, 6, 0, 7); g.fill();
      }
      g.fillStyle = 'rgba(0,0,0,0.18)';
      for (var i = 0; i < 300; i++) g.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    });
  }
  function patternCurtain() {
    return makeCanvas(256, 256, function (g, w, h) {
      g.fillStyle = '#991b1b'; g.fillRect(0, 0, w, h);
      for (var x = 0; x < w; x += 32) {
        g.fillStyle = (x / 32) % 2 ? '#f8fafc' : '#dc2626';
        g.fillRect(x, 0, 16, h);
      }
      g.fillStyle = 'rgba(255,255,255,0.12)';
      for (var x = 0; x < w; x += 16) g.fillRect(x, 0, 3, h);
      g.fillStyle = '#f59e0b'; g.fillRect(0, 0, w, 10); g.fillRect(0, h - 10, w, 10);
    });
  }
  function patternWheelCover() {
    return makeCanvas(256, 256, function (g, w, h) {
      g.fillStyle = '#450a0a'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#b45309'; g.lineWidth = 3;
      for (var x = 0; x < w; x += 32) {
        g.beginPath(); g.moveTo(x, 0); g.lineTo(x + 16, h); g.stroke();
        g.beginPath(); g.moveTo(x + 16, 0); g.lineTo(x, h); g.stroke();
      }
      g.fillStyle = 'rgba(0,0,0,0.25)';
      for (var i = 0; i < 200; i++) g.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    });
  }
  function patternTruckArt() {
    return makeCanvas(512, 128, function (g, w, h) {
      g.fillStyle = '#111827'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#f59e0b'; g.font = 'bold 44px sans-serif'; g.textAlign = 'center';
      g.fillText('HORN OK PLEASE', w / 2, 58);
      g.fillStyle = '#f8fafc'; g.font = 'bold 26px sans-serif';
      g.fillText('USE DIPPER AT NIGHT  •  NH-44', w / 2, 102);
    });
  }
  function photoFrameCanvas() {
    return makeCanvas(128, 96, function (g, w, h) {
      var grad = g.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#f59e0b'); grad.addColorStop(1, '#b45309');
      g.fillStyle = grad; g.fillRect(0, 0, w, h);
      g.fillStyle = '#fef3c7'; g.beginPath(); g.arc(38, 44, 16, 0, 7); g.fill();
      g.beginPath(); g.arc(78, 52, 20, 0, 7); g.fill();
      g.fillStyle = '#78350f'; g.fillRect(24, 66, 80, 6);
    });
  }
  function windowSignCanvas() {
    return makeCanvas(512, 256, function (g, w, h) {
      g.fillStyle = '#1e3a8a'; g.fillRect(0, 0, w, h);
      for (var r = 0; r < 4; r++) for (var c = 0; c < 8; c++) {
        g.fillStyle = (r + c) % 3 ? '#fde68a' : '#93c5fd';
        g.fillRect(14 + c * 60, 14 + r * 56, 44, 40);
      }
      g.fillStyle = 'rgba(2,6,23,0.55)'; g.fillRect(0, h - 52, w, 52);
      g.fillStyle = '#fff'; g.font = 'bold 30px sans-serif'; g.textAlign = 'center';
      g.fillText('PUNJAB  •  HARYANA  •  DELHI', w / 2, h - 16);
    });
  }
  function containerLiveryCanvas(style) {
    var palettes = {
      bharat: { bg: '#1e3a8a', band: '#f59e0b', big: '#ffffff', small: '#fbbf24' },
      express: { bg: '#7c2d12', band: '#fbbf24', big: '#ffffff', small: '#fde68a' },
      himalayan: { bg: '#14532d', band: '#f8fafc', big: '#ffffff', small: '#bbf7d0' }
    };
    var p = palettes[style] || palettes.bharat;
    return makeCanvas(1024, 512, function (g, w, h) {
      g.fillStyle = p.bg; g.fillRect(0, 0, w, h);
      g.fillStyle = 'rgba(255,255,255,0.06)';
      for (var x = 0; x < w; x += 64) g.fillRect(x, 0, 10, h);
      g.fillStyle = p.band; g.fillRect(0, 150, w, 14); g.fillRect(0, h - 60, w, 10);
      g.fillStyle = p.big; g.font = 'bold 92px sans-serif'; g.textAlign = 'center';
      var title = style === 'express' ? 'NH-44 EXPRESS' : style === 'himalayan' ? 'HIMALAYAN CARGO' : 'BHARAT FREIGHT CORRIDOR';
      g.fillText(title, w / 2, 120);
      g.fillStyle = p.small; g.font = 'bold 46px sans-serif';
      g.fillText('NH-44 GRAND TRUNK EXPRESS  •  HEAVY HAUL LOGISTICS', w / 2, 250);
      g.fillStyle = '#e2e8f0'; g.font = '600 34px sans-serif';
      g.fillText('SPEED LIMIT 80 KM/H  •  KEEP 15M DISTANCE', w / 2, 330);
      g.font = '600 28px monospace';
      g.fillText('BFCU 449280-7   •   MAX GROSS 32000 KG', w / 2, 420);
    });
  }

  /* ------------------------------------------------------------------ */
  /* 3. Photo texture loader (assets/textures/*.jpg, CC0)                */
  /* ------------------------------------------------------------------ */
  var photoCache = {};
  function loadPhoto(url) {
    if (photoCache[url]) return photoCache[url];
    var p = new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () { resolve(img); };
      img.onerror = function () { reject(new Error('photo load failed: ' + url)); };
      img.src = url;
    });
    photoCache[url] = p;
    return p;
  }
  function swapTextureImage(tex, img) {
    try {
      tex.image = img;
      tex.needsUpdate = true;
      return true;
    } catch (e) { log('swapTextureImage failed', e); return false; }
  }
  function applyPhotoTextures(sim, T) {
    var map = {
      asphaltMap: 'assets/textures/asphalt_road.jpg',
      terrainMap: 'assets/textures/dry_grass.jpg',
      guardrailMap: 'assets/textures/steel_guardrail.jpg',
      concreteMap: 'assets/textures/concrete.jpg',
      barkMap: 'assets/textures/bark.jpg'
    };
    Object.keys(map).forEach(function (key) {
      var tex = sim.textures && sim.textures[key];
      if (!tex) return;
      loadPhoto(map[key]).then(function (img) {
        if (swapTextureImage(tex, img)) log('photo texture applied:', key);
      }).catch(function (e) { log(e.message); });
    });
  }

  /* ------------------------------------------------------------------ */
  /* 4. Sun / bloom / sky tune (WS4) — also re-applied after presets     */
  /* ------------------------------------------------------------------ */
  var SUN_TUNE = {
    golden: { mie: 0.0022, sun: 1.7, hemi: 0.82, exposure: 0.86 },
    day: { mie: 0.0016, sun: 1.85, hemi: 0.92, exposure: 0.88 },
    night: { mie: 0.0016, sun: 0.28, hemi: 0.25, exposure: 0.92 }
  };
  function tuneSun(sim) {
    try {
      var preset = sim.timeOfDay || 'golden';
      var tune = SUN_TUNE[preset] || SUN_TUNE.golden;
      if (sim.skyUniforms) {
        if (sim.skyUniforms.mieCoefficient) sim.skyUniforms.mieCoefficient.value = tune.mie;
        if (sim.skyUniforms.mieDirectionalG) sim.skyUniforms.mieDirectionalG.value = 0.72;
      }
      if (sim.sunLight) sim.sunLight.intensity = tune.sun;
      if (sim.hemiLight) sim.hemiLight.intensity = tune.hemi;
      if (sim.renderer) sim.renderer.toneMappingExposure = tune.exposure;
      // bloom pass (only exists on hardware GL, i.e. real phones)
      if (sim.composer && sim.composer.passes) {
        sim.composer.passes.forEach(function (pass) {
          if (pass && typeof pass.strength === 'number' && pass.constructor && /Bloom/i.test(pass.constructor.name)) {
            pass.strength = 0.05; pass.radius = 0.35; pass.threshold = 2.0;
          }
        });
      }
      log('sun tuned for preset', preset);
    } catch (e) { log('tuneSun failed', e); }
  }
  function patchLightingPreset(sim) {
    try {
      var proto = Object.getPrototypeOf(sim);
      if (!proto || proto.__nh44SunPatched) return;
      var orig = proto.applyLightingPreset;
      if (typeof orig !== 'function') return;
      proto.applyLightingPreset = function (e, t) {
        var r = orig.call(this, e, t);
        tuneSun(this);
        return r;
      };
      proto.__nh44SunPatched = true;
      log('applyLightingPreset patched');
    } catch (e) { log('patchLightingPreset failed', e); }
  }

  /* ------------------------------------------------------------------ */
  /* 5. Small helpers                                                     */
  /* ------------------------------------------------------------------ */
  function mat(T, color, opts) {
    opts = opts || {};
    var m = new T.MeshStandardMaterial({ color: color, roughness: opts.roughness != null ? opts.roughness : 0.85, metalness: opts.metalness || 0 });
    if (opts.map) m.map = opts.map;
    if (opts.emissive) { m.emissive = new T.Color(opts.emissive); m.emissiveIntensity = opts.emissiveIntensity != null ? opts.emissiveIntensity : 1; }
    if (opts.side) m.side = opts.side;
    if (opts.transparent) { m.transparent = true; m.opacity = opts.opacity != null ? opts.opacity : 0.9; }
    return m;
  }
  function box(T, w, h, d, material) { var m = new T.Mesh(new T.BoxGeometry(w, h, d), material); return m; }
  function cyl(T, rt, rb, h, material, seg) { return new T.Mesh(new T.CylinderGeometry(rt, rb, h, seg || 14), material); }
  function sphereGeo(T, r, w, h) {
    if (T.SphereGeometry) return new T.SphereGeometry(r, w || 12, h || 10);
    return new T.IcosahedronGeometry(r, 1); // fallback: low-poly sphere
  }
  function place(obj, x, y, z, rx, ry, rz) {
    obj.position.set(x, y, z);
    if (rx) obj.rotation.x = rx;
    if (ry) obj.rotation.y = ry;
    if (rz) obj.rotation.z = rz;
    return obj;
  }
  function smoothstep(a, b, x) { var t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); }

  /* ------------------------------------------------------------------ */
  /* 6. Cabin decor (WS6) — real Indian truck cabin                     */
  /* ------------------------------------------------------------------ */
  var cabinRefs = {};
  function buildCabinDecor(sim, T) {
    var cab = sim.playerRig && sim.playerRig.cabinSuspensionGroup;
    if (!cab || !T.BoxGeometry || !T.CylinderGeometry || !T.TorusGeometry || !T.PlaneGeometry) { log('cabin decor skipped: missing constructors'); return; }
    var g = new T.Group();
    g.name = 'NH44CabinDecor';

    var seatTex = canvasTexture(T, patternSeatCover());
    var curtainTex = canvasTexture(T, patternCurtain());
    var frameTex = canvasTexture(T, photoFrameCanvas());
    var artTex = canvasTexture(T, patternTruckArt());

    /* --- hanging tassel from overhead console (sways in rAF) --- */
    var tassel = new T.Group();
    tassel.add(place(cyl(T, 0.008, 0.008, 0.22, mat(T, 0x78350f, { roughness: 0.9 })), 0, -0.11, 0));
    var beadM = mat(T, 0xdc2626, { roughness: 0.35 });
    var goldM = mat(T, 0xf59e0b, { roughness: 0.3, metalness: 0.7 });
    [-0.24, -0.29, -0.34].forEach(function (y, i) {
      var bead = new T.Mesh(sphereGeo(T, 0.022, 10, 8), i % 2 ? goldM : beadM);
      tassel.add(place(bead, 0, y, 0));
    });
    var fringe = new T.Mesh(new T.ConeGeometry(0.045, 0.16, 10), mat(T, 0xea580c, { roughness: 0.9 }));
    tassel.add(place(fringe, 0, -0.45, 0, Math.PI, 0, 0));
    tassel.position.set(0, 3.02, -2.28);
    g.add(tassel);
    cabinRefs.tassel = tassel;

    /* --- dashboard idol (stylised gold murti) + photo frame --- */
    var idol = new T.Group();
    idol.add(place(cyl(T, 0.055, 0.065, 0.02, mat(T, 0x7c2d12, { roughness: 0.7 })), 0, 0.01, 0));
    idol.add(place(new T.Mesh(sphereGeo(T, 0.038, 12, 10), goldM), 0, 0.055, 0));
    idol.add(place(new T.Mesh(sphereGeo(T, 0.024, 10, 8), goldM), 0, 0.105, 0));
    idol.add(place(cyl(T, 0.008, 0.012, 0.05, goldM), 0.028, 0.095, 0.01, 0, 0, -0.5));
    idol.position.set(-0.28, 2.0, -2.32);
    g.add(idol);
    var frame = new T.Mesh(new T.PlaneGeometry(0.16, 0.12), new T.MeshBasicMaterial({ map: frameTex }));
    frame.position.set(-0.62, 2.06, -2.3); frame.rotation.x = -0.18;
    g.add(frame);

    /* --- truck-art sticker on the sun-visor strip --- */
    var art = new T.Mesh(new T.PlaneGeometry(0.5, 0.125), new T.MeshBasicMaterial({ map: artTex, transparent: true }));
    art.position.set(0, 2.92, -2.16); art.rotation.x = -0.08;
    g.add(art);

    /* --- curtains on both side windows (wavy) --- */
    [-1, 1].forEach(function (side) {
      var geo = new T.PlaneGeometry(0.52, 0.85, 8, 1);
      var pos = geo.attributes.position;
      for (var i = 0; i < pos.count; i++) {
        var px = pos.getX(i);
        pos.setZ(i, Math.sin((px + 0.26) * 22) * 0.02);
      }
      geo.computeVertexNormals();
      var curtain = new T.Mesh(geo, new T.MeshStandardMaterial({ map: curtainTex, side: 2, roughness: 0.95 }));
      curtain.position.set(side * 1.18, 2.62, -1.55);
      curtain.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
      g.add(curtain);
      var rail = cyl(T, 0.012, 0.012, 0.56, mat(T, 0x94a3b8, { metalness: 0.6, roughness: 0.4 }), 8);
      rail.rotation.x = Math.PI / 2;
      rail.position.set(side * 1.18, 3.08, -1.55);
      g.add(rail);
    });

    /* --- patterned seat covers (driver + passenger) --- */
    [-0.58, 0.58].forEach(function (x) {
      var cover = new T.Mesh(new T.PlaneGeometry(0.56, 0.62), new T.MeshStandardMaterial({ map: seatTex, roughness: 0.95 }));
      cover.position.set(x, 1.98, -1.13);
      cover.rotation.x = -0.12;
      g.add(cover);
      var headrest = new T.Mesh(new T.PlaneGeometry(0.3, 0.16), new T.MeshStandardMaterial({ map: seatTex, roughness: 0.95 }));
      headrest.position.set(x, 2.32, -1.06);
      headrest.rotation.x = -0.12;
      g.add(headrest);
    });

    /* --- overhead storage + sleeper berth --- */
    var storeM = mat(T, 0x1e293b, { roughness: 0.8 });
    var storage = box(T, 1.7, 0.26, 0.42, storeM);
    storage.position.set(0, 3.18, -2.3);
    g.add(storage);
    [-0.45, 0.45].forEach(function (x) {
      var door = box(T, 0.7, 0.18, 0.02, mat(T, 0x334155, { roughness: 0.7 }));
      door.position.set(x, 3.18, -2.08);
      g.add(door);
    });
    var berthM = mat(T, 0x7f1d1d, { roughness: 0.95 });
    var berth = box(T, 1.9, 0.14, 0.72, berthM);
    berth.position.set(0, 1.32, -0.42);
    g.add(berth);
    var pillow = box(T, 0.5, 0.1, 0.3, mat(T, 0xf8fafc, { roughness: 0.95 }));
    pillow.position.set(-0.6, 1.43, -0.42);
    g.add(pillow);
    var blanket = new T.Mesh(new T.PlaneGeometry(1.0, 0.7), new T.MeshStandardMaterial({ map: seatTex, roughness: 0.95 }));
    blanket.position.set(0.35, 1.4, -0.42);
    blanket.rotation.x = -Math.PI / 2;
    g.add(blanket);

    /* --- steering-wheel cover (patterned wrap over the existing wheel) --- */
    var wheel = sim.playerRig.steeringWheelGroup;
    var wheelTex = canvasTexture(T, patternWheelCover());
    if (wheel) {
      var cover = new T.Mesh(new T.TorusGeometry(0.235, 0.03, 10, 36), new T.MeshStandardMaterial({ map: wheelTex, roughness: 0.9 }));
      wheel.add(cover);
      var hornPad = cyl(T, 0.075, 0.075, 0.02, mat(T, 0x111827, { roughness: 0.6 }), 20);
      hornPad.rotation.x = Math.PI / 2;
      hornPad.position.set(0, 0, 0.028);
      wheel.add(hornPad);
      cabinRefs.hornPad = hornPad;
    }

    /* --- gear knob upgrade + indicator stalks --- */
    var knob = new T.Mesh(sphereGeo(T, 0.055, 14, 10), mat(T, 0x111827, { roughness: 0.35 }));
    knob.position.set(0.18, 1.92, -1.58);
    g.add(knob);
    var boot = new T.Mesh(new T.ConeGeometry(0.05, 0.14, 12), mat(T, 0x1f2937, { roughness: 0.95 }));
    boot.position.set(0.18, 1.82, -1.58);
    g.add(boot);

    /* --- parked wipers on the windshield base --- */
    [-0.45, 0.45].forEach(function (x) {
      var wiper = box(T, 0.5, 0.025, 0.02, mat(T, 0x0f172a, { roughness: 0.6 }));
      wiper.position.set(x, 1.62, -2.6);
      wiper.rotation.z = x > 0 ? 0.5 : -0.5;
      wiper.rotation.x = -0.15;
      g.add(wiper);
    });

    /* --- door-panel inserts + chrome handles --- */
    [-1, 1].forEach(function (side) {
      var insert = new T.Mesh(new T.PlaneGeometry(0.3, 0.5), new T.MeshStandardMaterial({ map: seatTex, roughness: 0.95 }));
      insert.position.set(side * 1.15, 1.72, -1.85);
      insert.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
      g.add(insert);
      var handle = box(T, 0.03, 0.03, 0.22, mat(T, 0xcbd5e1, { metalness: 0.8, roughness: 0.3 }));
      handle.position.set(side * 1.14, 1.98, -1.85);
      g.add(handle);
    });

    /* --- interior indicator tell-tales on the cluster --- */
    var indL = new T.Mesh(new T.PlaneGeometry(0.05, 0.05), new T.MeshBasicMaterial({ color: 0x22c55e }));
    indL.position.set(0.3, 2.12, -2.19);
    var indR = indL.clone();
    indR.material = new T.MeshBasicMaterial({ color: 0x22c55e });
    indR.position.set(0.86, 2.12, -2.19);
    g.add(indL); g.add(indR);
    cabinRefs.indL = indL; cabinRefs.indR = indR;

    cab.add(g);
    log('cabin decor built (' + g.children.length + ' nodes)');
  }

  /* ------------------------------------------------------------------ */
  /* 7. Biomes / maps (WS3) — same road, five regions                   */
  /* ------------------------------------------------------------------ */
  var biomeState = { current: 'plains', originals: null };
  function captureOriginals(sim) {
    if (biomeState.originals) return biomeState.originals;
    var o = { fogColor: sim.fogColor.getHex(), fogNear: sim.linearFog.near, fogFar: sim.linearFog.far,
      sky: {}, hemi: sim.hemiLight.intensity, sun: sim.sunLight.intensity, exposure: sim.renderer.toneMappingExposure,
      treeMats: [], terrainGeo: null, terrainPos: null, treePos: [] };
    if (sim.skyUniforms) ['turbidity', 'rayleigh', 'mieCoefficient', 'mieDirectionalG', 'cloudCoverage'].forEach(function (k) { if (sim.skyUniforms[k]) o.sky[k] = sim.skyUniforms[k].value; });
    // foliage materials (green icosahedra) + terrain plane
    var terrain = null;
    sim.envHandles.root.traverse(function (mesh) {
      if (!mesh.isMesh) return;
      if (mesh.geometry && mesh.geometry.type === 'PlaneGeometry' && mesh.geometry.parameters && mesh.geometry.parameters.width === 2200) {
        terrain = mesh;
      }
      if (mesh.geometry && mesh.geometry.type === 'IcosahedronGeometry' && mesh.material && mesh.material.color) {
        var hex = mesh.material.color.getHex();
        var r = (hex >> 16) & 255, gg = (hex >> 8) & 255, b = hex & 255;
        if (gg > r && gg > b) o.treeMats.push({ mat: mesh.material, color: hex });
      }
    });
    if (terrain) {
      o.terrainGeo = terrain.geometry;
      o.terrainPos = terrain.geometry.attributes.position.array.slice();
      o.terrainMesh = terrain;
    }
    // all tree-ish meshes (for lift / hide)
    sim.envHandles.root.traverse(function (mesh) {
      if (mesh.isMesh && mesh.geometry && mesh.geometry.type === 'IcosahedronGeometry') {
        o.treePos.push({ mesh: mesh, y: mesh.position.y, visible: mesh.visible, geo: mesh.geometry });
      }
    });
    // dedupe tree materials
    var seen = {};
    o.treeMats = o.treeMats.filter(function (t) { if (seen[t.mat.uuid]) return false; seen[t.mat.uuid] = 1; return true; });
    biomeState.originals = o;
    return o;
  }
  function terrainLiftFor(biome, x, z) {
    if (biome === 'foothills') return 26 * smoothstep(90, 420, Math.abs(x)) * (0.55 + 0.45 * Math.sin(x * 0.013 + z * 0.004) * Math.sin(z * 0.007 + 1.7));
    if (biome === 'coastal') return x < -150 ? -6 * smoothstep(150, 420, Math.abs(x)) : 0;
    return 0;
  }
  function applyTerrainLift(sim, T, biome) {
    var o = biomeState.originals;
    if (!o.terrainGeo) return;
    var pos = o.terrainGeo.attributes.position;
    var arr = pos.array, orig = o.terrainPos;
    for (var i = 0; i < pos.count; i++) {
      var lx = orig[i * 3], ly = orig[i * 3 + 1];
      var wx = lx, wz = -ly; // plane rotated -90deg about X: local y -> world -z
      arr[i * 3 + 2] = orig[i * 3 + 2] + terrainLiftFor(biome, wx, wz);
    }
    pos.needsUpdate = true;
    o.terrainGeo.computeVertexNormals();
    o.treePos.forEach(function (t) {
      var wp = new T.Vector3();
      t.mesh.getWorldPosition(wp);
      t.mesh.position.y = t.y + terrainLiftFor(biome, wp.x, wp.z);
    });
  }
  var biomeExtras = { group: null };
  function clearBiomeExtras(sim) {
    if (biomeExtras.group) { sim.scene.remove(biomeExtras.group); biomeExtras.group = null; }
  }
  function applyBiome(sim, T, biome) {
    var o = captureOriginals(sim);
    clearBiomeExtras(sim);
    // restore originals first
    sim.fogColor.setHex(o.fogColor);
    sim.linearFog.near = o.fogNear; sim.linearFog.far = o.fogFar;
    if (sim.skyUniforms) Object.keys(o.sky).forEach(function (k) { if (sim.skyUniforms[k]) sim.skyUniforms[k].value = o.sky[k]; });
    o.treeMats.forEach(function (t) { t.mat.color.setHex(t.color); });
    o.treePos.forEach(function (t) { t.mesh.position.y = t.y; t.mesh.visible = t.visible; if (t.geo) t.mesh.geometry = t.geo; });
    applyTerrainLift(sim, T, 'plains');
    // swap terrain texture back
    if (sim.textures.terrainMap && biomeState.terrainPhoto) { /* photo stays; tint via material instead */ }
    if (biome === 'plains') { biomeState.current = 'plains'; tuneSun(sim); log('biome: plains'); return; }
    var extras = new T.Group(); extras.name = 'NH44BiomeExtras';
    if (biome === 'foothills') {
      sim.fogColor.setHex(0x9db8c4); sim.linearFog.near = 280; sim.linearFog.far = 950;
      if (sim.skyUniforms) { sim.skyUniforms.turbidity.value = 3.0; sim.skyUniforms.rayleigh.value = 1.5; }
      o.treeMats.forEach(function (t) { t.mat.color.setHex(0x1d4d2b); });
      // pines: the game's trees are merged BufferGeometry (not swappable),
      // so plant a pine belt along both shoulders instead.
      for (var p = 0; p < 44; p++) {
        var px = (p % 2 ? 1 : -1) * (26 + ((p * 53) % 64));
        var pz = -180 - p * 92 - ((p * 37) % 50);
        var ph = 4.5 + ((p * 29) % 30) / 10;
        var pine = new T.Group();
        var trunk = cyl(T, 0.14, 0.2, 1.2, mat(T, 0x5b3a1e, { roughness: 1 }), 8);
        trunk.position.y = 0.6;
        pine.add(trunk);
        var cone1 = new T.Mesh(new T.ConeGeometry(1.5, ph * 0.62, 8), mat(T, 0x14532d, { roughness: 0.95 }));
        cone1.position.y = 1.2 + ph * 0.31;
        pine.add(cone1);
        var cone2 = new T.Mesh(new T.ConeGeometry(1.05, ph * 0.5, 8), mat(T, 0x166534, { roughness: 0.95 }));
        cone2.position.y = 1.2 + ph * 0.62;
        pine.add(cone2);
        pine.position.set(px, terrainLiftFor('foothills', px, pz), pz);
        extras.add(pine);
      }
      applyTerrainLift(sim, T, 'foothills');
      loadPhoto('assets/textures/rocky_ground.jpg').then(function (img) { if (sim.textures.terrainMap) swapTextureImage(sim.textures.terrainMap, img); }).catch(function () {});
    } else if (biome === 'coastal') {
      sim.fogColor.setHex(0xbfd9e2); sim.linearFog.near = 320; sim.linearFog.far = 1100;
      o.treeMats.forEach(function (t) { t.mat.color.setHex(0x2e7d32); });
      applyTerrainLift(sim, T, 'coastal');
      var sea = new T.Mesh(new T.PlaneGeometry(1100, 6400), new T.MeshBasicMaterial({ color: 0x38bdf8 }));
      sea.rotation.x = -Math.PI / 2; sea.position.set(-750, -1.6, -3200);
      extras.add(sea);
      loadPhoto('assets/textures/dirt_sand.jpg').then(function (img) { if (sim.textures.terrainMap) swapTextureImage(sim.textures.terrainMap, img); }).catch(function () {});
    } else if (biome === 'desert') {
      sim.fogColor.setHex(0xe8c98a); sim.linearFog.near = 300; sim.linearFog.far = 900;
      if (sim.skyUniforms) { sim.skyUniforms.turbidity.value = 5.2; sim.skyUniforms.rayleigh.value = 2.2; }
      o.treeMats.forEach(function (t) { t.mat.color.setHex(0x8a7a3a); });
      o.treePos.forEach(function (t, i) { if (i % 9 < 4) t.mesh.visible = false; }); // sparse vegetation
      for (var d = 0; d < 12; d++) {
        var dune = new T.Mesh(sphereGeo(T, 28 + (d % 4) * 12, 12, 8), mat(T, 0xd9a05b, { roughness: 1 }));
        dune.scale.y = 0.16;
        dune.position.set((d % 2 ? 1 : -1) * (170 + (d * 37) % 320), 0, -400 - d * 330);
        extras.add(dune);
      }
      loadPhoto('assets/textures/dirt_sand.jpg').then(function (img) { if (sim.textures.terrainMap) swapTextureImage(sim.textures.terrainMap, img); }).catch(function () {});
    } else if (biome === 'city') {
      sim.fogColor.setHex(0xb8c0c8); sim.linearFog.near = 300; sim.linearFog.far = 1000;
      var winTex = canvasTexture(T, windowSignCanvas());
      for (var b = 0; b < 12; b++) {
        var hgt = 9 + (b * 7) % 18;
        var bld = box(T, 16, hgt, 14, new T.MeshStandardMaterial({ map: winTex, roughness: 0.9 }));
        var side = b % 2 ? 1 : -1;
        bld.position.set(side * (62 + (b * 13) % 70), hgt / 2, -350 - b * 330);
        extras.add(bld);
      }
    }
    sim.scene.add(extras);
    biomeExtras.group = extras;
    biomeState.current = biome;
    tuneSun(sim);
    log('biome applied:', biome);
  }

  /* ------------------------------------------------------------------ */
  /* 8. More trucks (WS2): traffic variants + parked showcase + paint   */
  /* ------------------------------------------------------------------ */
  function biggestBox(root) {
    var best = null, bestVol = 0;
    root.traverse(function (o) {
      if (o.isMesh && o.geometry && o.geometry.type === 'BoxGeometry' && o.geometry.parameters) {
        var p = o.geometry.parameters;
        var v = p.width * p.height * p.depth;
        if (v > bestVol) { bestVol = v; best = o; }
      }
    });
    return best;
  }
  function makeTrafficVariants(sim, T) {
    var list = sim.trafficMeshes || [];
    if (!list.length || !T.CylinderGeometry) { log('traffic variants skipped'); return; }
    // Only container lorries have a big BoxGeometry cargo box (vol ~43).
    // The pool mixes lorries with cars/smaller vehicles — detect, don't guess.
    var lorries = [];
    list.forEach(function (entry, idx) {
      if (!entry || !entry.root) return;
      var container = biggestBox(entry.root);
      if (container) {
        var p = container.geometry.parameters;
        if (p.width * p.height * p.depth > 30) lorries.push({ idx: idx, root: entry.root, container: container });
      }
    });
    log('container lorries in pool:', lorries.length);
    var kinds = ['tanker', 'tipper', 'box', 'tanker'];
    lorries.forEach(function (L, n) {
      if (n % 2 !== 0) return; // convert every other lorry — keep most as containers
      var kind = kinds[(n / 2) % kinds.length];
      var container = L.container;
      var pos = container.position.clone();
      var scl = container.scale.clone();
      container.visible = false;
      var grp = new T.Group();
      grp.position.copy(pos); grp.scale.copy(scl);
      if (kind === 'tanker') {
        var tank = cyl(T, 1.05, 1.05, 5.6, mat(T, 0xd7dde3, { metalness: 0.75, roughness: 0.3 }), 20);
        tank.rotation.x = Math.PI / 2;
        tank.position.y = 0.35;
        grp.add(tank);
        var cap = cyl(T, 0.28, 0.28, 0.3, mat(T, 0x94a3b8, { metalness: 0.6, roughness: 0.4 }), 12);
        cap.position.set(0, 1.5, 0);
        grp.add(cap);
      } else if (kind === 'tipper') {
        var bed = box(T, 2.3, 1.1, 5.4, mat(T, 0xea580c, { roughness: 0.7 }));
        bed.position.y = 0.2;
        grp.add(bed);
        var load = box(T, 2.0, 0.5, 5.0, mat(T, 0x78350f, { roughness: 1 }));
        load.position.y = 0.95;
        grp.add(load);
      } else {
        var body = box(T, 2.4, 2.4, 5.6, mat(T, 0xf8fafc, { roughness: 0.8 }));
        body.position.y = 0.3;
        grp.add(body);
        var stripe = box(T, 2.42, 0.4, 5.62, mat(T, 0x2563eb, { roughness: 0.8 }));
        stripe.position.y = 0.5;
        grp.add(stripe);
      }
      container.parent.add(grp);
      log('traffic variant:', kind, 'on pool idx', L.idx);
    });
  }
  function findDhabaSpot(sim) {
    var spot = null;
    try {
      var targetMat = sim.envHandles && sim.envHandles.dhabaLightsMat;
      if (targetMat) {
        sim.envHandles.root.traverse(function (o) {
          if (!spot && o.isMesh && o.material === targetMat) {
            var wp = new T_Vector3();
            o.getWorldPosition(wp);
            spot = { x: wp.x, z: wp.z };
          }
        });
      }
    } catch (e) {}
    return spot || { x: -26, z: -1200 };
  }
  var T_Vector3 = null;
  function buildParkedTrucks(sim, T) {
    var spot = findDhabaSpot(sim);
    var g = new T.Group(); g.name = 'NH44ParkedTrucks';
    function truck(x, z, ry, cabColor, kind) {
      var t = new T.Group();
      var cabM = mat(T, cabColor, { roughness: 0.35, metalness: 0.25 });
      var cab = box(T, 2.3, 2.5, 1.9, cabM); cab.position.set(0, 1.55, 2.6); t.add(cab);
      var shield = box(T, 2.0, 1.0, 0.06, new T.MeshPhysicalMaterial({ color: 0x0f172a, roughness: 0.1, metalness: 0.1 }));
      shield.position.set(0, 1.95, 3.56); t.add(shield);
      var grille = box(T, 1.8, 0.5, 0.08, mat(T, 0x1f2937, { roughness: 0.6 })); grille.position.set(0, 0.95, 3.56); t.add(grille);
      var chassis = box(T, 2.0, 0.4, 7.6, mat(T, 0x1f2937, { roughness: 0.8 })); chassis.position.set(0, 0.75, -0.6); t.add(chassis);
      if (kind === 'tanker') {
        var tank = cyl(T, 1.0, 1.0, 5.2, mat(T, 0xd7dde3, { metalness: 0.75, roughness: 0.3 }), 18);
        tank.rotation.x = Math.PI / 2; tank.position.set(0, 1.9, -1.2); t.add(tank);
      } else if (kind === 'tipper') {
        var bed = box(T, 2.2, 1.0, 5.0, mat(T, 0xea580c, { roughness: 0.7 })); bed.position.set(0, 1.5, -1.2); t.add(bed);
      } else {
        var body = box(T, 2.4, 2.4, 5.4, mat(T, 0xf8fafc, { roughness: 0.8 })); body.position.set(0, 2.0, -1.2); t.add(body);
      }
      var wheelM = mat(T, 0x111827, { roughness: 0.95 });
      var hubM = mat(T, 0x9ca3af, { metalness: 0.7, roughness: 0.4 });
      [[-1, 2.6], [1, 2.6], [-1, -0.6], [1, -0.6], [-1, -2.8], [1, -2.8]].forEach(function (w) {
        var wheel = cyl(T, 0.5, 0.5, 0.35, wheelM, 14);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(w[0] * 1.0, 0.5, w[1]);
        t.add(wheel);
        var hub = cyl(T, 0.22, 0.22, 0.37, hubM, 10);
        hub.rotation.z = Math.PI / 2;
        hub.position.set(w[0] * 1.0, 0.5, w[1]);
        t.add(hub);
      });
      t.position.set(x, 0, z); t.rotation.y = ry;
      return t;
    }
    g.add(truck(spot.x - 4, spot.z, 0.08, 0x1d4ed8, 'tanker'));
    g.add(truck(spot.x - 4, spot.z - 11, -0.06, 0xea580c, 'tipper'));
    g.add(truck(spot.x - 4, spot.z - 22, 0.12, 0x166534, 'box'));
    sim.scene.add(g);
    log('parked trucks at', JSON.stringify(spot));
  }
  var PAINTS = [
    { id: 'red', label: 'Bharat Red', color: 0xb9380b },
    { id: 'blue', label: 'Highway Blue', color: 0x1d4ed8 },
    { id: 'green', label: 'Forest Green', color: 0x166534 },
    { id: 'orange', label: 'Sunset Orange', color: 0xea580c },
    { id: 'black', label: 'Midnight', color: 0x111827 }
  ];
  function applyPaint(sim, paintId) {
    var p = PAINTS.find(function (x) { return x.id === paintId; }) || PAINTS[0];
    var rig = sim.playerRig;
    if (rig && rig.cabPaintMat) rig.cabPaintMat.color.setHex(p.color);
    try { localStorage.setItem('nh44-upgrade-paint', p.id); } catch (e) {}
    log('paint:', p.id);
  }
  function applyLivery(sim, T, style) {
    var tex = sim.textures && sim.textures.containerSideMap;
    if (!tex) return;
    var canvas = containerLiveryCanvas(style);
    swapTextureImage(tex, canvas);
    try { localStorage.setItem('nh44-upgrade-livery', style); } catch (e) {}
    log('livery:', style);
  }

  /* ------------------------------------------------------------------ */
  /* 9. Title-screen selectors (WS1/WS2/WS3 entry points)               */
  /* ------------------------------------------------------------------ */
  function buildSelectors(sim, T) {
    function group(label, buttons) {
      var div = document.createElement('div');
      div.className = 'setup-group nh44-upgrade-group';
      div.innerHTML = '<div class="field-label">' + label + '</div><div class="button-grid three"></div>';
      var grid = div.querySelector('.button-grid');
      buttons.forEach(function (b) {
        var btn = document.createElement('button');
        btn.className = 'choice' + (b.selected ? ' selected' : '');
        btn.textContent = b.label;
        btn.setAttribute('data-nh44', b.action);
        btn.setAttribute('data-nh44-value', b.value);
        if (b.swatch) { btn.style.setProperty('--swatch', b.swatch); }
        grid.appendChild(btn);
      });
      return div;
    }
    function inject() {
      var card = document.querySelector('.title-card');
      var startBtn = card && card.querySelector('.start-button');
      if (!card || !startBtn || card.querySelector('.nh44-upgrade-group')) return;
      var savedBiome = 'plains', savedPaint = 'red', savedLivery = 'bharat';
      try {
        savedBiome = localStorage.getItem('nh44-upgrade-biome') || 'plains';
        savedPaint = localStorage.getItem('nh44-upgrade-paint') || 'red';
        savedLivery = localStorage.getItem('nh44-upgrade-livery') || 'bharat';
      } catch (e) {}
      var mapGroup = group('Route · Map', [
        { label: 'Haryana Plains', action: 'biome', value: 'plains', selected: savedBiome === 'plains' },
        { label: 'Himalayan Foothills', action: 'biome', value: 'foothills', selected: savedBiome === 'foothills' },
        { label: 'Konkan Coast', action: 'biome', value: 'coastal', selected: savedBiome === 'coastal' },
        { label: 'Thar Desert', action: 'biome', value: 'desert', selected: savedBiome === 'desert' },
        { label: 'City Outskirts', action: 'biome', value: 'city', selected: savedBiome === 'city' }
      ]);
      var paintGroup = group('Truck Paint', PAINTS.map(function (p) {
        return { label: p.label, action: 'paint', value: p.id, selected: savedPaint === p.id, swatch: '#' + p.color.toString(16).padStart(6, '0') };
      }));
      var liveryGroup = group('Container Livery', [
        { label: 'Bharat Freight', action: 'livery', value: 'bharat', selected: savedLivery === 'bharat' },
        { label: 'NH-44 Express', action: 'livery', value: 'express', selected: savedLivery === 'express' },
        { label: 'Himalayan Cargo', action: 'livery', value: 'himalayan', selected: savedLivery === 'himalayan' }
      ]);
      card.insertBefore(liveryGroup, startBtn);
      card.insertBefore(paintGroup, startBtn);
      card.insertBefore(mapGroup, startBtn);
      // apply saved choices
      if (savedBiome !== 'plains') applyBiome(sim, T, savedBiome);
      applyPaint(sim, savedPaint);
      applyLivery(sim, T, savedLivery);
    }
    document.addEventListener('click', function (ev) {
      var btn = ev.target.closest && ev.target.closest('[data-nh44]');
      if (!btn) return;
      var action = btn.getAttribute('data-nh44');
      var value = btn.getAttribute('data-nh44-value');
      btn.parentElement.querySelectorAll('[data-nh44]').forEach(function (b) { b.classList.remove('selected'); });
      btn.classList.add('selected');
      if (action === 'biome') {
        try { localStorage.setItem('nh44-upgrade-biome', value); } catch (e) {}
        applyBiome(sim, T, value);
      } else if (action === 'paint') applyPaint(sim, value);
      else if (action === 'livery') applyLivery(sim, T, value);
    });
    inject();
    var mo = new MutationObserver(function () { inject(); });
    var hud = document.getElementById('hud-root');
    if (hud) mo.observe(hud, { childList: true, subtree: true });
  }

  /* ------------------------------------------------------------------ */
  /* 10. Cabin life loop — tassel sway, tell-tales, horn pad            */
  /* ------------------------------------------------------------------ */
  function startCabinLoop(sim) {
    var t0 = performance.now();
    function tick() {
      var t = (performance.now() - t0) / 1000;
      var tel = sim.telemetry || {};
      try {
        if (cabinRefs.tassel) {
          cabinRefs.tassel.rotation.z = Math.sin(t * 1.3) * 0.07 + (tel.steerAngleRad || 0) * 0.35;
          cabinRefs.tassel.rotation.x = Math.sin(t * 0.9 + 1) * 0.05;
        }
        var blink = !!tel.indicatorBlinkOn;
        if (cabinRefs.indL) cabinRefs.indL.visible = tel.indicator === 'left' && blink;
        if (cabinRefs.indR) cabinRefs.indR.visible = tel.indicator === 'right' && blink;
        if (cabinRefs.hornPad) {
          var s = tel.hornActive ? 1.25 : 1;
          cabinRefs.hornPad.scale.set(s, s, 1);
        }
      } catch (e) {}
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  whenReady(function (sim) {
    log('upgrade booting, phase', PHASE);
    var T = harvest(sim);
    T_Vector3 = T.Vector3;
    log('harvested:', Object.keys(T).join(','));
    patchLightingPreset(sim);
    tuneSun(sim);
    if (PHASE === 2) {
      applyPhotoTextures(sim, T);
      try { buildCabinDecor(sim, T); } catch (e) { log('cabin decor failed', e); }
      try { makeTrafficVariants(sim, T); } catch (e) { log('traffic variants failed', e); }
      try { buildParkedTrucks(sim, T); } catch (e) { log('parked trucks failed', e); }
      try { buildSelectors(sim, T); } catch (e) { log('selectors failed', e); }
    }
    startCabinLoop(sim);
    window.__nh44Upgrade = { sim: sim, T: T, cabinRefs: cabinRefs, phase: PHASE, applyBiome: function (b) { applyBiome(sim, T, b); }, applyPaint: function (p) { applyPaint(sim, p); }, applyLivery: function (l) { applyLivery(sim, T, l); } };
    log('upgrade ready (phase ' + PHASE + ')');
  });
})();
