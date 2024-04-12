'use client'
import type { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'
import { NextUIProvider } from './NextUIProvider'

export function Provider(props: PropsWithChildren) {
  return (
    <>
      <ThemeProvider enableSystem enableColorScheme attribute="class">
        <NextUIProvider>{props.children}</NextUIProvider>
      </ThemeProvider>
    </>
  )
}
