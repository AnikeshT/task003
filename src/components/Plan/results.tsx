"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, Pencil } from "lucide-react"
import { TourCard } from "@/components/Shared/tour-card"
import { categories, cities, type City } from "@/data/tours"
import type { Answers, Pick } from "@/lib/recommend"
import type { Key, Question } from "./questions"

type ResultsProps = {
  questions: Question[]
  answers: Answers
  picks: Pick[]
  absent: string[]
  onEdit: (key: Key) => void
  onRestart: () => void
}

const said = (q: Question, a: Answers) => {
  const value = a[q.key]
  if (Array.isArray(value)) return value.length ? value.map((c) => categories[c].name).join(", ") : "Surprise me"
  return q.options.find((o) => o.value === value)?.label ?? ""
}

export function Results({ questions, answers, picks, absent, onEdit, onRestart }: ResultsProps) {
  const [best, ...rest] = picks
  if (!best) return null
  const full = rest.filter((p) => !p.misses.length)
  const close = rest.filter((p) => p.misses.length)
  const place = answers.where && (answers.where as City) in cities ? cities[answers.where as City]?.name ?? "Portugal" : "Portugal"

  return (
    <div>
      <h2 id="plan-heading" tabIndex={-1} className="display-lg text-center outline-none">
        {best.misses.length ? "The closest we have" : "Your best match"}
      </h2>
      {absent.length > 0 && (
        <p className="mt-4 text-center text-ink-500">
          We don&apos;t have {absent.map((c) => c.toLowerCase()).join(" or ")} tours in {place} yet.
        </p>
      )}

      <ul className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Your answers">
        {questions.map((q) => (
          <li key={q.key}>
            <button
              type="button"
              onClick={() => onEdit(q.key)}
              aria-label={`Change: ${q.title} ${said(q, answers)}`}
              className="inline-flex min-h-11 cursor-pointer items-center gap-2 border border-border bg-pearl-50 px-4 label transition-colors hover:border-wine-700"
            >
              {said(q, answers)} <Pencil className="size-3.5 text-ink-500" aria-hidden />
            </button>
          </li>
        ))}
        <li>
          <button type="button" onClick={onRestart} className="min-h-11 cursor-pointer px-3 label underline underline-offset-4">
            Start again
          </button>
        </li>
      </ul>

      <article className="mt-12 grid bg-pearl-50 md:grid-cols-2">
        <Link href={`/tours/${best.tour.slug}`} tabIndex={-1} aria-hidden className="relative block aspect-[4/3] bg-pearl-300 md:aspect-auto md:min-h-[30rem]">
          <Image quality={88} src={best.tour.image} alt={best.tour.title} fill sizes="(min-width: 768px) 60vw, 130vw" className="object-cover" />
        </Link>
        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
          <h3 className="display-md">{best.tour.title}</h3>
          <ul className="mt-6 grid gap-2.5">
            {best.reasons.map((r) => (
              <li key={r} className="flex gap-3">
                <Check className="mt-1 size-4 shrink-0 text-gold-700" aria-hidden /> {r}
              </li>
            ))}
          </ul>
          {best.misses.length > 0 && <p className="mt-5 text-ink-500">{best.misses.join(". ")}.</p>}
          <Link href={`/tours/${best.tour.slug}`} className="btn btn-wine mt-8 sm:self-start">
            See this tour
          </Link>
        </div>
      </article>

      <Group title="Also right for you" picks={full} />
      <Group title={full.length || !best.misses.length ? "Close to what you asked" : "Others to consider"} picks={close} />
    </div>
  )
}

function Group({ title, picks }: { title: string; picks: Pick[] }) {
  if (!picks.length) return null
  return (
    <section className="mt-20 md:mt-28">
      <h3 className="display-md text-center">{title}</h3>
      <ul className="mt-10 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map((p) => (
          <li key={p.tour.slug}>
            <TourCard tour={p.tour} />
            {p.misses.length > 0 && <p className="mt-1 text-center text-gold-700">{p.misses.join(". ")}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}
