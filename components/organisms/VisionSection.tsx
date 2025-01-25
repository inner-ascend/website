import { YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { BulletList } from '../molecules/BulletList'

interface VisionSectionProps {
  title: string
  subtitle: string
  points: string[]
  maxWidth?: number
}

export function VisionSection({ title, subtitle, points, maxWidth = 800 }: VisionSectionProps) {
  return (
    <YStack space="$6" ai="center" maw={maxWidth} mx="auto" py="$8">
      <HomeH2 ta="center">{title}</HomeH2>
      <HomeH3 ta="center" theme="alt2">
        {subtitle}
      </HomeH3>
      <BulletList points={points} />
    </YStack>
  )
}
