import { createRoute } from '@tanstack/react-router'
import { lazyRoute } from '@/lib/route'
import { rootRoute } from '@/routes/__root'

export const socialResponsibilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/social-responsibility',
  component: lazyRoute(() => import('@/pages/SocialResponsibilityPage')),
})