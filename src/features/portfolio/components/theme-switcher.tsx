import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getSavedTheme, saveTheme, type Theme } from '@/lib/theme'

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>(getSavedTheme)
  const isDark = theme === 'sage'
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="theme-toggle"
      aria-label={label}
      title={label}
      onClick={() => {
        const nextTheme = isDark ? 'ivory' : 'sage'
        setTheme(nextTheme)
        saveTheme(nextTheme)
      }}
    >
      {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </Button>
  )
}
