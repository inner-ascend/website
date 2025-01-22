import { AnimatePresence } from '@tamagui/animate-presence'
import { ArrowLeft, ArrowRight } from '@tamagui/lucide-icons'
import React from 'react'
import { Button, Image, XStack, YStack, styled } from 'tamagui'
import { HomeH2, HomeH3 } from '../features/site/home/HomeHeaders'

const images = [
  {
    url: '/images/permaculture.jpg',
    title: 'Permaculture Communities',
    description: 'Communities focused on sustainable agriculture and ecological design'
  },
  {
    url: '/images/natural-building.jpg',
    title: 'Natural Building',
    description: 'Eco-friendly construction using local and natural materials'
  },
  {
    url: '/images/off-grid.jpg',
    title: 'Off-Grid Living',
    description: 'Self-sufficient communities powered by renewable energy'
  }
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

export function EcovillageCarousel() {
  const [[page, going], setPage] = React.useState([0, 0])
  const imageIndex = wrap(0, images.length, page)
  const paginate = (going2: number) => {
    setPage([page + going2, going2])
  }

  return (
    <XStack
      overflow="hidden"
      backgroundColor="$background"
      position="relative"
      height={500}
      width="100%"
      alignItems="center"
      br="$4"
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
            resizeMode="cover"
            pos="absolute"
            width="100%"
            height="100%"
            source={{
              uri: images[imageIndex].url,
              width: 2000,
              height: 1000
            }}
          />
          <YStack
            fullscreen
            ai="center"
            jc="flex-end"
            pb="$8"
            style={{
              background: 'linear-gradient(transparent, rgba(0,0,0,0.8))'
            }}
          >
            <HomeH2 color="white" size="$8" ta="center">
              {images[imageIndex].title}
            </HomeH2>
            <HomeH3 color="white" size="$5" o={0.8} ta="center" p="$4" maxWidth={600} theme="dark">
              {images[imageIndex].description}
            </HomeH3>
          </YStack>
        </GalleryItem>
      </AnimatePresence>

      <Button
        accessibilityLabel="Previous ecovillage type"
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
        accessibilityLabel="Next ecovillage type"
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