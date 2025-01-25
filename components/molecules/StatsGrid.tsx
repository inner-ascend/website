import { XStack } from 'tamagui'
import { StatDisplay, StatDisplayProps } from '../atoms/StatDisplay'

export interface Stat extends Omit<StatDisplayProps, 'width'> {}

interface StatsGridProps {
  stats: Stat[]
  useCards?: boolean
  itemWidth?: number | string
}

export function StatsGrid({ stats, useCards = false, itemWidth = 200 }: StatsGridProps) {
  return (
    <XStack flexWrap="wrap" gap="$8" jc="center" $sm={{ gap: '$6' }}>
      {stats.map((stat, i) => (
        <StatDisplay key={i} {...stat} width={itemWidth} useCard={useCards} />
      ))}
    </XStack>
  )
}
