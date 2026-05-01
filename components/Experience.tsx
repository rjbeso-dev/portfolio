"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" number="02" title="Experience">
      <ol className="relative">
        {experience.map((job, i) => (
          <motion.li
            key={`${job.company}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group grid gap-6 border-t border-line py-8 transition-colors hover:bg-fg/[0.015] md:grid-cols-[180px,1fr] md:gap-12 md:py-10"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-fg-dim">
              {job.period}
            </div>
            <div>
              <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                {job.role}
                <span className="text-fg-muted"> · {job.company}</span>
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg">
                {job.description}
              </p>
              {job.stack && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-fg-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
