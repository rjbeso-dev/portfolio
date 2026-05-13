"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, ImageIcon, X } from "lucide-react";
import Section from "./Section";
import { projects, type ProjectScreenshot } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const statusStyle: Record<string, string> = {
  Live: "border-accent/40 text-accent",
  "In progress": "border-accent-warm/40 text-accent-warm",
  "Case study": "border-line text-fg-muted",
};

type LightboxState = {
  screenshots: ProjectScreenshot[];
  index: number;
};

export default function Projects() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const next = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        index: (prev.index + 1) % prev.screenshots.length,
      };
    });
  }, []);

  const previous = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        index:
          (prev.index - 1 + prev.screenshots.length) % prev.screenshots.length,
      };
    });
  }, []);

  // Lock body scroll + keyboard navigation while lightbox is open
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") previous();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, close, next, previous]);

  return (
    <Section id="projects" number="04" title="Case Studies">
      <p className="mb-12 max-w-2xl text-lg text-fg-muted md:text-xl">
        Real problems, the approach I took, and the outcome.
      </p>
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => {
          const hasExternalLink = p.href && p.href !== "#";
          return (
            <motion.li
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-bg-elev/30 p-6 transition-all hover:border-fg/30 hover:bg-bg-elev md:p-7 lg:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/[0.04] opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                />

                {/* Header: year + category + status pill */}
                <div className="relative mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 font-mono text-[11px] text-fg-dim">
                    <span>{p.year}</span>
                    <span className="h-px w-6 bg-fg-dim" />
                    <span className="uppercase tracking-[0.18em]">{p.category}</span>
                  </div>
                  {p.status && (
                    <span
                      className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                        statusStyle[p.status] ?? "border-line text-fg-muted"
                      }`}
                    >
                      {p.status}
                    </span>
                  )}
                </div>

                {/* Title */}
                <div className="relative flex items-start justify-between gap-4">
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                    {hasExternalLink ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                      >
                        {p.name}
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-fg-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                      </a>
                    ) : (
                      <span>{p.name}</span>
                    )}
                  </h3>
                </div>

                {/* Problem / Approach / Outcome */}
                <div className="relative mt-6 space-y-4 text-sm leading-relaxed text-fg-muted md:text-base">
                  <div>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
                      Problem
                    </p>
                    <p>{p.problem}</p>
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
                      Approach
                    </p>
                    <p>{p.approach}</p>
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
                      Outcome
                    </p>
                    <p className="text-fg/85">{p.outcome}</p>
                  </div>
                </div>

                {/* Screenshots gallery — horizontal scroll, click to lightbox */}
                {p.screenshots && p.screenshots.length > 0 && (
                  <div className="relative mt-7">
                    <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
                      <ImageIcon className="h-3 w-3" />
                      <span>Screenshots</span>
                      <span className="text-fg-dim/70">· click to enlarge</span>
                    </div>
                    <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
                      {p.screenshots.map((s, j) => (
                        <button
                          key={j}
                          type="button"
                          onClick={() =>
                            setLightbox({
                              screenshots: p.screenshots!,
                              index: j,
                            })
                          }
                          title={s.caption || s.alt}
                          className="group/shot relative block aspect-video w-48 shrink-0 cursor-zoom-in overflow-hidden rounded-md border border-line bg-bg-elev/60 transition-all hover:border-accent/40"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={s.src}
                            alt={s.alt}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover/shot:scale-105"
                          />
                          {s.caption && (
                            <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-bg/90 px-2 py-1 text-left font-mono text-[9px] uppercase tracking-wider text-fg-muted opacity-0 backdrop-blur transition-all duration-300 group-hover/shot:translate-y-0 group-hover/shot:opacity-100">
                              {s.caption}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="relative mt-7 flex flex-wrap gap-1.5 border-t border-line/60 pt-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </motion.li>
          );
        })}
      </ul>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.screenshots[lightbox.index].alt}
          >
            {/* Backdrop — click to close */}
            <button
              type="button"
              onClick={close}
              aria-label="Close screenshot viewer"
              className="absolute inset-0 cursor-zoom-out bg-bg/95 backdrop-blur-md"
            />

            {/* Counter */}
            <span className="pointer-events-none absolute left-6 top-6 z-10 font-mono text-xs uppercase tracking-[0.22em] text-fg-muted">
              {lightbox.index + 1} / {lightbox.screenshots.length}
            </span>

            {/* Close button */}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-6 top-6 z-10 grid h-10 w-10 place-items-center rounded-full border border-line bg-bg-elev/80 text-fg-muted transition-all hover:border-accent/60 hover:text-fg"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Prev */}
            {lightbox.screenshots.length > 1 && (
              <button
                type="button"
                onClick={previous}
                aria-label="Previous screenshot"
                className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 place-items-center rounded-full border border-line bg-bg-elev/80 text-fg-muted transition-all hover:border-accent/60 hover:text-fg md:grid md:h-12 md:w-12"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}

            {/* Next */}
            {lightbox.screenshots.length > 1 && (
              <button
                type="button"
                onClick={next}
                aria-label="Next screenshot"
                className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 place-items-center rounded-full border border-line bg-bg-elev/80 text-fg-muted transition-all hover:border-accent/60 hover:text-fg md:grid md:h-12 md:w-12"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={`shot-${lightbox.index}`}
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="relative z-[5] mx-6 max-h-[82vh] max-w-[92vw]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox.screenshots[lightbox.index].src}
                alt={lightbox.screenshots[lightbox.index].alt}
                className="max-h-[82vh] max-w-[92vw] rounded-lg border border-line shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              {lightbox.screenshots[lightbox.index].caption && (
                <p className="mx-auto mt-4 max-w-2xl text-center font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted">
                  {lightbox.screenshots[lightbox.index].caption}
                </p>
              )}
            </motion.div>

            {/* Mobile prev/next inline at bottom */}
            {lightbox.screenshots.length > 1 && (
              <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3 md:hidden">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line bg-bg-elev/80 text-fg-muted transition-all active:scale-95"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line bg-bg-elev/80 text-fg-muted transition-all active:scale-95"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
