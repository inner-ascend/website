import { type LinkProps } from 'one'
import type { ComponentProps } from 'react'
import { Paragraph, YStack, type YStackProps } from 'tamagui'
import { IconStack } from '~/features/site/home/IconStack'
import { FeatureTitle } from '../atoms/FeatureTitle'

export interface FeatureItem {
  title: string
  description: string
  href: LinkProps<any>['href']
  icon: React.ComponentType<ComponentProps<'svg'>>
  theme: 'green' | 'blue' | 'purple'
}

interface FeatureCardProps extends YStackProps {
  feature: FeatureItem
  onHoverIn?: () => void
}

export function FeatureCard({ feature, onHoverIn, ...props }: FeatureCardProps) {
  const Icon = feature.icon

  return (
    <YStack
      width="33%"
      theme={feature.theme}
      onHoverIn={onHoverIn}
      $sm={{ width: 'auto', maxWidth: 500, mx: 'auto' }}
      flexShrink={1}
      {...props}
    >
      <IconStack>
        <Icon size={16} color="var(--color9)" />
      </IconStack>

      <FeatureTitle href={feature.href}>{feature.title}</FeatureTitle>

      <Paragraph o={0.7} size="$5">
        {feature.description}
      </Paragraph>
    </YStack>
  )
}
