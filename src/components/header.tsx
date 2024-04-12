import { Image, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'

import LogoImg from '#/assets/logo@185×185.webp'
import { GitHubIcon } from '#/components/icons/github-icon'

export function Header() {
  return (
    <Navbar maxWidth="full">
      <Link href="/" color="foreground">
        <NavbarBrand>
          <Image src={LogoImg.src} width={25} height={25} radius="none" />
          <p className="font-bold text-inherit ml-2">CLOVER</p>
        </NavbarBrand>
      </Link>
      <NavbarContent className="hidden sm:flex gap-4 navbar-content" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://github.com/Clover-You" target="_blank">
            <GitHubIcon className="w-[18px] text-center" fill="var(--font-color)" />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
