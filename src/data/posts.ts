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
    slug: "douro-harvest-season-guide",
    kind: "Harvest",
    title: "The Douro Autumn Grape Harvest: A Traveler's Guide",
    searchTitle: "Douro Autumn Grape Harvest Guide | Vinho & Terroir",
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
    kind: "Vintage Port",
    title: "Understanding Port Wine: Ruby, Tawny & Vintage Reserves",
    searchTitle: "Understanding Port Wine Styles & Vintages | Vinho & Terroir",
    description: "The complete guide to understanding Port wine: the difference between bottle-aged Ruby, barrel-aged Tawny, and rare Single Quinta Vintages.",
    intro: "Demystifying the monumental oak vats and cobwebbed bottle libraries of Vila Nova de Gaia.",
    image: "/videos/porto.jpg",
    imageAlt: "Historic Port wine lodges of Vila Nova de Gaia along the river Douro",
    minutes: 5,
    published: FIRST,
    updated: FIRST,
    checked: FIRST,
    takeaways: [
      "Tawny Ports mature in 550-liter oak pipas, developing hazelnut, dried fig, and butterscotch nuances over decades.",
      "Vintage Ports are only declared in exceptional harvest years and can age gracefully in bottle for 50 to 100 years.",
      "White Port paired with tonic water and fresh mint is the quintessential aperitivo of northern Portugal.",
      "Always visit cellars in Vila Nova de Gaia with a certified sommelier for access to private library reserves."
    ],
    sources: [
      { label: "Port Wine Shippers Association", href: "https://www.ivdp.pt" },
      { label: "Decanter Guide to Port Vintages", href: "https://www.decanter.com" }
    ],
    next: ["douro-harvest-season-guide"],
  },
]
