import { CtaBand } from "@/components/Shared/cta-band"
import { Faq } from "@/components/Shared/faq"
import { JsonLd } from "@/components/Shared/json-ld"
import { PageHeroFull } from "@/components/Shared/PageHero/full"
import { cities, type City, type TourSummary } from "@/data/tours"
import { destination, graph, tourList } from "@/lib/seo/schema"
import { getTourList, proof } from "@/lib/tour-hub"
import { cityQuestions } from "./questions"
import { Guide } from "./guide"
import { NextDestination } from "./next-destination"
import { TourList } from "./tour-list"
import { Stop } from "@/components/Shared/stop"

/** Day trips that start in the city but spend the day in another emirate. */
const isFar = (t: TourSummary) => /fujairah|hatta|al ain/i.test(t.title)

export async function Destination({ city }: { city: City }) {
  const c = cities[city]
  const list = (await getTourList()).filter((t) => t.city === city).sort((a, b) => Number(isFar(a)) - Number(isFar(b)) || proof(b) - proof(a))
  const facts = [...c.facts, { label: "Experiences", value: String(list.length) }]

  return (
    <>
      <JsonLd
        data={graph(
          destination({ path: `/destinations/${city}`, name: c.name, description: c.intro, image: c.image }),
          tourList(list.filter((t) => t.sameAs === null), `Tours in ${c.name}`)
        )}
      />
      <PageHeroFull
        image={c.image}
        alt={c.imageAlt}
        subtitle={c.portuguese}
        title={c.name}
        crumbs={[
          { href: "/", label: "Home" },
          { href: `/destinations/${city}`, label: c.name },
        ]}
      >
        <p className="lead mt-3 text-pearl-100/85">{c.tagline}</p>
        <Stop />
        <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-pearl-50/25 pt-6">
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col-reverse">
              <dt className="label text-pearl-100/75">{f.label} </dt>
              <dd className="font-serif text-xl md:text-3xl">{f.value}<Stop /></dd>
            </div>
          ))}
        </dl>
      </PageHeroFull>
      <Guide city={city} />
      <TourList city={city} list={list} />
      <Faq title={`Questions about ${c.name}`} items={cityQuestions[city]} />
      <NextDestination city={city} />
      <CtaBand />
    </>
  )
}
