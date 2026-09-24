import { Link } from '@tanstack/react-router'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight2, Export, Calendar, Clock } from 'iconsax-react'
import { Reveal } from '@/components/shared/Reveal'
import { RevealImage } from '@/components/shared/RevealImage'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { StatBlock, StatRow } from '@/components/shared/StatBlock'
import { LogoCloud } from '@/components/shared/LogoCloud'
import { ArrowLink } from '@/components/shared/ArrowLink'
import { FinalCta } from '@/components/shared/FinalCta'
import { IndustryIcon } from '@/components/shared/IndustryIcon'
import { IMAGES, photoSrc } from '@/lib/images'
import { services, processSteps } from '@/data/services'
import { industries } from '@/data/industries'
import { insights } from '@/data/insights'
import { formatLongDate } from '@/lib/utils'
import { usePageMeta } from '@/hooks/usePageMeta'
import { SITE_NAME } from '@/lib/seo'
import { PageFade } from '@/components/layout/RootLayout'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

function Hero() {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden bg-navy-900 text-cream-100">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 bottom-0 hidden select-none font-display text-[19rem] font-semibold leading-none text-cream-100/[0.035] lg:block"
      >
        R
      </span>
      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-28 sm:px-6 md:pb-20 md:pt-44">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-7 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-lime-400"
            >
              <span className="h-px w-8 bg-brand-lime-400" aria-hidden="true" />
              HR & Recruitment Consultancy
            </motion.p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
              className="max-w-2xl font-display text-[40px] font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl"
            >
              People are the advantage.
              <span className="mt-1 block text-cream-100/55">We help you find the right ones.</span>
            </motion.h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.14, ease: EASE }}
              className="mt-7 max-w-xl text-[15px] leading-relaxed text-cream-100/70 md:text-[17px]"
            >
              Conscript helps organisations identify, attract and place capable professionals
              across industries, backed by more than 25 years of recruitment experience.
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                to="/contact"
                hash="hire"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-lime-500 px-7 text-[15px] font-semibold text-navy-950 transition-colors hover:bg-brand-lime-400"
                style={{ height: '3.25rem' }}
              >
                Hire Talent
                <Export size={17} aria-hidden="true" />
              </Link>
              <Link
                to="/jobs"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cream-100/30 px-7 text-[15px] font-semibold text-cream-100 transition-colors hover:bg-cream-100/10"
                style={{ height: '3.25rem' }}
              >
                Find a Job
              </Link>
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={reduce ? undefined : { opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] uppercase tracking-[0.16em] text-cream-100/50"
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-lime-500" aria-hidden="true" />25+
                years
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-lime-500" aria-hidden="true" />
                10,000+ placements
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-lime-500" aria-hidden="true" />
                10+ industries
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
            className="lg:col-span-5"
          >
            <RevealImage
              imageId={IMAGES.heroHome}
              src={photoSrc(IMAGES.heroHome, 1200)}
              maxWidth={1200}
              alt="Two recruitment consultants reviewing a hiring brief together in a modern office"
              eager
              className="aspect-[4/3] w-full"
            />
            <p className="mt-4 flex items-center justify-between gap-4 border-t border-cream-100/10 pt-4 text-[12px] tracking-wide text-cream-100/60">
              <span>Consultants aligning a brief with a hiring team</span>
              <span className="tabular">{SITE_NAME}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TrustStats() {
  return (
    <section className="bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6" aria-label="Conscript at a glance">
        <StatRow>
          <StatBlock value="25+" label="Years of Experience" />
          <StatBlock value="10,000+" label="Placements" />
          <StatBlock value="10+" label="Industries" />
          <StatBlock value="100+" label="Clients" />
        </StatRow>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="About Conscript"
              title="Recruitment is a relationship business. We've been building ours since our first placement."
            />
            <Reveal delay={0.05}>
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">
                <p>
                  For over 25 years, Conscript has sat between capable professionals and the
                  organisations that need them. We have built our practice on a simple premise —
                  that a shortlist of considered candidates is worth more than a flood of half-fit
                  applications.
                </p>
                <p>
                  Across IT, engineering, banking, pharma and a dozen more industries, we have
                  placed more than 10,000 professionals. Most of our work today comes from
                  relationships we built ten and twenty years ago.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="mt-9 border-l-2 border-brand-lime-500 pl-6">
                <p className="font-display text-xl font-medium leading-snug tracking-tight text-navy-900 md:text-2xl">
                  "Our job is to understand the role better than anyone, and the candidate better
                  than their own CV."
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9">
                <ArrowLink to="/about">
                  More about Conscript
                </ArrowLink>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <RevealImage
                imageId={IMAGES.aboutPrimary}
                src={photoSrc(IMAGES.aboutPrimary, 1000)}
                maxWidth={1000}
                alt="Members of the Conscript team collaborating at a table"
                className="aspect-[4/3] w-full"
              />
              <div className="hidden sm:flex flex-col justify-end">
                <RevealImage
                  imageId={IMAGES.candidatePortrait}
                  src={photoSrc(IMAGES.candidatePortrait, 800)}
                  maxWidth={800}
                  alt="A candidate in a professional setting"
                  className="aspect-[4/5] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AudienceSplit() {
  return (
    <section className="bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-stone-200 bg-stone-200 md:grid-cols-2">
          <div className="bg-background p-8 md:p-12">
            <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-navy-500">
              <span className="h-px w-8 bg-navy-500" aria-hidden="true" />
              For candidates
            </p>
            <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-navy-900 sm:text-3xl">
              Your next opportunity starts here.
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              From open roles to interview preparation, we support candidates through the change
              that matters most in their career.
            </p>
            <ul className="mt-6 space-y-3">
              {['Access to live roles across industries', 'Honest guidance on your profile', 'Support through the application process'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-navy-900/80">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-brand-lime-500" aria-hidden="true" />
                    {item}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-8">
              <ArrowLink to="/candidates">Explore for candidates</ArrowLink>
            </div>
          </div>
          <div className="flex flex-col bg-navy-900 p-8 text-cream-100 md:p-12">
            <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-lime-400">
              <span className="h-px w-8 bg-brand-lime-400" aria-hidden="true" />
              For employers
            </p>
            <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-cream-100 sm:text-3xl">
              Looking for the right talent?
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-100/70">
              We take the time to understand your requirement, then bring you a shortlist that
              fits — not a volume of applications that don't.
            </p>
            <ul className="mt-6 space-y-3">
              {['Structured sourcing and screening', 'Industry knowledge that shortcuts the search', 'Support through offer and onboarding'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-cream-100/85">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-brand-lime-500" aria-hidden="true" />
                    {item}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-8">
              <Link
                to="/employers"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-lime-400 underline-offset-4 transition-colors hover:text-brand-lime-300 hover:underline"
              >
                Explore for employers
                <ArrowRight2 size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What we do"
              title="Recruitment services with a clear process behind them."
              lede="Six services, one discipline: understand the role, find the right people, and stay around until the hire works."
            />
            <div className="mt-8">
              <ArrowLink to="/services">All services</ArrowLink>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-stone-200 border-t border-stone-200">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    hash={service.id}
                    className="group flex items-center gap-5 py-5 md:gap-8 md:py-6"
                  >
                    <span className="font-display text-sm font-semibold tracking-tight text-navy-400 md:text-base">
                      {service.number}
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-xl font-medium tracking-tight text-navy-900 transition-colors group-hover:text-navy-700 md:text-2xl">
                        {service.title}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">{service.lede}</span>
                    </span>
                    <ArrowRight2
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-navy-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-navy-900"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function IndustriesSection() {
  return (
    <section className="bg-cream-100 pb-4">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Industries"
          title="We recruit where we know the talent pool."
          lede="Each industry has its own hiring rhythm. Ours is built from decades of placing people inside these sectors."
        />
        <Reveal delay={0.1}>
          <div className="mt-14">
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200 md:grid-cols-3">
              {industries.map((industry) => (
                <li key={industry.slug} className="bg-background">
                  <Link
                    to="/industries"
                    hash={industry.slug}
                    className="group flex h-full flex-col p-6 transition-colors hover:bg-cream-50"
                  >
                    <div className="flex items-center justify-between">
                      <IndustryIcon type={industry.icon} />
                      <span className="font-display text-xs font-semibold text-stone-300">
                        {String(industries.indexOf(industry) + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-medium tracking-tight text-navy-900">
                      {industry.name}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                      {industry.roles.slice(0, 2).join(' · ')}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title="A recruitment process you can follow."
          lede="Five steps, consistently applied, whether we are finding one senior hire or running a volume programme."
        />
        <Reveal delay={0.1}>
          <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <li key={step.number} className="bg-background p-6 lg:p-7">
                <span className="font-display text-2xl font-semibold tracking-tight text-navy-900/25">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-lg font-medium tracking-tight text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

function InsightsSection() {
  const latest = [...insights]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <section className="bg-cream-100 pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Insights" title="Thinking on recruitment, written down." />
          <Reveal>
            <ArrowLink to="/insights">All insights</ArrowLink>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200 md:grid-cols-3">
            {latest.map((post) => (
              <Link
                key={post.slug}
                to="/insights/$slug"
                params={{ slug: post.slug }}
                className="group flex flex-col bg-background transition-colors hover:bg-cream-50"
              >
                <div className="overflow-hidden rounded-xl">
                  <RevealImage
                    imageId={post.heroImage}
                    src={photoSrc(post.heroImage, 1000)}
                    maxWidth={1000}
                    alt={post.title}
                    className="aspect-[16/10] w-full"
                    imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    <span className="text-navy-700 font-semibold">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-medium leading-snug tracking-tight text-navy-900 transition-colors group-hover:text-navy-700">
                    {post.title}
                  </h3>
                  <div className="mt-5 flex items-center gap-2 border-t border-stone-200 pt-5 text-xs text-muted-foreground">
                    <Calendar size={14} aria-hidden="true" />
                    {formatLongDate(post.date)}
                    <span className="ml-auto flex items-center gap-1.5 font-medium text-navy-900">
                      Read <Clock size={14} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ClientStrip() {
  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <LogoCloud />
      </div>
    </section>
  )
}

export default function HomePage() {
  usePageMeta(
    'Conscript HR Advisors Pvt. Ltd.',
    'HR consultancy and recruitment agency with 25+ years of experience and 10,000+ placements. Hire talent or find your next job with Conscript HR Advisors.',
  )

  return (
    <PageFade>
      <Hero />
      <TrustStats />
      <AboutSection />
      <AudienceSplit />
      <ServicesSection />
      <IndustriesSection />
      <ClientStrip />
      <ProcessSection />
      <InsightsSection />
      <FinalCta
        title="Let's talk about your next hire."
        lede="Tell us about the organisation you're building. We'll tell you honestly whether we can help you build it faster."
      />
    </PageFade>
  )
}