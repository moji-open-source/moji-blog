import { Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'

import LogoImg from '#/assets/logo@185×185.webp'

export function Header() {
  return (
    <header className="h-[80px] w-full bg-bg1 shadow rounded-[10px] z-10 fixed left-0 right-0
    card-decoration-mask after:content-['']"
    >
      <div className="container mx-auto flex items-center h-full">
        <Navbar>
          <Link href="/" color="foreground">
            <NavbarBrand>
              <Image src={LogoImg.src} width={40} height={40} radius="none" />
              <p className="font-bold text-inherit ml-2">CLOVER</p>
            </NavbarBrand>
          </Link>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="/">
                Posts
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/about">
                About
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </header>
  )
}
