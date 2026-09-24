import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'

interface PageHeaderProps {
  eyebrow: string
  title: ReactNode
  lede?: string
  meta?: string[]
  word?: string
  children?: ReactNode
  className?: string
}

export function PageHeader({ eyebrow, title, lede, meta, word, children, className }: PageHeaderProps) {
  const reduce = useReducedMotion()
  return (
    <section className={cn('relative overflow-hidden bg-navy-900 text-cream-100', className)}>
      {word ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-8 hidden select-none font-display text-[22vw] font-semibold leading-none tracking-tight text-cream-100/[0.04] lg:block"
        >
          {word}
        </span>
      ) : null}
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 sm:px-6 md:pb-20 md:pt-40">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl"
        >
          <p className="mb-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-lime-400">
            <span className="h-px w-8 bg-brand-lime-400" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="font-display text-[34px] font-medium leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-[52px]">
            {title}
          </h1>
          {lede ? (
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-cream-100/70 md:text-[17px]">
              {lede}
            </p>
          ) : null}
          {meta?.length ? (
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-cream-100/10 pt-6">
              {meta.map((item) => (
                <li key={item} className="text-[12px] font-medium uppercase tracking-[0.18em] text-cream-100/60">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </motion.div>
      </div>
    </section>
  )
}