import { Link } from '@tanstack/react-router'
import { Export } from 'iconsax-react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { CONTACT_EMAIL } from '@/lib/seo'

interface FinalCtaProps {
  className?: string
  title: string
  lede?: string
}

export function FinalCta({ className, title, lede }: FinalCtaProps) {
  const reduce = useReducedMotion()
  return (
    <section className={cn('relative overflow-hidden bg-navy-900 text-cream-100', className)}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-16 hidden select-none font-display text-[16rem] font-semibold leading-none tracking-tighter text-cream-100/[0.04] lg:block"
      >
        R3
      </span>
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px 0px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-lime-400">
              <span className="h-px w-8 bg-brand-lime-400" aria-hidden="true" />
              Recruit. Right. Resources.
            </p>
            <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-balance sm:text-4xl md:text-[44px]">
              {title}
            </h2>
            {lede ? <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-cream-100/70">{lede}</p> : null}
          </div>
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <Link
              to="/contact"
              hash="hire"
              className="inline-flex h-12 items-center gap-2 rounded-xl px-6 text-[15px] font-medium text-navy-950 transition-colors hover:bg-brand-lime-400 bg-brand-lime-500"
            >
              Hire talent
              <Export size={16} aria-hidden="true" />
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-cream-100/25 px-6 text-[15px] font-medium text-cream-100 transition-colors hover:bg-cream-100/10"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}