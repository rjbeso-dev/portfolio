// Edit this file to customize the portfolio content.
// Most of the site reads from here.

export const profile = {
  name: "Ralph Javen Beso",
  role: "Full-Stack & AI Automation Developer",
  // One short line for the hero subtitle
  tagline:
    "I take messy business problems and turn them into working products — full-stack apps and AI-powered automations. Open to remote roles.",
  location: "Open to work · 2026",
  email: "rjbeso@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/rj-beso/",
    github: "https://github.com/rjbeso",
    twitter: "",
  },
};

export const about = [
  "I'm a full-stack developer based in the Philippines, working across React, Node.js, PostgreSQL, and AI-powered automation tooling (n8n + LLM APIs). Currently open to new remote roles.",
  "I like owning a problem end-to-end — from understanding what people actually need, through data modelling and engineering, to deployment and the small details that make products feel polished. Boring tech that works beats clever tech that doesn't.",
  "Recently I designed and built a complete project management platform for an Australian logistics company (React + Express + Prisma + PostgreSQL, ~390 hours, deployed to production), and I'm currently building AI automation workflows that turn manual business processes into self-running pipelines.",
];

export const aboutMeta = {
  location: "Philippines · Remote",
  role: "Full-Stack & AI Automation",
  status: "Open to work",
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
    period: "Feb 2025 — May 2026",
    description:
      "Translated business requirements into shipped product — owned UI design in Figma, sprint planning in Jira and Confluence, and the daily loop with developers, QA, and stakeholders. Designed and built a full-stack project management platform (React, Node.js, Express, Prisma, PostgreSQL) deployed to production.",
    stack: ["React", "Node.js", "PostgreSQL", "Figma", "Jira"],
  },
  {
    company: "ouvar®",
    role: "Platform Support",
    period: "Sept 2024 — Feb 2025",
    description:
      "Provided second-line technical support for an internal logistics platform. Diagnosed user issues, reproduced bugs and escalated to engineering with full repro steps, and maintained internal documentation and operational runbooks.",
    stack: ["Jira", "Confluence", "Freshchat"],
  },
  {
    company: "ouvar®",
    role: "Onboarding & QA",
    period: "May 2024 — Sept 2024",
    description:
      "Onboarded new clients onto the OUVAR logistics platform with structured training and documentation. Performed QA across platform features prior to release; logged and verified defect fixes.",
    stack: ["Jira", "Confluence"],
  },
  {
    company: "Hacktiv Colab Inc",
    role: "Microsoft PowerApps Developer",
    period: "Mar 2023 — Aug 2024",
    description:
      "Built business applications on the Microsoft Power Platform for enterprise clients. Designed PowerApps interfaces and Power Automate workflows integrated with SharePoint, Dataverse, and Office 365.",
    stack: ["PowerApps", "Power Automate", "SharePoint", "Dataverse"],
  },
];

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  name: string;
  category: "Full-Stack" | "AI Automation" | "Site";
  problem: string;
  approach: string;
  outcome: string;
  year: string;
  status?: "Live" | "In progress" | "Case study";
  href?: string;
  tags: string[];
  screenshots?: ProjectScreenshot[];
};

export const projects: Project[] = [
  {
    name: "OUVAR Project Tracker",
    category: "Full-Stack",
    problem:
      "An Australian logistics company couldn't fit any off-the-shelf project management tool to their workflow — 12 distinct user roles, three project types, and a hierarchical company → segment → brand scoping model that no SaaS supported.",
    approach:
      "Designed a Postgres schema across ~18 entities, then built a React + Express + Prisma application from scratch. Implemented role-based access control with permission flags, Gantt scheduling with task dependencies, time logging, comments with @mentions, and a notification system. Used AI tooling as a build multiplier, owning every architectural decision and reviewing every line.",
    outcome:
      "Shipped a production-ready replacement for the planned ClickUp rollout in ~390 hours over 26 days. 92 UAT cases documented. Deployed to production on Vercel + Railway with separate staging environments.",
    year: "2026",
    status: "Case study",
    href: "#",
    tags: ["React 19", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "Docker", "Vercel", "Railway"],
  },
  {
    name: "AI Job Search Assistant",
    category: "AI Automation",
    problem:
      "Manually scrolling through LinkedIn, WeWorkRemotely, RemoteOK, and Hacker News is hours of work to surface a few relevant roles — and most listings are a 30-second skim before moving on. Worse, the same job posted across multiple boards turns into duplicate noise.",
    approach:
      "Built a production-grade n8n workflow that aggregates live job listings from 4 RSS sources (WeWorkRemotely, RemoteOK, Jobicy, HN Jobs) in parallel, deduplicates within and across runs by querying my Notion database for already-scored jobs, scores each new role 1–10 against my CV via the Claude API (Haiku 4.5), drafts a personalised cover letter for the top matches, filters by score, and writes each strong match into Notion with status, link, and reasoning. Throttled with HTTP batching to respect API rate limits.",
    outcome:
      "Live, multi-source, self-deduplicating pipeline. ~250 jobs aggregated and filtered down to 10 new ones scored per run at ~$0.015/run. Notion-backed memory means the system never re-scores the same job twice — costs stay flat as the database grows. Turns 2+ hours of daily job-hunting noise into a 5-minute morning review of pre-vetted, highest-fit roles with cover letters already drafted.",
    year: "2026",
    status: "Live",
    href: "#",
    tags: [
      "n8n",
      "Claude API",
      "Notion API",
      "RSS",
      "JavaScript",
      "Rate limiting",
      "Multi-source dedup",
    ],
    screenshots: [
      {
        src: "/case-studies/job-search-assistant/01-workflow-canvas.jpg",
        alt: "n8n workflow canvas showing 4 parallel RSS sources merging into a dedup + Claude scoring pipeline that writes filtered matches to Notion",
        caption: "Production architecture: 4 parallel RSS feeds → dedup against Notion → Claude scores 10 new jobs → top matches stored",
      },
      {
        src: "/case-studies/job-search-assistant/02-claude-api.jpg",
        alt: "HTTP Request node configuration calling Claude API with the system prompt and three Claude responses returned",
        caption: "Claude API call (Haiku 4.5) — system prompt embeds the CV; per-job scoring returns structured JSON",
      },
      {
        src: "/case-studies/job-search-assistant/03-scored-output.jpg",
        alt: "Parsed scoring output table showing three jobs with scores 2, 7, and 3, each with reasoning and cover letter",
        caption: "Parse node output — Claude's JSON extracted into structured fields with score, reasoning, and cover letter",
      },
      {
        src: "/case-studies/job-search-assistant/04-notion-database.jpg",
        alt: "Notion database view showing scored jobs with company, score, reasoning, cover letter, and status columns",
        caption: "Notion 'Scored Jobs' database — every score-7+ match logged automatically with status 'To Apply'",
      },
      {
        src: "/case-studies/job-search-assistant/05-notion-detail.jpg",
        alt: "Notion page for a single scored job showing full cover letter, reasoning, score, and status",
        caption: "Per-job detail view in Notion — ready-to-send cover letter generated against the CV",
      },
    ],
  },
  {
    name: "Meeting Notes → Action Items",
    category: "AI Automation",
    problem:
      "Action items, decisions, and key topics buried in 60-minute meeting recordings — turning recordings into useful, distributed outputs is a manual job nobody wants to do.",
    approach:
      "Built a 6-node n8n pipeline that chains two LLM APIs: Whisper transcribes the meeting audio, Claude Haiku 4.5 extracts structured action items + decisions + topics into a strict JSON schema (with owner, due date, priority), a Code node parses and flattens the response into individual items, and each item is written to a Notion database with the correct type, status, and meeting date.",
    outcome:
      "Audio file in → structured Notion database out in ~10 seconds, for ~$0.001 per minute of audio. Working end-to-end pipeline producing real, sendable tasks with owner + due date + priority. Generalisable across teams of any size.",
    year: "2026",
    status: "Live",
    href: "#",
    tags: ["n8n", "Whisper API", "Claude API", "Notion API", "JavaScript"],
    screenshots: [
      {
        src: "/case-studies/meeting-notes/01-workflow-canvas.jpg",
        alt: "n8n workflow canvas showing 6 connected nodes from manual trigger through Whisper and Claude APIs to Notion",
        caption: "Full pipeline: trigger → read audio → Whisper → Claude → parse → Notion",
      },
      {
        src: "/case-studies/meeting-notes/02-audio-file.jpg",
        alt: "Read/Write Files from Disk node showing meeting.m4a audio file loaded as binary input",
        caption: "Source audio loaded from disk — 522 kB m4a recording",
      },
      {
        src: "/case-studies/meeting-notes/03-whisper-transcription.jpg",
        alt: "Whisper API response panel showing clean transcribed text of the meeting recording",
        caption: "Whisper transcription — 18 seconds of speech rendered as clean text",
      },
      {
        src: "/case-studies/meeting-notes/04-claude-extraction.jpg",
        alt: "Claude API response with structured JSON containing action_items, decisions, and topics arrays",
        caption: "Claude Haiku 4.5 extracts structured JSON — action items, decisions, topics with owner + priority",
      },
      {
        src: "/case-studies/meeting-notes/05-notion-output.jpg",
        alt: "Notion Meeting Outputs database populated with 6 rows: 2 action items, 1 decision, 3 topics",
        caption: "Final Notion database — 6 typed rows automatically written, ready to assign and track",
      },
    ],
  },
  {
    name: "Portfolio (this site)",
    category: "Site",
    problem:
      "Most developer portfolios are template-shaped or undersell the work. I wanted one that reads like the way I actually think — clean, opinionated, and honest about how I use AI.",
    approach:
      "Built with Next.js 15, TypeScript, Tailwind, and Framer Motion. Custom theme system with light/dark, scroll-driven animations, marquee tech stack, and a process section that tells the truth about my workflow.",
    outcome:
      "A site that doubles as both a portfolio and a working code sample.",
    year: "2026",
    status: "Live",
    href: "https://github.com/rjbeso",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    title: "Understand the problem",
    description:
      "Talk to the people who'll actually use it. Read what already exists. Write down what success looks like in plain language — before any code. Most software fails here.",
  },
  {
    title: "Design the solution",
    description:
      "Sketch the data model first, then the UI. Decide what's in scope and what's deliberately not. Boring, well-understood tech that works beats clever tech that doesn't.",
  },
  {
    title: "Use AI to write code",
    description:
      "AI is a productivity multiplier, not a replacement for engineering judgement. I prompt deliberately, review every line, and rewrite what doesn't fit the design. The architecture and the decisions stay mine.",
  },
  {
    title: "Test & connect parts",
    description:
      "Wire things together early. Click through every flow end-to-end. Find what breaks before users do — then write down the cases worth keeping.",
  },
  {
    title: "Think about edge cases",
    description:
      "What happens with no data? With wrong data? With a slow connection? Who else needs this to work, and how? The product isn't finished until the unhappy paths are.",
  },
];

export const stack = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
  "n8n",
  "Claude API",
  "OpenAI API",
  "Whisper",
  "Notion API",
  "Webhooks",
  "Tailwind CSS",
  "Framer Motion",
  "Vite",
  "Docker",
  "Vercel",
  "Railway",
  "Git",
  "GitHub",
  "Figma",
  "Jira",
  "PowerApps",
];


export const sections = [
  { id: "about", label: "About", number: "01" },
  { id: "experience", label: "Experience", number: "02" },
  { id: "process", label: "Process", number: "03" },
  { id: "projects", label: "Case Studies", number: "04" },
  { id: "stack", label: "Stack", number: "05" },
  { id: "contact", label: "Contact", number: "06" },
] as const;
