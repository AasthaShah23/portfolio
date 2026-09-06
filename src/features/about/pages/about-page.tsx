import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function AboutPage() {
  return (
    <section className="max-w-2xl space-y-6">
      <p className="text-sm font-medium text-emerald-700">Built to grow</p>
      <h1 className="text-4xl font-semibold tracking-tight">Your next chapter starts here.</h1>
      <p className="text-lg leading-relaxed text-muted-foreground">This is a React and Vite starter for your portfolio. Replace these pages with your story, projects, and ideas.</p>
      <Button asChild variant="outline"><Link to="/">Back to home</Link></Button>
    </section>
  )
}
