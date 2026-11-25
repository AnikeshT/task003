import { useState } from "react"

/** Where a scene grows from, relative to the stage. */
export type Box = { left: number; top: number; width: number; height: number }
export type Layer = { id: number; scene: number; from: Box | null }

/** The scene on screen, plus the next one while it grows over it. */
export function useScenes() {
  const [layers, setLayers] = useState<Layer[]>([{ id: 0, scene: 0, from: null }])
  const top = layers[layers.length - 1]

  return {
    layers,
    active: top.scene,
    growing: layers.length > 1,
    show: (scene: number, from: Box | null) =>
      setLayers((l) => {
        const last = l[l.length - 1]
        return l.length > 1 || last.scene === scene ? l : [last, { id: last.id + 1, scene, from }]
      }),
    settle: (id: number) => setLayers((l) => (l[l.length - 1].id === id ? [l[l.length - 1]] : l)),
  }
}
