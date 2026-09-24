import type { Industry } from '@/types'

export const industries: Industry[] = [
  {
    slug: 'it',
    name: 'IT',
    lede: 'Software, product and technology teams across the technology stack.',
    summary: [
      'From enterprise engineering to start-up product teams, organisations depend on structured sourcing to build dependable technology groups.',
      'We understand delivery cycles, engineering hierarchies and the talent environment across India’s major technology hubs.',
    ],
    roles: ['Software Engineers', 'QA & DevOps', 'Data, Cloud & AI Roles', 'Product & Engineering Leads'],
    icon: 'Monitor',
  },
  {
    slug: 'manufacturing-and-engineering',
    name: 'Manufacturing & Engineering',
    lede: 'Plant, project and product roles where reliability matters.',
    summary: [
      'Manufacturing hires are judged on more than a CV — discipline, process orientation and shop-floor credibility count.',
      'We assess candidates against the practical constraints of plant environments, shift working and delivery regimes.',
    ],
    roles: ['Plant & Production Engineers', 'Design Engineers', 'Quality & Process Leads', 'Project Engineers'],
    icon: 'Box1',
  },
  {
    slug: 'automobile',
    name: 'Automobile',
    lede: 'Design, component, service and assembly talent for the auto value chain.',
    summary: [
      'The automobile sector spans OEMs, component suppliers and the service network, each with a distinct talent profile.',
      'Our placements span design studios, shop floor and dealer organisation across the passenger and commercial vehicle industry.',
    ],
    roles: ['Design Engineers', 'Component & Systems Engineers', 'Service & Aftermarket Roles', 'Assembly Supervisors'],
    icon: 'Speedometer',
  },
  {
    slug: 'banking-and-financial-services',
    name: 'Banking & Financial Services',
    lede: 'Risk-aware hiring for banks, insurers and financial firms.',
    summary: [
      'Financial services hiring demands precision, compliance awareness and discretion at every level of the organisation.',
      'We recruit for credit, operations, analytics and technology roles with candidates who are background-check ready.',
    ],
    roles: ['Credit & Risk Analysts', 'Operations Executives', 'Data & MIS Analysts', 'Compliance & Control Roles'],
    icon: 'Strongbox',
  },
  {
    slug: 'construction-and-retail',
    name: 'Construction & Retail',
    lede: 'On-site project capability and customer-facing frontline teams.',
    summary: [
      'Construction hires are built around projects — timelines, site conditions and coordination define the requirement.',
      'Retail recruitment is about fit with brand culture, customer contact and multi-site operating discipline.',
    ],
    roles: ['Site & Project Engineers', 'Quantity Surveyors', 'Store Operations Leads', 'Area & Territory Managers'],
    icon: 'Building4',
  },
  {
    slug: 'accounting',
    name: 'Accounting',
    lede: 'Accounts, audit and finance function talent across the ledger.',
    summary: [
      'Accounting roles require technical certification, regulatory awareness and an instinct for accuracy under month-end pressure.',
      'We place candidates from the accountant level through to finance function leadership.',
    ],
    roles: ['Accountants & Senior Accountants', 'Audit Associates', 'Payroll & Tax Analysts', 'Finance Controllers'],
    icon: 'DocumentText',
  },
  {
    slug: 'maintenance-technology',
    name: 'Maintenance Technology',
    lede: 'Specialists who keep plants and equipment running predictably.',
    summary: [
      'Maintenance talent combines electrical, mechanical and increasingly digital skills to drive uptime.',
      'We evaluate candidates on preventive discipline, fault diagnosis and the communication needed to run controlled shutdowns.',
    ],
    roles: ['Maintenance Engineers', 'Instrumentation Technicians', 'Electrical & Mechanical Leads', 'Reliability Engineers'],
    icon: 'Slider',
  },
  {
    slug: 'warehouse-and-distribution',
    name: 'Warehouse & Distribution',
    lede: 'Logistics, inventory and distribution talent for last-mile reliability.',
    summary: [
      'Distribution roles live by inventory accuracy, turnaround SLAs and peak-season resilience.',
      'We understand the working rhythm of warehouses, depots and transport networks and match people to it.',
    ],
    roles: ['Operations & Store Executives', 'Inventory & Stock Controllers', 'Dispatch & Transport Leads', 'Warehouse Supervisors'],
    icon: 'Box',
  },
  {
    slug: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    lede: 'Regulated, compliance-first hiring for pharma and life sciences.',
    summary: [
      'Pharmaceutical recruitment demands candidates who are meticulous about documentation, audits and validation.',
      'We place roles spanning manufacturing, quality assurance, regulatory and packaging across the API and formulation industry.',
    ],
    roles: ['Production & Manufacturing Chemists', 'QA / QC Analysts', 'Regulatory Affairs Associates', 'Packaging & Labelling Leads'],
    icon: 'Health',
  },
]

export const industrySlugs = industries.map((i) => i.slug)