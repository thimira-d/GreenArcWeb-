import { ParallaxHero } from '@/components/parallax-hero'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight, MapPin, Calendar } from 'lucide-react'

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
        backgroundImage="/images/The-Complete-Guide-to-Green-Building-Features-and-Sustainable-Design-Elements-1.jpg"
      />

      {/* Projects Grid - BOX STYLE */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-primary-600 mx-auto mb-6"></div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">Portfolio</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Featured Projects</h2>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Each project represents our commitment to excellence, sustainability, and innovative problem-solving.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {projects.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Link href="/projects" className="group block bg-white border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/40 transition-colors duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary-700 border border-gray-200">
                        {p.cat}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 h-10 w-10 bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{p.title}</h3>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{p.loc}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{p.year}</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - BOX STYLE */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            <AnimatedSection direction="left">
              <div className="bg-primary-600 p-10 md:p-14 h-full">
                <div className="w-16 h-1 bg-white/30 mb-6"></div>
                <span className="text-primary-200 font-semibold text-sm uppercase tracking-[0.2em]">Why GreenArc</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">
                  Delivering Excellence Across Every Project
                </h2>
                <p className="mt-6 text-lg text-primary-100 leading-relaxed">
                  Our proven methodology, interdisciplinary expertise, and commitment to sustainability ensure that every project we undertake achieves measurable results and lasting positive impact.
                </p>
                <ul className="mt-8 space-y-4">
                  {['Proven track record of successful deliveries', 'Interdisciplinary team of experts', 'Data-driven approach to sustainability', 'Long-term partnership and support'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-primary-100">
                      <div className="h-2 w-2 bg-primary-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative h-full min-h-[400px] bg-gray-900">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                  alt="Why Choose Us"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section - BOX STYLE */}
      <section className="py-24 lg:py-32 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <AnimatedSection>
            <div className="w-16 h-1 bg-white/30 mx-auto mb-8"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to Start Your Project?</h2>
            <p className="mt-6 text-xl text-primary-100 max-w-2xl mx-auto">
              Let us work together to bring your vision to life with sustainable solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 gap-2 px-8 rounded-none">
                  Get In Touch <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 rounded-none">
                  Our Services
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}