import { YStack } from 'tamagui'

interface HeroImageProps {
  imageUrl: string
  height?: number | { default: number; sm: number }
  gradient?: string
}

export function HeroImage({
  imageUrl,
  height = { default: 500, sm: 400 },
  gradient = 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)',
}: HeroImageProps) {
  return (
    <YStack
      pos="relative"
      height={typeof height === 'number' ? height : height.default}
      $sm={{ height: typeof height === 'number' ? height : height.sm }}
    >
      <YStack
        pos="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <YStack
        fullscreen
        zi={1}
        style={{
          background: gradient,
        }}
      />
    </YStack>
  )
}
