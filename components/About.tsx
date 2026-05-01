"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Sparkles } from "lucide-react";
import Section from "./Section";
import { about, aboutMeta } from "@/lib/data";

const meta = [
  { icon: MapPin, label: "Based in", value: aboutMeta.location },
  { icon: Briefcase, label: "Role", value: aboutMeta.role },
  { icon: Sparkles, label: "Status", value: aboutMeta.status },
];

export default function About() {
  return (
    <Section id="about" number="01" title="About">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
        {/* Avatar — small, mehaxan-style thumbnail */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-line bg-bg-elev md:h-32 md:w-32"
        >
          <Image
            src="/profile.jpeg"
            alt="Ralph Javen Beso"
            fill
            priority
            sizes="128px"
            className="object-cover object-[50%_18%] grayscale transition-all duration-700 hover:grayscale-0"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/5"
          />
        </motion.div>

        {/* Bio + meta */}
        <div className="min-w-0 flex-1">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.22em] text-fg-dim">
            A bit about me.
          </p>
          <div className="space-y-6 text-lg leading-relaxed text-fg/90 md:text-xl">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {meta.map(({ icon: Icon, label, value }) => (
              <li
                key={label}
                className="rounded-xl border border-line bg-bg-elev/40 p-4"
              >
                <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-fg-dim">
                  <Icon className="h-3 w-3" />
                  {label}
                </div>
                <div className="text-sm font-medium text-fg">{value}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
