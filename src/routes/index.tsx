import { createFileRoute } from "@tanstack/react-router";

import miloImg from "@/assets/model-milo.jpg";
import frogImg from "@/assets/model-frog.jpg";
import racecarImg from "@/assets/model-racecar.jpg";
import dogImg from "@/assets/model-dog.jpg";

const TITLE = "KitConnect — Bilingual LEGO WeDo 2.0 Build Guides for Kids";
const DESCRIPTION =
  "KitConnect gives kids ages 6-10 bilingual, offline step-by-step LEGO Education WeDo 2.0 build guides, plus an AI instructor constrained to real parts.";

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
  { name: "Milo the Rover", meta: "29 steps · science", img: miloImg, tint: "bg-leaf/15" },
  { name: "Frog", meta: "18 steps · animals", img: frogImg, tint: "bg-leaf/15" },
  { name: "Race Car", meta: "24 steps · vehicles", img: racecarImg, tint: "bg-coral/15" },
  { name: "Kiki the Dog", meta: "31 steps · pets", img: dogImg, tint: "bg-butter/20" },
];

const guarantees = [
  {
    title: "Real parts only",
    body: "Every piece is checked against the WeDo 2.0 library by exact name and part number. Invented pieces are dropped before a child ever sees them.",
  },
  {
    title: "Quantities that match the box",
    body: "Usage is tracked across the whole build and clamped, so a step never asks for more bricks than the kit actually holds.",
  },
  {
    title: "Connections that really work",
    body: "Stud, friction pin, axle in a cross hole, gear mesh. Nothing floats, and anything that moves traces back to the motor.",
  },
];

const access = [
  { title: "Installable app", body: "Caches the shell, kit manuals and narration audio so it keeps working with no signal." },
  { title: "No reading required", body: "Big icons, huge touch targets and a warm voice that reads every step aloud." },
  { title: "Shared devices", body: "Progress, saved builds and settings live on the device and survive going offline." },
  { title: "English & Spanish", body: "Every caption, pin and narration line is translated, chosen right at the splash screen." },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-cream font-body text-ink">
      <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-blush/40 blur-2xl" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-butter/40 blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-leaf/30 blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-5 py-6">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1" aria-hidden="true">
              <span className="block h-7 w-7 rounded-md border-2 border-ink/10 bg-coral shadow-tile-sm" />
              <span className="mt-2 block h-7 w-7 rounded-md border-2 border-ink/10 bg-butter shadow-tile-sm" />
              <span className="block h-7 w-7 rounded-md border-2 border-ink/10 bg-leaf shadow-tile-sm" />
            </div>
            <div>
              <p className="font-display text-2xl font-bold leading-none">KitConnect</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ink/50">Build · Learn · Play</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex rounded-full border border-ink/10 bg-tile/70 p-1">
              <span className="rounded-full bg-ink px-4 py-1.5 text-sm font-bold text-cream">EN</span>
              <span className="rounded-full px-4 py-1.5 text-sm font-bold text-ink/50">ES</span>
            </div>
            <a
              href="#models"
              className="hidden items-center gap-2 rounded-full border border-ink/10 bg-sky px-4 py-2 text-sm font-extrabold text-ink shadow-tile-sm sm:flex"
            >
              See the builds
            </a>
          </div>
        </header>

        <section className="mt-8 grid gap-5 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-tile p-7 shadow-tile lg:col-span-8">
            <span className="absolute right-6 top-6 animate-float text-4xl" style={{ "--r": "12deg" } as React.CSSProperties}>
              🧱
            </span>
            <p className="inline-block rounded-full bg-butter/60 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-ink">
              Congressional App Challenge 2026
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
              Every kid deserves a guide that says{" "}
              <span className="text-coral">exactly where the brick goes.</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-ink/70">
              KitConnect turns the LEGO Education WeDo 2.0 kit into bilingual, step-by-step build guides that work
              offline — for children ages 6–10 building without a grown-up in the room.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#models"
                className="inline-flex min-h-[56px] items-center rounded-2xl border border-ink/10 bg-coral px-7 font-display text-lg font-bold text-cream shadow-chunky transition-transform active:scale-[0.98]"
              >
                Explore the builds
              </a>
              <a
                href="#ai"
                className="inline-flex min-h-[56px] items-center rounded-2xl border border-ink/10 bg-cream px-7 font-display text-lg font-bold text-ink transition-transform active:scale-[0.98]"
              >
                ✨ How the AI works
              </a>
            </div>
            <div className="mt-7 flex items-center gap-4">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-coral" />
                <span className="h-2.5 w-2.5 rounded-full bg-butter" />
                <span className="h-2.5 w-2.5 rounded-full bg-leaf" />
                <span className="h-2.5 w-2.5 rounded-full bg-sky" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
              </div>
              <p className="text-sm font-bold text-ink/60">One small step at a time · never a leap</p>
            </div>
          </div>

          <div className="flex flex-col rounded-[2rem] border border-ink/10 bg-tile p-6 shadow-tile lg:col-span-4">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ink/50">By the numbers</p>
            <div className="mt-4 flex items-center gap-5">
              <div
                className="relative grid h-24 w-24 place-items-center rounded-full"
                style={{ background: "conic-gradient(var(--coral) 0 75%, color-mix(in oklab, var(--ink) 10%, transparent) 75% 100%)" }}
              >
                <div className="grid h-[86px] w-[86px] place-items-center rounded-full bg-tile text-center">
                  <div>
                    <p className="font-display text-3xl font-bold leading-none">14</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-ink/50">Kits</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-display text-lg font-bold">2 languages</p>
                <p className="font-display text-lg font-bold text-coral">0 invented parts</p>
              </div>
            </div>
            <div className="mt-5 rounded-2xl border border-ink/10 bg-cream p-4">
              <p className="text-xs font-extrabold uppercase tracking-wider text-ink/50">Who it's for</p>
              <p className="mt-1 font-display text-lg font-bold leading-snug">
                Kids on shared, low-bandwidth tablets 📶
              </p>
              <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-ink/10">
                <div className="h-full w-full rounded-full bg-leaf" />
              </div>
              <p className="mt-2 text-sm font-semibold text-ink/60">100% of features work offline</p>
            </div>
          </div>
        </section>

        <section id="models" className="mt-6 scroll-mt-6">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold">Pick your model</h2>
            <span className="text-sm font-bold text-ink/50">WeDo 2.0 · Set 45300</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {models.map((m) => (
              <article key={m.name} className="rounded-[1.6rem] border border-ink/10 bg-tile p-4 shadow-tile-sm">
                <div className={`overflow-hidden rounded-xl ${m.tint}`}>
                  <img
                    src={m.img}
                    alt={`${m.name} built from LEGO WeDo 2.0 pieces`}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <p className="mt-3 font-display text-lg font-bold leading-tight">{m.name}</p>
                <p className="text-sm font-semibold text-ink/60">{m.meta}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-ink/50">
            Plus Flower, Helicopter, Hopper, Rhino, Grabber, Recycling Truck, Driving Base and more — every one authored
            from the official manuals.
          </p>
        </section>

        <section className="mt-6 rounded-[2rem] border border-ink/10 bg-tile p-6 shadow-tile sm:p-7">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ink/50">Inside a step</p>
              <h2 className="mt-2 font-display text-3xl font-bold">Read it, hear it, tap it.</h2>
              <p className="mt-3 text-ink/70">
                Each screen shows the assembly exactly as it should look, the pieces to grab, and tappable pins that
                explain where every brick seats. A warm voice reads the whole step aloud for kids who can't read yet.
              </p>
              <div className="mt-4 rounded-2xl border border-butter bg-butter/20 p-4">
                <p className="text-sm font-extrabold text-ink/70">Parts you need</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-tile px-3 py-1.5 text-sm font-bold">
                    🛞 Wheel rim
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-coral text-[11px] text-cream">2</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-tile px-3 py-1.5 text-sm font-bold">
                    ⭕ Tire
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-coral text-[11px] text-cream">2</span>
                  </span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex min-h-[52px] items-center rounded-2xl border border-ink/10 bg-ink px-6 font-display font-bold text-cream">
                  Next step
                </span>
                <span className="inline-flex min-h-[52px] items-center rounded-2xl border-2 border-coral/40 bg-tile px-6 font-display font-bold text-coral">
                  I'm stuck, help!
                </span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-cream">
              <img
                src={miloImg}
                alt="Step illustration showing the rover assembly with the newest pieces attached"
                loading="lazy"
                width={768}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
              <span className="absolute left-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-coral text-cream shadow-md">
                📍
              </span>
            </div>
          </div>
        </section>

        <section id="ai" className="mt-6 scroll-mt-6 rounded-[2rem] border border-ink/10 bg-tile p-6 shadow-tile sm:p-7">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ink/50">The AI Creative Instructor</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold">
            A child types an idea. It can only answer with real bricks.
          </h2>
          <p className="mt-3 max-w-2xl text-ink/70">
            "A red race car." "A dinosaur." KitConnect generates a brand-new 8–12 step build, then validates every
            single part before a child sees it. If an idea can't be built from the box, it says so instead of guessing.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {guarantees.map((g, i) => (
              <div key={g.title} className="rounded-2xl border border-ink/10 bg-cream p-5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-coral font-display text-sm font-bold text-cream">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug">{g.title}</h3>
                <p className="mt-2 text-sm text-ink/65">{g.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {access.map((a) => (
            <div key={a.title} className="rounded-[1.6rem] border border-ink/10 bg-tile p-5 shadow-tile-sm">
              <h3 className="font-display text-lg font-bold leading-snug">{a.title}</h3>
              <p className="mt-2 text-sm text-ink/65">{a.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 rounded-[2rem] border border-ink/10 bg-tile p-8 text-center shadow-tile">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Built so a curious kid never has to wait for help.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            KitConnect was made for children from low-income and migrant families who share a single tablet and often
            build alone. Free, bilingual, and fully offline.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#models"
              className="inline-flex min-h-[56px] items-center rounded-2xl border border-ink/10 bg-coral px-7 font-display text-lg font-bold text-cream shadow-chunky transition-transform active:scale-[0.98]"
            >
              Explore the builds
            </a>
          </div>
        </section>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 pb-4 text-sm font-semibold text-ink/50">
          <p>KitConnect · made for curious builders · works offline on any tablet</p>
          <p>Congressional App Challenge 2026</p>
        </footer>
      </div>
    </div>
  );
}
