import { Suspense } from "react"
import { PageHero } from "@/components/Shared/PageHero"
import { CtaBand } from "@/components/Shared/cta-band"
import { JsonLd } from "@/components/Shared/json-ld"
import { collection, graph } from "@/lib/seo/schema"
import { getTourList } from "@/lib/tour-hub"
import { TourExplorer } from "./Explorer"
import { TourExplorerFallback } from "./Explorer/fallback"

export async function Tours() {
  const tours = await getTourList()
  const listed = tours.filter((t) => t.sameAs === null)

  return (
    <>
      <JsonLd
        data={graph(
          collection({ path: "/tours", name: "All Wine & Gourmet Tours", description: `${listed.length} curated Mediterranean cellar tastings and culinary journeys.`, tours: listed })
        )}
      />
      <PageHero
        image="/images/cellar-tasting.jpg"
        alt="Candlelit stone wine cellar masterclass with reserve barrels"
        title="All Wine & Gourmet Tours"
        intro={`${tours.length} tours across Barcelona, Santorini, Sicily, and Douro Valley. Filter by terroir, style, or duration.`}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/tours", label: "Tours" },
        ]}
      />
      <Suspense fallback={<TourExplorerFallback tours={tours} />}>
        <TourExplorer tours={tours} />
      </Suspense>
      <CtaBand />
    </>
  )
}
