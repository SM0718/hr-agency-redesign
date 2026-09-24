import { Link } from '@tanstack/react-router'
import { ArrowRight2 } from 'iconsax-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ArrowLinkProps {
  to?: string
  href?: string
  hash?: string
  children: ReactNode
  tone?: 'dark' | 'light'
  className?: string
}

export function ArrowLink({ to, href, hash, children, tone = 'dark', className }: ArrowLinkProps) {
  const classes = cn(
    'group inline-flex items-center gap-2 text-sm font-semibold tracking-tight',
    tone === 'dark' ? 'text-navy-900 hover:text-navy-600' : 'text-cream-100 hover:text-brand-lime-300',
    className,
  )
  const inner = (
    <>
      {children}
      <ArrowRight2
        size={15}
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </>
  )
  if (to) {
    return (
      <Link to={to} hash={hash} className={classes}>
        {inner}
      </Link>
    )
  }
  return (
    <a href={href} className={classes}>
      {inner}
    </a>
  )
}