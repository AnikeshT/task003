/** Slips in operators' text that would otherwise reach the page. Links keep the operator's spelling. */
const SLIPS: [RegExp, string][] = [
  [/\*\*/g, ""],
  [/^[•*·]\s*/, ""],
  [/\bgloval\b/gi, "Global"],
  [/\bmordern\b/gi, "Modern"],
  [/\bminiumm\b/gi, "Minimum"],
  [/\bpvt\b/gi, "Private"],
  [/[.!]*!{2,}|\.!+/g, "!"],
]

const TITLE_SLIPS: [RegExp, string][] = [
  [/\(\s*(\d+) days? tour\s*\)/gi, "($1 Days)"],
  [/\bhalf hrs\b/gi, "Half-Hour"],
  [/(\d)Hours\b/g, "$1 Hours"],
  [/\bwith,/gi, "with"],
  [/\bvip\b/gi, "VIP"],
  [/\s*\+\s*/g, " + "],
  [/^Private\s?-\s?/i, "Private "],
  [/\b(wine|vineyard|tasting) tour\b/gi, "$1 Tour"],
]

/** Four shouted words or more become a sentence. */
const calm = (s: string) =>
  s.replace(/\b[A-Z]{2,}(?:[ ,]+[A-Z]{2,}){3,}\b/g, (shout) => {
    const quiet = shout.toLowerCase().replace(/\b(barcelona|santorini|sicily|porto|douro)\b/g, (p) => p.replace(/\b\w/g, (c) => c.toUpperCase()))
    return quiet[0].toUpperCase() + quiet.slice(1)
  })

const apply = (s: string, rules: [RegExp, string][]) => rules.reduce((text, [slip, fix]) => text.replace(slip, fix), s)

export const correct = (s: string) => calm(apply(s.trim(), SLIPS)).trim()
export const correctTitle = (s: string) => apply(correct(s), TITLE_SLIPS).replace(/\s{2,}/g, " ").replace(/\.$/, "").trim()

/** Lines an operator lists as included that a guest wouldn't get. */
export const NOT_REALLY_INCLUDED = /under renovation|temporarily closed|exclusions$/i
