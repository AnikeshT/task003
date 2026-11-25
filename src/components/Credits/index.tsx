import Image from "next/image"
import credits from "@/data/image-credits.json"

export function Credits() {
  const list = [...credits].sort((a, b) => a.file.localeCompare(b.file))
  return (
    <section className="bg-pearl-100 pb-24 md:pb-32">
      <div className="bg-wine-900 pt-[calc(var(--header-h)+4rem)] pb-20 text-center text-pearl-50">
        <h1 className="display-lg container-x">Photo &amp; Terroir Credits</h1>
      </div>
      <div className="container-x">
        <p className="lead mx-auto mt-16 max-w-2xl text-center text-ink-500">
          Photographs of Mediterranean vineyards, chalk cellars, and volcanic terroirs across Barcelona, Santorini, Sicily, and the Douro Valley. All images are curated from Unsplash and partner oenological estates under open editorial licences.
        </p>
        <ul className="mt-14 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <li key={c.file} className="flex min-w-0 gap-4 border-t border-border pt-5">
              <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-pearl-300">
                <Image src={`/images/${c.file}`} alt={`Photograph by ${c.author}`} fill sizes="80px" className="object-cover" />
              </div>
              <div className="min-w-0 label">
                <p className="break-words font-medium text-wine-900">{c.author}</p>
                <p className="mt-1 text-ink-500">{c.license}</p>
                <a href={c.source} target="_blank" rel="noopener noreferrer" className="link-underline mt-1 inline-block text-wine-600 font-semibold">
                  View license
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
