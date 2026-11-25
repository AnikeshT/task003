import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Jost, Marcellus } from "next/font/google"
import { Layout } from "@/components/Layout"
import { site } from "@/data/site"
import "./globals.css"

const marcellus = Marcellus({ variable: "--font-marcellus", subsets: ["latin"], weight: "400" })
const jost = Jost({ variable: "--font-jost", subsets: ["latin"] })
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: Mediterranean Wine & Gourmet Tours`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
}

export const viewport: Viewport = {
  themeColor: "#2A0712",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${jost.variable} ${cormorant.variable} antialiased`}
    >
      <body className="flex min-h-svh flex-col">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
