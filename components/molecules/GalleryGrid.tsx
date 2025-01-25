import { XStack } from 'tamagui'
import { GalleryData } from '~/data/mexico/gallery'
import { GalleryCard } from '../atoms/GalleryCard'

interface GalleryGridProps {
  categories: GalleryData
  onSelectCategory: (category: string) => void
}

export function GalleryGrid({ categories, onSelectCategory }: GalleryGridProps) {
  return (
    <XStack flexWrap="wrap" gap="$4" jc="center">
      {Object.entries(categories).map(([category, data], index) => (
        <GalleryCard
          key={category}
          category={category}
          imageUrl={data.images[0].url}
          caption={data.images[0].caption}
          index={index}
          onPress={() => onSelectCategory(category)}
        />
      ))}
    </XStack>
  )
}
