"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { formatPrice } from "@/data/tours"
import type { VisitorCurrency } from "@/lib/currency"

type Visitor = VisitorCurrency | null

/** `undefined` while we ask; `null` when prices stay in the tour's own currency. */
const CurrencyContext = createContext<Visitor | undefined>(undefined)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [visitor, setVisitor] = useState<Visitor | undefined>(undefined)

  useEffect(() => {
    fetch("/api/currency", { signal: AbortSignal.timeout(6000) })
      .then((res) => (res.ok ? (res.json() as Promise<Visitor>) : null))
      .catch(() => null)
      .then(setVisitor)
  }, [])

  return <CurrencyContext value={visitor}>{children}</CurrencyContext>
}

/** Prices in the visitor's currency. */
export function useMoney() {
  const visitor = useContext(CurrencyContext)

  return useMemo(() => {
    /** How much one unit of `from` is worth to the visitor; 1 when prices stay as they are. */
    const rate = (from: string) => visitor?.rates[from] ?? 1
    const converts = (from: string) => Boolean(visitor && visitor.currency !== from && visitor.rates[from])
    return {
      ready: visitor !== undefined,
      code: visitor?.currency,
      date: visitor?.date,
      rate,
      converts,
      money: (amount: number, from: string) =>
        converts(from) ? formatPrice(amount * rate(from), visitor!.currency) : formatPrice(amount, from),
    }
  }, [visitor])
}
