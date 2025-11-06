import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carson Antoine - Full Stack Developer',
  description: 'Professional portfolio showcasing full-stack development expertise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
