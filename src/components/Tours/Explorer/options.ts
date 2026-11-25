import type { City } from "@/data/tours"

export const cityTabs: { value: "all" | City; label: string }[] = [
  { value: "all", label: "All Territories" },
  { value: "douro-valley", label: "Douro Valley" },
  { value: "porto", label: "Porto & Gaia" },
  { value: "alentejo", label: "Alentejo" },
  { value: "lisbon", label: "Lisbon & Sintra" },
  { value: "minho", label: "Minho & Vinho Verde" },
]

export const sortOptions = [
  { value: "popular", label: "Most reviewed" },
  { value: "rating", label: "Highest rated" },
  { value: "price-asc", label: "Price, low to high" },
  { value: "price-desc", label: "Price, high to low" },
]
