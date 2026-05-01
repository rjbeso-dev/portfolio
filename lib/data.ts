// Edit this file to customize the portfolio content.
// Most of the site reads from here.

export const profile = {
  name: "Ralph Javen Beso",
  role: "Product Developer",
  // One short line for the hero subtitle
  tagline: "Building thoughtful software at the intersection of design and engineering.",
  location: "Available · 2026",
  email: "rjbeso@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/rj-beso/",
    github: "https://github.com/",
    twitter: "",
  },
};

export const about = [
  "I'm a Product Developer based in the Philippines, currently open to new projects and collaborations.",
  "I care about the details — performance, polish, and the small interactions that make products feel right. I work across the stack, but spend most of my time in TypeScript, React, and Node.",
  "Recently exploring AI tooling, real-time systems, and the next generation of developer experience.",
];

export const aboutMeta = {
  location: "Philippines",
  role: "Product Developer",
  status: "Open to projects",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  stack?: string[];
};

export const experience: Experience[] = [
  {
    company: "ouvar®",
    role: "Product Developer",
    period: "2024 — Present",
    description:
      "Turn business requirements into shipped product — owning UI design in Figma, sprint planning in Jira and Confluence, and the daily loop with developers, QA, and stakeholders. Iterating on usability from feedback, analytics, and research, and increasingly building systems through AI to compress the path from idea to delivery.",
    stack: ["Figma", "Jira", "Confluence", "AI Tooling"],
  },
  {
    company: "ouvar®",
    role: "Platform Support",
    period: "2024 — 2025",
    description:
      "Turn business requirements into shipped product — owning UI design in Figma, sprint planning in Jira and Confluence, and the daily loop with developers, QA, and stakeholders. Iterating on usability from feedback, analytics, and research, and increasingly building systems through AI to compress the path from idea to delivery.",
    stack: ["Figma", "Jira", "Confluence", "AI Tooling"],
  },
  {
    company: "Hacktiv Colab Inc",
    role: "Powerapps Developer",
    period: "2023 — 2024",
    description:
      "Built internal tools and dashboards. Owned the migration from legacy jQuery codebase to a modern React stack.",
    stack: ["JavaScript", "Node.js", "AWS"],
  },
  
];

export type Project = {
  name: string;
  blurb: string;
  year: string;
  href?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "ouvar® Project Tracker",
    blurb:
      "A real-time collaboration tool for distributed teams. Sub-100ms sync over WebRTC.",
    year: "2026",
    href: "#",
    tags: ["React", "WebRTC", "Rust"],
  },
  {
    name: "Devlog CLI",
    blurb:
      "A tiny CLI for keeping engineering journals tied to git history. Markdown in, insights out.",
    year: "2024",
    href: "#",
    tags: ["Go", "CLI"],
  },
  {
    name: "Portfolio v3",
    blurb:
      "This site. Built with Next.js, Tailwind, and Framer Motion. Open source.",
    year: "2026",
    href: "#",
    tags: ["Next.js", "Framer Motion"],
  },
];

export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Claude AI",
  "Prisma",
  "PostgreSQL",
  "ChatGPT",
  "AWS",
  "Docker",
  "TablePlus",
  "Tailwind CSS",
  "Framer Motion",
  "Canva",
  "Jira",
  "Vercel",
  "Figma",
];


export const sections = [
  { id: "about", label: "About", number: "01" },
  { id: "experience", label: "Experience", number: "02" },
  { id: "projects", label: "Projects", number: "03" },
  { id: "stack", label: "Stack", number: "04" },
  { id: "contact", label: "Contact", number: "05" },
] as const;
