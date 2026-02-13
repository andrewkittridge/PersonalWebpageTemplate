# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (tsx watches server/index.ts + Vite HMR for client)
npm run build        # Production build: vite build (client → dist/public) + esbuild (server → dist/index.js)
npm run start        # Run production build from dist/index.js
npm test             # Jest + jsdom (ESM mode via ts-jest)
npm test -- <pattern>  # Run a single test file
npm run db:push      # Apply Drizzle schema to DATABASE_URL
```

## Architecture

Full-stack monorepo: React SPA + Express server, deployed to Vercel.

### Client (`client/`)
- **Single-page app** — one route (`/`) renders `Home.tsx`, which lazy-loads section components via `React.lazy` + `Suspense`
- **Sections** are standalone components: Hero, About, Experience, Skills, Education, Contact, Footer — each in `client/src/components/`
- **Content is data-driven** — all portfolio text, skills, experience bullets, and project details live in `client/src/lib/constants.ts`. Components consume these exports; edit content there, not in JSX
- **SEO** is split: static meta tags in `client/index.html` (structured data JSON-LD, Open Graph, geo tags) and dynamic helpers in `client/src/lib/seo.ts`. Both must stay in sync when updating personal info
- **UI components** in `client/src/components/ui/` are shadcn/ui (Radix + Tailwind); configured via `components.json`
- **Routing**: Wouter (lightweight), but effectively unused since there's only one page with anchor-based scroll navigation

### Server (`server/`)
- Express with Vite dev middleware (`server/vite.ts`) in development, static file serving in production
- Minimal API: `/api/health` and `/api/echo` in `server/routes.ts`
- Vercel deployment uses `api/index.ts` as serverless entry point

### Database (`db/`)
- Drizzle ORM with PostgreSQL (Neon). Schema in `db/schema.ts`, migrations in `migrations/`
- Requires `DATABASE_URL` env var. Currently only has a `users` table (auth scaffold)

## Key Patterns

- **Path alias**: `@/` maps to `client/src/` (configured in tsconfig, vite.config, and jest.config)
- **Styling**: Tailwind CSS with HSL custom properties for theming. Custom utility classes (`.glass-panel`, `.pill-solid`, `.chip-ghost`, `.surface-card`, etc.) defined in `client/src/index.css` via `@layer components`. Extend tokens in `tailwind.config.ts` rather than adding one-off CSS
- **Animations**: Framer Motion for scroll-triggered entry animations on each section; Tailwind keyframes for ambient effects (`gradient-shift`, `bob`)
- **Analytics**: `useSectionAnalytics` hook tracks viewport visibility per section via IntersectionObserver
- **Dark mode**: `next-themes` provider with class strategy; violet accent palette (`--primary: 263 70% 66%`)

## Coding Style

- TypeScript strict mode. Two-space indentation, arrow functions
- PascalCase component filenames, `use` prefix for hooks, camelCase for server utilities
- Tests colocated as `<Name>.test.tsx` using React Testing Library
- Conventional Commits (`feat:`, `fix:`, `refactor:`, `chore:`)

## When Updating Portfolio Content

1. Edit `client/src/lib/constants.ts` for experience, skills, projects, site title/description
2. Update `client/index.html` meta tags, structured data JSON-LD, and geo tags to match
3. Update `client/src/lib/seo.ts` structured data (jobTitle, address, knowsAbout, hasOccupation)
4. Update `client/src/components/Hero.tsx` title and tagline
5. Run `npm run build` to verify no TypeScript errors
