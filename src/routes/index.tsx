import { createFileRoute } from "@tanstack/react-router";

import miloImg from "@/assets/model-milo.jpg";
import frogImg from "@/assets/model-frog.jpg";
import racecarImg from "@/assets/model-racecar.jpg";
import dogImg from "@/assets/model-dog.jpg";

const APP_URL = "https://kit-build-bloom.base44.app";

const TITLE = "KitConnect — Bilingual, Offline LEGO® STEM Build Guides for Kids";
const DESCRIPTION =
  "KitConnect turns LEGO Education WeDo 2.0 and SPIKE Prime kits into voice-narrated, step-by-step build guides in English and Spanish — no adult, Wi-Fi, or reading required.";

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

type Model = {
  en: string;
  es: string;
  color: string; // brand hex for the chip
  kit: "WeDo 2.0" | "SPIKE Prime";
  img?: string;
};

const wedoModels: Model[] = [
  { en: "Milo the Science Rover", es: "Milo el Robot Científico", color: "#4CAF50", kit: "WeDo 2.0", img: miloImg },
  { en: "Young Frog", es: "La Rana Saltarina", color: "#4CAF50", kit: "WeDo 2.0", img: frogImg },
  { en: "Flower Robot", es: "Robot Flor", color: "#4CAF50", kit: "WeDo 2.0" },
  { en: "Helicopter", es: "El Helicóptero", color: "#2563EB", kit: "WeDo 2.0" },
  { en: "Pulling Robot", es: "Robot de Tracción", color: "#16A34A", kit: "WeDo 2.0" },
  { en: "Race Car", es: "Auto de Carreras", color: "#DC2626", kit: "WeDo 2.0", img: racecarImg },
  { en: "Recycling Truck", es: "Camión de Reciclaje", color: "#16A34A", kit: "WeDo 2.0" },
];

const spikeModels: Model[] = [
  { en: "Driving Base", es: "Base Motriz", color: "#7C3AED", kit: "SPIKE Prime" },
  { en: "Hopper", es: "El Saltador", color: "#EAB308", kit: "SPIKE Prime" },
  { en: "Rhino", es: "El Rinoceronte", color: "#3B82F6", kit: "SPIKE Prime" },
  { en: "Grabber", es: "La Pinza", color: "#9333EA", kit: "SPIKE Prime" },
  { en: "Grabber 2", es: "La Pinza 2", color: "#7C3AED", kit: "SPIKE Prime" },
  { en: "Grabbers", es: "Las Pinzas", color: "#9333EA", kit: "SPIKE Prime" },
  { en: "Kiki the Dog", es: "Kiki el Perro", color: "#F59E0B", kit: "SPIKE Prime", img: dogImg },
];

const metrics = [
  { value: "14", label: "Ready-to-build models across two kits", bg: "bg-butter" },
  { value: "2", label: "Languages, fully translated and narrated", bg: "bg-sky" },
  { value: "0", label: "Invented or unavailable parts, ever", bg: "bg-leaf" },
  { value: "100%", label: "Of the app works offline", bg: "bg-blush" },
];

const howItWorks = [
  {
    emoji: "🧱",
    step: "1",
    title: "Pick your model",
    es: "Elige tu modelo",
    body: "14 official builds from the WeDo 2.0 and SPIKE Prime kits, each shown as a big friendly tile.",
    bar: "bg-butter",
  },
  {
    emoji: "🔊",
    step: "2",
    title: "Follow voiced steps",
    es: "Sigue los pasos",
    body: "Small steps of 1–3 pieces, with a parts callout, tappable pins, and a warm narrator reading everything aloud.",
    bar: "bg-sky",
  },
  {
    emoji: "🏆",
    step: "3",
    title: "Earn trophies",
    es: "Gana trofeos",
    body: "Leveling rings, collectible badges, streaks, and daily challenges celebrate every finished build.",
    bar: "bg-coral",
  },
];

const guarantees = [
  {
    emoji: "✅",
    title: "Only real WeDo 2.0 pieces",
    body: "Exact names, part numbers, and quantities are validated against the official parts library. Unmatched parts are rejected — nothing can be invented.",
    bar: "bg-butter",
  },
  {
    emoji: "⚙️",
    title: "Real LEGO connection rules",
    body: "Studs, pins, axles, gear mesh, bushings, and ball joints are enforced — and a running inventory means a piece is only used after a previous step added it.",
    bar: "bg-coral",
  },
  {
    emoji: "🖼️",
    title: "Illustrations that stay consistent",
    body: "Isometric images are generated step by step, each one building on the last, so no pieces appear or vanish between steps.",
    bar: "bg-leaf",
  },
];

const capabilities = [
  {
    emoji: "🌎",
    title: "English & Spanish",
    body: "Every screen, instruction, and narration switches languages instantly — icon-based navigation means no literacy required.",
  },
  {
    emoji: "📴",
    title: "Offline & low-bandwidth",
    body: "An installable app designed for shared devices on slow connections. Guides, audio, and progress all work without Wi-Fi.",
  },
  {
    emoji: "🔊",
    title: "No reading required",
    body: "A warm, friendly narrator reads each step aloud — number, caption, parts, and placement help — so pre-readers build independently.",
  },
  {
    emoji: "🆘",
    title: "“I'm stuck” help",
    body: "Every step has a dedicated help panel with extra kid-friendly explanation for the moment a child gets stuck.",
  },
];

const bilingualCopy: [string, string][] = [
  ["Pick your model", "Elige tu modelo"],
  ["Parts you need", "Piezas que necesitas"],
  ["I'm stuck, help!", "¡Necesito ayuda!"],
  ["Next step / Go back", "Siguiente paso / Regresar"],
  ["I did it!", "¡Lo logré!"],
  ["Create with AI", "Crear con IA"],
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

function ModelCard({ m }: { m: Model }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-line bg-tile shadow-tile-sm transition-transform hover:-translate-y-1 hover:shadow-tile">
      {m.img ? (
        <div className="overflow-hidden">
          <img
            src={m.img}
            alt={`${m.en} (${m.es}) built from LEGO Education pieces`}
            loading="lazy"
            width={768}
            height={768}
            className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div
          className="flex aspect-square w-full items-center justify-center"
          style={{ backgroundColor: `${m.color}22` }}
          aria-hidden="true"
        >
          <span
            className="grid h-16 w-16 grid-cols-2 gap-1.5 rounded-2xl p-3"
            style={{ backgroundColor: m.color }}
          >
            <span className="rounded-full bg-white/70" />
            <span className="rounded-full bg-white/70" />
            <span className="rounded-full bg-white/70" />
            <span className="rounded-full bg-white/70" />
          </span>
        </div>
      )}
      <div className="p-4">
        <h3 className="truncate font-display text-[15px] font-semibold">{m.en}</h3>
        <p className="truncate text-[12.5px] italic text-slate">{m.es}</p>
        <div className="mt-2.5 flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: m.color }}
            aria-hidden="true"
          />
          <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-slate">{m.kit}</span>
        </div>
      </div>
    </article>
  );
}

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
            <a href="#how" className="transition-colors hover:text-ink">How it works</a>
            <a href="#models" className="transition-colors hover:text-ink">The kits</a>
            <a href="#ai" className="transition-colors hover:text-ink">AI Builder</a>
            <a href="#access" className="transition-colors hover:text-ink">For every kid</a>
          </nav>
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-ink px-4 py-2 font-display text-[12.5px] font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            Open the app
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-[1180px] px-5 sm:px-8">
        {/* Hero */}
        <section className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-14 lg:py-20">
          <div className="lg:col-span-7">
            <SectionTag bg="bg-butter">Bilingual · Offline · Ages 6–10</SectionTag>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.01em] sm:text-5xl lg:text-[3.6rem]">
              Build LEGO STEM projects
              <br />
              <span className="text-accent-blue">without a grown-up.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
              KitConnect turns the LEGO Education WeDo 2.0 and SPIKE Prime kits into step-by-step build guides that
              read themselves aloud — in English and Spanish. Seven models per kit, voice narration, and it all runs
              offline.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-13 items-center justify-center rounded-2xl bg-accent-blue px-7 py-3.5 font-display text-[15px] font-semibold text-cream shadow-chunky transition-transform hover:-translate-y-0.5"
              >
                Start building free 🚀
              </a>
              <a
                href="#models"
                className="inline-flex h-13 items-center justify-center rounded-2xl border-2 border-ink/15 bg-tile px-7 py-3.5 font-display text-[15px] font-semibold text-ink transition-colors hover:border-ink/40"
              >
                See the 14 models
              </a>
            </div>
            <StudRow className="mt-9" />
          </div>

          <figure className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-line bg-tile shadow-tile">
              <img
                src={miloImg}
                alt="Milo the Science Rover assembled from LEGO Education WeDo 2.0 pieces"
                width={768}
                height={768}
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <figcaption className="mt-3.5 flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-sky px-2.5 py-1 font-mono text-[10px] font-medium text-ink">
                Paso 12
              </span>
              <span className="text-[13px] leading-snug text-slate">
                <span className="font-semibold text-ink">Milo the Science Rover</span> — every step is read aloud in
                English or Spanish, with the parts you need called out first.
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

        {/* How it works */}
        <section id="how" className="scroll-mt-24 py-14 sm:py-20">
          <SectionTag bg="bg-leaf">How it works</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Three steps to “I did it!”
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {howItWorks.map((h) => (
              <div
                key={h.title}
                className="overflow-hidden rounded-3xl border border-line bg-tile shadow-tile-sm transition-transform hover:-translate-y-1"
              >
                <div className={`h-2.5 ${h.bar}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl" aria-hidden="true">{h.emoji}</span>
                    <span className="font-mono text-[11px] font-medium text-slate">Step {h.step}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{h.title}</h3>
                  <p className="mt-0.5 font-display text-[13px] font-medium italic text-slate">{h.es}</p>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate">{h.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Models */}
        <section id="models" className="scroll-mt-24 py-14 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <div>
              <SectionTag bg="bg-sky">Meet the kits</SectionTag>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                14 ready-to-build models
              </h2>
            </div>
            <p className="font-mono text-[11px] text-slate">WeDo 2.0 · Set 45300 + SPIKE Prime</p>
          </div>

          <h3 className="mt-9 flex items-center gap-3 font-display text-lg font-semibold">
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#4CAF50" }} aria-hidden="true" />
            LEGO® Education WeDo 2.0
            <span className="font-mono text-[11px] font-normal text-slate">7 models</span>
          </h3>
          <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {wedoModels.map((m) => (
              <ModelCard key={m.en} m={m} />
            ))}
          </div>

          <h3 className="mt-12 flex items-center gap-3 font-display text-lg font-semibold">
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#7C3AED" }} aria-hidden="true" />
            LEGO® Education SPIKE Prime
            <span className="font-mono text-[11px] font-normal text-slate">7 models</span>
          </h3>
          <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {spikeModels.map((m) => (
              <ModelCard key={m.en} m={m} />
            ))}
          </div>
        </section>

        {/* Bilingual */}
        <section className="scroll-mt-24 py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <SectionTag bg="bg-blush">Elige tu idioma</SectionTag>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
                Every word, twice.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate">
                Kids pick their language at launch and every screen, instruction, and voice narration switches
                instantly. Icon-based navigation means even pre-readers never get lost.
              </p>
            </div>
            <div className="lg:col-span-7">
              <dl className="overflow-hidden rounded-3xl border border-line bg-tile shadow-tile-sm">
                {bilingualCopy.map(([en, es], i) => (
                  <div
                    key={en}
                    className={`grid grid-cols-2 items-center gap-4 px-5 py-4 ${i > 0 ? "border-t border-line" : ""}`}
                  >
                    <dt className="text-[13.5px] font-bold">{en}</dt>
                    <dd className="text-right text-[13.5px] font-semibold italic text-accent-blue">{es}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* AI */}
        <section id="ai" className="scroll-mt-24 py-14 sm:py-20">
          <SectionTag bg="bg-coral">AI Creative Instructor</SectionTag>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
            Describe it. KitConnect invents a build you can really make.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate">
            A child types or picks an idea — “a red race car,” “a dinosaur” — and the app plans a brand-new 8–12 step
            project on the spot: original steps, parts lists, placement instructions, and isometric illustrations,
            complete with voice narration and a help button, just like the official kits.
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
          <SectionTag bg="bg-butter">Built for every kid</SectionTag>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
            Made for the conditions students actually have.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate">
            Built for children ages 6–10 — especially those from low-income or migrant families — and for classrooms
            and community programs sharing tablets, often with limited or no internet.
          </p>
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

          {/* Trophy room */}
          <div className="mt-9 grid items-center gap-8 rounded-3xl border border-line bg-tile p-7 shadow-tile-sm sm:p-9 lg:grid-cols-2">
            <div>
              <SectionTag bg="bg-butter">Builder's Trophy Room</SectionTag>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Progress worth showing off.
              </h3>
              <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-slate">
                Leveling rings, collectible badges, streaks, and daily and weekly challenges keep kids coming back.
                A quick login saves each child's builds, streaks, and trophies on shared devices.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { emoji: "🥇", label: "Badges" },
                { emoji: "🔥", label: "Streaks" },
                { emoji: "⭐", label: "Levels" },
                { emoji: "📅", label: "Daily quests" },
                { emoji: "🗓️", label: "Weekly goals" },
                { emoji: "🏆", label: "Trophies" },
              ].map((t) => (
                <div
                  key={t.label}
                  className="flex flex-col items-center gap-2 rounded-2xl bg-cream px-3 py-5 text-center"
                >
                  <span className="text-3xl" aria-hidden="true">{t.emoji}</span>
                  <span className="font-display text-[12px] font-semibold">{t.label}</span>
                </div>
              ))}
            </div>
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
              KitConnect is free, bilingual, and fully offline — made for kids who share a tablet and often build
              alone. ¡Lo logré!
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex h-13 items-center justify-center rounded-2xl bg-butter px-8 py-3.5 font-display text-[15px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Open KitConnect 🧱
            </a>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-cream/50">
              kit-build-bloom.base44.app · Installable, works offline
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-[1180px] gap-2 px-5 py-8 font-mono text-[11px] uppercase tracking-[0.12em] text-slate sm:flex sm:justify-between sm:px-8">
          <p>KitConnect · Bilingual, offline LEGO® STEM build guides for kids</p>
          <p>Congressional App Challenge 2026</p>
        </div>
      </footer>
    </div>
  );
}
