import { Link, useNavigate } from '@tanstack/react-router'
import { ArrowRight2, SearchNormal, Send } from 'iconsax-react'
import { useState } from 'react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal } from '@/components/shared/Reveal'
import { RevealImage } from '@/components/shared/RevealImage'
import { FinalCta } from '@/components/shared/FinalCta'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { IMAGES, photoSrc } from '@/lib/images'
import { jobIndustries } from '@/data/jobs'
import { usePageMeta } from '@/hooks/usePageMeta'
import { CONTACT_EMAIL } from '@/lib/seo'
import { PageFade } from '@/components/layout/RootLayout'

const experienceOptions = ['Fresher', '1–3 years', '3–6 years', '6–10 years', '10+ years']

function SearchPanel() {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('')
  const [industry, setIndustry] = useState('')
  const [experience, setExperience] = useState('')

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    void navigate({
      to: '/jobs',
      search: { keyword: keyword || undefined, location: location || undefined, industry: industry || undefined, experience: experience || undefined },
    })
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-cream-100/15 bg-cream-100/15 md:grid-cols-4"
    >
      <div className="bg-cream-100 p-1">
        <label htmlFor="cand-keyword" className="sr-only">
          Keyword
        </label>
        <Input
          id="cand-keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Keyword · role, skill or company"
          className="border-0 bg-transparent shadow-none focus-visible:ring-0"
        />
      </div>
      <div className="bg-cream-100 p-1">
        <label htmlFor="cand-location" className="sr-only">
          Location
        </label>
        <Input
          id="cand-location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border-0 bg-transparent shadow-none focus-visible:ring-0"
        />
      </div>
      <div className="bg-cream-100 p-1">
        <label htmlFor="cand-industry" className="sr-only">
          Industry
        </label>
        <Select
          id="cand-industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="border-0 bg-transparent shadow-none focus-visible:ring-0"
        >
          <option value="">All industries</option>
          {jobIndustries.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </div>
      <div className="flex items-stretch bg-cream-100 p-1">
        <label htmlFor="cand-experience" className="sr-only">
          Experience
        </label>
        <Select
          id="cand-experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="border-0 bg-transparent shadow-none focus-visible:ring-0"
        >
          <option value="">Any experience</option>
          {experienceOptions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <button
          type="submit"
          className="ml-2 inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-brand-lime-500 px-5 text-sm font-semibold text-navy-950 transition-colors hover:bg-brand-lime-400"
        >
          <SearchNormal size={16} aria-hidden="true" />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </form>
  )
}

const supportItems = [
  {
    title: 'Roles matched to your profile',
    body: 'We keep your details against live requirements and reach out when a role genuinely fits your experience and expectations.',
  },
  {
    title: 'Practical guidance, not generic advice',
    body: 'Feedback on your CV, honest assessment of your market position and preparation for the interviews we arrange for you.',
  },
  {
    title: 'One conversation, many doors',
    body: 'Register once and we represent you across the roles we are handling — no repeated forms for every application.',
  },
]

const candidateSteps = [
  {
    number: '01',
    title: 'Send us your profile',
    body: 'Email your CV with a short note on what you are looking for. No portals, no forms to repeat.',
  },
  {
    number: '02',
    title: 'We understand your intent',
    body: 'A consultant discusses your experience, expectations and constraints — the things a form never captures.',
  },
  {
    number: '03',
    title: 'Matching and preparation',
    body: 'When a role fits, we prepare you for it and manage the coordination with the employer.',
  },
  {
    number: '04',
    title: 'Offer and transition',
    body: 'We stay involved through the offer, the joining and the first few months of your new role.',
  },
]

export default function CandidatesPage() {
  usePageMeta(
    'For Candidates',
    'Job search, candidate support and career opportunities with Conscript HR Advisors. Send us your profile and find your next opportunity.',
    photoSrc(IMAGES.candidatePortrait, 1200),
  )

  return (
    <PageFade>
      <PageHeader
        eyebrow="For candidates"
        title="Your next opportunity starts here."
        word="Candidates"
        lede="We place professionals across industries — IT, engineering, banking, pharma and more. Tell us what you are looking for, and we will bring the matching roles to you."
      />

      <section className="bg-navy-900 text-cream-100">
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-6">
          <SearchPanel />
        </div>
      </section>

      <section className="bg-cream-100 py-20 md:py-28" id="support">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Candidate support"
                title="The support around the placement is where a good agency earns its keep."
                lede="A placement is the beginning, not the end. We structure the whole experience around how a career change actually works."
              />
              <ul className="mt-10 space-y-8">
                {supportItems.map((item, index) => (
                  <Reveal key={item.title} delay={0.05 * index}>
                    <li className="grid grid-cols-[28px_1fr] gap-4 border-t border-stone-200 pt-6">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-lime-500/15 font-display text-sm font-semibold text-navy-900">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-medium tracking-tight text-navy-900">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <RevealImage
                imageId={IMAGES.candidateInterview}
                src={photoSrc(IMAGES.candidateInterview, 1100)}
                maxWidth={1100}
                alt="A consultant speaking with a candidate about her career path"
                className="aspect-[4/3] w-full"
              />
              <div className="mt-8 grid grid-cols-1 gap-6 rounded-xl border border-stone-200 bg-background p-7 sm:grid-cols-2">
                <div>
                  <p className="font-display text-2xl font-medium tabular text-navy-900">10,000+</p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                    Professionals placed
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-medium tabular text-navy-900">10+</p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                    Industries we work across
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 border-t border-stone-200 py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-navy-500">
              <span className="h-px w-8 bg-navy-500" aria-hidden="true" />
              Career opportunities
            </p>
            <h2 className="mt-5 font-display text-2xl font-medium tracking-tight text-navy-900 sm:text-3xl">
              Live roles are published on our job board. Your profile can also sit with us.
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/jobs"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 text-[15px] font-medium text-cream-100 transition-colors hover:bg-navy-800"
            >
              Browse open roles
              <ArrowRight2 size={16} aria-hidden="true" />
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('CV — Candidate Registration')}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-stone-300 px-6 text-[15px] font-medium text-navy-900 transition-colors hover:bg-navy-900/5"
            >
              Send us your CV
              <Send size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps from your CV to your next role."
          />
          <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
            {candidateSteps.map((step) => (
              <li key={step.number} className="bg-background p-7">
                <span className="font-display text-2xl font-semibold text-navy-900/25">{step.number}</span>
                <h3 className="mt-4 font-display text-lg font-medium tracking-tight text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream-100 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-stone-200 bg-navy-900 text-cream-100 md:grid-cols-12">
            <div className="md:col-span-7 p-8 md:p-12">
              <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-lime-400">
                <span className="h-px w-8 bg-brand-lime-400" aria-hidden="true" />
                Internships
              </p>
              <h2 className="mt-5 max-w-xl font-display text-2xl font-medium tracking-tight text-cream-100 sm:text-3xl">
                Begin your career with practical exposure — from wherever you are.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream-100/70">
                Our internships run fully remote, 4–8 hours a day, across 2 to 6+ months. You work
                inside live recruitment processes, not practice exercises.
              </p>
              <div className="mt-8">
                <Link
                  to="/internships"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-lime-400 transition-colors hover:text-brand-lime-300"
                >
                  Explore internships
                  <ArrowRight2 size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <RevealImage
                imageId={IMAGES.studentGroup}
                src={photoSrc(IMAGES.studentGroup, 900)}
                maxWidth={900}
                alt="Interns collaborating on their laptops from different locations"
                className="h-full min-h-[260px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Ready to find your next role?"
        lede="Send us your CV and a line about what you are looking for. A consultant will come back with an honest view of how we can help."
      />
    </PageFade>
  )
}