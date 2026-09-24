import { LegalLayout } from '@/components/shared/LegalLayout'
import { SITE_NAME } from '@/lib/seo'
import { usePageMeta } from '@/hooks/usePageMeta'

const sections = [
  {
    heading: '1. Who we are',
    paragraphs: [
      `${SITE_NAME} ("we", "our", "us") operates this website to present our recruitment consultancy services. By using the site you agree to these terms.`,
    ],
  },
  {
    heading: '2. Informational purpose',
    paragraphs: [
      'The content on this website — including pages describing our process, industries, clients and performance figures — is provided for general information about our services. It does not constitute an offer of employment, a placement guarantee, or professional legal, financial or career-specific advice.',
    ],
  },
  {
    heading: '3. Our services',
    paragraphs: [
      'We provide recruitment and manpower solutions. Service terms, fees and recruitment agreements, where relevant, are separately agreed between us and the client. In the event of any conflict between this page and an executed service agreement, the agreement prevails.',
    ],
  },
  {
    heading: '4. Candidate and employer use',
    paragraphs: [
      'By submitting an application or enquiry you confirm that the information you provide is accurate and your own. You also consent to our processing of that information in line with our Privacy Policy for the purpose of the relevant opportunity.',
      'Employers submit requirements that are genuine and lawful. We act in good faith on the information provided and do not accept responsibility for decisions employers make beyond the placement services we agree to deliver.',
    ],
  },
  {
    heading: '5. Intellectual property',
    paragraphs: [
      'All content on this site, including text, branding, design and original imagery, is owned by or licensed to us and may not be reproduced without prior written permission.',
    ],
  },
  {
    heading: '6. No guarantee of results',
    paragraphs: [
      'Recruitment outcomes depend on factors beyond our control. We commit to doing the work properly and honestly, but we do not guarantee a specific number of hires, interviews or placements from any engagement.',
    ],
  },
  {
    heading: '7. Limitation of liability',
    paragraphs: [
      'To the maximum extent permitted by law, we will not be liable for any indirect or consequential loss arising from your use of this website or reliance on its content. Nothing in these terms limits liability that cannot be limited under applicable law.',
    ],
  },
  {
    heading: '8. Third-party content',
    paragraphs: [
      'The site may link to external websites such as LinkedIn. We are not responsible for the content, availability or practices of those sites.',
    ],
  },
  {
    heading: '9. Governing law',
    paragraphs: [
      'These terms are governed by the laws of India. Any dispute arising out of the use of this website shall be subject to the exclusive jurisdiction of the courts of Mumbai.',
    ],
  },
  {
    heading: '10. Contact',
    paragraphs: [
      'Questions about these terms can be sent to hr2@conscript.net with the subject line "Terms".',
    ],
  },
]

export default function TermsPage() {
  usePageMeta(
    'Terms of Use',
    `The terms on which you may use the ${SITE_NAME} website and engage our recruitment services.`,
  )

  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Use"
      lede={`The conditions under which the ${SITE_NAME} website is made available to visitors, candidates and employers.`}
      updated="September 2026"
      sections={sections}
    />
  )
}