"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" number="03" title="Projects">
      <p className="mb-12 max-w-2xl text-lg text-fg-muted md:text-xl">
        A few things I've built — side projects, tools, and experiments.
      </p>
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.li
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={p.href || "#"}
              target={p.href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-line bg-bg-elev/30 p-6 transition-all hover:border-fg/30 hover:bg-bg-elev md:p-8"
            >
              <div
                aria-hidden
                className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/[0.04] opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3 flex items-center gap-3 font-mono text-[11px] text-fg-dim">
                    <span>{p.year}</span>
                    <span className="h-px w-6 bg-fg-dim" />
                  </div>
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-fg-muted">{p.blurb}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-fg-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
              </div>
              <div className="relative mt-8 flex flex-wrap gap-1.5">
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
