import { forwardRef, type SelectHTMLAttributes } from 'react'
import { ArrowDown2 } from 'iconsax-react'
import { cn } from '@/lib/utils'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  defaultValue?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, children, ...props }, ref) => (
  <div className="relative w-full">
    <select
      ref={ref}
      className={cn(
        'w-full appearance-none rounded-xl border border-input bg-background px-3.5 py-2.5 pr-10 text-sm text-foreground transition-colors hover:border-navy-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </select>
    <ArrowDown2
      aria-hidden="true"
      size={16}
      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
    />
  </div>
))
Select.displayName = 'Select'

export { Select }