import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function ButtonLink({
  href,
  children,
  variant = "wine",
  className,
}: {
  href: string
  children: ReactNode
  variant?: "wine" | "gold" | "line"
  className?: string
}) {
  return (
    <Link href={href} className={cn("btn", `btn-${variant}`, className)}>
      {children}
    </Link>
  )
}
