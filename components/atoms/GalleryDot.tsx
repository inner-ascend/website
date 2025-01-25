import { YStack } from 'tamagui'

export interface GalleryDotProps {
  isActive: boolean
  onPress: () => void
}

export function GalleryDot({ isActive, onPress }: GalleryDotProps) {
  return (
    <YStack
      width={8}
      height={8}
      borderRadius={100}
      backgroundColor={isActive ? '$color' : '$color4'}
      pressStyle={{ scale: 0.9 }}
      onPress={onPress}
    />
  )
}
