import { pressItems } from '@/data/press'
import type { PressItem } from '@/types'

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

export async function fetchPress(kind: string): Promise<PressItem[]> {
  await wait(250)
  return kind === 'All' ? pressItems : pressItems.filter((item) => item.kind === kind)
}