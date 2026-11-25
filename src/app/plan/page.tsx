import { Plan } from "@/components/Plan"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "Plan Your Mediterranean Wine & Food Odyssey | Terroir & Cru",
  description:
    "Answer five short questions about your wine preferences, pace, and regions to discover your ideal Mediterranean cellar expeditions.",
  path: "/plan",
})

export default function Page() {
  return <Plan />
}
