# Smart PDF Tools

A free, SEO-optimized, AdSense-ready PDF tools website with 5 core tools, 11 pages, dark mode, drag-and-drop upload UI, and full SEO infrastructure.

## Run & Operate

- `pnpm --filter @workspace/smart-pdf-tools run dev` — run the frontend (port 19870)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, shadcn/ui, wouter (routing), react-helmet-async (SEO)
- No backend needed — all tool interactions are frontend-only (simulated)

## Where things live

- `artifacts/smart-pdf-tools/src/pages/` — all 11 page components
- `artifacts/smart-pdf-tools/src/components/` — Navbar, Footer, ToolUploader, RelatedTools, BreadcrumbNav, SEOHead
- `artifacts/smart-pdf-tools/src/lib/theme.tsx` — dark mode ThemeProvider + useTheme hook
- `artifacts/smart-pdf-tools/public/robots.txt` — crawl rules
- `artifacts/smart-pdf-tools/public/sitemap.xml` — all 11 routes listed

## Architecture decisions

- Frontend-only: No real PDF processing — the tool UI simulates uploads and shows a progress bar, making it AdSense-ready without a backend.
- SEO is handled per-page via react-helmet-async's `<Helmet>` component (title, description, canonical, OG, Twitter, JSON-LD FAQ schema, Breadcrumb schema).
- Dark mode uses a ThemeProvider with localStorage persistence and a `dark` class on `<html>`.
- All 5 tool pages share the reusable `<ToolUploader>` component with drag-and-drop, progress bar, and simulated conversion flow.

## Product

Smart PDF Tools offers 5 free online PDF utilities: PDF to Word, Word to PDF, Merge PDF, Compress PDF, Image to PDF. Each tool page has 300–500 words of unique SEO content, a how-to section, benefits, an FAQ accordion, and a related tools section. The site also includes About, Contact (with react-hook-form validation), Privacy Policy, Terms, and Disclaimer pages — all required for Google AdSense approval.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- When adding new pages, register the route in `src/App.tsx` AND add the URL to `public/sitemap.xml`.
- Google Fonts import must be the very first line in `index.css` (before `@import "tailwindcss"`).
- The `react-helmet-async` HelmetProvider must wrap the app in `main.tsx`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
