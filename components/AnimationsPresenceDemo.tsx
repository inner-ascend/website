import { AnimatePresence } from '@tamagui/animate-presence'
import { ArrowLeft, ArrowRight } from '@tamagui/lucide-icons'
import React from 'react'
import { Button, Image, XStack, YStack, styled } from 'tamagui'

const images = [
  '/banner-one.jpg',
  '/banner-rc0.jpg',
  '/banner-lighthouse.jpg'
]

const GalleryItem = styled(YStack, {
  zIndex: 1,
  x: 0,
  opacity: 1,
  fullscreen: true,
  variants: {
    going: {
      ':number': (going) => ({
        enterStyle: {
          x: going > 0 ? 1000 : -1000,
          opacity: 0
        },
        exitStyle: {
          zIndex: 0,
          x: going < 0 ? 1000 : -1000,
          opacity: 0
        }
      })
    }
  }
})

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min
}

export function AnimationsPresenceDemo() {
  const [[page, going], setPage] = React.useState([0, 0])
  const imageIndex = wrap(0, images.length, page)
  const paginate = (going2: number) => {
    setPage([page + going2, going2])
  }

  return (
    <XStack
      overflow="hidden"
      backgroundColor="#000"
      position="relative"
      height={300}
      width="100%"
      alignItems="center"
    >
      <AnimatePresence
        initial={false}
        custom={{ going }}
      >
        <GalleryItem
          key={page}
          animation="slow"
          going={going}
        >
          <Image
            source={{
              uri: images[imageIndex],
              width: 820,
              height: 300
            }}
          />
        </GalleryItem>
      </AnimatePresence>

      <Button
        accessibilityLabel="Carousel left"
        icon={ArrowLeft}
        size="$5"
        position="absolute"
        left="$4"
        circular
        elevate
        onPress={() => paginate(-1)}
        zIndex={100}
      />

      <Button
        accessibilityLabel="Carousel right"
        icon={ArrowRight}
        size="$5"
        position="absolute"
        right="$4"
        circular
        elevate
        onPress={() => paginate(1)}
        zIndex={100}
      />
    </XStack>
  )
} 