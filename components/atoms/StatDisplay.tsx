import { Card, GetThemeValueForKey, H2, Paragraph, YStack } from 'tamagui'

export interface StatDisplayProps {
  value: string
  label: string
  color: GetThemeValueForKey<'color'>
  width?: number | string
  useCard?: boolean
}

export function StatDisplay({
  value,
  label,
  color,
  width = 200,
  useCard = false,
}: StatDisplayProps) {
  const content = (
    <YStack w={width as any} ai="center" space="$2" $sm={{ w: '45%' }}>
      <H2 size="$9" color={color}>
        {value}
      </H2>
      <Paragraph size="$4" ta="center" theme="alt2">
        {label}
      </Paragraph>
    </YStack>
  )

  if (!useCard) return content

  return (
    <Card
      bw={1}
      bc="$borderColor"
      br="$6"
      elevation="$4"
      p="$4"
      backgroundColor="$color2"
      animation="medium"
      pressStyle={{
        scale: 0.98,
        bc: '$color1',
      }}
      hoverStyle={{
        elevation: '$8',
        borderColor: '$color8',
        scale: 1.01,
      }}
    >
      {content}
    </Card>
  )
}
