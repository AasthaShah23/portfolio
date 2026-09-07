export const themes = [
  {
    id: 'ivory',
    label: 'Light mode',
    description: 'Warm, calm & thoughtful',
    color: '#204e43',
    background: '#faf9f5',
  },
  {
    id: 'sage',
    label: 'Dark mode',
    description: 'Quiet, focused & refined',
    color: '#b0c9a4',
    background: '#1b2421',
  },
] as const

export type Theme = (typeof themes)[number]['id']
const storageKey = 'portfolio-theme'

export function getSavedTheme(): Theme {
  try {
    const value = localStorage.getItem(storageKey)
    return themes.find((theme) => theme.id === value)?.id ?? 'ivory'
  } catch {
    return 'ivory'
  }
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  const background = themes.find((item) => item.id === theme)!.background
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', background)
}

export function saveTheme(theme: Theme) {
  applyTheme(theme)
  try {
    localStorage.setItem(storageKey, theme)
  } catch {
    // The current theme still works when browser storage is unavailable.
  }
}
