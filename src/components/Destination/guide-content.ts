import type { City } from "@/data/tours"

export const guide: Record<City, { title: string; text: string; image: string; alt: string }[]> = {
  "douro-valley": [
    {
      title: "Schist terraces at dawn",
      text: "Wake above the morning river mist. The hand-built stone terraces reflect morning warmth, coaxing deep concentration into old Touriga Nacional vines.",
      image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1200&q=80",
      alt: "Douro Valley steep terraced schist vineyards overlooking the river",
    },
    {
      title: "Private rabelo cruises",
      text: "Sail past steep vineyard bluffs on a silent wooden rabelo boat, sipping crisp white Port and tonic as the gorge narrows.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      alt: "Traditional wooden boat on the Douro river",
    },
    {
      title: "Cellar library tastings",
      text: "Uncork single-quinta Colheitas and unreleased Vintage Ports in private cellars that have aged barrels for over a century.",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
      alt: "Ancient wooden oak wine barrels in a dim cellar vault",
    },
  ],
  porto: [
    {
      title: "Historic Vila Nova de Gaia lodges",
      text: "Walk through granite barrel rooms where sea humidity and steady maritime temperatures gently mature Tawny and Vintage Ports.",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80",
      alt: "Historic Port wine lodge cellars in Vila Nova de Gaia",
    },
    {
      title: "Ribeira tascas & petiscos",
      text: "Duck into traditional tavernas for salt cod fritters, flamed chouriço, and hand-sliced presunto paired with Douro DOC reserve reds.",
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
      alt: "Ribeira colorful riverfront facades in Porto",
    },
  ],
  alentejo: [
    {
      title: "2,000 years of Talha amphorae",
      text: "Discover beeswax-lined clay amphorae where grapes ferment naturally on their skins, producing rustic, mineral-rich amber and red wines.",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
      alt: "Golden plains of Alentejo at sunset",
    },
    {
      title: "Montado cork forests & Porco Preto",
      text: "Wander among protected cork oak trees where acorn-grazing black Iberian pigs yield world-renowned cured charcuterie.",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      alt: "Ancient cork oak trees under the Alentejo sun",
    },
  ],
  lisbon: [
    {
      title: "Atlantic Colares sand vines",
      text: "Taste rare pre-phylloxera Ramisco vines planted deep into ocean sand dunes, producing saline, structured, legendary reds.",
      image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1200&q=80",
      alt: "Cobblestone street in Lisbon with yellow tram",
    },
    {
      title: "Alfama candlelight Fado",
      text: "Experience raw, acoustic Fado in intimate neighborhood tascas while enjoying petiscos and artisanal cheeses.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      alt: "Intimate candlelight dinner in Lisbon",
    },
  ],
  minho: [
    {
      title: "17th-century granite solares",
      text: "Visit noble manor estates in Monção and Melgaço, surrounded by high-trellised pergola vines and ancient camellia gardens.",
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
      alt: "Green rolling vineyards in the Minho region",
    },
    {
      title: "Crisp mineral Alvarinho",
      text: "Savor world-class Alvarinho with notes of peach blossom and sea salt, accompanied by wood-fired cornbread and river trout.",
      image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1200&q=80",
      alt: "Chilled white wine poured in a vineyard setting",
    },
  ],
}
