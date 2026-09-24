export type EmploymentType = 'Permanent' | 'Contract' | 'Internship'

export interface Industry {
  slug: string
  name: string
  lede: string
  summary: string[]
  roles: string[]
  icon: string
}

export interface Service {
  id: string
  number: string
  title: string
  lede: string
  body: string[]
  outcomes: string[]
}

export interface JobPosting {
  id: string
  title: string
  company: string
  location: string
  remote: boolean
  experience: string
  experienceMin: number
  type: EmploymentType
  industry: string
  postedAt: string
  salary?: string
  skills: string[]
  description: string[]
  responsibilities: string[]
  requirements: string[]
  aboutCompany?: string
}

export interface JobFilters {
  keyword: string
  location: string
  industry: string
  experience: string
}

export const insightCategories = [
  'All Resources',
  'Thought Leadership',
  'Candidate Resources',
  'Employer Resources',
  'Industry Insights',
] as const

export type InsightCategory = (typeof insightCategories)[number]

export type InsightBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string; attribution?: string }

export interface InsightPost {
  slug: string
  title: string
  category: Exclude<InsightCategory, 'All Resources'>
  date: string
  readTime: string
  excerpt: string
  heroImage: string
  author: string
  content: InsightBlock[]
  related: string[]
}

export type PressKind = 'Press release' | 'Newspaper coverage' | 'Media mention' | 'Community initiative'

export interface PressItem {
  id: string
  kind: PressKind
  headline: string
  publication: string
  date: string
  excerpt: string
  image: string
}

export interface ProcessStep {
  number: string
  title: string
  body: string
}