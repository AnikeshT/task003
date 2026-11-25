"use client"

import { useRef } from "react"
import Image, { type ImageProps } from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { EASE } from "@/lib/motion"
import { cn } from "@/lib/utils"

/** Image that drifts against scroll inside a clipped frame. */
export function ParallaxImage({
  className,
  strength = 12,
  reveal = true,
  ...img
}: Omit<ImageProps, "fill"> & { className?: string; strength?: number; reveal?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])
  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden bg-pearl-300", className)}
      initial={reduce || !reveal ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.4, ease: EASE }}
    >
      <motion.div
        className="absolute inset-x-0"
        style={{ y: reduce ? 0 : y, top: `-${strength}%`, bottom: `-${strength}%` }}
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image quality={88} fill className="object-cover" {...img} />
      </motion.div>
    </motion.div>
  )
}
