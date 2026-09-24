import { createRoute } from '@tanstack/react-router'
import { lazyRoute } from '@/lib/route'
import { rootRoute } from '@/routes/__root'

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: lazyRoute(() => import('@/pages/ContactPage')),
})