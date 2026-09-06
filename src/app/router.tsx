import { createRootRoute, createRoute, createRouter, Link } from '@tanstack/react-router'
import { RootLayout } from '@/components/layouts/root-layout'
import { HomePage } from '@/features/home/pages/home-page'
import { AboutPage } from '@/features/about/pages/about-page'
import { Button } from '@/components/ui/button'

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <Button asChild><Link to="/">Back to home</Link></Button>
    </section>
  ),
  errorComponent: ({ reset }) => (
    <section role="alert" className="space-y-4">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <Button onClick={reset}>Try again</Button>
    </section>
  ),
})

const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage })
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: AboutPage })

export const router = createRouter({
  routeTree: rootRoute.addChildren([homeRoute, aboutRoute]),
  defaultPreload: 'intent',
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
