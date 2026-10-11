'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
}

export function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show stats when scrolled past 100px (user has scrolled down)
      // Hide stats when back at top (scrollY < 100)
      const scrollY = window.scrollY
      if (scrollY > 100) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`relative -mt-24 z-20 ${className}`}>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}