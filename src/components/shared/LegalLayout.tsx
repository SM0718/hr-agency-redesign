import { PageFade } from '@/components/layout/RootLayout'
import { Reveal } from '@/components/shared/Reveal'
import { cn } from '@/lib/utils'

type LegalSection = {
  heading: string
  paragraphs?: string[]
  list?: string[]
}

export function LegalLayout({
  eyebrow,
  title,
  lede,
  updated,
  sections,
}: {
  eyebrow: string
  title: string
  lede: string
  updated: string
  sections: LegalSection[]
}) {
  return (
    <PageFade>
      <header className="border-b border-stone-200 bg-cream-100">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-lime-600">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-navy-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground md:text-base">{lede}</p>
          <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Last updated: {updated}
          </p>
        </div>
      </header>
      <div className="bg-cream-100 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5">
          {sections.map((section, index) => (
            <Reveal key={section.heading} delay={0.02 * index}>
              <section className={cn('border-t border-stone-200 py-10', index === 0 && 'border-t-0 pt-0')}>
                <h2 className="font-display text-2xl font-medium tracking-tight text-navy-900">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="mt-4 text-[15px] leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list ? (
                  <ul className="mt-5 space-y-3">
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-4 text-[15px] leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-lime-600" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </PageFade>
  )
}