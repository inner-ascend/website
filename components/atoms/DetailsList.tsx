import { H3, Paragraph, YStack } from 'tamagui'

export interface DetailSection {
  title: string
  items: string[]
}

interface DetailsListProps {
  sections: DetailSection[]
}

export function DetailsList({ sections }: DetailsListProps) {
  return (
    <YStack space="$5">
      {sections.map((section, i) => (
        <YStack key={i} space="$3">
          <H3 size="$5" theme="alt2">
            {section.title}
          </H3>
          <YStack space="$2">
            {section.items.map((item, j) => (
              <Paragraph key={j} size="$4">
                • {item}
              </Paragraph>
            ))}
          </YStack>
        </YStack>
      ))}
    </YStack>
  )
}
