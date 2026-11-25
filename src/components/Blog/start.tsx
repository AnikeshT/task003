import Link from "next/link"
import { Prose } from "@/components/Shared/prose"

/** Which guide answers what, and how we check them. */
export function Start() {
  return (
    <section className="bg-pearl-100 pb-24 md:pb-32">
      <div className="container-x border-t border-border pt-24 md:pt-32">
        <Prose>
          <h2>Which guide should you read first?</h2>
          <p>
            If Catalonia is on your radar, explore our cellar deep-dives into Penedès cava caves and Priorat llicorella soils.
            Each guide highlights tasting schedules, transport from Barcelona, and private masterclasses with master sommeliers.
          </p>
          <p>
            For volcanic terroirs, discover our Santorini and Mount Etna guides detailing indigenous varietals like Assyrtiko
            and Nerello Mascalese, volcanic soil chemistry, and historic hillside vineyards overlooking the Mediterranean.
          </p>
          <p>
            Heading to Portugal? Our Douro Valley and Porto vintage cellar guide reveals terraced quintas, rabelo river cruises,
            and centuries-old lodge tastings in Vila Nova de Gaia.
          </p>

          <h2>How do we check them?</h2>
          <p>
            Opening hours, fees and dress rules come from the place itself where it publishes them, and each guide links to its sources. Tour
            prices and lengths come from our own listings. Where sources disagree or we couldn&apos;t open a page, the guide says so. Every
            guide shows the date we last checked it.
          </p>
          <p>
            We may earn a commission when you book a tour through one of our links. <Link href="/how-we-work">How we work</Link> explains
            where the tours come from and what decides their order.
          </p>
        </Prose>
      </div>
    </section>
  )
}
