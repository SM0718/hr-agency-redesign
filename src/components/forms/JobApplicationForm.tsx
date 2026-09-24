import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field, FileField } from '@/components/forms/fields'
import { FormStatus } from '@/components/forms/FormStatus'
import { submitApplication, type ApplicationPayload } from '@/services/jobs'

const ACCEPTED_MIME = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().regex(/^[+\d][\d\s-]{7,14}$/, 'Enter a valid phone number'),
  resume: z
    .instanceof(File, { message: 'Please attach your resume' })
    .refine((file) => file.size <= 5_000_000, 'Resume must be under 5 MB')
    .refine((file) => ACCEPTED_MIME.includes(file.type), 'Upload a PDF, DOC or DOCX file'),
  linkedin: z
    .string()
    .url('Enter a valid LinkedIn URL')
    .optional()
    .or(z.literal('')),
  message: z.string().max(1200, 'Keep the message under 1200 characters').optional(),
})

type Schema = z.infer<typeof schema>

interface JobApplicationFormProps {
  jobId: string
  jobTitle: string
}

export function JobApplicationForm({ jobId, jobTitle }: JobApplicationFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({ resolver: zodResolver(schema), mode: 'onBlur' })

  const resumeName = watch('resume')?.name

  const mutation = useMutation({
    mutationFn: (payload: ApplicationPayload) => submitApplication(payload),
  })

  const onSubmit = (values: Schema) => {
    mutation.mutate(
      {
        jobId,
        name: values.name,
        email: values.email,
        phone: values.phone,
        linkedin: values.linkedin,
        message: values.message,
        resume: values.resume ? { name: values.resume.name } : null,
      },
      { onSuccess: () => reset() },
    )
  }

  return (
    <div>
      <p className="mb-6 text-sm text-muted-foreground">
        Applying for <span className="font-semibold text-navy-900">{jobTitle}</span>. Fields marked
        * are required.
      </p>
      {mutation.isSuccess ? (
        <FormStatus
          kind="success"
          title="Application submitted"
          body="Thank you. Our team has your application and will review it against the role. We will be in touch with next steps."
          reference={mutation.data?.id}
        />
      ) : null}
      {mutation.isError ? (
        <FormStatus
          kind="error"
          title="Could not submit your application"
          body="Please try again shortly, or send your CV directly to hr2@conscript.net with the role title in the subject."
        />
      ) : null}

      {!mutation.isSuccess ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Field label="Name" htmlFor="app-name" required error={errors.name?.message}>
            <Input {...register('name')} id="app-name" autoComplete="name" placeholder="Your full name" />
          </Field>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field label="Email" htmlFor="app-email" required error={errors.email?.message}>
              <Input
                {...register('email')}
                id="app-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Phone" htmlFor="app-phone" required error={errors.phone?.message}>
              <Input
                {...register('phone')}
                id="app-phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
              />
            </Field>
          </div>
          <FileField
            id="app-resume"
            label="Resume"
            required
            fileName={resumeName}
            error={errors.resume?.message}
            onChange={(file) => {
              if (file) setValue('resume', file, { shouldValidate: true })
            }}
          />
          <Field label="LinkedIn profile" htmlFor="app-linkedin" hint="Optional" error={errors.linkedin?.message}>
            <Input
              {...register('linkedin')}
              id="app-linkedin"
              type="url"
              placeholder="https://linkedin.com/in/…"
            />
          </Field>
          <Field label="Message" htmlFor="app-message" hint="Optional" error={errors.message?.message}>
            <Textarea {...register('message')} id="app-message" placeholder="Anything we should know about your application…" />
          </Field>
          <Button type="submit" size="lg" disabled={isSubmitting || mutation.isPending}>
            {mutation.isPending ? 'Submitting…' : 'Submit application'}
          </Button>
        </form>
      ) : null}
    </div>
  )
}