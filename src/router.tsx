import { createRouter } from '@tanstack/react-router'
import { rootRoute } from '@/routes/__root'
import { indexRoute } from '@/routes/index'
import { candidatesRoute } from '@/routes/candidates'
import { jobsRoute } from '@/routes/jobs'
import { jobDetailRoute } from '@/routes/jobs.$jobId'
import { employersRoute } from '@/routes/employers'
import { servicesRoute } from '@/routes/services'
import { industriesRoute } from '@/routes/industries'
import { internshipsRoute } from '@/routes/internships'
import { aboutRoute } from '@/routes/about'
import { socialResponsibilityRoute } from '@/routes/social-responsibility'
import { pressRoute } from '@/routes/press'
import { insightsRoute } from '@/routes/insights'
import { insightDetailRoute } from '@/routes/insights.$slug'
import { contactRoute } from '@/routes/contact'
import { privacyRoute } from '@/routes/privacy'
import { termsRoute } from '@/routes/terms'

const routeTree = rootRoute.addChildren([
  indexRoute,
  candidatesRoute,
  jobsRoute,
  jobDetailRoute,
  employersRoute,
  servicesRoute,
  industriesRoute,
  internshipsRoute,
  aboutRoute,
  socialResponsibilityRoute,
  pressRoute,
  insightsRoute,
  insightDetailRoute,
  contactRoute,
  privacyRoute,
  termsRoute,
])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}