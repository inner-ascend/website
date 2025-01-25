import { XStack } from 'tamagui'
import { RoadmapCard, RoadmapCardProps } from '../atoms/RoadmapCard'

interface RoadmapGridProps {
  phases: Omit<RoadmapCardProps, 'width' | 'minWidth'>[]
}

export function RoadmapGrid({ phases }: RoadmapGridProps) {
  return (
    <XStack pos="relative" jc="center" flexWrap="wrap" gap="$4" width="100%">
      {phases.map((phase, i) => (
        <RoadmapCard key={i} {...phase} minWidth={220} />
      ))}
    </XStack>
  )
}
