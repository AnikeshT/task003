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
        { value: "barcelona", label: "Barcelona & Penedès", note: cities.barcelona.tagline, image: cities.barcelona.image, imageAlt: cities.barcelona.imageAlt },
        { value: "santorini", label: "Santorini & Cyclades", note: cities.santorini.tagline, image: cities.santorini.image, imageAlt: cities.santorini.imageAlt },
        { value: "sicily", label: "Sicily & Mount Etna", note: cities.sicily.tagline, image: cities.sicily.image, imageAlt: cities.sicily.imageAlt },
        { value: "douro-valley", label: "Douro Valley", note: cities["douro-valley"].tagline, image: cities["douro-valley"].image, imageAlt: cities["douro-valley"].imageAlt },
        { value: "both", label: "All Terroirs", note: "Show me the finest across the Mediterranean", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85", imageAlt: "Vintage wine tasting" },
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
