import type { Category, City, TourSummary } from "@/data/tours"

type Filter = { city?: City; category?: Category; duration?: "overnight" }

/** `film` names the files in /public/videos: the clip, its phone crop and its image frame. */
const scenes: { name: string; film: string; alt: string; filter: Filter }[] = [
  { name: "Douro Valley", film: "douro", alt: "Terraced schist vineyards plunging into the river Douro", filter: { city: "douro-valley" } },
  { name: "Porto & Gaia", film: "porto", alt: "Historic Port wine lodges of Vila Nova de Gaia along the Douro", filter: { city: "porto" } },
  { name: "Alentejo Plains", film: "alentejo", alt: "Golden rolling plains and cork oak forests in Alentejo at sunset", filter: { city: "alentejo" } },
  { name: "Lisbon & Sintra", film: "lisbon", alt: "Historic Lisbon cobblestone streets with vintage tram and petiscos", filter: { city: "lisbon" } },
  { name: "Minho & Vinho Verde", film: "minho", alt: "Lush green vineyards and granite manor estates in the Minho", filter: { city: "minho" } },
]

export type Scene = { name: string; film: string; alt: string; href: string; count: number; from: { amount: number; currency: string } | null }

/** Each scene of the film, with what the directory actually holds for it. Scenes without tours are left out. */
export function toScenes(tours: TourSummary[]): Scene[] {
  return scenes.flatMap(({ name, film, alt, filter }) => {
    const match = tours.filter(
      (t) =>
        (!filter.city || t.city === filter.city) &&
        (!filter.category || t.category === filter.category)
    )
    if (match.length === 0) return []
    const cheapest = match.filter((t) => t.price !== null).sort((a, b) => a.price! - b.price!)[0]
    return {
      name,
      film,
      alt,
      href: `/tours?${new URLSearchParams(filter as Record<string, string>)}`,
      count: match.length,
      from: cheapest ? { amount: cheapest.price!, currency: cheapest.currency } : null,
    }
  })
}
