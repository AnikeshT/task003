import Link from "next/link"
import { TextPage } from "@/components/Shared/text-page"
import { site } from "@/data/site"
import { getListedTours } from "@/lib/tour-hub"

export async function HowWeWork() {
  const tours = await getListedTours()
  const operators = new Set(tours.map((t) => t.operator).filter(Boolean))

  return (
    <TextPage
      title="How we work"
      crumbs={[
        { href: "/", label: "Home" },
        { href: "/how-we-work", label: "How we work" },
      ]}
    >
      <h2>What we are</h2>
      <p>
        {site.description} At the moment that means {tours.length} tours from {operators.size} named operators. We don&apos;t
        run tours, drive the cars or hold your money.
      </p>

      <h2>Who takes your booking</h2>
      <p>
        “Book now” opens a partner&apos;s booking page in a new tab. You choose the date and the number of guests there, and you
        pay there. Your contract is with the seller named on that page, and their terms apply, including the cancellation
        policy. We repeat the operator&apos;s policy on each tour page so you can read it first.
      </p>

      <h2>How we earn money</h2>
      <p>
        When you book a tour or a Kiwi.com flight through one of our links, we may earn a commission from the partner. You
        don&apos;t pay us anything. Visa links open Atlys.
      </p>

      <h2>Where the details come from</h2>
      <ul>
        <li>
          <strong>Tours, photos and prices</strong> come from the operators through a booking platform, and the site refreshes them
          every few minutes. We correct spelling and leave out claims that we can see are wrong.
        </li>
        <li>
          <strong>Starting prices</strong> are the lowest the operator lists. Some are per person and some are for a group or a car.
          The booking page has the final price.
        </li>
        <li>
          <strong>Prices in your currency</strong> use daily rates from{" "}
          <a href="https://frankfurter.dev" target="_blank" rel="noopener noreferrer">
            Frankfurter
          </a>
          . Your bank&apos;s rate may differ slightly.
        </li>
        <li>
          <strong>Ratings</strong> are Tripadvisor&apos;s, with a link to the page they come from. Some cover
          everything the host runs, and the tour page says when they do.
        </li>
        <li>
          <strong>“How it compares”</strong> is worked out from the tours on this site. It isn&apos;t a survey of every tour on sale.
        </li>
        <li>
          <strong>Travel guides</strong> list their sources and the date we checked them.
        </li>
      </ul>

      <h2>What decides the order</h2>
      <p>
        <Link href="/tours">All tours</Link> starts with the most reviewed and can be sorted by rating or price. Comparison pages
        start with the lowest price. The home page shows tours we have picked, then the most reviewed of each kind.
      </p>

      <h2>When something is wrong</h2>
      <p>
        If a price or detail on the booking page differs from ours, the booking page is right.
        {site.email && (
          <>
            {" "}
            Tell us at <a href={`mailto:${site.email}`}>{site.email}</a> and we&apos;ll correct it.
          </>
        )}
      </p>
    </TextPage>
  )
}
