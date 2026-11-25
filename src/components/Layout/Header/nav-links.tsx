import Link from "next/link"
import { cn } from "@/lib/utils"

export function NavLinks({ items, pathname }: { items: readonly { href: string; label: string }[]; pathname: string }) {
  return items.map((item) => {
    const active = pathname.startsWith(item.href)
    return (
      <Link
        key={item.href}
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={cn("link-underline py-2", active && "[background-size:100%_1px]")}
      >
        {item.label}
      </Link>
    )
  })
}
