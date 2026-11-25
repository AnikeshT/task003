"use client"

import type { ElementType } from "react"
import { motion, useReducedMotion } from "motion/react"
import { EASE } from "@/lib/motion"

/** Hero titles: each line rises from behind a mask as the page opens. */
export function SplitText({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
}: {
  text: string
  className?: string
  as?: ElementType
  delay?: number
}) {
  const reduce = useReducedMotion()
  return (
    <Tag className={className} aria-label={text.replace(/\n/g, " ")}>
      {text.split("\n").map((line, i) => (
        // padding keeps ascenders and descenders inside the mask; the margins cancel it out of layout
        <span key={i} aria-hidden className="-mx-[0.25em] -mt-[0.15em] -mb-[0.25em] block overflow-hidden px-[0.25em] pt-[0.15em] pb-[0.25em]">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "130%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.4, ease: EASE, delay: delay + i * 0.14 }}
          >
            {/* the space keeps the words apart for anything that reads the text without the layout */}
            {line}{" "}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
