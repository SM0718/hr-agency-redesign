import { createRoute } from '@tanstack/react-router'
import { lazyRoute } from '@/lib/route'
import { parseJobsSearch } from '@/lib/searchParams'
import { rootRoute } from '@/routes/__root'

export const jobsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/jobs',
  validateSearch: parseJobsSearch,
  component: lazyRoute(() => import('@/pages/JobsPage')),
})