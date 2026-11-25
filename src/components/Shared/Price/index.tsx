"use client"

import { formatPrice } from "@/data/tours"
import { cn } from "@/lib/utils"
import { useMoney } from "./provider"

/** A tour price in the visitor's currency. Holds its place, unseen, until we know which one that is. */
export function Price({ amount, currency }: { amount: number; currency: string }) {
  const { ready, money } = useMoney()
  return (
    <span className={cn("price whitespace-nowrap transition-opacity duration-500", !ready && "opacity-0")}>
      {money(amount, currency)}
    </span>
  )
}

/** Beside a converted price: the tour's own price, and the rate we used. */
export function PriceNote({ amount, currency, className }: { amount: number; currency: string; className?: string }) {
  const { converts, rate, code, date } = useMoney()
  if (!converts(currency) || !date) return null
  const unit = rate(currency).toLocaleString("en-US", { maximumSignificantDigits: 5 })
  const day = new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "UTC" })
  return (
    <p className={className}>
      This tour is priced at {formatPrice(amount, currency)}. Converted on {day} at 1 {currency} = {unit} {code}; your bank&apos;s
      rate may differ slightly.
    </p>
  )
}
