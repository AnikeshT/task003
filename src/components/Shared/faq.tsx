import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Reveal } from "@/components/Shared/Motion"
import { SectionHeading } from "@/components/Shared/section-heading"
import { JsonLd } from "@/components/Shared/json-ld"
import { faqs, type Question } from "@/data/tours"
import { faqPage, graph } from "@/lib/seo/schema"

/** `markup` is off where the same questions already carry it on another page. */
export function Faq({ title = "Good to know before you land", items = faqs, markup = true }: { title?: string; items?: Question[]; markup?: boolean }) {
  return (
    <section className="bg-pearl-100 py-24 md:py-36">
      {markup && <JsonLd data={graph(faqPage(items))} />}
      <div className="container-x">
        <SectionHeading title={title} />
        <Reveal className="mx-auto mt-14 max-w-3xl md:mt-20">
          <Accordion className="border-t border-border">
            {items.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
                <AccordionTrigger className="cursor-pointer gap-6 rounded-none py-6 font-serif text-[1.25rem] leading-snug font-normal hover:text-wine-700 hover:no-underline md:text-[1.4rem] [&_[data-slot=accordion-trigger-icon]]:mt-1.5 [&_[data-slot=accordion-trigger-icon]]:size-5">
                  {f.q}{" "}
                </AccordionTrigger>
                <AccordionContent className="pb-7 text-[1.0625rem] leading-relaxed text-ink-500">
                  <p className="max-w-2xl">{f.a} </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
