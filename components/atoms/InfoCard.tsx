import { memo } from 'react'
import { Card, GetThemeValueForKey, Paragraph, YStack } from 'tamagui'

export interface InfoCardContent {
  title: string
  description: string
  highlights: string[]
}

export interface InfoCardProps {
  content: InfoCardContent
  width?: number | GetThemeValueForKey<'width'>
}

export const InfoCard = memo(({ content, width = '48%' as any }: InfoCardProps) => (
  <Card
    bw={1}
    bc="$borderColor"
    br="$6"
    elevation="$4"
    pressStyle={{ scale: 0.98 }}
    hoverStyle={{ scale: 1.01, elevation: '$8' }}
    animation="medium"
    width={width}
    $sm={{ width: '100%' }}
  >
    <YStack jc="center" p="$6" space="$4">
      <Paragraph size="$8" fow="400" ls={-1} fontFamily="$silkscreen">
        {content.title}
      </Paragraph>
      <Paragraph size="$5" theme="alt2" fow="400">
        {content.description}
      </Paragraph>
      <YStack space="$2">
        {content.highlights.map((highlight, i) => (
          <Paragraph key={i} size="$4" theme="alt2">
            • {highlight}
          </Paragraph>
        ))}
      </YStack>
    </YStack>
  </Card>
))
