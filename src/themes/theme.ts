export const THEMES = ['default', 'ocean', 'forest', 'royal'] as const
export type Theme = (typeof THEMES)[number]

const STORAGE_KEY = 'app-theme'

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  localStorage.setItem(STORAGE_KEY, theme)
}

export function getTheme(): Theme {
  return (localStorage.getItem(STORAGE_KEY) as Theme) ?? 'default'
}
