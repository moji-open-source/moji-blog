'use client'
import type { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'
import { NextUIProvider } from './NextUIProvider'

export function Provider(props: PropsWithChildren) {
  return (
    <>
      <ThemeProvider>
        <NextUIProvider>{props.children}</NextUIProvider>
      </ThemeProvider>
    </>
  )
}
