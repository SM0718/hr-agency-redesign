import { Link, useLocation } from '@tanstack/react-router'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Export, CloseSquare, Menu } from 'iconsax-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { CONTACT_EMAIL, TAGLINE } from '@/lib/seo'
import { useUiStore } from '@/stores/ui'
import { Wordmark } from '@/components/layout/Wordmark'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'For Candidates', to: '/candidates' },
  { label: 'For Employers', to: '/employers' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Internships', to: '/internships' },
  { label: 'Insights', to: '/insights' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

const OVERLAY_PATHS = [
  '/',
  '/candidates',
  '/employers',
  '/services',
  '/industries',
  '/internships',
  '/about',
  '/social-responsibility',
  '/press',
  '/insights',
  '/contact',
]

export function Header() {
  const location = useLocation()
  const pathname = location.pathname
  const { mobileNavOpen, setMobileNavOpen } = useUiStore()
  const [scrolled, setScrolled] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileNavOpen(false)
  }, [pathname, setMobileNavOpen])

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden'
      const onKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') setMobileNavOpen(false)
      }
      window.addEventListener('keydown', onKey)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', onKey)
      }
    }
  }, [mobileNavOpen, setMobileNavOpen])

  const isOverlay = OVERLAY_PATHS.includes(pathname)
  const isTransparent = isOverlay && !scrolled

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        isTransparent
          ? 'border-b border-cream-100/10'
          : 'border-b border-stone-200 bg-cream-100/95 backdrop-blur-md',
      )}
    >
      <div
        className={cn(
          'hidden overflow-hidden border-b border-cream-100/10 bg-navy-950 text-cream-100/70 transition-all duration-300 md:block',
          isTransparent ? 'max-h-10' : 'max-h-0',
        )}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-5 text-[11px] sm:px-6">
          <p className="font-medium uppercase tracking-[0.2em]">{TAGLINE}</p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-cream-100"
            >
              {CONTACT_EMAIL}
            </a>
            <Link
              to="/employers"
              className="inline-flex items-center gap-1 text-brand-lime-400 transition-colors hover:text-brand-lime-300"
            >
              For Employers
              <Export size={12} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-6 md:h-[72px]">
          <Wordmark tone={isTransparent ? 'light' : 'dark'} />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-4 lg:flex xl:gap-6"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.to)
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    'group relative py-2 text-[13px] font-medium tracking-tight transition-colors',
                    isTransparent
                      ? active
                        ? 'text-brand-lime-300'
                        : 'text-cream-100/85 hover:text-cream-100'
                      : active
                        ? 'text-navy-900'
                        : 'text-navy-900/70 hover:text-navy-900',
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-brand-lime-500 transition-transform duration-200',
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Link
              to="/jobs"
              className={cn(
                'inline-flex h-10 items-center rounded-xl px-4 text-[13px] font-medium transition-colors',
                isTransparent
                  ? 'border border-cream-100/25 text-cream-100 hover:bg-cream-100/10'
                  : 'border border-navy-900/15 text-navy-900 hover:bg-navy-900/5',
              )}
            >
              Find a Job
            </Link>
            <Link
              to="/contact"
              hash="hire"
              className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-brand-lime-500 px-4 text-[13px] font-semibold text-navy-950 transition-colors hover:bg-brand-lime-400"
            >
              Hire Talent
              <Export size={14} aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileNavOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-xl transition-colors lg:hidden',
              isTransparent
                ? 'text-cream-100 hover:bg-cream-100/10'
                : 'text-navy-900 hover:bg-navy-900/5',
            )}
          >
            {mobileNavOpen ? (
              <CloseSquare size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileNavOpen ? (
          <motion.div
            key="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-navy-950 px-5 pb-10 pt-24 lg:hidden"
          >
            <nav aria-label="Mobile" className="border-t border-cream-100/10">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={reduce ? undefined : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: reduce ? 0 : 0.05 * index }}
                  className="border-b border-cream-100/10"
                >
                  <Link
                    to={item.to}
                    className={cn(
                      'flex items-center justify-between py-5 font-display text-2xl font-medium tracking-tight transition-colors',
                      isActive(item.to)
                        ? 'text-brand-lime-400'
                        : 'text-cream-100 hover:text-brand-lime-300',
                    )}
                  >
                    {item.label}
                    <Export size={18} className="opacity-50" aria-hidden="true" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-10 flex flex-col gap-3">
              <Link
                to="/jobs"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-cream-100 text-[15px] font-semibold text-navy-950"
              >
                Find a Job
              </Link>
              <Link
                to="/contact"
                hash="hire"
                className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-brand-lime-500 text-[15px] font-semibold text-navy-950"
              >
                Hire Talent
                <Export size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 space-y-2 border-t border-cream-100/10 pt-8 text-sm text-cream-100/60">
              <p>{CONTACT_EMAIL}</p>
              <p className="max-w-xs text-xs leading-relaxed">
                25+ years of recruitment experience. 10,000+ placements across 10+ industries.
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}