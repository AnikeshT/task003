/**
 * External partners that complete a trip. Bookings for these happen on the
 * partner's own site; we link out and pass along what we can.
 * Flights go through our affiliate link (see lib/flights). Visas are a plain link for now.
 */
export const partners = {
  flights: {
    title: "Complimentary flight booking",
    short: "Flights",
    blurb: "Every Dunes And Sky booking includes free help with flights into Dubai (DXB) or Abu Dhabi (AUH). Start with a search on Kiwi.com.",
    cta: "Search flights",
    note: "Opens kiwi.com",
    url: "/api/flights",
    rel: "noopener sponsored",
  },
  visa: {
    title: "UAE visa application",
    short: "Visa",
    blurb: "Need an entry visa? Apply online through Atlys and track it from your phone. Many nationalities get a visa on arrival and don't need to apply.",
    cta: "Apply with Atlys",
    note: "Opens atlys.com",
    url: "https://www.atlys.com",
    rel: "noopener noreferrer",
  },
} as const
