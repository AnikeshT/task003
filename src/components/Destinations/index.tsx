import { Cities } from "@/components/Shared/cities"
import { CtaBand } from "@/components/Shared/cta-band"
import { Faq } from "@/components/Shared/faq"
import { PageHero } from "@/components/Shared/PageHero"
import { Compare } from "./compare"

const destinationQuestions = [
  {
    q: "Can I combine multiple Mediterranean wine destinations into one trip?",
    a: "Yes. Direct short-haul Mediterranean flights connect Barcelona, Santorini, Sicily, and Porto seamlessly. Many travelers spend 4 days in Catalonia and 4 days in Santorini or Sicily.",
  },
  {
    q: "What makes the terroirs of Barcelona, Santorini, and Sicily so contrasting?",
    a: "Barcelona offers chalk limestone cava soils and steep slate Priorat hills; Santorini possesses ancient volcanic ash and ungrafted kouloura baskets with sea-saline minerality; Sicily features black volcanic basalt terraces and alpine night cooling on Mount Etna.",
  },
]

export function Destinations() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1600&q=85"
        alt="Mediterranean wine and gastronomic landscape"
        title="Barcelona, Santorini, or Sicily?"
        intro="From chalk Cava cellars and tapas bodegas in Catalonia to volcanic cliffside canavas on Santorini and high-altitude lava terraces on Mount Etna, each Mediterranean terroir offers an unforgettable journey of flavor."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/destinations", label: "Terroir Regions" },
        ]}
      />
      <Cities />
      <Compare />
      <Faq title="Questions about Mediterranean wine regions" items={destinationQuestions} />
      <CtaBand />
    </>
  )
}
