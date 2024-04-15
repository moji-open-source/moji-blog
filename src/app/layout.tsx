import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

import Link from 'next/link'
import { Provider } from '#/lib/providers'
import { Header } from '#/components/header'

export const metadata: Metadata = {
  title: 'Clover\'s Blog',
  description: 'Hey, I am Clover You, welcome here!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" data-theme="light" style={{ colorScheme: 'light' }}>
      <body>
        <SpeedInsights />
        <Provider>
          <Header />
          <main className="px-7 py-10 overflow-x-hidden">
            {children}
            <div className="container mx-auto mt-10 mb-6 flex">
              <span className="text-sm opacity-50">
                <Link
                  target="_blank"
                  href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  style={{
                    color: 'inherit',
                  }}
                  rel="noreferrer"
                >
                  CC BY-NC-SA 4.0
                </Link>
                2024-PRESENT © Clover You
              </span>
              <div className="flex-auto"></div>
            </div>
          </main>
        </Provider>
      </body>
    </html>
  )
}
