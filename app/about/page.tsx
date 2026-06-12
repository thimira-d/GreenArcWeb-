import { ParallaxHero } from '@/components/parallax-hero'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Target, Eye, CheckCircle2, ArrowRight, Award, Users, Briefcase, Globe, ArrowUpRight } from 'lucide-react'

const values = [
  { icon: Target, title: 'Integrity', desc: 'We uphold the highest ethical standards in every project we undertake, ensuring transparency and trust.' },
  { icon: Eye, title: 'Innovation', desc: 'We constantly seek new and better ways to solve complex challenges through cutting-edge solutions.' },
  { icon: CheckCircle2, title: 'Sustainability', desc: 'Environmental stewardship is at the core of everything we do, guiding every decision.' },
  { icon: Award, title: 'Excellence', desc: 'We are committed to delivering exceptional quality and results that exceed expectations.' },
]

const team = [
  { name: 'Rehana Jiffrey', role: 'Chief Executive Officer', desc: 'Rehana is the Chief Executive Officer and driving force behind the company, with expertise in energy management, building performance, and sustainable development. She is a leader with a proven track record of managing multi-million and multi-billion-dollar portfolios—including high-profile net-zero developments and global smart city initiatives.', img: '/images/Rehana Jiffrey.jpg' },
  { name: 'Hasitha Herath', role: 'Project Manager', desc: 'Hasitha is an award-winning sustainability leader with 15+ years’ global experience delivering ESG strategies, green building certifications, and decarbonisation outcomes for mega-scale developments.  He has a proven track record delivering over 23 million sq. ft. of certified projects, including 8 LEED Platinum and multiple WELL-pursuing developments, while advancing pioneering projects such as Saudi Arabia’s first Net Zero Passive House. Expert in sustainability strategy and policy, carbon accounting, and ESG reporting, with deep technical expertise in various sustainability certifications.', img: '/images/Hasitha Herath .jpg' },
  { name: 'Chathusha Karunathilake', role: 'Head of R&D', desc: 'Chathusha Karunathilake serves as the Head of R&D, bringing over eight years of comprehensive experience in mechanical engineering, energy auditing, and sustainable building systems. A specialist in green building design, Chathusha has successfully engineered advanced Mechanical Ventilation, Air Conditioning (MVAC), and life safety systems, while spearheading complex Computational Fluid Dynamics (CFD) and energy simulations for high-profile projects across the USA, Kuwait, UAE, and Bangladesh.', img: '' },
  { name: 'Narendra Bandara', role: 'Engineering Manager', desc: 'Narendra Bandara is a visionary engineering executive who drives high-performance MEP design and sustainable building strategies. With over nine years of building services experience, he blends deep technical expertise in complex grid automation, electrical infrastructure, and ASHRAE energy systems with high-impact corporate oversight. A dedicated mentor and strategic leader, Narendra directly shapes next-generation talent as an active engineering lecturer while orchestrating major multi-million-dollar developments.', img: '' },
  { name: 'Shahid Sangani', role: 'Consulting Partner', desc: 'Mr. Sangani boasts an impressive career of over 30 years, holding senior management positions in Apparel, Manufacturing, Investment Banking, and Trading organizations. He currently serves as the Managing Director of Dynawash Ltd, Autus Chemicals (Pvt) Ltd, and Trade First (Pvt) Ltd, in addition to his role as the MD/CEO of co-energi. Furthermore, he serves as a Non-Executive Independent Director at Vidullanka PLC, a Colombo Stock Exchange listed Renewable Company. Professionally, Mr. Sangani is an Attorney at Law of the Supreme Court of Sri Lanka.', img: '/images/Shahid Sangani.jpg' },
]

const milestones = [
  { icon: Briefcase, value: '250+', label: 'Projects Completed' },
  { icon: Users, value: '120+', label: 'Happy Clients' },
  { icon: Award, value: '18', label: 'Years Experience' },
  { icon: Globe, value: '15', label: 'Countries Served' },
]

export const metadata = { title: 'About Us' }

export default function About() {
  return (
    <>
      <ParallaxHero 
        title="About GreenArc" 
        subtitle="Who We Are" 
        minHeight="min-h-[60vh]"
        backgroundImage="/images/Business-people-presenting-environmentally-friendly-development-plan-sustainable HQ.jpg"
      />

      {/* Mission & Vision - BOX STYLE */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-0">
            <AnimatedSection direction="left">
              <div className="bg-primary-600 p-10 md:p-14 h-full">
                <div className="w-16 h-1 bg-white/30 mb-6"></div>
                <Target className="h-10 w-10 text-primary-200 mb-6" />
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                <p className="mt-4 text-primary-100 text-lg leading-relaxed">
                  Our mission is to help organizations achieve sustainability excellence while delivering measurable business value. By combining technical expertise, practical implementation strategies, and internationally recognized sustainability frameworks, we support projects in reducing carbon emissions, improving resource efficiency, enhancing occupant well-being, and achieving leading sustainability certifications.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-gray-900 p-10 md:p-14 h-full">
                <div className="w-16 h-1 bg-white/20 mb-6"></div>
                <Eye className="h-10 w-10 text-gray-400 mb-6" />
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                  To be a leading sustainability consultancy, recognized for our innovative strategies and commitment to driving meaningful change across industries.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

            {/* Company Story - BOX STYLE */}
      <section className="py-16 lg:py-24 bg-gray-50">


        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            <AnimatedSection direction="left">
              <div className="bg-white border border-gray-200 p-10 md:p-14 h-full flex flex-col justify-center">
                <div className="w-16 h-1 bg-primary-600 mb-6"></div>
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">Our Journey</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  About Us
                </h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  GreenArc Consultancy is a global specialist sustainability consulting firm dedicated to creating resilient, efficient, and future-ready built environments. We partner with developers, property owners, architects, engineers, contractors, and government agencies to integrate sustainability into every stage of the project lifecycle, from planning and design through construction, operation, and asset management.
                </p>
                <p className="mt-4 text-lg text-gray-600 ">
                  At GreenArc Consultancy, we believe sustainability is more than compliance; it is an opportunity to create healthier communities, protect natural resources, and build lasting value for future generations.
                </p>
                <div className="mt-10">
                  <Link href="/services">
                    <Button size="lg" className="gap-2 bg-primary-600 hover:bg-primary-700 rounded-none">
                      Our Services <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative h-full min-h-[400px]">
                <img 
                  src="/images/sustainability_culture_hands.webp"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Milestones - BOX STYLE */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-primary-600 mx-auto mb-6"></div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">Our Impact</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Milestones</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {milestones.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-10 bg-white border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all duration-300">
                  <m.icon className="mx-auto h-10 w-10 text-primary-600 mb-4" />
                  <div className="text-4xl font-bold text-gray-900">{m.value}</div>
                  <div className="text-sm text-gray-500 mt-2 font-medium uppercase tracking-wider">{m.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

            {/* Values - BOX STYLE */}
      <section className="py-16 lg:py-24 bg-gray-50">


        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-primary-600 mx-auto mb-6"></div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">What We Stand For</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Our Values</h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-10 bg-white border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="mx-auto mb-6 inline-flex p-3 bg-primary-50 text-primary-600">
                    <v.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team - BOX STYLE */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-primary-600 mx-auto mb-6"></div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">Meet The Team</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Our Leadership</h2>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                A team of dedicated experts committed to sustainable solutions
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0">
            {team.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group bg-white border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    {t.img ? (
                      <img 
                        src={t.img} 
                        alt={t.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-5xl font-bold text-gray-300">{t.name.charAt(0)}</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 h-10 w-10 bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                    <p className="text-primary-600 font-medium mt-1">{t.role}</p>
                    <div className="flex-1 mt-3">
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">{t.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - BOX STYLE */}
      <section className="py-16 lg:py-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <AnimatedSection>
            <div className="w-16 h-1 bg-white/30 mx-auto mb-8"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to Work With Us?</h2>
            <p className="mt-6 text-xl text-primary-100 max-w-2xl mx-auto">
              Let us discuss how we can help you achieve your environmental and engineering goals.
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