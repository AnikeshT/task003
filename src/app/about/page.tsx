import { About } from "@/components/About"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "About Terroir & Cru | Mediterranean Wine & Gourmet Voyages",
  description:
    "Terroir & Cru curates masterclass wine tastings, historic vineyard cellars, and Michelin-starred culinary odysseys across Barcelona, Santorini, Sicily, and the Mediterranean.",
  path: "/about",
})

export default function Page() {
  return <About />
}
