// ─────────────────────────────────────────────────────────────────────────
// TODO: Fields marked [PLACEHOLDER] still need real values. Countries are
// confirmed (UAE, Australia, Sri Lanka) — still need: street address for
// all three, the Australia city, and a phone number for Sri Lanka (or
// confirm it should share the same +971/+61 numbers / general email only).
// Coordinates are [longitude, latitude] and only need to be roughly right
// for the marker to land in the correct city.
// ─────────────────────────────────────────────────────────────────────────

export type OfficeLocation = {
  id: string
  country: string
  city: string
  address: string
  email: string
  phone?: string
  hours?: string
  /** [longitude, latitude] */
  coordinates: [number, number]
  /** Shows a "Headquarters" badge and highlights the card/marker */
  featured?: boolean
}

export const officeLocations: OfficeLocation[] = [
  {
    id: 'uae',
    country: 'United Arab Emirates',
    city: 'United Arab Emirates',
    address: 'VUNE0343, Compass building - Al Hulaila, AL Hulaila Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates',
    email: 'hasitha@garcconsulting.com',
    phone: '+971 504603867',
    hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
    coordinates: [55.2708, 25.2048],
    featured: true,
  },
  {
    id: 'au',
    country: 'Australia',
    city: 'Sydney',
    address: '21 Kidman Street, Glenwood, NSW, 2768',
    email: 'hasitha@garcconsulting.com',
    phone: '+61 410010084',
    hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
    coordinates: [151.2093, -33.8688],
  },
  {
    id: 'lk',
    country: 'Sri Lanka',
    city: 'Colombo',
    address: '66 Kynsey Rd, Colombo 00700, Sri Lanka',
    email: 'hasitha@garcconsulting.com',
    phone: '+61 410010084',
    hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
    coordinates: [79.8612, 6.9271],
  },
]
