import { ThemeSwitcher } from './theme-switcher'
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
    <header className="h-[86px] sticky top-0 z-40 border-b border-b-border [background:color-mix(in_srgb,_var(--background)_94%,_transparent)] [backdrop-filter:blur(16px)] max-[600px]:h-18">
      <div className="page-container w-[min(1160px,_calc(100%_-_96px))] mx-auto max-[1100px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]  h-full flex justify-between items-center">
        <a
          href="#home"
          className="font-heading text-[26px] tracking-[-1.3px] font-bold [&_>_span]:text-text-soft max-[600px]:text-[24px]"
          aria-label={`${profile.name}, home`}
          onClick={() => setOpen(false)}
        >
          ananya<span>.</span>
        </a>
        <nav
          className="flex gap-[30px] [&_a]:text-[12px] [&_a]:text-text-soft [&_a]:relative [&_a]:[transition:color_0.2s] [&_a:hover]:text-primary [&_a[aria-current]]:text-primary [&_a[aria-current]::after]:content-[''] [&_a[aria-current]::after]:absolute [&_a[aria-current]::after]:bottom-[-10px] [&_a[aria-current]::after]:left-[calc(50%_-_2px)] [&_a[aria-current]::after]:w-1 [&_a[aria-current]::after]:h-1 [&_a[aria-current]::after]:rounded-full [&_a[aria-current]::after]:bg-primary max-[800px]:gap-[18px] max-[800px]:[&_a]:text-[10px] max-[600px]:hidden"
          aria-label="Main navigation"
        >
          {navigation.map(({ id, label }) => (
            <a href={`#${id}`} key={id} aria-current={active === id ? 'location' : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            className="text-[12px] min-w-[118px] h-[38px] max-[800px]:min-w-25 max-[600px]:m-0 max-[600px]:h-[34px] max-[600px]:text-[10px] max-[600px]:min-w-25 max-[360px]:hidden"
          >
            <a href="#contact">
              Let’s talk <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <ThemeSwitcher />
          <Button
            id="menu-toggle"
            className="hidden max-[600px]:inline-flex"
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
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="max-[600px]:absolute max-[600px]:top-[71px] max-[600px]:left-0 max-[600px]:right-0 max-[600px]:pt-3 max-[600px]:pr-5 max-[600px]:pb-[22px] max-[600px]:pl-5 max-[600px]:bg-background max-[600px]:border-b max-[600px]:border-b-border max-[600px]:shadow-[0_16px_20px_#2035270a] max-[600px]:[&_a]:flex max-[600px]:[&_a]:items-center max-[600px]:[&_a]:justify-between max-[600px]:[&_a]:pt-[13px] max-[600px]:[&_a]:pr-[3px] max-[600px]:[&_a]:pb-[13px] max-[600px]:[&_a]:pl-[3px] max-[600px]:[&_a]:text-[13px] max-[600px]:[&_a]:border-b max-[600px]:[&_a]:border-b-border"
          aria-label="Mobile navigation"
        >
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
