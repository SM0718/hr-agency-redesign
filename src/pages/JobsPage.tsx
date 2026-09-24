import { Link, useRouter, useSearch } from '@tanstack/react-router'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { ArrowRight2, Calendar, CloseSquare, Location, SearchNormal, Timer, Wallet } from 'iconsax-react'
import { useEffect, useRef, useState } from 'react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Reveal } from '@/components/shared/Reveal'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { usePageMeta } from '@/hooks/usePageMeta'
import { useDebouncedValue } from '@/hooks/useDebouncedValue'
import { fetchJobs } from '@/services/jobs'
import { jobIndustries, jobLocations } from '@/data/jobs'
import { formatPostedDate } from '@/lib/utils'
import { CONTACT_EMAIL } from '@/lib/seo'
import type { JobsSearchParams } from '@/lib/searchParams'
import { cn } from '@/lib/utils'
import { PageFade } from '@/components/layout/RootLayout'

const experienceOptions = ['Fresher', '1–3 years', '3–6 years', '6–10 years', '10+ years']

export default function JobsPage() {
  const search = useSearch({ strict: false }) as JobsSearchParams
  const router = useRouter()

  const [keyword, setKeyword] = useState(search.keyword ?? '')
  const [location, setLocation] = useState(search.location ?? '')
  const [industry, setIndustry] = useState(search.industry ?? '')
  const [experience, setExperience] = useState(search.experience ?? '')
  const debouncedKeyword = useDebouncedValue(keyword, 400)

  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    void router.navigate({
      to: '/jobs',
      search: {
        keyword: debouncedKeyword.trim() || undefined,
        location: location.trim() || undefined,
        industry: industry || undefined,
        experience: experience || undefined,
      },
      replace: true,
    })
  }, [debouncedKeyword, location, industry, experience, router])

  usePageMeta(
    'Jobs',
    'Browse open recruitment and employment opportunities across IT, engineering, banking, pharma, accounting and more, placed by Conscript HR Advisors.',
  )

  const query = useQuery({
    queryKey: ['jobs', { keyword: debouncedKeyword.toLowerCase().trim(), location: location.toLowerCase().trim(), industry, experience }],
    queryFn: () =>
      fetchJobs({
        keyword: debouncedKeyword,
        location,
        industry,
        experience,
      }),
    placeholderData: keepPreviousData,
  })

  const hasFilters = Boolean(keyword || location || industry || experience)

  const clearFilters = () => {
    setKeyword('')
    setLocation('')
    setIndustry('')
    setExperience('')
  }

  return (
    <PageFade>
      <PageHeader
        eyebrow="Job board"
        title="Live roles, placed by people who know the market."
        word="Jobs"
        lede="Openings we are currently recruiting for across our client organisations. Every role is handled by a named consultant you can reach."
        meta={[`${jobIndustries.length}+ industries`, 'New roles listed weekly']}
      />

      <section className="border-b border-stone-200 bg-cream-100">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200 md:grid-cols-[1.4fr_1fr_0.9fr_0.9fr_auto]">
            <div className="bg-background p-1">
              <label htmlFor="jb-keyword" className="sr-only">
                Keyword
              </label>
              <Input
                id="jb-keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Keyword · role, skill or company"
                className="border-0 bg-transparent shadow-none focus-visible:ring-0"
              />
            </div>
            <div className="bg-background p-1">
              <label htmlFor="jb-location" className="sr-only">
                Location
              </label>
              <Input
                id="jb-location"
                list="jb-locations"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="border-0 bg-transparent shadow-none focus-visible:ring-0"
              />
              <datalist id="jb-locations">
                {jobLocations.map((item) => (
                  <option key={item} value={item} />
                ))}
              </datalist>
            </div>
            <div className="bg-background p-1">
              <label htmlFor="jb-industry" className="sr-only">
                Industry
              </label>
              <Select
                id="jb-industry"
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
            <div className="bg-background p-1">
              <label htmlFor="jb-experience" className="sr-only">
                Experience
              </label>
              <Select
                id="jb-experience"
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
            </div>
            <button
              type="button"
              onClick={hasFilters ? clearFilters : undefined}
              disabled={!hasFilters}
              className={cn(
                'flex items-center justify-center gap-2 border-t border-stone-200 bg-background px-5 text-sm font-medium transition-colors md:border-t-0 md:border-l',
                hasFilters ? 'text-navy-900 hover:bg-cream-50' : 'cursor-default text-muted-foreground/50',
              )}
            >
              <CloseSquare size={15} aria-hidden="true" />
              <span className="hidden lg:inline">Clear</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              {query.isPending ? (
                'Loading roles…'
              ) : (
                <>
                  {query.data?.length ?? 0} role{query.data?.length === 1 ? '' : 's'}
                  {hasFilters ? ' match your filters' : ' currently open'}
                </>
              )}
            </p>
            <p className="text-[12px] text-muted-foreground">
              Can't find your fit? <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-navy-900 underline-offset-2 hover:underline">Send us your CV</a>
            </p>
          </div>

          <Reveal className="mt-8">
            {query.data?.length ? (
              <ul className="border-t border-stone-200">
                {query.data.map((job, index) => (
                  <li
                    key={job.id}
                    className={cn('border-b border-stone-200', index % 2 === 1 && 'bg-cream-50/60')}
                  >
                    <Link
                      to="/jobs/$jobId"
                      params={{ jobId: job.id }}
                      className="group grid grid-cols-1 gap-4 px-1 py-6 transition-colors md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:px-4 md:hover:bg-cream-50"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h2 className="font-display text-xl font-medium tracking-tight text-navy-900 transition-colors group-hover:text-navy-700 md:text-2xl">
                            {job.title}
                          </h2>
                          <Badge variant={job.type === 'Internship' ? 'accent' : 'default'}>{job.type}</Badge>
                        </div>
                        <p className="mt-2 text-sm font-medium text-navy-700">
                          {job.company}
                          <span className="mx-2 text-stone-300" aria-hidden="true">·</span>
                          <span className="text-muted-foreground">{job.industry}</span>
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Location size={14} aria-hidden="true" />
                            {job.remote ? 'Remote / Work from anywhere' : job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Timer size={14} aria-hidden="true" />
                            {job.experience}
                          </span>
                          {job.salary ? (
                            <span className="flex items-center gap-1.5">
                              <Wallet size={14} aria-hidden="true" />
                              {job.salary}
                            </span>
                          ) : null}
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} aria-hidden="true" />
                            {formatPostedDate(job.postedAt)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-6 md:flex-col md:items-end">
                        <span className="font-display text-2xl font-medium tabular text-navy-900/20 md:hidden">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-navy-900 transition-all group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-cream-100">
                          <SearchNormal size={17} aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : query.isPending ? null : (
              <div className="flex flex-col items-start gap-5 rounded-xl border border-stone-200 bg-background p-10">
                <p className="font-display text-xl font-medium tracking-tight text-navy-900">
                  No roles match those filters right now.
                </p>
                <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                  Requirements change weekly. Register your profile and we will match you when a
                  suitable role opens up.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="inline-flex h-11 items-center gap-2 rounded-xl bg-navy-900 px-5 text-sm font-medium text-cream-100 transition-colors hover:bg-navy-800"
                  >
                    Clear filters
                  </button>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('CV — Candidate Registration')}`}
                    className="inline-flex h-11 items-center gap-2 rounded-xl border border-stone-300 px-5 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900/5"
                  >
                    Send us your CV
                    <ArrowRight2 size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </PageFade>
  )
}