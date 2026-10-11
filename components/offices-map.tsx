'use client'

import { useRef, useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { Mail, MapPin, Phone, X } from 'lucide-react'
import { officeLocations, type OfficeLocation } from '@/lib/office-locations'
import { cn } from '@/lib/utils'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const COLORS = {
  bg: '#191b1d',
  landDot: '#3d4044',
  markerFill: '#ebb548',
  markerFillFeatured: '#f5c563',
  markerStroke: '#191b1d',
  pulse: '#ebb548',
}

interface TooltipState {
  x: number
  y: number
  xAlign: 'left' | 'center' | 'right'
}

export function OfficesMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<OfficeLocation | null>(null)
  const [tooltipPos, setTooltipPos] = useState<TooltipState>({
    x: 0,
    y: 0,
    xAlign: 'center',
  })

  return (
    <div
      ref={containerRef}
      className="relative rounded-none border-y border-gray-800 shadow-xl overflow-hidden"
      style={{ backgroundColor: COLORS.bg }}
      onClick={() => setActive(null)} // Click outside to close
    >
      <ComposableMap
        width={800}
        height={340}
        projectionConfig={{
          scale: 145,
          center: [15, 5],
        }}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <defs>
          <pattern id="officeDotPattern" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="1.3" cy="1.3" r="1.3" fill={COLORS.landDot} fillOpacity={0.85} />
          </pattern>
        </defs>

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) => geo.id !== '010' && geo.properties?.name !== 'Antarctica')
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="url(#officeDotPattern)"
                  stroke="none"
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
          }
        </Geographies>

        {officeLocations.map((office) => (
          <Marker key={office.id} coordinates={office.coordinates}>
            <g
              className="cursor-pointer"
              onClick={(evt) => {
                evt.stopPropagation() // Prevent background click from closing card immediately

                if (active?.id === office.id) {
                  setActive(null)
                  return
                }

                setActive(office)

                // Calculate position relative to the clicked dot's center
                const markerBounds = evt.currentTarget.getBoundingClientRect()
                const containerBounds = containerRef.current?.getBoundingClientRect()

                if (containerBounds) {
                  const x = markerBounds.left + markerBounds.width / 2 - containerBounds.left
                  const y = markerBounds.top - containerBounds.top

                  // Adjust horizontal alignment if dot is near screen edges
                  let xAlign: 'left' | 'center' | 'right' = 'center'
                  if (x > containerBounds.width - 160) {
                    xAlign = 'right'
                  } else if (x < 160) {
                    xAlign = 'left'
                  }

                  // Position directly above top of the dot
                  setTooltipPos({ x, y: y - 8, xAlign })
                }
              }}
            >
              {/* Target click area */}
              <circle r={22} fill="#ffffff" fillOpacity={0} />

              {/* Pulsing ring */}
              <circle
                r={10}
                fill={COLORS.pulse}
                opacity={0.3}
                style={{ pointerEvents: 'none' }}
              >
                <animate attributeName="r" values="8;20;8" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.45;0;0.45" dur="2.5s" repeatCount="indefinite" />
              </circle>

              {/* Center dot */}
              <circle
                r={5}
                fill={office.featured ? COLORS.markerFillFeatured : COLORS.markerFill}
                stroke={COLORS.markerStroke}
                strokeWidth={1.5}
                style={{ pointerEvents: 'none' }}
              />
            </g>
          </Marker>
        ))}
      </ComposableMap>

      {active && (
        <div
          className={cn(
            'absolute z-20 w-60 bg-[#242a2e] rounded-xl border border-gray-700 shadow-2xl p-4 transition-all duration-150 -translate-y-full',
            tooltipPos.xAlign === 'right' && '-translate-x-[88%]',
            tooltipPos.xAlign === 'left' && '-translate-x-[12%]',
            tooltipPos.xAlign === 'center' && '-translate-x-1/2'
          )}
          style={{ left: tooltipPos.x, top: tooltipPos.y }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <span className="text-[#ebb548] font-semibold text-xs uppercase tracking-[0.2em] block">
              {active.country}
            </span>
            <button
              onClick={() => setActive(null)}
              className="text-gray-400 hover:text-white transition-colors p-0.5 rounded"
              aria-label="Close popup"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          <h4 className="mt-1 text-base font-bold text-white">{active.city}</h4>
          <div className="mt-2 space-y-1.5 text-xs text-gray-300">
            <p className="flex items-start gap-2">
              <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[#ebb548]" />
              <span>{active.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 shrink-0 text-[#ebb548]" />
              <span className="text-[#ebb548] underline">{active.email}</span>
            </p>
            {active.phone && (
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#ebb548]" />
                <span>{active.phone}</span>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}