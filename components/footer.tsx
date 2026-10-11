import Link from 'next/link'

import { Mail, Phone, MapPin, Globe, MessageCircle } from 'lucide-react'



export function Footer() {

  return (

    <footer className="bg-gray-900 text-gray-300">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}

        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12">

         

          {/* Logo & Description - Takes 5 columns */}

          <div className="md:col-span-5">

            <Link href="/" className="flex items-center gap-3 mb-6">

              <img src="/logo.png" alt="GreenArc Consultancy" className="h-20 w-auto brightness-0 invert" />

            </Link>

            <p className="text-gray-400 leading-relaxed max-w-sm mb-8">

              A leading sustainability consultancy dedicated to delivering innovative strategies that foster environmental stewardship while driving economic resilience.

            </p>

           

          </div>



          {/* Quick Links - Takes 2 columns */}

          <div className="md:col-span-2 md:col-start-7">

            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Company</h4>

            <ul className="space-y-4">

              <li>

                <Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">

                  About Us

                </Link>

              </li>

              <li>

                <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">

                  Services

                </Link>

              </li>

              <li>

                <Link href="/projects" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">

                  Projects

                </Link>

              </li>

              <li>

                <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">

                  Contact

                </Link>

              </li>

            </ul>

          </div>



          {/* Services - Takes 2 columns */}

          <div className="md:col-span-2">

            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Services</h4>

          <ul className="space-y-4">

              <li>

                <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors text-sm whitespace-nowrap">

                  Infrastructure Certifications

                </Link>

              </li>

              <li>

                <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors text-sm whitespace-nowrap">

                  MEP Optimisation

                </Link>

              </li>

              <li>

                <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors text-sm whitespace-nowrap">

                  Sustainable Masterplanning

                </Link>

              </li>

              <li>

                <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors text-sm whitespace-nowrap">

                  Carbon Neutral Consultancy

                </Link>

              </li>

              <li>

                <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors text-sm whitespace-nowrap">

                  MEP Engineering Design Services

                </Link>

              </li>

              <li>

                <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors text-sm whitespace-nowrap">

                  Sustainability Strategy

                </Link>

              </li>

            </ul>

          </div>



         

        </div>



        {/* Bottom Bar */}

        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">

            © {new Date().getFullYear()} GreenArc Consultancy. All rights reserved.

          </p>

          <div className="flex gap-8 text-sm text-gray-500">

            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>

            <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>

            <Link href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</Link>

          </div>

        </div>

      </div>

    </footer>

  )

}