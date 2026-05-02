'use client'

import { useTheme } from 'next-themes'
import { Button } from './ui/button'

function SwitchIcon({ theme }: { theme?: string }) {
  if (theme === 'light') return <span key="light" className="icon-[carbon--sun] size-4 animate-spin-once" suppressHydrationWarning/>
  if (theme === 'dark') return <span key="dark" className="icon-[tabler--moon-filled] size-4 animate-spin-once" suppressHydrationWarning/>
  return <span key="system" className="icon-[carbon--airplay-filled] size-4" suppressHydrationWarning/>
}

const ThemeMapper = {
  dark: 'light',
  light: 'dark',
} as Record<string, string>

export function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme()

  function switchTheme() {
    const next = theme === 'system' ? systemTheme : theme
    setTheme(ThemeMapper[next ?? 'dark'])
  }

  const nextTheme = theme === 'system' ? systemTheme : theme
  const next = ThemeMapper[nextTheme ?? 'dark']

  return <Button variant="ghost" aria-label={`Theme: ${theme ?? 'system'}. Switch to ${next}`} size="icon" className="size-8 cursor-pointer" onClick={switchTheme} suppressHydrationWarning>
    <SwitchIcon theme={theme} />
  </Button>
}
