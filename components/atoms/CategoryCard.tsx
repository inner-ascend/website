import { Check } from '@tamagui/lucide-icons'
import { Card, H2, Paragraph, Separator, XStack, YStack, type ThemeName } from 'tamagui'

export interface CategoryCardProps {
  title: string
  items: string[]
  theme?: ThemeName
}

export function CategoryCard({ title, items, theme = 'blue' }: CategoryCardProps) {
  return (
    <Card
      elevate
      size="$4"
      bordered
      theme={theme}
      ov="hidden"
      f={1}
      miw={300}
      maxWidth={400}
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
    >
      <YStack f={1} space="$4">
        <Card padded>
          <YStack space="$4">
            <H2 size="$6">{title}</H2>
            <Separator />
          </YStack>
          <YStack f={1} space="$4" mt="$4">
            <YStack space="$2">
              {items.map((item, i) => (
                <XStack key={i} space="$2" ai="center">
                  <Check size={16} color={`var(--${theme}10)`} />
                  <Paragraph size="$4" theme="alt2">
                    {item}
                  </Paragraph>
                </XStack>
              ))}
            </YStack>
          </YStack>
        </Card>
      </YStack>
    </Card>
  )
}
