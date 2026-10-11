import Link from 'next/link'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { officeLocations } from '@/lib/office-locations'

export function OfficesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {officeLocations.map((office) => (
        <div
          key={office.id}
          className={cn(
            'group relative flex flex-col w-full bg-white rounded-2xl border border-gray-200 p-8 shadow-md transition-all duration-300 hover:border-primary-600 hover:shadow-xl hover:-translate-y-1'
          )}
        >
          {/* Header Row */}
          <div className="flex items-center justify-between gap-2 min-h-[24px]">
            <span className="text-primary-600 font-semibold text-xs uppercase tracking-[0.2em]">
              {office.country}
            </span>
            {office.featured && (
              <span className="shrink-0 bg-primary-600 text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                Headquarters
              </span>
            )}
          </div>

          <h3 className="mt-2 text-2xl font-bold text-gray-900">{office.city}</h3>

          <ul className="mt-6 space-y-4 text-sm text-gray-600 flex-1">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-primary-600 shrink-0 mt-0.5" />
              <span>{office.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary-600 shrink-0" />
              <a href={`mailto:${office.email}`} className="hover:text-primary-600">
                {office.email}
              </a>
            </li>
            {office.phone && (
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-600 shrink-0" />
                <a href={`tel:${office.phone}`} className="hover:text-primary-600">
                  {office.phone}
                </a>
              </li>
            )}
            {office.hours && (
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary-600 shrink-0" />
                <span>{office.hours}</span>
              </li>
            )}
          </ul>

          <Link href={`mailto:${office.email}`} className="mt-8 block">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-primary-600 text-primary-600 bg-transparent transition-all duration-200 group-hover:bg-primary-600 group-hover:text-white hover:bg-primary-700 hover:text-white"
            >
              Contact This Office
            </Button>
          </Link>
        </div>
      ))}
    </div>
  )
}