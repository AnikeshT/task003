"use client"

import { AnimatePresence, motion } from "motion/react"
import { X } from "lucide-react"
import { TourCard } from "@/components/Shared/tour-card"
import type { TourSummary } from "@/data/tours"
import { EASE } from "@/lib/motion"
import { Empty } from "./empty"
import { Filters } from "./filters"
import type { Filters as FilterValues } from "./use-filters"
import { Stop } from "@/components/Shared/stop"

type Props = FilterValues & { results: TourSummary[]; activeCount: number; clear: () => void }

export function ExplorerView({ results, activeCount, clear, ...filters }: Props) {
  return (
    <section className="bg-pearl-100 pt-10 pb-24 md:pt-14 md:pb-36">
      <div className="container-x">
        <h2 className="sr-only">All tours. </h2>
        <Filters {...filters} />

        <div className="flex items-center justify-between py-6 label text-ink-500">
          <p aria-live="polite">
            <span className="font-medium text-foreground">{results.length}</span> {results.length === 1 ? "experience" : "experiences"}
            <Stop />
          </p>
          {activeCount > 0 && (
            <button
              onClick={clear}
              className="inline-flex cursor-pointer items-center gap-1.5 hover:text-foreground"
            >
              <X className="size-4" /> Clear filters
            </button>
          )}
        </div>

        {results.length === 0 ? (
          <Empty onClear={clear} />
        ) : (
          <motion.ul layout className="grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {results.map((t, i) => (
                <motion.li
                  key={t.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: EASE, delay: Math.min(i, 6) * 0.04 }}
                >
                  <TourCard tour={t} priority={i < 3} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </div>
    </section>
  )
}
