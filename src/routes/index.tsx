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
  { name: "Milo the Rover", meta: "29 steps · Science", img: miloImg },
  { name: "Frog", meta: "18 steps · Animals", img: frogImg },
  { name: "Race Car", meta: "24 steps · Vehicles", img: racecarImg },
  { name: "Kiki the Dog", meta: "31 steps · Pets", img: dogImg },
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
    body: "Stud, friction pin, axle-in-cross-hole and gear mesh are modeled explicitly. Every sub-assembly is grounded, and moving elements trace back to the motor.",
  },
];

const capabilities = [
  {
    title: "Offline-first delivery",
    body: "An installable progressive web app caches the interface, manuals and narration audio, so guided building continues without connectivity.",
  },
  {
    title: "Pre-literate interface",
    body: "Icon-led navigation, large touch targets and audio narration allow a six-year-old to progress through a build independently.",
  },
  {
    title: "Shared-device support",
    body: "Progress, saved builds and language preference persist locally, so a tablet used by several children retains each session.",
  },
  {
    title: "English and Spanish",
    body: "Captions, part labels, placement hints and narration are authored in both languages and selectable at launch.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink antialiased">
      <header className="sticky top-0 z-20 border-b border-line bg-cream/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-ink font-display text-sm font-semibold text-cream">
              K
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">KitConnect</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate md:flex">
            <a href="#models" className="transition-colors hover:text-ink">Models</a>
            <a href="#experience" className="transition-colors hover:text-ink">Experience</a>
            <a href="#ai" className="transition-colors hover:text-ink">AI instructor</a>
            <a href="#access" className="transition-colors hover:text-ink">Accessibility</a>
          </nav>
          <span className="rounded-md border border-line px-2.5 py-1 text-xs font-semibold tracking-wide text-slate">
            EN / ES
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="grid gap-14 border-b border-line py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">
              Congressional App Challenge 2026
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Guided STEM building for children who build on their own.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              KitConnect turns the LEGO Education WeDo 2.0 kit into bilingual, step-by-step build guides that run
              entirely offline — designed for children ages 6 to 10 learning without an adult in the room.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#models"
                className="inline-flex h-11 items-center rounded-md bg-ink px-6 text-sm font-semibold text-cream transition-colors hover:bg-accent-blue"
              >
                View the build library
              </a>
              <a
                href="#ai"
                className="inline-flex h-11 items-center rounded-md border border-line bg-tile px-6 text-sm font-semibold text-ink transition-colors hover:border-ink/30"
              >
                How the AI is constrained
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg border border-line bg-tile shadow-tile">
              <img
                src={miloImg}
                alt="Milo the Rover assembled from LEGO Education WeDo 2.0 pieces"
                width={768}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="border-t border-line px-5 py-4">
                <p className="font-display text-sm font-semibold">Step 12 of 29 · Milo the Rover</p>
                <p className="mt-1 text-sm text-slate">
                  Attach the wheel rims to the axles on both sides of the frame.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-px border-b border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-cream px-1 py-10">
              <p className="font-display text-4xl font-semibold tracking-tight">{m.value}</p>
              <p className="mt-2 text-sm leading-snug text-slate">{m.label}</p>
            </div>
          ))}
        </section>

        <section id="models" className="scroll-mt-20 border-b border-line py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">Build library</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                Authored from the official manuals
              </h2>
            </div>
            <p className="text-sm text-slate">LEGO Education WeDo 2.0 · Set 45300</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {models.map((m) => (
              <article key={m.name} className="overflow-hidden rounded-lg border border-line bg-tile">
                <img
                  src={m.img}
                  alt={`${m.name} built from LEGO WeDo 2.0 pieces`}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="aspect-square w-full object-cover"
                />
                <div className="border-t border-line px-4 py-4">
                  <h3 className="font-display text-base font-semibold">{m.name}</h3>
                  <p className="mt-1 text-sm text-slate">{m.meta}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate">
            Also includes Flower, Helicopter, Hopper, Rhino, Grabber, Recycling Truck and Driving Base — each sequence
            transcribed from the official instructions and reviewed against the kit inventory.
          </p>
        </section>

        <section id="experience" className="scroll-mt-20 border-b border-line py-20">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">Inside a step</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                One instruction at a time, read aloud.
              </h2>
              <p className="mt-5 leading-relaxed text-slate">
                Each screen presents the assembly exactly as it should appear, the parts required for that step, and
                tappable placement markers describing where every brick seats. Narration reads the full instruction
                aloud for children who cannot yet read.
              </p>
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {[
                  ["Parts required", "Wheel rim ×2, Tire ×2"],
                  ["Placement markers", "Tappable, with plain-language hints"],
                  ["Narration", "English and Spanish, cached locally"],
                  ["Recovery", "A help action revisits the previous state"],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-wrap justify-between gap-2 py-3">
                    <dt className="text-sm font-semibold">{k}</dt>
                    <dd className="text-sm text-slate">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="overflow-hidden rounded-lg border border-line bg-tile shadow-tile">
              <img
                src={racecarImg}
                alt="Step illustration showing a race car assembly with the newest pieces attached"
                loading="lazy"
                width={768}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="ai" className="scroll-mt-20 border-b border-line py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">AI Creative Instructor</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight">
            A child describes an idea. The system may only answer with real bricks.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-slate">
            Given a prompt such as “a red race car,” KitConnect generates an original 8–12 step build and validates it
            before display. If an idea cannot be constructed from the kit, the app says so rather than improvising.
          </p>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
            {guarantees.map((g, i) => (
              <div key={g.title} className="bg-cream p-6 md:p-8">
                <p className="font-display text-sm font-semibold text-accent-blue">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{g.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{g.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="access" className="scroll-mt-20 border-b border-line py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">Access and accessibility</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
            Built for the conditions students actually have.
          </h2>
          <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.title} className="border-t border-line pt-5">
                <h3 className="font-display text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="rounded-lg border border-line bg-tile px-8 py-14 text-center shadow-tile">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight">
              No child should have to wait for help to keep building.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate">
              KitConnect was built for children in low-income and migrant families who share a single tablet and often
              build alone. It is free, bilingual and fully offline.
            </p>
            <a
              href="#models"
              className="mt-8 inline-flex h-11 items-center rounded-md bg-ink px-6 text-sm font-semibold text-cream transition-colors hover:bg-accent-blue"
            >
              View the build library
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-slate">
          <p>KitConnect · Bilingual, offline STEM building for ages 6–10</p>
          <p>Congressional App Challenge 2026</p>
        </div>
      </footer>
    </div>
  );
}
