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
            If the desert is the plan, begin with <Link href="/blog/morning-or-evening-desert-safari-dubai">morning or evening</Link>. An
            evening safari takes about six hours from pickup and ends with dinner and a show. A morning one takes about four and leaves the
            rest of the day free. The guide has pickup times, sunset times through the year and who should skip the dune drive.
          </p>
          <p>
            Then read <Link href="/blog/dubai-desert-safari-cost">what a safari costs</Link>. Its table is worked out from the tours we list,
            so the prices move when the operators change them. It also explains why a quad bike in the title may not be in the price.
          </p>
          <p>
            For the capital, the <Link href="/blog/abu-dhabi-day-trip-from-dubai">Abu Dhabi day trip</Link> compares the train, the bus, your
            own car and a tour, and gives a plan by the hour. Before you go, check the{" "}
            <Link href="/blog/sheikh-zayed-grand-mosque-visit">Grand Mosque guide</Link>. Entry is no longer free, the mosque asks you to book a pass, and it
            closes to visitors for part of Friday.
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
