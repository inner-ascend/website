import { Card, H2, Paragraph, YStack } from 'tamagui'

export interface StatDisplayProps {
  value: string
  label: string
  color: string
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
    <YStack w={width} ai="center" space="$2" $sm={{ w: '45%' }}>
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
      br="$4"
      elevation="$2"
      p="$4"
      backgroundColor="$color2"
      animation="medium"
      hoverStyle={{
        elevation: '$4',
        scale: 1.02,
      }}
    >
      {content}
    </Card>
  )
}
