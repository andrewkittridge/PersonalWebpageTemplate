# Repository Guidelines

## Project Structure & Module Organization
- `client/` contains the Vite + React UI: `src/pages` for screens, `src/components` for shared blocks, `src/lib` for utilities/PWA helpers, and `client/public` for static assets.
- `server/` owns the Express entry (`index.ts`), route registration, and the Vite bridge that proxies the client during development.
- `api/` exposes Vercel handlers, while `db/` plus `drizzle.config.ts` define Postgres schema artifacts that sync into `migrations/`.
- Tests live beside their subjects (e.g., `client/src/components/Hero.test.tsx`) so intent stays obvious.

## Build, Test, and Development Commands
- `npm run dev` — watches `server/index.ts` with `tsx`, wires in Vite middleware, and serves the SPA with hot reload.
- `npm run build` — runs `vite build` for the client and bundles the server into `dist/` via `esbuild`.
- `npm run start` — boots the compiled Express app from `dist/index.js` to mimic production locally.
- `npm run test` — executes Jest + Testing Library in a `jsdom` browser environment.
- `npm run db:push` — applies current Drizzle schema changes to the database defined by `DATABASE_URL`.

## Coding Style & Naming Conventions
- Code is TypeScript under `strict`; declare interfaces for props, route payloads, and Drizzle models.
- Components/pages use PascalCase filenames, hooks start with `use`, and server utilities stay camelCase.
- Use two-space indentation, arrow functions, and the `@/` alias from `tsconfig.json` for shared imports.
- Prefer Tailwind utilities; extend tokens in `tailwind.config.ts` instead of adding one-off CSS.

## Testing Guidelines
- Author Jest specs alongside each module as `<Name>.test.tsx` using React Testing Library helpers.
- Cover rendering states, accessibility, and key interactions (forms, SWR fallback). Avoid snapshot-only coverage.
- Run `npm test -- <pattern>` for focused suites and keep UI/API changes paired with regression tests.

## Commit & Pull Request Guidelines
- Use Conventional Commits (`feat:`, `refactor:`, `chore:`) matching the existing history for easy changelog generation.
- Keep commits scoped to one concern and describe behavioral impact in the body when necessary.
- Pull requests must summarize context, list manual/automated tests, link related issues, and attach before/after visuals for UI updates or metrics for performance work.

## Security & Configuration Tips
- Keep secrets (`DATABASE_URL`, custom `PORT`, `VERCEL` flags) in `.env` files ignored by Git.
- `drizzle.config.ts` fails fast without `DATABASE_URL`, so set it before running dev servers, migrations, or tests.
- Document any new service keys in `README.md` and deployment notes so Vercel builds stay reproducible.
