import { Check } from '@tamagui/lucide-icons'
import { Paragraph, XStack, YStack } from 'tamagui'

export interface Feature {
  title: string
  description: string
}

interface FeatureListProps {
  features: Feature[]
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <YStack space="$6">
      {features.map((feature, i) => (
        <XStack key={i} ai="flex-start" space="$3" flexWrap="nowrap" width="100%">
          <YStack pt="$1">
            <Check size={20} color="var(--green10)" />
          </YStack>
          <YStack space="$1" f={1}>
            <Paragraph size="$4" fontWeight="600">
              {feature.title}
            </Paragraph>
            <Paragraph size="$3" theme="alt2">
              {feature.description}
            </Paragraph>
          </YStack>
        </XStack>
      ))}
    </YStack>
  )
}
