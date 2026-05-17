'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero({ title, subtitle, description, ctaPrimary, ctaSecondary, backgroundImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80', minHeight = 'min-h-[90vh]' }: any) {
  return (
    <section className={`relative flex items-center ${minHeight} overflow-hidden`}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-32">
        <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="inline-block rounded-full bg-primary-500/20 px-4 py-1.5 text-sm font-medium text-primary-300 ring-1 ring-primary-500/30 mb-6">{subtitle}</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{title}</motion.h1>
        {description && <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-gray-300 max-w-2xl">{description}</motion.p>}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-10 flex flex-wrap gap-4">
          {ctaPrimary && <Link href={ctaPrimary.href}><Button size="lg" className="gap-2">{ctaPrimary.label}<ArrowRight className="h-4 w-4" /></Button></Link>}
          {ctaSecondary && <Link href={ctaSecondary.href}><Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">{ctaSecondary.label}</Button></Link>}
        </motion.div>
      </div>
    </section>
  )
}