import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navigation, profile } from '../data/portfolio'

export function PortfolioHeader() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-15% 0px -65% 0px' },
    )
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        document.getElementById('menu-toggle')?.focus()
      }
    }
    if (open) document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open])
  return (
    <header className="site-header">
      <div className="page-container header-inner">
        <a
          href="#home"
          className="wordmark"
          aria-label={`${profile.name}, home`}
          onClick={() => setOpen(false)}
        >
          ananya<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ id, label }) => (
            <a href={`#${id}`} key={id} aria-current={active === id ? 'location' : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <Button asChild className="header-cta">
          <a href="#contact">
            Let’s talk <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
        <Button
          id="menu-toggle"
          className="mobile-menu-toggle"
          variant="ghost"
          size="icon"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map(({ id, label }) => (
            <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
