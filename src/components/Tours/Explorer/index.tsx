"use client"

import type { TourSummary } from "@/data/tours"
import { useFilters } from "./use-filters"
import { ExplorerView } from "./view"

export function TourExplorer({ tours }: { tours: TourSummary[] }) {
  return <ExplorerView {...useFilters(tours)} />
}
