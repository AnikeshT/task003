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
          collection({ path: "/tours", name: "Tours in Dubai and Abu Dhabi", description: `${listed.length} tours across Dubai and Abu Dhabi.`, tours: listed })
        )}
      />
      <PageHero
        image="/images/dubai-skyline-dusk.jpg"
        alt="Dubai skyline at dusk seen across the water"
        title="Tours in Dubai and Abu Dhabi"
        intro={`${tours.length} tours to choose from. Filter by city, type or length.`}
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
