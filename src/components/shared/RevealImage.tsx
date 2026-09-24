import { motion, useReducedMotion } from 'framer-motion'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import { Img } from '@/components/shared/Img'

interface RevealImageProps extends ComponentProps<typeof Img> {
  className?: string
  imgClassName?: string
  delay?: number
}

export function RevealImage({ className, imgClassName, delay = 0, ...imgProps }: RevealImageProps) {
  const reduce = useReducedMotion()
  return (
    <div className={cn('overflow-hidden rounded-xl', className)}>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28, scale: 1.035 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px 0px' }}
        transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <Img {...imgProps} className={cn('h-full w-full object-cover', imgClassName)} />
      </motion.div>
    </div>
  )
}