import type { Question, Tour } from "./tours"

export type Experience = {
  slug: string
  title: string
  searchTitle: string
  description: string
  intro: string
  image: string
  imageAlt: string
  noun: string
  match: (t: Tour) => boolean
  sections: { title: string; paragraphs: string[] }[]
  faqs: Question[]
  sources: { label: string; href: string }[]
  guides: string[]
}

export const experiences: Experience[] = [
  {
    slug: "barcelona-wine-gourmet-tours",
    title: "Barcelona Wine & Gourmet Tapas Tours",
    searchTitle: "Barcelona Wine & Gourmet Food Tours | Terroir & Cru",
    description: "Compare curated Barcelona and Penedès culinary journeys: private cava chalk caves, Gothic Quarter tapas walks, and master sommelier pairings.",
    intro: "Immersive explorations through Catalonia's historic cellars and vibrant market tapas bars with certified oenologists.",
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Catalan tapas and wine in an authentic Barcelona cellar",
    noun: "Barcelona wine & tapas expeditions",
    match: (t) => t.city === "barcelona",
    sections: [
      {
        title: "Catalan gastronomy & wine traditions",
        paragraphs: [
          "Penedès is only 45 minutes from central Barcelona, making it the ideal day expedition. Subterranean chalk caves provide the perfect 14°C humidity for ageing Gran Reserva Cavas for up to 48 months.",
          "Back in the city, food and wine are inseparable. Authentic tapas trails explore historic El Born and Gothic Quarter bodegas, pairing acorn-fed Jamón Ibérico de Bellota, Pa amb Tomàquet, and local cheeses with bold mineral Priorat DOCa reds."
        ],
      },
    ],
    faqs: [
      {
        q: "How long does the Barcelona wine and tapas tour take?",
        a: "Full-day expeditions typically run 7 to 8 hours, including private transport to Penedès and an afternoon walking culinary feast in Barcelona.",
      },
      {
        q: "Is transport included from Barcelona hotels?",
        a: "Yes, private Mercedes-Benz chauffeur pickup and return is included from any address in Barcelona.",
      },
    ],
    sources: [
      { label: "DO Cava Official Regulatory Council", href: "https://www.cava.wine" },
      { label: "Catalan Gastronomy & Wine Heritage", href: "https://catalunya.com" }
    ],
    guides: ["barcelona"],
  },
  {
    slug: "santorini-volcanic-wine-tours",
    title: "Santorini Volcanic Caldera Wine Tastings",
    searchTitle: "Santorini Volcanic Wine Tours | Terroir & Cru",
    description: "Private caldera cliffside winery tours, 150-year-old ungrafted kouloura basket vines, and sunset Vinsanto pairings.",
    intro: "Step into historic canavas carved into volcanic ash and taste world-famous mineral Assyrtiko overlooking the Aegean Sea.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Santorini caldera cliffside vineyards at sunset",
    noun: "Santorini volcanic wine tours",
    match: (t) => t.city === "santorini",
    sections: [
      {
        title: "The magic of volcanic Assyrtiko",
        paragraphs: [
          "Santorini's soils have zero organic matter and are immune to phylloxera. Some root systems here are over 400 years old, continually woven into wreath-like baskets (kouloura) to protect grapes from gale-force Aegean winds.",
          "The wines are bone dry, high in acidity, and filled with saline flint minerality. Finishing with 20-year barrel-aged Vinsanto made from sun-dried grapes is one of the Mediterranean's supreme oenological joys."
        ],
      },
    ],
    faqs: [
      {
        q: "What is the best time of day for wine tasting in Santorini?",
        a: "Late afternoon leading into golden hour sunset is breathtaking, allowing you to taste crisp whites during daylight and dessert Vinsanto as the caldera sun dips below the Aegean horizon.",
      },
    ],
    sources: [
      { label: "Wines of Greece & Aegean PDO", href: "https://winesofgreece.org" },
    ],
    guides: ["santorini"],
  },
  {
    slug: "sicily-etna-vineyard-tours",
    title: "Sicily & Mount Etna Vineyard Escapes",
    searchTitle: "Sicily Mount Etna Wine Tours | Terroir & Cru",
    description: "Ascend Europe's highest active volcano to discover high-altitude basalt cantinas, pre-phylloxera vines, and Sicilian feasts.",
    intro: "Explore ancient volcanic lava stone cellars and taste mineral Nerello Mascalese paired with authentic Sicilian trattoria courses.",
    image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Mount Etna volcanic peak and vineyard terraces",
    noun: "Sicily volcanic vineyard escapes",
    match: (t) => t.city === "sicily",
    sections: [
      {
        title: "Europe's most exciting volcanic terroir",
        paragraphs: [
          "Mount Etna's high altitude (up to 1,000 meters above sea level) provides alpine night cooling in a Mediterranean climate. Old-vine Nerello Mascalese produces reds of Burgundy-like finesse and ethereal perfume.",
          "A visit to a cantina includes walking across black lava flows and eating traditional dishes: pasta alla Norma, Nebrodi salami, Bronte pistachios, and fresh warm cannoli."
        ],
      },
    ],
    faqs: [
      {
        q: "Where do tours depart from for Mount Etna?",
        a: "Private chauffeured departures are available from Taormina, Catania, Giardini Naxos, or private villas across eastern Sicily.",
      },
    ],
    sources: [
      { label: "Consorzio di Tutela dei Vini Etna DOC", href: "https://proposta-vini.it" },
    ],
    guides: ["sicily"],
  },
  {
    slug: "douro-vintage-wine-tours",
    title: "Douro Valley Wine & Quinta Tours",
    searchTitle: "Douro Valley Wine & Quinta Tours | Terroir & Cru",
    description: "Compare curated Douro Valley wine expeditions: private Quintas, historic rabelo boat cruises, and vintage Port barrel tastings.",
    intro: "Private and small-group journeys into the dramatic terraced schist hills of the Douro, with authentic vineyard lunches and rare tastings.",
    image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Sunlit terraced vineyards plunging into the river Douro",
    noun: "Douro Valley wine expeditions",
    match: (t) => t.city === "douro-valley",
    sections: [
      {
        title: "How to choose your Douro journey",
        paragraphs: [
          "Decide between a day trip from Porto and an overnight stay in Pinhão or Régua. A day trip allows you to experience two private Quintas and a river cruise in about 9 hours.",
          "Look for private rabelo cruises. Sharing large tourist boats often means loud PA systems, whereas private wooden rabelo charters allow you to glide in pure silence along UNESCO-protected riverbanks.",
          "Verify the tasting pedigree. Our signature masterclasses pour Single Quinta Colheitas and LBVs aged 20 to 40 years."
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a Douro Valley day tour take?",
        a: "Full-day expeditions take approximately 8.5 to 9.5 hours, leaving Porto around 8:30 AM and returning around 5:30 to 6:00 PM.",
      },
    ],
    sources: [
      { label: "Douro Demarcated Region Heritage", href: "https://ivdp.pt" },
    ],
    guides: ["douro-valley"],
  },
]
