import { PageHeader } from '@/components/shared/PageHeader'
import { Reveal } from '@/components/shared/Reveal'
import { RevealImage } from '@/components/shared/RevealImage'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { FinalCta } from '@/components/shared/FinalCta'
import { IMAGES, photoSrc } from '@/lib/images'
import { usePageMeta } from '@/hooks/usePageMeta'
import { PageFade } from '@/components/layout/RootLayout'

const beliefs = [
  {
    number: '01',
    title: 'Recruitment expertise',
    body: 'Recruitment is a craft with routines, judgement calls and disciplines. We have spent 25+ years refining ours, and it shows in how shortlists are built.',
  },
  {
    number: '02',
    title: 'Candidate sourcing',
    body: 'Our network has been built one candidate relationship at a time. When a requirement arrives, we rarely start from zero — we start from people we already know.',
  },
  {
    number: '03',
    title: 'Industry knowledge',
    body: 'Across IT, engineering, banking, pharma and more, we know where the talent lives, what it expects and what it is paid. That knowledge shortens every search.',
  },
  {
    number: '04',
    title: 'Employer support',
    body: 'We work as an extension of your hiring team — the extra pair of hands that already understands the requirement and the market around it.',
  },
]

export default function AboutPage() {
  usePageMeta(
    'About Conscript',
    '25+ years of recruitment experience and 10,000+ placements. Learn what Conscript HR Advisors stands for as a recruitment consultancy.',
    photoSrc(IMAGES.aboutPrimary, 1200),
  )

  return (
    <PageFade>
      <PageHeader
        eyebrow="About Conscript"
        title="It is our job to help you."
        word="About"
        lede="Helping organisations and the people who build them is not a slogan here. It is the way the practice has operated for more than twenty-five years."
      />

      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <RevealImage
                imageId={IMAGES.aboutPrimary}
                src={photoSrc(IMAGES.aboutPrimary, 1000)}
                maxWidth={1000}
                alt="The Conscript team working together over documents"
                className="aspect-[4/3] w-full"
              />
              <Reveal delay={0.1}>
                <div className="mt-8 rounded-xl border border-stone-200 bg-background p-6">
                  <p className="font-display text-2xl font-medium tabular text-navy-900">25+ years</p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                    of continuous recruitment practice
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our position"
                title="We would rather understand a role deeply than flood you with applications."
              />
              <Reveal delay={0.05}>
                <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-muted-foreground md:text-base">
                  <p className="font-display text-xl font-medium leading-snug tracking-tight text-navy-900 md:text-2xl">
                    In 25+ years of placing more than 10,000 professionals, we have learned that a
                    mediocre shortlist is worse than a slow one.
                  </p>
                  <p>
                    Conscript was built on the simple discipline of doing recruitment properly —
                    understanding what a role actually demands, finding the people who genuinely
                    fit, and presenting them honestly. There is no shortcut around any of those
                    steps, and we have never found a reason to look for one.
                  </p>
                  <p>
                    That is why most of our clients come back. A client we placed for twenty years
                    ago still calls us when a critical role opens — because the first placement
                    worked. Behind every retained relationship is a hire that stayed, and a company
                    that got back more than the fee it paid.
                  </p>
                  <p className="border-l-2 border-brand-lime-500 pl-6 font-medium text-navy-900">
                    We help candidates too — with honest advice, structured preparation and access
                    to roles that fit. Our duty runs to both sides of every placement.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-stone-200 pt-8 sm:grid-cols-4">
                  {[
                    { value: '25+', label: 'Years' },
                    { value: '10,000+', label: 'Placements' },
                    { value: '10+', label: 'Industries' },
                    { value: '100+', label: 'Clients' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-3xl font-medium tabular text-navy-900">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 text-cream-100">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20">
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl md:text-[40px]">
              "Recruit. Right. Resources."
            </p>
            <footer className="mt-6 text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-lime-400">
              The standard we hold every search to
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="What we stand for"
            title="Four commitments that shape every engagement."
          />
          <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200 md:grid-cols-2">
            {beliefs.map((belief) => (
              <li key={belief.number} className="bg-background p-8 md:p-10">
                <div className="flex items-center gap-4">
                  <span className="font-display text-lg font-semibold tabular text-brand-lime-600">
                    {belief.number}
                  </span>
                  <span className="h-px flex-1 bg-stone-200" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-navy-900">
                  {belief.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{belief.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream-100 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <img
                src={photoSrc(IMAGES.candidatePortrait, 900)}
                srcSet={`${photoSrc(IMAGES.candidatePortrait, 480)} 480w, ${photoSrc(IMAGES.candidatePortrait, 900)} 900w`}
                sizes="(max-width: 768px) 100vw, 560px"
                alt="A professional in a career conversation with a consultant"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="How the practice is organised"
                title="A senior consultant owns every mandate."
                lede="You will not be handed from recruiter to recruiter. One consultant understands your requirement, runs the search and stays accountable to the outcome."
              />
              <Reveal delay={0.08}>
                <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
                  <p>
                    We organise our work by industry desk — IT, engineering and manufacturing,
                    banking and financial services, pharmaceuticals and the rest — so the person
                    working on your requirement already knows your competitors, your salary bands
                    and your timeline realities.
                  </p>
                  <p>
                    Candidates experience the same continuity. The consultant who knows your
                    profile is the one who represents you, prepares you and stays with you through
                    offer and joining.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Work with a practice that treats hiring seriously."
        lede="Whether you are hiring or looking, the first conversation is free of charge and without obligation."
      />
    </PageFade>
  )
}