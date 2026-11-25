"use client"

import type { Ref } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { Offer } from "./offer"
import type { Scene } from "./scenes"
import { Stop } from "@/components/Shared/stop"

type Props = {
  scene: Scene
  meter: Ref<HTMLSpanElement>
  paused: boolean
  onToggle: () => void
  onStep: (by: 1 | -1) => void
}

const control =
  "grid size-11 cursor-pointer place-items-center text-pearl-50/80 transition-colors hover:text-gold-300"

/** What is on screen now, how far through it is, and the controls. */
export function SceneBar({ scene, meter, paused, onToggle, onStep }: Props) {
  return (
    <div>
      <div className="relative h-px overflow-hidden bg-pearl-50/25">
        <span ref={meter} className="absolute inset-0 origin-left scale-x-0 bg-gold-300" />
      </div>
      <div className="mt-2 flex items-center justify-between gap-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={scene.film}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="min-w-0 leading-snug"
          >
            <span className="font-serif text-lg lg:text-xl">{scene.name}</span>
            <Stop />
            <Link
              href={scene.href}
              className="label block text-gold-300 underline decoration-gold-300/40 underline-offset-4 transition-colors hover:decoration-gold-300 sm:ml-4 sm:inline"
            >
              <Offer scene={scene} />
            </Link>
            <Stop />
          </motion.p>
        </AnimatePresence>
        <div className="-mr-3 flex shrink-0">
          <button type="button" onClick={() => onStep(-1)} aria-label="Previous scene" className={control}>
            <ChevronLeft className="size-5" strokeWidth={1.5} />
          </button>
          <button type="button" onClick={onToggle} aria-label={paused ? "Play film" : "Pause film"} className={control}>
            {paused ? <Play className="size-4.5" strokeWidth={1.5} /> : <Pause className="size-4.5" strokeWidth={1.5} />}
          </button>
          <button type="button" onClick={() => onStep(1)} aria-label="Next scene" className={control}>
            <ChevronRight className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}
