export const site = {
  name: "Terroir & Cru",
  url: "https://terroirandcru.com",
  /** What the site is, in one sentence. */
  description:
    "Terroir & Cru curates masterclass wine tastings, historic vineyard cellars, and Michelin-starred culinary odysseys across Barcelona, Santorini, Sicily, and the Mediterranean.",
  email: "concierge@terroirandcru.com" as string | null,
} as const

export const absolute = (path: string) => `${site.url}${path === "/" ? "" : path}`
