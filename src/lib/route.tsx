import { Suspense, lazy, type ComponentType, type ReactElement } from 'react'

function PageFallback() {
  return <div aria-hidden="true" className="min-h-[60vh] w-full" />
}

export function lazyRoute(load: () => Promise<{ default: ComponentType<Record<string, never>> }>) {
  const Lazy = lazy(load)
  return function LazyRoute(props: Record<string, unknown>): ReactElement {
    return (
      <Suspense fallback={<PageFallback />}>
        <Lazy {...props} />
      </Suspense>
    )
  }
}