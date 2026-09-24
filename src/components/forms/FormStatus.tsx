import { TickCircle, Danger } from 'iconsax-react'
import { cn } from '@/lib/utils'

interface FormStatusProps {
  kind: 'success' | 'error'
  title: string
  body?: string
  reference?: string
  className?: string
}

export function FormStatus({ kind, title, body, reference, className }: FormStatusProps) {
  const isSuccess = kind === 'success'
  return (
    <div
      role={isSuccess ? 'status' : 'alert'}
      className={cn(
        'flex gap-4 rounded-xl border p-5',
        isSuccess ? 'border-brand-lime-600/40 bg-brand-lime-500/10' : 'border-destructive/40 bg-destructive/5',
        className,
      )}
    >
      <div
        className={cn(
          'flex h-9 w-9 shrink-0 items-center justify-center rounded-md',
          isSuccess ? 'bg-brand-lime-500/20 text-navy-900' : 'bg-destructive/15 text-destructive',
        )}
      >
        {isSuccess ? <TickCircle size={18} aria-hidden="true" /> : <Danger size={18} aria-hidden="true" />}
      </div>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-navy-900">{title}</p>
        {body ? <p className="text-sm leading-relaxed text-muted-foreground">{body}</p> : null}
        {reference ? (
          <p className="text-xs font-medium uppercase tracking-wide text-navy-900/70">
            Reference: {reference}
          </p>
        ) : null}
      </div>
    </div>
  )
}