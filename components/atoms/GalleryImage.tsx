import { Card, YStack } from 'tamagui'

export interface GalleryImageProps {
  imageUrl: string
}

export function GalleryImage({ imageUrl }: GalleryImageProps) {
  return (
    <Card
      elevation={10}
      br="$4"
      bw={1}
      width="100%"
      height="100%"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out',
      }}
    >
      <YStack
        width="100%"
        height="100%"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'all 0.3s ease-in-out',
        }}
      />
    </Card>
  )
}
