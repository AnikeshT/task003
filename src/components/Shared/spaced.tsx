import { Children, cloneElement, Fragment, isValidElement, type ReactElement, type ReactNode } from "react"
import { Stop } from "./stop"

const BLOCKS = new Set<unknown>(["p", "li", "h2", "h3", "caption", "th", "td"])

const textOf = (node: ReactNode): string =>
  Children.toArray(node)
    .map((c) => (isValidElement<{ children?: ReactNode }>(c) ? textOf(c.props.children) : String(c)))
    .join("")

/** Running text with a break after every paragraph, heading and item, so it also reads well without its layout. */
export function spaced(node: ReactNode): ReactNode {
  return Children.map(node, (c) => {
    if (!isValidElement(c) || (typeof c.type !== "string" && c.type !== Fragment)) return c
    const el = c as ReactElement<{ children?: ReactNode }>
    const { children } = el.props
    if (children === undefined) return el
    if (!BLOCKS.has(el.type)) return cloneElement(el, undefined, spaced(children))
    return cloneElement(el, undefined, spaced(children), <Stop key="stop" after={textOf(children)} />)
  })
}
