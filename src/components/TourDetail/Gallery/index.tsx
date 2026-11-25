"use client"

import { useCallback, useState } from "react"
import Image from "next/image"
import { AnimatePresence } from "motion/react"
import { Expand } from "lucide-react"
import { cn } from "@/lib/utils"
import { Lightbox } from "./lightbox"

export function Gallery({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState<number | null>(null)
  const n = images.length
  const close = useCallback(() => setIndex(null), [])
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + n) % n)), [n])

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-2 gap-3",
          n === 3 && "md:h-[440px] md:grid-cols-3 md:grid-rows-2",
          n >= 4 && "md:h-[440px] md:grid-cols-4 md:grid-rows-2"
        )}
      >
        {images.slice(0, 4).map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open photo ${i + 1} of ${n}`}
            className={cn(
              "group relative aspect-[4/3] cursor-zoom-in overflow-hidden bg-pearl-300",
              n >= 3 && "md:aspect-auto",
              n >= 3 && i === 0 && "col-span-2 md:row-span-2",
              n >= 4 && i === 1 && "col-span-2"
            )}
          >
            <Image
              quality={88}
              src={src}
              alt={`${title}, photo ${i + 1} of ${n}`}
              fill
              sizes={i === 0 ? "(min-width: 768px) 40vw, 100vw" : "(min-width: 768px) 20vw, 50vw"}
              className="object-cover transition-transform duration-[1.2s] ease-(--ease-out-expo) group-hover:scale-105"
            />
            {i === 0 && (
              <span className="absolute right-3 bottom-3 inline-flex items-center gap-2 bg-pearl-50/90 px-3 py-1.5 label font-medium text-ink-900 backdrop-blur">
                <Expand className="size-3.5" /> {n} photos
              </span>
            )}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && <Lightbox images={images} title={title} index={index} onClose={close} onStep={step} />}
      </AnimatePresence>
    </>
  )
}
