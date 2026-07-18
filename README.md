# rjbeso.com

My personal portfolio, live at **[rjbeso.com](https://rjbeso.com)**.

I'm Ralph Javen Beso, a full-stack and AI automation developer. This site is both the portfolio and a working code sample: it's the one project on it whose source you can read directly.

## What's here

- A single-page site with About, Experience, Process, Case Studies, Stack, and Contact sections
- Case studies grouped into tracks (AI automation leads), each with a screenshot lightbox
- A custom light and dark theme, scroll-driven motion, and a scroll-spy nav
- All content is data-driven from [`lib/data.ts`](lib/data.ts), so copy and projects live in one place rather than being buried in components

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for animation
- **lucide-react** for icons
- **Vercel Analytics**
- Deployed on **Vercel**

## Project layout

```
app/          # Next.js App Router entry, layout, and global styles
components/   # Section components (About, Experience, Projects, Nav, ...)
lib/data.ts   # All site content: bio, experience, projects, case studies
public/       # Images, profile photo, case-study screenshots, CV
```

To change what the site says, start in [`lib/data.ts`](lib/data.ts). The components render whatever is there.

## Deploying

Every push to `main` deploys to production on Vercel. A production deploy can also be triggered locally with `vercel --prod`.

---

Built by Ralph Javen Beso · [rjbeso.com](https://rjbeso.com) · [github.com/rjbeso-dev](https://github.com/rjbeso-dev)
