import { IconProps } from '@tamagui/helpers-icon'
import { H3, Paragraph, YStack } from 'tamagui'

export interface SimpleFeatureCardProps {
  title: string
  description: string
  icon: React.ComponentType<IconProps>
  theme: 'green' | 'blue' | 'yellow' | 'purple' | 'orange' | 'pink'
  features: string
}

export function SimpleFeatureCard({
  title,
  description,
  icon: Icon,
  theme,
  features,
}: SimpleFeatureCardProps) {
  return (
    <YStack w={250} ai="center" space="$3" $sm={{ w: '100%', maw: 300 }}>
      <YStack
        p="$4"
        br="$6"
        bc={`$${theme}5`}
        pressStyle={{
          scale: 0.98,
          opacity: 0.85,
        }}
        animation="quick"
      >
        <Icon size={24} color={`var(--${theme}10)`} />
      </YStack>
      <H3 size="$5" ta="center" $sm={{ size: '$4' }}>
        {title}
      </H3>
      <YStack space="$2">
        <Paragraph size="$3" ta="center" theme="alt2">
          {description}
        </Paragraph>
        <Paragraph size="$2" ta="center" theme="alt2" o={0.8}>
          {features}
        </Paragraph>
      </YStack>
    </YStack>
  )
}
