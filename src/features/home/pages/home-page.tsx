import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

gsap.registerPlugin(useGSAP)

const stack = [
  ['React + Vite', 'A fast foundation for building your next experience.'],
  ['Tailwind + shadcn/ui', 'Reusable components with styles you control.'],
  ['TanStack', 'Routing and server-state management, ready to grow.'],
  ['GSAP', 'Thoughtful motion that respects reduced-motion preferences.'],
]

export function HomePage() {
  const container = useRef<HTMLElement>(null)
  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('[data-reveal]', { opacity: 0, y: 18, duration: 0.65, stagger: 0.08, ease: 'power2.out' })
    })
    return () => media.revert()
  }, { scope: container })

  return (
    <section ref={container}>
      <p data-reveal className="mb-5 text-sm font-medium text-emerald-700">A fresh start</p>
      <h1 data-reveal className="max-w-2xl text-5xl font-semibold tracking-tight md:text-7xl">Make something<br />worth sharing.</h1>
      <p data-reveal className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">Your portfolio foundation is ready. Start with an idea, build your first feature, and make it yours.</p>
      <div data-reveal className="mt-8">
        <Button asChild size="lg"><Link to="/about">Explore the setup <ArrowRight aria-hidden="true" /></Link></Button>
      </div>
      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        {stack.map(([title, description]) => (
          <Card data-reveal key={title}><CardHeader><CardTitle>{title}</CardTitle><CardDescription>{description}</CardDescription></CardHeader></Card>
        ))}
      </div>
    </section>
  )
}
