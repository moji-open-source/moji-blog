import Link from 'next/link'

import { ThemeSwitcher } from './theme-switcher'

const NAVIGATION_ITEMS = [
  { href: '/posts', label: 'Blog' },
  { href: '/', label: 'About' },
  { href: '/use', label: 'Use' },
] as const

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-415 items-center justify-between gap-4 px-4">
        <Link href="/" className="font-semibold text-foreground transition-colors hover:text-primary uppercase">
          Clover
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-4">
          {NAVIGATION_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex gap-2"
            >
              {label}
            </Link>
          ))}

          <Link
            href="https://github.com/clovu"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2"
          >
            <span className="icon-[octicon--mark-github-24] size-4.5"></span>
          </Link>

          <div className="ml-1">
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}
