export type City = "douro-valley" | "porto" | "alentejo" | "lisbon" | "minho"
export type Category = "vintage-port" | "cellar-tasting" | "michelin-terroir" | "harvest-expedition" | "rabelo-cruise"

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
  "douro-valley": {
    name: "Douro Valley",
    portuguese: "Vale do Douro",
    tagline: "Terraced schist hills & the golden river",
    intro:
      "The world's oldest demarcated wine region (1756). Dramatic hand-carved stone terraces plunging into the river Douro, centuries-old family Quintas, and the hallowed birthplace of Port wine.",
    image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Terraced vineyards of the Douro Valley sloping down to the river",
    secondary: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85",
    facts: [
      { label: "Demarcated", value: "1756 (UNESCO)" },
      { label: "From Porto", value: "1 hr 30 min" },
    ],
    search: {
      title: "Douro Valley Wine & Food Tours | Vinho & Terroir",
      description: "Private Quintas, traditional rabelo boat cruises, and vintage Port barrel tastings in the Douro Valley.",
    },
  },
  porto: {
    name: "Porto & Gaia",
    portuguese: "Porto e Gaia",
    tagline: "Centuries-old stone cellars & Atlantic petiscos",
    intro:
      "Granite lodges where Port wine matures in monumental oak vats. Walk the iron ribs of Dom Luís I bridge from colorful Ribeira, and taste fresh Matosinhos seafood alongside 20-year aged tawnies.",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Ribeira riverfront in Porto with classic rabelo boats and the iron bridge",
    secondary: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1600&q=85",
    facts: [
      { label: "Best season", value: "All year" },
      { label: "Cellar lodges", value: "Over 50 historic" },
    ],
    search: {
      title: "Porto Wine Lodge Cellars & Petiscos Tours | Vinho & Terroir",
      description: "Explore the historic Port wine lodges of Vila Nova de Gaia with master sommelier-led tastings and Ribeira culinary walks.",
    },
  },
  alentejo: {
    name: "Alentejo & Évora",
    portuguese: "Alentejo e Évora",
    tagline: "Sun-drenched golden plains & Roman amphorae",
    intro:
      "Portugal's slow-living breadbasket. Ancient Roman Vinho de Talha fermented in beeswax-lined clay pots, vast cork-oak forests, acorn-fed black Iberian pigs, and UNESCO marble town Évora.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Golden rolling plains and cork trees in Alentejo at sunset",
    secondary: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1600&q=85",
    facts: [
      { label: "Specialty", value: "Vinho de Talha" },
      { label: "From Lisbon", value: "1 hr 15 min" },
    ],
    search: {
      title: "Alentejo Amphora Wine & Cork Safari Tours | Vinho & Terroir",
      description: "Experience clay amphora winemaking, Montado cork oak forests, and Porco Preto feasts across Alentejo.",
    },
  },
  lisbon: {
    name: "Lisbon & Sintra",
    portuguese: "Lisboa e Sintra",
    tagline: "Atlantic dune terroir, historic tascas & soulful Fado",
    intro:
      "From rare pre-phylloxera sand-dune Ramisco vines in coastal Colares to midnight petiscos and melancholy Fado in candlelit Alfama, Lisbon's culinary spirit is deeply maritime.",
    image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Yellow vintage tram rattling through historic cobblestone streets in Lisbon",
    secondary: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85",
    facts: [
      { label: "Signature", value: "Colares DOC & Petiscos" },
      { label: "Fado soul", value: "Alfama & Mouraria" },
    ],
    search: {
      title: "Lisbon Wine Tasting, Petiscos & Fado Tours | Vinho & Terroir",
      description: "Savor Colares sand-dune wines, authentic Alfama tascas, and intimate candlelight Fado evenings in Lisbon.",
    },
  },
  minho: {
    name: "Minho & Vinho Verde",
    portuguese: "Minho e Vinho Verde",
    tagline: "Lush emerald valleys, granite manors & crisp Alvarinho",
    intro:
      "Green hillsides cooled by Atlantic rains. Stately 17th-century granite solar estates, high-pergola vineyards, and crisp, mineral-drenched Alvarinho paired with river catches and cornbread.",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Emerald vineyards and granite stone walls in the Minho region",
    secondary: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1600&q=85",
    facts: [
      { label: "Grape hero", value: "Alvarinho" },
      { label: "Terroir", value: "Granite & Maritime" },
    ],
    search: {
      title: "Minho & Vinho Verde Country Estate Tours | Vinho & Terroir",
      description: "Walk historic granite manor estates in the Minho and taste world-class mineral Vinho Verde and Alvarinho.",
    },
  },
}

export const categories: Record<Category, { name: string; image: string; imageAlt: string }> = {
  "vintage-port": {
    name: "Vintage Port",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "A glass of deep red vintage Port wine poured in an ancient cellar",
  },
  "cellar-tasting": {
    name: "Cellar Tasting",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Historic oak barrel vaults in Vila Nova de Gaia",
  },
  "michelin-terroir": {
    name: "Terroir & Food",
    image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Gourmet Portuguese petiscos plate with cured meats, olives, and cheese",
  },
  "harvest-expedition": {
    name: "Harvest & Terroir",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Ripe purple grapes on the vine during the Douro harvest",
  },
  "rabelo-cruise": {
    name: "Rabelo Cruise",
    image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Traditional wooden rabelo boat sailing under Douro terraced hills",
  },
}

/** Formats currency amounts gracefully. */
export const formatPrice = (amount: number, currency: string) => {
  const locale = currency === "EUR" ? "pt-PT" : "en-US"
  const style = { style: "currency", currency } as const
  return new Intl.NumberFormat(locale, { ...style, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount)
}

export type Question = { q: string; a: string }

export const faqs: Question[] = [
  {
    q: "When is the best time of year for wine and food tours in Portugal?",
    a: "May to October offers glorious vineyard weather. Late September and October is the magical harvest season (Vindimas) when you can experience active grape picking and granite lagar foot-treading in the Douro Valley.",
  },
  {
    q: "Are the tours suitable for non-wine drinkers or dietary restrictions?",
    a: "Absolutely. Portuguese culinary culture is as celebrated as its oenology. Tours feature artisanal cheeses, olive oil tastings, fresh seafood, and farm-to-table dining. Vegetarian, pescatarian, and gluten-free adaptations are gladly arranged in advance.",
  },
  {
    q: "What makes Portuguese wines so unique compared to the rest of Europe?",
    a: "Portugal is home to over 250 indigenous grape varieties (like Touriga Nacional, Alvarinho, Baga, and Encruzado) found nowhere else on earth, plus preserved centuries-old traditions like granite lagar foot-treading and Roman clay amphora (Talha) fermentation.",
  },
  {
    q: "What is the group size policy?",
    a: "We adhere strictly to our small-group standard: intimate groups capped at 8 guests maximum, or completely private private-chauffeured VIP expeditions.",
  },
  {
    q: "Can I cancel or change my booking?",
    a: "All our signature experiences offer free cancellation up to 48 hours before departure with a 100% full refund.",
  },
]
