import { ParallaxHero } from '@/components/parallax-hero'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'
import { neomProjects, sectionMeta, type NeomProject } from '@/lib/neom-projects'

export function CategoryProjectsPage({ section }: { section: NeomProject['section'] }) {
  const meta = sectionMeta[section]
  const items = neomProjects.filter((p) => p.section === section)

  return (
    <>
      <ParallaxHero
        title={meta.title}
        subtitle="Our Work"
        minHeight="min-h-[45vh]"
        backgroundImage="/images/neom/jaumur.png"
      />

      <section className="pt-12">
        <div className="mx-auto max-w-7xl px-4">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to All Projects
          </Link>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-primary-600 mx-auto mb-6"></div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">Portfolio</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">{meta.title}</h2>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">{meta.subtitle}</p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {items.map((p, i) => (
              <AnimatedSection key={p.slug} delay={i * 0.1}>
                <div id={p.slug} className="grid lg:grid-cols-2 gap-0 items-stretch bg-white border border-gray-200 scroll-mt-28">
                  <div className={`relative h-full min-h-[320px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    {p.img ? (
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full min-h-[320px] bg-primary-600" />
                    )}
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">{p.cat}</span>
                    <h3 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">{p.title}</h3>
                    <span className="mt-2 flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="h-3.5 w-3.5" />{p.loc}
                    </span>

                    {p.highlights && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.highlights.map((h) => (
                          <span key={h} className="inline-block bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 border border-primary-100">
                            {h}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="mt-5 text-sm text-gray-600 leading-relaxed">{p.overview}</p>
                    <div className="mt-5 pt-5 border-t border-gray-100">
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary-600">GreenArc's Role</span>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-16 text-center">
              <Link href="/projects">
                <Button variant="outline" className="gap-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-none">
                  View All Projects <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
