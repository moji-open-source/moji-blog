import { FootBar } from '@/components/foot'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export default function DefaultLayout({ children }: PropsWithChildren) {
  return <div>
    {children}
    <FootBar>
      <span className="text-sm opacity-50">
        <Link target="_blank" rel="noreferrer" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC BY-NC-SA 4.0
        </Link> 2024-PRESENT © Clover You
      </span>
    </FootBar>
  </div>
}
