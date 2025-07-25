import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kāpjam Kalnā Studio',
  description: 'Music Studio by Ronalds Znatnajs',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
