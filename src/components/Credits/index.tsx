import Image from "next/image"
import credits from "@/data/image-credits.json"

const FILM_SOURCES = [
  { label: "Dubai at sunrise", href: "https://www.pexels.com/video/35972202/" },
  { label: "the Dubai dunes", href: "https://www.pexels.com/video/18897114/" },
  { label: "the Abu Dhabi skyline", href: "https://www.pexels.com/video/41090961/" },
  { label: "Burj Lake", href: "https://www.pexels.com/video/4348383/" },
]

export function Credits() {
  const list = [...credits].sort((a, b) => a.file.localeCompare(b.file))
  return (
    <section className="bg-pearl-100 pb-24 md:pb-32">
      <div className="bg-wine-900 pt-[calc(var(--header-h)+4rem)] pb-20 text-center text-pearl-50">
        <h1 className="display-lg container-x">Photo credits</h1>
      </div>
      <div className="container-x">
        <p className="lead mx-auto mt-16 max-w-2xl text-center text-ink-500">
          Photographs of Dubai and Abu Dhabi are sourced from Wikimedia Commons under the licences listed below. Thank you to
          every photographer whose work appears here. Photos on tour pages are supplied by the operators. The opening film uses footage from{" "}
          {FILM_SOURCES.map((source, i) => (
            <span key={source.href}>
              {i > 0 && (i === FILM_SOURCES.length - 1 ? " and " : ", ")}
              <a href={source.href} target="_blank" rel="noopener noreferrer" className="link-underline text-wine-700">
                {source.label}
              </a>
            </span>
          ))}
          , all on Pexels. Prices are converted with exchange rates from{" "}
          <a href="https://frankfurter.dev" target="_blank" rel="noopener noreferrer" className="link-underline text-wine-700">
            Frankfurter
          </a>
          .
        </p>
        <ul className="mt-14 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <li key={c.file} className="flex min-w-0 gap-4 border-t border-border pt-5">
              <div className="relative size-20 shrink-0 overflow-hidden bg-pearl-300">
                <Image src={`/images/${c.file}`} alt={`Photograph by ${c.author || "an unknown author"}`} fill sizes="80px" className="object-cover" />
              </div>
              <div className="min-w-0 label">
                <p className="break-words font-medium">{c.author || "Unknown author"}</p>
                <p className="mt-1 text-ink-500">{c.license}</p>
                <a href={c.source} target="_blank" rel="noopener noreferrer" className="link-underline mt-1 inline-block text-wine-700">
                  View source
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
