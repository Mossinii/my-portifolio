import './globals.scss'
import { Poppins } from 'next/font/google'

const inter = Poppins ({ subsets: ['latin'], 
weight: ['200', '300','400','500','600'] })

export const metadata = {
  title: 'Kauan Mossini',
  description: 'Kauan Mossini is a Front-End Developer...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
