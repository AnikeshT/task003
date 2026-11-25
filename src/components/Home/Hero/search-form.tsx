"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FieldSelect } from "@/components/Shared/field-select"
import { durationOptions } from "@/data/tour-filters"
import { categories } from "@/data/tours"
import { Stop } from "@/components/Shared/stop"

const cityOptions = [
  { value: "all", label: "All wine regions" },
  { value: "barcelona", label: "Barcelona & Penedès" },
  { value: "santorini", label: "Santorini & Cyclades" },
  { value: "sicily", label: "Sicily & Mount Etna" },
  { value: "douro-valley", label: "Douro Valley" },
  { value: "porto", label: "Porto & Gaia" },
]
const categoryOptions = [
  { value: "all", label: "Any experience" },
  ...Object.entries(categories).map(([value, c]) => ({ value, label: c.name })),
]

export function SearchForm() {
  const router = useRouter()
  const [city, setCity] = useState("all")
  const [category, setCategory] = useState("all")
  const [duration, setDuration] = useState("all")

  const search = () => {
    const p = new URLSearchParams()
    if (city !== "all") p.set("city", city)
    if (category !== "all") p.set("category", category)
    if (duration !== "all") p.set("duration", duration)
    router.push(`/tours${p.size ? `?${p}` : ""}`)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        search()
      }}
      role="search"
      aria-label="Find a tour"
      className="relative z-5 text-ink-900 lg:absolute lg:inset-x-0 lg:bottom-8"
    >
      <div className="mx-auto max-w-[1440px] lg:px-12">
        <div className="grid bg-pearl-50 px-4 sm:grid-cols-3 sm:px-7 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-stretch lg:pr-5">
          <div className="border-b border-border py-4 sm:border-b-0 sm:py-6 sm:pr-6">
            <FieldSelect label="Where" value={city} onChange={setCity} options={cityOptions} />
            <Stop />
          </div>
          <div className="border-b border-border py-4 sm:border-b-0 sm:border-l sm:px-6 sm:py-6">
            <FieldSelect label="Experience" value={category} onChange={setCategory} options={categoryOptions} />
            <Stop />
          </div>
          <div className="py-4 sm:border-l sm:border-border sm:py-6 sm:pl-6 lg:pr-6">
            <FieldSelect label="Length" value={duration} onChange={setDuration} options={durationOptions} />
            <Stop />
          </div>
          <div className="pt-2 pb-5 sm:col-span-3 lg:col-span-1 lg:self-center lg:py-5">
            <button type="submit" className="btn btn-wine w-full lg:w-auto">
              Find tours
            </button>
            <Stop />
          </div>
        </div>
      </div>
    </form>
  )
}
