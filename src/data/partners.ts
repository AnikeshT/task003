/**
 * External partners that complete a trip. Bookings for these happen on the
 * partner's own site; we link out and pass along what we can.
 * Flights go through our affiliate link (see lib/flights). Visas are a plain link for now.
 */
export const partners = {
  flights: {
    title: "Mediterranean Flights & Connections",
    short: "Flights",
    blurb: "Find seamless flight connections into Barcelona El Prat (BCN), Santorini Thira (JTR), Catania Fontanarossa (CTA), or Porto (OPO).",
    cta: "Search flights",
    note: "Opens kiwi.com",
    url: "/api/flights",
    rel: "noopener sponsored",
  },
  visa: {
    title: "Schengen Visa & Entry Guide",
    short: "Visa",
    blurb: "Traveling to the EU? Check visa requirements, Schengen 90-day allowances, and European entry paperwork with Atlys.",
    cta: "Check entry requirements",
    note: "Opens atlys.com",
    url: "https://www.atlys.com",
    rel: "noopener noreferrer",
  },
} as const
