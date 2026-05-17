import { ParallaxHero } from '@/components/parallax-hero'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Leaf, FileCheck, Target, GraduationCap, Truck, TreePine } from 'lucide-react'

const services = [
  { 
    icon: Leaf, 
    title: 'SUSTAINABILITY MANAGEMENT SERVICES', 
    desc: 'End-to-end sustainability frameworks that align your operations with global environmental standards and long-term resilience goals. We help organizations integrate ESG principles into daily operations.'
  },
  { 
    icon: FileCheck, 
    title: 'REGULATORY COMPLIANCE AND REPORTING', 
    desc: 'Navigate complex environmental regulations with expert guidance, ensuring full compliance and transparent sustainability reporting. Stay ahead of changing legislation across multiple jurisdictions.'
  },
  { 
    icon: Target, 
    title: 'STRATEGIC SUSTAINABILITY PLANNING', 
    desc: 'Data-driven roadmaps that integrate sustainability into your core business strategy for measurable impact and growth. We develop actionable plans aligned with SDGs and industry benchmarks.'
  },
  { 
    icon: GraduationCap, 
    title: 'CAPACITY BUILDING AND TRAINING', 
    desc: 'Empower your teams with tailored training programs on environmental best practices, ESG standards, and green innovation. From workshops to certification programs for all organizational levels.'
  },
  { 
    icon: Truck, 
    title: 'SUSTAINABLE SUPPLY CHAIN OPTIMISATION', 
    desc: 'Transform your supply chain with eco-efficient logistics, ethical sourcing strategies, and circular economy principles. Reduce carbon footprint while improving operational efficiency.'
  },
  { 
    icon: TreePine, 
    title: 'CARBON MANAGEMENT SOLUTIONS', 
    desc: 'Comprehensive carbon accounting, reduction strategies, and offset planning to achieve net-zero and beyond. From baseline assessments to verified carbon footprint reporting.'
  },
]

export const metadata = { title: 'Our Services' }

export default function Services() {
  return (
    <>
      <ParallaxHero 
        title="Our Services" 
        subtitle="What We Offer" 
        minHeight="min-h-[60vh]"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-primary-600 mx-auto mb-6"></div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">Comprehensive Solutions</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Our Expertise</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                GreenArc Consultancy offers a comprehensive suite of services designed to support organizations in achieving their sustainability goals
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="h-full p-10 bg-white border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all duration-300 group">
                  <div className="mb-6 inline-flex p-3 bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <s.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors tracking-wide">
                    {s.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-primary-600 mt-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-20 text-center">
              <div className="bg-primary-900 p-12 md:p-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1920" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Custom Solution?</h3>
                  <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
                    Every project is unique. Contact us to discuss how we can tailor our services to meet your specific requirements.
                  </p>
                  <Link href="/contact">
                    <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 gap-2 px-8 rounded-none">
                      Contact Our Team <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}