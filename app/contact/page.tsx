import { ParallaxHero } from '@/components/parallax-hero'
import { AnimatedSection } from '@/components/animated-section'
import { ContactForm } from '@/components/contact-form'
import { OfficesSection } from '@/components/offices-section'
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
        backgroundImage="/images/5.1.webp"
      />

      <OfficesSection />
    </>
  )
}
