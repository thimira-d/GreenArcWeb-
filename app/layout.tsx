import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: { default: 'GreenArc Consultancy', template: '%s | GreenArc Consultancy' },
  description: 'Leading environmental and engineering consulting firm providing sustainable solutions for infrastructure, energy, and environmental projects worldwide.',
  keywords: ['environmental consulting', 'engineering', 'sustainability', 'green energy', 'GreenArc'],
  icons: { icon: '/Logo Icon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}