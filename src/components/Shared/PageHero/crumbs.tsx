import Link from "next/link"
import { JsonLd } from "@/components/Shared/json-ld"
import { breadcrumbs, graph } from "@/lib/seo/schema"
import { Stop } from "@/components/Shared/stop"

export type Crumb = { href: string; label: string }

export function Crumbs({ items }: { items: Crumb[] }) {
  if (items.length === 0) return null
  return (
    <nav aria-label="Breadcrumb">
      <JsonLd data={graph(breadcrumbs(items))} />
      <ol className="label flex flex-wrap items-center justify-center gap-x-2 text-pearl-100/75">
        {items.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            <Link href={c.href} className="link-underline py-1 hover:text-pearl-50">
              {c.label}
            </Link>{" "}
          </li>
        ))}
      </ol>
      <Stop />
    </nav>
  )
}
