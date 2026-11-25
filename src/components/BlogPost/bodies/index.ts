import type { ReactNode } from "react"
import { BarcelonaGuide } from "./barcelona-guide"
import { DouroHarvest } from "./douro-harvest"
import { PortWineGuide } from "./port-wine-guide"
import { SantoriniGuide } from "./santorini-guide"

/** The words of each guide, by slug. */
export const bodies: Record<string, () => ReactNode> = {
  "barcelona-wine-tapas-guide": BarcelonaGuide,
  "santorini-volcanic-terroir-guide": SantoriniGuide,
  "douro-harvest-season-guide": DouroHarvest,
  "port-wine-vintage-guide": PortWineGuide,
}
