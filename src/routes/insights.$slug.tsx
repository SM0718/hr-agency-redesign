import { createRoute } from '@tanstack/react-router'
import { lazyRoute } from '@/lib/route'
import { rootRoute } from '@/routes/__root'

export const insightDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/insights/$slug',
  component: lazyRoute(() => import('@/pages/InsightDetailPage')),
})