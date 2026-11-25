"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Lattice } from "@/components/Shared/Ornament"
import { EASE } from "@/lib/motion"
import { planLink, navLeft, navRight } from "../nav"

const items = [{ href: "/", label: "Home" }, ...navLeft, ...navRight, planLink]

export function MobileMenu() {
  return (
    <motion.div
      id="mobile-menu"
      className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-wine-900 text-pearl-50 lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <Lattice className="text-gold-300/10" />
      <nav aria-label="Mobile" className="container-x relative flex flex-1 flex-col items-center justify-center gap-2 pt-(--header-h)">
        {items.map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 + i * 0.05 }}
          >
            <Link href={item.href} className="block px-6 py-2.5 text-center font-serif text-[2.1rem] leading-tight">
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>
      <p className="relative pb-10 text-center font-arabic text-3xl text-gold-300" lang="ar" dir="rtl">
        أهلاً وسهلاً
      </p>
    </motion.div>
  )
}
