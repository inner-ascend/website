import { Check } from '@tamagui/lucide-icons'
import { Paragraph, XStack, type FontSizeTokens, type GetThemeValueForKey } from 'tamagui'

interface BulletPointProps {
  text: string
  iconSize?: number
  iconColor?: GetThemeValueForKey<'color'>
  textSize?: FontSizeTokens
}

export function BulletPoint({
  text,
  iconSize = 24,
  iconColor = '$green10',
  textSize = '$5',
}: BulletPointProps) {
  return (
    <XStack space="$4" ai="center">
      <Check size={iconSize} color={iconColor} />
      <Paragraph size={textSize}>{text}</Paragraph>
    </XStack>
  )
}
