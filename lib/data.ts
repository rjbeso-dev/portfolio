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
    github: "https://github.com/rjbeso-dev",
    twitter: "",
  },
};

export const about = [
  "I'm a full-stack developer based in the Philippines, working across React, Node.js, PostgreSQL, and AI-powered automation tooling (n8n + LLM APIs). Currently open to new remote roles.",
  "I like owning a problem end-to-end — from understanding what people actually need, through data modelling and engineering, to deployment and the small details that make products feel polished. Boring tech that works beats clever tech that doesn't.",
  "Recently I designed and built a complete project management platform for an Australian logistics company — wearing three hats end-to-end as Product Developer, Project Manager, and Scrum Master. React + Express + Prisma + PostgreSQL, about 390 hours, deployed to production. I'm currently building AI automation workflows that turn manual business processes into self-running pipelines.",
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
    role: "Product Developer (also Project Manager & Scrum Master)",
    period: "Feb 2025 — May 2026",
    description:
      "Wore three hats end-to-end — ran sprint planning, daily standups, and backlog grooming as Scrum Master; owned roadmap, ticket flow, and stakeholder updates in Jira and Confluence as Project Manager; and translated business requirements into shipped product as Product Developer, owning UI design in Figma and the daily loop with developers and QA. Designed and built a full-stack project management SaaS (React, Node.js, Express, Prisma, PostgreSQL) deployed to production.",
    stack: ["React", "Node.js", "PostgreSQL", "Figma", "Jira", "Confluence", "Scrum"],
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
      "Onboarded new clients onto the ouvar® logistics platform with structured training and documentation. Performed QA across platform features prior to release; logged and verified defect fixes.",
    stack: ["Jira", "Confluence"],
  },
  {
    company: "Hacktiv Colab Inc",
    role: "Microsoft PowerApps Developer",
    period: "Mar 2023 — Sept 2023",
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
  category: "Full-Stack" | "Full-Stack SaaS" | "AI Automation" | "Email Marketing" | "Site";
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
    name: "Linden — Project Tracker",
    category: "Full-Stack SaaS",
    problem:
      "An Australian logistics technology company needed a project management platform that no off-the-shelf SaaS could fit — 12 distinct user roles, three project types, and a hierarchical company → segment → brand scoping model that required custom multi-tenancy from the ground up.",
    approach:
      "Designed a multi-tenant Postgres schema across ~18 entities with company → segment → brand isolation, then built a React + Express + Prisma SaaS from scratch. Implemented role-based access control with permission flags, Gantt scheduling with task dependencies, time logging, comments with @mentions, a notification system, and parallel Kanban / Gantt / List / Calendar views. Used AI tooling as a build multiplier, owning every architectural decision and reviewing every line.",
    outcome:
      "Shipped a production-ready SaaS replacement for the planned ClickUp rollout in about 390 hours as sole developer. 92 UAT cases documented. Deployed to production on Vercel + Railway with separate staging environments. Case-study screenshots use anonymized branding (Linden) out of respect for the original client.",
    year: "2026",
    status: "Case study",
    href: "#",
    tags: ["SaaS", "Multi-tenant", "React 19", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "Docker", "Vercel", "Railway"],
    screenshots: [
      {
        src: "/case-studies/linden-project-tracker/01-hero-login.jpg",
        alt: "Linden Project Tracker login page — split-panel layout with serif wordmark on a dark green hero panel and a clean sign-in card on the right",
        caption: "Login — split-panel hero with the Linden serif wordmark and leaf mark",
      },
      {
        src: "/case-studies/linden-project-tracker/02-dashboard.jpg",
        alt: "Operations Dashboard showing portfolio health 38/100, active projects, on-time delivery rate, at-risk count, project pipeline by stage, and risks/blockers list",
        caption: "Operations Dashboard — KPIs, project pipeline by stage, risks & blockers panel",
      },
      {
        src: "/case-studies/linden-project-tracker/03-dashboard-dark.jpg",
        alt: "Same Operations Dashboard rendered in dark mode — proves the theming system, not a one-off design",
        caption: "Dashboard — dark mode (full theming system, not a single design)",
      },
      {
        src: "/case-studies/linden-project-tracker/04-gantt.jpg",
        alt: "Gantt chart view with Briefing & Planning and Production milestones, sub-tasks, task dependency arrows, and a week/month/quarter/year timescale switcher",
        caption: "Gantt — milestones, sub-tasks, dependency arrows, multi-scale timeline",
      },
      {
        src: "/case-studies/linden-project-tracker/05-gantt-dark.jpg",
        alt: "Gantt view in dark mode showing the same project structure with dependency arrows visible against the dark canvas",
        caption: "Gantt — dark mode (same dependency logic, full theme parity)",
      },
      {
        src: "/case-studies/linden-project-tracker/06-kanban.jpg",
        alt: "Kanban board with Briefing, Planning, Production, Shipping, and Warehouse columns; project cards show client, brand, activation date, delivery date, assignee, and priority",
        caption: "Kanban — five-column workflow with project cards and inline priority cues",
      },
      {
        src: "/case-studies/linden-project-tracker/07-project-detail.jpg",
        alt: "Project detail modal showing breadcrumbs, properties sidebar (assignee, status, priority, container status, project stage), tabs (Overview, Items, Attachments, Activity), core information section, bulk order details, and comments thread",
        caption: "Project detail — properties sidebar, tabbed sections, comments, full activity log",
      },
      {
        src: "/case-studies/linden-project-tracker/08-my-tasks.jpg",
        alt: "My Tasks page with role badge, daily summary banner, stat cards (Total, To Do, In Progress, Overdue, Done), search and filters, and an overdue task list with project tags, due dates, statuses, and time-logged progress bars",
        caption: "My Tasks — personal view with daily summary, stat cards, and time-logged progress",
      },
      {
        src: "/case-studies/linden-project-tracker/10-user-management.jpg",
        alt: "User Management table showing user avatars, names, emails, roles (Super Admin, Brand Manager, Operations Manager, Account Manager), six permission flags per user (Form Access, Dashboard Access, Edit Projects, etc.), brand assignment, and Edit/Delete actions",
        caption: "User Management — RBAC with 12 roles and 6 permission flags per user",
      },
    ],
  },
  {
    name: "AI Job Search Assistant",
    category: "AI Automation",
    problem:
      "Manually scrolling through LinkedIn, WeWorkRemotely, RemoteOK, and Hacker News is hours of work to surface a few relevant roles — and most listings are a 30-second skim before moving on. Worse, the same job posted across multiple boards turns into duplicate noise.",
    approach:
      "Built a production-grade n8n workflow that aggregates live job listings from 4 RSS sources (WeWorkRemotely, RemoteOK, Jobicy, HN Jobs) in parallel, deduplicates within and across runs by querying my Notion database for already-scored jobs, scores each new role 1–10 against my CV via the Claude API (Haiku 4.5), drafts a personalised cover letter for the top matches, filters by score, and writes each strong match into Notion with status, link, and reasoning. Throttled with HTTP batching to respect API rate limits.",
    outcome:
      "Multi-source, self-deduplicating pipeline that runs every morning. About 250 jobs aggregated and filtered down to 10 new ones scored per run at roughly $0.015 per run. Notion-backed memory means the system never re-scores the same job twice — costs stay flat as the database grows. Turns 2+ hours of daily job-hunting noise into a 5-minute morning review of pre-vetted, highest-fit roles with cover letters already drafted.",
    year: "2026",
    status: "Case study",
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
    name: "Briarworks Operator OS",
    category: "AI Automation",
    problem:
      "Founders spend 90+ minutes a day triaging email that a multi-LLM pipeline could categorise, route, and pre-draft — but most automation tools focus on the tool first and the work last. Real inbox triage needs confidence-aware routing, voice-aware drafting, and defensive design at every layer; without those, the system silently misclassifies and humans stop trusting the output.",
    approach:
      "Designed Workflow 1 of a synthetic-persona operator system around Sarah Chen, a fictional Series A B2B SaaS founder. A 9-node n8n pipeline accepts inbound email JSON via webhook, Claude Haiku 4.5 classifies each into 5 categories with confidence + reasoning, a Switch routes Respond Needed items through a second Claude call to generate three reply variations (formal, casual, direct), and a final Code + Notion path writes structured rows to a Notion database. Five layers of defensive design: HTTP rate-limit batching at 1500ms, markdown code-fence stripping on every LLM response, confidence-threshold fallback to FYI on uncertain categorisations, cross-branch data preservation via n8n pairing (so the Drafter's response doesn't lose email context), and Notion select-option normalisation before writes. Synthetic test fixtures with ground-truth labels validate accuracy on every run.",
    outcome:
      "20 emails processed end-to-end in about 50 seconds at roughly $0.015 per run. Three sendable reply variations per Respond Needed item, in the founder's voice. Workflow 2 (Meeting Processor) also running — one Claude extraction call fans out to Decisions Log and Action Items databases in parallel, and grew out of my earlier Whisper-based meeting-notes pipeline (audio → transcription → structured extraction). Nudge Bot and Weekly Brief in progress. Eight distinct n8n quirks debugged from production-style errors during the build, each captured in the case study as a worked example of senior-engineer-style diagnosis.",
    year: "2026",
    status: "Case study",
    href: "#",
    tags: ["n8n", "Claude Haiku 4.5", "Notion API", "JavaScript", "Multi-LLM orchestration", "Defensive design", "Synthetic persona"],
    screenshots: [
      {
        src: "/case-studies/briarworks-operator-os/01-w1-workflow-canvas.jpg",
        alt: "n8n workflow canvas for Workflow 1 (Inbox Triage) — 9 connected nodes: webhook trigger, Edit Fields, HTTP Request to Claude Classifier, Code in JavaScript for parsing, Switch router on Respond Needed, second HTTP Request to Claude Drafter, Merge node, Code in JavaScript1 for final assembly, and Notion create-page",
        caption: "Workflow 1: Inbox Triage — 9-node pipeline from webhook to Notion, with Switch-routed Drafter for Respond Needed items",
      },
      {
        src: "/case-studies/briarworks-operator-os/02-w1-claude-classifier.jpg",
        alt: "Claude Haiku 4.5 HTTP Request node showing the classification call — request body embedding the founder-persona system prompt, batching at 1500ms, and output panel with structured JSON response containing category, confidence score, and reasoning",
        caption: "Claude Classifier (Haiku 4.5) — structured JSON with category, confidence, and reasoning per email; 1500ms batching to stay within Anthropic rate limits",
      },
      {
        src: "/case-studies/briarworks-operator-os/03-w1-code-defensive-parser.jpg",
        alt: "n8n Code node with JavaScript that strips markdown code fences from Claude responses via regex, extracts the first JSON block as a fallback, validates categories against an allow-list, and applies a confidence-threshold fallback to FYI on uncertain classifications",
        caption: "Defensive parsing — markdown code-fence stripping, category allow-list validation, and confidence-threshold fallback so downstream nodes never see raw code fences or invalid categories",
      },
      {
        src: "/case-studies/briarworks-operator-os/04-w1-code-final-merger.jpg",
        alt: "n8n Code in JavaScript1 node that assembles the final Notion payload — merges classifier output with the three draft variations from the Claude Drafter into a typed row with category display mapping, rounded confidence, triaged timestamp, and draft_formal, draft_casual, draft_direct fields",
        caption: "Final merger — combines classifier output with the three draft variations (formal, casual, direct) into a single typed Notion row",
      },
      {
        src: "/case-studies/briarworks-operator-os/05-w1-notion-inbox-log.jpg",
        alt: "Notion Inbox Log database populated with real triage output — rows showing Subject, From, Category (Urgent Action), Confidence scores, Triaged At timestamps, Reasoning, Body Preview, and Has Draft flag for each processed email",
        caption: "Inbox Log in Notion — populated rows with category, confidence, reasoning, and body preview per email",
      },
      {
        src: "/case-studies/briarworks-operator-os/06-w2-workflow-canvas.jpg",
        alt: "n8n workflow canvas for Workflow 2 (Meeting Processor) — fan-out architecture where a single Code node branches into two parallel Split Out nodes, each writing to its own Notion database (Decisions Log via the top branch, Action Items via the bottom branch)",
        caption: "Workflow 2: Meeting Processor — fan-out architecture, one Claude extraction call feeding two parallel Notion writes",
      },
      {
        src: "/case-studies/briarworks-operator-os/07-w2-code-extraction.jpg",
        alt: "n8n Code node that parses Claude's meeting-extraction JSON response — normalizes decisions and action_items into typed arrays with priority display mapping, slices long fields to safe lengths, and filters out action items without a task or owner",
        caption: "Code node — parses decisions and action_items from Claude's structured output, normalizes priorities, and filters incomplete items",
      },
      {
        src: "/case-studies/briarworks-operator-os/08-w2-notion-decisions-log.jpg",
        alt: "Notion Decisions Log database populated with rows showing Decision text, Meeting Title, Meeting Date, Rationale, Alternatives Considered, and Status for each decision extracted from processed meetings",
        caption: "Decisions Log in Notion — decision text, meeting context, rationale, and alternatives considered per row",
      },
      {
        src: "/case-studies/briarworks-operator-os/09-w2-notion-action-items.jpg",
        alt: "Notion Action Items database populated with rows showing Task, Owner, Due Date, Source (Meeting), Source Meeting title, Status (To Do), and Priority (High/Medium) for extracted action items from meeting transcripts",
        caption: "Action Items in Notion — task, owner, due date, source meeting, and priority for every extracted item",
      },
    ],
  },
  {
    name: "ouvar® Customer Communications",
    category: "Email Marketing",
    problem:
      "ouvar's customer base needed clear, consistent comms across multiple high-stakes moments: a V1 → V2 product migration that risked confusion and churn, ongoing feature releases that had to land without overwhelming users, and transactional moments where tone mattered. One-template-fits-all email design wasn't going to clear the bar.",
    approach:
      "Designed and built a multi-purpose email campaign system in Klaviyo, with each email type matched to a layout that fit its job. Product launches used a hero + features grid + FAQ structure to address migration anxieties upfront; single-feature releases used a 'what this means for you' benefit-translation pattern with embedded UI screenshots; transactional moments used a stripped-down centre-aligned layout with a single named contact CTA. Maintained brand-system consistency across ouvar standalone and ouvar × MARS co-branded variants.",
    outcome:
      "Three production campaigns shipped: V2 launch announcement with V1 → V2 migration FAQ, MoveMentum single-feature release ('Include zero availability toggle') with embedded UI screenshots and three-column benefit framing, and a post-survey thank-you with restrained transactional warmth. Each email landed in the register its purpose required — promotional energy for launches, restrained warmth for follow-ups — without compromising the brand system.",
    year: "2025–2026",
    status: "Live",
    href: "#",
    tags: ["Klaviyo", "Email marketing", "Campaign design", "Brand systems", "Information architecture", "UX writing"],
    screenshots: [
      {
        src: "/case-studies/ouvar-emails/01-v2-launch.jpg",
        alt: "ouvar V2 launch email — co-branded header with ouvar and MARS logos, hero with laptop dashboard mockup and Login Here CTA, six-feature grid (Multiple Catalogue Order, Detailed Stock Movements, Notification Preferences, Flexible Reports, Faster Bulk Imports, Training Resources), and a V1 → V2 migration FAQ section addressing data retention, login transition, and the new platform URL",
        caption: "V2 launch announcement — co-branded with MARS, hero + features grid + V1 → V2 migration FAQ",
      },
      {
        src: "/case-studies/ouvar-emails/02-movementum-feature.jpg",
        alt: "ouvar MoveMentum feature release email — hero with 'You asked. We delivered.' tagline, single-feature focus on 'Include zero availability toggle', two embedded UI screenshots of the V2 catalogue view, and a three-column 'What this means for you?' benefit grid (Transparency, Forecasting, Control)",
        caption: "MoveMentum feature release — single-feature narrative with embedded UI and benefit-translation framing",
      },
      {
        src: "/case-studies/ouvar-emails/03-survey-thank-you.jpg",
        alt: "ouvar Customer Survey thank-you email — large centred 'Thank you!' headline in brand green, body thanking participants for feedback on the POSM supply chain, a named contact CTA (Brew Hardinge at brew@ouvar.com) for additional feedback, and a clean restrained layout",
        caption: "Customer Survey thank-you — restrained transactional layout with a single named contact CTA",
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
    href: "#",
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
  "Klaviyo",
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

export const stackGroups: { label: string; tools: string[] }[] = [
  {
    label: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    label: "Backend",
    tools: ["Node.js", "Express", "Prisma", "PostgreSQL", "Webhooks"],
  },
  {
    label: "AI & Automation",
    tools: ["n8n", "Claude API", "OpenAI API", "Whisper", "Notion API", "Klaviyo"],
  },
  {
    label: "DevOps",
    tools: ["Docker", "Vercel", "Railway", "Git", "GitHub"],
  },
  {
    label: "Design & PM",
    tools: ["Figma", "Jira"],
  },
];


export const sections = [
  { id: "about", label: "About", number: "01" },
  { id: "experience", label: "Experience", number: "02" },
  { id: "process", label: "Process", number: "03" },
  { id: "projects", label: "Case Studies", number: "04" },
  { id: "stack", label: "Stack", number: "05" },
  { id: "contact", label: "Contact", number: "06" },
] as const;
