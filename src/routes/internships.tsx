import { createRoute } from '@tanstack/react-router'
import { lazyRoute } from '@/lib/route'
import { rootRoute } from '@/routes/__root'

export const internshipsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/internships',
  component: lazyRoute(() => import('@/pages/InternshipsPage')),
})