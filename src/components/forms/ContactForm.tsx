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
import { submitContactEnquiry } from '@/services/enquiries'

const topics = ['General enquiry', 'Hire talent', 'Candidate / job support', 'Recruitment consulting', 'Press & media']

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email address'),
  company: z.string().optional(),
  phone: z
    .string()
    .regex(/^[+\d][\d\s-]{7,14}$/, 'Enter a valid phone number')
    .optional()
    .or(z.literal('')),
  topic: z.string().min(1, 'Choose a topic'),
  message: z.string().min(10, 'Tell us a little more (at least 10 characters)').max(2000),
})

type Schema = z.infer<typeof schema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({ resolver: zodResolver(schema), mode: 'onBlur' })

  const mutation = useMutation({ mutationFn: submitContactEnquiry })

  const onSubmit = (values: Schema) => {
    mutation.mutate(values, { onSuccess: () => reset() })
  }

  return (
    <div>
      {mutation.isSuccess ? (
        <FormStatus
          kind="success"
          title="Thanks for reaching out"
          body="Your enquiry has been noted and the relevant desk will respond, usually within one working day."
          reference={mutation.data?.reference}
        />
      ) : null}
      {mutation.isError ? (
        <FormStatus
          kind="error"
          title="Could not send your message"
          body="Please try again shortly, or email us directly and we will pick it up."
        />
      ) : null}

      {!mutation.isSuccess ? (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field label="Name" htmlFor="ct-name" required error={errors.name?.message}>
            <Input {...register('name')} id="ct-name" autoComplete="name" placeholder="Your name" />
          </Field>
          <Field label="Email" htmlFor="ct-email" required error={errors.email?.message}>
            <Input
              {...register('email')}
              id="ct-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
          </Field>
          <Field label="Company" htmlFor="ct-company" error={errors.company?.message}>
            <Input {...register('company')} id="ct-company" autoComplete="organization" placeholder="Organisation (optional)" />
          </Field>
          <Field label="Phone" htmlFor="ct-phone" error={errors.phone?.message}>
            <Input {...register('phone')} id="ct-phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" />
          </Field>
          <Field
            label="Topic"
            htmlFor="ct-topic"
            required
            error={errors.topic?.message}
            className="md:col-span-2"
          >
            <Select {...register('topic')} id="ct-topic" defaultValue="">
              <option value="" disabled>
                Choose a topic
              </option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </Select>
          </Field>
          <Field
            label="Message"
            htmlFor="ct-message"
            required
            error={errors.message?.message}
            className="md:col-span-2"
          >
            <Textarea {...register('message')} id="ct-message" placeholder="How can we help?" />
          </Field>
          <div className="md:col-span-2">
            <Button type="submit" size="lg" disabled={isSubmitting || mutation.isPending}>
              {mutation.isPending ? 'Sending…' : 'Send message'}
            </Button>
          </div>
        </form>
      ) : null}
    </div>
  )
}