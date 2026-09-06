import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  redirect,
  lazyRouteComponent,
} from '@tanstack/react-router'
import { RootLayout } from '@/components/layouts/root-layout'
import { Button } from '@/components/ui/button'

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => (
    <section className="page-container section-space space-y-4">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <Button asChild>
        <Link to="/">Back to home</Link>
      </Button>
    </section>
  ),
  errorComponent: ({ reset }) => (
    <section role="alert" className="page-container section-space space-y-4">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <Button onClick={reset}>Try again</Button>
    </section>
  ),
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: lazyRouteComponent(
    () => import('@/features/portfolio/pages/portfolio-page'),
    'PortfolioPage',
  ),
})
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  beforeLoad: () => {
    throw redirect({ to: '/', hash: 'about' })
  },
})

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
