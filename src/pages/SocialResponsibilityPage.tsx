import { PageHeader } from '@/components/shared/PageHeader'
import { Reveal } from '@/components/shared/Reveal'
import { RevealImage } from '@/components/shared/RevealImage'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ArrowLink } from '@/components/shared/ArrowLink'
import { FinalCta } from '@/components/shared/FinalCta'
import { IMAGES, photoSrc } from '@/lib/images'
import { usePageMeta } from '@/hooks/usePageMeta'
import { PageFade } from '@/components/layout/RootLayout'

const sundayProjects = [
  {
    title: 'Industry exposure in the classroom',
    body: 'Professionals from working organisations visit students on designated Sundays, describing their roles, industries and career paths in plain language.',
  },
  {
    title: 'Early awareness of careers',
    body: 'Students learn what careers actually look like — before making subject and stream choices that shape them — rather than discovering it years later.',
  },
  {
    title: 'Connecting classrooms to the workplace',
    body: 'By bringing the workplace into the classroom, students arrive at their first job with realistic expectations and a clearer sense of direction.',
  },
]

const shareProjects = [
  {
    title: 'Knowledge-sharing with students and colleges',
    body: 'Our team shares practical know-how on careers, interviews and industries through workshops conducted with colleges and student groups.',
  },
  {
    title: 'Sessions for organisations and communities',
    body: 'We extend the same sessions to organisations and community groups, believing knowledge compounds when it is passed on deliberately.',
  },
  {
    title: 'Built on two decades of good practice',
    body: 'Because we have spent years advising professionals on careers, sharing that experience with students feels less like charity and more like duty.',
  },
]

export default function SocialResponsibilityPage() {
  usePageMeta(
    'Social Responsibility',
    'Learn about Conscript’s social initiatives — “Sunday Ka Funda” and “We Love To Share” — bringing workplace exposure and knowledge-sharing to students.',
    photoSrc(IMAGES.community, 1200),
  )

  return (
    <PageFade>
      <PageHeader
        eyebrow="Social responsibility"
        title="What we know about work should not stop at our clients."
        word="Share"
        lede="Two long-running initiatives extend what we have learned across 25+ years of recruitment to the students and communities around us."
      />

      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-lime-600">
                <span className="h-px w-8 bg-brand-lime-600" aria-hidden="true" />
                Initiative one
              </p>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-navy-900 sm:text-4xl">
                Sunday Ka Funda
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
                A student-focused initiative that brings working professionals into classrooms on
                designated Sundays. Students hear, directly from people doing the jobs, what
                careers in different industries really involve — the roles, the journeys and the
                realities no textbook describes.
              </p>
              <ul className="mt-12 space-y-8">
                {sundayProjects.map((item, index) => (
                  <Reveal key={item.title} delay={0.04 * index}>
                    <li className="grid grid-cols-[28px_1fr] gap-4 border-t border-stone-200 pt-6">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-lime-500/15 font-display text-sm font-semibold text-navy-900">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-medium tracking-tight text-navy-900">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5">
              <RevealImage
                imageId={IMAGES.classroom}
                src={photoSrc(IMAGES.classroom, 1000)}
                maxWidth={1000}
                alt="A professional speaking to students in a classroom"
                className="aspect-[4/3] w-full"
              />
              <Reveal delay={0.1}>
                <div className="mt-8 flex items-start gap-5 border-l-2 border-brand-lime-500 pl-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-display text-base font-medium text-navy-900">
                      "Funday" by name, groundwork for a career by design.
                    </span>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 text-cream-100">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-6 md:pb-28 md:pt-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <RevealImage
                imageId={IMAGES.volunteerHands}
                src={photoSrc(IMAGES.volunteerHands, 1000)}
                maxWidth={1000}
                alt="Volunteers joining hands during a community knowledge-sharing session"
                className="aspect-[4/3] w-full"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-lime-400">
                <span className="h-px w-8 bg-brand-lime-400" aria-hidden="true" />
                Initiative two
              </p>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-cream-100 sm:text-4xl">
                We Love To Share
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-cream-100/70 md:text-base">
                Knowledge-sharing is a habit here. Under this banner we run sessions for students,
                colleges and organisations — on careers, interviews, industries and the discipline
                of preparing for work.
              </p>
              <ul className="mt-12 space-y-8">
                {shareProjects.map((item, index) => (
                  <Reveal key={item.title} delay={0.04 * index}>
                    <li className="flex gap-5 border-t border-cream-100/10 pt-6">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-lime-500" aria-hidden="true" />
                      <div>
                        <h3 className="font-display text-lg font-medium tracking-tight text-cream-100">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-cream-100/60">{item.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <SectionHeading
                eyebrow="Get involved"
                title="Professionals and institutions, we would welcome you."
                lede="Know a college that would value a session? Work in an organisation that could host one? We are always glad to talk about where these initiatives can go next."
              />
            </div>
            <div className="md:col-span-6">
              <Reveal>
                <div className="rounded-xl border border-stone-200 bg-background p-8">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    All sessions are planned around the audience, the institution and what is
                    useful to them — not around a fixed script.
                  </p>
                  <div className="mt-6">
                    <ArrowLink href="mailto:hr2@conscript.net?subject=Social%20Responsibility">
                      Write to us about a session
                    </ArrowLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Two decades of placements, given back."
        lede="If you know an audience that would benefit from what we have learned, start the conversation."
      />
    </PageFade>
  )
}