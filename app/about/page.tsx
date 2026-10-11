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
  { 
    name: 'Rehana Jiffrey', 
    qualifications: 'CEAI®',
    role: 'Chief Executive Officer', 
    desc: 'Rehana is the Chief Executive Officer and driving force behind the company, with expertise in energy management, building performance, and sustainable development. She is a leader with a proven track record of managing multi-million and multi-billion-dollar portfolios—including high-profile net-zero developments and global smart city initiatives.', 
    img: '/images/Rehana Jiffrey.jpg' 
  },
  { 
    name: 'Hasitha Herath', 
    qualifications: 'LEED Fellow, LEED AP BD+C O+M, Homes, WELL AP, ENVSP, MSc, CEnv, WELL AP',
    role: 'Project Manager', 
    desc: 'Hasitha is an award-winning sustainability leader with 15+ years’ global experience delivering ESG strategies, green building certifications, and decarbonisation outcomes for mega-scale developments. He has a proven track record delivering over 23 million sq. ft. of certified projects, including 8 LEED Platinum and multiple WELL-pursuing developments, while advancing pioneering projects such as Saudi Arabia’s first Net Zero Passive House. Expert in sustainability strategy and policy, carbon accounting, and ESG reporting, with deep technical expertise in various sustainability certifications.', 
    img: '/images/Hasitha Herath .jpg' 
  },
  { 
    name: 'Chathusha Karunathilake', 
    qualifications: '',
    role: 'Head of R&D', 
    desc: 'Chathusha Karunathilake serves as the Head of R&D, bringing over eight years of comprehensive experience in mechanical engineering, energy auditing, and sustainable building systems. A specialist in green building design, Chathusha has successfully engineered advanced Mechanical Ventilation, Air Conditioning (MVAC), and life safety systems, while spearheading complex Computational Fluid Dynamics (CFD) and energy simulations for high-profile projects across the USA, Kuwait, UAE, and Bangladesh.', 
    img: '/images/Chathusha Karunathilake.jpg' 
  },
  { 
    name: 'Narendra Bandara', 
    qualifications: '',
    role: 'Engineering Manager', 
    desc: 'Narendra Bandara is a visionary engineering executive who drives high-performance MEP design and sustainable building strategies. With over nine years of building services experience, he blends deep technical expertise in complex grid automation, electrical infrastructure, and ASHRAE energy systems with high-impact corporate oversight. A dedicated mentor and strategic leader, Narendra directly shapes next-generation talent as an active engineering lecturer while orchestrating major multi-million-dollar developments.', 
    img: '/images/Narendra Bandara.jpg' 
  },
  { 
    name: 'Shahid Sangani', 
    qualifications: '',
    role: 'Consulting Partner', 
    desc: 'Mr. Sangani boasts an impressive career of over 30 years, holding senior management positions in Apparel, Manufacturing, Investment Banking, and Trading organizations. He currently serves as the Managing Director of Dynawash Ltd, Autus Chemicals (Pvt) Ltd, and Trade First (Pvt) Ltd, in addition to his role as the MD/CEO of co-energi. Furthermore, he serves as a Non-Executive Independent Director at Vidullanka PLC, a Colombo Stock Exchange listed Renewable Company. Professionally, Mr. Sangani is an Attorney at Law of the Supreme Court of Sri Lanka.', 
    img: '/images/Shahid Sangani.jpg' 
  },
]

const milestones = [
  { icon: Briefcase, value: '50+', label: 'Projects Completed' },
  { icon: Users, value: '35+', label: 'Happy Clients' },
  { icon: Award, value: '15', label: 'Years Experience' },
  { icon: Globe, value: '8', label: 'Countries Served' },
]

export const metadata = { title: 'About Us' }

export default function About() {
  return (
    <>
      <ParallaxHero 
        title="About GreenArc" 
        subtitle="Who We Are" 
        minHeight="min-h-[60vh]"
        backgroundImage="/images/bandaranayakeairportnewterminal.jpg"
      />

      {/* 1. Our History - WHITE BACKGROUND */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            <AnimatedSection direction="left">
              <div className="bg-white border border-gray-200 p-10 md:p-14 h-full flex flex-col justify-center">
                <div className="w-16 h-1 bg-primary-600 mb-6"></div>
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">Our Background</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Our History
                </h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  With over 15+ years of experience, GreenArc was established through a shared belief that sustainability should be integrated into every major decision, rather than treated as a compliance exercise at the end of a project.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Our foundations are built on the combined international experience of multidisciplinary professionals in sustainability strategy, green building certification, carbon management, masterplanning, infrastructure, building performance and MEP engineering design.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Our team has contributed to complex buildings, infrastructure programmes and large-scale developments across multiple countries, supporting projects from initial vision setting and sustainability planning through design coordination, construction, certification and operational performance.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                 Today, GreenArc brings this collective experience together as an integrated sustainability and engineering consultancy. We continue to help clients transform ambitious environmental goals into efficient, resilient and future-ready projects that create enduring value for communities, organisations and the natural environment.
                </p>
                <div className="mt-10">

                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative h-full min-h-[400px]">
                <img 
                  src="/images/3.3new.jpg"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 2. Our Mission - GRAY BACKGROUND */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            <AnimatedSection direction="left">
              <div className="bg-white border border-gray-200 p-10 md:p-14 h-full flex flex-col justify-center">
                <div className="w-16 h-1 bg-primary-600 mb-6"></div>
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">Our Purpose</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Our Mission
                </h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Our vision is to turn sustainability ambitions into practical, measurable and lasting outcomes.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  GreenArc partners with developers, asset owners, government agencies, designers, engineers and contractors to embed sustainability throughout the complete project lifecycle from early planning and design to construction, commissioning and operation.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  By combining strategic sustainability expertise with engineering knowledge and internationally recognised frameworks, we help our clients reduce carbon emissions, improve energy and resource efficiency, enhance climate resilience and create healthier built environments.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                 We are committed to delivering solutions that are environmentally responsible, technically practical and commercially valuable, helping every project contribute to a more resilient and sustainable future.
                </p>
                <div className="mt-10">
                  
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative h-full min-h-[400px]">
                <img 
                  src="/images/NewImage1.jpg"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. Our Leadership - WHITE BACKGROUND */}
      <section className="py-16 lg:py-24 bg-white">
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
                <div className="group relative bg-white border border-gray-200 hover:border-primary-600 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
                  
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
                    <div className="absolute top-4 right-4 h-9 w-9 bg-primary-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 bg-white">
                    <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                    {t.qualifications && (
                      <p className="text-xs text-gray-500 font-medium mt-1">{t.qualifications}</p>
                    )}
                    <p className="text-primary-600 font-medium text-sm mt-1">{t.role}</p>
                    <div className="flex-1 mt-3">
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{t.desc}</p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 bg-white p-6 border-t-2 border-primary-600 shadow-2xl max-h-[75%] overflow-y-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-20">
                    <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                    {t.qualifications && (
                      <p className="text-xs text-gray-500 font-medium mt-1">{t.qualifications}</p>
                    )}
                    <p className="text-primary-600 font-medium text-xs mt-1 mb-3">{t.role}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{t.desc}</p>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Values - GRAY BACKGROUND */}
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
                  <div className="mx-auto mb-6 inline-flex p-3 bg-gray-50 text-primary-600 shadow-sm">
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

      {/* 5. CTA Section - DARK BANNER */}
      <section className="py-16 lg:py-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/4.4.jpg" alt="" className="w-full h-full object-cover" />
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