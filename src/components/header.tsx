import { Image } from '@nextui-org/react'
import Link from 'next/link'

import LogoImg from '#/assets/logo@185 × 185.webp'

export function Header() {
  return (
    <header className="h-[80px] w-full bg-bg1 shadow rounded-[10px] z-10 fixed left-0 right-0
    card-decoration-mask after:content-['']"
    >
      <div className="container mx-auto flex items-center h-full">
        <div className="left-0">
          <Link href="/">
            <Image src={LogoImg.src} width={40} height={40} radius="none" />
          </Link>
        </div>
      </div>
    </header>
  )
}
