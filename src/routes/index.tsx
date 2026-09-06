import { createFileRoute } from "@tanstack/react-router";

import miloImg from "@/assets/model-milo.jpg";
import frogImg from "@/assets/model-frog.jpg";
import racecarImg from "@/assets/model-racecar.jpg";
import dogImg from "@/assets/model-dog.jpg";

const TITLE = "KitConnect — Bilingual LEGO WeDo 2.0 Build Guides for Kids";
const DESCRIPTION =
  "KitConnect gives children ages 6-10 bilingual, offline step-by-step LEGO Education WeDo 2.0 build guides, with an AI instructor constrained to real kit parts.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const models = [
  { name: "Milo the Rover", steps: 29, cat: "Science", img: miloImg, chip: "bg-sky" },
  { name: "Frog", steps: 18, cat: "Animals", img: frogImg, chip: "bg-leaf" },
  { name: "Race Car", steps: 24, cat: "Vehicles", img: racecarImg, chip: "bg-coral" },
  { name: "Kiki the Dog", steps: 31, cat: "Pets", img: dogImg, chip: "bg-butter" },
];

const metrics = [
  { value: "14", label: "Official WeDo 2.0 models", bg: "bg-butter" },
  { value: "2", label: "Languages, fully translated", bg: "bg-sky" },
  { value: "0", label: "Invented or unavailable parts", bg: "bg-leaf" },
  { value: "100%", label: "Of features work offline", bg: "bg-blush" },
];

const guarantees = [
  {
    emoji: "🧱",
    title: "Verified against the parts library",
    body: "Every piece in a generated build is matched to the WeDo 2.0 inventory by exact name and element number. Unmatched parts are rejected before rendering.",
    bar: "bg-butter",
  },
  {
    emoji: "🔢",
    title: "Quantities bounded by the kit",
    body: "Cumulative part usage is tracked across the full sequence and clamped to the physical contents of set 45300, so no step asks for bricks a child doesn't have.",
    bar: "bg-coral",
  },
  {
    emoji: "⚙️",
    title: "Physically valid connections",
    body: "Studs, friction pins, axle-in-cross-hole and gear meshes are modelled explicitly. Every sub-assembly is grounded, and moving parts trace back to the motor.",
    bar: "bg-leaf",
  },
];

const capabilities = [
  {
    emoji: "📴",
    title: "Works anywhere, no internet",
    body: "An installable app that caches the interface, manuals and narration audio, so guided building continues without connectivity.",
  },
  {
    emoji: "🔊",
    title: "No reading required",
    body: "Icon-led navigation, big friendly buttons and audio narration let a six-year-old move through a build independently.",
  },
  {
    emoji: "👨‍👧‍👦",
    title: "Made for shared tablets",
    body: "Progress, saved builds and language preference persist locally, so a tablet used by several children keeps each session.",
  },
  {
    emoji: "🌎",
    title: "English and Spanish",
    body: "Captions, part labels, placement hints and narration are authored in both languages and selectable at launch.",
  },
];

const stepSpec: [string, string][] = [
  ["Parts required", "Wheel rim ×2 · Tire ×2"],
  ["Placement markers", "Tappable, plain-language hints"],
  ["Narration", "EN / ES, cached on device"],
  ["Recovery", "Help button revisits the last step"],
];

function StudRow({ className }: { className?: string }) {
  return (
    <div className={`flex gap-2 ${className ?? ""}`} aria-hidden="true">
      <span className="h-3 w-3 rounded-full bg-coral" />
      <span className="h-3 w-3 rounded-full bg-butter" />
      <span className="h-3 w-3 rounded-full bg-leaf" />
      <span className="h-3 w-3 rounded-full bg-sky" />
    </div>
  );
}

const SectionTag = ({ children, bg }: { children: React.ReactNode; bg: string }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full ${bg} px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink`}
  >
    {children}
  </span>
);

function Index() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink antialiased">
      <div className="bg-ink">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-2 sm:px-8">
          <p className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-cream/80">
            🏆 Congressional App Challenge · 2026 submission
          </p>
          <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/80">Free · Offline</p>
        </div>
      </div>

      <header className="sticky top-0 z-20 border-b border-line bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-8 w-8 shrink-0 grid-cols-2 gap-[3px] rounded-lg bg-accent-blue p-[6px]">
              <span className="rounded-full bg-cream" />
              <span className="rounded-full bg-cream" />
              <span className="rounded-full bg-cream" />
              <span className="rounded-full bg-cream" />
            </span>
            <span className="truncate font-display text-xl font-semibold tracking-tight">KitConnect</span>
          </div>
          <nav className="hidden items-center gap-6 font-display text-[13px] font-medium text-slate md:flex">
            <a href="#models" className="transition-colors hover:text-ink">Models</a>
            <a href="#experience" className="transition-colors hover:text-ink">How it works</a>
            <a href="#ai" className="transition-colors hover:text-ink">AI Builder</a>
            <a href="#access" className="transition-colors hover:text-ink">For everyone</a>
          </nav>
          <span className="shrink-0 rounded-full bg-sky px-3.5 py-1.5 font-mono text-[11px] font-medium text-ink">
            EN · ES
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-[1180px] px-5 sm:px-8">
        {/* Hero */}
        <section className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-14 lg:py-20">
          <div className="lg:col-span-7">
            <SectionTag bg="bg-butter">Bilingual STEM fun, ages 6–10</SectionTag>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.01em] sm:text-5xl lg:text-[3.6rem]">
              Big builds for
              <br />
              little hands. <span className="text-accent-blue">No grown-up needed.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
              KitConnect turns the LEGO Education WeDo 2.0 kit into friendly, step-by-step build guides that read
              themselves aloud — in English and Spanish, entirely offline.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#models"
                className="inline-flex h-13 items-center justify-center rounded-2xl bg-accent-blue px-7 py-3.5 font-display text-[15px] font-semibold text-cream shadow-chunky transition-transform hover:-translate-y-0.5"
              >
                Explore the build library 🚀
              </a>
              <a
                href="#ai"
                className="inline-flex h-13 items-center justify-center rounded-2xl border-2 border-ink/15 bg-tile px-7 py-3.5 font-display text-[15px] font-semibold text-ink transition-colors hover:border-ink/40"
              >
                Meet the AI builder ✨
              </a>
            </div>
            <StudRow className="mt-9" />
          </div>

          <figure className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-line bg-tile shadow-tile">
              <img
                src={miloImg}
                alt="Milo the Rover assembled from LEGO Education WeDo 2.0 pieces"
                width={768}
                height={768}
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <figcaption className="mt-3.5 flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-sky px-2.5 py-1 font-mono text-[10px] font-medium text-ink">
                Step 12 / 29
              </span>
              <span className="text-[13px] leading-snug text-slate">
                <span className="font-semibold text-ink">Milo the Rover</span> — snap the wheel rims onto the axles on
                both sides of the frame.
              </span>
            </figcaption>
          </figure>
        </section>

        {/* Metrics */}
        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className={`rounded-3xl ${m.bg} p-6 shadow-tile-sm lg:p-7`}>
              <p className="font-display text-4xl font-semibold tracking-tight lg:text-5xl">{m.value}</p>
              <p className="mt-2 text-[13px] font-semibold leading-snug text-ink/70">{m.label}</p>
            </div>
          ))}
        </section>

        {/* Models */}
        <section id="models" className="scroll-mt-24 py-14 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <div>
              <SectionTag bg="bg-sky">The build library</SectionTag>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                14 official builds, zero frustration
              </h2>
            </div>
            <p className="font-mono text-[11px] text-slate">Set 45300 · 280 elements</p>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
            {models.map((m) => (
              <article
                key={m.name}
                className="group overflow-hidden rounded-3xl border border-line bg-tile shadow-tile-sm transition-transform hover:-translate-y-1 hover:shadow-tile"
              >
                <div className="overflow-hidden">
                  <img
                    src={m.img}
                    alt={`${m.name} built from LEGO WeDo 2.0 pieces`}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="truncate font-display text-[15px] font-semibold">{m.name}</h3>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className={`rounded-full ${m.chip} px-2.5 py-1 font-mono text-[10px] font-medium text-ink`}>
                      {m.cat}
                    </span>
                    <span className="font-mono text-[11px] text-slate">{m.steps} steps</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl rounded-2xl bg-blush p-5 text-[14px] leading-relaxed text-ink/80">
            Plus Flower, Helicopter, Hopper, Rhino, Grabber, Recycling Truck and Driving Base — every sequence
            transcribed from the official instructions and checked against the real kit inventory.
          </p>
        </section>

        {/* Step experience */}
        <section id="experience" className="scroll-mt-24 py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <SectionTag bg="bg-leaf">Inside a step</SectionTag>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                One instruction at a time, read aloud.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate">
                Each screen shows the build exactly as it should look, the pieces needed for that step, and tappable
                markers that explain where every brick goes. Friendly narration reads everything aloud for kids who
                can't read yet.
              </p>
              <dl className="mt-8 overflow-hidden rounded-3xl border border-line bg-tile shadow-tile-sm">
                {stepSpec.map(([k, v], i) => (
                  <div
                    key={k}
                    className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 ${
                      i > 0 ? "border-t border-line" : ""
                    }`}
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate">{k}</dt>
                    <dd className="text-right text-[13px] font-bold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <figure className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-line bg-tile shadow-tile">
                <img
                  src={racecarImg}
                  alt="Step illustration showing a race car assembly with the newest pieces attached"
                  loading="lazy"
                  width={768}
                  height={768}
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3.5 flex items-start gap-3">
                <span className="mt-0.5 shrink-0 rounded-full bg-coral px-2.5 py-1 font-mono text-[10px] font-medium text-ink">
                  Tip
                </span>
                <span className="text-[13px] leading-snug text-slate">
                  Newly added pieces glow against the previous step, so kids always know what just changed.
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* AI */}
        <section id="ai" className="scroll-mt-24 py-14 sm:py-20">
          <SectionTag bg="bg-blush">AI Creative Instructor</SectionTag>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
            A child dreams it up. The app only builds with real bricks.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate">
            Ask for “a red race car” and KitConnect invents an original 8–12 step build — then checks every piece
            before showing it. If an idea can't be built from the kit, the app says so instead of making things up.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {guarantees.map((g) => (
              <div
                key={g.title}
                className="overflow-hidden rounded-3xl border border-line bg-tile shadow-tile-sm transition-transform hover:-translate-y-1"
              >
                <div className={`h-2.5 ${g.bar}`} />
                <div className="p-6">
                  <span className="text-3xl" aria-hidden="true">{g.emoji}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{g.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate">{g.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Access */}
        <section id="access" className="scroll-mt-24 py-14 sm:py-20">
          <SectionTag bg="bg-butter">Built for real life</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Made for the conditions students actually have.
          </h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="flex gap-4 rounded-3xl border border-line bg-tile p-6 shadow-tile-sm transition-transform hover:-translate-y-0.5"
              >
                <span className="text-2xl" aria-hidden="true">{c.emoji}</span>
                <div>
                  <h3 className="font-display text-[16px] font-semibold">{c.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="py-14 sm:py-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-center sm:px-12 sm:py-16">
            <StudRow className="justify-center" />
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-semibold leading-snug tracking-tight text-cream sm:text-4xl">
              No child should have to wait for help to keep building.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-cream/75">
              KitConnect was built for children in low-income and migrant families who share a single tablet and often
              build alone. It is free, bilingual and fully offline.
            </p>
            <a
              href="#models"
              className="mt-8 inline-flex h-13 items-center justify-center rounded-2xl bg-butter px-8 py-3.5 font-display text-[15px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Start building 🧱
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-[1180px] gap-2 px-5 py-8 font-mono text-[11px] uppercase tracking-[0.12em] text-slate sm:flex sm:justify-between sm:px-8">
          <p>KitConnect · Bilingual offline STEM building</p>
          <p>Congressional App Challenge 2026</p>
        </div>
      </footer>
    </div>
  );
}
