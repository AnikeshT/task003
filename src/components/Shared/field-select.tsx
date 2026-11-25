"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export type Option = { value: string; label: string }

/** A labelled, borderless select used in search bars and filter rails. */
export function FieldSelect({
  label,
  value,
  onChange,
  options,
  className,
  tone = "light",
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: Option[]
  className?: string
  tone?: "light" | "dark"
}) {
  return (
    <Select
      items={options}
      value={value}
      onValueChange={(v) => onChange((v as string) ?? options[0].value)}
    >
      <SelectTrigger
        aria-label={label}
        className={cn(
          "h-auto! w-full cursor-pointer flex-col items-start gap-0.5 rounded-none border-0 bg-transparent px-0 py-0 text-left shadow-none focus-visible:ring-0 dark:bg-transparent [&>svg]:absolute [&>svg]:right-0 [&>svg]:bottom-1.5",
          "relative",
          className
        )}
      >
        <span className={cn("label", tone === "light" ? "text-ink-500" : "text-pearl-50/60")}>{label} </span>
        <SelectValue className={cn("block! w-full truncate pr-6 text-[1.0625rem] leading-normal", tone === "light" ? "text-ink-900" : "text-pearl-50")} />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false} sideOffset={14} className="min-w-52 p-1.5">
        {options.map((o) => (
          <SelectItem key={o.value} value={o.value} className="cursor-pointer px-3 py-2.5 text-base">
            {o.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
