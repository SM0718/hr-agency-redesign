import { createRoute } from '@tanstack/react-router'
import { lazyRoute } from '@/lib/route'
import { parseInsightsSearch } from '@/lib/searchParams'
import { rootRoute } from '@/routes/__root'

export const insightsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/insights',
  validateSearch: parseInsightsSearch,
  component: lazyRoute(() => import('@/pages/InsightsPage')),
})