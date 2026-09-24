import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

interface WordmarkProps {
  tone?: 'dark' | 'light'
}

export function Wordmark({ tone = 'dark' }: WordmarkProps) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Conscript HR Advisors — Home">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-brand-lime-500">
        <span className="font-display text-lg font-semibold text-navy-950">C</span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-[21px] font-semibold tracking-tight',
            tone === 'light' ? 'text-cream-100' : 'text-navy-900',
          )}
        >
          Conscript
        </span>
        <span
          className={cn(
            'mt-1 text-[9px] font-semibold uppercase tracking-[0.28em]',
            tone === 'light' ? 'text-cream-100/60' : 'text-navy-900/55',
          )}
        >
          HR Advisors Pvt. Ltd.
        </span>
      </span>
    </Link>
  )
}