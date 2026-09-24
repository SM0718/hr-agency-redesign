import { useRef, type ReactNode } from 'react'
import { DocumentUpload } from 'iconsax-react'
import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'
import { inputBaseClass } from '@/components/ui/input'

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="text-xs font-medium text-destructive" role="alert">
      {message}
    </p>
  )
}

interface FieldProps {
  label: string
  htmlFor: string
  required?: boolean
  hint?: string
  error?: string
  children: ReactNode
  className?: string
}

export function Field({ label, htmlFor, required, hint, error, children, className }: FieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-baseline justify-between gap-3">
        <Label htmlFor={htmlFor}>
          {label}
          {required ? <span className="ml-0.5 text-destructive">*</span> : null}
        </Label>
        {hint ? <span className="text-[11px] text-muted-foreground">{hint}</span> : null}
      </div>
      {children}
      <FieldError id={`${htmlFor}-error`} message={error} />
    </div>
  )
}

export const selectFieldClass = inputBaseClass

interface FileFieldProps {
  id: string
  label: string
  required?: boolean
  hint?: string
  error?: string
  fileName?: string
  accept?: string
  disabled?: boolean
  onChange?: (file: File | null) => void
}

export function FileField({
  id,
  label,
  required,
  hint,
  error,
  fileName,
  accept = '.pdf,.doc,.docx',
  disabled,
  onChange,
}: FileFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null
    onChange?.(file)
  }

  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-3">
        <Label htmlFor={id}>
          {label}
          {required ? <span className="ml-0.5 text-destructive">*</span> : null}
        </Label>
        {hint ? <span className="text-[11px] text-muted-foreground">{hint}</span> : null}
      </div>
      <div
        className={cn(
          'flex items-center justify-between gap-3 rounded-xl border border-dashed border-stone-300 bg-cream-50 px-4 py-4 transition-colors',
          error && 'border-destructive',
        )}
      >
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-navy-900">
            {fileName ?? 'No file chosen'}
          </p>
          <p className="text-[11px] text-muted-foreground">PDF, DOC or DOCX · max 5 MB</p>
        </div>
        <input
          ref={inputRef}
          id={id}
          type="file"
          accept={accept}
          className="sr-only"
          disabled={disabled}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={disabled}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-navy-900/15 bg-navy-900 px-3 py-2 text-xs font-medium text-cream-100 transition-colors hover:bg-navy-800 disabled:opacity-50"
        >
          <DocumentUpload size={14} aria-hidden="true" />
          {fileName ? 'Replace' : 'Choose file'}
        </button>
      </div>
      <FieldError id={`${id}-error`} message={error} />
    </div>
  )
}