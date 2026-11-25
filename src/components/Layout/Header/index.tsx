"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react"
import { Logo } from "@/components/Shared/logo"
import { EASE } from "@/lib/motion"
import { cn } from "@/lib/utils"
import { planLink, navLeft, navRight } from "../nav"
import { MobileMenu } from "./mobile-menu"
import { NavLinks } from "./nav-links"

export function SiteHeader() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [solid, setSolid] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [openOn, setOpenOn] = useState<string | null>(null)
  // the menu closes itself when the route changes
  const open = openOn === pathname
  const setOpen = (fn: (v: boolean) => boolean) => setOpenOn(fn(open) ? pathname : null)

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setSolid(y > 40)
    setHidden(y > 480 && y > prev && !open)
  })

  useEffect(() => {
    if (open) window.__lenis?.stop()
    else window.__lenis?.start()
    document.documentElement.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 text-pearl-50"
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className={cn("transition-colors duration-500", solid && !open ? "bg-wine-900" : "bg-transparent")}>
          <div className="container-x grid h-(--header-h) grid-cols-[1fr_auto] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
              <NavLinks items={navLeft} pathname={pathname} />
            </nav>

            <Link href="/" aria-label="Dunes And Sky home" className="relative z-10 justify-self-start lg:justify-self-center">
              <Logo />
            </Link>

            <div className="flex items-center justify-end gap-10">
              <nav aria-label="More" className="hidden items-center gap-10 lg:flex">
                <NavLinks items={navRight} pathname={pathname} />
              </nav>
              <Link href={planLink.href} className="btn btn-line hidden min-h-12 px-6 text-base lg:inline-flex">
                {planLink.label}
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="relative z-10 grid size-12 cursor-pointer place-items-center justify-self-end lg:hidden"
              >
                <span className="relative block h-2.5 w-7">
                  <span
                    className={cn(
                      "absolute left-0 h-px w-7 bg-current transition-all duration-500 ease-(--ease-out-expo)",
                      open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 h-px w-7 bg-current transition-all duration-500 ease-(--ease-out-expo)",
                      open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>{open && <MobileMenu />}</AnimatePresence>
    </>
  )
}
