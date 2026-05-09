"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { projects } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const statusStyle: Record<string, string> = {
  Live: "border-accent/40 text-accent",
  "In progress": "border-accent-warm/40 text-accent-warm",
  "Case study": "border-line text-fg-muted",
};

export default function Projects() {
  return (
    <Section id="projects" number="04" title="Case Studies">
      <p className="mb-12 max-w-2xl text-lg text-fg-muted md:text-xl">
        Real problems, the approach I took, and the outcome.
      </p>
      <ul className="grid gap-4 lg:grid-cols-2">
        {projects.map((p, i) => (
          <motion.li
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
          >
            <a
              href={p.href || "#"}
              target={p.href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-bg-elev/30 p-6 transition-all hover:border-fg/30 hover:bg-bg-elev md:p-8"
            >
              <div
                aria-hidden
                className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/[0.04] opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
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
                  {p.name}
                </h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-fg-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
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

              {/* Tags */}
              <div className="relative mt-7 flex flex-wrap gap-1.5 pt-5 border-t border-line/60">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
