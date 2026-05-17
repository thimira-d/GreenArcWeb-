import Link from 'next/link'
import { Mail, Phone, MapPin, Globe, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="GreenArc Consultancy" className="h-12 w-auto brightness-0 invert" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">GreenArc</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-primary-400 -mt-1">Consultancy</span>
              </div>
            </Link>
            <p className="max-w-sm text-gray-400 mb-6 leading-relaxed">
              Leading environmental and engineering consulting firm dedicated to sustainable solutions for a better tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"><Globe className="h-5 w-5" /></a>
              <a href="#" className="p-2.5 rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"><MessageCircle className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-primary-400 transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary-500 shrink-0" /> 123 Green Street, Eco City</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary-500 shrink-0" /> +1 (234) 567-890</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary-500 shrink-0" /> info@greenarc.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} GreenArc Consultancy. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}