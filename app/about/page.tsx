import { ParallaxHero } from '@/components/parallax-hero'
import { AnimatedSection } from '@/components/animated-section'
import { ImageReveal } from '@/components/image-reveal'
import { Target, Eye, CheckCircle2, Users } from 'lucide-react'

const values = [
  { title: 'Integrity', desc: 'We uphold the highest ethical standards in every project we undertake.' },
  { title: 'Innovation', desc: 'We constantly seek new and better ways to solve complex challenges.' },
  { title: 'Sustainability', desc: 'Environmental stewardship is at the core of everything we do.' },
  { title: 'Excellence', desc: 'We are committed to delivering exceptional quality and results.' },
]

const team = [
  { name: 'Dr. Michael Torres', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Sarah Chen', role: 'Head of Engineering', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' },
  { name: 'James Wilson', role: 'Environmental Director', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Aisha Patel', role: 'Sustainability Lead', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
]

export const metadata = { title: 'About Us' }

export default function About() {
  return (
    <>
      <ParallaxHero title="About GreenArc" subtitle="Our Story" minHeight="min-h-[60vh]" backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920" />

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8">
          <AnimatedSection direction="left">
            <div className="bg-primary-600 rounded-3xl p-10 md:p-12 text-white h-full">
              <Target className="h-12 w-12 mb-6 text-primary-200" />
              <h3 className="text-3xl font-bold">Our Mission</h3>
              <p className="mt-4 text-primary-100 text-lg leading-relaxed">
                To deliver innovative environmental and engineering solutions that balance economic growth with ecological preservation. We ensure full regulatory compliance while identifying mitigation strategies.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-gray-900 rounded-3xl p-10 md:p-12 text-white h-full">
              <Eye className="h-12 w-12 mb-6 text-gray-400" />
              <h3 className="text-3xl font-bold">Our Vision</h3>
              <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                To be the global leader in sustainable consulting, recognized for transforming industries through cutting-edge environmental practices and engineering excellence.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story with Image */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div>
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">Our Journey</span>
                <h2 className="mt-4 text-4xl font-bold text-gray-900">Forged From Nature</h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Founded in 2006, GreenArc began with a simple belief: that economic development and environmental protection are not mutually exclusive. What started as a small team has grown into a global firm.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Over 18 years, we have completed 250+ projects across 15 countries, helping clients navigate complex regulations while implementing sustainable practices.
                </p>
                <div className="mt-8 flex gap-8">
                  <div>
                    <div className="text-4xl font-bold text-primary-600">250+</div>
                    <div className="text-sm text-gray-500 mt-1">Projects</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary-600">50+</div>
                    <div className="text-sm text-gray-500 mt-1">Experts</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary-600">15</div>
                    <div className="text-sm text-gray-500 mt-1">Countries</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <ImageReveal src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Team" className="aspect-[4/3] rounded-3xl" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">Principles</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">Our Core Values</h2>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{v.title}</h3>
                  <p className="mt-3 text-gray-600">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">Leadership</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">Meet Our Team</h2>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="relative mx-auto mb-6 h-64 w-full overflow-hidden rounded-2xl">
                    <img src={member.img} alt={member.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="mt-1 text-primary-600 font-medium">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}