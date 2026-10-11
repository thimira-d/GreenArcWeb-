import { ParallaxHero } from '@/components/parallax-hero'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight, MapPin, Layers } from 'lucide-react'
import { neomProjects, sectionMeta, type NeomProject } from '@/lib/neom-projects'

export const metadata = { title: 'Our Projects' }

function ProjectCard({ p, delay }: { p: NeomProject; delay: number }) {
  return (
    <AnimatedSection delay={delay}>
      <Link href={`/projects/${p.section}#${p.slug}`} className="group block bg-white border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all duration-300">
        <div className="relative overflow-hidden">
          {p.img ? (
            <img src={p.img} alt={p.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
          ) : (
            <div className="w-full h-64 bg-primary-600 flex items-center justify-center">
              <Layers className="h-10 w-10 text-white/60" />
            </div>
          )}
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
          <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">{p.overview}</p>
          <div className="mt-4 flex items-center gap-1 text-xs text-gray-500">
            <MapPin className="h-3 w-3" />{p.loc}
          </div>
        </div>
      </Link>
    </AnimatedSection>
  )
}

export default function Projects() {
  const building = neomProjects.filter((p) => p.section === 'buildingprojects').slice(0, 6)
  const masterplan = neomProjects.filter((p) => p.section === 'masterplanprojects')
  const infrastructure = neomProjects.filter((p) => p.section === 'infrastructureprojects')
  const mep = neomProjects.filter((p) => p.section === 'mepprojects')

  return (
    <>
      <ParallaxHero
        title="Project Portfolio"
        subtitle="Our Work"
        minHeight="min-h-[60vh]"
        backgroundImage="/images/neom/gidori.jpg"
      />

      {[
        { key: 'buildingprojects', items: building },
        { key: 'masterplanprojects', items: masterplan },
        { key: 'infrastructureprojects', items: infrastructure },
        { key: 'mepprojects', items: mep },
      ].map(({ key, items }, sIdx) => {
        const meta = sectionMeta[key as keyof typeof sectionMeta]
        return (
          <section key={key} className={`py-24 lg:py-32 ${sIdx % 2 === 1 ? 'bg-gray-50' : ''}`}>
            <div className="mx-auto max-w-7xl px-4">
              <AnimatedSection>
                <div className="text-center mb-16">
                  <div className="w-16 h-1 bg-primary-600 mx-auto mb-6"></div>
                  <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">Portfolio</span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">{meta.title}</h2>
                  <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">{meta.subtitle}</p>
                </div>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
                {items.map((p, i) => (
                  <ProjectCard key={p.slug} p={p} delay={i * 0.1} />
                ))}
              </div>

              <AnimatedSection>
                <div className="mt-12 text-center">
                  <Link href={`/projects/${key}`}>
                    <Button variant="outline" className="gap-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-none">
                      View All {meta.title} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )
      })}

      

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/4.4.jpg" alt="" className="w-full h-full object-cover" />
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
