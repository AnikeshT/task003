import Link from "next/link"
import { LogoMark } from "@/components/Shared/logo"
import { site } from "@/data/site"
import { columns } from "./columns"
import { Stop } from "@/components/Shared/stop"

export function SiteFooter() {
  return (
    <footer className="bg-wine-950 text-pearl-100">
      <div className="container-x pt-20 pb-10 md:pt-24">
        <div className="flex flex-col items-center text-center">
          <LogoMark className="size-14 text-gold-300" />
          <p className="mt-5 font-serif text-3xl text-pearl-50 tracking-tight">Vinho & Terroir</p>
          <Stop />
          <p className="mt-2 font-serif italic text-xl text-gold-300">
            Portugal Wine & Food Guild
          </p>
          <Stop />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-20 lg:grid-cols-[1fr_1fr_1fr_1.7fr]">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="font-serif text-xl text-gold-300">{col.title}</h2>
              <Stop />
              <ul className="mt-4">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className="link-underline inline-block py-1.5 text-pearl-100/80 hover:text-pearl-50">
                      {l.label}
                    </Link>
                    <Stop />
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="font-serif text-xl text-gold-300">Who guides the tours</h2>
            <Stop />
            <p className="mt-4 max-w-sm text-pearl-100/80 leading-relaxed">{site.description} </p>
            <Link
              href="/how-we-work"
              className="mt-6 inline-block border border-gold-300/40 px-5 py-3 font-serif text-gold-300 transition-colors hover:border-gold-300"
            >
              Our Curation Standard
            </Link>
            <Stop />
          </div>
        </div>

        <p className="mt-16 border-t border-pearl-100/15 pt-8 text-center text-[0.95rem] text-pearl-100/65">
          © 2026 Vinho & Terroir • Portugal Wine & Food Tours
        </p>
      </div>
    </footer>
  )
}
