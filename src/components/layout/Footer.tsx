import { Link } from '@tanstack/react-router'
import { CONTACT_EMAIL } from '@/lib/seo'
import { Wordmark } from '@/components/layout/Wordmark'

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about', hash: undefined as string | undefined },
      { label: 'Social Responsibility', to: '/social-responsibility', hash: undefined },
      { label: 'Press', to: '/press', hash: undefined },
      { label: 'Insights', to: '/insights', hash: undefined },
      { label: 'Contact', to: '/contact', hash: undefined },
    ],
  },
  {
    heading: 'For Candidates',
    links: [
      { label: 'Search Jobs', to: '/jobs', hash: undefined },
      { label: 'Internships', to: '/internships', hash: undefined },
      { label: 'Candidate Support', to: '/candidates', hash: 'support' },
      { label: 'Candidate Insights', to: '/insights', hash: undefined },
    ],
  },
  {
    heading: 'For Employers',
    links: [
      { label: 'Hire Talent', to: '/contact', hash: 'hire' },
      { label: 'Services', to: '/services', hash: undefined },
      { label: 'Industries', to: '/industries', hash: undefined },
      { label: 'Recruitment Consulting', to: '/services', hash: 'consulting' },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Wordmark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              An HR consultancy and recruitment agency helping organisations identify, attract and
              place capable professionals across industries — with 25+ years of experience and
              10,000+ placements behind it.
            </p>
            <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-navy-500">
              Recruit. Right. Resources.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex w-fit items-center gap-2 font-medium text-navy-900 underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 font-medium text-navy-900 underline-offset-4 hover:underline"
              >
                LinkedIn profile
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading} className="md:col-span-2">
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-navy-900/50">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={`${column.heading}-${link.label}`}>
                    <Link
                      to={link.to}
                      hash={link.hash}
                      className="text-sm text-navy-900/75 transition-colors hover:text-navy-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-stone-200 pt-6">
          <p className="max-w-3xl text-[12px] leading-relaxed text-muted-foreground/80">
            The organisations named across this website are a selection of those we have worked
            with and placed for over more than two decades. Their logos and brands remain the
            property of their respective owners and are shown for reference only.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-stone-200 pt-6 text-[12px] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Conscript HR Advisors Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="transition-colors hover:text-navy-900">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-navy-900">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}