import { z } from 'zod'

export const jobsSearchSchema = z.object({
  keyword: z.string().optional(),
  location: z.string().optional(),
  industry: z.string().optional(),
  experience: z.string().optional(),
})

export type JobsSearchParams = z.infer<typeof jobsSearchSchema>

export function parseJobsSearch(search: Record<string, unknown> | undefined): JobsSearchParams {
  return jobsSearchSchema.parse(search ?? {})
}

export const insightsSearchSchema = z.object({
  category: z.string().optional(),
})

export type InsightsSearchParams = z.infer<typeof insightsSearchSchema>

export function parseInsightsSearch(
  search: Record<string, unknown> | undefined,
): InsightsSearchParams {
  return insightsSearchSchema.parse(search ?? {})
}