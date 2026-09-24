import { Link } from '@tanstack/react-router'
import { Export, Check } from 'iconsax-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal } from '@/components/shared/Reveal'
import { RevealImage } from '@/components/shared/RevealImage'
import { FinalCta } from '@/components/shared/FinalCta'
import { IMAGES, photoSrc } from '@/lib/images'
import { processSteps } from '@/data/services'
import { usePageMeta } from '@/hooks/usePageMeta'
import { PageFade } from '@/components/layout/RootLayout'

const capabilities = [
  {
    number: '01',
    title: 'Candidate sourcing',
    body: 'Active, structured sourcing across our 25-year network — not just a job posting and a hope.',
  },
  {
    number: '02',
    title: 'Candidate screening',
    body: 'Every shortlisted candidate is screened against your brief. Skills verified, motivations explored.',
  },
  {
    number: '03',
    title: 'Recruitment expertise',
    body: 'Briefs, interviews, negotiation, offers — managed by consultants who do this daily.',
  },
  {
    number: '04',
    title: 'Industry knowledge',
    body: 'We know where manufacturing, IT, banking and pharma talent lives, and what it costs.',
  },
  {
    number: '05',
    title: 'Hiring support',
    body: 'Bandwidth for your HR team — from a single critical hire to an entire programme.',
  },
  {
    number: '06',
    title: 'Recruitment consulting',
    body: 'Help building your own hiring capability: better briefs, structured interviews, faster decisions.',
  },
]

export default function EmployersPage() {
  usePageMeta(
    'For Employers',
    'Hire the right talent with Conscript HR Advisors. Structured sourcing, screening and recruitment expertise across 10+ industries.',
    photoSrc(IMAGES.employerPrimary, 1200),
  )

  return (
    <PageFade>
      <PageHeader
        eyebrow="For employers"
        title="Looking for the right talent?"
        word="Employers"
        lede="We help organisations of every size find people who fit — a considered shortlist, a clear process and a consultant who stays involved until the hire works."
      />

      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <RevealImage
                imageId={IMAGES.employerPrimary}
                src={photoSrc(IMAGES.employerPrimary, 1100)}
                maxWidth={1100}
                alt="A hiring manager reviewing candidate shortlists"
                className="aspect-[4/3] w-full"
              />
              <Reveal delay={0.1}>
                <div className="mt-8 flex items-start gap-5 border-l-2 border-brand-lime-500 pl-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-display text-base font-medium text-navy-900">
                      "The candidates a firm will reject today are the ones it complains about
                      missing next year."
                    </span>
                    <br />
                    Identifying the difference is the whole job.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="What we bring"
                title="Everything between 'we have an opening' and 'they have the right person'."
              />
              <ul className="mt-10 space-y-6">
                {capabilities.map((capability) => (
                  <Reveal key={capability.number} delay={0.03 * Number(capability.number)}>
                    <li className="grid grid-cols-[40px_1fr] gap-4 border-t border-stone-200 pt-6">
                      <span className="font-display text-lg font-semibold text-navy-400 tabular">
                        {capability.number}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-medium tracking-tight text-navy-900">
                          {capability.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {capability.body}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 text-cream-100">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                tone="light"
                eyebrow="How we run it"
                title="A one-search or a programme — same discipline, same standard."
                lede="Your requirement may be a single senior hire or a bulk onboarding cycle. Our method is built to hold at either end of that scale."
              />
              <div className="mt-10">
                <Link
                  to="/contact"
                  hash="hire"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-lime-500 px-7 py-4 text-[15px] font-semibold text-navy-950 transition-colors hover:bg-brand-lime-400"
                >
                  Tell us about your hiring needs
                  <Export size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-cream-100/10 bg-cream-100/10 sm:grid-cols-2">
                {processSteps.map((step) => (
                  <li key={step.number} className="bg-navy-800/40 p-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-lime-500/15 font-display text-sm font-semibold text-brand-lime-400">
                        {step.number}
                      </span>
                      <h3 className="font-display text-lg font-medium tracking-tight text-cream-100">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-[13px] leading-relaxed text-cream-100/65">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Industry depth"
                title="We speak the language of the sector you hire in."
                lede="Industry-specific recruitment means we already know the market you are fishing in — the skills, the salary bands and the places where talent actually lives."
              />
              <div className="mt-8">
                <Link
                  to="/industries"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 underline-offset-4 hover:underline"
                >
                  See the industries we cover
                  <Export size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <RevealImage
                imageId={IMAGES.employerInterview}
                src={photoSrc(IMAGES.employerInterview, 1000)}
                maxWidth={1000}
                alt="A structured candidate interview conducted by a consultant"
                className="aspect-[16/10] w-full"
              />
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { label: '25+ years', detail: 'of recruitment practice' },
                { label: '10,000+', detail: 'placements completed' },
                { label: '100+', detail: 'organisations engaged over time' },
              ].map((stat) => (
                <div key={stat.label} className="border-t border-stone-200 pt-5">
                  <p className="font-display text-3xl font-medium tabular text-navy-900">{stat.label}</p>
                  <p className="mt-1 text-[13px] text-muted-foreground">{stat.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-100 border-t border-stone-200 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-navy-500">
                <span className="h-px w-8 bg-navy-500" aria-hidden="true" />
                The fit guarantee
              </p>
              <h2 className="mt-5 font-display text-2xl font-medium tracking-tight text-navy-900 sm:text-3xl">
                A shortlist you can actually use.
              </h2>
            </div>
            <ul className="space-y-3">
              {[
                'Candidates presented against the brief, not the volume',
                'Honest counsel when we think the requirement needs adjusting',
                'Involvement through offer, joining and the first 90 days',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy-900/80">
                  <Check size={16} className="mt-0.5 shrink-0 text-brand-lime-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FinalCta
        title="Tell us about the role you need to fill."
        lede="Share the requirement, the team and the timeline. We'll tell you how we'd approach it — candidly, including whether we're the right firm for it."
      />
    </PageFade>
  )
}