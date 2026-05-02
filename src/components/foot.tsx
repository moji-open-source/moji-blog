import { PropsWithChildren } from 'react'

export function FootBar({ children }: PropsWithChildren) {
  return <div className="mx-auto mt-5 text-center text-sm opacity-50"> {children} </div>
}
