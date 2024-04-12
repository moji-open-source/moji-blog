'use client'
import Link from 'next/link'

interface GobackProps extends React.PropsWithChildren {
  href: string
}

export function Goback(props: GobackProps) {
  return (
    <>
      <span className="flex gap-2 opacity-50">
        <p className="!m-0">&gt;</p>
        <Link
          href={props.href}
        >
          {props.children ?? 'cd ..'}
        </Link>
      </span>
    </>
  )
}
