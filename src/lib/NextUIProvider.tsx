'use client'

import { PropsWithChildren } from 'react'
import { NextUIProvider as Provider } from '@nextui-org/react'

export function NextUIProvider(props: PropsWithChildren) {
  return <Provider>{props.children}</Provider>
}