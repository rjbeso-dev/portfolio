"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const word: Variants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE,
      delay: 0.1 + i * 0.06,
    },
  }),
};

function Reveal({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            custom={i}
            variants={word}
            initial="hidden"
            animate="visible"
            className="inline-block pr-[0.25em]"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pb-32 pt-24 "
    >
      {/* Ambient gradients */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.2 }}
        className="pointer-events-none absolute -left-1/4 top-1/3 h-[60vh] w-[60vw] rounded-full bg-accent/[0.07] blur-[120px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.4 }}
        className="pointer-events-none absolute -right-1/4 bottom-1/4 h-[50vh] w-[50vw] rounded-full bg-accent-warm/[0.05] blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3 font-mono text-xs text-fg-muted"
        >
          <span className="h-px w-8 bg-fg-muted" />
          <span>§ 00 — Index</span>
        </motion.p>

        {/* Name — display headline */}
        <h1 className="text-[clamp(2.75rem,9vw,7rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
          <Reveal text={profile.name} className="block" />
        </h1>

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
            Open to projects
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

      {/* Scroll indicator — vertical, pinned to right edge so it never collides with CTAs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="pointer-events-none absolute bottom-10 right-6 hidden flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim md:flex"
      >
        <span>Scroll</span>
        <span className="relative h-10 w-px bg-fg-dim/40 overflow-hidden">
          <motion.span
            aria-hidden
            className="absolute inset-x-0 top-0 h-3 bg-fg"
            animate={{ y: [-12, 40] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        <ArrowDown className="h-3 w-3" />
      </motion.div>
    </section>
  );
}
