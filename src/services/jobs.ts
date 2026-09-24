import type { JobFilters, JobPosting } from '@/types'
import { jobPostings } from '@/data/jobs'
import { insights, getInsightBySlug, getRelatedInsights } from '@/data/insights'
import type { InsightPost } from '@/types'

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

export type FetchJobsParams = Partial<JobFilters>

export function filterJobs(filters: FetchJobsParams): JobPosting[] {
  const keyword = filters.keyword?.trim().toLowerCase() ?? ''
  const location = filters.location?.trim().toLowerCase() ?? ''
  const industry = filters.industry ?? ''
  const experience = filters.experience ?? ''

  return jobPostings
    .filter((job) => {
      if (keyword) {
        const haystack = [job.title, job.company, job.industry, job.skills.join(' ')]
          .join(' ')
          .toLowerCase()
        if (!haystack.includes(keyword)) return false
      }
      if (location) {
        const jobLocation = job.remote ? 'remote' : job.location.toLowerCase()
        if (!jobLocation.includes(location)) return false
      }
      if (industry && job.industry !== industry) return false
      if (experience) {
        const [min] = experience.split('-').map((part) => Number.parseInt(part, 10) || 0)
        if (job.experienceMin < min) return false
      }
      return true
    })
    .sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime())
}

export async function fetchJobs(filters: FetchJobsParams = {}): Promise<JobPosting[]> {
  await wait(350)
  return filterJobs(filters)
}

export async function fetchJobById(id: string): Promise<JobPosting | undefined> {
  await wait(200)
  return jobPostings.find((job) => job.id === id)
}

export async function preferRefetch(): Promise<void> {
  await wait(50)
}

export interface ApplicationPayload {
  jobId: string
  name: string
  email: string
  phone: string
  resume?: { name: string } | null
  linkedin?: string
  message?: string
}

export async function submitApplication(_payload: ApplicationPayload): Promise<{ ok: true; id: string }> {
  await wait(1200)
  return { ok: true, id: Math.random().toString(36).slice(2) }
}

export async function fetchInsights(): Promise<InsightPost[]> {
  await wait(250)
  return insights
}

export async function fetchInsightBySlug(slug: string): Promise<InsightPost | undefined> {
  await wait(200)
  return getInsightBySlug(slug)
}

export async function fetchRelatedInsights(post: InsightPost): Promise<InsightPost[]> {
  await wait(200)
  return getRelatedInsights(post)
}