import Section from "./Section";
import { stack } from "@/lib/data";

export default function Stack() {
  // Duplicate for seamless marquee loop
  const items = [...stack, ...stack];
  return (
    <Section id="stack" number="05" title="Stack">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <h3 className="max-w-xl text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          Tools I <span className="italic text-fg-muted">reach for</span>.
        </h3>
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-dim">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Hover to pause
        </span>
      </div>
      <div className="relative -mx-6 overflow-hidden md:-mx-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent"
        />
        <div className="marquee-track flex w-max gap-3 whitespace-nowrap py-4">
          {items.map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="rounded-full border border-line bg-bg-elev/40 px-4 py-2 font-mono text-sm text-fg/85 transition-colors hover:border-accent hover:text-accent"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
