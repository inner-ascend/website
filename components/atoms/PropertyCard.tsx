import { Card, H2, Paragraph, YStack } from 'tamagui'

export interface PropertyCardProps {
  title: string
  subtitle?: string
  width?: string | number
  children: React.ReactNode
}

export function PropertyCard({ title, subtitle, width = '48%', children }: PropertyCardProps) {
  return (
    <Card
      f={1}
      bw={1}
      bc="$borderColor"
      br="$6"
      elevation="$4"
      shadowRadius={60}
      width={width as any} // TODO: Fix type casting once Tamagui types are updated
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
      $sm={{ width: '100%' }}
    >
      <YStack jc="center" p="$6" space="$6">
        <YStack space="$4">
          <H2 size="$8">{title}</H2>
          {subtitle && (
            <Paragraph size="$5" theme="alt2">
              {subtitle}
            </Paragraph>
          )}
        </YStack>
        {children}
      </YStack>
    </Card>
  )
}
