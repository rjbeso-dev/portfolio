"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, number, title, children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  return (
    <section id={id} className={`relative py-20 md:py-28 lg:py-36 ${className}`}>
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex items-baseline gap-4"
        >
          <span className="font-mono text-xs text-fg-dim">{number}</span>
          <span className="h-px flex-1 bg-line" />
          <h2 className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-fg md:text-base">
            {title}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
