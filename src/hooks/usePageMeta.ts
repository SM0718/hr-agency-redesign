import { useEffect } from 'react'
import { SITE_NAME, setCanonical, setMetaAttribute } from '@/lib/seo'

export function usePageMeta(title: string, description?: string, image?: string) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`

  useEffect(() => {
    document.title = fullTitle
    setCanonical(window.location.pathname)

    if (description) {
      setMetaAttribute('name', 'description', description)
      setMetaAttribute('property', 'og:description', description)
    }
    setMetaAttribute('property', 'og:title', fullTitle)
    if (image) {
      setMetaAttribute('property', 'og:image', image)
    }
  }, [fullTitle, description, image])
}