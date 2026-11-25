import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import type { Category } from "@/data/tours"
import type { Answers } from "@/lib/recommend"
import type { Key, Question } from "./questions"

/** Answers live in the URL: the browser's back button steps back, and a result can be shared. */
export function useAnswers(questions: Question[]) {
  const params = useSearchParams()

  const answers = useMemo(() => {
    const out: Record<string, unknown> = {}
    for (const q of questions) {
      const raw = params.get(q.key)
      if (raw === null) continue
      const known = raw.split(",").filter((v) => q.options.some((o) => o.value === v))
      if (q.many) {
        if (raw === "any" || known.length) out[q.key] = known as Category[]
      } else if (known.length) out[q.key] = known[0]
    }
    return out as Answers
  }, [params, questions])

  const go = (change: (p: URLSearchParams) => void) => {
    const p = new URLSearchParams(window.location.search)
    change(p)
    const query = p.toString().replaceAll("%2C", ",")
    window.history.pushState(null, "", query ? `?${query}` : window.location.pathname)
  }

  return {
    answers,
    current: questions.findIndex((q) => answers[q.key] === undefined),
    answer: (key: Key, value: string) => go((p) => p.set(key, value)),
    clear: (...keys: Key[]) => go((p) => keys.forEach((k) => p.delete(k))),
  }
}
