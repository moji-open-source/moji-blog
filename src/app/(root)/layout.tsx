'use client'
import { GoTopBtn } from '@/components/gotop'
import { Header } from '@/components/header'

export default function PostsLayout({ children }: React.PropsWithChildren) {
  return <>
    <Header />
    <GoTopBtn />
    {children}
  </>
}
