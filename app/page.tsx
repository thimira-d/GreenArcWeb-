import { ParallaxHero } from '@/components/parallax-hero'
import { AnimatedSection } from '@/components/animated-section'
import { ImageReveal } from '@/components/image-reveal'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  Users, 
  Award, 
  Globe, 
  ArrowUpRight,
  Leaf,
  FileCheck,
  Target,
  GraduationCap,
  Truck,
  TreePine
} from 'lucide-react'

const stats = [
  { icon: Briefcase, value: '250+', label: 'Projects Completed' },
  { icon: Users, value: '120+', label: 'Happy Clients' },
  { icon: Award, value: '18', label: 'Years Experience' },
  { icon: Globe, value: '15', label: 'Countries Served' },
]

const services = [
  { 
    icon: Leaf, 
    title: 'SUSTAINABILITY MANAGEMENT SERVICES', 
    desc: 'End-to-end sustainability frameworks that align your operations with global environmental standards and long-term resilience goals.'
  },
  { 
    icon: FileCheck, 
    title: 'REGULATORY COMPLIANCE AND REPORTING', 
    desc: 'Navigate complex environmental regulations with expert guidance, ensuring full compliance and transparent sustainability reporting.'
  },
  { 
    icon: Target, 
    title: 'STRATEGIC SUSTAINABILITY PLANNING', 
    desc: 'Data-driven roadmaps that integrate sustainability into your core business strategy for measurable impact and growth.'
  },
  { 
    icon: GraduationCap, 
    title: 'CAPACITY BUILDING AND TRAINING', 
    desc: 'Empower your teams with tailored training programs on environmental best practices, ESG standards, and green innovation.'
  },
  { 
    icon: Truck, 
    title: 'SUSTAINABLE SUPPLY CHAIN OPTIMISATION', 
    desc: 'Transform your supply chain with eco-efficient logistics, ethical sourcing strategies, and circular economy principles.'
  },
  { 
    icon: TreePine, 
    title: 'CARBON MANAGEMENT SOLUTIONS', 
    desc: 'Comprehensive carbon accounting, reduction strategies, and offset planning to achieve net-zero and beyond.'
  },
]

const featuredProjects = [
  { title: 'Solar Farm Installation', cat: 'Renewable Energy', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800' },
  { title: 'Coastal Water Treatment', cat: 'Water Management', img: 'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?auto=format&fit=crop&q=80&w=800' },
  { title: 'Urban Green Infrastructure', cat: 'Civil Engineering', img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800' },
]

export default function Home() {
  return (
    <>
      {/* Hero + Stats Reveal Section */}
      <div className="relative">
        {/* Parallax Hero - full screen */}
        <ParallaxHero 
          title="Engineering a Sustainable Future"
          subtitle="GreenArc Consultancy"
          description="Leading environmental and engineering consulting firm dedicated to delivering innovative solutions that protect our planet while driving economic growth."
          ctaPrimary={{ label: 'Explore Services', href: '/services' }}
          ctaSecondary={{ label: 'View Projects', href: '/projects' }}
          backgroundImage="https://learnarchitecture.net/wp-content/uploads/2026/03/Green-Architecture.webp"
        />

        {/* Stats Bar - Hidden at start, reveals on scroll down */}
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-4 pb-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
              {stats.map((s, i) => (
                <div key={i} className="text-center p-8 bg-white border border-gray-200 shadow-lg">
                  <s.icon className="mx-auto h-8 w-8 text-primary-600 mb-4" />
                  <div className="text-3xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-sm text-gray-500 mt-1 font-medium uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* About Section */}
      <section className="py-24 lg:py-32 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            <AnimatedSection direction="left">
              <div className="bg-white border border-gray-200 p-10 md:p-14 h-full flex flex-col justify-center">
                <div className="w-16 h-1 bg-primary-600 mb-6"></div>
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">About GreenArc</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Pioneering Sustainable Solutions for a Better Tomorrow
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  With over 18 years of experience, GreenArc Consultancy combines technical expertise with a deep commitment to sustainability.
                </p>
                <ul className="mt-8 space-y-4">
                  {['ISO 14001 Certified Environmental Management', 'Expert team of 50+ engineers', 'Proven track record across 15 countries', '24/7 project support and monitoring'].map(f => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 shrink-0" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link href="/about">
                    <Button size="lg" className="gap-2 bg-primary-600 hover:bg-primary-700 rounded-none">
                      Discover Our Story <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative h-full min-h-[400px]">
                <img 
                  src="https://learnarchitecture.net/wp-content/uploads/2026/03/Green-Architecture2.webp"
                  alt="GreenArc Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Full-Width Image Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <ImageReveal 
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1920"
          alt="Nature"
          className="absolute inset-0 h-full"
          overlayText={{ 
            title: 'TRUE TO NATURE', 
            subtitle: 'We engineer solutions that honor the natural world.' 
          }}
        />
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-primary-600 mx-auto mb-6"></div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">What We Offer</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                GreenArc Consultancy offers a comprehensive suite of services designed to support organizations in achieving their sustainability goals
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="h-full p-10 bg-white border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all duration-300 group">
                  <div className="mb-6 inline-flex p-3 bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <s.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors tracking-wide">
                    {s.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-primary-600 mt-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {s.desc}
                  </p>
                  <div className="mt-6">
                    <Link href="/services">
                      <Button variant="outline" size="sm" className="rounded-none border-gray-300 text-gray-600 hover:border-primary-600 hover:text-primary-600 text-xs uppercase tracking-wider">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-12 text-center">
              <Link href="/services">
                <Button size="lg" className="gap-2 bg-primary-600 hover:bg-primary-700 rounded-none px-10">
                  View All Services <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <div className="w-16 h-1 bg-primary-600 mb-6"></div>
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">Portfolio</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Featured Projects</h2>
              </div>
              <Link href="/projects" className="mt-4 md:mt-0">
                <Button variant="outline" className="gap-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-none">
                  View All Projects <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-0">
            {featuredProjects.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <Link href="/projects" className="group block relative overflow-hidden aspect-square">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider">{p.cat}</span>
                    <h3 className="mt-2 text-xl font-bold text-white">{p.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 h-10 w-10 bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://learnarchitecture.net/wp-content/uploads/2026/03/Green-Architecture4.webp" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <AnimatedSection>
            <div className="w-16 h-1 bg-white/30 mx-auto mb-8"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to Start Your Project?</h2>
            <p className="mt-6 text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
              Let's work together to create sustainable solutions that make a lasting impact.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 gap-2 px-8 rounded-none">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
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