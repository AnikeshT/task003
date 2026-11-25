import type { Metadata, Viewport } from "next"
import { Amiri, Jost, Marcellus } from "next/font/google"
import { Layout } from "@/components/Layout"
import { site } from "@/data/site"
import "./globals.css"

const marcellus = Marcellus({ variable: "--font-marcellus", subsets: ["latin"], weight: "400" })
const jost = Jost({ variable: "--font-jost", subsets: ["latin"] })
const amiri = Amiri({ variable: "--font-amiri", subsets: ["arabic"], weight: "400" })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Dunes And Sky: tours in Dubai and Abu Dhabi", template: "%s | Dunes And Sky" },
  description: site.description,
  applicationName: site.name,
}

export const viewport: Viewport = {
  themeColor: "#300a15",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${jost.variable} ${amiri.variable} antialiased`}
    >
      <body className="flex min-h-svh flex-col">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
