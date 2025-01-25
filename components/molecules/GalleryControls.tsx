import { ChevronLeft, ChevronRight } from '@tamagui/lucide-icons'
import { Button, XStack } from 'tamagui'
import { GalleryDot } from '../atoms/GalleryDot'

interface GalleryControlsProps {
  totalImages: number
  currentIndex: number
  onPrevious: () => void
  onNext: () => void
  onSelectImage: (index: number) => void
}

export function GalleryControls({
  totalImages,
  currentIndex,
  onPrevious,
  onNext,
  onSelectImage,
}: GalleryControlsProps) {
  return (
    <>
      <XStack
        position="absolute"
        top="50%"
        left={0}
        right={0}
        y="-50%"
        jc="space-between"
        px="$4"
        zi={1000}
      >
        <Button
          size="$4"
          circular
          icon={ChevronLeft}
          onPress={onPrevious}
          theme="alt2"
          backgroundColor="$background"
          elevation="$4"
          opacity={0.9}
          hoverStyle={{
            opacity: 1,
            scale: 1.1,
          }}
        />
        <Button
          size="$4"
          circular
          icon={ChevronRight}
          onPress={onNext}
          theme="alt2"
          backgroundColor="$background"
          elevation="$4"
          opacity={0.9}
          hoverStyle={{
            opacity: 1,
            scale: 1.1,
          }}
        />
      </XStack>

      <XStack jc="center" space="$2">
        {Array.from({ length: totalImages }).map((_, index) => (
          <GalleryDot
            key={index}
            isActive={index === currentIndex}
            onPress={() => onSelectImage(index)}
          />
        ))}
      </XStack>
    </>
  )
}
