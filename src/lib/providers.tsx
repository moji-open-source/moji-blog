"use client"
import type { PropsWithChildren } from 'react'
import { NextUIProvider } from './NextUIProvider'

export function Provider(props: PropsWithChildren) {
  return (
    <>
      <NextUIProvider>{props.children}</NextUIProvider>
    </>
  )
}
