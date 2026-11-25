import { TextPage } from "@/components/Shared/text-page"
import { site } from "@/data/site"

export function Privacy() {
  return (
    <TextPage
      title="Privacy"
      crumbs={[
        { href: "/", label: "Home" },
        { href: "/privacy", label: "Privacy" },
      ]}
    >
      <h2>The short version</h2>
      <p>
        You can use this site without an account. We don&apos;t ask for your name, email or payment details, and we set no cookies of
        our own.
      </p>

      <h2>What is recorded when you visit</h2>
      <ul>
        <li>
          <strong>Page views.</strong> We count visits with Umami, which doesn&apos;t use cookies. It records the page address, the site
          you came from, your browser, device type and rough location. It also records which tour&apos;s “Book now” button was pressed.
        </li>
        <li>
          <strong>Your country.</strong> Our host works it out from your internet address so we can show prices in your currency. If
          you press “Search flights”, we pass it to Kiwi.com, through the affiliate network Travelpayouts, as your starting point.
          We don&apos;t store it.
        </li>
        <li>
          <strong>Server logs.</strong> The site runs on Vercel, which keeps technical logs, including internet addresses, to run
          and protect the service.
        </li>
      </ul>

      <h2>What you type</h2>
      <p>
        The search form and the trip planner keep your answers in the page address, so you can share or return to them.
      </p>

      <h2>Other websites</h2>
      <p>
        Booking, flight, visa and Tripadvisor links open other companies&apos; websites, which have their own privacy policies.
        Booking and flight links carry a code that tells the partner you came from us.
      </p>

      {site.email && (
        <>
          <h2>Questions</h2>
          <p>
            Write to <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </>
      )}
    </TextPage>
  )
}
