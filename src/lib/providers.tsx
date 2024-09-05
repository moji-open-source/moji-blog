'use client'
import type { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'
import { NextUIProvider } from './NextUIProvider'

interface ProviderProps extends PropsWithChildren {
  defaultTheme?: string
}

export function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider enableSystem defaultTheme="dark" enableColorScheme attribute="class">
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  )
}
