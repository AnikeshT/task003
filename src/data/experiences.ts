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
    slug: "douro-vintage-wine-tours",
    title: "Douro Valley Wine & Quinta Tours",
    searchTitle: "Douro Valley Wine & Quinta Tours | Vinho & Terroir",
    description: "Compare curated Douro Valley wine expeditions: private Quintas, historic rabelo boat cruises, and vintage Port barrel tastings.",
    intro: "Private and small-group journeys into the dramatic terraced schist hills of the Douro, with authentic vineyard lunches and rare tastings.",
    image: "/videos/douro.jpg",
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
  {
    slug: "porto-wine-cellars-petiscos",
    title: "Porto Historic Cellars & Petiscos Walks",
    searchTitle: "Porto Port Wine Cellars & Food Tours | Vinho & Terroir",
    description: "Explore the granite barrel lodges of Vila Nova de Gaia and authentic petiscos tavernas across Porto's Ribeira.",
    intro: "Centuries-old oak vaults, rare aged tawnies, and evening petiscos trails through Porto's most soulful backstreets.",
    image: "/videos/porto.jpg",
    imageAlt: "Historic Port wine lodges of Vila Nova de Gaia across the Douro",
    noun: "Porto cellar and petiscos walks",
    match: (t) => t.city === "porto",
    sections: [
      {
        title: "The mystery of the Port lodges",
        paragraphs: [
          "Though Port grapes grow upriver in the Douro, the wine has historically aged in the cool, damp marine air of Vila Nova de Gaia.",
          "Walk through dimly lit stone cellars where oak botes holding thousands of liters have rested undisturbed since the 19th century.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to book Port wine cellar visits in advance?",
        a: "Yes. Premium lodge library cellars restrict admission to maintain quiet aging conditions, so reservations are essential.",
      },
    ],
    sources: [
      { label: "Instituto dos Vinhos do Douro e do Porto", href: "https://ivdp.pt" },
    ],
    guides: ["porto"],
  },
  {
    slug: "alentejo-cork-amphora-tours",
    title: "Alentejo Cork & Talha Amphora Tours",
    searchTitle: "Alentejo Amphora Wine & Cork Safari Tours | Vinho & Terroir",
    description: "Discover 2,000-year-old Roman clay amphora winemaking, cork oak forests, and Porco Preto feasts in Alentejo.",
    intro: "Experience the sun-drenched tranquility of the Alentejo plains, where wine is fermented in clay and black Iberian pigs graze under cork trees.",
    image: "/videos/alentejo.jpg",
    imageAlt: "Golden rolling plains and cork trees in Alentejo at sunset",
    noun: "Alentejo terroir expeditions",
    match: (t) => t.city === "alentejo",
    sections: [
      {
        title: "The revival of Vinho de Talha",
        paragraphs: [
          "Alentejo winemakers continue the Roman craft of fermenting grapes in clay vessels called Talhas, sealed with olive oil and resin.",
          "The resulting wines are vibrant, earthy, and unlike anything made in modern stainless-steel tanks.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the best way to travel to Alentejo?",
        a: "Chauffeured private vehicle from Lisbon takes about 1 hour and 15 minutes, allowing seamless stops in Évora and countryside Herdades.",
      },
    ],
    sources: [
      { label: "Wines of Alentejo Commission", href: "https://vinhosdoalentejo.pt" },
    ],
    guides: ["alentejo"],
  },
]
