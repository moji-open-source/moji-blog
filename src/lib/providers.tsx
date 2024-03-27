"use client"
import { PropsWithChildren } from "react"
import { NextUIProvider } from "./NextUIProvider"

export function Provider(props: PropsWithChildren) {
  return <>
    <NextUIProvider>{props.children}</NextUIProvider>
  </>
}