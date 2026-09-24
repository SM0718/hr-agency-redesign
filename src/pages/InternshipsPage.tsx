import { PageHeader } from '@/components/shared/PageHeader'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal } from '@/components/shared/Reveal'
import { RevealImage } from '@/components/shared/RevealImage'
import { FinalCta } from '@/components/shared/FinalCta'
import { InternshipForm } from '@/components/forms/InternshipForm'
import { IMAGES, photoSrc } from '@/lib/images'
import { usePageMeta } from '@/hooks/usePageMeta'
import { PageFade } from '@/components/layout/RootLayout'

const focusAreas = [
  {
    title: 'Practical experience',
    body: 'You work inside live recruitment processes — sourcing, screening, coordinating real candidates for real roles.',
  },
  {
    title: 'Teamwork',
    body: 'Interns sit on the same desks as senior consultants and participate in the same delivery meetings.',
  },
  {
    title: 'Interpersonal skills',
    body: 'Frequent professional conversations sharpen your communication, confidence and written discipline.',
  },
  {
    title: 'Professional exposure',
    body: 'You see how companies hire, how candidates are evaluated and how a consulting practice actually runs.',
  },
  {
    title: 'Career development',
    body: 'Structured feedback, a reference on completion, and an insider view of roles across the industries we serve.',
  },
]

const structure = [
  {
    label: 'Duration',
    value: '2 / 3 / 4 / 5 / 6+ months',
    note: 'You choose the period that fits your academic calendar.',
  },
  {
    label: 'Daily hours',
    value: '4–8 hours',
    note: 'Flexible scheduling across the day, agreed in advance.',
  },
  {
    label: 'Location',
    value: 'Remote',
    note: 'Work from anywhere in India with a stable connection.',
  },
]

export default function InternshipsPage() {
  usePageMeta(
    'Internships',
    'Held fully remote with flexible hours, our internship exposes students to live recruitment processes. Practical experience, teamwork and professional exposure.',
    photoSrc(IMAGES.studentGroup, 1200),
  )

  return (
    <PageFade>
      <PageHeader
        eyebrow="Internships"
        title="Start your career with real work, not practice work."
        word="Interns"
        lede="A remote internship inside a working recruitment consultancy. You'll handle real processes, speak with real candidates and carry real responsibility — from the first week."
        meta={['Remote / work from anywhere', '2 to 6+ month durations', '4–8 flexible hours a day']}
      />

      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="What you'll gain"
                title="Five things an internship should give you. We make sure all five happen."
                lede="An internship is only worth the exposure it provides. Ours is structured so that every month adds a layer of real skill."
              />
              <ul className="mt-10 space-y-7">
                {focusAreas.map((area, index) => (
                  <Reveal key={area.title} delay={0.05 * index}>
                    <li className="grid grid-cols-[28px_1fr] gap-4 border-t border-stone-200 pt-6">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-lime-500/15 font-display text-sm font-semibold text-navy-900">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-medium tracking-tight text-navy-900">
                          {area.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{area.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <RevealImage
                imageId={IMAGES.studentGroup}
                src={photoSrc(IMAGES.studentGroup, 1100)}
                maxWidth={1100}
                alt="A group of interns collaborating on laptops from their remote locations"
                className="aspect-[4/3] w-full"
              />
              <Reveal delay={0.1}>
                <div className="mt-8 grid grid-cols-1 divide-y divide-stone-200 rounded-xl border border-stone-200 bg-background sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {structure.map((item) => (
                    <div key={item.label} className="p-6">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy-500">
                        {item.label}
                      </p>
                      <p className="mt-2 font-display text-xl font-medium tracking-tight text-navy-900">
                        {item.value}
                      </p>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{item.note}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 border-t border-stone-200 py-20 md:py-28" id="apply">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  eyebrow="Apply"
                  title="Applications are reviewed personally."
                  lede="No automated filtering. A member of our team reads every application and responds to everyone who fits, usually within a few working days."
                />
                <Reveal delay={0.08}>
                  <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      <span className="font-medium text-navy-900">Who can apply:</span> any student
                      or recent graduate comfortable with English and spreadsheets. MBA-HR students
                      gain the most, but we have run successful internships for engineers, commerce
                      and arts graduates too.
                    </p>
                    <p>
                      <span className="font-medium text-navy-900">What you need:</span> a working
                      laptop, a stable connection and 4–8 hours a day. No recruitment experience is
                      required — you will be trained on the job.
                    </p>
                    <p>
                      <span className="font-medium text-navy-900">What you receive:</span> hands-on
                      experience inside live processes, direct feedback and a completion reference
                      at the end of your tenure.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-stone-200 bg-background p-7 md:p-10">
                <h2 className="font-display text-2xl font-medium tracking-tight text-navy-900">
                  Internship application
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  The current intake is open. Applications are reviewed as they arrive.
                </p>
                <div className="mt-8">
                  <InternshipForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Not sure if an internship is for you?"
        lede="Write to us with your background and we'll suggest the duration and focus that fits your goals."
      />
    </PageFade>
  )
}