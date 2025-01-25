import { XStack } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { FeatureCard, type FeatureItem } from '../molecules/FeatureCard'

interface FeatureGridProps {
  features: FeatureItem[]
  onFeatureHover?: (index: number) => void
}

export function FeatureGrid({ features, onFeatureHover }: FeatureGridProps) {
  return (
    <ContainerLarge>
      <XStack
        flex={1}
        overflow="hidden"
        maxWidth="100%"
        space="$8"
        flexWrap="nowrap"
        px="$2"
        mb={-8}
        py="$1"
        $sm={{ flexDirection: 'column' }}
        $gtSm={{
          px: '$6',
        }}
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
            onHoverIn={() => onFeatureHover?.(index)}
          />
        ))}
      </XStack>
    </ContainerLarge>
  )
}
