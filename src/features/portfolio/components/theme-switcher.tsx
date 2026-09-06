import { useEffect, useRef, useState } from 'react'
import { Check, Palette, X } from 'lucide-react'
import { getSavedTheme, saveTheme, themes, type Theme } from '@/lib/theme'

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>(getSavedTheme)
  const [open, setOpen] = useState(false)
  const container = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !container.current?.contains(event.target)) setOpen(false)
    }
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        trigger.current?.focus()
      }
    }
    document.addEventListener('pointerdown', dismiss)
    document.addEventListener('keydown', escape)
    return () => {
      document.removeEventListener('pointerdown', dismiss)
      document.removeEventListener('keydown', escape)
    }
  }, [open])

  return (
    <div className="theme-switcher" ref={container}>
      {open && (
        <div
          id="theme-options"
          className="theme-panel"
          role="group"
          aria-label="Portfolio color themes"
        >
          <div className="theme-panel-heading">
            <div>
              <strong>Find your favorite mood.</strong>
              <p>Same portfolio. Three perspectives.</p>
            </div>
            <button
              type="button"
              aria-label="Close theme picker"
              onClick={() => {
                setOpen(false)
                trigger.current?.focus()
              }}
            >
              <X size={16} />
            </button>
          </div>
          {themes.map((item) => (
            <button
              key={item.id}
              type="button"
              className="theme-option"
              aria-pressed={theme === item.id}
              onClick={() => {
                setTheme(item.id)
                saveTheme(item.id)
              }}
            >
              <span
                className="theme-swatch"
                style={{ background: item.background }}
                aria-hidden="true"
              >
                <span style={{ background: item.color }} />
              </span>
              <span>
                <strong>{item.label}</strong>
                <small>{item.description}</small>
              </span>
              {theme === item.id && <Check size={16} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        ref={trigger}
        className="theme-trigger"
        aria-expanded={open}
        aria-controls="theme-options"
        onClick={() => setOpen(!open)}
      >
        <Palette size={16} aria-hidden="true" />
        <span>Theme</span>
        <span
          className="theme-current-dot"
          style={{ background: themes.find((item) => item.id === theme)!.color }}
        />
      </button>
    </div>
  )
}
