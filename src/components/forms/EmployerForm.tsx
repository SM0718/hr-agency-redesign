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
import { submitEmployerEnquiry } from '@/services/enquiries'
import { industries } from '@/data/industries'

const hiringVolumes = ['1–2 roles', '3–10 roles', '11–25 roles', '25+ roles', 'Not sure yet']

const schema = z.object({
  company: z.string().min(2, 'Please enter your company name'),
  contactName: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().regex(/^[+\d][\d\s-]{7,14}$/, 'Enter a valid phone number'),
  industry: z.string().min(1, 'Select your industry'),
  hiringVolume: z.string().min(1, 'Select an approximate volume'),
  message: z.string().min(10, 'Describe the roles you need to hire (at least 10 characters)').max(2000),
})

type Schema = z.infer<typeof schema>

export function EmployerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({ resolver: zodResolver(schema), mode: 'onBlur' })

  const mutation = useMutation({ mutationFn: submitEmployerEnquiry })

  const onSubmit = (values: Schema) => {
    mutation.mutate(values, { onSuccess: () => reset() })
  }

  return (
    <div>
      {mutation.isSuccess ? (
        <FormStatus
          kind="success"
          title="Hiring enquiry received"
          body="Thank you. A senior consultant will review your requirement and reach out with an honest view on how we can support it."
          reference={mutation.data?.reference}
        />
      ) : null}
      {mutation.isError ? (
        <FormStatus
          kind="error"
          title="Could not send your enquiry"
          body="Please try again shortly, or email us directly at hr2@conscript.net."
        />
      ) : null}

      {!mutation.isSuccess ? (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field label="Company" htmlFor="emp-company" required error={errors.company?.message}>
            <Input {...register('company')} id="emp-company" autoComplete="organization" placeholder="Organisation name" />
          </Field>
          <Field label="Your name" htmlFor="emp-name" required error={errors.contactName?.message}>
            <Input {...register('contactName')} id="emp-name" autoComplete="name" placeholder="Contact person" />
          </Field>
          <Field label="Email" htmlFor="emp-email" required error={errors.email?.message}>
            <Input {...register('email')} id="emp-email" type="email" autoComplete="email" placeholder="you@example.com" />
          </Field>
          <Field label="Phone" htmlFor="emp-phone" required error={errors.phone?.message}>
            <Input {...register('phone')} id="emp-phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" />
          </Field>
          <Field label="Industry" htmlFor="emp-industry" required error={errors.industry?.message}>
            <Select {...register('industry')} id="emp-industry" defaultValue="">
              <option value="" disabled>
                Select industry
              </option>
              {industries.map((industry) => (
                <option key={industry.slug} value={industry.name}>
                  {industry.name}
                </option>
              ))}
              <option value="Other">Other</option>
            </Select>
          </Field>
          <Field label="Hiring volume" htmlFor="emp-volume" required error={errors.hiringVolume?.message}>
            <Select {...register('hiringVolume')} id="emp-volume" defaultValue="">
              <option value="" disabled>
                Approximate volume
              </option>
              {hiringVolumes.map((volume) => (
                <option key={volume} value={volume}>
                  {volume}
                </option>
              ))}
            </Select>
          </Field>
          <Field
            label="The roles you need to fill"
            htmlFor="emp-message"
            required
            error={errors.message?.message}
            className="md:col-span-2"
          >
            <Textarea
              {...register('message')}
              id="emp-message"
              placeholder="Role titles, seniority, timeline and anything that will help us understand the requirement…"
            />
          </Field>
          <div className="md:col-span-2">
            <Button type="submit" size="lg" disabled={isSubmitting || mutation.isPending}>
              {mutation.isPending ? 'Submitting…' : 'Tell us about your hiring needs'}
            </Button>
            <p className="mt-3 text-[12px] text-muted-foreground">
              All enquiries are handled confidentially by our consulting desk.
            </p>
          </div>
        </form>
      ) : null}
    </div>
  )
}