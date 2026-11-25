import { HowWeWork } from "@/components/HowWeWork"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "How We Curate Tours & Terroirs | Terroir & Cru",
  description:
    "How our vineyard expeditions, prices, and sommelier ratings are selected, vetted, and presented with transparent pricing.",
  path: "/how-we-work",
})

export default function Page() {
  return <HowWeWork />
}
