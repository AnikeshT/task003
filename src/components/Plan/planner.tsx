"use client"

import { useEffect, useMemo, useRef } from "react"
import { motion, useReducedMotion } from "motion/react"
import { useMoney } from "@/components/Shared/Price/provider"
import type { TourSummary } from "@/data/tours"
import { EASE } from "@/lib/motion"
import { recommend, spendIn } from "@/lib/recommend"
import { Question } from "./question"
import { questionsFor } from "./questions"
import { Results } from "./results"
import { useAnswers } from "./use-answers"

export function Planner({ tours }: { tours: TourSummary[] }) {
  const currency = tours[0]?.currency ?? "EUR"
  const { money, rate } = useMoney()
  const prices = useMemo(() => ({ money, spend: spendIn(rate(currency)) }), [money, rate, currency])
  const questions = useMemo(() => questionsFor(currency, prices), [currency, prices])
  const { answers, current, answer, clear } = useAnswers(questions)
  const question = questions[current]
  const result = useMemo(() => (question ? null : recommend(tours, answers, prices)), [question, tours, answers, prices])
  const reduce = useReducedMotion()

  // After each answer, take keyboard and screen reader users to the next heading.
  const root = useRef<HTMLDivElement>(null)
  const step = question?.key ?? "results"
  const last = useRef(step)
  useEffect(() => {
    if (last.current === step) return
    last.current = step
    const el = root.current
    if (!el) return
    el.querySelector<HTMLElement>("#plan-heading")?.focus({ preventScroll: true })
    const top = el.getBoundingClientRect().top
    if (top >= 0 && top < window.innerHeight * 0.5) return
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -110 })
    else window.scrollTo({ top: window.scrollY + top - 110 })
  }, [step])

  return (
    <div ref={root}>
      <motion.div key={step} initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
        {question ? (
          <div className="mx-auto max-w-5xl border-t-2 border-wine-700 bg-pearl-50 p-5 pb-10 sm:p-8 md:p-12">
            <Question
              question={question}
              index={current}
              total={questions.length}
              onAnswer={(v) => answer(question.key, v)}
              onBack={current > 0 ? () => clear(questions[current - 1].key) : undefined}
            />
          </div>
        ) : (
          result && (
            <Results
              questions={questions}
              answers={answers}
              {...result}
              onEdit={(key) => clear(key)}
              onRestart={() => clear(...questions.map((q) => q.key))}
            />
          )
        )}
      </motion.div>
    </div>
  )
}
