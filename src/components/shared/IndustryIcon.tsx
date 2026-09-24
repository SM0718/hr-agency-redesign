import {
  Box1,
  Box,
  Building4,
  DocumentText,
  Health,
  Monitor,
  Slider,
  Speedometer,
  Strongbox,
  type Icon,
} from 'iconsax-react'

const ICONS: Record<string, Icon> = {
  Monitor,
  Box1,
  Speedometer,
  Strongbox,
  Building4,
  DocumentText,
  Slider,
  Box,
  Health,
}

export function IndustryIcon({ type, size = 20 }: { type: string; size?: number }) {
  const Icon = ICONS[type] ?? Monitor
  return <Icon size={size} variant="Linear" aria-hidden="true" />
}