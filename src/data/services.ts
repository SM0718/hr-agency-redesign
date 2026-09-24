import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'talent-acquisition',
    number: '01',
    title: 'Talent Acquisition',
    lede: 'End-to-end recruitment built around a clear brief and a calibrated shortlist.',
    body: [
      'We convert an open position into a structured acquisition plan — role definition, market mapping, sourcing and managed interviews.',
      'Every shortlist is agreed against the brief before it reaches you, so hiring teams spend their time on the right candidates.',
    ],
    outcomes: [
      'Role and market brief agreed before sourcing',
      'Structured sourcing across our 25-year network',
      'Shortlists calibrated to the actual requirement',
    ],
  },
  {
    id: 'executive-search',
    number: '02',
    title: 'Executive Search',
    lede: 'Discreet identification of senior leadership and critical individual contributors.',
    body: [
      'For senior and specialist roles we work confidentially, mapping the relevant talent segment and approaching only the candidates who fit.',
      'We manage the process end to end — reference checks, stakeholder alignment and transition support included.',
    ],
    outcomes: [
      'Confidential, mapped searches for senior hires',
      'Candidates evaluated for leadership and fit',
      'Support through offer and first 90 days',
    ],
  },
  {
    id: 'recruitment-consulting',
    number: '03',
    title: 'Recruitment Consulting',
    lede: 'Advice and structure for organisations building their own hiring capability.',
    body: [
      'Not every organisation needs us in every role. We help hiring teams define roles, write effective briefs, structure interviews and reduce time-to-hire.',
      'Our consulting work is practical — documented processes, calibration frameworks and interviewer guidance your team can use immediately.',
    ],
    outcomes: [
      'Better briefs and more accurate job descriptions',
      'Structured, consistent interview processes',
      'Lower cost-per-hire and faster decisions',
    ],
  },
  {
    id: 'candidate-screening',
    number: '04',
    title: 'Candidate Screening',
    lede: 'Structured assessment of skills, experience and — just as important — intent.',
    body: [
      'We screen against a defined brief so that every candidate presented is genuinely viable. Skills are verified, motivations are explored and fit is assessed.',
      'Our process includes technical and behavioural checks appropriate to each level, short but substantive.',
    ],
    outcomes: [
      'Verified skills and credible experience',
      'Candidates assessed on motivation and stability',
      'Fewer wrong-fit interviews for your team',
    ],
  },
  {
    id: 'industry-recruitment',
    number: '05',
    title: 'Industry Recruitment',
    lede: 'Specialist hiring for the industries we know deeply.',
    body: [
      'From IT and engineering to banking, pharmaceuticals and distribution, we recruit within sectors where we have built long-standing candidate relationships.',
      'This industry depth means we know where the talent is, what it is being paid and which candidates are likely to stay.',
    ],
    outcomes: [
      'Sector-specific sourcing and market knowledge',
      'Access to a long-standing candidate network',
      'Realistic advice on availability and compensation',
    ],
  },
  {
    id: 'employer-hiring-support',
    number: '06',
    title: 'Employer Hiring Support',
    lede: 'Flexible support when your own team needs bandwidth or expertise.',
    body: [
      'We act as an extension of your HR and hiring function — screening volumes of applications, coordinating interviews, or managing niche searches.',
      'Support is sized to your need: a single senior hire, a project-based bulk requirement, or ongoing hiring partnership.',
    ],
    outcomes: [
      'Bandwidth when your team is stretched',
      'Consistent process without extra headcount',
      'A single point of contact end to end',
    ],
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Understand',
    body: 'We begin with the role, the manager, the team and the culture a hire will walk into — not just the job description.',
  },
  {
    number: '02',
    title: 'Source',
    body: 'Active search through our network, candidate relationships built over 25 years, and market mapping where required.',
  },
  {
    number: '03',
    title: 'Screen',
    body: 'Structured interviews and assessments against a calibrated brief. Skills, experience and intent all get examined.',
  },
  {
    number: '04',
    title: 'Present',
    body: 'A short, honest shortlist. We rarely present more than a handful of candidates, and each one is genuinely viable.',
  },
  {
    number: '05',
    title: 'Support',
    body: 'We stay involved through offer, onboarding and the first 90 days — so the hire has the best chance of working.',
  },
] as const