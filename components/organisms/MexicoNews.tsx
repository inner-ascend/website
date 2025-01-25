import { ChevronRight } from '@tamagui/lucide-icons'
import { Button, YStack } from 'tamagui'
import { newsItems } from '~/data/mexico/news'
import { ContentCardProps } from '../atoms/ContentCard'
import { ContentGrid } from '../molecules/ContentGrid'

export function MexicoNews() {
  const newsCards: ContentCardProps[] = newsItems.map((update) => ({
    title: update.title,
    description: update.description,
    metadata: update.date,
    tag: update.tag,
    minWidth: 400,
  }))

  return (
    <YStack space="$6">
      <ContentGrid items={newsCards} />

      <YStack ai="center" mt="$4">
        <Button
          size="$4"
          theme="alt2"
          fontFamily="$silkscreen"
          iconAfter={ChevronRight}
          pressStyle={{
            scale: 0.97,
          }}
          animation="quick"
          hoverStyle={{
            opacity: 0.9,
            scale: 1.02,
          }}
        >
          View All Updates
        </Button>
      </YStack>
    </YStack>
  )
}
