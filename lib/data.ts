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
    name: "Freight Exception Agent",
    category: "AI Automation",
    problem:
      "When a freight delivery goes wrong — delayed, damaged, short-delivered, lost — a human has to read the carrier's notification, work out what actually happened, decide who is at fault, check the customer's contract, choose a remedy, and lodge any claim. It is high-volume, high-judgment work, and it bleeds money in two directions at once: unclaimed carrier credits, and customers who churn because nobody told them. Most 'AI automation' can't touch it, because a fixed trigger-to-prompt chain can't investigate, branch on judgment, or remember what it already did.",
    approach:
      "Built a genuine agent in TypeScript on Claude, not a linear pipeline. It runs a real tool loop: twelve tools split into free reads (consignment, customer, SLA, carrier performance, prior actions) and money-touching actions (notify, credit, reship, carrier claim, escalate), and the agent decides which to call and in what order. It separates two independent decisions that most systems conflate — what the customer gets versus whether we claim against the carrier. It persists state in SQLite, so re-processing the same exception reuses the open claim instead of lodging a duplicate. And it knows when not to act: above a dollar threshold, or when the facts are too thin, it escalates to a human with the investigation already done and a recommendation attached. The whole thing is validated by a seven-scenario evaluation harness where each scenario is a deliberate trap: an SLA whose guarantee secretly excludes regional runs, a carrier calling a $41,500 cold-chain total loss a 'minor deviation', a shortage that was actually our own warehouse's fault, a notification too vague to identify.",
    outcome:
      "Passes the eval 26 of 26 assertions, seven scenarios clean plus an idempotency test, at roughly $1.50 per full run. Two of the scenarios were written after the agent surfaced the bugs itself during the build: on its first run it caught a late-delivery breach that was not the reported problem, which exposed that the data model only allowed one remedy per exception. It reads carrier notifications as claims to verify rather than truth, correctly overriding a carrier's own 'it's fine' framing on a total loss. A local operations console (Node, server-sent events, no framework) streams the agent's investigation live and renders each decision as a disposition docket. This is the step up from workflow-tool automation to agent engineering: a real loop, real state, real self-evaluation.",
    year: "2026",
    status: "Case study",
    href: "https://github.com/rjbeso-dev/freight-agent",
    tags: ["AI Agent", "TypeScript", "Claude Opus 4.8", "Tool use", "SQLite", "Eval harness", "Server-sent events", "Agent architecture"],
    screenshots: [
      {
        src: "/case-studies/freight-agent/01-console-overview.jpg",
        alt: "The freight exceptions-desk console — an industrial dark operations UI with a masthead reading MERIDIAN FREIGHT CO / EXCEPTIONS DESK, a left inbound queue of seven carrier notifications, a central inbound wire showing an Allied Express exception report for consignment CON-88431, and a right disposition panel awaiting a decision",
        caption: "The operations console — an inbound queue of carrier notifications, the raw wire, and a disposition panel. Built to look like dispatch software, not a demo.",
      },
      {
        src: "/case-studies/freight-agent/02-triage-resolved.jpg",
        alt: "The console after resolving consignment CON-88431 — the investigation log shows the agent's analysis and its amber action ledger (issue_credit $420, create_reship 1 pallet, open_carrier_claim $9,620), and the disposition docket on the right shows RESOLVED AUTONOMOUSLY, DAMAGED and DELAYED chips, CARRIER fault, a $420 credit and $9,200 reship, and a $9,620 carrier claim",
        caption: "The compound case, resolved — one notification, two exceptions caught: a reship for the damage AND a $420 credit for a late-delivery breach the carrier never reported, plus the claim lodged. The full trace on the left, the decision on the right.",
      },
      {
        src: "/case-studies/freight-agent/03-escalation.jpg",
        alt: "The console handling a Followmont cold-chain incident on consignment CON-88712 — the disposition docket shows a red ESCALATED TO HUMAN banner, a $41,500 reship and $41,500 carrier claim marked as recommendations pending human approval, and the log shows the agent recognising a total loss above the $25,000 threshold and calling escalate_to_human",
        caption: "Knows when not to act — a $41,500 cold-chain total loss the carrier called 'minor' is escalated to a human, above the threshold, with the investigation done and a recommendation attached rather than executed.",
      },
      {
        src: "/case-studies/freight-agent/04-eval-harness.jpg",
        alt: "Terminal output of the evaluation harness — seven scenarios S1 through S7 all marked PASS with their assertion counts, an idempotency test marked PASS, and a final score of 26 out of 26 assertions, 7 of 7 scenarios fully clean, at about $1.46 per full run on Claude Opus 4.8",
        caption: "The eval harness — seven traps plus an idempotency test, graded on specific assertions. 26/26. This is how you prove an agent's judgment instead of claiming it.",
      },
    ],
  },
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
        alt: "n8n workflow canvas for Workflow 1 (Inbox Triage) — 9 named nodes: Email Webhook, Normalize Email Fields, Claude Classifier, Defensive Parser, Route by Category switch, Claude Drafter, Merge Branches, Assemble Notion Payload, and Notion — Inbox Log",
        caption: "Workflow 1: Inbox Triage — Email Webhook through Claude Classifier and Defensive Parser, with Route by Category sending Respond Needed items through the Claude Drafter before everything lands in Notion",
      },
      {
        src: "/case-studies/briarworks-operator-os/02-w1-claude-classifier.jpg",
        alt: "Claude Classifier node open in n8n — HTTP POST to the Anthropic Messages API with header auth and anthropic-version header, input email from Normalize Email Fields, and output panel showing Claude Haiku 4.5's structured JSON response with category and confidence",
        caption: "Claude Classifier (Haiku 4.5) — direct Anthropic API call returning structured JSON with category, confidence, and reasoning per email",
      },
      {
        src: "/case-studies/briarworks-operator-os/03-w1-code-defensive-parser.jpg",
        alt: "Defensive Parser code node — ALLOWED_CATEGORIES allow-list, CONFIDENCE_THRESHOLD of 0.7, markdown code-fence stripping regex, and first-JSON-block extraction so malformed Claude output never reaches downstream nodes",
        caption: "Defensive Parser — category allow-list, 0.7 confidence threshold, and code-fence stripping on every LLM response",
      },
      {
        src: "/case-studies/briarworks-operator-os/04-w1-code-final-merger.jpg",
        alt: "Assemble Notion Payload code node — detects Drafter responses, reaches back to the Defensive Parser for the original email data (cross-branch data preservation), parses the three draft variations, and builds the typed Notion row",
        caption: "Assemble Notion Payload — cross-branch reach-back to the Defensive Parser plus draft parsing, merging both branches into one typed Notion row",
      },
      {
        src: "/case-studies/briarworks-operator-os/05-w1-notion-inbox-log.jpg",
        alt: "Notion Inbox Log database with fresh triage output — Urgent Action rows with 0.92–0.98 confidence, a Respond Needed row with Has Draft checked, full reasoning and body previews, timestamped July 2026",
        caption: "Inbox Log in Notion — categories, confidence scores, reasoning, and draft flags written per email",
      },
      {
        src: "/case-studies/briarworks-operator-os/06-w2-workflow-canvas.jpg",
        alt: "n8n workflow canvas for Workflow 2 (Meeting Processor) — Meeting Webhook, Normalize Meeting Fields, Claude Extractor, and Parse & Validate Extraction fanning out into two parallel branches: Split Decisions into Notion — Decisions Log, and Split Action Items into Notion — Action Items followed by Draft Follow-up Email",
        caption: "Workflow 2: Meeting Processor — one extraction call fanning out to parallel Decisions and Action Items branches, with a follow-up email drafter on the tail",
      },
      {
        src: "/case-studies/briarworks-operator-os/07-w2-claude-extractor.jpg",
        alt: "Claude Extractor node open in n8n — meeting transcript input from Normalize Meeting Fields, Anthropic API call configuration, and output panel showing structured JSON with decisions and action_items arrays extracted in a single call",
        caption: "Claude Extractor — a single structured-output call turns a raw meeting transcript into decisions and action_items arrays",
      },
      {
        src: "/case-studies/briarworks-operator-os/08-w2-notion-decisions-log.jpg",
        alt: "Notion Decisions Log populated by the Meeting Processor — decision text, source meeting title, meeting date, rationale, and alternatives considered per row, including hiring and engineering-process decisions from the synthetic meetings",
        caption: "Decisions Log in Notion — decision, meeting context, rationale, and alternatives considered per row",
      },
      {
        src: "/case-studies/briarworks-operator-os/09-w2-notion-action-items.jpg",
        alt: "Notion Action Items database populated by the Meeting Processor — Task, Owner, Due Date, Source Meeting, Status, and Priority columns with extracted items assigned to named owners",
        caption: "Action Items in Notion — task, owner, due date, source meeting, and priority for every extracted item",
      },
    ],
  },
  {
    name: "Vera Lane Studio — Project Kickoff",
    category: "AI Automation",
    problem:
      "A boutique hospitality design studio runs the same manual grind on every won project: read the discovery-call notes, set up a project workspace, and hand-write a kickoff brief and meeting agenda. It's slow, inconsistent, and the output quality depends entirely on who did it — and on how good the notes were.",
    approach:
      "Built a two-agent n8n pipeline triggered by a 'deal won' webhook. Claude Haiku 4.5 drafts a structured kickoff brief and a separate kickoff agenda from the raw discovery notes; both gather into a single Notion project workspace. Every LLM response passes a defensive parser — code-fence stripping, validated JSON, Notion block-limit handling, and select-option normalisation. Crucially, the brief drafter judges its own confidence: rich notes produce a Complete brief, while notes too thin to work from are flagged Needs Review with the missing information listed. The system does less when it knows less — routing uncertain cases to a human instead of inventing details.",
    outcome:
      "One deal in → a project workspace with a tailored brief and a venue-specific agenda out, in about 10 seconds. Tested against three synthetic deals of decreasing note quality: the two rich ones produce Complete briefs with specific agendas; the vague 10-minute intro call correctly flags Needs Review on every run, listing exactly what's missing instead of guessing. Built to mirror an AI-architect assessment for an Australian hospitality-design group — designed on paper, then shipped as working software.",
    year: "2026",
    status: "Case study",
    href: "#",
    tags: ["n8n", "Claude Haiku 4.5", "Notion API", "JavaScript", "Multi-agent", "Human-in-the-loop", "Defensive design", "Synthetic persona"],
    screenshots: [
      {
        src: "/case-studies/studio-ops/01-workflow-canvas.jpg",
        alt: "n8n workflow canvas — 8 nodes: Deal Won Webhook, Normalize Fields, Claude Brief Drafter, Defensive Parser, Claude Agenda Drafter, Agenda Parser, and Notion — Create Project",
        caption: "The pipeline — a 'deal won' webhook through two Claude drafters (brief + agenda), each with a defensive parser, gathering into one Notion project workspace",
      },
      {
        src: "/case-studies/studio-ops/02-normalize-fields.jpg",
        alt: "Normalize Fields node — the webhook payload (deal id, project, client, venue, budget, discovery notes) mapped to a flat, stable schema in the output panel",
        caption: "Normalize Fields — the contract layer: the raw webhook is flattened to stable field names every downstream node reads from",
      },
      {
        src: "/case-studies/studio-ops/03-claude-brief-drafter.jpg",
        alt: "Claude Brief Drafter HTTP node — POST to the Anthropic Messages API with header auth, output showing the structured kickoff brief JSON (summary, objectives, scope) from Haiku 4.5",
        caption: "Claude Brief Drafter — Haiku 4.5 turns raw discovery notes into a structured brief and judges its own confidence",
      },
      {
        src: "/case-studies/studio-ops/04-defensive-parser.jpg",
        alt: "Defensive Parser code node — strips code fences, validates JSON, splits the brief into two blocks each capped at 1900 chars for Notion's limit, and reaches back to Normalize Fields for the deal data",
        caption: "Defensive Parser — code-fence stripping, JSON validation, and block-limit handling so a malformed or oversized response never breaks the write",
      },
      {
        src: "/case-studies/studio-ops/05-agenda-parser.jpg",
        alt: "Agenda Parser code node — parses the agenda JSON, builds the agenda block, and spreads the brief parser's output through so both drafts reach Notion in one item",
        caption: "Agenda Parser — gathers the second agent's output alongside the brief, so both land in one project page",
      },
      {
        src: "/case-studies/studio-ops/06-notion-create-project.jpg",
        alt: "Notion — Create Project node — creates a page in the Projects database with typed properties and the brief plus agenda as page blocks; output shows the created Fable Wine Bar page with its Notion URL",
        caption: "Notion — Create Project — writes the workspace: typed properties plus the brief and agenda in the page body",
      },
      {
        src: "/case-studies/studio-ops/07-project-page-brief-agenda.jpg",
        alt: "Fable Wine Bar Notion page — the drafted brief (timeline, stakeholders, open questions) followed by a tailored 75-minute kickoff agenda with suggested attendees, all specific to the wine bar's heritage shopfront, budget, and open items",
        caption: "The output — Fable Wine Bar's workspace with a tailored brief AND a venue-specific kickoff agenda, both drafted from the discovery notes",
      },
      {
        src: "/case-studies/studio-ops/08-project-page-complete.jpg",
        alt: "Ovenbird Café Notion page — Brief Quality 'Complete', with a full brief: summary, objectives, and scope highlights drawn from the notes (full strip-out, grease trap and exhaust MEP, exposed-brick investigation)",
        caption: "Ovenbird Café — a Complete brief drawn entirely from the notes: strip-out, MEP rough-in, exposed-brick investigation",
      },
      {
        src: "/case-studies/studio-ops/09-projects-table-contrast.jpg",
        alt: "Notion Projects database — three rows with the Brief Quality column showing Needs Review (New restaurant Bondi), Complete (Ovenbird Café), and Complete (Fable Wine Bar)",
        caption: "The flag discriminates — two rich deals land Complete, the thin one lands Needs Review",
      },
      {
        src: "/case-studies/studio-ops/10-needs-review-flag.jpg",
        alt: "New restaurant Bondi Notion page — from a vague 10-minute intro call, the system produced a minimal brief and a long Open Questions list of missing information (client name, site address, budget, timeline, decision-makers) instead of inventing a brief",
        caption: "Needs Review in action — from a 10-minute intro call, the system refuses to invent a brief and lists exactly what's missing for a human to chase",
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

/**
 * Case studies are grouped into tracks so the AI automation work leads and is
 * not overshadowed by the full-stack build. Order here is the order on the page;
 * the first project of the first track gets the featured treatment. Every
 * project category must map to exactly one track.
 */
export const projectTracks: { label: string; categories: Project["category"][] }[] = [
  { label: "AI Automation & Agents", categories: ["AI Automation"] },
  { label: "Full-Stack & SaaS", categories: ["Full-Stack SaaS", "Full-Stack"] },
  { label: "Design & Brand", categories: ["Email Marketing", "Site"] },
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
