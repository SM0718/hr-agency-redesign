export const SITE_NAME = 'Conscript HR Advisors Pvt. Ltd.'
export const SITE_URL = 'https://www.conscript.net'
export const CONTACT_EMAIL = 'hr2@conscript.net'
export const TAGLINE = 'Recruit. Right. Resources.'

export function absoluteUrl(pathname: string): string {
  return `${SITE_URL}${pathname === '/' ? '' : pathname}`
}

export function setMetaAttribute(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function setCanonical(pathname: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }
  link.href = absoluteUrl(pathname)
}