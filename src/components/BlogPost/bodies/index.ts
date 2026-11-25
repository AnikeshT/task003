import type { ReactNode } from "react"
import { DouroHarvest } from "./douro-harvest"
import { PortWineGuide } from "./port-wine-guide"

/** The words of each guide, by slug. */
export const bodies: Record<string, () => ReactNode> = {
  "douro-harvest-season-guide": DouroHarvest,
  "port-wine-vintage-guide": PortWineGuide,
}
