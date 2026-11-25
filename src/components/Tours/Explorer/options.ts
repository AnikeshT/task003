import type { City } from "@/data/tours"

export const cityTabs: { value: "all" | City; label: string }[] = [
  { value: "all", label: "All Terroirs" },
  { value: "barcelona", label: "Barcelona & Penedès" },
  { value: "santorini", label: "Santorini & Cyclades" },
  { value: "sicily", label: "Sicily & Mount Etna" },
  { value: "douro-valley", label: "Douro Valley" },
  { value: "porto", label: "Porto & Gaia" },
]

export const sortOptions = [
  { value: "popular", label: "Most reviewed" },
  { value: "rating", label: "Highest rated" },
  { value: "price-asc", label: "Price, low to high" },
  { value: "price-desc", label: "Price, high to low" },
]
