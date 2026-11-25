import type { ReactNode } from "react"
import { preload } from "react-dom"
import { ArchDefs } from "@/components/Shared/Ornament"
import { CurrencyProvider } from "@/components/Shared/Price/provider"
import { Analytics } from "./analytics"
import { SiteFooter } from "./Footer"
import { SiteHeader } from "./Header"
import { SmoothScroll } from "./smooth-scroll"

/** Chrome shared by every page. */
export function Layout({ children }: { children: ReactNode }) {
  preload("/api/currency", { as: "fetch", crossOrigin: "anonymous" })

  return (
    <CurrencyProvider>
      <noscript>
        <style>{".price { opacity: 1 !important }"}</style>
      </noscript>
      <ArchDefs />
      <SmoothScroll />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <Analytics />
    </CurrencyProvider>
  )
}
