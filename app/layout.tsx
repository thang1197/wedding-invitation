import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })
import './globals.css'

export const metadata: Metadata = {
  title: 'Thiệp cưới',
  description: 'Thiệp cưới',
  generator: 'thanglh',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={``}>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
