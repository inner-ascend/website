import { YStack, type GetThemeValueForKey } from 'tamagui'
import { BulletPoint } from '../atoms/BulletPoint'

interface BulletListProps {
  points: string[]
  spacing?: GetThemeValueForKey<'space'>
  marginTop?: GetThemeValueForKey<'marginTop'>
}

export function BulletList({ points, spacing = '$4', marginTop = '$4' }: BulletListProps) {
  return (
    <YStack space={spacing} mt={marginTop}>
      {points.map((point, i) => (
        <BulletPoint key={i} text={point} />
      ))}
    </YStack>
  )
}
