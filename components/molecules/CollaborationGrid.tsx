import { XStack, YStack } from 'tamagui'
import { CollaborationCard, type CollaborationCardProps } from '../atoms/CollaborationCard'

export interface CollaborationGridProps {
  cards: CollaborationCardProps[]
}

export function CollaborationGrid({ cards }: CollaborationGridProps) {
  return (
    <XStack flexWrap="wrap" gap="$8" rowGap="$12" jc="center" $sm={{ gap: '$4' }} pb="$8">
      {cards.map((card, i) => (
        <YStack
          key={i}
          f={1}
          miw={300}
          maxWidth={400}
          $sm={{
            miw: 'auto',
            w: '100%',
          }}
        >
          <CollaborationCard {...card} />
        </YStack>
      ))}
    </XStack>
  )
}
