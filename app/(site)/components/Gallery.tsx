import { ChevronLeft, ChevronRight, X } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Button, Card, Dialog, H2, H3, Paragraph, XStack, YStack } from 'tamagui'
import { galleryData } from '../data/gallery'

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <>
      <XStack flexWrap="wrap" gap="$4" jc="center">
        {Object.entries(galleryData).map(([category, data], index) => (
          <Card
            key={category}
            bw={1}
            bc="$borderColor"
            br="$6"
            elevation="$4"
            width={index >= 3 ? "48%" : "31%"}
            height={index >= 3 ? 400 : 300}
            pressStyle={{
              scale: 0.98,
              bc: "$color1",
            }}
            animation="medium"
            hoverStyle={{
              elevation: "$8",
              borderColor: "$color8",
              scale: 1.02
            }}
            onPress={() => setSelectedCategory(category)}
            $gtSm={{ minWidth: index >= 3 ? 450 : 300 }}
            $sm={{ width: '100%', height: index >= 3 ? 250 : 200 }}
            style={{
              backgroundImage: `url(${data.images[0].url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <YStack f={1} jc="flex-end" p="$4" space="$2" style={{
              background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
            }}>
              <H3 size="$6" color="white">{category}</H3>
              <Paragraph size="$3" color="white" o={0.9}>{data.images[0].caption}</Paragraph>
            </YStack>
          </Card>
        ))}
      </XStack>

      {selectedCategory && (
        <GalleryModal
          isOpen={!!selectedCategory}
          onClose={() => setSelectedCategory(null)}
          category={selectedCategory}
          images={galleryData[selectedCategory].images}
        />
      )}
    </>
  )
}

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  category: string
  images: { url: string; caption: string }[]
}

function GalleryModal({ isOpen, onClose, category, images }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentCategory, setCurrentCategory] = useState(category)

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      const categories = Object.keys(galleryData)
      const currentCategoryIndex = categories.indexOf(currentCategory)
      if (currentCategoryIndex < categories.length - 1) {
        const nextCategory = categories[currentCategoryIndex + 1]
        setCurrentCategory(nextCategory)
        setCurrentIndex(0)
      } else {
        setCurrentCategory(categories[0])
        setCurrentIndex(0)
      }
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      const categories = Object.keys(galleryData)
      const currentCategoryIndex = categories.indexOf(currentCategory)
      if (currentCategoryIndex > 0) {
        const prevCategory = categories[currentCategoryIndex - 1]
        setCurrentCategory(prevCategory)
        setCurrentIndex(galleryData[prevCategory].images.length - 1)
      } else {
        const lastCategory = categories[categories.length - 1]
        setCurrentCategory(lastCategory)
        setCurrentIndex(galleryData[lastCategory].images.length - 1)
      }
    }
  }

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
              <H2 size="$8">{currentCategory}</H2>
              <Button 
                size="$3" 
                circular 
                icon={X} 
                onPress={onClose}
                theme="alt2"
              />
            </XStack>

            <YStack f={1} position="relative">
              <Card
                elevation={10}
                br="$4"
                bw={1}
                width="100%"
                height="100%"
                style={{
                  backgroundImage: `url(${galleryData[currentCategory].images[currentIndex].url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'background-image 0.3s ease-in-out'
                }}
              >
                <YStack
                  width="100%"
                  height="100%"
                  style={{
                    backgroundImage: `url(${galleryData[currentCategory].images[currentIndex].url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'all 0.3s ease-in-out'
                  }}
                />
              </Card>
              
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
                  onPress={handlePrevious}
                  theme="alt2"
                  backgroundColor="$background"
                  elevation="$4"
                  opacity={0.9}
                  hoverStyle={{
                    opacity: 1,
                    scale: 1.1
                  }}
                />
                <Button 
                  size="$4" 
                  circular 
                  icon={ChevronRight}
                  onPress={handleNext}
                  theme="alt2"
                  backgroundColor="$background"
                  elevation="$4"
                  opacity={0.9}
                  hoverStyle={{
                    opacity: 1,
                    scale: 1.1
                  }}
                />
              </XStack>
            </YStack>

            <YStack space="$4">
              <Paragraph size="$4" ta="center" theme="alt2">
                {galleryData[currentCategory].images[currentIndex].caption}
              </Paragraph>
              
              <XStack jc="center" space="$2">
                {galleryData[currentCategory].images.map((_, index) => (
                  <YStack
                    key={index}
                    width={8}
                    height={8}
                    borderRadius={100}
                    backgroundColor={index === currentIndex ? "$color" : "$color4"}
                    pressStyle={{ scale: 0.9 }}
                    onPress={() => setCurrentIndex(index)}
                  />
                ))}
              </XStack>
            </YStack>
          </YStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
} 