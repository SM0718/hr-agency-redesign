const BREAKPOINTS = [480, 800, 1200, 1600, 2000]

export function photoUrl(id: string, w: number): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`
}

export function photoSrc(id: string, w = 1200): string {
  return photoUrl(id, w)
}

export function photoSrcSet(id: string, maxW = 1600): string {
  return BREAKPOINTS.filter((w) => w <= maxW)
    .map((w) => `${photoUrl(id, w)} ${w}w`)
    .join(', ')
}

/**
 * Curated editorial photography. IDs reference stable Unsplash assets and are
 * served with auto=format so supported browsers receive WebP/AVIF.
 */
export const IMAGES = {
  heroHome: 'photo-1556761175-b413da4baf72',
  heroHomeSecondary: 'photo-1522071820081-009f0129c71c',
  aboutPrimary: 'photo-1521737604893-d14cc237f11d',
  candidatePortrait: 'photo-1580489944761-15a19d654956',
  candidateInterview: 'photo-1573496359142-b8d87734a5a2',
  employerPrimary: 'photo-1560250097-0b93528c311a',
  employerInterview: 'photo-1573497019940-1c28c88b4f3e',
  planningDocs: 'photo-1454165804606-c3d57bc86b40',
  studentsLearning: 'photo-1523240795612-9a054b0db644',
  studentGroup: 'photo-1522202176988-66273c2fd55f',
  codeScreen: 'photo-1461749280684-dccba630e2f6',
  engineerFactory: 'photo-1581092918056-0c4c3acd3789',
  engineerPortrait: 'photo-1581091226825-a6a2a5aee158',
  automobile: 'photo-1494905998402-395d579af36f',
  officeBuilding: 'photo-1486406146926-c627a92ad1ab',
  bankFacade: 'photo-1501167786227-4cba60f6d58f',
  construction: 'photo-1503387762-592deb58ef4e',
  retail: 'photo-1441986300917-64674bd600d8',
  warehouse: 'photo-1553413077-190dd305871c',
  laboratory: 'photo-1532187863486-abf9dbad1b69',
  community: 'photo-1490645935967-10de6ba17061',
  volunteerHands: 'photo-1488521787991-ed7bbaae773c',
  newspaperPress: 'photo-1504711434969-e33886168f5c',
  notebook: 'photo-1434030216411-0b793f4b4173',
  classroom: 'photo-1509062522246-3755977927d7',
  conversation: 'photo-1556761175-b413da4baf72',
} as const