import type React from 'react'

interface Props {
  is?: boolean
}

export function If({ is, children }: Props & React.PropsWithChildren) {
  if (is)
    return children
  return null
}
