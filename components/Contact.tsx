"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Section from "./Section";
import { profile } from "@/lib/data";

const links = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: ArrowUpRight },
  { label: "GitHub", href: profile.socials.github, icon: ArrowUpRight },
  { label: "Twitter", href: profile.socials.twitter, icon: ArrowUpRight },
].filter((l) => l.href);

export default function Contact() {
  return (
    <Section id="contact" number="06" title="Contact">
      <div className="grid gap-12 md:grid-cols-[2fr,1fr]">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-medium leading-tight tracking-tight md:text-6xl"
          >
            Let&rsquo;s build
            <br />
            <span className="text-fg-muted">something good.</span>
          </motion.h3>
          <motion.a
            href={`mailto:${profile.email}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group mt-8 inline-flex items-center gap-3 text-2xl text-fg underline decoration-fg-dim decoration-1 underline-offset-8 transition-colors hover:decoration-accent md:text-3xl"
          >
            {profile.email}
            <ArrowUpRight className="h-6 w-6 text-fg-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </motion.a>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-dim">
            Elsewhere
          </p>
          <ul className="space-y-1">
            {links.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-line py-3 text-fg/90 transition-colors hover:text-fg"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-fg-muted transition-colors group-hover:text-accent" />
                    {label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-fg-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-24 flex items-center justify-between border-t border-line pt-8 font-mono text-xs text-fg-dim">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>All rights reserved.</span>
      </div>
    </Section>
  );
}
