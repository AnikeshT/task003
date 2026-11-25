import { categories, cities, type Category } from "@/data/tours"
import type { Answers, Money } from "@/lib/recommend"

export type Key = keyof Answers
export type Option = { value: string; label: string; note?: string; image?: string; imageAlt?: string }
export type Question = { key: Key; title: string; hint?: string; many?: boolean; options: Option[] }

export const questionsFor = (currency: string, { spend, money }: Money): Question[] => {
  const low = money(spend.low, currency)
  const high = money(spend.high, currency)
  return [
    {
      key: "where",
      title: "Where would you like to go?",
      options: [
        { value: "douro-valley", label: "Douro Valley", note: cities["douro-valley"].tagline, image: cities["douro-valley"].image, imageAlt: cities["douro-valley"].imageAlt },
        { value: "porto", label: "Porto & Gaia", note: cities.porto.tagline, image: cities.porto.image, imageAlt: cities.porto.imageAlt },
        { value: "alentejo", label: "Alentejo & Évora", note: cities.alentejo.tagline, image: cities.alentejo.image, imageAlt: cities.alentejo.imageAlt },
        { value: "both", label: "All Regions", note: "Show me the finest across Portugal", image: "/videos/douro.jpg", imageAlt: "Douro terraces" },
      ],
    },
    {
      key: "love",
      title: "What do you enjoy?",
      hint: "Choose as many as you like.",
      many: true,
      options: (Object.keys(categories) as Category[]).map((c) => ({ value: c, label: categories[c].name, image: categories[c].image, imageAlt: categories[c].imageAlt })),
    },
    {
      key: "time",
      title: "How long would you like to be out?",
      options: [
        { value: "half", label: "Half a day", note: "Up to 6 hours" },
        { value: "full", label: "A full day", note: "6 to 12 hours" },
        { value: "days", label: "More than a day", note: "Two days or longer" },
        { value: "any", label: "I'm flexible", note: "Any length" },
      ],
    },
    {
      key: "group",
      title: "Who's coming along?",
      options: [
        { value: "private", label: "Just our group", note: "Private tours" },
        { value: "shared", label: "Happy to share", note: "Join other travellers" },
        { value: "any", label: "Either is fine", note: "No preference" },
      ],
    },
    {
      key: "spend",
      title: "What would you like to spend?",
      hint: "We compare this with each tour's starting price.",
      options: [
        { value: "low", label: `Under ${low}` },
        { value: "mid", label: `${low} to ${high}` },
        { value: "high", label: `Over ${high}` },
        { value: "any", label: "Show me everything" },
      ],
    },
  ]
}
