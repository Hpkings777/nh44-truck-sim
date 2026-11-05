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
  var PHASE = (window.__NH44_PHASE === 1) ? 1 : 2;
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
  /* 2b. Real-asset pack loader (Phase 2): GLBs are refactored OFFLINE  */
  /* via tools/glb2nh44.py into JSON + extracted textures, then rebuilt */
  /* here with the game's own harvested constructors — no GLTFLoader,   */
  /* no second THREE instance, no version matching.                     */
  /* ------------------------------------------------------------------ */
  function deriveAssetCtors(T, sim) {
    try {
      var box = T.BoxGeometry || T.PlaneGeometry;
      if (box && box.prototype) {
        var parent = Object.getPrototypeOf(box.prototype);
        if (parent && parent.constructor) T.BufferGeometry = parent.constructor;
      }
    } catch (e) {}
    try {
      sim.scene.traverse(function (o) {
        if (!T.Float32BufferAttribute && o.isMesh && o.geometry && o.geometry.attributes && o.geometry.attributes.position) {
          T.Float32BufferAttribute = o.geometry.attributes.position.constructor;
        }
      });
    } catch (e) {}
    return T;
  }
  function b64ToArray(b64, Type) {
    var bin = atob(b64), n = bin.length, bytes = new Uint8Array(n);
    for (var i = 0; i < n; i++) bytes[i] = bin.charCodeAt(i);
    return new Type(bytes.buffer);
  }
  function loadImageTexture(T, url) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onload = function () {
        var t = new T.CanvasTexture(img);
        t.wrapS = 1000; t.wrapT = 1000; // RepeatWrapping
        if ('colorSpace' in t) t.colorSpace = 'srgb';
        t.anisotropy = 4;
        t.needsUpdate = true;
        resolve(t);
      };
      img.onerror = function () { log('texture failed:', url); resolve(null); };
      img.src = url;
    });
  }
  /* Fetch a converted asset pack (assets/models/<name>.json) and rebuild
   * it as a THREE.Group. opts: {scale, position:[x,y,z], rotationY}. */
  function loadAssetPack(T, packUrl, opts) {
    opts = opts || {};
    return fetch(packUrl).then(function (r) { return r.json(); }).then(function (pack) {
      var base = packUrl.slice(0, packUrl.lastIndexOf('/') + 1);
      var texUrls = {};
      pack.meshes.forEach(function (m) { if (m.material && m.material.map) texUrls[m.material.map] = base + m.material.map; });
      var texKeys = Object.keys(texUrls);
      return Promise.all(texKeys.map(function (k) { return loadImageTexture(T, texUrls[k]); })).then(function (texs) {
        var texMap = {};
        texKeys.forEach(function (k, i) { texMap[k] = texs[i]; });
        var group = new T.Group();
        group.name = 'nh44asset:' + (pack.name || 'pack');
        pack.meshes.forEach(function (m) {
          var geo = new T.BufferGeometry();
          geo.setAttribute('position', new T.Float32BufferAttribute(b64ToArray(m.positions_b64, Float32Array), 3));
          geo.setAttribute('normal', new T.Float32BufferAttribute(b64ToArray(m.normals_b64, Float32Array), 3));
          if (m.uvs_b64) geo.setAttribute('uv', new T.Float32BufferAttribute(b64ToArray(m.uvs_b64, Float32Array), 2));
          var idxArr = m.index32 ? b64ToArray(m.indices_b64, Uint32Array) : b64ToArray(m.indices_b64, Uint16Array);
          geo.setIndex(Array.from(idxArr));
          var mm = m.material || {};
          var mat = new T.MeshStandardMaterial({ metalness: mm.metalness || 0, roughness: (mm.roughness == null ? 0.9 : mm.roughness) });
          if (mm.color) mat.color.setRGB(mm.color[0], mm.color[1], mm.color[2]);
          if (mm.emissive && (mm.emissive[0] || mm.emissive[1] || mm.emissive[2])) mat.emissive.setRGB(mm.emissive[0], mm.emissive[1], mm.emissive[2]);
          if (mm.map && texMap[mm.map] && m.uvs_b64) mat.map = texMap[mm.map];
          if (mm.doubleSided) mat.side = 2; // DoubleSide
          var mesh = new T.Mesh(geo, mat);
          mesh.name = m.name || 'part';
          group.add(mesh);
        });
        if (opts.scale) group.scale.setScalar(opts.scale);
        if (opts.position) group.position.set(opts.position[0], opts.position[1], opts.position[2]);
        if (opts.rotationY) group.rotation.y = opts.rotationY;
        log('asset pack loaded:', pack.name, pack.meshes.length, 'parts,', pack.total_tris, 'tris');
        return group;
      });
    });
  }

  /* Pack cache: load each real-asset pack once, hand out clones (geometry +
   * material shared — cheap) so traffic/trees/buildings can repeat it. */
  var packCache = {};
  function loadPackCached(T, packUrl) {
    if (packCache[packUrl]) return packCache[packUrl];
    var p = loadAssetPack(T, packUrl, {}).catch(function (e) { log('pack failed:', packUrl, e); return null; });
    packCache[packUrl] = p;
    return p;
  }
  function clonePack(group) {
    return group ? group.clone() : null;
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
  function patternTruckArt() {
    return makeCanvas(512, 128, function (g, w, h) {
      g.fillStyle = '#111827'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#f59e0b'; g.font = 'bold 44px sans-serif'; g.textAlign = 'center';
      g.fillText('HORN OK PLEASE', w / 2, 58);
      g.fillStyle = '#f8fafc'; g.font = 'bold 26px sans-serif';
      g.fillText('USE DIPPER AT NIGHT  •  NH-44', w / 2, 102);
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
  /* Cabin dressing (WS6) — REAL assets only.
   * The base game's own cabin rig (dashboard, working gauges, steering
   * wheel, mirrors, seats, gear lever) stays untouched — it is the game's
   * own detailed model and it already works. What changes here:
   *  - seat covers / headrests / door inserts: REAL photo fabric
   *    (ambientCG Fabric086, CC0) on plain surfaces — the visual IS the photo.
   *  - side curtains: REAL photo fabric (ambientCG Fabric084, CC0).
   *  - steering-wheel cover: same real fabric on the wheel rim.
   *  - sun-visor truck-art sticker: 2D typography decal (lettering, not a model).
   *  - interior indicator tell-tales: functional lights (part of the working
   *    cabin — they blink with the real indicator state).
   * DROPPED per the owner asset rule (procedural 3D props with no real
   * equivalent sourced): hanging tassel, dashboard idol, photo frame,
   * overhead storage, sleeper berth + pillow, gear knob, wipers, chrome
   * door handles. The base cabin's own seats/dashboard/wheel remain.
   * The real steering-wheel pack (assets/models/steering_wheel.json) is
   * intentionally NOT swapped in: the base wheel is rigged to the live
   * steering input and already detailed; swapping risks the rig. */
  function buildCabinDecor(sim, T) {
    var cab = sim.playerRig && sim.playerRig.cabinSuspensionGroup;
    if (!cab || !T.PlaneGeometry || !T.TorusGeometry) { log('cabin decor skipped: missing constructors'); return; }
    var g = new T.Group();
    g.name = 'NH44CabinDecor';
    var artTex = canvasTexture(T, patternTruckArt());

    function photoTex(url, repeat) {
      return loadImageTexture(T, url).then(function (t) {
        if (t && repeat) { t.repeat.set(repeat[0], repeat[1]); }
        return t;
      });
    }
    Promise.all([
      photoTex('assets/textures/fabric_seat.jpg', [1, 1]),
      photoTex('assets/textures/fabric_curtain.jpg', [1, 1])
    ]).then(function (texs) {
      var seatTex = texs[0], curtainTex = texs[1];
      if (!seatTex || !curtainTex) { log('cabin fabrics failed to load'); return; }
      /* --- patterned seat covers (driver + passenger) — real fabric photo --- */
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
      /* --- curtains on both side windows (wavy) — real fabric photo --- */
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
      });
      /* --- door-panel inserts — real fabric photo --- */
      [-1, 1].forEach(function (side) {
        var insert = new T.Mesh(new T.PlaneGeometry(0.3, 0.5), new T.MeshStandardMaterial({ map: seatTex, roughness: 0.95 }));
        insert.position.set(side * 1.15, 1.72, -1.85);
        insert.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
        g.add(insert);
      });
      /* --- steering-wheel cover — real fabric photo over the existing wheel --- */
      var wheel = sim.playerRig.steeringWheelGroup;
      if (wheel) {
        var cover = new T.Mesh(new T.TorusGeometry(0.235, 0.03, 10, 36), new T.MeshStandardMaterial({ map: seatTex, roughness: 0.9 }));
        wheel.add(cover);
      }
      log('cabin dressing built (real fabric photos):', g.children.length, 'surfaces');
    }).catch(function (e) { log('cabin fabrics error', e); });

    /* --- truck-art sticker on the sun-visor strip (2D typography decal) --- */
    var art = new T.Mesh(new T.PlaneGeometry(0.5, 0.125), new T.MeshBasicMaterial({ map: artTex, transparent: true }));
    art.position.set(0, 2.92, -2.16); art.rotation.x = -0.08;
    g.add(art);

    /* --- interior indicator tell-tales on the cluster (functional lights) --- */
    var indL = new T.Mesh(new T.PlaneGeometry(0.05, 0.05), new T.MeshBasicMaterial({ color: 0x22c55e }));
    indL.position.set(0.3, 2.12, -2.19);
    var indR = indL.clone();
    indR.material = new T.MeshBasicMaterial({ color: 0x22c55e });
    indR.position.set(0.86, 2.12, -2.19);
    g.add(indL); g.add(indR);
    cabinRefs.indL = indL; cabinRefs.indR = indR;

    cab.add(g);
    log('cabin decor built (real fabrics loading async)');
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
      // Real pines: the game's trees are merged BufferGeometry (not
      // swappable), so plant a real pine belt (Poly Pizza / Quaternius
      // pine_trees pack, CC0) along both shoulders instead.
      loadPackCached(T, 'assets/models/pine_trees.json').then(function (pack) {
        if (!pack || biomeExtras.group !== extras || biomeState.current !== 'foothills') return;
        for (var p = 0; p < 24; p++) {
          var px = (p % 2 ? 1 : -1) * (26 + ((p * 53) % 64));
          var pz = -180 - p * 170 - ((p * 37) % 50);
          var pine = clonePack(pack);
          var s = 7 + ((p * 29) % 30) / 10;
          pine.scale.setScalar(s);
          pine.rotation.y = (p * 1.7) % 6.28;
          pine.position.set(px, terrainLiftFor('foothills', px, pz), pz);
          extras.add(pine);
        }
        log('foothills: 24 real pines planted');
      }).catch(function (e) { log('foothills pines failed', e); });
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
      // Real buildings (Quaternius/CC-BY packs — see ASSETS.md) along both
      // shoulders, replacing the procedural boxes.
      var citySpecs = [
        { url: 'assets/models/big_building.json', scale: 2.0 },
        { url: 'assets/models/shop.json', scale: 2.5 },
        { url: 'assets/models/big_building.json', scale: 1.7 },
        { url: 'assets/models/shop.json', scale: 2.2 },
        { url: 'assets/models/big_building.json', scale: 2.3 },
        { url: 'assets/models/shop.json', scale: 2.8 },
        { url: 'assets/models/big_building.json', scale: 1.9 },
        { url: 'assets/models/shop.json', scale: 2.0 }
      ];
      Promise.all(citySpecs.map(function (s) { return loadPackCached(T, s.url); })).then(function (packs) {
        if (biomeExtras.group !== extras || biomeState.current !== 'city') return;
        citySpecs.forEach(function (s, b) {
          var pack = packs[b];
          if (!pack) return;
          var side = b % 2 ? 1 : -1;
          var bld = clonePack(pack);
          bld.scale.setScalar(s.scale);
          bld.rotation.y = (b * 0.9) % 6.28;
          bld.position.set(side * (62 + (b * 13) % 70), 0, -350 - b * 330);
          extras.add(bld);
        });
        log('city: 8 real buildings placed');
      }).catch(function (e) { log('city buildings failed', e); });
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
  /* Real-truck traffic (WS2): the pool's container lorries are replaced
   * WHOLE by real Quaternius/CC-BY truck packs (Poly Pizza, CC0/CC-BY —
   * see ASSETS.md). The original lorry meshes are hidden; the real truck
   * is parented to the pool root so it inherits the game's traffic
   * movement (position/heading) exactly. RotationY=PI: the packs face +Z
   * natively, traffic drives -Z like the player. Packs load once and are
   * cloned per lorry (geometry/material shared). */
  var TRAFFIC_TRUCKS = [
    { url: 'assets/models/truck_quaternius.json', scale: 1.3, rotY: Math.PI },
    { url: 'assets/models/pickup_truck.json', scale: 1.3, rotY: Math.PI },
    { url: 'assets/models/cargo_truck.json', scale: 1.2, rotY: Math.PI },
    { url: 'assets/models/dump_truck.json', scale: 0.7, rotY: Math.PI },
    { url: 'assets/models/tanker_truck.json', scale: 1.0, rotY: Math.PI / 2 }
  ];
  function makeTrafficVariants(sim, T) {
    var list = sim.trafficMeshes || [];
    if (!list.length) { log('traffic variants skipped: no pool'); return; }
    var lorries = [];
    list.forEach(function (entry, idx) {
      if (!entry || !entry.root) return;
      var container = biggestBox(entry.root);
      if (container) {
        var p = container.geometry.parameters;
        if (p.width * p.height * p.depth > 30) lorries.push({ idx: idx, root: entry.root });
      }
    });
    log('container lorries in pool:', lorries.length);
    if (!lorries.length) return;
    // preload all truck packs once, then swap them in
    Promise.all(TRAFFIC_TRUCKS.map(function (t) { return loadPackCached(T, t.url); })).then(function (packs) {
      lorries.forEach(function (L, n) {
        var spec = TRAFFIC_TRUCKS[n % TRAFFIC_TRUCKS.length];
        var pack = packs[n % packs.length];
        if (!pack) { log('traffic truck pack missing for lorry', L.idx); return; }
        // hide the whole original lorry (its meshes only — the root must
        // stay visible so the real truck child inherits traffic movement)
        L.root.traverse(function (o) { if (o.isMesh) o.visible = false; });
        var truck = clonePack(pack);
        truck.scale.setScalar(spec.scale);
        truck.rotation.y = spec.rotY;
        L.root.add(truck);
        log('traffic real truck:', spec.url.split('/').pop(), 'on pool idx', L.idx);
      });
    }).catch(function (e) { log('traffic trucks failed', e); });
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
  /* Parked showcase trucks (WS2): real packs parked by the dhaba. */
  function buildParkedTrucks(sim, T) {
    var spot = findDhabaSpot(sim);
    var g = new T.Group(); g.name = 'NH44ParkedTrucks';
    var specs = [
      { url: 'assets/models/tanker_truck.json', scale: 1.0, rotY: Math.PI / 2 + 0.08, dz: 0 },
      { url: 'assets/models/dump_truck.json', scale: 0.7, rotY: Math.PI - 0.06, dz: -11 },
      { url: 'assets/models/cargo_truck.json', scale: 1.2, rotY: Math.PI + 0.12, dz: -22 }
    ];
    Promise.all(specs.map(function (s) { return loadPackCached(T, s.url); })).then(function (packs) {
      specs.forEach(function (s, i) {
        var pack = packs[i];
        if (!pack) return;
        var truck = clonePack(pack);
        truck.scale.setScalar(s.scale);
        truck.rotation.y = s.rotY;
        truck.position.set(spot.x - 4, 0, spot.z + s.dz);
        g.add(truck);
      });
      sim.scene.add(g);
      log('parked real trucks at', JSON.stringify(spot));
    }).catch(function (e) { log('parked trucks failed', e); });
  }

  /* Road furniture (WS5): real packs scattered along the corridor —
   * striped barriers, cones, signs, lamp posts, traffic lights, plus one
   * hero Poly Haven concrete-barrier scan near the dhaba. */
  function loadRoadProps(sim, T) {
    var g = new T.Group(); g.name = 'NH44RoadProps';
    var jobs = [
      { url: 'assets/models/traffic_barrier.json', count: 10, place: function (i) { return { x: (i % 2 ? 1 : -1) * (14 + (i * 7) % 10), z: -250 - i * 380, s: 1, ry: 0 }; } },
      { url: 'assets/models/traffic_cone.json', count: 8, place: function (i) { return { x: -8 - (i % 3), z: -300 - i * 90, s: 1.4, ry: 0 }; } },
      { url: 'assets/models/sign.json', count: 6, place: function (i) { return { x: (i % 2 ? 1 : -1) * 16, z: -400 - i * 620, s: 2, ry: (i % 2 ? 0.4 : -0.4) }; } },
      { url: 'assets/models/streetlight.json', count: 6, place: function (i) { return { x: (i % 2 ? 1 : -1) * 12, z: -500 - i * 700, s: 2, ry: 0 }; } },
      { url: 'assets/models/traffic_light.json', count: 2, place: function (i) { return { x: 10, z: -900 - i * 1800, s: 1, ry: 0 }; } }
    ];
    Promise.all(jobs.map(function (j) { return loadPackCached(T, j.url); })).then(function (packs) {
      jobs.forEach(function (j, ji) {
        var pack = packs[ji];
        if (!pack) return;
        for (var i = 0; i < j.count; i++) {
          var p = j.place(i);
          var prop = clonePack(pack);
          prop.scale.setScalar(p.s);
          prop.rotation.y = p.ry;
          prop.position.set(p.x, 0, p.z);
          g.add(prop);
        }
      });
      sim.scene.add(g);
      log('road props placed:', g.children.length);
    }).catch(function (e) { log('road props failed', e); });
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
    deriveAssetCtors(T, sim);
    log('harvested:', Object.keys(T).join(','));
    patchLightingPreset(sim);
    tuneSun(sim);
    if (PHASE === 2) {
      applyPhotoTextures(sim, T);
      try { buildCabinDecor(sim, T); } catch (e) { log('cabin decor failed', e); }
      try { makeTrafficVariants(sim, T); } catch (e) { log('traffic variants failed', e); }
      try { buildParkedTrucks(sim, T); } catch (e) { log('parked trucks failed', e); }
      try { loadRoadProps(sim, T); } catch (e) { log('road props failed', e); }
      try { buildSelectors(sim, T); } catch (e) { log('selectors failed', e); }
    }
    startCabinLoop(sim);
    window.__nh44Upgrade = { sim: sim, T: T, cabinRefs: cabinRefs, phase: PHASE, loadAssetPack: function (url, opts) { return loadAssetPack(T, url, opts); }, applyBiome: function (b) { applyBiome(sim, T, b); }, applyPaint: function (p) { applyPaint(sim, p); }, applyLivery: function (l) { applyLivery(sim, T, l); } };
    log('upgrade ready (phase ' + PHASE + ')');
  });
})();
