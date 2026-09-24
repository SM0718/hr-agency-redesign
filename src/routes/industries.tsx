import { createRoute } from '@tanstack/react-router'
import { lazyRoute } from '@/lib/route'
import { rootRoute } from '@/routes/__root'

export const industriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/industries',
  component: lazyRoute(() => import('@/pages/IndustriesPage')),
})