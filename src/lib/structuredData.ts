import { useEffect } from 'react'

type Serializable = {
  [key: string]:
    | string
    | number
    | boolean
    | null
    | string[]
    | Serializable
    | Serializable[]
}

export function useStructuredData(schema: Serializable | null) {
  useEffect(() => {
    if (!schema) return
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.textContent = JSON.stringify(schema)
    document.head.appendChild(el)
    return () => {
      document.head.removeChild(el)
    }
  }, [schema])
}

interface OrganizationSchemaInput {
  name?: string
  url?: string
}

export function organizationSchema(input: OrganizationSchemaInput = {}): Serializable {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: input.name ?? 'Conscript HR Advisors Pvt. Ltd.',
    url: input.url ?? 'https://www.conscript.net',
    email: 'hr2@conscript.net',
    description:
      'HR consultancy and recruitment agency helping organisations identify, attract and place capable professionals across industries, with 25+ years of experience and 10,000+ placements.',
    knowsAbout: [
      'Talent Acquisition',
      'Recruitment',
      'Executive Search',
      'Candidate Screening',
      'Recruitment Consulting',
      'Industry-specific Recruitment',
    ],
  }
}

interface JobPostingSchemaInput {
  title: string
  company: string
  location: string
  datePosted: string
  employmentType: string
  experience: string
  description: string
  url: string
}

export function jobPostingSchema(input: JobPostingSchemaInput): Serializable {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: input.title,
    datePosted: input.datePosted,
    description: `${input.description} Experience required: ${input.experience}`,
    employmentType: input.employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      name: input.company,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: input.location,
        addressCountry: 'IN',
      },
    },
    url: input.url,
  }
}

interface ArticleSchemaInput {
  headline: string
  datePublished: string
  description: string
  image: string
  url: string
}

export function articleSchema(input: ArticleSchemaInput): Serializable {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    image: input.image,
    datePublished: input.datePublished,
    url: input.url,
    publisher: {
      '@type': 'Organization',
      name: 'Conscript HR Advisors Pvt. Ltd.',
    },
  }
}