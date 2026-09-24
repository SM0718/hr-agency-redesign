import type { JobPosting } from '@/types'

export const jobPostings: JobPosting[] = [
  {
    id: 'lead-backend-engineer-hyderabad',
    title: 'Lead Backend Engineer',
    company: 'Microsoft',
    location: 'Hyderabad',
    remote: false,
    experience: '6–9 years',
    experienceMin: 6,
    type: 'Permanent',
    industry: 'IT',
    postedAt: '2026-09-22',
    salary: '₹40–55 LPA',
    skills: ['C# / .NET', 'Distributed Systems', 'Azure', 'Kubernetes', 'Microservices'],
    description: [
      'We are hiring a Lead Backend Engineer for a cloud platform team based in Hyderabad. The role sits at the centre of a scaled services organisation, where reliability, clean architecture and delivery discipline matter as much as individual skill.',
      'You will design and build distributed services, mentor the engineers around you and work closely with product and program teams to shape technical direction.',
    ],
    responsibilities: [
      'Design and build distributed backend services on Azure',
      'Own architecture decisions for your pod and communicate them clearly',
      'Mentor 4–6 engineers and review technical designs',
      'Partner with product and program management on delivery plans',
    ],
    requirements: [
      '6–9 years of backend engineering experience',
      'Strong C# / .NET with working knowledge of cloud infrastructure',
      'Experience operating microservices and event-driven systems at scale',
      'Solid understanding of reliability, observability and incident response',
    ],
    aboutCompany:
      'Microsoft has a large, long-standing engineering presence in Hyderabad. This team works across global cloud services with a visible career path.',
  },
  {
    id: 'business-analyst-mumbai',
    title: 'Business Analyst — Rates & Markets',
    company: 'J.P. Morgan',
    location: 'Mumbai',
    remote: false,
    experience: '3–6 years',
    experienceMin: 3,
    type: 'Permanent',
    industry: 'Banking & Financial Services',
    postedAt: '2026-09-20',
    salary: '₹22–32 LPA',
    skills: ['Market Data', 'SQL', 'Excel / VBA', 'Derivatives', 'Stakeholder Management'],
    description: [
      'A Business Analyst opening within a markets technology team, supporting trading desks on rates. The role translates business requirements into technical specifications across a fast-moving, regulated environment.',
      'You will work with traders, quants and engineers every day and need comfort with data, markets and clear communication.',
    ],
    responsibilities: [
      'Capture and document business and system requirements for trading desks',
      'Own change management for market-data and valuation flows',
      'Coordinate between traders, quants and engineering on delivery',
      'Run testing cycles and user sign-offs',
    ],
    requirements: [
      '3–6 years as a business analyst, ideally in markets or investment banking',
      'Working knowledge of rates or fixed income products',
      'Strong SQL and data manipulation skills',
      'Clear, concise written and verbal communication',
    ],
    aboutCompany:
      'J.P. Morgan has one of the largest investment banking technology organisations in India, centred on Mumbai and Bengaluru.',
  },
  {
    id: 'mechanical-design-engineer-pune',
    title: 'Mechanical Design Engineer — Earthmoving',
    company: 'John Deere',
    location: 'Pune',
    remote: false,
    experience: '4–8 years',
    experienceMin: 4,
    type: 'Permanent',
    industry: 'Manufacturing & Engineering',
    postedAt: '2026-09-18',
    skills: ['CAD / CREO', 'FEA', 'Castings & Fabrications', 'GD&T', 'Product Development'],
    description: [
      'We are looking for a Mechanical Design Engineer to join a Pune-based engineering centre working on earthmoving and agricultural equipment. The role spans concept, detailed design and manufacturing support.',
      'You will design structural and sheet-metal components, validate through FEA and DFM, and coordinate closely with suppliers and the factory.',
    ],
    responsibilities: [
      'Design structural, sheet-metal and casting components',
      'Run FEA simulations and hand calculations for strength validation',
      'Coordinate with suppliers and factory teams on manufacturability',
      'Maintain engineering documentation and change control',
    ],
    requirements: [
      '4–8 years in mechanical design, ideally heavy equipment or automotive',
      'Proficiency in CREO or similar 3D CAD with working knowledge of FEA',
      'Strong GD&T and tolerance stack-up analysis',
      'Exposure to castings, forgings and fabrications',
    ],
    aboutCompany:
      'John Deere’s Technology and Innovation Centre in Pune is a large global engineering hub for construction and agriculture equipment.',
  },
  {
    id: 'production-supervisor-chennai',
    title: 'Production Supervisor — Engine Plant',
    company: 'Mahle',
    location: 'Chennai',
    remote: false,
    experience: '5–9 years',
    experienceMin: 5,
    type: 'Permanent',
    industry: 'Automobile',
    postedAt: '2026-09-16',
    skills: ['Line Supervision', 'Lean Manufacturing', 'SOP', 'TQM', 'Shift Management'],
    description: [
      'A Production Supervisor opening at a Chennai engine component plant. You will lead a shift of operators and machine-owners to meet quality, safety and output targets.',
      'This is a hands-on leadership role — your credibility comes from knowing the line, the machines and the people on it.',
    ],
    responsibilities: [
      'Lead a production shift to plan, quality and safety targets',
      'Manage operator deployment, training and discipline on the line',
      'Drive root-cause analysis and corrective actions on downtime',
      'Maintain line documentation and daily output reporting',
    ],
    requirements: [
      '5–9 years in plant production supervision, ideally automotive',
      'Diploma/degree in Mechanical or Production Engineering',
      'Experience with lean tools and structured problem solving',
      'Comfortable with 3-shift working environments',
    ],
    aboutCompany:
      'Mahle has multiple manufacturing plants across India producing automotive components for global and domestic OEMs.',
  },
  {
    id: 'application-support-engineer-gurugram',
    title: 'Application Support Engineer — ERP',
    company: 'Masterek',
    location: 'Gurugram',
    remote: true,
    experience: '2–5 years',
    experienceMin: 2,
    type: 'Permanent',
    industry: 'IT',
    postedAt: '2026-09-14',
    skills: ['ERP', 'SQL', 'Incident Management', 'ITIL', 'Problem Solving'],
    description: [
      'We are hiring an Application Support Engineer to own L2 support for a mid-market ERP estate used across manufacturing clients. The role is remote and involves clear tickets, disciplined documentation and a service-first mindset.',
      'You will handle incidents, work with the engineering team on recurring issues, and play a visible part in client confidence.',
    ],
    responsibilities: [
      'Own L2 incidents and service requests on the ERP estate',
      'Diagnose issues across SQL, integrations and configuration',
      'Maintain KB articles and improve runbooks',
      'Participate in on-call rotation (compensated)',
    ],
    requirements: [
      '2–5 years in application or production support',
      'Comfortable writing and reading SQL queries',
      'ITIL awareness and disciplined incident documentation',
      'Clear written communication with clients',
    ],
    aboutCompany:
      'Masterek is a systems integrator and managed services provider focused on manufacturing and distribution clients in India and the Middle East.',
  },
  {
    id: 'data-analyst-bengaluru',
    title: 'Data Analyst — Reinsurance Analytics',
    company: 'Swiss Re',
    location: 'Bengaluru',
    remote: false,
    experience: '3–6 years',
    experienceMin: 3,
    type: 'Permanent',
    industry: 'Banking & Financial Services',
    postedAt: '2026-09-12',
    salary: '₹18–26 LPA',
    skills: ['Python', 'SQL', 'Data Visualisation', 'Excel', 'Insurance / Reinsurance'],
    description: [
      'A Data Analyst role supporting reinsurance analytics in a Bengaluru centre of excellence. You will build and maintain reports and analysis that feed underwriting and portfolio decisions.',
      'The environment is data-rich and structured, with a strong focus on accuracy, documentation and insight that people actually use.',
    ],
    responsibilities: [
      'Build, validate and automate core analytics and MI reports',
      'Write SQL and Python analysis for ad-hoc underwriting questions',
      'Present findings to business stakeholders clearly',
      'Document datasets and calculation logic',
    ],
    requirements: [
      '3–6 years in analytics or business intelligence',
      'Strong Python and SQL, with clean reporting dashboards',
      'Exposure to insurance or financial services preferred',
      'Attention to detail and structured documentation',
    ],
    aboutCompany:
      'Swiss Re runs a global analytics and technology centre in Bengaluru supporting reinsurance underwriting worldwide.',
  },
  {
    id: 'qa-engineer-pune',
    title: 'QA Engineer — Contract',
    company: 'IGATE',
    location: 'Pune',
    remote: true,
    experience: '2–4 years',
    experienceMin: 2,
    type: 'Contract',
    industry: 'IT',
    postedAt: '2026-09-11',
    salary: '₹10–14 LPA',
    skills: ['Functional Testing', 'Selenium', 'API Testing', 'Test Cases', 'Agile'],
    description: [
      'A 12-month contract role for a QA Engineer with a banking client programme. You will design and execute test cases across web and API layers, working inside an agile team.',
      'The contract comes with a clear path: strong performers are considered for extension by the client team.',
    ],
    responsibilities: [
      'Create and execute functional and regression test cases',
      'Automate critical flows with Selenium where feasible',
      'Test REST APIs and validate error handling',
      'Report defects clearly with reproduction steps',
    ],
    requirements: [
      '2–4 years of hands-on QA experience',
      'Working knowledge of Selenium and API testing',
      'Experience with agile tools (Jira) and test management',
      'Good written communication for defect reporting',
    ],
    aboutCompany:
      'IGATE is a technology services company serving global banking and insurance clients, with delivery centres across India.',
  },
  {
    id: 'projects-engineer-ahmedabad',
    title: 'Projects Engineer — Cement & Construction',
    company: 'Ambuja Cement',
    location: 'Ahmedabad',
    remote: false,
    experience: '4–7 years',
    experienceMin: 4,
    type: 'Permanent',
    industry: 'Construction & Retail',
    postedAt: '2026-09-09',
    skills: ['Project Execution', 'Site Coordination', 'Civil / Mechanical', 'Health & Safety', 'Contractors'],
    description: [
      'A Projects Engineer role supporting brownfield and greenfield initiatives across cement plants. You will coordinate contractors, monitor progress and ensure execution aligns with engineering standards and safety.',
      'Field exposure is central to the role — most of your week is spent on site, not behind a desk.',
    ],
    responsibilities: [
      'Coordinate contractors and site teams on project execution',
      'Monitor schedules, budgets and quality against plan',
      'Ensure compliance with safety standards and protocols',
      'Document progress and drive weekly reviews',
    ],
    requirements: [
      '4–7 years in construction or plant project engineering',
      'Civil or Mechanical engineering degree',
      'Strong contractor coordination and site discipline',
      'Willingness to work at plant locations',
    ],
    aboutCompany:
      'Ambuja Cement is one of India’s leading cement manufacturers, with plants across the west and north of the country.',
  },
  {
    id: 'senior-accountant-mumbai',
    title: 'Senior Accountant — Real Estate Finance',
    company: 'Knight Frank',
    location: 'Mumbai',
    remote: false,
    experience: '5–8 years',
    experienceMin: 5,
    type: 'Permanent',
    industry: 'Accounting',
    postedAt: '2026-09-07',
    salary: '₹14–20 LPA',
    skills: ['Tally / SAP', 'GST', 'Reconciliation', 'MIS Reporting', 'Statutory Compliance'],
    description: [
      'A Senior Accountant position within the finance team of a leading real estate advisory firm in Mumbai. You will own vendor accounting, GST and monthly close for a business unit.',
      'The role suits an accountant who can work independently, meet close deadlines and communicate with business teams in plain language.',
    ],
    responsibilities: [
      'Own month-end close and MIS reports for your business unit',
      'Manage GST, TDS and statutory filings with documentation',
      'Handle vendor reconciliations and payment disciplines',
      'Support annual audit and statutory compliance',
    ],
    requirements: [
      '5–8 years in accounting, ideally services or real estate',
      'CA-Inter or M.Com with hands-on Tally/SAP',
      'Strong understanding of GST and TDS',
      'High accuracy under month-end deadlines',
    ],
    aboutCompany:
      'Knight Frank India is a leading real estate consultancy providing valuation, advisory and property services across the country.',
  },
  {
    id: 'credit-officer-chennai',
    title: 'Credit Officer — Commercial Banking',
    company: 'Barclays',
    location: 'Chennai',
    remote: false,
    experience: '3–6 years',
    experienceMin: 3,
    type: 'Permanent',
    industry: 'Banking & Financial Services',
    postedAt: '2026-09-05',
    salary: '₹16–24 LPA',
    skills: ['Credit Analysis', 'Financial Statements', 'Risk Assessment', 'Loan Documentation', 'Excel'],
    description: [
      'A Credit Officer role within a commercial banking operations hub. You will assess credit applications, prepare proposals and maintain compliance across the lending lifecycle.',
      'This is a process-driven role where analytical rigour and documentation discipline are the core of the job.',
    ],
    responsibilities: [
      'Assess credit applications and financial statements',
      'Prepare credit proposals and risk notes for approval',
      'Monitor covenants and early-warning signals on the portfolio',
      'Maintain audit-ready documentation',
    ],
    requirements: [
      '3–6 years in credit analysis or corporate banking operations',
      'Strong financial statement analysis skills',
      'Working knowledge of lending documentation and compliance',
      'MBA/Finance degree preferred',
    ],
    aboutCompany:
      'Barclays runs a large global service centre in India covering banking operations, technology and analytics for commercial and investment banking.',
  },
  {
    id: 'maintenance-technician-maharashtra',
    title: 'Maintenance Technician — Steel Plant',
    company: 'POSCO',
    location: 'Pune',
    remote: false,
    experience: '3–7 years',
    experienceMin: 3,
    type: 'Permanent',
    industry: 'Maintenance Technology',
    postedAt: '2026-09-03',
    skills: ['Hydraulics', 'Electrical Systems', 'Preventive Maintenance', 'PLC Basics', 'Safety'],
    description: [
      'A Maintenance Technician opening at a steel processing facility. You will keep hydraulic and electrical systems running to plan, with a strong emphasis on preventive maintenance and controlled breakdown response.',
      'The plant runs continuous operations, so structured shift handovers and clear fault documentation are part of everyday work.',
    ],
    responsibilities: [
      'Execute preventive and predictive maintenance schedules',
      'Troubleshoot hydraulic, pneumatic and electrical faults',
      'Maintain spares, tools and maintenance documentation',
      'Support shutdown and overhaul activities',
    ],
    requirements: [
      '3–7 years in plant maintenance, ideally heavy industry',
      'ITI/Diploma in Electrical or Mechanical',
      'Working knowledge of hydraulics and PLC basics',
      'Safety-first working habits',
    ],
    aboutCompany:
      'POSCO India is a major player in steel processing and home furnishings, with manufacturing operations in Maharashtra.',
  },
  {
    id: 'hr-internship-remote',
    title: 'HR & Talent Acquisition Intern',
    company: 'Conscript HR Advisors',
    location: 'Remote',
    remote: true,
    experience: 'Fresher',
    experienceMin: 0,
    type: 'Internship',
    industry: 'IT',
    postedAt: '2026-09-23',
    skills: ['Recruitment', 'Screening', 'Excel', 'Communication', 'Sourcing'],
    description: [
      'A remote HR internship with our talent acquisition desk. You will work alongside senior consultants on live mandates — sourcing, screening and coordinating candidates for client roles.',
      'This is a working internship, not a shadowing opportunity. You will handle real processes, meet real candidates and get direct feedback on your work.',
    ],
    responsibilities: [
      'Source candidates across job boards and professional networks',
      'Screen applications against role briefs',
      'Coordinate interview scheduling and candidate communication',
      'Maintain tracker hygiene in Excel/ATS',
    ],
    requirements: [
      'Any graduate; MBA-HR students preferred (2/3/4/5/6+ month availability)',
      'Excellent written and spoken English',
      'Comfortable with spreadsheets and structured documentation',
      'Availability of 4–8 hours per day, flexible schedule',
    ],
    aboutCompany:
      'Conscript HR Advisors Pvt. Ltd. is an HR consultancy with 25+ years of recruitment experience across 100+ client organisations.',
  },
]

export function getJobById(id: string): JobPosting | undefined {
  return jobPostings.find((job) => job.id === id)
}

export function getRelatedJobs(job: JobPosting, count = 3): JobPosting[] {
  return jobPostings
    .filter((item) => item.id !== job.id)
    .sort((a, b) => {
      const score = (item: JobPosting) =>
        (item.industry === job.industry ? 2 : 0) + (item.remote === job.remote ? 1 : 0)
      return score(b) - score(a)
    })
    .slice(0, count)
}

export const jobIndustries = Array.from(new Set(jobPostings.map((job) => job.industry)))
export const jobLocations = Array.from(
  new Set(jobPostings.flatMap((job) => (job.remote ? ['Remote'] : [job.location]))),
)