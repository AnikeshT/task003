export type City = "barcelona" | "santorini" | "sicily" | "douro-valley" | "porto"
export type Category = "gourmet-pairing" | "volcanic-terroir" | "cellar-reserve" | "harvest-masterclass" | "vineyard-escape"

/** `host` is true when the page covers everything the tour's host runs, not this one tour. */
export type Tripadvisor = { url: string; host: boolean }

/** A tour ready to render. */
export type Tour = {
  id: string
  slug: string
  /** The slug of a tour with the same name that search engines should list instead. */
  sameAs: string | null
  title: string
  /** Who runs the tour. */
  operator: string | null
  city: City
  /** Where the operator lists the tour, which is usually where pickup is. */
  startsIn: string
  category: Category
  duration: string | null
  hours: number
  price: number | null
  currency: string
  rating: number | null
  reviews: number
  tripadvisor: Tripadvisor | null
  isPrivate: boolean
  featured: boolean
  pickup: string | null
  languages: string[]
  images: string[]
  summary: string
  description: string[]
  highlights: string[]
  included: string[]
  excluded: string[]
  meetingPoint: string | null
  cancellation: { free: boolean; title: string; fees: string[] }
  bookingUrl: string
}

/** The fields a card or list needs. Keeps the long text out of the browser bundle. */
export type TourSummary = Pick<
  Tour,
  "id" | "slug" | "sameAs" | "title" | "city" | "startsIn" | "category" | "duration" | "hours" | "price" | "currency" | "rating" | "reviews" | "isPrivate" | "featured"
> & { image: string; hostRated: boolean }

export const cities: Record<
  City,
  {
    name: string
    portuguese: string
    tagline: string
    intro: string
    image: string
    imageAlt: string
    secondary: string
    facts: { label: string; value: string }[]
    search: { title: string; description: string }
  }
> = {
  barcelona: {
    name: "Barcelona & Penedès",
    portuguese: "Catalunya i Penedès",
    tagline: "Historic chalk cava cellars, Catalan tapas & sea breeze",
    intro:
      "From the bustling Gothic Quarter wine bars to the undulating chalk soils of Penedès and steep slate llicorella terraces of Priorat, Catalonia is a world-class temple of oenology and gastronomy.",
    image: "/images/barcelona-tapas.jpg",
    imageAlt: "Gourmet Catalan tapas and rich red wine in a Barcelona bodega",
    secondary: "/images/barcelona-gothic.jpg",
    facts: [
      { label: "Signature", value: "Artisanal Cava & Priorat DOCa" },
      { label: "From City", value: "45 min to vineyards" },
    ],
    search: {
      title: "Barcelona Wine & Gourmet Food Tours | Terroir & Cru",
      description: "Private Penedès cava cellar tastings, Gothic Quarter tapas trails, and Priorat sommelier tours.",
    },
  },
  santorini: {
    name: "Santorini & Cyclades",
    portuguese: "Santorini & Kouloura",
    tagline: "Ancient volcanic caldera, basket vines & mineral Assyrtiko",
    intro:
      "Perched atop towering caldera cliffs above the Aegean Sea. Walk through 400-year-old ungrafted basket vines rooted in volcanic pumice, and taste crisp, bone-dry Assyrtiko alongside sun-dried Vinsanto.",
    image: "/images/santorini-caldera.jpg",
    imageAlt: "Santorini caldera cliffside village at sunset with Aegean sea view",
    secondary: "/images/santorini-dome.jpg",
    facts: [
      { label: "Terroir", value: "Volcanic Ash & Pumice" },
      { label: "Vine Style", value: "Ungrafted Kouloura Baskets" },
    ],
    search: {
      title: "Private Santorini Wine Tasting Tours | Terroir & Cru",
      description: "Exclusive private caldera winery tastings, volcanic Assyrtiko masterclasses, and Oia sunset dining.",
    },
  },
  sicily: {
    name: "Sicily & Mount Etna",
    portuguese: "Sicilia & Monte Etna",
    tagline: "Black volcanic basalt, ancient vines & Sicilian feasts",
    intro:
      "Europe's highest active volcano is home to one of the world's most thrilling wine revivals. High-altitude Nerello Mascalese from century-old pre-phylloxera vines paired with Sicilian cannoli, pistachios, and fresh seafood.",
    image: "/images/sicily-etna.jpg",
    imageAlt: "Mount Etna smoking volcanic peak and lush vineyard terraces in Sicily",
    secondary: "/images/sicily-terrace.jpg",
    facts: [
      { label: "Elevation", value: "Up to 1,000m on Etna" },
      { label: "Volcano", value: "Active basalt mineral soils" },
    ],
    search: {
      title: "Sicily Vineyard Escape & Etna Wine Tours | Terroir & Cru",
      description: "Mount Etna volcanic cantina tours, Nerello Mascalese tastings, and authentic Sicilian farm feasts.",
    },
  },
  "douro-valley": {
    name: "Douro Valley",
    portuguese: "Vale do Douro",
    tagline: "Terraced schist hills & the golden river",
    intro:
      "The world's oldest demarcated wine region (1756). Dramatic hand-carved stone terraces plunging into the river Douro, centuries-old family Quintas, and the hallowed birthplace of Port wine.",
    image: "/images/douro-terraces.jpg",
    imageAlt: "Terraced vineyards of the Douro Valley sloping down to the river",
    secondary: "/images/douro-cellar.jpg",
    facts: [
      { label: "Demarcated", value: "1756 (UNESCO)" },
      { label: "From Porto", value: "1 hr 30 min" },
    ],
    search: {
      title: "Douro Valley Wine & Food Tours | Terroir & Cru",
      description: "Private Quintas, traditional rabelo boat cruises, and vintage Port barrel tastings in the Douro Valley.",
    },
  },
  porto: {
    name: "Porto & Gaia",
    portuguese: "Porto e Gaia",
    tagline: "Centuries-old stone cellars & Atlantic petiscos",
    intro:
      "Granite lodges where Port wine matures in monumental oak vats. Walk the iron ribs of Dom Luís I bridge from colorful Ribeira, and taste fresh Matosinhos seafood alongside 20-year aged tawnies.",
    image: "/images/porto-river.jpg",
    imageAlt: "Ribeira riverfront in Porto with classic rabelo boats and the iron bridge",
    secondary: "/images/porto-cask.jpg",
    facts: [
      { label: "Best season", value: "All year" },
      { label: "Cellar lodges", value: "Over 50 historic" },
    ],
    search: {
      title: "Porto Wine Lodge Cellars & Petiscos Tours | Terroir & Cru",
      description: "Explore the historic Port wine lodges of Vila Nova de Gaia with master sommelier-led tastings and Ribeira culinary walks.",
    },
  },
}

export const categories: Record<Category, { name: string; image: string; imageAlt: string }> = {
  "gourmet-pairing": {
    name: "Gourmet Tapas & Wine",
    image: "/images/barcelona-tapas.jpg",
    imageAlt: "Gourmet tapas and vintage wine glasses in an atmospheric cellar",
  },
  "volcanic-terroir": {
    name: "Volcanic Terroir",
    image: "/images/santorini-caldera.jpg",
    imageAlt: "Caldera cliffside vineyard overlooking the Aegean sea",
  },
  "cellar-reserve": {
    name: "Cellar & Grand Cru",
    image: "/images/cellar-tasting.jpg",
    imageAlt: "Oak barrel cellar with vintage reserve bottles being poured",
  },
  "harvest-masterclass": {
    name: "Harvest & Masterclass",
    image: "/images/vineyard-harvest.jpg",
    imageAlt: "Grapes ripening on the vine during autumn harvest",
  },
  "vineyard-escape": {
    name: "Vineyard Estate Escape",
    image: "/images/sicily-etna.jpg",
    imageAlt: "Scenic rolling vineyard estate at the base of volcanic hills",
  },
}

/** Formats currency amounts gracefully. */
export const formatPrice = (amount: number, currency: string) => {
  const locale = currency === "EUR" ? "es-ES" : "en-US"
  const style = { style: "currency", currency } as const
  return new Intl.NumberFormat(locale, { ...style, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount)
}

export type Question = { q: string; a: string }

export const faqs: Question[] = [
  {
    q: "What makes Mediterranean wine regions so distinct?",
    a: "The Mediterranean basin combines ancient volcanic soils (Santorini, Mount Etna), dramatic schist terraces (Douro), and maritime microclimates (Barcelona & Penedès). Winemaking here dates back over 3,000 years, preserving pre-phylloxera ungrafted vines found nowhere else on earth.",
  },
  {
    q: "Are the tours suitable for non-wine drinkers or dietary restrictions?",
    a: "Absolutely. Mediterranean culinary culture is inextricably tied to olive oils, artisanal cheeses, Iberian ham, truffles, and fresh coastal seafood. Full vegetarian, pescatarian, and non-alcoholic gastronomic journeys are gladly arranged.",
  },
  {
    q: "Who leads the wine tastings and vineyard tours?",
    a: "Every private expedition is guided by certified WSET Level 3 or Master Sommelier oenologists who have personal relationships with the estate winemakers, granting you behind-the-scenes barrel access not available to the public.",
  },
  {
    q: "What is the group size policy?",
    a: "We adhere strictly to our small-group standard: intimate tours capped at 8 guests maximum, or completely private private-chauffeured VIP expeditions.",
  },
  {
    q: "Can I cancel or modify my booking?",
    a: "All our signature experiences offer free cancellation up to 48 hours before departure with a 100% full refund.",
  },
]
