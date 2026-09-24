import { Link } from '@tanstack/react-router'
import { Send, Briefcase, Message2, ShieldTick } from 'iconsax-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal } from '@/components/shared/Reveal'
import { FinalCta } from '@/components/shared/FinalCta'
import { ContactForm } from '@/components/forms/ContactForm'
import { EmployerForm } from '@/components/forms/EmployerForm'
import { SITE_NAME, CONTACT_EMAIL } from '@/lib/seo'
import { usePageMeta } from '@/hooks/usePageMeta'
import { PageFade } from '@/components/layout/RootLayout'

const engagementSteps = [
  {
    number: '01',
    title: 'Tell us the role',
    body: 'Share the position, the level, the compensation range and the timeline. A WhatsApp message or a call works just as well as the form.',
  },
  {
    number: '02',
    title: 'We validate and plan',
    body: 'We assess the requirement against the market, confirm whether it is realistic, and propose a sourcing plan before we begin.',
  },
  {
    number: '03',
    title: 'Shortlists and support',
    body: 'You review structured shortlists with genuine interviews. We back the candidates through every stage — including rejoining and stabilisation.',
  },
]

export default function ContactPage() {
  usePageMeta(
    'Contact Us',
    `Contact ${SITE_NAME} — call, email or WhatsApp about hiring or your career. Use the dedicated form for employer hiring enquiries.`,
  )

  return (
    <PageFade>
      <PageHeader
        eyebrow="Contact"
        title="Start with a conversation."
        word="Contact"
        lede="A free, no-obligation first conversation about whatever brought you here — a hire to make, a career to move, or a question to ask."
        meta={[CONTACT_EMAIL, 'Same-day response on working days', 'English · Hindi · বাংলা · मराठी']}
      />

      {/* Employer hiring enquiry */}
      <section className="bg-navy-900 py-20 text-cream-100 md:py-28" id="hire">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-lime-400">
                <span className="h-px w-8 bg-brand-lime-400" aria-hidden="true" />
                For employers
              </p>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-cream-100 sm:text-4xl">
                Tell us about your hiring needs.
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-cream-100/70 md:text-base">
                Describe the role and we'll come back with an honest view on the market, a timeline
                and a plan. There is no obligation until you decide to proceed.
              </p>
              <ol className="mt-12 space-y-8">
                {engagementSteps.map((step, index) => (
                  <Reveal key={step.number} delay={0.04 * index}>
                    <li className="grid grid-cols-[36px_1fr] gap-4 border-t border-cream-100/10 pt-6">
                      <span className="mt-1 font-display text-xl font-semibold tabular text-brand-lime-400">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-medium tracking-tight text-cream-100">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-cream-100/60">{step.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-xl bg-cream-100 p-7 text-navy-900 md:p-10">
                <h3 className="font-display text-2xl font-medium tracking-tight">Hiring enquiry</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The more context you add, the faster we can validate the requirement.
                </p>
                <div className="mt-8 rounded-xl border border-stone-200 bg-background p-7 md:p-9">
                  <EmployerForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General contact */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="General contact"
                title="Everything else."
                lede="Career advice, candidate enquiries, partnerships, media and anything that doesn't fit the hiring form — write to the team here."
              />
              <Reveal delay={0.08}>
                <div className="mt-10 space-y-4">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-4 rounded-xl border border-stone-200 bg-background p-5 transition-colors hover:border-navy-900/30"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-lime-500/15 text-navy-900">
                      <Send size={18} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Email us
                      </span>
                      <span className="block truncate font-medium text-navy-900">{CONTACT_EMAIL}</span>
                    </span>
                  </a>
                  <a
                    href="mailto:hr2@conscript.net"
                    className="flex items-center gap-4 rounded-xl border border-stone-200 bg-background p-5 transition-colors hover:border-navy-900/30"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-lime-500/15 text-navy-900">
                      <Message2 size={18} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        For candidates & responses
                      </span>
                      <span className="block truncate font-medium text-navy-900">hr2@conscript.net</span>
                    </span>
                  </a>
                  <div className="flex items-center gap-4 rounded-xl border border-stone-200 bg-background p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-lime-500/15 text-navy-900">
                      <Briefcase size={18} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Company
                      </span>
                      <span className="block truncate font-medium text-navy-900">
                        Conscript HR Advisors Pvt. Ltd.
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl border border-stone-200 bg-background p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-lime-500/15 text-navy-900">
                      <ShieldTick size={18} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Response time
                      </span>
                      <span className="block font-medium text-navy-900">
                        Same working day for employer enquiries
                      </span>
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-stone-200 bg-background p-7 md:p-10">
                <h2 className="font-display text-2xl font-medium tracking-tight text-navy-900">
                  Contact us
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  We reply personally. Expect a response on the same working day.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About page link after contact */}
      <section className="bg-cream-100 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 border-t border-stone-200 pt-10 md:flex-row md:items-center">
            <p className="text-sm text-muted-foreground">
              Learn more about the practice behind these forms.
            </p>
            <Link
              to="/about"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-navy-900 px-6 text-sm font-medium text-cream-100 transition-colors hover:bg-navy-800"
            >
              About {SITE_NAME}
            </Link>
          </div>
        </div>
      </section>

      <FinalCta
        title="Not sure which form to use?"
        lede="A single short email to hr2@conscript.net is enough — we'll take it from there."
      />
    </PageFade>
  )
}