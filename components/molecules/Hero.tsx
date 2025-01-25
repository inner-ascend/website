import type { ThemeName } from 'tamagui'
import { YStack } from 'tamagui'
import { HeroContent } from '../atoms/HeroContent'
import { HeroImage } from '../atoms/HeroImage'

interface HeroProps {
  imageUrl: string
  title: string
  subtitle: string
  buttons?: Array<{
    text: string
    theme: ThemeName
    onPress: () => void
  }>
  height?: number | { default: number; sm: number }
  gradient?: string
}

export function Hero({ imageUrl, title, subtitle, buttons = [], height, gradient }: HeroProps) {
  return (
    <YStack pos="relative">
      <HeroImage imageUrl={imageUrl} height={height} gradient={gradient} />
      <YStack pos="absolute" top={0} right={0} bottom={0} left={0}>
        <HeroContent title={title} subtitle={subtitle} buttons={buttons} />
      </YStack>
    </YStack>
  )
}
