import { Link } from '@tanstack/react-router'
import { ArrowRight2 } from 'iconsax-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal } from '@/components/shared/Reveal'
import { RevealImage } from '@/components/shared/RevealImage'
import { IndustryIcon } from '@/components/shared/IndustryIcon'
import { FinalCta } from '@/components/shared/FinalCta'
import { IMAGES, photoSrc } from '@/lib/images'
import { industries } from '@/data/industries'
import { usePageMeta } from '@/hooks/usePageMeta'
import { cn } from '@/lib/utils'
import { PageFade } from '@/components/layout/RootLayout'

export default function IndustriesPage() {
  usePageMeta(
    'Industries We Recruit For',
    'Industry-specific recruitment across IT, manufacturing, automobile, banking, construction, accounting, maintenance, warehouse and pharmaceuticals.',
    photoSrc(IMAGES.engineerFactory, 1200),
  )

  return (
    <PageFade>
      <PageHeader
        eyebrow="Industries"
        title="We recruit where we know the talent pool."
        word="Industries"
        lede="Each sector has its own hiring rhythm, its own salary bands and its own idea of who fits. Built on decades of placements inside these industries, our desks speak that language."
        meta={['10+ industries', 'Sector-specific desks', 'Decades of placements']}
      />

      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Sector practice"
                title="Industry knowledge is the difference between finding someone and finding the right one."
                lede="A candidate who fits a manufacturing plant may never fit a bank — even with identical software on their CV. Our industry desks understand those distinctions from experience, not assumptions."
              />
              <Reveal delay={0.08}>
                <div className="mt-8 flex gap-6 border-l-2 border-brand-lime-500 pl-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-display text-base font-medium text-navy-900">
                      "The same skill has different value in different sectors."
                    </span>
                    <br />
                    We know what each industry truly pays for, and price accordingly.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <RevealImage
                imageId={IMAGES.engineerFactory}
                src={photoSrc(IMAGES.engineerFactory, 1000)}
                maxWidth={1000}
                alt="An engineer working on the plant floor in a manufacturing facility"
                className="aspect-[4/3] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <ul className="border-t border-stone-200">
            {industries.map((industry, index) => (
              <li
                key={industry.slug}
                id={industry.slug}
                className="scroll-mt-28 border-b border-stone-200"
              >
                <Reveal>
                  <div className="group grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-8">
                    <div className="flex items-start gap-5 md:col-span-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-stone-300 text-navy-900 transition-colors group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-cream-100">
                        <IndustryIcon type={industry.icon} size={19} />
                      </span>
                      <div>
                        <span className="block font-display text-xs font-semibold tabular text-stone-400">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="mt-1 font-display text-2xl font-medium tracking-tight text-navy-900 md:text-3xl">
                          {industry.name}
                        </h2>
                      </div>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-sm font-medium leading-relaxed text-navy-800">{industry.lede}</p>
                      <div className="mt-3 space-y-3">
                        {industry.summary.map((paragraph) => (
                          <p key={paragraph.slice(0, 30)} className="text-[13px] leading-relaxed text-muted-foreground">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-5">
                      <p
                        className={cn(
                          'text-[12px] font-semibold uppercase tracking-[0.18em] text-navy-500',
                        )}
                      >
                        Roles we typically place
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {industry.roles.map((role) => (
                          <li
                            key={role}
                            className="rounded-md border border-stone-200 bg-background px-3 py-1.5 text-[12px] font-medium text-navy-900/75"
                          >
                            {role}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        hash="hire"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 underline-offset-4 group-hover:underline"
                      >
                        Recruit in {industry.name}
                        <ArrowRight2 size={14} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta
        title="Hiring in one of these industries?"
        lede="Tell us the role, and we'll tell you where the talent is — and how we will reach it."
      />
    </PageFade>
  )
}