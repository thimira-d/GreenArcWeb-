import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'
import { neomProjects, sectionMeta } from '@/lib/neom-projects'

export function generateStaticParams() {
  return neomProjects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = neomProjects.find((p) => p.slug === params.slug)
  return { title: project ? `${project.title} | Projects` : 'Project' }
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = neomProjects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const sameSection = neomProjects.filter((p) => p.section === project.section && p.slug !== project.slug)

  return (
    <>
      <section className="pt-32 pb-8 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            {project.img ? (
              <div className="grid lg:grid-cols-2 gap-0 items-stretch bg-white border border-gray-200">
                <div className="relative h-full min-h-[320px] lg:min-h-[560px]">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-14 flex flex-col justify-center">
                  <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">{project.cat}</span>
                  <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">{project.title}</h1>
                  <span className="mt-3 flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="h-3.5 w-3.5" />{project.loc}
                  </span>

                  {project.highlights && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.highlights.map((h) => (
                        <span key={h} className="inline-block bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 border border-primary-100">
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="mt-6 text-gray-600 leading-relaxed">{project.overview}</p>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary-600">GreenArc's Role</span>
                    <p className="mt-2 text-gray-600 leading-relaxed">{project.role}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-primary-600 p-10 md:p-16">
                <span className="text-primary-200 font-semibold text-sm uppercase tracking-[0.2em]">{project.cat}</span>
                <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
                <span className="mt-3 flex items-center gap-1 text-sm text-primary-100">
                  <MapPin className="h-3.5 w-3.5" />{project.loc}
                </span>
                <p className="mt-6 text-primary-100 leading-relaxed max-w-3xl">{project.overview}</p>
                <div className="mt-6 pt-6 border-t border-white/20 max-w-3xl">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary-200">GreenArc's Role</span>
                  <p className="mt-2 text-primary-100 leading-relaxed">{project.role}</p>
                </div>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {sameSection.length > 0 && (
        <section className="pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">More</span>
                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
                  Other {sectionMeta[project.section].title}
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
              {sameSection.map((p, i) => (
                <AnimatedSection key={p.slug} delay={i * 0.1}>
                  <Link href={`/projects/${p.slug}`} className="group block bg-white border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden h-56">
                      {p.img ? (
                        <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      ) : (
                        <div className="w-full h-full bg-primary-600" />
                      )}
                    </div>
                    <div className="p-6 border-t border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{p.title}</h3>
                      <span className="mt-2 flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="h-3 w-3" />{p.loc}
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 lg:py-32 bg-primary-900 relative overflow-hidden">
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
