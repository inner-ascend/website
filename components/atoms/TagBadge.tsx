import { GetThemeValueForKey, Paragraph, YStack } from 'tamagui'

export type TagType = 'Development' | 'Community' | 'Infrastructure' | 'Partnership' | 'Other'

export interface TagBadgeProps {
  tag: TagType
}

type ThemeColor = GetThemeValueForKey<'color'>

const tagStyles: Record<TagType, { bg: ThemeColor; color: ThemeColor }> = {
  Development: { bg: '$green5', color: '$green10' },
  Community: { bg: '$blue5', color: '$blue10' },
  Infrastructure: { bg: '$orange5', color: '$orange10' },
  Partnership: { bg: '$purple5', color: '$purple10' },
  Other: { bg: '$gray5', color: '$gray10' },
} as const

export function TagBadge({ tag }: TagBadgeProps) {
  const style = tagStyles[tag] || tagStyles.Other

  return (
    <YStack backgroundColor={style.bg} px="$2" py="$1" br="$4">
      <Paragraph size="$2" color={style.color}>
        {tag}
      </Paragraph>
    </YStack>
  )
}
