'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-500', scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent')}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="GreenArc Consultancy" 
                className={cn("h-20 w-auto transition-all", scrolled ? "brightness-100" : "brightness-0 invert")}
              />
              <div className="flex flex-col">
                
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {links.map(l => (
                <Link key={l.href} href={l.href} className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                  pathname === l.href ? 'text-primary-600 bg-primary-50' : scrolled ? 'text-gray-600 hover:text-primary-600 hover:bg-gray-50' : 'text-white/80 hover:text-white hover:bg-white/10'
                )}>{l.label}</Link>
              ))}
              <Link href="/contact" className={cn('ml-4 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors', scrolled ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-white text-primary-700 hover:bg-gray-100')}>Get a Quote</Link>
            </div>

            <button onClick={() => setOpen(!open)} className={cn("lg:hidden p-2 rounded-lg", scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10")}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="GreenArc" className="h-30 w-15" />
                <span className="font-bold text-lg text-gray-900">GreenArc</span>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg"><X className="h-5 w-5" /></button>
            </div>
            <div className="flex flex-col gap-2">
              {links.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={cn(
                  'px-4 py-3 rounded-xl text-base font-medium transition-colors',
                  pathname === l.href ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'
                )}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}