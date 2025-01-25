import { Card, H3, Paragraph, YStack } from 'tamagui'

export interface RoadmapCardProps {
  date: string
  title: string
  items: string[]
  width?: string | number
  minWidth?: string | number
}

export function RoadmapCard({ date, title, items, width = '23%', minWidth }: RoadmapCardProps) {
  return (
    <Card
      bw={1}
      bc="$borderColor"
      br="$6"
      elevation="$4"
      width={width as any} // TODO: Fix type casting once Tamagui types are updated
      pressStyle={{
        scale: 0.98,
        bc: '$color1',
      }}
      animation="medium"
      hoverStyle={{
        elevation: '$8',
        borderColor: '$color8',
        scale: 1.02,
      }}
      {...(minWidth && { $gtSm: { minWidth: minWidth as any } })}
      $sm={{ width: '100%' }}
    >
      <YStack jc="center" p="$4" space="$2">
        <H3 size="$4" theme="alt2">
          {date}
        </H3>
        <H3 size="$5">{title}</H3>
        <YStack space="$1">
          {items.map((item, i) => (
            <Paragraph key={i} size="$3" theme="alt2">
              • {item}
            </Paragraph>
          ))}
        </YStack>
      </YStack>
    </Card>
  )
}
