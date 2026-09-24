import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Field } from '@/components/forms/fields'
import { FormStatus } from '@/components/forms/FormStatus'
import { submitInternshipApplication } from '@/services/enquiries'

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().regex(/^[+\d][\d\s-]{7,14}$/, 'Enter a valid phone number'),
  education: z.string().min(3, 'Tell us about your current qualification'),
  durationMonths: z.string().min(1, 'Select a duration'),
  hoursPerDay: z.string().min(1, 'Select your daily hours'),
  availability: z.string().min(1, 'Select your start date'),
  message: z.string().max(600, 'Keep the message under 600 characters').optional(),
})

type Schema = z.infer<typeof schema>

const durations = ['2 months', '3 months', '4 months', '5 months', '6+ months']
const hours = ['4 hours / day', '6 hours / day', '8 hours / day', 'Flexible spread across the day']

export function InternshipForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({ resolver: zodResolver(schema), mode: 'onBlur' })

  const mutation = useMutation({
    mutationFn: submitInternshipApplication,
  })

  const onSubmit = (values: Schema) => {
    mutation.mutate(values, {
      onSuccess: () => reset(),
    })
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="space-y-8">
      {mutation.isSuccess ? (
        <FormStatus
          kind="success"
          title="Application received"
          body="Thank you for applying. Our internship desk will review your application and write back to you at the email you provided."
          reference={mutation.data?.reference}
        />
      ) : null}
      {mutation.isError ? (
        <FormStatus
          kind="error"
          title="Something went wrong"
          body="We could not submit your application. Please try again, or write to us directly and we will handle it."
        />
      ) : null}

      {!mutation.isSuccess ? (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field label="Full name" htmlFor="int-name" required error={errors.fullName?.message}>
            <Input {...register('fullName')} id="int-name" autoComplete="name" placeholder="Your name" />
          </Field>
          <Field label="Email" htmlFor="int-email" required error={errors.email?.message}>
            <Input
              {...register('email')}
              id="int-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
          </Field>
          <Field label="Phone" htmlFor="int-phone" required error={errors.phone?.message}>
            <Input
              {...register('phone')}
              id="int-phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
            />
          </Field>
          <Field label="Education" htmlFor="int-edu" required error={errors.education?.message}>
            <Input
              {...register('education')}
              id="int-edu"
              placeholder="Degree / year of study, college"
            />
          </Field>
          <Field label="Preferred duration" htmlFor="int-duration" required error={errors.durationMonths?.message}>
            <Select {...register('durationMonths')} id="int-duration" defaultValue="">
              <option value="" disabled>
                Select duration
              </option>
              {durations.map((duration) => (
                <option key={duration} value={duration}>
                  {duration}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Daily hours" htmlFor="int-hours" required error={errors.hoursPerDay?.message}>
            <Select {...register('hoursPerDay')} id="int-hours" defaultValue="">
              <option value="" disabled>
                Select hours
              </option>
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Earliest start date" htmlFor="int-start" required error={errors.availability?.message}>
            <Input {...register('availability')} id="int-start" type="date" min={today} />
          </Field>
          <Field label="Anything we should know" htmlFor="int-message" error={errors.message?.message}>
            <Textarea
              {...register('message')}
              id="int-message"
              placeholder="Skills, projects, constraints on timing…"
              className="md:min-h-[38px]"
            />
          </Field>
          <div className="md:col-span-2">
            <Button type="submit" size="lg" disabled={isSubmitting || mutation.isPending}>
              {mutation.isPending ? 'Submitting…' : 'Apply for internship'}
            </Button>
            <p className="mt-3 text-[12px] text-muted-foreground">
              We review every application personally and respond to all who fit.
            </p>
          </div>
        </form>
      ) : null}
    </div>
  )
}