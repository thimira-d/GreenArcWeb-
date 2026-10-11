import { AnimatedSection } from '@/components/animated-section'
import { OfficesMap } from '@/components/offices-map'
import { OfficesGrid } from '@/components/offices-grid'

export function OfficesSection() {
  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">
              Where We Work
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Our Offices</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Find your nearest team below, or hover a marker on the map to see office details.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div>
            <OfficesGrid />
          </div>
        </AnimatedSection>
      </div>

      {/* FULL WIDTH MAP SECTION */}
      <div className="w-full mt-16">
        <AnimatedSection delay={0.2}>
          <OfficesMap />
        </AnimatedSection>
      </div>
    </section>
  )
}