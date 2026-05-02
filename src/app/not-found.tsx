import Link from 'next/link'

import { resolvePackage } from '@/services/package'
import { buttonVariants } from '@/components/ui/button'

const { bugs = '#' } = resolvePackage()

export default function NotFound() {
  return (
    <main className="grid h-screen place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-400">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-accent-foreground sm:text-7xl">Page not found</h1>
        <p className="mt-6 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">Sorry, we couldn't find the page you're looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link replace href="/" className={buttonVariants({ variant: 'default' })}>Back to home</Link>
          <Link href={bugs} target="_blank" className="text-sm font-semibold text-white">Contact <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </div>
    </main>
  )
}
