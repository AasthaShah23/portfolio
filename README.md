# Portfolio

React (TypeScript) + Vite, Tailwind CSS, shadcn/ui, TanStack Router, TanStack Query, and GSAP.

## Getting started

Use Node.js 22.12+ (Node 24 LTS recommended) and npm.

```sh
npm ci
npm run dev
```

```sh
npm run build   # Production output in dist/
npm run preview # Preview the production build locally
npm run typecheck # Check application and tooling types
npm run lint    # Check TypeScript and TSX with Oxlint
```

## Structure

```text
public/                   # Files served as-is
src/
  app/
    app.tsx               # Application composition
    router.tsx            # Route definitions and route fallbacks
    providers/            # Application-wide providers
  assets/                 # Imported images, fonts, and other assets
  components/
    layouts/              # Shared page layouts
    ui/                   # shadcn/ui component source
  features/
    home/pages/           # Home feature
    about/pages/          # About feature
  hooks/                  # Hooks shared across features
  lib/                    # Shared utilities and library configuration
  styles/                 # Global CSS and theme tokens
  main.tsx                # React entry point
```

Use `@/` imports for files inside `src`. Keep feature-specific components, hooks, API functions, and tests together inside `features/<feature>/` as needed. Promote code to shared folders when multiple features use it. Avoid importing one feature's internal files into another feature.

## Routing and data

TanStack **Router** handles navigation. TanStack **Query** handles server-state caching and fetching; it is not a router. The shared QueryClient is configured in `src/lib/query-client.ts` and provided at the application root. No backend or sample network requests are configured.

To add a page, create it inside its feature, then register a `createRoute` in `src/app/router.tsx` and add it to the route tree. Use TanStack `Link` for internal navigation. Use `useQuery` and `useMutation` inside feature hooks when connecting an API.

## UI and animation

Tailwind uses the Vite plugin. Theme tokens and dark-mode overrides live in `src/styles/globals.css`; add the `dark` class to the document root to use the dark palette.

Add shadcn components with:

```sh
npx shadcn@latest add dialog
```

`components.json` configures TypeScript output and the `@/components/ui` destination. Generated components are owned by this project and can be customized.

The home page demonstrates GSAP's `useGSAP` hook, scoped selectors, cleanup on unmount, and reduced-motion support. Follow that pattern for new animations.

## Deployment

Deploy `dist/` after `npm run build`. Configure the host to rewrite unknown application paths to `index.html` so direct visits to routes such as `/about` work.

Keep local environment values in `.env.local`. Vite exposes `VITE_` variables to the browser, so they must not contain secrets. Commit `package-lock.json` and use `npm ci` for reproducible installs.

## References

- [shadcn/ui with Vite](https://ui.shadcn.com/docs/installation/vite)
- [TanStack Router](https://tanstack.com/router/latest/docs/quick-start)
- [GSAP with React](https://gsap.com/resources/React/)
