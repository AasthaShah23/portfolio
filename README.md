# Ananya — Portfolio

A responsive React + TypeScript portfolio inspired by the supplied wireframe. Warm ivory, deep teal, locally hosted typography, an AI-generated portrait, and subtle GSAP animation.

All personal details, work history, projects, credentials, and testimonials are **sample content**. The real profile can be added later.

## Run locally

Use Node 24 (`nvm use`) and npm.

```sh
npm ci
npm run dev
```

- `npm run build` — strict TypeScript check and production build into `dist/`
- `npm run typecheck` — check application and Vite configuration types
- `npm run lint` — Oxlint checks
- `npm run preview` — serve the production build
- `npm test` — desktop and mobile Playwright checks (first run: `npx playwright install chromium`)

## Structure

```text
src/
  app/                       # Router and application providers
  components/
    layouts/                 # Shared route shell
    ui/                      # shadcn Button, Card, Dialog, Input, Textarea
  features/
    portfolio/
      components/            # Navigation, footer, headings, product mockups
      data/portfolio.ts      # Typed sample profile and content
      hooks/                 # Scoped GSAP section animation
      pages/                 # Page composition
      sections/              # All portfolio sections in one folder
        hero-section.tsx
        about-section.tsx
        skills-section.tsx
        experience-section.tsx
        projects-section.tsx
        education-section.tsx
        testimonials-section.tsx
        contact-section.tsx
  hooks/                     # Future hooks shared across features
  lib/                       # Query client and shared utilities
  styles/globals.css         # Tailwind setup, font imports, document defaults
  styles/themes.css          # Light/dark color tokens
public/
  images/portrait.png         # AI-generated placeholder portrait
  sample-resume.pdf           # Clearly labeled sample résumé
  favicon.svg
 tests/                      # Browser interaction tests
```

Use `@/` for imports from `src`. Keep feature-only code inside its feature. All portfolio sections live in the same `sections` directory. The page component only composes those sections.

## Replace the sample content

1. Update `src/features/portfolio/data/portfolio.ts` with the real profile, skills, work, education, projects, and approved testimonials.
2. Replace `public/images/portrait.png` and `public/sample-resume.pdf`; update portrait alt text and the résumé label.
3. Update the wordmark in `portfolio-header.tsx` and `portfolio-footer.tsx`, hero stats in `hero-section.tsx`, and page title/description in `index.html`.
4. Replace project mockups in `components/project-preview.tsx` with real screenshots when available. Each project already has a working case-study dialog.
5. Connect the social profiles and contact destination in `contact-section.tsx`. The form validates and previews locally; it deliberately does not send or store messages. Email currently uses `hello@example.com`.
6. Replace the sample credential/testimonial labels and footer demo notice when the real content is verified.

## Behavior and accessibility

- `/` contains the entire portfolio; `/about` redirects to the About section.
- Sticky desktop navigation and a mobile disclosure menu with Escape support.
- Project category filtering, accessible Radix/shadcn dialogs, and keyboard focus restoration.
- Labeled native form validation, whitespace rejection, and local message previews.
- GSAP section reveals and portrait motion are scoped and cleaned up on unmount.
- Reduced-motion preferences disable reveals, floating motion, and smooth scrolling.
- Fonts are bundled locally; no external font requests are required.
- TanStack Router handles routing; TanStack Query is provided for future server data. No backend is configured.

Add more shadcn components with `npx shadcn@latest add <component>`. Use the existing `@/lib/utils` helper for `cn` imports.

## Deploy

Run `npm run build`, publish `dist/`, and rewrite unknown application URLs to `index.html` for client routing. Keep secrets out of browser-exposed `VITE_` environment variables.

The supplied PDF was used as a visual reference only. Image provenance and the generation prompt are recorded in [docs/portrait-generation.md](docs/portrait-generation.md).

## Color themes

Use the sun/moon icon in the header to toggle **light mode** (Ivory & teal) and **dark mode** (Charcoal & sage). The selected palette is saved locally in your browser. Theme tokens live in `src/styles/themes.css`, with the typed palette configuration in `src/lib/theme.ts`. Product mockups and the code illustration keep their own colors.

## Styling

Portfolio components use Tailwind utilities directly in TSX, including responsive variants, hover/focus states, and reduced-motion variants. Global CSS is limited to Tailwind theme registration, font imports, keyframes, and document defaults. Color values stay in `src/styles/themes.css` so the header light/dark toggle can switch palettes consistently. Product preview palettes use static, typed Tailwind class maps in `components/preview-styles.ts`; avoid dynamically constructing utility class names.
