'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/button'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'

interface ParallaxHeroProps {
  title: string
  subtitle: string
  description?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  backgroundImage: string
  minHeight?: string
}

export function ParallaxHero({ title, subtitle, description, ctaPrimary, ctaSecondary, backgroundImage, minHeight = 'min-h-screen' }: ParallaxHeroProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className={`relative ${minHeight} overflow-hidden flex items-center justify-center`}>
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={backgroundImage} alt="Hero" className="w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-primary-400 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6"
        >
          {subtitle}
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {ctaPrimary && (
            <Link href={ctaPrimary.href}>
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white gap-2 px-8">
                {ctaPrimary.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
          {ctaSecondary && (
            <Link href={ctaSecondary.href}>
              <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 hover:text-white gap-2 px-8">
                {ctaSecondary.label}
              </Button>
            </Link>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}