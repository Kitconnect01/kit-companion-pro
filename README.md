# KitConnect Builders

Using the below project, please create a professional website for my project kitconnect. Keep in mind that I will be participating in the congressional app challenge so please try hard to make it simplistic, modern, easy to use, and professional. This project was made with base44. # KitConnect — Full Build Document for Lovable




A bilingual (English/Spanish) interactive STEM web app that gives kids ages 6–10 visual, step-by-step LEGO build guides for the **LEGO Education WeDo 2.0 (Set 45300)** kit. Designed for **offline use on low-bandwidth, shared devices**, for children from low-income or migrant families who may build without adult supervision. Includes an AI "Creative Instructor" that generates brand-new builds on demand using only real WeDo 2.0 parts.




---




## 1. Product Goals




- **Kid-first, no literacy required to navigate.** Big icons, huge touch targets, icon-based navigation.

- **Offline-capable PWA.** Works on shared tablets with poor connectivity; caches audio and assets.

- **Bilingual EN/ES** with a language switcher at launch; every string, caption, and narration is translated.

- **Accurate LEGO instructions.** Pre-loaded kits render the *official* PDF manuals one step per page. AI builds use *only* real WeDo 2.0 parts and physically valid connections.

- **Gamified progress** to keep kids coming back: levels, badges, daily/weekly challenges, streaks.




---




## 2. Design Language (the "look")




**Playful 3D-brick aesthetic.**




- **Backgrounds:** radial blue→pink gradient (`radial-gradient(circle at 30% 20%, #4F8EF7, #17324D 60%, #6C2BD9)`), with floating animated 3D LEGO bricks (studs on top), confetti, and sparkles drifting using Framer Motion.

- **Cards:** white, rounded `2rem`, thick white border, drop "physical" shadow `0 10px 0 #9333EA` (a solid bottom shadow so cards look like thick tiles sitting on the surface).

- **Buttons:** chunky, min-height 56px, bold black text, `active:scale-[0.98]` press feedback. Primary buttons use kit color; secondary use `bg-slate-100`.

- **Type:** system sans-serif, font-black for headings, large sizes (text-2xl/3xl) for kid readability.

- **Shared shell:** every screen uses a `ScreenShell` wrapper — gradient bg + animated bricks, a back button (top-left), optional animated title, and a centered max-width content column.

- **Auth screens** use a parallel `AuthShell` with the same LEGO theme (big, colorful, no jargon).




### Color tokens (CSS variables)

```

--background: 0 0% 100%

--foreground: 0 0% 3.9%

--primary: 0 0% 9%

--destructive: 0 84.2% 60.2%

--radius: 0.5rem

```

Brand accents (hardcoded in components): `#17324D` (deep navy text), `#9333EA` / `#6C2BD9` (purple shadow/gradient), `#4F8EF7` (blue), kit-specific `color` per model.




---




## 3. App Structure / Pages




Single-page app with view-state routing (no URL router needed, but you can use one). Flow:




1. **SplashPage** — animated logo + "Choose your language" (EN / ES big choice cards). Language persisted to localStorage.

2. **MainMenu** (dashboard) — gamified hero:

   - Big "Build a Model" button → KitPicker

   - Big "Create with AI" button → AICreator

   - Progress banner (level ring, builds count, streak)

   - Utility tiles: Saved Builds, Settings, Help/Tutorial

3. **KitPicker** — grid of kit cards grouped by "WeDo 2.0" / "SPIKE Prime (coming soon)". Each card shows a thumbnail/PDF cover, model name (localized), description. Tapping a kit → BuildGuide.

4. **BuildGuide** — the step-by-step builder. Header shows step path (dots), the current **StepCard**, Prev/Next, and a completion celebration screen at the end (confetti + "Amazing work!").

5. **AICreator** — text box + example chips → generates an AI kit → feeds it into the same BuildGuide.

6. **SavedBuilds** — list of in-progress sessions from localStorage; resume or delete.

7. **Settings** — narration on/off toggle (and language).

8. **Progress / Trophy Room** — level ring, badges grid, today's daily challenge, this week's weekly challenge, streak.

9. **HelpTutorial** — multi-slide onboarding carousel.

10. **Auth:** Login, Register, ForgotPassword, ResetPassword — all gated; the whole app requires a login to save progress.




---




## 4. Data Models




### 4.1 Kit object (pre-built or AI-generated)

```js

{

  id: "milo",                       // unique id; AI kits use "ai-<timestamp>"

  name: "LEGO Education WeDo 2.0 · Set 45300",

  model: { en: "Milo the Science Rover", es: "Milo el Robot Científico" },

  color: "#4CAF50",                 // hex, used for buttons/pins/highlights

  category: "wedo",                 // "wedo" | "spike"

  pdfUrl: "https://.../MILO.pdf",   // official PDF (pre-built kits only)

  steps: [ /* Step[] */ ]

}

```




### 4.2 Step object

```js

{

  icon: "LayoutGrid",               // lucide icon name

  pdfPage: 4,                       // (pre-built kits) page # in the PDF to show

  image: "https://...",             // (AI kits) generated illustration URL

  caption: { en: "...", es: "..." },

  parts: [

    { emoji: "🟩", count: 2, en: "Green plate 2×8", es: "Placa verde 2×8",

      part_number: "3738" }         // part_number only required for AI kits

  ],

  attach: [

    {

      x: 50, y: 55,                 // % position of the placement pin on the image

      en: "Flat on the table", es: "Planas sobre la mesa",

      detail: { en: "Put both green plates flat...", es: "Pon las dos placas..." }

    }

  ],

  help: { en: "Detailed 2-3 sentence help...", es: "Ayuda detallada..." }

}

```




### 4.3 Progress state (localStorage key `kitconnect-progress`)

```js

{

  completedBuilds: 0, totalSteps: 0, aiCreations: 0,

  streak: 0, lastActiveDate: "2026-08-30",

  daily:  { key: "2026-08-30", challengeId: "d-frog", progress: 0, doneIds: [], completed: false },

  weekly: { key: "2026-W35",   challengeId: "w-3models", progress: 0, doneIds: [], completed: false }

}

```




### 4.4 Saved builds (localStorage key `kitconnect-saved-builds`)

Array of `{ id, kitId, model, currentStep, totalSteps, savedAt }`. Settings in `kitconnect-settings` = `{ narration: true }`.




---




## 5. Pre-built Kits (WeDo 2.0, Set 45300)




Each kit is a JS object matching §4.1, with `steps` authored from the official PDFs. The PDF is embedded per-step via an `<iframe src="${pdfUrl}#page=${step.pdfPage}&toolbar=0&view=Fit">`, with a transparent overlay carrying tappable placement pins (the `attach` array).




Kits to include (id → model):

- `frog` → Frog

- `flower` → Flower

- `helicopter` → Helicopter

- `milo` → Milo the Science Rover

- `pullingRobot` → Pulling Robot

- `racecar` → Race Car

- `recyclingtruck` → Recycling Truck

- `drivingbase1` → Driving Base 1

- `hopper` → Hopper

- `rhino` → Rhino

- `grabber` → Grabber

- `grabber2` → Grabber 2

- `grabbers` → Grabbers

- `kikithedog` → Kiki the Dog




> **Authoring pattern (from Milo):** each step adds 1–3 pieces, has a short kid caption, a parts list with emoji+count+localized name, 1–3 `attach` pins with localized labels + detailed kid-friendly placement text, and a longer `help` text for the "I'm stuck" button. Steps progress slowly (Milo has ~29 steps) so a 6-year-old never makes a big jump.




---




## 6. The AI Creative Instructor (most important feature)




A child types an idea (e.g. "a red race car", "a dinosaur"). The app calls an LLM with a **strict prompt** that constrains output to real WeDo 2.0 parts, then generates an isometric illustration per step **sequentially** (each step continues from the previous step's image so pieces persist correctly).




### 6.1 The LLM prompt (paste into your AI block)

```

You are a LEGO Education WeDo 2.0 (Set 45300) build instructor for children ages 6-10.

A child describes their LEGO idea: "<USER PROMPT>"




HOW LEGO CONNECTIONS ACTUALLY WORK (fundamentals):

- Stud connection: a standard brick/plate stud snaps into the tube under another brick/plate.

- Technic pin: a round pin pushes into a round hole in a Technic beam. Friction pins grip; smooth pins spin.

- Axle: cross-shaped (+) cross-section, only fits cross-shaped axle holes (NOT round pin holes). Transmits rotation from motor to gears/wheels.

- Bushings: round collars that slide onto an axle as spacers/stoppers.

- Gears MESH (teeth interlock) — they do not stack. Bevel gears turn drive 90°. Worm gear drives a normal gear at 90° and is self-locking.

- Motor output is an axle. Anything that moves must trace back to the Medium Motor through axles/gears.




GENERATOR RULES (no exceptions):

1. Every piece MUST exist in the WeDo 2.0 parts library below — exact name and part number. Never invent a piece, color, or quantity.

2. Never use more of a piece than its listed quantity across the WHOLE build. Track usage.

3. Exactly ONE Medium Motor (21980), ONE Motion Sensor (20844), ONE Tilt Sensor (20841), ONE Smarthub (19071). At most one of each — never assume a second motor/sensor.

4. Only describe connections from the fundamentals (stud, friction/smooth pin, axle, gear mesh, bushing, ball joint). Never say an axle snaps into a round hole, or that gears "stack".

5. Anything that moves/spins/drives MUST be powered by the Medium Motor through axles/gears — never by another piece.

6. Prefer reusing proven mechanisms (worm-gear drive, wheel+tire assembly, motion-sensor trigger, tilt-sensor trigger) over inventing new ones.

7. Use 8–12 small steps; each step adds only 1–3 pieces so a child never has to guess.

8. For every step, the "parts" list and the "attach" instructions must describe the SAME pieces — never mention a piece in the instructions that isn't in that step's parts, and never list a part the instructions don't use.




CRITICAL RULE — PHYSICAL ATTACHMENT: In every step, every piece must end up PHYSICALLY ATTACHED to the assembly using a real connection (stud, friction pin, axle in a cross-shaped hole, gear mesh, bushing, or ball joint). Never describe a piece that floats, hovers, or attaches where no real connection exists. Never place a piece where it cannot physically connect to the existing assembly. If you are not certain two specific pieces can connect, do not use that step — reuse a verified connection pattern instead.




If the child's idea cannot be built from this parts list, return { "model": { "en": "Not possible", "es": "No es posible" }, "color": "#9333EA", "steps": [] } and explain briefly in the first step's help text.




Respond with JSON only in this exact format:

{

  "model": { "en": "English model name", "es": "Spanish model name" },

  "color": "#hexcolor",

  "steps": [

    {

      "icon": "LayoutGrid",

      "caption": { "en": "Short English caption", "es": "Short Spanish caption" },

      "parts": [

        { "emoji": "🟦", "count": 2, "part_number": "3709", "en": "Exact piece name (English)", "es": "Exact piece name (Spanish)" }

      ],

      "attach": [

        { "x": 50, "y": 50, "en": "Short location label", "es": "Short Spanish label",

          "detail": { "en": "Kid-friendly: which piece, where, and how (real connection type). One action per item.", "es": "Kid-friendly Spanish." } }

      ],

      "help": { "en": "2-3 sentence help for a stuck child", "es": "2-3 sentence help in Spanish" }

    }

  ]

}

Icon must be one of: LayoutGrid, RectangleHorizontal, Circle, Box, Shapes, Zap, Sparkles, Users, Pin, Minus, Cpu.

```




### 6.2 Client-side validation (run after the LLM returns, before showing)

```js

const usage = {};

function cleanPart(p) {

const def = WEDO_BY_NUMBER[p.part_number];        // map of part_number → library entry

if (!def) return null;                            // drop any piece NOT in the library

const used = usage[p.part_number] || 0;

const remaining = def.quantity - used;

if (remaining <= 0) return null;                 // already used up this part's full quantity

const count = Math.max(1, Math.min(Math.round(p.count) || 1, remaining)); // clamp to remaining

  usage[p.part_number] = used + count;

return { emoji: p.emoji || "🧱", count, part_number: p.part_number,

           en: p.en || def.name, es: p.es || p.en || def.name };

}

// drop steps with no caption or no parts+attach; if 0 valid steps OR model.en==="Not possible" → show friendly error

```




### 6.3 Sequential image generation (prevents pieces appearing/vanishing between steps)

For each step `i`, generate an isometric illustration, passing the **previous step's image** as a reference so the model continues the exact prior assembly:

```js

let prevImage = null;

for (let i = 0; i < steps.length; i++) {

const partsList = steps[i].parts.map(p => `${p.count} × ${p.en}`).join(", ");

const refs = prevImage ? [prevImage, ...wedoReferenceImages] : wedoReferenceImages;

const imgPrompt = `Isometric LEGO Education WeDo 2.0 build-manual illustration on a pure white background, bright primary colors, clean 3D render with visible studs and technic holes. The catalog reference photos show the REAL WeDo 2.0 pieces — match their exact shapes, colors, and proportions precisely; do not invent pieces. Project: ${model.en}. Step ${i+1} of ${steps.length}.

${i === 0 ? "Start a brand-new build on an empty surface."

  : "The FIRST reference image is the assembly exactly as it looked after the previous step. Keep EVERY piece already there in the SAME position, color, orientation, and size — do NOT remove, move, recolor, resize, merge, or reshape any existing piece. The model must look identical to that reference, plus the new additions."}

Show the FULLY ASSEMBLED model AFTER this step is complete — every piece physically attached in its final position, NOTHING floating, hovering, or detached. The new pieces added this step (${partsList}) must be shown ALREADY CONNECTED to the assembly and highlighted with a bright yellow outline so the child can see what was just added. Do NOT draw loose floating pieces or arrows pointing at detached parts. Do NOT draw any piece that is not in this step's list. No text, no labels, no numbers, no watermark — only the fully assembled LEGO pieces in isometric view.`;

const res = await generateImage(imgPrompt, refs);

if (res?.url) { steps[i].image = res.url; prevImage = res.url; }

else if (prevImage) steps[i].image = prevImage;   // fallback to previous state

}

```

**Key rule for images:** show the *fully assembled* model after the step — new pieces highlighted yellow, **nothing floating with arrows**. This is what makes builds look correct.




---




## 7. WeDo 2.0 Parts Library (the ONLY pieces the AI may use)




This is the authoritative constraint set. Store as an array; build a `part_number → entry` map for validation.




```

ELECTRONICS (qty 1 each — at most one of each per build)

- WeDo 2.0 Bluetooth Smarthub | 19071 | 1

- WeDo 2.0 Medium Motor | 21980 | 1

- WeDo 2.0 Motion Sensor | 20844 | 1

- WeDo 2.0 Tilt Sensor | 20841 | 1




WHEELS / MOTION

- White Wheel Rim with Axle Hole | 55982 | 6

- Black Tire Offset Tread | 92402 | 4

- Black Tire Balloon | 56891 | 2

- Black Tire for Wedge-Belt Wheel | 2815/70162 | 2

- Transparent Light Blue Wedge Belt Wheel | 4185/49750 | 6

- Black Turntable 4x4 Flat Square Base | 61485 | 1

- Dark Stone Gray Reel | 32012 | 1

- Black String 50cm | 23241 | 1

- Dark Stone Gray Chain 21 Links | 30104/60169 | 2




GEARS

- Worm Gear + Shape Axle | 4716 | 1

- Transparent Gearbox for Worm Gear | 6588/28698 | 1

- Gear 24 Teeth with Axle Hole | 3648/24505 | 2

- Gear 8 Teeth Type 2 | 8169/10928 | 4

- Bevel Gear Half 20 Teeth | 32198 | 2

- Bevel Gear 12 Teeth | 32270 | 2

- Bevel Gear 20 Teeth Reinforced | 18575 | 2

- Gear Rack 4 | 3743/4296 | 4




AXLES

- Axle 10 | 3737 | 2

- Axle 7 | 44294 | 2

- Axle 6 | 3706 | 2

- Axle 3 | 4519 | 2

- Axle 4 with End Stop | 87083 | 2

- Axle 2 with Grooves | 32062 | 4

- Axle 2L with Friction Pin | 18651 | 2

- Axle Connector Smooth | 59443 | 2

- Axle-to-Pin Connector No Friction | 3749/6562 | 4

- Flexible Rubber Axle Connector | 45590 | 2

- Bushing | 6590/42798 | 4

- Half Bushing | 32123/42136 | 4

- Plate 2x2 Round with Axle Hole | 4032 | 2




LEVERS / LINKAGES

- Base with Lever | 4592/73587 | 2

- Brick 2x2 with Ball Socket and Axlehole | 92013 | 4

- Brick 2x2 with Two Ball Joints | 17114 | 1

- Brick 2x2 with Ball Joint and Axlehole | 57909 | 2

- Technic Ball | 32474 | 4




STRUCTURAL — TECHNIC BEAMS/PLATES

- Technic Plate 2x4 with Holes | 3709 | 4

- Technic Plate 2x6 with Holes | 32001 | 4

- Technic Plate 2x8 with Holes | 3738 | 2

- Beam 3x5 Bent 90 Degrees | 32526 | 2

- Beam 7 Straight | 32524 | 2

- Brick 1x4 with Holes | 3701 | 4

- Brick 1x8 with Holes | 3702 | 2

- Brick 1x12 with Holes | 3895 | 2

- Brick 1x16 with Holes | 3703 | 2




STRUCTURAL — CONNECTORS

- Angle Connector #1 | 32013/42127 | 2

- Angle Connector #3 (157.5 deg) | 32016/42128 | 2

- Angle Connector #4 (135 deg) | 32192/42156 | 2

- Technic Pin Short Friction Ridges | 2780/61332 | 8

- Pin Joiner Round with Slot | 29219/62462 | 2

- Brick and Axle Separator (tool, NOT a build piece) | 31510/96874 | 1




STRUCTURAL — PLATES & BRICKS

- Plate 1x2 | 3023 | 6

- Plate 1x4 | 3710 | 4

- Plate 1x6 | 3666 | 4

- Plate 1x12 | 60479 | 2

- Plate 2x16 | 4282 | 2

- Plate 4x4 with 2x2 Open Center | 64799 | 2

- Plate 4x4 Round with Hole | 60474 | 2

- Plate 2x3 Rounded End with Pin Hole | 3176 | 1

- Plate 2x2 Round with Rounded Bottom | 2654/28558 | 6

- Plate 1x1 Round | 6141/30057 | 4

- Wedge Plate 4x6 without Corners | 32059/88165 | 2

- Brick 2x4 | 3001 | 6

- Brick 2x2 | 3003 | 6

- Brick 1x4 | 3010 | 2

- Brick 1x2 with Bottom Tube | 3004 | 6

- Brick 1x2 with Hole | 3700 | 4

- Brick 1x2 with Axle Hole | 31493/32064 | 4

- Brick 1x2 with Pin No Stud Holder | 2458 | 4

- Brick 1x1 with Stud on One Side | 87087 | 2

- Bracket 1x2 with 2x2 | 21712/44728 | 2

- Brick 1x1 Round Transparent Green/Red/Yellow | 3062 | 2 each

- Brick 2x2 Round Transparent Light Blue | 3941/6143 | 4




SLOPES / CURVES

- Slope 1x2x2 (65 deg) | 60481 | 4

- Slope 1x3 (25 deg) | 4286 | 4

- Slope 1x3 (25 deg) Inverted | 4287 | 4

- Slope 1x3 Curved | 50950 | 2

- Slope 1x4x0.7 Curved Double | 93273 | 2

- Slope 1x6 Curved with Studs | 42022 | 6

- Slope 1x2 (31 deg) | 85984 | 4

- Slope 1x2 (45 deg) | 3040 | 6

- Slope 1x2 (45 deg) Inverted | 3665 | 4

- Snowboard Short | 18746 | 2




DECORATIVE / DETAIL

- Tile 1x1 Round with Eye | 10238/13360 | 2

- Tile 2x2 Round with Eye | 16424/113422 | 2

- Tile 2x2 Round with Hole in Center | 15535 | 2

- Tile 2x2 Round with Stud | 18674 | 2

- Flower 2x2 with Angular Leaves | 4727 | 1

- Flower 2x2 with Solid Stud | 98262 | 1

- Grass | 15279/31576 | 2

- Tile 1x2 with Groove | 3069/113477 | 2

- Tile 1x8 | 4162 | 4

- Tile 1x2 with Perpendicular Beam 2 | 32530 | 4

- Rubber Band 3x3 25mm Red | 22433/114484 | 2

- Rubber Band 33mm Yellow | 70905/85546 | 2

```




> For AI image grounding, also pass a handful of **official WeDo 2.0 catalog photos** as `existing_image_urls` so the image model renders real part shapes/colors. Replace the URLs below with your own hosted catalog images:

```

wedoReferenceImages = [

  "https://media.base44.com/images/public/6a5d71598673d49d12916a74/7cf1fcd5a_....png",

  ... (7 catalog grid photos total)

]

```




---




## 8. Step Card UI (the heart of the build experience)




Each step renders a `StepCard`:

1. **Header:** "Step {n} of {total}" + a "Listen" button (purple pill) if narration is on.

2. **Parts callout box** (orange): "Parts you need" — pill badges per part with emoji + localized name + a red count circle.

3. **Illustration area:**

   - Pre-built kits: embedded PDF iframe at `#page=N&view=Fit`, with a transparent overlay of tappable **placement pins** (red circles with a MapPin icon + localized label) positioned by `attach[].x/y` %. Tapping a pin opens a small card with the `detail` text.

   - AI kits: the generated `step.image` (object-contain), same pin overlay.

4. **Caption:** large centered bold text.

5. **"I'm stuck, help!" button** (purple outline) → opens a panel with the step's `help` text.

6. **Nav:** "Go back" (disabled on step 0) and "Next step" / "I did it!" (last step) buttons.

7. **Fullscreen viewer:** a small floating button opens the PDF page or image full-screen.




For AI steps, hide the redundant parts callout (the AIStepVisual already shows parts) to avoid duplication.




---




## 9. Voice Narration




- Use a **male, deep, warm** TTS voice (friendly, not robotic). Generate server-side via a TTS API and cache the audio blob by a hash of the script to save credits.

- The narration script reads the **full** step, not just the caption:

  ```

  Step {n} of {total}. {caption}. You will need: {count} {part}, {count} {part}.... {help text}. {cheer}

  ```

  where cheer rotates: "You're doing great!" / "Keep it up!" / "Awesome work!" / "You've got this!" / "Nice job!" (localized).

- A "Listen/Stop" toggle button; show a "Loading voice…" spinner while generating.




---




## 10. Bilingual Strings (EN/ES)




```js

{

  en: {

    chooseLanguage: "Choose your language", chooseKit: "Pick your model", back: "Back",

    step: "Step", of: "of", stuck: "I'm stuck, help!", help: "Let's try together",

    close: "Got it", next: "Next step", previous: "Go back", finish: "I did it!",

    done: "Amazing work!", another: "Choose another kit", listen: "Listen", stop: "Stop",

    install: "Install", parts: "Parts you need", tapPin: "Tap a pin to see where it connects",

    createMode: "Create with AI", createPrompt: "Describe your LEGO idea...",

    createBtn: "Generate Instructions", creating: "Building your idea...",

    askAI: "Ask the AI Helper", askPlaceholder: "Type your question...",

    wedoSection: "WeDo 2.0", spikeSection: "Spike Prime", comingSoon: "Coming soon", comingSoonDesc: "New kits are on the way!"

  },

  es: {

    chooseLanguage: "Elige tu idioma", chooseKit: "Elige tu modelo", back: "Atrás",

    step: "Paso", of: "de", stuck: "¡Necesito ayuda!", help: "Probemos juntos",

    close: "Entendido", next: "Siguiente paso", previous: "Regresar", finish: "¡Lo logré!",

    done: "¡Excelente trabajo!", another: "Elegir otro kit", listen: "Escuchar", stop: "Detener",

    install: "Instalar", parts: "Piezas que necesitas", tapPin: "Toca un pin para ver dónde va",

    createMode: "Crear con IA", createPrompt: "Describe tu idea de LEGO...",

    createBtn: "Generar instrucciones", creating: "Construyendo tu idea...",

    askAI: "Pregúntale a la IA", askPlaceholder: "Escribe tu pregunta...",

    wedoSection: "WeDo 2.0", spikeSection: "Spike Prime", comingSoon: "Próximamente", comingSoonDesc: "¡Nuevos kits en camino!"

  }

}

```




---




## 11. Gamification / Progress




- **Level** = derived from `completedBuilds` (e.g. level = floor(builds/3)+1), shown as a leveling ring.

- **Badges** (Trophy Room): First Build 🥇 (1 build), Builder 🧱 (3), Master Builder 🏗️ (5), On Fire! 🔥 (3-day streak), AI Inventor ✨ (1 AI), AI Pro 🤖 (3 AI), 50 Steps 👣, 100 Steps 🎯.

- **Daily challenge** — one per day, deterministic by hashing the date string against a pool. Types: build a specific kit, build any WeDo/SPIKE model, create an AI animal/pet/rocket.

- **Weekly challenge** — one per ISO week, hashed against a pool. Types: build N models, build N of a category, build a specific set of kits, create N AI builds.

- **Streak** — increments if last active date was yesterday; resets to 1 if a day was skipped.

- Celebrate challenge completion with confetti + bouncy badge animations.




Challenge pools (id → type/target):

```

DAILY: d-frog(kit frog), d-heli(kit helicopter), d-race(kit racecar), d-flower(kit flower),

       d-kiki(kit kikithedog), d-recycle(kit recyclingtruck), d-milo(kit milo),

       d-spike(category spike), d-wedo(category wedo),

       d-aipet(ai), d-aianimal(ai), d-airocket(ai)

WEEKLY: w-3models(count 3), w-5models(count 5), w-2spike(category spike x2),

        w-3wedo(category wedo x3), w-trio(kits [frog,helicopter,racecar]),

        w-pair(kits [kikithedog,recyclingtruck]), w-2ai(ai 2), w-3ai(ai 3)

```




---




## 12. Offline / PWA




- Installable PWA with a manifest (name, icons, theme color, display standalone).

- Service worker caches the shell + kit PDFs + generated audio blobs.

- On load, clear stale service workers/caches to ensure fresh content.

- All progress and saved builds persist in localStorage so they survive offline.




---




## 13. Auth




- Gate the whole app behind login (email/password + Google OAuth). Register → OTP verification → logged in. Forgot/Reset password flows.

- Use a themed `AuthShell` matching the LEGO design (big, colorful, no jargon).

- Progress saves per user; only logged-in users can save builds.




---




## 14. Tech Stack (for Lovable)




- **React + Vite + Tailwind CSS**, shadcn/ui components, lucide-react icons, framer-motion for animations.

- **TTS** via a server-side speech API (browser SpeechSynthesis as a free fallback).

- **LLM** for the AI instructor (any capable chat model with JSON mode).

- **Image generation** for AI step illustrations (a model that accepts reference images — needed for sequential state).

- **localStorage** for progress, saved builds, settings, language.

- **PWA** manifest + service worker for offline.




---




## 15. Suggested Lovable Prompt (starter)




> Build "KitConnect": a bilingual (English/Spanish) kids' LEGO build-guide web app for the LEGO Education WeDo 2.0 set. Playful 3D-brick design — radial blue→pink gradient background, floating animated LEGO bricks, white rounded cards with thick bottom shadows, huge touch-friendly buttons, system-bold type. A language picker splash leads to a gamified dashboard with "Build a Model" and "Create with AI" actions, a progress level ring, badges, and daily/weekly challenges. The builder shows one step per page: an isometric illustration (or embedded PDF page for official kits), an orange "Parts you need" box with pill badges and red count circles, tappable red placement pins that open kid-friendly instructions, a big caption, an "I'm stuck, help!" button, and Prev/Next. The AI Creative Instructor takes a child's idea, calls an LLM constrained to a real WeDo 2.0 parts library (validate every part, clamp quantities, one motor/sensor/hub max), then generates isometric step images sequentially (each step continues the previous assembly, new pieces highlighted yellow, nothing floating). Male warm voice narration reads each full step. Offline PWA, auth-gated, progress in localStorage. Use the full spec in KitConnect-Lovable-Build-Doc.md for exact data shapes, the LLM prompt, the parts library, and bilingual strings.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://kit-companion-pro.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/188dbfdd-05d9-4db4-a0db-e80f38057e81).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
