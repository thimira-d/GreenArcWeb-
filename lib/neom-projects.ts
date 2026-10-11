export type NeomProject = {
  slug: string
  title: string
  loc: string
  cat: string
  section: 'buildingprojects' | 'masterplanprojects' | 'infrastructureprojects' | 'mepprojects'
  img?: string
  overview: string
  role: string
  highlights?: string[]
}

export const neomProjects: NeomProject[] = [
  // ─── Building Projects ──────────────────────────────────────────────
  {
    slug: 'epicon',
    title: 'EPICON',
    loc: 'Gulf of Aqaba, NEOM, Saudi Arabia',
    cat: 'Luxury Hospitality',
    section: 'buildingprojects',
    img: '/images/neom/epicon.jpg',
    overview:
      "EPICON is a luxury hospitality development within NEOM's Gulf of Aqaba region, combining hospitality, residential, and leisure components. It includes two landmark towers reaching approximately 225 and 275 metres, a 41-key luxury hotel, 14 branded residences, restaurants, sky terraces, and wellness amenities, alongside a beachfront resort with 120 guestrooms and 45 private beach villas integrated with the surrounding coastal landscape.",
    role:
      "Engaged by NEOM, GreenArc Consulting provided the initial sustainability strategy and vision setting, translating high-level goals into an actionable roadmap for the design and engineering teams, and worked closely with NEOM and project design teams to embed resource efficiency, circular economy principles, and climate resilience from the ground up.",
  },
  {
    slug: 'utamo',
    title: 'Utamo',
    loc: 'Magna, NEOM, Saudi Arabia',
    cat: 'Hospitality & Entertainment',
    section: 'buildingprojects',
    img: '/images/neom/utamo.jpg',
    overview:
      "Utamo is a hospitality and entertainment destination within NEOM's Magna region, reinterpreting classical Hellenistic temple architecture through a futuristic retro-sci-fi design language. Set on a mountain summit, it creates a journey from the shoreline through a terraced garden staircase to a temple-inspired rotunda overlooking the Gulf of Aqaba and the Egyptian coastline.",
    role:
      "GreenArc Consulting worked closely with NEOM and key project design teams to embed sustainability outcomes into the design, facilitating multidisciplinary workshops and technical reviews that translated high-level targets into tangible, low-carbon engineering and architectural solutions.",
  },
  {
    slug: 'aquellum',
    title: 'Aquellum',
    loc: 'Magna, NEOM, Saudi Arabia',
    cat: 'Experiential Luxury',
    section: 'buildingprojects',
    img: '/images/neom/aquellum.jpg',
    overview:
      'Aquellum is a futuristic luxury lifestyle destination embedded inside a 450-metre-high mountain landscape, accessed through a floating marina and a concealed underground water passage. A dramatic vertical courtyard extends roughly 100 metres from the water level upward, housing luxury hospitality, residential space, retail, dining, culture, and "The Generator" — a hub for research and innovation.',
    role:
      'GreenArc Consulting provided sustainability management across early design, applying circular economy principles through responsible material selection and resource efficiency, passive design and energy performance measures, and indoor environmental quality strategies covering thermal comfort, air quality, daylight, and occupant wellbeing.',
  },
  {
    slug: 'zardun',
    title: 'Zardun',
    loc: 'Gulf of Aqaba, NEOM, Saudi Arabia',
    cat: 'Ecotourism',
    section: 'buildingprojects',
    img: '/images/neom/zardun.jpg',
    overview:
      "Zardun is a luxury ecotourism destination spanning roughly 4 square kilometres from the mountains to the coastline, envisioned as a natural reserve that protects the region's biodiversity. It includes three boutique hotels with about 100 rooms and suites, four distinctive luxury buildings integrated into the terrain, and an Experience Centre with a 360-degree observation deck.",
    role:
      "GreenArc Consulting supported sustainability management aligned with NEOM's regenerative development objectives — minimising ecological footprint through circular economy principles, improving indoor environmental quality and natural ventilation, and promoting biodiversity protection across the coastal and mountainous ecosystem.",
  },
  {
    slug: 'xaynor',
    title: 'Xaynor',
    loc: 'Gulf of Aqaba, NEOM, Saudi Arabia',
    cat: 'Private Beach Club',
    section: 'buildingprojects',
    img: '/images/neom/xaynor.jpg',
    overview:
      "Xaynor is a private beachfront members club offering hospitality, dining, wellness, entertainment, and recreation, arranged to maximise views of the Gulf of Aqaba. Its design responds to the coastline's natural topography while maintaining sensitivity to the surrounding ecosystem.",
    role:
      'GreenArc Consulting fronted the foundational sustainability strategy and vision-setting phase, working with NEOM and core design teams to mitigate terrain disruption, establish strict marine conservation boundaries for beachfront pathways, and align infrastructure with environmental conservation goals.',
  },
  {
    slug: 'elanan',
    title: 'Elanan',
    loc: 'NEOM, Saudi Arabia',
    cat: 'Luxury Resort',
    section: 'buildingprojects',
    img: '/images/neom/elanan.jpg',
    overview:
      'Elanan is a high-end nature-anchored Luxury Resort Hotel with destination restaurants, retail, and spa & wellness facilities around a series of coves, split into four zones — the Upper Plaza entry building, the Lower Plaza public amenity zone, and the North-East and North-West accommodation wings.',
    role:
      "GreenArc served as sustainability lead through pre-design, setting the project's carbon reduction and resource conservation framework, engineering low-impact foundations for the accommodation wings, and optimising energy loads across the Upper and Lower Plazas.",
  },
  {
    slug: 'gidori',
    title: 'Gidori',
    loc: 'Gulf of Aqaba, NEOM, Saudi Arabia',
    cat: 'Golf Community',
    section: 'buildingprojects',
    img: '/images/neom/gidori.jpg',
    overview:
      'Gidori is an exclusive private golf community integrated into coastal hills, anchored by an 18-hole championship course and clubhouse. Its centrepiece, "The Monolith," is a cantilevered beachfront complex housing 190 sea-view apartments, alongside 200 private villas, an 80-room boutique hotel, a spa, and a private beach club.',
    role:
      'As sustainability lead during early design, GreenArc engineered high-performance building envelopes and passive cooling for the core structures, and drove sustainable land management across the golf course through water-conserving irrigation and drought-tolerant turf selection.',
  },

  // ─── Masterplan Projects ────────────────────────────────────────────
  {
    slug: 'norlana',
    title: 'Norlana',
    loc: 'NEOM, Saudi Arabia',
    cat: 'Masterplan',
    section: 'masterplanprojects',
    img: '/images/neom/norlana.jpg',
    highlights: ['3,000 residents', '120-berth superyacht marina', '18-hole golf course'],
    overview:
      "Norlana is an ultra-modern, wellness-oriented coastal community along the Gulf of Aqaba, designed for 3,000 residents across 711 residential units. A 120-berth superyacht marina anchors the community, alongside an 18-hole championship golf course, equestrian and polo facilities, and diverse water sports.",
    role:
      "GreenArc contributed both sustainability leadership and technical engineering at masterplan scale — aligning carbon reduction and marine ecosystem protection across every asset, optimising microclimate-responsive site layout, and integrating renewable energy microgrids and advanced water systems across the marina, golf course, and residential clusters.",
  },
  {
    slug: 'jaumur',
    title: 'Jaumur',
    loc: 'NEOM, Saudi Arabia',
    cat: 'Masterplan',
    section: 'masterplanprojects',
    img: '/images/neom/jaumur.png',
    highlights: ['6,000+ residents', '1.5 km aerofoil structure', 'Deep-sea research centre'],
    overview:
      'Jaumur is a premier luxury residential and coastal tourism destination for over 6,000 residents, centred on a superyacht marina anchored by a 1.5-kilometre architectural aerofoil. It offers 500 marina apartments, nearly 700 luxury villas, two destination hotels, a deep-sea marine research centre, and an international boarding school.',
    role:
      "As masterplan-scale sustainability manager, GreenArc directed a blue-economy environmental strategy — leading district cooling infrastructure powered by renewable microgrids, microclimate modelling for the aerofoil structure's solar shading and wind dynamics, and a pedestrian-first, low-carbon mobility network.",
  },
  {
    slug: 'oxagon',
    title: 'Oxagon',
    loc: 'NEOM, Saudi Arabia',
    cat: 'Masterplan',
    section: 'masterplanprojects',
    img: '/images/neom/oxagon.jpg',
    highlights: ['Floating industrial city', '48 km² core area', 'Automated deep-sea port'],
    overview:
      'Oxagon is a reimagined industrial and port city on the Red Sea coast, combining a fully automated deep-sea port, integrated supply-chain logistics, and advanced manufacturing designed for 90,000 inhabitants by 2030 — engineered to run on 100% clean energy across a 48 km² octagonal footprint.',
    role:
      "As Sustainability Manager, GreenArc led early design compliance monitoring and technical reviews across the masterplan — managing NEOM's sustainability compliance framework, evaluating building envelopes, energy loads, water systems, and material selection to keep every zone on track for 100% clean energy goals.",
  },

  // ─── Infrastructure Projects ────────────────────────────────────────
  {
    slug: 'neom-magna',
    title: 'NEOM Magna',
    loc: 'Gulf of Aqaba, Saudi Arabia',
    cat: 'Infrastructure',
    section: 'infrastructureprojects',
    img: '/images/neom/magna.jpg',
    overview:
      'NEOM Magna is a large-scale luxury coastal development extending along approximately 50 kilometres of the Gulf of Aqaba, planned as a connected community supported by primary and secondary road networks, utilities, water infrastructure, and energy systems serving multiple destination assets across the region.',
    role:
      "GreenArc Consulting supported sustainability management of Magna's infrastructure programme, including the sustainability strategy and Envision certification pathway for the Main Coastal Road — coordinating Envision principles across quality of life, leadership, resource allocation, natural world, and climate resilience.",
  },

  // ─── MEP Projects (DUMMY DATA — replace title/loc/cat/img/overview/role) ───
  
  {
    slug: 'millennium-it',
    title: 'Millennium IT',
    loc: 'Colombo, Sri Lanka',
    cat: 'MEP Design Consultancy',
    section: 'mepprojects',
    img: '/images/otherprojects/millenniumit.jpg',
    overview:
      'Millennium IT Software (Pvt) Ltd, a multinational IT service provider and subsidiary of the London Stock Exchange, retrofitted its former building into a new Network Operating Center. Spanning an area of 13,940.5 m², the project commenced in April 2015.',
    role:
      'To size and optimize the mechanical ventilation and air conditioning (MVAC) systems, the engineering team at GreenArc utilized whole-building energy simulation.',
  },
  {
    slug: 'wild-coast-tented-lodge-yala',
    title: 'Wild Coast Tented Lodge - Yala',
    loc: 'Yala, Sri Lanka',
    cat: 'MEP Design Consultancy',
    section: 'mepprojects',
    img: '/images/otherprojects/wildcoasttentedlodgeyala.webp',
    overview:
      'Located adjacent to Yala National Park, the Yala Wild Coast Tented Lodge project spanned 29,739.7 m² and was executed from January 2015 to June 2018.',
    role:
      'GreenArc engaged to provide the complete back-of-house MEP design.',
  },
  {
    slug: 'progress-apparel-bangladesh',
    title: 'Progress Apparel Bangladesh',
    loc: 'Shiddhirganj, Bangladesh',
    cat: 'MEP Design Consultancy',
    section: 'mepprojects',
    img: '/images/otherprojects/progressapparelsbangladesh.jpg',
    overview:
      'Spanning 12,172.3 m² across two identical buildings, the Progress Apparel project was executed from May 2016 to March 2018, with both facilities successfully achieving LEED Gold Certification.',
    role:
      'GreenArc consulted as the MEP designer and LEED Consultants.',
  },
  {
    slug: 'mas-casualline-mawathagama',
    title: 'MAS Casualline – Mawathagama',
    loc: 'Mawathagama, Sri Lanka',
    cat: 'MEP Design Consultancy',
    section: 'mepprojects',
    img: '/images/otherprojects/mascasuallinemawathagama.png',
    overview:
      'The MAS Casualline factory in Mawathagama underwent an AC system design retrofit spanning an area of 13,011.2 m², which was executed between December 2015 and January 2016.',
    role:
      'GreenArc executed the AC system design retrofit for the facility.',
  },
  {
    slug: 'mas-ayathi-biyagama',
    title: 'MAS Ayathi – Biyagama',
    loc: 'Biyagama, Sri Lanka',
    cat: 'MEP Design Consultancy',
    section: 'mepprojects',
    img: '/images/otherprojects/masayathibiyagama.png',
    overview:
      'MAS Ayathi, the MAS Intimates Designing Centre, implemented an AC system design retrofit centered around promoting an eco-friendly building concept.',
    role:
      'GreenArc provided the AC system design retrofit to align with eco-friendly building principles.',
  },
  {
    slug: 'mas-silueta-biyagama',
    title: 'MAS Silueta – Biyagama',
    loc: 'Biyagama, Sri Lanka',
    cat: 'MEP Design Consultancy',
    section: 'mepprojects',
    img: '/images/otherprojects/massiluetabiyagama.png',
    overview:
      'The MAS Silueta factory in Biyagama underwent an MVAC system design retrofit across a total facility area of 19,752.3 m², completed between March 2016 and April 2016.',
    role:
      'GreenArc delivered the full MVAC system design retrofit for the facility.',
  },
  {
    slug: 'mas-unichela-panadura',
    title: 'MAS Unichela – Panadura',
    loc: 'Panadura, Sri Lanka',
    cat: 'MEP Design Consultancy',
    section: 'mepprojects',
    img: '/images/otherprojects/masunichelapanadura.png',
    overview:
      'Located in Panadura, the MAS Unichela factory facility underwent an MVAC system design retrofit covering 4,398.4 m² from May 2016 to June 2016.',
    role:
      'GreenArc was selected for the complete MVAC system design retrofit.',
  },
  {
    slug: 'mas-active-linea-intimo',
    title: 'MAS Active Linea Intimo',
    loc: 'Sri Lanka',
    cat: 'MEP Design Consultancy',
    section: 'mepprojects',
    img: '/images/otherprojects/masactivelineaintimo.png',
    overview:
      'The MAS Active Linea Intimo facility engaged engineering consultation for an upgraded MVAC system design retrofit.',
    role:
      'GreenArc provided the specialized MVAC system design retrofit.',
  },
  {
    slug: 'british-council-kandy',
    title: 'British Council – Kandy',
    loc: 'Kandy, Sri Lanka',
    cat: 'MEP Design Consultancy',
    section: 'mepprojects',
    img: '/images/otherprojects/britishcouncilkandy.png',
    overview:
      'The British Council Kandy Branch facility project covered an area of 3,252.8 m² and was carried out between September 2015 and October 2015.',
    role:
      'GreenArc executed the MVAC, Mechanical, and Total Electrical scope design.',
  },
  {
    slug: 'mas-active-contourline-pallekele',
    title: 'MAS Active Contourline – Pallekele',
    loc: 'Pallekele, Sri Lanka',
    cat: 'MEP Design Consultancy',
    section: 'mepprojects',
    img: '/images/otherprojects/masactivecontourlinepallekele.png',
    overview:
      'Located in Pallekele, the MAS Active Contourline facility manufactures apparel for global brands including NIKE, lululemon, Lauren, and Second Skin. The project covered an area of 9,293.7 m² from July 2016 to September 2016.',
    role:
      'GreenArc designed the complete MVAC System for the facility.',
  },

]

export const specializedServices = [
  {
    title: 'Green Building Certification Projects',
    blurb: 'LEED, EDGE, and GreenSL certification consultancy across completed developments.',
    url: 'https://www.co-energi.com/green-building-certifiaction-projects',
  },
  {
    title: 'MEP Consultancy Projects',
    blurb: 'Mechanical, electrical, and plumbing design consultancy portfolio.',
    url: 'https://www.co-energi.com/mep-design-projects',
  },
]

export const sectionMeta = {
  buildingprojects: { title: 'Building Projects', subtitle: "Landmark hospitality and residential destinations across NEOM, each shaped by GreenArc's sustainability leadership from vision setting through design engineering." },
  masterplanprojects: { title: 'Masterplan Projects', subtitle: 'Sustainability leadership and technical engineering delivered at the scale of entire coastal communities.' },
  infrastructureprojects: { title: 'Infrastructure Projects', subtitle: 'Sustainability strategy embedded into the networks that connect and support every destination.' },
  mepprojects: { title: 'MEP Projects', subtitle: 'Mechanical, electrical, and plumbing design consultancy across completed developments.' },
} as const
