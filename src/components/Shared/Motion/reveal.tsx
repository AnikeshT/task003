"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"
import { EASE } from "@/lib/motion"

/** Quiet fade when scrolled into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 0,
  as = "div",
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: "div" | "section" | "li" | "p" | "span" | "article"
}) {
  const reduce = useReducedMotion()
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.1, ease: EASE, delay }}
    >
      {children}
    </Comp>
  )
}
