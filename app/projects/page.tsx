import { ParallaxHero } from '@/components/parallax-hero'
import { AnimatedSection } from '@/components/animated-section'
import { ImageReveal } from '@/components/image-reveal'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
  { title: 'Desert Solar Farm', cat: 'Renewable Energy', loc: 'Arizona, USA', year: '2024', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800', desc: 'A 500-acre solar installation providing clean energy to over 50,000 homes.' },
  { title: 'Coastal Water Treatment', cat: 'Water Management', loc: 'Miami, FL', year: '2023', img: 'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?auto=format&fit=crop&q=80&w=800', desc: 'State-of-the-art water treatment facility protecting marine ecosystems.' },
  { title: 'Urban Green Infrastructure', cat: 'Civil Engineering', loc: 'Seattle, WA', year: '2024', img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800', desc: 'Sustainable urban development integrating green spaces and smart drainage.' },
  { title: 'Wind Energy Complex', cat: 'Renewable Energy', loc: 'Texas, USA', year: '2023', img: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800', desc: 'Installation of 45 wind turbines generating 180MW of clean energy.' },
  { title: 'Industrial Remediation', cat: 'Environmental', loc: 'Detroit, MI', year: '2023', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800', desc: 'Comprehensive soil and groundwater remediation of a former manufacturing site.' },
  { title: 'Green Building Complex', cat: 'Sustainable Design', loc: 'Portland, OR', year: '2023', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800', desc: 'LEED Platinum certified office complex with net-zero energy consumption.' },
]

export const metadata = { title: 'Our Projects' }

export default function Projects() {
  return (
    <>
      <ParallaxHero 
        title="Project Portfolio" 
        subtitle="Our Work" 
        minHeight="min-h-[60vh]"
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">Portfolio</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">Featured Projects</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Each project represents our commitment to excellence, sustainability, and innovative problem-solving.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/40 transition-colors duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary-700">
                        {p.cat}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary-600 shadow-lg">
                        <ArrowUpRight className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{p.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{p.desc}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                      <span>{p.loc}</span>
                      <span>•</span>
                      <span>{p.year}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}