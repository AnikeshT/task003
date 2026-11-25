import { motion } from "motion/react"
import { FieldSelect } from "@/components/Shared/field-select"
import { durationOptions } from "@/data/tour-filters"
import { categories, type Category } from "@/data/tours"
import { EASE } from "@/lib/motion"
import { cn } from "@/lib/utils"
import { cityTabs, sortOptions } from "./options"
import type { Filters as FilterValues } from "./use-filters"
import { Stop } from "@/components/Shared/stop"

export function Filters({ city, category, duration, sort, set }: FilterValues) {
  return (
    <div className="border-b border-border pb-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div role="tablist" aria-label="City" className="flex gap-8">
          {cityTabs.map((t) => (
            <button
              key={t.value}
              role="tab"
              aria-selected={city === t.value}
              onClick={() => set("city", t.value)}
              className={cn(
                "relative min-h-12 cursor-pointer font-serif text-xl transition-colors sm:text-2xl",
                city === t.value ? "text-wine-700" : "text-ink-500 hover:text-ink-900"
              )}
            >
              {t.label}{" "}
              {city === t.value && (
                <motion.span
                  layoutId="city-line"
                  className="absolute inset-x-0 bottom-0 h-px bg-wine-700"
                  transition={{ duration: 0.6, ease: EASE }}
                />
              )}
            </button>
          ))}
        </div>
        <Stop />

        <div className="grid grid-cols-2 gap-3 sm:flex">
          <div className="border border-border bg-pearl-50 px-5 py-3 sm:w-56">
            <FieldSelect label="Length" value={duration} onChange={(v) => set("duration", v)} options={durationOptions} />
            <Stop />
          </div>
          <div className="border border-border bg-pearl-50 px-5 py-3 sm:w-56">
            <FieldSelect label="Sort by" value={sort} onChange={(v) => set("sort", v)} options={sortOptions} />
            <Stop />
          </div>
        </div>
      </div>

      <div className="no-scrollbar -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
        {(["all", ...Object.keys(categories)] as ("all" | Category)[]).map((c) => {
          const active = category === c
          return (
            <button
              key={c}
              onClick={() => set("category", c)}
              aria-pressed={active}
              className={cn(
                "min-h-11 shrink-0 cursor-pointer border px-5 transition-colors duration-300",
                active ? "border-wine-700 bg-wine-700 text-pearl-50" : "border-border text-ink-700 hover:border-wine-700"
              )}
            >
              {c === "all" ? "All experiences" : categories[c].name}{" "}
            </button>
          )
        })}
      </div>
      <Stop />
    </div>
  )
}
