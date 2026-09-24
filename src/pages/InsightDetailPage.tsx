import { Link, useRouter, useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { ArrowRight2, ArrowLeft } from 'iconsax-react'
import { PageFade } from '@/components/layout/RootLayout'
import { Reveal } from '@/components/shared/Reveal'
import { RevealImage } from '@/components/shared/RevealImage'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Img } from '@/components/shared/Img'
import { fetchInsightBySlug } from '@/services/jobs'
import { usePageMeta } from '@/hooks/usePageMeta'
import { useStructuredData, articleSchema } from '@/lib/structuredData'
import { photoSrc } from '@/lib/images'
import { formatLongDate } from '@/lib/utils'
import type { InsightBlock } from '@/types'

function BlockContent({ block }: { block: InsightBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="mt-10 font-display text-2xl font-medium tracking-tight text-navy-900 md:mt-14 md:text-3xl">
          {block.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 className="mt-8 font-display text-xl font-medium tracking-tight text-navy-900">
          {block.text}
        </h3>
      )
    case 'quote':
      return (
        <blockquote className="mt-8 border-l-2 border-brand-lime-500 pl-6">
          <p className="font-display text-xl font-medium leading-snug tracking-tight text-navy-900">
            {block.text}
          </p>
          {block.attribution ? (
            <footer className="mt-2 text-sm text-muted-foreground">— {block.attribution}</footer>
          ) : null}
        </blockquote>
      )
    case 'ul':
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-start gap-4 text-[15px] leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-lime-600" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    default:
      return <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">{block.text}</p>
  }
}

export default function InsightDetailPage() {
  const router = useRouter()
  const params = useParams({ strict: false }) as { slug: string }
  const query = useQuery({
    queryKey: ['insights', params.slug],
    queryFn: () => fetchInsightBySlug(params.slug),
  })

  const post = query.data
  usePageMeta(
    post?.title ?? 'Insight',
    post?.excerpt,
    post ? photoSrc(post.heroImage, 1200) : undefined,
  )
  useStructuredData(
    post
      ? articleSchema({
          headline: post.title,
          datePublished: post.date,
          description: post.excerpt,
          image: photoSrc(post.heroImage, 1600),
          url: `${window.location.origin}/insights/${post.slug}`,
        })
      : null,
  )

  if (query.isPending) {
    return (
      <PageFade>
        <div className="bg-cream-100 py-40">
          <p className="text-center text-sm text-muted-foreground">Loading article…</p>
        </div>
      </PageFade>
    )
  }

  if (!post) {
    return (
      <PageFade>
        <div className="bg-cream-100 py-28 md:py-40">
          <div className="mx-auto flex max-w-2xl flex-col items-center px-5 text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-lime-600">
              Not found
            </p>
            <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-navy-900">
              This article doesn't exist.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              It may have been moved or retired. Browse the full archive instead.
            </p>
            <Link
              to="/insights"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-navy-900 px-6 text-sm font-medium text-cream-100 transition-colors hover:bg-navy-800"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back to insights
            </Link>
          </div>
        </div>
      </PageFade>
    )
  }

  return (
    <PageFade>
      <article className="bg-cream-100">
        <header className="mx-auto max-w-3xl px-5 pt-16 md:pt-24">
          <nav className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <button
              type="button"
              onClick={() => void router.navigate({ to: '/insights' })}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-navy-900"
            >
              <ArrowLeft size={13} aria-hidden="true" />
              Insights
            </button>
          </nav>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="rounded-md bg-navy-900 px-3 py-1 text-cream-100">{post.category}</span>
            <span>{formatLongDate(post.date)}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-navy-900 sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">{post.excerpt}</p>
          <div className="mt-8 flex items-center gap-3 border-b border-stone-200 pb-8 text-sm text-muted-foreground">
            <span className="font-medium text-navy-900">Conscript HR Advisors</span>
            <span aria-hidden="true">·</span>
            <span>{post.author}</span>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5">
          <RevealImage
            imageId={post.heroImage}
            src={photoSrc(post.heroImage, 1600)}
            maxWidth={1600}
            alt={post.title}
            className="aspect-[16/9] w-full"
          />
        </div>

        <div className="mx-auto max-w-3xl px-5 py-14 md:py-16">
          {post.content.map((block, index) => (
            <Reveal key={`${block.type}-${index}`} delay={0.03 * (index % 3)}>
              <BlockContent block={block} />
            </Reveal>
          ))}
        </div>
      </article>

      {post.related.length ? (
        <section className="border-t border-stone-200 bg-cream-100 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <SectionHeading eyebrow="Keep reading" title="Related insights" />
            <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200 md:grid-cols-3">
              {post.related.map((relatedSlug) => (
                <RelatedCard key={relatedSlug} slug={relatedSlug} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </PageFade>
  )
}

function RelatedCard({ slug }: { slug: string }) {
  const query = useQuery({
    queryKey: ['insights', slug],
    queryFn: () => fetchInsightBySlug(slug),
  })
  const post = query.data
  if (!post) return null
  return (
    <Link
      to="/insights/$slug"
      params={{ slug: post.slug }}
      className="group flex flex-col bg-background transition-colors hover:bg-cream-50"
    >
      <div className="overflow-hidden rounded-xl">
        <Img
          imageId={post.heroImage}
          src={photoSrc(post.heroImage, 900)}
          maxWidth={900}
          alt={post.title}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-navy-700">{post.category}</p>
        <h3 className="mt-2 font-display text-lg font-medium leading-snug tracking-tight text-navy-900 transition-colors group-hover:text-navy-700">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-navy-900">
          Read article
          <ArrowRight2 size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}