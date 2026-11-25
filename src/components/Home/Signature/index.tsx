import Image from "next/image"
import Link from "next/link"
import { getFeaturedTours } from "@/lib/tour-hub"
import { Price } from "@/components/Shared/Price"
import { Stop } from "@/components/Shared/stop"
import { Star } from "@/components/Shared/Ornament"
import { ArrowRight, Clock, Users, ShieldCheck, MapPin, Wine, Utensils } from "lucide-react"

export async function Signature() {
  const tours = await getFeaturedTours()
  const barcelona = tours.find((t) => t.id === "barcelona-wine-gourmet-food-tour") || tours[0]
  const santorini = tours.find((t) => t.id === "private-santorini-wine-tasting-tour") || tours[1]
  const sicily = tours.find((t) => t.id === "sicily-vineyard-escape") || tours[2]
  const others = tours.filter(
    (t) =>
      t.id !== "barcelona-wine-gourmet-food-tour" &&
      t.id !== "private-santorini-wine-tasting-tour" &&
      t.id !== "sicily-vineyard-escape"
  )

  return (
    <section className="bg-pearl-100 py-24 md:py-36">
      <div className="container-x">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <span className="flex items-center gap-2 font-sans text-xs tracking-[0.25em] text-wine-600 uppercase font-semibold">
            <Star className="size-3 text-gold-500" />
            Curated Terroir Portfolio
            <Star className="size-3 text-gold-500" />
          </span>
          <h2 className="display-lg mt-3 text-wine-900">
            The Flagship Terroir Trilogy
          </h2>
          <Stop />
          <p className="lead mt-4 max-w-2xl text-ink-500">
            Three iconic Mediterranean wine &amp; culinary masterclasses, negotiated directly with certified master sommeliers and multi-generational family estates.
          </p>
        </div>

        {/* Masterclass Bento Grid Showcase */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Main Hero Card: Barcelona Wine & Gourmet Food Tour (7 Cols) */}
          {barcelona && (
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-pearl-300/80 bg-pearl-50 shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] lg:col-span-7">
              {/* Media Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]">
                <Image
                  src={barcelona.image}
                  alt={barcelona.title}
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-(--ease-out-expo) group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-wine-950/80 via-wine-950/20 to-transparent" />
                
                {/* Floating Sommelier Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-pearl-50/25 bg-wine-950/75 px-3.5 py-1 text-xs text-pearl-50 backdrop-blur-md">
                  <Wine className="size-3.5 text-gold-300" />
                  <span className="font-sans font-medium tracking-wide">Grand Cru &amp; Tapas</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-pearl-50">
                  <span className="flex items-center gap-1.5 text-xs text-gold-300 font-sans tracking-wide">
                    <MapPin className="size-3.5" />
                    Barcelona &amp; Penedès, Spain
                  </span>
                  <span className="rounded-full bg-pearl-50/90 px-2.5 py-0.5 text-xs font-semibold text-wine-900">
                    ★ 4.98 (184 reviews)
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-wine-900 group-hover:text-wine-600 transition-colors">
                    {barcelona.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-500">
                    Descend into subterranean chalk cellars in Penedès where Gran Reserva Cavas mature for 48 months in silent Romanesque vaults, followed by a sommelier tapas trail through the Gothic Quarter.
                  </p>

                  {/* Highlights list */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-ink-700">
                    <div className="flex items-center gap-2">
                      <Utensils className="size-3.5 text-wine-600" />
                      <span>5 Gourmet Tapas &amp; Jamón Stops</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wine className="size-3.5 text-wine-600" />
                      <span>8 Private Cava &amp; Priorat Pours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-3.5 text-wine-600" />
                      <span>{barcelona.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="size-3.5 text-wine-600" />
                      <span>Private Mercedes Chauffeur</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-ink-500 block">Total per person</span>
                    {barcelona.price && (
                      <span className="font-serif text-2xl font-bold text-wine-900">
                        <Price amount={barcelona.price} currency={barcelona.currency} />
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/tours/${barcelona.slug}`}
                    className="btn btn-wine inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold tracking-wider uppercase transition-all duration-300"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Right Column: Santorini & Sicily Stack (5 Cols) */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            {/* Card 2: Private Santorini Wine Tasting Tour */}
            {santorini && (
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-pearl-300/80 bg-pearl-50 shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={santorini.image}
                    alt={santorini.title}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] ease-(--ease-out-expo) group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-wine-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-pearl-50">
                    <span className="flex items-center gap-1.5 text-xs text-gold-300 font-sans tracking-wide">
                      <MapPin className="size-3.5" />
                      Santorini Caldera, Greece
                    </span>
                    <span className="rounded-full bg-pearl-50/90 px-2 py-0.5 text-[11px] font-semibold text-wine-900">
                      ★ 4.99 (247)
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-wine-900 group-hover:text-wine-600 transition-colors">
                    {santorini.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink-500 line-clamp-2">
                    Walk through 400-year-old un-grafted basket vines on volcanic pumice, with a sunset terrace tasting of 20-year Vinsanto.
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-ink-500 block">From</span>
                      {santorini.price && (
                        <span className="font-serif text-xl font-bold text-wine-900">
                          <Price amount={santorini.price} currency={santorini.currency} />
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/tours/${santorini.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-wine-700 hover:text-wine-600 transition-colors"
                    >
                      <span>Reserve Tour</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Card 3: Sicily Vineyard Escape */}
            {sicily && (
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-pearl-300/80 bg-pearl-50 shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={sicily.image}
                    alt={sicily.title}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] ease-(--ease-out-expo) group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-wine-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-pearl-50">
                    <span className="flex items-center gap-1.5 text-xs text-gold-300 font-sans tracking-wide">
                      <MapPin className="size-3.5" />
                      Mount Etna, Sicily
                    </span>
                    <span className="rounded-full bg-pearl-50/90 px-2 py-0.5 text-[11px] font-semibold text-wine-900">
                      ★ 4.97 (168)
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-wine-900 group-hover:text-wine-600 transition-colors">
                    {sicily.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink-500 line-clamp-2">
                    Europe&apos;s highest active volcano. Taste high-altitude Nerello Mascalese from basalt cantinas paired with a 4-course Sicilian feast.
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-ink-500 block">From</span>
                      {sicily.price && (
                        <span className="font-serif text-xl font-bold text-wine-900">
                          <Price amount={sicily.price} currency={sicily.currency} />
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/tours/${sicily.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-wine-700 hover:text-wine-600 transition-colors"
                    >
                      <span>Reserve Tour</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Secondary Supporting Terroir Rail: Douro & Porto */}
        {others.length > 0 && (
          <div className="mt-14 border-t border-border pt-10">
            <span className="text-xs uppercase tracking-widest text-ink-500 font-semibold block mb-6">
              Also Curated in the Collection:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tours/${t.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border/80 bg-pearl-50 p-4 transition-all duration-300 hover:border-gold-500/50 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={t.image}
                        alt={t.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-base text-wine-900 group-hover:text-wine-600 transition-colors line-clamp-1">
                        {t.title}
                      </h4>
                      <span className="text-xs text-ink-500 mt-0.5 block">
                        {t.duration} • Small Group
                      </span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    {t.price && (
                      <span className="font-serif text-sm font-bold text-wine-900 block">
                        <Price amount={t.price} currency={t.currency} />
                      </span>
                    )}
                    <span className="text-[10px] text-wine-700 uppercase tracking-wider group-hover:underline">
                      Details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Guild Trust Banner */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-pearl-200 bg-pearl-50/80 px-6 py-5 text-center text-xs text-ink-700 sm:justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-wine-600" />
            <span>100% Transparent Inclusions &amp; Tasting Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <Wine className="size-4 text-wine-600" />
            <span>Certified WSET Level 3 &amp; Master Oenologists</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="size-4 text-wine-600" />
            <span>Strict Small-Group Standard (≤ 8 Travelers)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
