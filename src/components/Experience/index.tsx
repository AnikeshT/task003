import { CtaBand } from "@/components/Shared/cta-band"
import { Faq } from "@/components/Shared/faq"
import { GuideLinks } from "@/components/Shared/guide-links"
import { JsonLd } from "@/components/Shared/json-ld"
import { PageHero } from "@/components/Shared/PageHero"
import { Price } from "@/components/Shared/Price"
import { Prose } from "@/components/Shared/prose"
import { SectionHeading } from "@/components/Shared/section-heading"
import { TourCard } from "@/components/Shared/tour-card"
import { TourTable } from "@/components/Shared/tour-table"
import type { Experience as ExperienceData } from "@/data/experiences"
import { collection, graph } from "@/lib/seo/schema"
import { getListedTours, proof, toSummary } from "@/lib/tour-hub"

export async function Experience({ experience: e }: { experience: ExperienceData }) {
  const tours = (await getListedTours()).filter(e.match).sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity))
  const priced = tours.filter((t) => t.price !== null)
  const cards = tours.map(toSummary).sort((a, b) => proof(b) - proof(a)).slice(0, 6)
  const [low, mid, high] = [priced[0], priced[Math.floor((priced.length - 1) / 2)], priced[priced.length - 1]]

  return (
    <>
      <JsonLd data={graph(collection({ path: `/experiences/${e.slug}`, name: e.title, description: e.description, tours }))} />
      <PageHero
        image={e.image}
        alt={e.imageAlt}
        title={e.title}
        intro={e.intro}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/tours", label: "Tours" },
          { href: `/experiences/${e.slug}`, label: e.title },
        ]}
      />

      <section className="bg-pearl-100 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="container-x">
          <Prose>
            {low && (
              <p className="lead">
                We list {tours.length} {e.noun}. Starting prices run from <Price amount={low.price!} currency={low.currency} /> to{" "}
                <Price amount={high.price!} currency={high.currency} />, and half of them start at{" "}
                <Price amount={mid.price!} currency={mid.currency} /> or less.
              </p>
            )}
            {e.sections.map((s) => (
              <section key={s.title} className="mt-12">
                <h2>{s.title}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
            {e.sources.length > 0 && (
              <p className="label text-ink-500">
                Sources:{" "}
                {e.sources.map((s, i) => (
                  <span key={s.href}>
                    {i > 0 && ", "}
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </span>
                ))}
                .
              </p>
            )}
          </Prose>
        </div>
      </section>

      <section className="bg-pearl-50 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading title="Compared, lowest price first">
            Starting prices can be per person, per group or per car. The booking page says which.
          </SectionHeading>
          <div className="mt-14">
            <TourTable tours={tours} label={e.title} />
          </div>
        </div>
      </section>

      <section className="bg-pearl-100 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading title="Most reviewed" />
          <div className="mt-14 grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((t) => (
              <TourCard key={t.slug} tour={t} />
            ))}
          </div>
        </div>
      </section>

      <Faq title="Before you book" items={e.faqs} />
      <GuideLinks slugs={e.guides} />
      <CtaBand />
    </>
  )
}
