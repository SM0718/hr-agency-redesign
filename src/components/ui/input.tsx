import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export const inputBaseClass =
  'w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-none transition-colors placeholder:text-muted-foreground/70 hover:border-navy-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
  <input ref={ref} type={type} className={cn(inputBaseClass, className)} {...props} />
))
Input.displayName = 'Input'

export { Input }