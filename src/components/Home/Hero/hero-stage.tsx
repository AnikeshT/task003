"use client"

import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import { motion, useInView } from "motion/react"
import { SplitText } from "@/components/Shared/Motion"
import { EASE } from "@/lib/motion"
import { SceneBar } from "./scene-bar"
import { SceneDeck } from "./scene-deck"
import { SceneLayer, SceneSources } from "./scene-layer"
import type { Scene } from "./scenes"
import { useScenes } from "./use-scenes"
import { Stop } from "@/components/Shared/stop"

const calm = "(prefers-reduced-motion: reduce)"
const watchCalm = (changed: () => void) => {
  const query = window.matchMedia(calm)
  query.addEventListener("change", changed)
  return () => query.removeEventListener("change", changed)
}

/** How far into a scene its successor starts to load, so the first film has the connection to itself. */
const FETCH_AT = 0.3

/** A film in scenes. The next one waits as a card, then grows to fill the screen. */
export function HeroStage({ scenes }: { scenes: Scene[] }) {
  const reduce = useSyncExternalStore(
    watchCalm,
    () => window.matchMedia(calm).matches,
    () => false
  )
  const stage = useRef<HTMLDivElement>(null)
  const meter = useRef<HTMLSpanElement>(null)
  const inView = useInView(stage)
  const { layers, active, growing, show, settle } = useScenes()
  const [choice, setChoice] = useState<"play" | "pause" | null>(null)
  const paused = choice ? choice === "pause" : reduce
  const next = (active + 1) % scenes.length
  // the scene whose film is far enough along to fetch the one after it
  const [fetchAfter, setFetchAfter] = useState(-1)

  useEffect(() => {
    if (meter.current) meter.current.style.transform = "scaleX(0)"
  }, [active])

  const go = (index: number, card?: HTMLElement | null) => {
    const from = card ?? stage.current?.querySelector<HTMLElement>(`[data-scene="${index}"]`)
    const s = stage.current?.getBoundingClientRect()
    const c = from?.getBoundingClientRect()
    show(index, s && c?.width ? { left: c.left - s.left, top: c.top - s.top, width: c.width, height: c.height } : null)
  }

  return (
    <div ref={stage} className="relative isolate flex flex-1 flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {layers.map((l, i) => (
          <SceneLayer
            key={l.id}
            scene={scenes[l.scene]}
            first={l.id === 0}
            from={l.from}
            paused={paused || !inView}
            onSettled={() => settle(l.id)}
            onNearEnd={() => i === layers.length - 1 && !growing && go(next)}
            onProgress={(p) => {
              if (i !== layers.length - 1) return
              if (meter.current) meter.current.style.transform = `scaleX(${p})`
              if (p > FETCH_AT) setFetchAfter(active)
            }}
          />
        ))}
      </div>
      {/* shade where the words sit; the film stays clear everywhere else */}
      <div className="pointer-events-none absolute inset-0 -z-5 bg-linear-to-t from-wine-950/85 via-wine-950/30 via-50% to-transparent lg:via-wine-950/45 lg:via-25% lg:to-55%" />
      <div className="pointer-events-none absolute inset-0 -z-5 hidden bg-linear-to-r from-wine-950/60 via-wine-950/20 via-40% to-transparent lg:block" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-5 h-32 bg-linear-to-b from-wine-950/50 to-transparent" />

      <div className="container-x pt-[calc(var(--header-h)+7rem)] pb-5 lg:pt-[calc(var(--header-h)+1.5rem)] lg:pb-40">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12">
          <div>
            <SplitText text={"Where the vine\nmeets the sea\nand sun"} delay={0.3} className="display-hero lg:whitespace-nowrap" />
            <Stop />
            <motion.p
              className="lead mt-5 max-w-md text-pearl-50/90"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.9 }}
            >
              Compare private bodega cellars, volcanic caldera masterclasses, and Michelin-starred culinary odysseys across Barcelona, Santorini, and Sicily by price, terroir, and what is included.{" "}
            </motion.p>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-[calc(clamp(150px,13vw,200px)*3+2.5rem)]">
            <SceneDeck scenes={scenes} active={active} onPick={go} />
            <div className="mt-5 lg:mt-7">
              <SceneBar
                scene={scenes[active]}
                meter={meter}
                paused={paused}
                onToggle={() => setChoice(paused ? "play" : "pause")}
                onStep={(by) => go((active + by + scenes.length) % scenes.length)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* fetches the next clip early, so it is ready to grow */}
      {!paused && fetchAfter === active && (
        <video key={scenes[next].film} hidden muted preload="auto">
          <SceneSources film={scenes[next].film} />
        </video>
      )}
    </div>
  )
}
