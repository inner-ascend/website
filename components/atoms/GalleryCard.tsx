import { Card, H3, Paragraph, YStack } from 'tamagui'

export interface GalleryCardProps {
  category: string
  imageUrl: string
  caption: string
  index: number
  onPress: () => void
}

export function GalleryCard({ category, imageUrl, caption, index, onPress }: GalleryCardProps) {
  return (
    <Card
      bw={1}
      bc="$borderColor"
      br="$6"
      elevation="$4"
      width={index >= 3 ? '48%' : '31%'}
      height={index >= 3 ? 400 : 300}
      pressStyle={{
        scale: 0.98,
        bc: '$color1',
      }}
      animation="medium"
      hoverStyle={{
        elevation: '$8',
        borderColor: '$color8',
        scale: 1.02,
      }}
      onPress={onPress}
      $gtSm={{ minWidth: index >= 3 ? 450 : 300 }}
      $sm={{ width: '100%', height: index >= 3 ? 250 : 200 }}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <YStack
        f={1}
        jc="flex-end"
        p="$4"
        space="$2"
        style={{
          background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
        }}
      >
        <H3 size="$6" color="white">
          {category}
        </H3>
        <Paragraph size="$3" color="white" o={0.9}>
          {caption}
        </Paragraph>
      </YStack>
    </Card>
  )
}
