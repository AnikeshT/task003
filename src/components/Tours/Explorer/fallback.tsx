"use client"

import type { TourSummary } from "@/data/tours"
import { filterTours, NO_FILTERS } from "./use-filters"
import { ExplorerView } from "./view"

const wait = () => {}

/** Every tour, as the server sends it, until the filters in the address are read. */
export function TourExplorerFallback({ tours }: { tours: TourSummary[] }) {
  return <ExplorerView {...NO_FILTERS} set={wait} clear={wait} activeCount={0} results={filterTours(tours, NO_FILTERS)} />
}
