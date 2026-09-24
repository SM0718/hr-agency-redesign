import type { PressItem } from '@/types'
import { IMAGES } from '@/lib/images'

export const pressItems: PressItem[] = [
  {
    id: 'press-2026-sep-volume-hiring',
    kind: 'Press release',
    headline: 'Conscript launches structured screening framework for volume hiring programmes',
    publication: 'Press Release',
    date: '2026-09-15',
    excerpt:
      'The consulting desk has formalised its calibration-driven screening approach for organisations running high-volume recruitment cycles, targeting faster decisions without dilution of quality.',
    image: IMAGES.planningDocs,
  },
  {
    id: 'press-2026-aug-internship',
    kind: 'Community initiative',
    headline: 'Remote internship desk opens to students across India',
    publication: 'Community Desk',
    date: '2026-08-28',
    excerpt:
      'Conscript’s internship programme — offering practical exposure to live recruitment processes — is now fully remote, widening access for students beyond the major metros.',
    image: IMAGES.studentGroup,
  },
  {
    id: 'press-2026-jul-sunday-ka-funda',
    kind: 'Newspaper coverage',
    headline: '“Sunday Ka Funda”: bringing the workplace to the classroom',
    publication: 'Business Standard',
    date: '2026-07-21',
    excerpt:
      'A long-running student initiative that takes professionals into classrooms on designated Sundays, giving students a realistic view of industry expectations early.',
    image: IMAGES.classroom,
  },
  {
    id: 'press-2026-jun-engineering',
    kind: 'Press release',
    headline: 'Engineering placements cross new milestone across plant and product roles',
    publication: 'Press Release',
    date: '2026-06-12',
    excerpt:
      'Manufacturing and engineering hires now comprise a significant share of the firm’s annual placements, spanning plant operations, design and reliability functions.',
    image: IMAGES.engineerFactory,
  },
  {
    id: 'press-2026-may-candidates',
    kind: 'Media mention',
    headline: 'What consultants look for in the first five minutes of an interview',
    publication: 'YourStory Careers',
    date: '2026-05-06',
    excerpt:
      'Conscript recruiters share the practical preparation habits that separate well-prepared candidates from the rest, drawn from decades of combined interview experience.',
    image: IMAGES.candidateInterview,
  },
  {
    id: 'press-2026-apr-acrg',
    kind: 'Community initiative',
    headline: 'Industry leaders join students for knowledge-sharing workshop in Pune',
    publication: 'The Hindu BusinessLine',
    date: '2026-04-18',
    excerpt:
      'Under the “We Love To Share” series, working professionals meet students in informal workshops covering careers beyond the traditional campus placement path.',
    image: IMAGES.conversation,
  },
  {
    id: 'press-2026-mar-banking',
    kind: 'Press release',
    headline: 'BFSI recruitment practice deepens with new analytics and credit desk roles',
    publication: 'Press Release',
    date: '2026-03-09',
    excerpt:
      'The firm reports growing demand for credit, compliance and analytics talent, and has expanded its dedicated banking and financial services desk accordingly.',
    image: IMAGES.bankFacade,
  },
  {
    id: 'press-2026-feb-25-years',
    kind: 'Newspaper coverage',
    headline: 'Twenty-five years of placing people: a consultancy’s measured approach',
    publication: 'The Economic Times',
    date: '2026-02-14',
    excerpt:
      'A profile of the firm’s long innings in recruitment — from its early days matching engineers to industry, to the discipline-first approach it still follows today.',
    image: IMAGES.newspaperPress,
  },
]

export const pressKinds = [
  'All',
  'Press release',
  'Newspaper coverage',
  'Media mention',
  'Community initiative',
] as const