export const clientOrganisations = [
  'Microsoft',
  'IBM',
  'J.P. Morgan',
  'Barclays',
  'John Deere',
  'Gulf',
  'Mahle',
  'Knight Frank',
  'POSCO',
  'Swiss Re',
  'ACG',
  'Ambuja Cement',
  'Masterek',
  'IGATE',
  'Jewelex',
] as const

export type ClientOrganisation = (typeof clientOrganisations)[number]