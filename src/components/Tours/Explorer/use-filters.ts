import { useMemo } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import type { Category, City, TourSummary } from "@/data/tours"

type Values = { city: "all" | City; category: "all" | Category; duration: string; sort: string }
export type Filters = Values & { set: (key: string, value: string) => void }

export const NO_FILTERS: Values = { city: "all", category: "all", duration: "all", sort: "popular" }

export function filterTours(tours: TourSummary[], { city, category, duration, sort }: Values) {
  const list = tours.filter((t) => {
    if (city !== "all" && t.city !== city) return false
    if (category !== "all" && t.category !== category) return false
    if (duration === "half" && t.hours > 5) return false
    if (duration === "full" && (t.hours <= 5 || t.hours > 12)) return false
    if (duration === "overnight" && t.hours <= 12) return false
    return true
  })
  return list.sort((a, b) => {
    if (sort === "rating") return (b.rating ?? 0) - (a.rating ?? 0) || b.reviews - a.reviews
    if (sort === "price-asc") return (a.price ?? Infinity) - (b.price ?? Infinity)
    if (sort === "price-desc") return (b.price ?? 0) - (a.price ?? 0)
    return b.reviews - a.reviews
  })
}

/** Filter state lives in the URL, so every view can be linked to. */
export function useFilters(tours: TourSummary[]) {
  const params = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const city = (params.get("city") ?? "all") as Values["city"]
  const category = (params.get("category") ?? "all") as Values["category"]
  const duration = params.get("duration") ?? "all"
  const sort = params.get("sort") ?? "popular"

  const set = (key: string, value: string) => {
    const p = new URLSearchParams(params.toString())
    if (value === "all" || (key === "sort" && value === "popular")) p.delete(key)
    else p.set(key, value)
    router.replace(`${pathname}${p.size ? `?${p}` : ""}`, { scroll: false })
  }

  const results = useMemo(() => filterTours(tours, { city, category, duration, sort }), [tours, city, category, duration, sort])

  const activeCount = [city !== "all", category !== "all", duration !== "all"].filter(Boolean).length
  const clear = () => router.replace(pathname, { scroll: false })

  return { city, category, duration, sort, set, clear, results, activeCount }
}
