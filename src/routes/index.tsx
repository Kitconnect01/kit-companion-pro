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
  { name: "Milo the Rover", steps: 29, cat: "Science", img: miloImg },
  { name: "Frog", steps: 18, cat: "Animals", img: frogImg },
  { name: "Race Car", steps: 24, cat: "Vehicles", img: racecarImg },
  { name: "Kiki the Dog", steps: 31, cat: "Pets", img: dogImg },
];

const metrics = [
  { value: "14", label: "Official WeDo 2.0 models" },
  { value: "2", label: "Languages, fully translated" },
  { value: "0", label: "Invented or unavailable parts" },
  { value: "100%", label: "Of features work offline" },
];

const guarantees = [
  {
    title: "Verified against the parts library",
    body: "Every piece referenced in a generated build is matched to the WeDo 2.0 inventory by exact name and element number. Unmatched parts are rejected before rendering.",
  },
  {
    title: "Quantities bounded by the kit",
    body: "Cumulative part usage is tracked across the full sequence and clamped to the physical contents of set 45300, so no step can request bricks a child does not have.",
  },
  {
    title: "Physically valid connections",
    body: "Stud, friction pin, axle-in-cross-hole and gear mesh are modelled explicitly. Every sub-assembly is grounded, and moving elements trace back to the motor.",
  },
];

const capabilities = [
  {
    n: "A",
    title: "Offline-first delivery",
    body: "An installable progressive web app caches the interface, manuals and narration audio, so guided building continues without connectivity.",
  },
  {
    n: "B",
    title: "Pre-literate interface",
    body: "Icon-led navigation, large touch targets and audio narration let a six-year-old move through a build independently.",
  },
  {
    n: "C",
    title: "Shared-device support",
    body: "Progress, saved builds and language preference persist locally, so a tablet used by several children retains each session.",
  },
  {
    n: "D",
    title: "English and Spanish",
    body: "Captions, part labels, placement hints and narration are authored in both languages and selectable at launch.",
  },
];

const stepSpec: [string, string][] = [
  ["Parts required", "Wheel rim ×2 · Tire ×2"],
  ["Placement markers", "Tappable, plain-language hints"],
  ["Narration", "EN / ES, cached on device"],
  ["Recovery", "Help action revisits prior state"],
];

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate">{children}</p>
);

function Index() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink antialiased">
      <div className="border-b border-ink bg-ink">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-1.5 sm:px-8">
          <p className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-cream/70">
            Congressional App Challenge · 2026 submission
          </p>
          <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/70">Free · Offline</p>
        </div>
      </div>

      <header className="sticky top-0 z-20 border-b border-line bg-cream/90 backdrop-blur">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8 md:flex md:justify-between">
          <div className="flex min-w-0 items-baseline gap-2">
            <span className="font-display text-[19px] font-semibold tracking-tight">KitConnect</span>
            <span className="hidden font-mono text-[11px] text-slate sm:inline">/ WeDo 2.0</span>
          </div>
          <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.12em] text-slate md:flex">
            <a href="#models" className="transition-colors hover:text-ink">01 Models</a>
            <a href="#experience" className="transition-colors hover:text-ink">02 Step</a>
            <a href="#ai" className="transition-colors hover:text-ink">03 AI</a>
            <a href="#access" className="transition-colors hover:text-ink">04 Access</a>
          </nav>
          <span className="shrink-0 font-mono text-[11px] tracking-[0.1em] text-slate">EN · ES</span>
        </div>
      </header>

      <main className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <section className="grid gap-10 border-b border-line py-12 sm:py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-ink" />
              <Label>Bilingual STEM instruction</Label>
            </div>
            <h1 className="mt-5 font-display text-[2.1rem] font-semibold leading-[1.06] tracking-[-0.02em] sm:text-5xl lg:text-[3.5rem]">
              Guided STEM building
              <br className="hidden sm:block" /> for children who build
              <br className="hidden sm:block" /> on their own.
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate sm:text-lg">
              KitConnect turns the LEGO Education WeDo 2.0 kit into bilingual, step-by-step build guides that run
              entirely offline — for children ages 6 to 10 learning without an adult in the room.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#models"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-ink px-6 text-sm font-semibold text-cream transition-colors hover:bg-accent-blue"
              >
                View the build library
              </a>
              <a
                href="#ai"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-ink/20 px-6 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                How the AI is constrained
              </a>
            </div>
          </div>

          <figure className="lg:col-span-5">
            <div className="overflow-hidden border border-line bg-tile">
              <img
                src={miloImg}
                alt="Milo the Rover assembled from LEGO Education WeDo 2.0 pieces"
                width={768}
                height={768}
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 flex gap-4 border-t border-line pt-3">
              <span className="shrink-0 font-mono text-[11px] text-slate">Fig. 01</span>
              <span className="text-[13px] leading-snug text-slate">
                Step 12 of 29, <span className="text-ink">Milo the Rover</span> — attach the wheel rims to the axles on
                both sides of the frame.
              </span>
            </figcaption>
          </figure>
        </section>

        <section className="grid grid-cols-2 border-b border-line lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`py-7 lg:py-9 ${i % 2 === 1 ? "border-l border-line pl-5" : "pr-5"} ${
                i < 2 ? "border-b border-line lg:border-b-0" : ""
              } ${i > 0 ? "lg:border-l lg:pl-8" : ""}`}
            >
              <p className="font-display text-3xl font-semibold tracking-tight lg:text-[2.5rem]">{m.value}</p>
              <p className="mt-1.5 text-[13px] leading-snug text-slate">{m.label}</p>
            </div>
          ))}
        </section>

        <section id="models" className="scroll-mt-24 border-b border-line py-14 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <div>
              <Label>01 — Build library</Label>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Authored from the official manuals
              </h2>
            </div>
            <p className="font-mono text-[11px] text-slate">Set 45300 · 280 elements</p>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 lg:gap-x-8">
            {models.map((m, i) => (
              <article key={m.name}>
                <div className="overflow-hidden border border-line bg-tile">
                  <img
                    src={m.img}
                    alt={`${m.name} built from LEGO WeDo 2.0 pieces`}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-2 border-t border-line pt-2.5">
                  <h3 className="truncate font-display text-[15px] font-semibold">{m.name}</h3>
                  <span className="shrink-0 font-mono text-[11px] text-slate">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-0.5 font-mono text-[11px] text-slate">
                  {m.steps} steps · {m.cat}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-9 max-w-2xl border-l border-line pl-5 text-[13px] leading-relaxed text-slate">
            Also includes Flower, Helicopter, Hopper, Rhino, Grabber, Recycling Truck and Driving Base — each sequence
            transcribed from the official instructions and reviewed against the kit inventory.
          </p>
        </section>

        <section id="experience" className="scroll-mt-24 border-b border-line py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Label>02 — Inside a step</Label>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                One instruction at a time, read aloud.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate">
                Each screen presents the assembly exactly as it should appear, the parts required for that step, and
                tappable placement markers describing where every brick seats. Narration reads the full instruction
                aloud for children who cannot yet read.
              </p>
              <dl className="mt-8 border-t border-line">
                {stepSpec.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-line py-3">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate">{k}</dt>
                    <dd className="text-right text-[13px] font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <figure className="lg:col-span-6">
              <div className="overflow-hidden border border-line bg-tile">
                <img
                  src={racecarImg}
                  alt="Step illustration showing a race car assembly with the newest pieces attached"
                  loading="lazy"
                  width={768}
                  height={768}
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 flex gap-4 border-t border-line pt-3">
                <span className="shrink-0 font-mono text-[11px] text-slate">Fig. 02</span>
                <span className="text-[13px] leading-snug text-slate">
                  Newly added elements are highlighted against the previous assembly state.
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="ai" className="scroll-mt-24 border-b border-line py-14 sm:py-20">
          <Label>03 — AI Creative Instructor</Label>
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            A child describes an idea. The system may only answer with real bricks.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate">
            Given a prompt such as “a red race car,” KitConnect generates an original 8–12 step build and validates it
            before display. If an idea cannot be constructed from the kit, the app says so rather than improvising.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {guarantees.map((g, i) => (
              <div key={g.title} className="border-t-2 border-ink pt-4">
                <p className="font-mono text-[11px] text-slate">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-[17px] font-semibold leading-snug">{g.title}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-slate">{g.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="access" className="scroll-mt-24 border-b border-line py-14 sm:py-20">
          <Label>04 — Access and accessibility</Label>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Built for the conditions students actually have.
          </h2>
          <div className="mt-9 grid gap-x-14 sm:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-b border-line py-5">
                <span className="font-mono text-[11px] text-slate">{c.n}</span>
                <div>
                  <h3 className="font-display text-[15px] font-semibold">{c.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-14 sm:py-20 lg:grid-cols-12">
          <h2 className="font-display text-2xl font-semibold leading-snug tracking-tight sm:text-[2rem] lg:col-span-7">
            No child should have to wait for help to keep building.
          </h2>
          <div className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-slate">
              KitConnect was built for children in low-income and migrant families who share a single tablet and often
              build alone. It is free, bilingual and fully offline.
            </p>
            <a
              href="#models"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-sm bg-ink px-6 text-sm font-semibold text-cream transition-colors hover:bg-accent-blue"
            >
              View the build library
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
