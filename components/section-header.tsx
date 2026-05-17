'use client'
import { motion } from 'framer-motion'

export function SectionHeader({ title, subtitle, centered = true, light = false }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={centered ? 'text-center' : ''}>
      <h2 className={`text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>}
      <div className={`mt-4 h-1 w-20 rounded-full bg-primary-500 ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}