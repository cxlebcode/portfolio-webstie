# Caleb Laing – Portfolio (One Page)

Modern, accessible, recruiter‑optimised one‑page portfolio built with Next.js (Pages Router), TypeScript, and Tailwind CSS.

## Features
- One-page layout with sticky nav, smooth scroll, command palette (/ or Ctrl+K)
- Dark/light theme toggle (persisted)
- Recruiter Mode toggle: compresses sections to bullet/high-signal content
- Accessible: semantic landmarks, skip link, focus states, reduced motion friendly
- SEO: meta tags, OpenGraph, JSON-LD Person schema
- Skills icon grid / tabs (no progress bars; focus on discrete capabilities)
- Project cards with stack chips & analytics hooks
- Lightweight analytics context (console in dev) – swap for real provider
- Fast: minimal deps, tree‑shaken, no client router duplication

## Getting Started
Install dependencies and start the dev server:

```powershell
npm install
npm run dev
```

Open http://localhost:3000

## Customisation
1. Replace placeholder project links, repo URLs, LinkedIn/GitHub profiles.
2. Add real metrics & quantified bullets to experience/projects.
3. Swap `/public/Caleb_Laing_CV.pdf` with actual CV.
4. Update `jsonLd` object in `pages/index.tsx` with real URLs.

## Analytics
`AnalyticsContext` currently logs to console during development. Integrate your provider (e.g. Posthog, Umami) by sending events inside `track`.

## TypeScript
All source is authored in TS/TSX with strict type checking. Adjust `tsconfig.json` if you need to relax settings.

## Removed React Router
Originally prototyped with an in‑memory `MemoryRouter`; now removed in favour of native hash navigation (lighter bundle, simpler).

## Deployment
Build and deploy (Vercel recommended):

```powershell
npm run build
npm start
```

## License
Personal project – all rights reserved.
