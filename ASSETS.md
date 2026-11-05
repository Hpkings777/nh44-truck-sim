# NH44 Truck Simulator — Asset Sources & Licenses

## OWNER ASSET RULE (2026-11-05 — binding)

- Do NOT build models from scratch/procedural — scratch-built will never be
  photorealistic. SOURCE real online assets and REFACTOR them to be
  game-compatible (convert, optimize, fix PBR materials, correct scale,
  LODs, compressed textures, mobile-friendly poly counts).
- NO random AI slop: only curated, verified-quality real assets. No
  AI-generated junk models/textures, no random low-quality downloads.
  Prefer proven photorealistic free libraries: Poly Haven, ambientCG,
  Quaternius PBR, Sketchfab verified photogrammetry/CC0 scans.
  Kenney-style low-poly/stylized assets are NOT photorealistic — do not use.
- Every asset must be visually verified (screenshot QA) before it ships —
  if an asset looks off, drop it and find a better one.

## How real 3D assets reach the game (refactor pipeline)

The minified bundle has no GLTFLoader and no global `THREE`, so real GLBs
are refactored OFFLINE into plain geometry data the game can rebuild with
its own harvested THREE classes:

1. Source a real GLB (CC0 preferred, CC-BY with attribution recorded).
2. Convert: `tools/glb2nh44.py <asset.glb> assets/models/<name>.json`
   — parses the GLB, bakes node transforms into vertices, extracts embedded
   textures to `assets/models/tex/`, emits base64 float buffers + PBR
   material params. Rejects Draco-compressed files (no decoder on this VM).
   Also recenters each asset (bbox-center x/z → 0, min-y → 0) and computes
   smooth vertex normals when a mesh has none.
3. Load at runtime: `loadAssetPack(T, 'assets/models/<name>.json', opts)`
   in `js/upgrade.js` — rebuilds BufferGeometry + MeshStandardMaterial
   with the game's own constructors. Packs are cached and cloned per
   placement (geometry/material shared). No second THREE instance, no
   version matching risk.

## Photo textures — `assets/textures/` (CC0)

### Poly Haven (CC0 1.0, no attribution required)

| File | Poly Haven texture | Author | Source |
|---|---|---|---|
| `asphalt_road.jpg` | worn_asphalt | Amal Kumar | https://polyhaven.com/a/worn_asphalt |
| `dry_grass.jpg` | withered_grass | Charlotte Baglioni | https://polyhaven.com/a/withered_grass |
| `dirt_sand.jpg` | sand_01 | Rob Tuytel | https://polyhaven.com/a/sand_01 |
| `concrete.jpg` | concrete | Rob Tuytel | https://polyhaven.com/a/concrete |
| `bark.jpg` | bark_brown_01 | Rob Tuytel | https://polyhaven.com/a/bark_brown_01 |
| `steel_guardrail.jpg` | corrugated_iron | Jenelle van Heerden (Processing), Dimitrios Savva (Photography) | https://polyhaven.com/a/corrugated_iron |
| `rocky_ground.jpg` | rock_ground | Rob Tuytel | https://polyhaven.com/a/rock_ground |
| `brick.jpg` | red_brick | Rob Tuytel | https://polyhaven.com/a/red_brick |

All are 1K JPEGs (1024px max dimension, quality ~80, 145–347 KB each).
Machine-readable manifest: `assets/textures/MANIFEST.json`.

### ambientCG (CC0 1.0, no attribution required) — cabin fabrics

| File | ambientCG texture | Source |
|---|---|---|
| `fabric_seat.jpg` | Fabric086 (woven fabric, photogrammetry) | https://ambientcg.com/a/Fabric086 |
| `fabric_curtain.jpg` | Fabric084 (woven fabric, photogrammetry) | https://ambientcg.com/a/Fabric084 |

Both 1024×1024, compressed (112 KB / 37 KB). Used on the cabin seat
covers, headrests, door inserts, curtains and steering-wheel cover — the
visual IS the real photo, not a drawn pattern.

Where each texture is used (see `js/upgrade.js` `applyPhotoTextures` and
the biome code):
- `asphalt_road.jpg` → road surface (`asphaltMap`)
- `dry_grass.jpg` → plains terrain (`terrainMap`, default)
- `dirt_sand.jpg` → coastal + desert terrain (`terrainMap` on biome switch)
- `concrete.jpg` → concrete barriers / toll structures (`concreteMap`)
- `bark.jpg` → tree trunks (`barkMap`)
- `steel_guardrail.jpg` → guardrails (`guardrailMap`)
- `rocky_ground.jpg` → Himalayan foothills terrain (`terrainMap` on biome switch)
- `brick.jpg` → reserved for roadside dhaba / building dressing
- `fabric_seat.jpg` / `fabric_curtain.jpg` → cabin dressing (WS6)

## 3D models — `assets/models/` (real assets, Phase 2, LIVE)

All packs converted from real GLBs via `tools/glb2nh44.py`. Raw downloads
+ full per-asset detail in `assets/source/` + `assets/source/MANIFEST.json`.
Honest note: the Quaternius packs are flat-shaded low-poly PBR (the
owner-named library, matching the game's existing art direction) — they
are real curated assets, not photogrammetry scans; the photorealism in
this build comes from the photo textures, the real geometry, and the
lighting/grade. Every pack below passed visual QA in-game before shipping.

### Trucks (WS2) — traffic + parked showcase

| Pack | Source | License | Tris | Used as |
|---|---|---|---|---|
| `truck_quaternius.json` | Quaternius "Truck" — https://poly.pizza/m/cXw6oiFtZ8 | CC0 1.0 | 7,474 | Traffic (2 of 6 lorries) |
| `pickup_truck.json` | Quaternius "Pickup Truck" — Poly Pizza | CC0 1.0 | 6,432 | Traffic |
| `cargo_truck.json` | Poly Pizza "Cargo Truck" | **CC-BY 3.0** | 4,287 | Traffic |
| `dump_truck.json` | Poly Pizza "Dump truck" | **CC-BY 3.0** | 2,932 | Traffic + parked at dhaba |
| `tanker_truck.json` | Poly Pizza "Truck Tank" | **CC-BY 3.0** | 780 | Traffic + parked at dhaba |

All 6 container lorries in the traffic pool are replaced whole by real
trucks (original lorry meshes hidden; real truck parented to the pool
root so it inherits the game's traffic movement). RotationY=PI — the
packs face +Z natively, traffic drives −Z like the player. Parked
showcase: 3 real trucks by the dhaba (tanker, dump, cargo).

### Trees (WS5) — foothills biome

| Pack | Source | License | Tris | Used as |
|---|---|---|---|---|
| `pine_trees.json` | Quaternius "Pine Trees" — Poly Pizza | CC0 1.0 | 3,666 | 24-pine belt along both shoulders (scale ~7–10) |

### Buildings (WS3) — city biome

| Pack | Source | License | Tris | Used as |
|---|---|---|---|---|
| `big_building.json` | Quaternius "Big Building" — Poly Pizza | CC0 1.0 | 7,004 | City, 4 placements |
| `shop.json` | Poly Pizza "Shop" | **CC-BY 3.0** | 2,254 | City, 4 placements |

### Road furniture (WS5)

| Pack | Source | License | Tris | Used as |
|---|---|---|---|---|
| `traffic_barrier.json` | Quaternius "Traffic Barrier" — Poly Pizza | CC0 1.0 | 364 | 10 along the corridor |
| `traffic_cone.json` | Quaternius "Traffic Cone" — Poly Pizza | CC0 1.0 | 168 | 8 near the start |
| `sign.json` | Quaternius "Sign" — Poly Pizza | CC0 1.0 | 284 | 6 roadside signs |
| `streetlight.json` | Quaternius "Streetlight" — Poly Pizza | CC0 1.0 | 664 | 6 lamp posts |
| `traffic_light.json` | Quaternius "Traffic Light" — Poly Pizza | CC0 1.0 | 1,369 | 2 traffic lights |

Embedded pack textures (only 4, all tiny): `assets/models/tex/
truck_quaternius_img0.png`, `pickup_truck_img0.png`,
`traffic_barrier_img0.png`, `traffic_light_img0.png` (~19 KB total).

### Cabin (WS6) — real photo dressing on the base rig

The base game's own cabin rig (dashboard, working gauges, steering
wheel, mirrors, seats, gear lever) is untouched — it is the game's own
detailed model and it already works. Dressing added with REAL photo
fabrics (ambientCG, CC0 — see above): seat covers, headrests, door
inserts, side curtains, steering-wheel cover. The "HORN OK PLEASE" visor
sticker is 2D typography (lettering, not a model). The real
`steering_wheel.json` pack was sourced but NOT swapped in — the base
wheel is rigged to the live steering input and already detailed; swapping
risks the rig.

## CC-BY 3.0 attribution (required by license)

The following shipped assets are CC-BY 3.0 — attribution is a legal
requirement, recorded here and in `assets/source/MANIFEST.json`:
- "Dump truck" — Poly Pizza (CC-BY 3.0)
- "Truck Tank" — Poly Pizza (CC-BY 3.0)
- "Cargo Truck" — Poly Pizza (CC-BY 3.0)
- "Shop" — Poly Pizza (CC-BY 3.0)

All other shipped assets are CC0 1.0 (no attribution required).

## DELETED — procedural models (Phase 2 draft, removed 2026-11-05)

The first Phase 2 draft built trucks/trees/buildings/cabin decor
procedurally in `js/upgrade.js` (Box/Cylinder/Torus/Cone + canvas
patterns). That violated the owner asset rule and NEVER shipped. The
builders (`makeTrafficVariants` procedural bodies, `buildParkedTrucks`
procedural trucks, foothills cone pines, city box buildings, cabin
tassel/idol/photo-frame/berth/gear-knob/wipers/handles, and the
`patternSeatCover` / `patternCurtain` / `patternWheelCover` /
`photoFrameCanvas` / `windowSignCanvas` pattern functions) were DELETED
2026-11-05 and replaced by the converted real assets above. `PHASE`
now defaults to 2 (real assets live).

## 2D typography decals (drawn in code, no external source)

Canvas lettering generated at runtime in `js/upgrade.js` (no files, no
license needed). They are text, not models:
- "HORN OK PLEASE / USE DIPPER AT NIGHT · NH-44" truck-art sticker — sun-visor strip
- Container liveries ("BHARAT FREIGHT CORRIDOR", "NH-44 EXPRESS",
  "HIMALAYAN CARGO") — the player's container texture

## What was NOT used (honest ceiling)

- No AI-generated models/textures, no Kenney-style low-poly, no random
  downloads. Anything that fails visual QA is dropped, not shipped.
- **Dropped for size/performance (sourced, converted, then cut):**
  `town_house.json` (2.5 MB, 41,780 tris — too heavy for mobile),
  `house.json` (1.4 MB, 19,714 tris — single file exceeds the deploy
  tool's per-call size limit; city reads fine with big_building + shop),
  `trees_quaternius.json` (1.8 MB, 32,220-tris grove — the 24-pine belt
  covers foothills), `concrete_road_barrier.json` (1.8 MB, 60,928-tris
  Poly Haven scan — one barrier is not worth 60k tris),
  `maple_trees.json` (1.1 MB — unused). Their source GLBs stay in
  `assets/source/` if a lighter re-cut is ever wanted.
- **Sourced but not used:** `steering_wheel.json` (CC-BY 3.0 — base wheel
  rig is better), `stop_sign.json` (CC-BY 3.0 — weird mm units/orientation,
  failed visual QA), `shipping_container.json` (CC0 — container livery
  covers it), `concrete_road_barrier_02.json` (CC0).
- No new road geometry: the corridor spline/terrain builder lives inside the
  minified bundle. The five "maps" are biome re-dressings of the same
  Ambala–Karnal corridor (terrain re-shape, textures, fog/sky, vegetation,
  props) selectable on the title screen — not five separate road layouts.
- The game's original merged-tree chunks (7 BufferGeometry chunks baked
  into the bundle) cannot be swapped per-tree; real trees are planted
  alongside as hero vegetation, and the merged chunks remain distant filler.
- Sea plane (coastal biome) keeps a flat colour — no photoreal water
  texture was sourced (search failed); it is a minor background element.
