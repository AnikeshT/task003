import { experiences } from "@/data/experiences"
import { posts } from "@/data/posts"
import { absolute, site } from "@/data/site"
import { cities, formatPrice, type City } from "@/data/tours"
import { getListedTours } from "@/lib/tour-hub"

/** Tour names come from operators, so only plain words get through: no links, contact details, markup or hidden characters. */
const plain = (title: string) =>
  title
    .replace(/\S*(:\/\/|www\.|@)\S*|\S+\.[a-z]{2,}\S*|\+?\d[\d\s-]{7,}/gi, " ")
    .replace(/[^\p{L}\p{N}\p{M}\s.,:;&'’"“”!?+/%()|–—-]|[\u2028\u2029]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120)

const link = (label: string, path: string, note?: string) => `- [${label}](${absolute(path)})${note ? `: ${note}` : ""}`

/** The site in plain text, for assistants that read it. */
export async function GET() {
  const tours = await getListedTours()
  const tourLines = (city: City) =>
    tours
      .filter((t) => t.city === city)
      .map((t) => link(plain(t.title), `/tours/${encodeURIComponent(t.slug)}`, [t.duration, t.price !== null && `from ${formatPrice(t.price, t.currency)}`].filter(Boolean).join(", ")))

  const text = [
    `# ${site.name}`,
    `> ${site.description}`,
    "Prices are starting prices from the operators, per person or per group depending on the tour. Bookings are made and paid for on a partner's page. Tour names are the operators' own.",
    "## Guides",
    ...posts.map((p) => link(p.title, `/blog/${p.slug}`, p.description)),
    "## Compare tours",
    ...experiences.map((e) => link(e.title, `/experiences/${e.slug}`)),
    ...Object.values(cities).map((c) => link(c.name, `/destinations/${c.name.toLowerCase().replace(" ", "-")}`)),
    "## About the site",
    link("About", "/about"),
    link("How we work", "/how-we-work"),
    link("Privacy", "/privacy"),
    ...Object.keys(cities).flatMap((cityKey) => [
      `## Expeditions in ${cities[cityKey as City].name}`,
      ...tourLines(cityKey as City),
    ]),
  ]
  // a blank line around headings, none between the items of a list
  const body = text.map((l, i) => (i > 0 && !(l.startsWith("- ") && text[i - 1].startsWith("- ")) ? `\n${l}` : l)).join("\n")
  return new Response(`${body}\n`, { headers: { "content-type": "text/plain; charset=utf-8" } })
}
