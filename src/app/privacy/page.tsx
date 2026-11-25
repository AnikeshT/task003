import { Privacy } from "@/components/Privacy"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "Privacy: What We Record | Dunes And Sky",
  description: "What Dunes And Sky records when you visit, what it doesn't, and which other websites your browser is sent to when you book.",
  path: "/privacy",
})

export default function Page() {
  return <Privacy />
}
