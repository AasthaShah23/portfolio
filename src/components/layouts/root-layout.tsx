import { Link, Outlet } from '@tanstack/react-router'

export function RootLayout() {
  return (
    <div className="min-h-svh">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:bg-background focus:p-4">Skip to content</a>
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link to="/" className="font-semibold tracking-tight">Portfolio<span className="text-emerald-600">.</span></Link>
          <nav aria-label="Main navigation" className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: 'text-foreground underline underline-offset-8' }}>Home</Link>
            <Link to="/about" activeProps={{ className: 'text-foreground underline underline-offset-8' }}>About</Link>
          </nav>
        </div>
      </header>
      <main id="main-content" className="mx-auto max-w-5xl px-6 py-16 md:py-24"><Outlet /></main>
    </div>
  )
}
