import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

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
    <html lang="en" data-theme="light" style={{ colorScheme: 'light' }}>
      <body>
        <SpeedInsights />
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
