import { ParallaxHero } from '@/components/parallax-hero'
import { AnimatedSection } from '@/components/animated-section'
import { ContactForm } from '@/components/contact-form'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const info = [
  { icon: MapPin, title: 'Visit Our Office', lines: ['123 Green Street', 'Eco City, EC 12345', 'United States'] },
  { icon: Phone, title: 'Call Us', lines: ['+61 410010084', '+971 504603867'] },
  { icon: Mail, title: 'Email Us', lines: ['contactus.greenarc@gmail.com'] },
  { icon: Clock, title: 'Working Hours', lines: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 1:00 PM'] },
]

export const metadata = { title: 'Contact Us' }

export default function Contact() {
  return (
    <>
      <ParallaxHero 
        title="Let’s Shape a Sustainable Future Together" 
        subtitle="Get In Touch" 
        minHeight="min-h-[60vh]"
        backgroundImage="/images/people with ball.jpg"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            <AnimatedSection direction="left">
              <div className="space-y-10">
                <div>
                  <span className="text-primary-600 font-semibold text-sm uppercase tracking-[0.2em]">Contact</span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Get In Touch</h2>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Reach out to us through any of these channels. Our team is ready to assist you with your next project.
                  </p>
                </div>

                <div className="space-y-8">
                  {info.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        {item.lines.map(l => <p key={l} className="text-sm text-gray-600 mt-0.5">{l}</p>)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-primary-900 p-6 text-white">
                  <h4 className="font-semibold">Emergency Support</h4>
                  <p className="mt-2 text-sm text-primary-200">
                    For urgent environmental incidents, our 24/7 hotline is available.
                  </p>
                  <a href="tel:+1234567899" className="mt-3 inline-block text-sm font-semibold text-white hover:text-primary-200">
                    +61 410010084
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h3>
                <p className="text-gray-600 mb-8">Fill out the form below and we&apos;ll respond as soon as possible.</p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="h-[400px] w-full bg-gray-100 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.217676750664!2d-73.98784408459418!3d40.75797467932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </section>
    </>
  )
}