import type { Metadata } from 'next'
import { Geist_Mono, Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import './globals.css'

import { resolvePackage } from '@/services/package'

const { author, description } = resolvePackage()
export const metadata: Metadata = {
  title: 'Gratia',
  description,
  authors: [{ name: author, url: 'https://clovu.me' }],
}
const inter = Inter({ subsets: ['latin'] })
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className={`${inter.className} ${geistMono.variable}`}>
      <body>
        <ThemeProvider enableSystem attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
