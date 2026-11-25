"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { EASE } from "@/lib/motion"
import type { Scene } from "./scenes"
import { Stop } from "@/components/Shared/stop"
import { Star } from "@/components/Shared/Ornament"
import { ArrowRight, MapPin, Wine, Compass, Award } from "lucide-react"

const TERROIR_DATA = [
  {
    key: "barcelona",
    city: "barcelona",
    index: 0,
    region: "Barcelona & Penedès",
    sub: "Catalunya, Spain",
    headline: "Chalk Cava Caves & Gothic Tapas",
    soil: "Subterranean Chalk & Priorat Slate",
    elevation: "250m - 700m Sea Breeze",
    signatureCru: "Gran Reserva Cava & Old-Vine Priorat DOCa",
    image: "/images/barcelona-tapas.jpg",
    alt: "Artisan tapas and vintage Cava in an underground Barcelona cellar",
    price: "From 265 €",
    tourSlug: "barcelona-wine-gourmet-food-tour",
    rating: "4.98 ★ (184 reviews)"
  },
  {
    key: "santorini",
    city: "santorini",
    index: 1,
    region: "Santorini Caldera",
    sub: "Cyclades, Greece",
    headline: "Volcanic Ash & Ungrafted Kouloura Vines",
    soil: "Pumice, Basalt & Ancient Tephra",
    elevation: "300m Caldera Cliffs",
    signatureCru: "Saline Mineral Assyrtiko & 20-Yr Vinsanto",
    image: "/images/santorini-caldera.jpg",
    alt: "Santorini volcanic caldera vineyards overlooking the Aegean sea",
    price: "From 295 €",
    tourSlug: "private-santorini-wine-tasting-tour",
    rating: "4.99 ★ (247 reviews)"
  },
  {
    key: "sicily",
    city: "sicily",
    index: 2,
    region: "Sicily & Mount Etna",
    sub: "Sicilia, Italy",
    headline: "Europe's Highest Volcanic Basalt Cantinas",
    soil: "Porous Black Lava Basalt & Decomposed Granite",
    elevation: "800m - 1,000m Alpine Slope",
    signatureCru: "Pre-Phylloxera Nerello Mascalese & Carricante",
    image: "/images/sicily-etna.jpg",
    alt: "Mount Etna smoking volcanic slopes and ancient stone cantina vineyards",
    price: "From 320 €",
    tourSlug: "sicily-vineyard-escape",
    rating: "4.97 ★ (168 reviews)"
  }
]

export function HeroStage({ scenes }: { scenes: Scene[] }) {
  const [selected, setSelected] = useState(0)
  const current = TERROIR_DATA[selected]

  return (
    <div className="relative isolate overflow-hidden bg-wine-950 pt-[calc(var(--header-h)+1.5rem)] pb-28 text-pearl-50">
      {/* Background ambient vineyard glow */}
      <div className="pointer-events-none absolute -top-40 right-1/4 -z-10 size-[600px] rounded-full bg-wine-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-10 -z-10 size-[500px] rounded-full bg-olive-800/20 blur-[100px]" />

      <div className="container-x">
        {/* Curated Sommelier Guild Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-pearl-50/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="flex size-7 items-center justify-center rounded-full border border-gold-500/50 bg-wine-900/80 text-gold-300">
              <Star className="size-3.5" />
            </span>
            <span className="font-sans text-xs tracking-[0.25em] text-gold-300 uppercase">
              Sommelier Guild Curation • Mediterranean Terroirs
            </span>
          </div>
          <span className="hidden text-xs tracking-wider text-pearl-300/60 md:block">
            BARCELONA • SANTORINI • SICILY • DOURO
          </span>
        </div>

        {/* Split Editorial Curator Stage */}
        <div className="mt-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Narrative and Terroir Switcher */}
          <div className="lg:col-span-6 xl:col-span-5">
            <h1 className="font-serif text-[clamp(2.6rem,4.5vw,4.2rem)] font-normal leading-[1.08] tracking-tight text-pearl-50">
              Where ancient vines kiss sea &amp; stone
            </h1>
            <Stop />

            <p className="mt-5 text-base leading-relaxed text-pearl-200/85 sm:text-lg">
              Explore multi-generational family cellars, un-grafted volcanic root systems, and Michelin-starred culinary odysseys across the Mediterranean&apos;s greatest terroirs.
            </p>

            {/* Interactive Terroir Selector Deck */}
            <div className="mt-8 space-y-3">
              {TERROIR_DATA.map((t, idx) => {
                const isActive = selected === idx
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setSelected(idx)}
                    className={`group relative flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all duration-500 cursor-pointer ${
                      isActive
                        ? "border-gold-500/80 bg-wine-900/90 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                        : "border-pearl-50/10 bg-wine-900/30 hover:border-pearl-50/25 hover:bg-wine-900/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-serif text-sm transition-colors ${
                          isActive ? "text-gold-300" : "text-pearl-300/50 group-hover:text-pearl-50"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-lg font-medium text-pearl-50 group-hover:text-gold-300 transition-colors">
                            {t.region}
                          </span>
                          <span className="text-xs text-pearl-300/60 font-sans tracking-wide">
                            ({t.sub})
                          </span>
                        </div>
                        <span className="block text-xs text-pearl-200/70 mt-0.5 line-clamp-1">
                          {t.headline}
                        </span>
                      </div>
                    </div>
                    <div className="text-right shrink-0 pl-2">
                      <span className="font-serif text-sm font-semibold text-gold-300 block">
                        {t.price}
                      </span>
                      <span className="text-[10px] text-pearl-300/60 uppercase tracking-widest block">
                        {isActive ? "Selected" : "Explore"}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Live Terroir Telemetry & Action Pill */}
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gold-500/20 bg-wine-950/60 p-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-pearl-300/70">
                  <Compass className="size-3.5 text-gold-300" />
                  <span>Soil: {current.soil}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-pearl-300/70">
                  <Wine className="size-3.5 text-gold-300" />
                  <span className="font-medium text-pearl-50">{current.signatureCru}</span>
                </div>
              </div>
              <Link
                href={`/tours/${current.tourSlug}`}
                className="btn btn-wine inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs font-semibold tracking-wider uppercase"
              >
                <span>Reserve Masterclass</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Cellar Showcase with Smooth Crossfade */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[680px] overflow-hidden rounded-3xl border border-gold-500/40 bg-wine-900 shadow-[0_20px_60px_rgba(0,0,0,0.6)] sm:aspect-[16/11]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.key}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="absolute inset-0 size-full"
                >
                  <Image
                    src={current.image}
                    alt={current.alt}
                    fill
                    priority
                    quality={92}
                    sizes="(min-width: 1024px) 50vw, 95vw"
                    className="object-cover"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-wine-950/95 via-wine-950/20 to-transparent" />
                  <div className="absolute inset-0 bg-radial-to-c from-transparent via-transparent to-wine-950/40" />
                </motion.div>
              </AnimatePresence>

              {/* Top Floating Sommelier Badge */}
              <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full border border-pearl-50/20 bg-wine-950/80 px-4 py-1.5 backdrop-blur-md">
                <Award className="size-4 text-gold-300" />
                <span className="text-xs font-medium text-pearl-50 tracking-wide">
                  Certified Sommelier Led • Small Groups ≤ 8
                </span>
              </div>

              {/* Bottom Frame Details */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between">
                <div>
                  <span className="flex items-center gap-1.5 text-xs text-gold-300 uppercase tracking-widest font-sans">
                    <MapPin className="size-3.5" />
                    {current.sub}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-pearl-50 mt-1">
                    {current.region}
                  </h3>
                  <p className="text-xs text-pearl-200/80 mt-1 max-w-sm">
                    {current.headline}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="block text-xs font-medium text-pearl-200/90 bg-wine-900/90 border border-gold-500/40 px-3 py-1 rounded-full backdrop-blur-sm">
                    {current.rating}
                  </span>
                  <span className="text-[11px] text-pearl-300/70 mt-1 block">
                    100% Free Cancellation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
