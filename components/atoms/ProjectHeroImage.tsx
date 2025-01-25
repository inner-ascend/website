import { YStack } from 'tamagui'

interface ProjectHeroImageProps {
  imageUrl: string
  height?: number
}

export function ProjectHeroImage({ imageUrl, height = 300 }: ProjectHeroImageProps) {
  return (
    <YStack pos="relative" height={height} br="$4" ov="hidden">
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
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)',
        }}
      />
    </YStack>
  )
}
