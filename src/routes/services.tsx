import { createRoute } from '@tanstack/react-router'
import { lazyRoute } from '@/lib/route'
import { rootRoute } from '@/routes/__root'

export const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: lazyRoute(() => import('@/pages/ServicesPage')),
})