import { useLocation, useRouter } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { Add, Minus } from 'iconsax-react'
import { useEffect, useState } from 'react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ArrowLink } from '@/components/shared/ArrowLink'
import { Reveal } from '@/components/shared/Reveal'
import { services } from '@/data/services'
import { usePageMeta } from '@/hooks/usePageMeta'
import { cn } from '@/lib/utils'
import { PageFade } from '@/components/layout/RootLayout'

export default function ServicesPage() {
  const location = useLocation()
  const router = useRouter()
  const routeHash = location.hash ? location.hash.replace('#', '') : ''
  const [active, setActive] = useState(routeHash || services[0].id)

  useEffect(() => {
    if (routeHash) {
      setActive(routeHash)
      const el = document.getElementById(routeHash)
      if (el) {
        // wait a tick so the expanded content has rendered
        window.setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
      }
    }
  }, [routeHash])

  usePageMeta(
    'Our Services',
    'Talent acquisition, executive search, recruitment consulting, candidate screening, industry recruitment and employer hiring support. Recruitment services from Conscript HR Advisors.',
  )

  const toggle = (id: string) => {
    setActive((current) => {
      const next = current === id ? '' : id
      const newHash = next ? `#${next}` : undefined
      void router.navigate({ to: '/services', hash: newHash, replace: true })
      return next
    })
  }

  return (
    <PageFade>
      <PageHeader
        eyebrow="Services"
        title="Six services. One standard of care."
        word="Services"
        lede="From a single executive search to an ongoing hiring partnership, every engagement follows the same discipline: understand first, source carefully, and stay around until it works."
      />

      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  eyebrow="What we do"
                  title="Select a service to see how we run it."
                  lede="Each service can stand alone or combine with another. Most long-term relationships start with one search and grow from there."
                />
                <Reveal delay={0.1}>
                  <div className="mt-8 rounded-xl border border-stone-200 bg-background p-7">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-navy-500">
                      Not sure where to start?
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Tell us what you're trying to hire and we'll advise on the right engagement.
                    </p>
                    <div className="mt-5">
                      <ArrowLink to="/contact" hash="hire">
                        Talk to us
                      </ArrowLink>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <ul className="border-t border-stone-200">
                {services.map((service) => {
                  const isOpen = active === service.id
                  return (
                    <li
                      key={service.id}
                      id={service.id}
                      className="scroll-mt-28 border-b border-stone-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggle(service.id)}
                        aria-expanded={isOpen}
                        aria-controls={`detail-${service.id}`}
                        className="group flex w-full items-center gap-5 py-7 text-left md:gap-8"
                      >
                        <span className="font-display text-base font-semibold tabular text-navy-400 md:text-lg">
                          {service.number}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span
                            className={cn(
                              'block font-display text-xl font-medium tracking-tight transition-colors md:text-2xl',
                              isOpen ? 'text-navy-900' : 'text-navy-900/80',
                            )}
                          >
                            {service.title}
                          </span>
                          <span className="mt-1 block max-w-xl text-sm text-muted-foreground">
                            {service.lede}
                          </span>
                        </span>
                        <span
                          className={cn(
                            'flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition-all',
                            isOpen
                              ? 'border-navy-900 bg-navy-900 text-cream-100'
                              : 'border-stone-300 text-navy-900 group-hover:border-navy-900',
                          )}
                        >
                          {isOpen ? <Minus size={15} aria-hidden="true" /> : <Add size={15} aria-hidden="true" />}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            key="detail"
                            id={`detail-${service.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="overflow-hidden"
                          >
                            <div className="grid grid-cols-1 gap-8 pb-8 pl-[52px] md:pl-[68px] md:grid-cols-2">
                              <div className="space-y-4">
                                {service.body.map((paragraph) => (
                                  <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-muted-foreground">
                                    {paragraph}
                                  </p>
                                ))}
                                <ArrowLink to="/contact" hash="hire">
                                  Discuss {service.title.toLowerCase()}
                                </ArrowLink>
                              </div>
                              <div className="rounded-xl border border-stone-200 bg-background p-6">
                                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-navy-500">
                                  What you get
                                </p>
                                <ul className="mt-4 space-y-3">
                                  {service.outcomes.map((outcome) => (
                                    <li key={outcome} className="flex items-start gap-3 text-sm text-navy-900/80">
                                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-brand-lime-500" aria-hidden="true" />
                                      {outcome}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageFade>
  )
}