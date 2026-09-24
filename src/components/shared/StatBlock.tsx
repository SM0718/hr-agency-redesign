import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface StatBlockProps {
  value: string
  label: string
  className?: string
}

export function StatBlock({ value, label, className }: StatBlockProps) {
  return (
    <div className={cn('py-6', className)}>
      <p className="font-display text-4xl font-medium tracking-tight text-navy-900 tabular sm:text-5xl">
        {value}
      </p>
      <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
    </div>
  )
}

interface StatRowProps {
  children: ReactNode
  className?: string
}

export function StatRow({ children, className }: StatRowProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200 lg:grid-cols-4',
        className,
      )}
    >
      {children}
    </div>
  )
}