import { IconProps } from '@tamagui/helpers-icon'
import { XStack } from 'tamagui'
import { SimpleFeatureCard } from '../atoms/SimpleFeatureCard'

export interface Feature {
  title: string
  description: string
  icon: React.ComponentType<IconProps>
  theme: 'green' | 'blue' | 'yellow' | 'purple' | 'orange' | 'pink'
  features: string
}

interface FeatureGridProps {
  features: Feature[]
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <XStack flexWrap="wrap" gap="$8" jc="center" $sm={{ gap: '$6' }}>
      {features.map((feature, index) => (
        <SimpleFeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          theme={feature.theme}
          features={feature.features}
        />
      ))}
    </XStack>
  )
}
