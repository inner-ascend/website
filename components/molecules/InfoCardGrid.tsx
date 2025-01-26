import { ThemeTint } from '@tamagui/logo'
import { memo } from 'react'
import { XStack } from 'tamagui'
import { InfoCard, type InfoCardContent } from '../atoms/InfoCard'

export interface InfoCardGridProps {
  leftCard: InfoCardContent
  rightCard: InfoCardContent
}

export const InfoCardGrid = memo(({ leftCard, rightCard }: InfoCardGridProps) => (
  <ThemeTint>
    <XStack pos="relative" jc="center" gap="$4" $sm={{ fd: 'column' }} width="100%">
      <InfoCard content={leftCard} />
      <InfoCard content={rightCard} />
    </XStack>
  </ThemeTint>
))
