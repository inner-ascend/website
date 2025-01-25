import { X } from '@tamagui/lucide-icons'
import { Button, Dialog, H2, Paragraph, XStack, YStack } from 'tamagui'
import { GalleryImage } from '../atoms/GalleryImage'
import { GalleryControls } from './GalleryControls'

export interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  category: string
  currentImage: { url: string; caption: string }
  totalImages: number
  currentIndex: number
  onPrevious: () => void
  onNext: () => void
  onSelectImage: (index: number) => void
}

export function GalleryModal({
  isOpen,
  onClose,
  category,
  currentImage,
  totalImages,
  currentIndex,
  onPrevious,
  onNext,
  onSelectImage,
}: GalleryModalProps) {
  return (
    <Dialog modal open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
          width="90%"
          maxWidth={950}
          height="90vh"
          maxHeight={750}
        >
          <YStack space="$4" height="100%" padding="$4">
            <XStack jc="space-between" ai="center">
              <H2 size="$8">{category}</H2>
              <Button size="$3" circular icon={X} onPress={onClose} theme="alt2" />
            </XStack>

            <YStack f={1} position="relative">
              <GalleryImage imageUrl={currentImage.url} />
              <GalleryControls
                totalImages={totalImages}
                currentIndex={currentIndex}
                onPrevious={onPrevious}
                onNext={onNext}
                onSelectImage={onSelectImage}
              />
            </YStack>

            <YStack space="$4">
              <Paragraph size="$4" ta="center" theme="alt2">
                {currentImage.caption}
              </Paragraph>
            </YStack>
          </YStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
