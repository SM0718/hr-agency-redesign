import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/shared/Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  lede?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'dark',
  className,
  id,
}: SectionHeadingProps) {
  const isLight = tone === 'light'
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'mx-auto max-w-2xl items-center text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em]',
            align === 'center' && 'justify-center',
            isLight ? 'text-brand-lime-400' : 'text-navy-500',
          )}
        >
          <span className={cn('h-px w-8', isLight ? 'bg-brand-lime-400' : 'bg-navy-500')} aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2
          id={id}
          className={cn(
            'max-w-3xl font-display font-medium leading-[1.08] tracking-tight text-balance',
            align === 'center' && 'mx-auto',
            isLight ? 'text-cream-100' : 'text-navy-900',
            'text-3xl sm:text-4xl md:text-[44px]',
          )}
        >
          {title}
        </h2>
      ) : null}
      {lede ? (
        <p
          className={cn(
            'max-w-2xl text-[15px] leading-relaxed md:text-base',
            align === 'center' && 'mx-auto',
            isLight ? 'text-cream-100/70' : 'text-muted-foreground',
          )}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  )
}