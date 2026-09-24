import { Link } from '@tanstack/react-router'
import { Home2, Briefcase, Send } from 'iconsax-react'
import { usePageMeta } from '@/hooks/usePageMeta'
import { PageFade } from '@/components/layout/RootLayout'

export default function NotFoundPage() {
  usePageMeta(
    'Page not found',
    'The page you were looking for could not be found on the Conscript HR Advisors website.',
  )

  return (
    <PageFade>
      <section className="bg-cream-100 py-28 md:py-40">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-6">
          <p className="font-display text-[clamp(5rem,16vw,10rem)] font-medium leading-none tracking-tight text-brand-lime-600">
            404
          </p>
          <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-navy-900 sm:text-4xl">
            This page has left the building.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            The address you followed doesn't exist or may have moved. Let's get you back to a page
            that does.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-navy-900 px-6 text-sm font-medium text-cream-100 transition-colors hover:bg-navy-800"
            >
              <Home2 size={16} aria-hidden="true" />
              Back to home
            </Link>
            <Link
              to="/jobs"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-navy-900/20 px-6 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900/5"
            >
              <Briefcase size={16} aria-hidden="true" />
              Browse jobs
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-navy-900/20 px-6 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900/5"
            >
              <Send size={16} aria-hidden="true" />
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </PageFade>
  )
}