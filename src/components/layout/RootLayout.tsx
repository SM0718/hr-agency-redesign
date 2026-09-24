import { MotionConfig, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { Outlet, ScrollRestoration } from '@tanstack/react-router'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { queryClient } from '@/lib/queryClient'
import { useStructuredData, organizationSchema } from '@/lib/structuredData'

export function RootLayout() {
  useStructuredData(organizationSchema())

  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
        <ScrollRestoration />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cream-100 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-900"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          <Outlet />
        </main>
        <Footer />
      </MotionConfig>
    </QueryClientProvider>
  )
}

/** Light cross-fade between routes. Respects prefers-reduced-motion via MotionConfig. */
export function PageFade({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}