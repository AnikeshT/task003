import { Home } from "@/components/Home"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "Portugal Wine and Food Tours | Vinho & Terroir",
  description:
    "Curated wine and food tours across Portugal: Douro Valley Quintas, historic Vila Nova de Gaia Port lodges, Alentejo amphora wines, and Lisbon petiscos.",
  path: "/",
})

export default function Page() {
  return <Home />
}
