"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { EASE } from "@/lib/motion"
import { Offer } from "./offer"
import type { Scene } from "./scenes"
import { Stop } from "@/components/Shared/stop"

type Props = { scenes: Scene[]; active: number; onPick: (index: number, card: HTMLElement) => void }

/** The scenes still to come. The nearest is next; the last runs off the edge of the screen. */
export function SceneDeck({ scenes, active, onPick }: Props) {
  const reduce = useReducedMotion()
  const order = scenes.slice(1).map((_, i) => (active + 1 + i) % scenes.length)

  return (
    <ul aria-label="Scenes" className="flex gap-3 lg:gap-5">
      {order.map((index, i) => (
        <motion.li
          key={index}
          layout={reduce ? false : "position"}
          initial={reduce ? false : { opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: i * 0.08, layout: { duration: 1.1, ease: EASE } }}
          className="min-w-0 flex-1 lg:w-[clamp(150px,13vw,200px)] lg:flex-none"
        >
          <button
            type="button"
            data-scene={index}
            onClick={(e) => onPick(index, e.currentTarget)}
            className="group relative block aspect-[3/4] w-full cursor-pointer overflow-hidden text-left lg:aspect-[5/7]"
          >
            <Image
              src={`/videos/${scenes[index].film}.jpg`}
              alt={scenes[index].alt}
              aria-hidden
              fill
              quality={88}
              sizes="(min-width: 1024px) 40vw, 60vw"
              className="object-cover transition-transform duration-[1.6s] ease-(--ease-out-expo) group-hover:scale-[1.06]"
            />
            <span className="absolute inset-0 bg-linear-to-t from-wine-950/90 via-wine-950/15 to-transparent" />
            <span className="absolute inset-0 border border-pearl-50/25 transition-colors duration-500 group-hover:border-gold-300" />
            {/* the card at the edge is cut by the screen, so its words wait until it moves in */}
            <span
              className={`sr-only sm:not-sr-only sm:absolute sm:inset-x-4 sm:bottom-4 sm:transition-opacity sm:duration-700 xl:inset-x-5 xl:bottom-5 ${i > 2 ? "lg:opacity-0 min-[112.5rem]:opacity-100" : ""}`}
            >
              <span className="block font-serif text-xl leading-tight">{scenes[index].name}<Stop /></span>
              <span className="label mt-1.5 block text-pearl-50/80"><Offer scene={scenes[index]} /><Stop /></span>
            </span>
          </button>
        </motion.li>
      ))}
    </ul>
  )
}
