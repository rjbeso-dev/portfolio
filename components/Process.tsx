"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { process } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Process() {
  return (
    <Section id="process" number="03" title="Process">
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mb-16 max-w-3xl text-3xl font-medium leading-tight tracking-tight md:text-5xl"
      >
        I take a messy business problem and turn it into a working product. AI is a multiplier, not a substitute for thinking.
      </motion.h3>

      <ol className="relative">
        {process.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            className="group grid gap-4 border-t border-line py-7 transition-colors hover:bg-fg/[0.015] md:grid-cols-[120px,1fr] md:gap-12 md:py-9"
          >
            <div className="flex items-start gap-3 font-mono text-xs uppercase tracking-widest text-fg-dim">
              <span className="rounded-full border border-line px-2 py-0.5 text-[10px] text-fg-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span aria-hidden className="mt-2 hidden h-px flex-1 bg-line md:block" />
            </div>
            <div>
              <h4 className="text-xl font-medium tracking-tight md:text-2xl">
                {step.title}
              </h4>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg">
                {step.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
