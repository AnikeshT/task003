"use client"

import { useEffect } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { ArrowLeft, ArrowRight, X } from "lucide-react"
import { EASE } from "@/lib/motion"

type LightboxProps = {
  images: string[]
  title: string
  index: number
  onClose: () => void
  onStep: (by: number) => void
}

export function Lightbox({ images, title, index, onClose, onStep }: LightboxProps) {
  useEffect(() => {
    window.__lenis?.stop()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onStep(1)
      if (e.key === "ArrowLeft") onStep(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.__lenis?.start()
    }
  }, [onClose, onStep])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photos`}
      className="fixed inset-0 z-[60] flex flex-col bg-ink-900/96 text-pearl-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <p className="font-serif text-xl tabular-nums">
          {index + 1} <span className="text-pearl-50/50">/ {images.length}</span>
        </p>
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Close gallery"
          className="grid size-12 cursor-pointer place-items-center border border-pearl-50/25 hover:bg-pearl-50 hover:text-ink-900"
        >
          <X className="size-5" />
        </button>
      </div>
      <div className="relative flex-1">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={index}
            className="absolute inset-4 md:inset-x-24 md:inset-y-6"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Image quality={88} src={images[index]} alt={`${title}, photo ${index + 1}`} fill sizes="100vw" className="object-contain" />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="container-x flex h-24 items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => onStep(-1)}
          aria-label="Previous photo"
          className="grid size-12 cursor-pointer place-items-center border border-pearl-50/25 hover:bg-pearl-50 hover:text-ink-900"
        >
          <ArrowLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => onStep(1)}
          aria-label="Next photo"
          className="grid size-12 cursor-pointer place-items-center border border-pearl-50/25 hover:bg-pearl-50 hover:text-ink-900"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>
    </motion.div>
  )
}
