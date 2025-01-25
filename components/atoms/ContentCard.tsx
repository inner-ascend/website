import { Card, GetThemeValueForKey, H3, Paragraph, XStack } from 'tamagui'
import { TagBadge, TagType } from './TagBadge'

type SizeValue = GetThemeValueForKey<'width'>

export interface ContentCardProps {
  title: string
  description: string
  metadata?: string
  tag?: TagType
  width?: SizeValue | number | `${number}%`
  minWidth?: SizeValue | number | `${number}%`
  onPress?: () => void
}

export function ContentCard({
  title,
  description,
  metadata,
  tag,
  width = '48%',
  minWidth,
  onPress,
}: ContentCardProps) {
  return (
    <Card
      bw={1}
      bc="$borderColor"
      br="$6"
      elevation="$4"
      width={width as any}
      p="$5"
      space="$3"
      pressStyle={{
        scale: 0.98,
        bc: '$color1',
      }}
      animation="medium"
      hoverStyle={{
        elevation: '$8',
        borderColor: '$color8',
        scale: 1.01,
      }}
      {...(minWidth && { $gtSm: { minWidth: minWidth as any } })}
      $sm={{ width: '100%' }}
      {...(onPress && { onPress })}
    >
      <XStack jc="space-between" ai="center">
        {metadata && (
          <Paragraph size="$3" theme="alt2" fontFamily="$silkscreen">
            {metadata}
          </Paragraph>
        )}
        {tag && <TagBadge tag={tag} />}
      </XStack>
      <H3 size="$6" fontFamily="$silkscreen">
        {title}
      </H3>
      <Paragraph size="$4" theme="alt2">
        {description}
      </Paragraph>
    </Card>
  )
}
