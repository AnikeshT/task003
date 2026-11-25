"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Option, Question as QuestionType } from "./questions"

export function Question({
  question,
  index,
  total,
  onAnswer,
  onBack,
}: {
  question: QuestionType
  index: number
  total: number
  onAnswer: (value: string) => void
  onBack?: () => void
}) {
  const [chosen, setChosen] = useState<string[]>([])
  const { options, many } = question
  const toggle = (v: string) => setChosen((c) => (c.includes(v) ? c.filter((x) => x !== v) : [...c, v]))

  return (
    <div>
      <div className="flex min-h-11 items-center justify-between gap-4 label text-ink-500">
        {onBack ? (
          <button type="button" onClick={onBack} className="inline-flex min-h-11 cursor-pointer items-center gap-2 hover:text-ink-900">
            <ArrowLeft className="size-4" aria-hidden /> Back
          </button>
        ) : (
          <span />
        )}
        <span>
          {index + 1} of {total}
        </span>
      </div>
      <div className="mt-2 h-px bg-border" aria-hidden>
        <div className="h-px bg-wine-700 transition-[width] duration-700 ease-(--ease-out-expo)" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <h2 id="plan-heading" tabIndex={-1} className="display-md mt-9 text-center outline-none md:mt-12">
        {question.title}
      </h2>
      {question.hint && <p className="mt-2 text-center text-ink-500">{question.hint}</p>}

      <ul
        className={cn(
          "mt-8 grid gap-3 md:mt-10 md:gap-4",
          options.length === 5 && "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
          options.length === 4 && "sm:grid-cols-2",
          options.length === 3 && "sm:grid-cols-3"
        )}
      >
        {options.map((o) => (
          <li key={o.value} className={cn(options.length === 5 && "last:col-span-2 max-sm:last:[&_.photo]:aspect-[3/1] sm:last:col-span-1")}>
            <Choice
              option={o}
              on={many ? chosen.includes(o.value) : undefined}
              onClick={() => (many ? toggle(o.value) : onAnswer(o.value))}
            />
          </li>
        ))}
      </ul>

      {many && (
        <div className="mt-8 flex flex-col items-center gap-3">
          <button type="button" disabled={!chosen.length} onClick={() => onAnswer(chosen.join(","))} className="btn btn-wine disabled:cursor-not-allowed disabled:opacity-40">
            Continue
          </button>
          <button type="button" onClick={() => onAnswer("any")} className="min-h-11 cursor-pointer label underline underline-offset-4">
            Surprise me
          </button>
        </div>
      )}
    </div>
  )
}

function Choice({ option: o, on, onClick }: { option: Option; on?: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={cn(
        "group flex size-full cursor-pointer border text-left transition-colors duration-300 hover:border-wine-700",
        o.image ? "flex-col" : "min-h-24 flex-col justify-center px-6 py-5",
        on ? "border-wine-700 bg-wine-700 text-pearl-50" : "border-border bg-pearl-100/60"
      )}
    >
      {o.image && (
        <span className="photo relative block aspect-[3/2] w-full overflow-hidden bg-pearl-300">
          <Image src={o.image} alt={o.imageAlt ?? o.label} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover transition-transform duration-1000 ease-(--ease-out-expo) group-hover:scale-[1.04]" />
          {on && (
            <span className="absolute top-2 right-2 grid size-8 place-items-center bg-wine-700 text-pearl-50">
              <Check className="size-4" aria-hidden />
            </span>
          )}
        </span>
      )}
      <span className={cn("block", o.image && "px-4 py-3.5")}>
        <span className="block font-serif text-xl">{o.label}</span>
        {o.note && <span className={cn("label mt-0.5 block", on ? "text-pearl-100/80" : "text-ink-500")}>{o.note}</span>}
      </span>
    </button>
  )
}
