import { Privacy } from "@/components/Privacy"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "Privacy Policy | Terroir & Cru",
  description: "What Terroir & Cru records when you visit, guest protection, and secure booking policies.",
  path: "/privacy",
})

export default function Page() {
  return <Privacy />
}
