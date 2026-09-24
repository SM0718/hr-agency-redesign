import { createRoute } from '@tanstack/react-router'
import { lazyRoute } from '@/lib/route'
import { rootRoute } from '@/routes/__root'

export const employersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/employers',
  component: lazyRoute(() => import('@/pages/EmployersPage')),
})