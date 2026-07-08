"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pb-32 pt-24 "
    >
      <div className="relative mx-auto w-full max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3 font-mono text-xs text-fg-muted"
        >
          <span className="h-px w-8 bg-fg-muted" />
          <span>00 — Index</span>
        </motion.p>

        {/* Name — display headline */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(2.75rem,9vw,7rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
        >
          {profile.name}
        </motion.h1>

        {/* Role — secondary line, treated as a label, not a paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          className="mt-7 flex items-center gap-4"
        >
          <span aria-hidden className="h-px w-10 bg-fg-muted/70" />
          <span className="font-mono text-sm uppercase tracking-[0.22em] text-fg-muted">
            {profile.role}
          </span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-accent sm:inline-block" />
          <span className="hidden font-mono text-sm uppercase tracking-[0.22em] text-fg-muted sm:inline">
            Open to work
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
          className="mt-10 max-w-xl text-lg leading-relaxed text-fg-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: EASE }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            View work
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-fg transition-colors hover:border-fg"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
