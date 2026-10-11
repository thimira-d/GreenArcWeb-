import { ParallaxHero } from '@/components/parallax-hero'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  Zap,
  Compass,
  Globe,
  Wrench,
  CheckCircle2,
  FolderKanban
} from 'lucide-react'

const services = [
  { 
    icon: Award, 
    title: 'GREEN BUILDING AND INFRASTRUCTURE CERTIFICATIONS',
    desc: 'GreenArc guides building and infrastructure projects through recognised sustainability certification and rating processes. We support clients from early feasibility and target setting through design, construction, evidence submission and final certification. Our specialists work closely with project managers, architects, engineers, contractors and suppliers to incorporate rating requirements into project delivery. Early coordination reduces the risk of missed credits, design changes, incomplete documentation and additional costs later in the programme. Our team holds verified accreditations and supports multiple international sustainability rating systems including but not limited to LEED, WELL, Green Star, Mostadam, Infrastructure Sustainability Rating - Australia, Envision, Passive House and other applicable international or regional systems.',
    points: [
      'Certification feasibility studies',
      'Framework selection and target-rating advice',
      'Preliminary scorecards and gap assessments',
      'Credit interpretation and compliance strategies',
      'Certification workshops and responsibility allocation',
      'Design and specification reviews',
      'Energy, water, materials and indoor-environment assessments',
      'Construction-phase compliance monitoring',
      'Contractor and supplier evidence coordination',
      'Documentation quality reviews',
      'Submission preparation and administration',
      'Liaison with certification bodies and assessors',
      'Responses to technical comments and clarification requests',
      'Final certification and close-out support'
    ]
  },
  { 
    icon: Zap, 
    title: 'BUILDING PERFORMANCE, ENERGY AND MEP OPTIMISATION', 
    desc: 'GreenArc will assist clients to improve the operational performance of new and existing buildings through integrated energy, building-services and MEP analysis. We collaborate with architects and engineering teams to reduce energy demand, improve system efficiency and create healthier, more comfortable indoor environments. Our work considers the interaction between building form, envelope performance, occupancy, HVAC, electrical systems, lighting, controls, renewable energy and operational practices. Recommendations are evaluated against performance benefits, capital cost, operating cost, maintainability and project constraints.',
    points: [
      'Building-performance and energy assessments',
      'Energy benchmarking and utility-data analysis',
      'Building energy modelling and scenario testing',
      'Passive-design and building-envelope reviews',
      'HVAC system efficiency assessments',
      'Lighting and electrical-load optimisation',
      'Renewable-energy feasibility assessments',
      'Building management and control-system reviews',
      'Water-efficiency and resource-performance assessments',
      'Indoor environmental quality reviews',
      'Energy audits for existing buildings',
      'Retrofit and decarbonisation strategies',
      'Commissioning and building-tuning support',
      'Measurement and verification planning',
      'Post-occupancy performance reviews'
    ]
  },
  { 
    icon: Compass, 
    title: 'SUSTAINABLE MASTERPLANNING AND INFRASTRUCTURE', 
    desc: 'GreenArc integrates sustainability, resilience and resource efficiency into masterplans and major infrastructure programmes. We help project teams assess the connections between land use, buildings, transport, energy, water, waste, ecology and community needs at the earliest stages of development. Our multidisciplinary approach supports informed decisions before critical planning and infrastructure choices become difficult or expensive to change. We develop practical sustainability frameworks that can be translated into design requirements, infrastructure strategies, development controls and measurable performance targets.',
    points: [
      'Masterplan sustainability strategies',
      'Sustainability baseline and context assessments',
      'Climate resilience and adaptation planning',
      'Low-carbon energy and utility strategies',
      'Integrated water-management planning',
      'Sustainable mobility and transport strategies',
      'Waste, resource-recovery and circular-economy planning',
      'Ecology, biodiversity and nature-positive strategies',
      'Sustainable land-use and urban-design guidance',
      'Infrastructure sustainability assessments',
      'Community health, wellbeing and liveability considerations',
      'Sustainability requirements for plots and development parcels',
      'Performance indicators and monitoring frameworks',
      'Infrastructure rating and certification support',
      'Design review and implementation oversight'
    ]
  },
  { 
    icon: Globe, 
    title: 'CARBON NEUTRAL CONSULTANCY', 
    desc: 'GreenArc offers carbon neutral certification consultancy, providing measurable evidence of the client’s environmental commitment. Carbon neutrality refers to an organization’s Greenhouse Gas (GHG) emissions, where its total emissions are reduced to zero using various emission-reduction strategies. By choosing to be Carbon Neutral, an organization is providing climate leadership. Organizations around the world need to meet climate change commitments made for 2030 – SDGs and Paris Agreement targets. GreenArc will calculate the total GHG emissions of your organization as per the ISO 14064:2018 standard and guide you to bring that total emission to a neutral level. While harnessing the environmental and marketing benefits of the certification, GHG emission reduction strategies focus on reducing your consumption, thus providing tangible cost reductions by reducing the consumption of energy and water and the generation of waste.',
    points: [
      'Carbon-neutrality feasibility and readiness assessments',
      'Definition of organisational, project, product, building or event boundaries',
      'Greenhouse-gas emissions inventories',
      'Scope 1, Scope 2 and relevant Scope 3 emissions calculations',
      'Operational and embodied-carbon assessments',
      'Carbon-reduction opportunity identification',
      'Energy-efficiency and renewable-energy strategies',
      'Low-carbon procurement and supply-chain engagement',
      'Carbon-neutrality management plans',
      'Residual-emissions assessment',
      'Carbon-credit evaluation and procurement guidance',
      'Documentation of calculation methods and assumptions',
      'Carbon-neutral certification and assurance support',
      'Monitoring, annual updates and performance reporting',
      'Review of carbon-neutral claims and supporting evidence',
      'Stakeholder and public communication guidance'
    ]
  },
  { 
    icon: Wrench, 
    title: 'MEP ENGINEERING DESIGN SERVICES', 
    desc: 'GreenArc provides integrated mechanical, electrical and plumbing engineering design services for buildings and developments across the complete project lifecycle. We combine sound engineering principles with energy efficiency, sustainability, constructability, operational reliability and whole-of-life value. Our engineers collaborate with clients, architects, structural engineers, sustainability specialists, contractors and facility operators from concept design through detailed design, tendering, construction and commissioning. This coordinated approach helps identify technical conflicts early, optimise plant and equipment selection and ensure building-services systems support the architectural vision and operational requirements. We develop practical MEP solutions that respond to climate, occupancy, building function, regulatory requirements, maintainability and future performance. Sustainability is embedded in the design process through efficient systems, demand reduction, renewable-energy integration, intelligent controls and responsible resource use.',
    points: [
      'Integrated Design and Project Support',
      'MEP feasibility studies and due diligence',
      'Concept, schematic and detailed engineering design',
      'Design calculations and technical reports',
      'Equipment schedules and specifications',
      'BIM and multidisciplinary design coordination',
      'Plantroom and service space planning',
      'Sustainability and energy-performance integration',
      'Cost planning and value engineering support',
      'Bills of quantities and tender documentation',
      'Tender evaluation and technical clarification',
      'Testing, commissioning and handover assistance'
    ]
  },
  { 
    icon: FolderKanban, 
    title: 'SUSTAINABILITY STRATEGY AND PROJECT MANAGEMENT', 
    desc: 'GreenArc helps organisations translate sustainability ambitions into practical, measurable actions across the complete project lifecycle. We work with clients, designers, engineers, contractors and other stakeholders to establish clear objectives, integrate sustainability requirements into project documentation and maintain accountability from planning and design through construction, commissioning and operation. Our approach combines strategic direction with hands-on project coordination. We identify sustainability risks and opportunities early, establish governance arrangements, facilitate multidisciplinary workshops and monitor performance against agreed targets. This helps project teams make informed decisions while balancing environmental performance, commercial priorities, programme requirements and regulatory obligations.',
    points: [
      'Sustainability visioning, policies and project briefs',
      'Baseline assessments and gap analyses',
      'Sustainability targets, KPIs and performance frameworks',
      'Governance structures, responsibility matrices and implementation plans',
      'Sustainability risk and opportunity registers',
      'Design reviews and multidisciplinary coordination',
      'Contractor sustainability requirements',
      'Construction-phase monitoring and reporting',
      'Sustainability dashboards and management reports',
      'Commissioning, handover and project close-out support'
    ]
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
        backgroundImage="/images/NewImage2.webp"
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

                  {s.points && s.points.length > 0 && (
                    <ul className="mt-8 space-y-4">
                      {s.points.map((point) => (
                        <li key={point} className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-5 text-primary-600 shrink-0" />
                          <span className="text-gray-700 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FULL-WIDTH CTA SECTION (STYLED LIKE ABOUT PAGE CTA) */}
      <section className="py-16 lg:py-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/4.4.jpg" 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <AnimatedSection>
            <div className="w-16 h-1 bg-white/30 mx-auto mb-8"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Need a Custom Solution?</h2>
            <p className="mt-6 text-xl text-primary-100 max-w-2xl mx-auto">
              Every project is unique. Contact us to discuss how we can tailor our services to meet your specific requirements.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 gap-2 px-8 rounded-none">
                  Contact Our Team <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}