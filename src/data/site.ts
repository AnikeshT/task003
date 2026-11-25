export const site = {
  name: "Vinho & Terroir",
  url: "https://portugalwineandfood.com",
  /** What the site is, in one sentence. */
  description:
    "Vinho & Terroir is an independent curation of private Quintas, historic Port lodges, and culinary terroir expeditions across Portugal.",
  email: "curators@portugalwineandfood.com" as string | null,
} as const

export const absolute = (path: string) => `${site.url}${path === "/" ? "" : path}`
