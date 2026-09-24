import { Link, useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { ArrowLeft, Briefcase, Location, Timer, Wallet, ShieldTick } from 'iconsax-react'
import { useMemo } from 'react'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/shared/Reveal'
import { JobApplicationForm } from '@/components/forms/JobApplicationForm'
import { fetchJobById } from '@/services/jobs'
import { getRelatedJobs } from '@/data/jobs'
import { formatPostedDate } from '@/lib/utils'
import { usePageMeta } from '@/hooks/usePageMeta'
import { useStructuredData, jobPostingSchema } from '@/lib/structuredData'
import { SITE_URL } from '@/lib/seo'
import { PageFade } from '@/components/layout/RootLayout'

export default function JobDetailPage() {
  const params = useParams({ strict: false }) as { jobId: string }

  const query = useQuery({
    queryKey: ['job', params.jobId],
    queryFn: () => fetchJobById(params.jobId),
  })

  const job = query.data

  const schema = useMemo(() => {
    if (!job) return null
    return jobPostingSchema({
      title: job.title,
      company: job.company,
      location: job.remote ? 'India (Remote)' : job.location,
      datePosted: job.postedAt,
      employmentType: job.type === 'Internship' ? 'INTERN' : 'FULL_TIME',
      experience: job.experience,
      description: job.description.join(' '),
      url: `${SITE_URL}/jobs/${job.id}`,
    })
  }, [job])

  useStructuredData(schema)

  usePageMeta(
    job ? `${job.title} at ${job.company} — Job Opening` : 'Job',
    job ? `${job.title} role in ${job.location} with ${job.experience} experience. Manage your application through Conscript HR Advisors.` : undefined,
  )

  if (query.isPending) {
    return (
      <div className="min-h-[70vh] bg-cream-100 pb-16 pt-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <p className="text-sm text-muted-foreground">Loading role…</p>
        </div>
      </div>
    )
  }

  if (!job) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-cream-100 px-5 pb-16 pt-36">
        <div className="max-w-lg text-center">
          <p className="font-display text-5xl font-semibold text-navy-900/15">404</p>
          <h1 className="mt-4 font-display text-2xl font-medium tracking-tight text-navy-900">
            This role is no longer open.
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            The position may have been filled or the listing removed. Browse the live board or send
            us your CV and we will match you to what we are hiring for.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/jobs"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-navy-900 px-5 text-sm font-medium text-cream-100 transition-colors hover:bg-navy-800"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              Back to all jobs
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const related = getRelatedJobs(job)

  return (
    <PageFade>
      <section className="border-b border-stone-200 bg-cream-100">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-28 sm:px-6 md:pt-36">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy-900/70 transition-colors hover:text-navy-900"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            All jobs
          </Link>
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant={job.type === 'Internship' ? 'accent' : 'default'}>{job.type}</Badge>
                <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {formatPostedDate(job.postedAt)}
                </span>
              </div>
              <h1 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-navy-900 sm:text-4xl md:text-5xl">
                {job.title}
              </h1>
              <p className="mt-3 text-lg font-medium text-navy-700">{job.company}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Location size={16} aria-hidden="true" />
                  {job.remote ? 'Remote / Work from anywhere' : job.location}
                </span>
                <span className="flex items-center gap-2">
                  <Timer size={16} aria-hidden="true" />
                  {job.experience} experience
                </span>
                {job.salary ? (
                  <span className="flex items-center gap-2">
                    <Wallet size={16} aria-hidden="true" />
                    {job.salary}
                  </span>
                ) : null}
                <span className="flex items-center gap-2">
                  <Briefcase size={16} aria-hidden="true" />
                  {job.industry}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-stone-200 bg-background px-3 py-1 text-[12px] font-medium text-navy-900/75"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:col-span-4 lg:block">
              <div className="sticky top-28 rounded-xl border border-stone-200 bg-background p-7">
                <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy-500">
                  <ShieldTick size={14} aria-hidden="true" />
                  Quick summary
                </p>
                <dl className="mt-5 space-y-4 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted-foreground">Location</dt>
                    <dd className="text-right font-medium text-navy-900">
                      {job.remote ? 'Remote' : job.location}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted-foreground">Experience</dt>
                    <dd className="font-medium text-navy-900">{job.experience}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted-foreground">Type</dt>
                    <dd className="font-medium text-navy-900">{job.type}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted-foreground">Industry</dt>
                    <dd className="text-right font-medium text-navy-900">{job.industry}</dd>
                  </div>
                  {job.salary ? (
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-muted-foreground">Compensation</dt>
                      <dd className="font-medium text-navy-900">{job.salary}</dd>
                    </div>
                  ) : null}
                </dl>
                <a
                  href="#apply"
                  className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-xl bg-navy-900 text-sm font-semibold text-cream-100 transition-colors hover:bg-navy-800"
                >
                  Apply for this role
                </a>
                <p className="mt-3 text-center text-[12px] text-muted-foreground">
                  Handled by a named consultant end to end
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-14 md:py-20" id="apply">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl font-medium tracking-tight text-navy-900">
                About the role
              </h2>
              <div className="mt-6 space-y-5">
                {job.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-[15px] leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              <h2 className="mt-12 font-display text-2xl font-medium tracking-tight text-navy-900">
                Responsibilities
              </h2>
              <ul className="mt-6 space-y-3">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-navy-900/80">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-brand-lime-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 font-display text-2xl font-medium tracking-tight text-navy-900">
                What we are looking for
              </h2>
              <ul className="mt-6 space-y-3">
                {job.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-navy-900/80">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-brand-lime-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              {job.aboutCompany ? (
                <div className="mt-12 rounded-xl border border-stone-200 bg-background p-7">
                  <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-navy-500">
                    About {job.company}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{job.aboutCompany}</p>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="rounded-xl border border-stone-200 bg-background p-7 md:p-9">
                  <h2 className="font-display text-xl font-medium tracking-tight text-navy-900">
                    Apply for this role
                  </h2>
                  <div className="mt-6">
                    <JobApplicationForm jobId={job.id} jobTitle={job.title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="border-t border-stone-200 bg-cream-100 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-navy-500">
              <span className="h-px w-8 bg-navy-500" aria-hidden="true" />
              Similar roles
            </p>
            <Reveal className="mt-8">
              <ul className="border-t border-stone-200">
                {related.map((item) => (
                  <li key={item.id} className="border-b border-stone-200">
                    <Link
                      to="/jobs/$jobId"
                      params={{ jobId: item.id }}
                      className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-cream-50"
                    >
                      <div>
                        <h3 className="font-display text-lg font-medium tracking-tight text-navy-900 transition-colors group-hover:text-navy-700">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.company} · {item.remote ? 'Remote' : item.location} · {item.experience}
                        </p>
                      </div>
                      <Badge>{item.type}</Badge>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ) : null}
    </PageFade>
  )
}