import { useQuery } from '@tanstack/react-query'
import { ArrowRight2, ArrowLeft } from 'iconsax-react'
import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { PageHeader } from '@/components/shared/PageHeader'
import { Reveal } from '@/components/shared/Reveal'
import { Img } from '@/components/shared/Img'
import { FinalCta } from '@/components/shared/FinalCta'
import { fetchPress } from '@/services/media'
import { pressKinds } from '@/data/press'
import { photoSrc } from '@/lib/images'
import { formatLongDate, cn } from '@/lib/utils'
import { usePageMeta } from '@/hooks/usePageMeta'
import { PageFade } from '@/components/layout/RootLayout'

export default function PressPage() {
  usePageMeta(
    'Press & Media',
    'Press releases, newspaper coverage, media mentions and community initiatives from Conscript HR Advisors. Explore our media gallery.',
  )

  const [kind, setKind] = useState<string>('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const query = useQuery({
    queryKey: ['press', kind],
    queryFn: () => fetchPress(kind),
    placeholderData: (previous) => previous,
  })

  const items = query.data ?? []
  const item = lightbox !== null ? items[lightbox] : null

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') setLightbox((current) => (current === null ? current : (current + 1) % items.length))
      if (event.key === 'ArrowLeft') setLightbox((current) => (current === null ? current : (current - 1 + items.length) % items.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, items.length])

  return (
    <PageFade>
      <PageHeader
        eyebrow="Press & media"
        title="In the press, and in the community."
        word="Press"
        lede="Press releases, newspaper coverage, media mentions and the community work that has drawn the attention. Browse the gallery below."
        meta={['Press releases', 'Media coverage', 'Community initiatives']}
      />

      <section className="bg-cream-100 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-5">
            {pressKinds.map((kindOption) => (
              <button
                key={kindOption}
                type="button"
                onClick={() => {
                  setKind(kindOption)
                  setLightbox(null)
                }}
                aria-pressed={kind === kindOption}
                className={cn(
                  'rounded-full px-4 py-2 text-[13px] font-medium transition-colors',
                  kind === kindOption
                    ? 'bg-navy-900 text-cream-100'
                    : 'text-navy-900/70 hover:bg-navy-900/5 hover:text-navy-900',
                )}
              >
                {kindOption}
              </button>
            ))}
          </div>

          <Reveal className="mt-10">
            {query.isPending ? (
              <p className="text-sm text-muted-foreground">Loading coverage…</p>
            ) : items.length ? (
              <ul className="border-t border-stone-200">
                {items.map((press, index) => (
                  <li key={press.id} className="border-b border-stone-200">
                    <button
                      type="button"
                      onClick={() => setLightbox(index)}
                      className="group grid w-full grid-cols-1 gap-6 py-7 text-left md:grid-cols-[240px_1fr] md:items-center md:gap-10"
                    >
                      <div className="overflow-hidden rounded-xl md:aspect-[4/3]">
                        <Img
                          imageId={press.image}
                          src={photoSrc(press.image, 900)}
                          maxWidth={900}
                          alt={press.headline}
                          className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:aspect-[4/3]"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <Badge variant={press.kind === 'Community initiative' ? 'accent' : 'outline'}>
                            {press.kind}
                          </Badge>
                          <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                            {press.publication} · {formatLongDate(press.date)}
                          </span>
                        </div>
                        <h2 className="mt-3 font-display text-xl font-medium leading-snug tracking-tight text-navy-900 transition-colors group-hover:text-navy-700 md:text-2xl">
                          {press.headline}
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                          {press.excerpt}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-navy-900">
                          View in gallery
                          <ArrowRight2 size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">No items in this category yet.</p>
            )}
          </Reveal>
        </div>
      </section>

      <Dialog open={lightbox !== null} onOpenChange={(open) => !open && setLightbox(null)}>
        {item ? (
          <DialogContent className="max-w-5xl overflow-hidden">
            <div className="relative">
              <Img
                imageId={item.image}
                src={photoSrc(item.image, 1600)}
                maxWidth={1600}
                eager
                alt={item.headline}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
            <div className="px-6 py-6 md:px-8 md:py-7">
              <DialogTitle className="pr-8 font-display text-xl font-medium tracking-tight md:text-2xl">
                {item.headline}
              </DialogTitle>
              <DialogDescription className="mt-3 max-w-2xl leading-relaxed">{item.excerpt}</DialogDescription>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-[12px] uppercase tracking-[0.14em] text-cream-100/60">
                <span>
                  {item.kind} · {item.publication} · {formatLongDate(item.date)}
                </span>
                <span className="tabular">
                  {String((lightbox ?? 0) + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setLightbox(((lightbox ?? 0) - 1 + items.length) % items.length)}
                  className="inline-flex h-10 items-center gap-2 rounded-md border border-cream-100/20 px-4 text-sm font-medium text-cream-100 transition-colors hover:bg-cream-100/10"
                >
                  <ArrowLeft size={15} aria-hidden="true" />
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setLightbox(((lightbox ?? 0) + 1) % items.length)}
                  className="inline-flex h-10 items-center gap-2 rounded-md border border-cream-100/20 px-4 text-sm font-medium text-cream-100 transition-colors hover:bg-cream-100/10"
                >
                  Next
                  <ArrowRight2 size={15} aria-hidden="true" />
                </button>
              </div>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>

      <FinalCta
        title="Have a press or media enquiry?"
        lede="Reach the team that handles media, press releases and community outreach."
      />
    </PageFade>
  )
}