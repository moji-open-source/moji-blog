'use client'
import { Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import Link from 'next/link'

import React from 'react'
import LogoImg from '#/assets/logo@185×185.webp'
import { GitHubIcon } from '#/components/icons/github-icon'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Navbar
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
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

      <NavbarMenu className="navbar-content">
        <NavbarMenuItem>
          <Link color="foreground" href="/">
            Blog
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="https://github.com/Clover-You" target="_blank" className="flex gap-2">
            <GitHubIcon className="w-[18px] text-center" fill="var(--font-color)" />
            <span>GitHub</span>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>

      {/* <div className="sm:hidden flex-1"></div> */}

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>
    </Navbar>
  )
}
