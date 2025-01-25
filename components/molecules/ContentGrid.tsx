import { XStack } from 'tamagui'
import { ContentCard, ContentCardProps } from '../atoms/ContentCard'

interface ContentGridProps {
  items: ContentCardProps[]
}

export function ContentGrid({ items }: ContentGridProps) {
  return (
    <XStack flexWrap="wrap" gap="$4" jc="center">
      {items.map((item, i) => (
        <ContentCard key={i} {...item} />
      ))}
    </XStack>
  )
}
