import { Link, useSearch, useRouter } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Calendar, Clock } from 'iconsax-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Reveal } from '@/components/shared/Reveal'
import { Img } from '@/components/shared/Img'
import { FinalCta } from '@/components/shared/FinalCta'
import { fetchInsights } from '@/services/jobs'
import { insightCategories } from '@/types'
import { photoSrc } from '@/lib/images'
import { formatLongDate, cn } from '@/lib/utils'
import { usePageMeta } from '@/hooks/usePageMeta'
import { PageFade } from '@/components/layout/RootLayout'

export default function InsightsPage() {
  const search = useSearch({ strict: false }) as { category?: string }
  const router = useRouter()
  const category = insightCategories.includes(search.category as never)
    ? (search.category as string)
    : 'All Resources'

  usePageMeta(
    'Insights',
    'Thought leadership, candidate resources, employer resources and industry insights on recruitment and careers, from Conscript HR Advisors.',
  )

  const query = useQuery({
    queryKey: ['insights', category],
    queryFn: () => fetchInsights(),
    placeholderData: (previous) => previous,
  })

  const insights = (query.data ?? []).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
  const filtered =
    category === 'All Resources' ? insights : insights.filter((post) => post.category === category)

  const setCategory = (next: string) => {
    void router.navigate({
      to: '/insights',
      search: next === 'All Resources' ? {} : { category: next },
    })
  }

  return (
    <PageFade>
      <PageHeader
        eyebrow="Insights"
        title="Thinking on recruitment, written down."
        word="Insights"
        lede="Notes, essays and practical guides from the desks that do this work daily — for candidates and for the people who hire them."
        meta={['Thought leadership', 'Candidate resources', 'Industry insights']}
      />

      <section className="bg-cream-100 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-5" role="tablist" aria-label="Insight categories">
            {insightCategories.map((categoryOption) => (
              <button
                key={categoryOption}
                type="button"
                role="tab"
                aria-selected={category === categoryOption}
                onClick={() => setCategory(categoryOption)}
                className={cn(
                  'rounded-full px-4 py-2 text-[13px] font-medium transition-colors',
                  category === categoryOption
                    ? 'bg-navy-900 text-cream-100'
                    : 'text-navy-900/70 hover:bg-navy-900/5 hover:text-navy-900',
                )}
              >
                {categoryOption}
              </button>
            ))}
          </div>

          <Reveal className="mt-10">
            {query.isPending ? (
              <p className="text-sm text-muted-foreground">Loading insights…</p>
            ) : filtered.length ? (
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((post) => (
                  <Link
                    key={post.slug}
                    to="/insights/$slug"
                    params={{ slug: post.slug }}
                    className="group flex flex-col bg-background transition-colors hover:bg-cream-50"
                  >
                    <div className="overflow-hidden rounded-xl">
                      <Img
                        imageId={post.heroImage}
                        src={photoSrc(post.heroImage, 1000)}
                        maxWidth={1000}
                        alt={post.title}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                        <span className="text-navy-700">{post.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="mt-3 font-display text-xl font-medium leading-snug tracking-tight text-navy-900 transition-colors group-hover:text-navy-700">
                        {post.title}
                      </h2>
                      <div className="mt-5 flex items-center gap-2 border-t border-stone-200 pt-5 text-xs text-muted-foreground">
                        <Calendar size={14} aria-hidden="true" />
                        {formatLongDate(post.date)}
                        <span className="ml-auto flex items-center gap-1.5">
                          <Clock size={14} aria-hidden="true" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No articles in this category yet.</p>
            )}
          </Reveal>
        </div>
      </section>

      <FinalCta
        title="Read, then act."
        lede="If a piece here raises a question about your hiring or your career, the conversation costs nothing."
      />
    </PageFade>
  )
}