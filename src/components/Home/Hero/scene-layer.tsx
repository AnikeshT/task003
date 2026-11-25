"use client"

import { useEffect, useLayoutEffect, useRef } from "react"
import Image from "next/image"
import type { Scene } from "./scenes"
import type { Box } from "./use-scenes"

/** How long before its end a scene hands over, so the next one grows over moving film. */
const HANDOVER = 1.5

type Props = {
  scene: Scene
  first: boolean
  from: Box | null
  paused: boolean
  onSettled: () => void
  onNearEnd: () => void
  onProgress: (p: number) => void
}

const STEPS = 24

/**
 * Grows a full-size layer out of a card with clip-path and transform alone, so the page never counts it as
 * moving. The picture scales with its window, as it would if the window itself were resized.
 */
function growth(from: Box, stage: { width: number; height: number }) {
  const at = Array.from({ length: STEPS + 1 }, (_, i) => {
    const p = i / STEPS
    const mix = (a: number, b: number) => a + (b - a) * p
    return { left: mix(from.left, 0), top: mix(from.top, 0), width: mix(from.width, stage.width), height: mix(from.height, stage.height) }
  })
  return {
    window: at.map((b) => ({
      clipPath: `inset(${b.top}px ${stage.width - b.left - b.width}px ${stage.height - b.top - b.height}px ${b.left}px)`,
    })),
    picture: at.map((b) => {
      const x = b.left + b.width / 2 - stage.width / 2
      const y = b.top + b.height / 2 - stage.height / 2
      return { transform: `translate(${x}px, ${y}px) scale(${Math.max(b.width / stage.width, b.height / stage.height)})` }
    }),
  }
}

/** The clip, or its portrait crop on phones. */
export function SceneSources({ film }: { film: string }) {
  return (
    <>
      <source src={`/videos/${film}-mobile.mp4`} type="video/mp4" media="(max-width: 767px)" />
      <source src={`/videos/${film}.mp4`} type="video/mp4" />
    </>
  )
}

/** One full-bleed scene. It grows out of its card in the deck, then holds the stage. */
export function SceneLayer({ scene, first, from, paused, onSettled, onNearEnd, onProgress }: Props) {
  const box = useRef<HTMLDivElement>(null)
  const picture = useRef<HTMLDivElement>(null)
  const video = useRef<HTMLVideoElement>(null)

  useLayoutEffect(() => {
    const el = box.current
    if (first || !el || !picture.current) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const timing = { duration: reduce ? 1 : 1300, easing: "cubic-bezier(0.76, 0, 0.24, 1)" }
    const frames = from && growth(from, { width: el.offsetWidth, height: el.offsetHeight })
    const moves = frames
      ? [el.animate(frames.window, timing), picture.current.animate(frames.picture, timing)]
      : [el.animate([{ opacity: 0 }, { opacity: 1 }], timing)]
    moves[0].onfinish = onSettled
    return () => moves.forEach((m) => m.cancel())
    // runs once: a layer grows a single time
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (paused) video.current?.pause()
    else video.current?.play().catch(() => {})
  }, [paused])

  return (
    <div ref={box} className="absolute top-0 left-0 size-full overflow-hidden">
      <div ref={picture} className="absolute inset-0">
        <Image
          src={`/videos/${scene.film}.jpg`}
          alt={scene.alt}
          fill
          priority={first}
          quality={88}
          sizes="(min-width: 768px) 100vw, 180vw"
          className="object-cover"
        />
        <video
          ref={video}
          muted
          playsInline
          preload="auto"
          aria-hidden
          tabIndex={-1}
          onTimeUpdate={({ currentTarget: v }) => {
            if (!v.duration) return
            onProgress(Math.min(v.currentTime / (v.duration - HANDOVER), 1))
            if (v.currentTime > v.duration - HANDOVER) onNearEnd()
          }}
          className="absolute inset-0 size-full object-cover"
        >
          <SceneSources film={scene.film} />
        </video>
      </div>
    </div>
  )
}
