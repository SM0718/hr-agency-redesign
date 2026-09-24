import { useState } from 'react'
import { cn } from '@/lib/utils'
import { photoSrcSet } from '@/lib/images'

interface ImgProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string
  imageId?: string
  maxWidth?: number
  eager?: boolean
}

export function Img({
  src,
  imageId,
  maxWidth = 1600,
  eager,
  className,
  alt,
  ...props
}: ImgProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        aria-hidden="true"
        className={cn('flex items-end justify-start bg-navy-900 p-5', className)}
      >
        <span className="font-display text-lg font-medium tracking-tight text-cream-100/70">
          Conscript HR
        </span>
      </div>
    )
  }

  const srcSet = imageId ? photoSrcSet(imageId, maxWidth) : undefined

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? `(max-width: 768px) 100vw, ${maxWidth}px` : undefined}
      alt={alt ?? ''}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={cn(className, 'rounded-xl')}
      {...props}
    />
  )
}