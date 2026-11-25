import { Credits } from "@/components/Credits"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "Photo & Terroir Credits | Terroir & Cru",
  description:
    "Photographers and oenological estates whose visual work appears on Terroir & Cru.",
  path: "/credits",
  index: false,
})

export default function Page() {
  return <Credits />
}
