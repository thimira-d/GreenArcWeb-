'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  overlayText?: { title: string; subtitle?: string }
}

export function ImageReveal({ src, alt, className = '', overlayText }: ImageRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full h-full"
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        {overlayText && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
            <motion.h3
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-4xl font-bold text-white mb-2"
            >
              {overlayText.title}
            </motion.h3>
            {overlayText.subtitle && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white/80 text-sm md:text-lg"
              >
                {overlayText.subtitle}
              </motion.p>
            )}
          </div>
        )}
      </motion.div>
    </div>
  )
}