export type Source = { label: string; href: string }

export type Post = {
  slug: string
  kind: string
  title: string
  searchTitle: string
  description: string
  intro: string
  image: string
  imageAlt: string
  minutes: number
  published: string
  updated: string
  checked: string
  takeaways: string[]
  sources: Source[]
  next: string[]
}

const FIRST = "2026-11-25"

export const posts: Post[] = [
  {
    slug: "barcelona-wine-tapas-guide",
    kind: "Catalonia",
    title: "Barcelona Wine & Tapas Pairing: A Sommelier's Guide",
    searchTitle: "Barcelona Wine & Tapas Pairing Guide | Terroir & Cru",
    description: "How to pair artisanal Penedès Cava, bold Priorat reds, and historic Gothic Quarter tapas in Barcelona.",
    intro: "From subterranean chalk Cava caves in Penedès to candlelit bodegas in El Born, discover the authentic culinary and oenological spirit of Catalonia.",
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Gourmet Catalan tapas and vintage red wine glasses",
    minutes: 5,
    published: FIRST,
    updated: FIRST,
    checked: FIRST,
    takeaways: [
      "Boutique Gran Reserva Cava aged on lees for over 36 months pairs impeccably with Jamón Ibérico de Bellota.",
      "Penedès is situated only 45 minutes south-west of Barcelona, ideal for a private morning cellar excursion.",
      "Explore the Gothic Quarter and El Born backstreets for historic bodegas bypassed by mass tour crowds.",
      "Pair bold mineral Priorat DOCa reds with Catalan beef stew (Fricandó) and artisan Pyrenean cheeses."
    ],
    sources: [
      { label: "DO Cava Official Regulatory Council", href: "https://www.cava.wine" },
      { label: "Institut Català de la Vinya i el Vi (INCAVI)", href: "https://incavi.gencat.cat" }
    ],
    next: ["santorini-volcanic-terroir-guide", "douro-harvest-season-guide"],
  },
  {
    slug: "santorini-volcanic-terroir-guide",
    kind: "Cyclades",
    title: "Santorini Volcanic Wine: Assyrtiko & Ancient Kouloura Vines",
    searchTitle: "Santorini Volcanic Wine Guide | Terroir & Cru",
    description: "Explore the ancient volcanic pumice terroir of Santorini, ungrafted kouloura basket pruning, and sunset Vinsanto tastings.",
    intro: "Forged by violent volcanic eruptions and cooled by Aegean sea mist, Santorini is home to Europe's most unique pre-phylloxera vineyards.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Santorini cliffside village overlooking the caldera at sunset",
    minutes: 5,
    published: FIRST,
    updated: FIRST,
    checked: FIRST,
    takeaways: [
      "Santorini's volcanic pumice contains zero organic matter, rendering the island completely immune to phylloxera.",
      "Ancient vines are hand-woven into ground baskets (kouloura) to protect grapes from gale-force Aegean winds.",
      "Assyrtiko yields bone-dry, razor-sharp whites with intense saline minerality and flinty smokiness.",
      "Historic underground canavas maintain a constant 16°C natural humidity inside volcanic ash strata."
    ],
    sources: [
      { label: "Wines of Greece Official Portal", href: "https://winesofgreece.org" },
      { label: "Santorini Protected Designation of Origin", href: "https://santorini.gr" }
    ],
    next: ["barcelona-wine-tapas-guide", "douro-harvest-season-guide"],
  },
  {
    slug: "douro-harvest-season-guide",
    kind: "Harvest",
    title: "The Douro Autumn Grape Harvest: A Traveler's Guide",
    searchTitle: "Douro Autumn Grape Harvest Guide | Terroir & Cru",
    description: "When the Douro Valley harvest happens, how to join traditional granite lagar foot-treading, and what to wear for vineyard picking.",
    intro: "Every autumn between September and October, the terraced schist hills of the Douro Valley come alive with harvest songs and lagar stomping.",
    image: "/videos/douro.jpg",
    imageAlt: "Douro Valley terraced vineyards overlooking the river at golden hour",
    minutes: 4,
    published: FIRST,
    updated: FIRST,
    checked: FIRST,
    takeaways: [
      "The Douro harvest (Vindimas) runs from mid-September through late October depending on altitude and summer rainfall.",
      "Traditional barefoot foot-treading in granite lagares remains the gentlest method for extracting color without crushing bitter seeds.",
      "Book harvest participation at least 3 months in advance as Quinta spaces are limited.",
      "Pair your vineyard harvest walk with a private rabelo river cruise from Pinhão."
    ],
    sources: [
      { label: "Instituto dos Vinhos do Douro e do Porto (IVDP)", href: "https://www.ivdp.pt" },
      { label: "UNESCO Douro World Heritage Centre", href: "https://whc.unesco.org/en/list/1046" }
    ],
    next: ["port-wine-vintage-guide"],
  },
  {
    slug: "port-wine-vintage-guide",
    kind: "Port Wine",
    title: "Vintage vs. Tawny Port: Demystifying the Cellar Lodges",
    searchTitle: "Vintage vs Tawny Port Wine Guide | Terroir & Cru",
    description: "Understand the fundamental difference between bottle-aged Vintage Port and wood-aged Tawny Port before visiting the Gaia cellars.",
    intro: "Crossing the Dom Luís I bridge into Vila Nova de Gaia reveals massive granite vaults holding millions of liters of aging fortified wine.",
    image: "/videos/porto.jpg",
    imageAlt: "Historic Port wine barrels and tasting glasses in a granite cellar lodge",
    minutes: 5,
    published: FIRST,
    updated: FIRST,
    checked: FIRST,
    takeaways: [
      "Vintage Port spends just 2 years in wood before aging in bottle for 20 to 50+ years, developing dark fruit and velvet tannins.",
      "Tawny Port spends its entire life in oak casks, slowly oxidizing into an amber nectar of roasted nuts, dried fig, and butterscotch.",
      "Colheita is a single-harvest Tawny aged in cask for a minimum of 7 years, often much longer.",
      "Pair 20-Year-Old Tawny slightly chilled with Queijo da Serra da Estrela cheese or warm pastel de nata."
    ],
    sources: [
      { label: "Port and Douro Wines Institute (IVDP)", href: "https://www.ivdp.pt" }
    ],
    next: ["douro-harvest-season-guide"],
  },
]
