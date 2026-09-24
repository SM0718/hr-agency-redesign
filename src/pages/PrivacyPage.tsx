import { LegalLayout } from '@/components/shared/LegalLayout'
import { SITE_NAME } from '@/lib/seo'
import { usePageMeta } from '@/hooks/usePageMeta'

const sections = [
  {
    heading: '1. Overview',
    paragraphs: [
      `${SITE_NAME} ("we", "our", "us") operates this website to describe our recruitment consultancy services and to let employers and candidates get in touch with us. This policy explains what we collect and how it is used.`,
      'By using the site, including its forms, you agree to the practices described here.',
    ],
  },
  {
    heading: '2. Information we collect',
    paragraphs: [
      'We only collect personal information that you choose to send us, primarily through the contact, employer, internship and job application forms. This may include your name, contact details, educational and professional background, a copy of the document you attach, and the contents of your message.',
      'We process such information solely to respond to your enquiry and, for job applications and internship applications, to consider you for the relevant opportunity.',
    ],
  },
  {
    heading: '3. How we use it',
    list: [
      'To reply to your enquiry and provide the service you asked about.',
      'To evaluate and shortlist candidates and internship applicants against relevant opportunities.',
      'To maintain records of recruitment activities for the purposes of delivering our services.',
      'No automated decision-making is applied to applications.',
    ],
  },
  {
    heading: '4. Sharing and disclosure',
    paragraphs: [
      'We do not sell or rent personal information. Candidate details are shared with prospective employers only with your consent and only in connection with a specific opportunity you have applied for or discussed.',
      'We may disclose information where required by applicable law or in connection with a legal process.',
    ],
  },
  {
    heading: '5. Data retention',
    paragraphs: [
      'We retain applicant information only as long as needed for the purpose it was collected, after which it is deleted or anonymised. You may ask us at any time to update or delete the information we hold about you.',
    ],
  },
  {
    heading: '6. Your rights',
    list: [
      'Request a copy of the personal information we hold about you.',
      'Request correction of inaccurate information.',
      'Request deletion of your information where no legal obligation requires us to keep it.',
      'Withdraw consent to further processing of your application.',
    ],
    paragraphs: [
      'To exercise any of these rights, write to hr2@conscript.net and we will respond within a reasonable period.',
    ],
  },
  {
    heading: '7. Cookies and analytics',
    paragraphs: [
      'The site is largely informational. We may use minimal, privacy-respecting analytics to understand general usage patterns, and you may decline or clear such data through your browser settings.',
    ],
  },
  {
    heading: '8. External links',
    paragraphs: [
      'Links to third-party sites (such as LinkedIn) leave this website. We are not responsible for the content or privacy practices of those sites and encourage you to review their own policies.',
    ],
  },
  {
    heading: '9. Changes to this policy',
    paragraphs: [
      'We may update this policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision.',
    ],
  },
  {
    heading: '10. Contact',
    paragraphs: [
      'For any privacy question, write to hr2@conscript.net with the subject line "Privacy".',
    ],
  },
]

export default function PrivacyPage() {
  usePageMeta(
    'Privacy Policy',
    `How ${SITE_NAME} handles the personal information you share through this website and its forms.`,
  )

  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lede={`An outline of what personal information ${SITE_NAME} collects on this website, how it is used, and the rights you have over it.`}
      updated="September 2026"
      sections={sections}
    />
  )
}