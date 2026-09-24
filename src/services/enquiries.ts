const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

export interface ContactPayload {
  name: string
  email: string
  phone?: string
  company?: string
  topic: string
  message: string
}

export interface EmployerEnquiryPayload {
  company: string
  contactName: string
  email: string
  phone: string
  industry: string
  hiringVolume: string
  message: string
}

export interface InternshipApplicationPayload {
  fullName: string
  email: string
  phone: string
  education: string
  durationMonths: string
  hoursPerDay: string
  availability: string
  message?: string
}

export async function submitContactEnquiry(_payload: ContactPayload): Promise<{ ok: true; reference: string }> {
  await wait(1100)
  return { ok: true, reference: `C-${Math.random().toString(36).slice(2, 8).toUpperCase()}` }
}

export async function submitEmployerEnquiry(
  _payload: EmployerEnquiryPayload,
): Promise<{ ok: true; reference: string }> {
  await wait(1300)
  return { ok: true, reference: `E-${Math.random().toString(36).slice(2, 8).toUpperCase()}` }
}

export async function submitInternshipApplication(
  _payload: InternshipApplicationPayload,
): Promise<{ ok: true; reference: string }> {
  await wait(1100)
  return { ok: true, reference: `I-${Math.random().toString(36).slice(2, 8).toUpperCase()}` }
}