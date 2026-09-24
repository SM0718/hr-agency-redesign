import { createRoute } from '@tanstack/react-router'
import { lazyRoute } from '@/lib/route'
import { rootRoute } from '@/routes/__root'

export const pressRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/press',
  component: lazyRoute(() => import('@/pages/PressPage')),
})