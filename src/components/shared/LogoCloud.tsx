import { cn } from '@/lib/utils'
import { clientOrganisations } from '@/data/clients'
import { Reveal } from '@/components/shared/Reveal'

export function LogoCloud() {
  return (
    <div>
      <Reveal>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-navy-500">
              <span className="h-px w-8 bg-navy-500" aria-hidden="true" />
              Selected relationships
            </p>
            <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-navy-900 sm:text-4xl">
              Organisations we've worked with
            </h2>
          </div>
          <span className="max-w-[280px] text-xs leading-relaxed text-muted-foreground">
            A selection of the organisations with whom we have worked across 25+ years of
            recruitment practice.
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <ul
          className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200 sm:grid-cols-3 md:grid-cols-5"
          aria-label="Selected organisations we have worked with"
        >
          {clientOrganisations.map((organisation, index) => (
            <li
              key={organisation}
              className="flex min-h-[88px] items-center justify-center bg-background p-4"
            >
              <span
                className={cn(
                  'px-2 text-center font-display text-base font-semibold tracking-tight text-stone-500',
                  (index === 0 || index === 5 || index === 9) && 'text-navy-800',
                )}
              >
                {organisation}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  )
}