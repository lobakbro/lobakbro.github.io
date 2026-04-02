# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

## Consteallation project

We seem to write about he constellation project allot, here's the location of the project so you can access it

C:\Users\sprin\Documents\personal\interview_prep

## Architecture

Astro 6 static site deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `master`.

**Content collections** (`src/content.config.ts`): `essays` and `projects`, both markdown with Zod schemas. Draft filtering uses `import.meta.env.PROD` — drafts show in dev, hidden in prod.

**Routing**: File-based. Dynamic routes at `src/pages/essays/[...slug].astro`, `src/pages/projects/[...slug].astro`, and `src/pages/essays/[category].astro` for category filtering. All use `getStaticPaths()` from content collections.

**Layout**: Single `BaseLayout.astro` wraps all pages (SEO, header, footer, sidebar nav, theme toggle, scroll progress bar).

**Styling**: Tailwind CSS v4 via Vite plugin (no tailwind.config — everything in `src/styles/global.css`). Custom design tokens prefixed `--v8-*` define the color system. Dark/light mode via `.dark` class + localStorage.

## Content Schemas

**Essays** frontmatter: `title`, `description`, `date`, `category` (ml | research | projects | music | philosophy | life | roundup | cybersecurity), `tags[]`, `featured`, `draft`. Optional: `dateModified`, `heroImage`, `readingTime`.

**Projects** frontmatter: `title`, `description`, `date`, `tech[]`, `status` (active | completed | archived | in-progress), `featured`, `draft`. Optional: `repo`, `demo`, `heroImage`.

## Repo Labels

This repo is tagged `repo:lobakbro` in Linear.
