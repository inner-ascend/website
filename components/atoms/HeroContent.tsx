import {
  Button,
  H1,
  Paragraph,
  XStack,
  YStack,
  type FontSizeTokens,
  type GetThemeValueForKey,
  type ThemeName,
} from 'tamagui'

interface HeroButton {
  text: string
  theme: ThemeName
  onPress: () => void
}

interface HeroContentProps {
  title: string
  subtitle: string
  buttons?: HeroButton[]
  titleSize?: FontSizeTokens
  subtitleSize?: FontSizeTokens
  color?: GetThemeValueForKey<'color'>
  maxWidth?: number
}

export function HeroContent({
  title,
  subtitle,
  buttons = [],
  titleSize = '$10',
  subtitleSize = '$6',
  color = '$color12',
  maxWidth = 600,
}: HeroContentProps) {
  return (
    <YStack zi={2} py="$12" space="$6" ai="center" jc="center" f={1}>
      <H1 size={titleSize} ta="center" color={color}>
        {title}
      </H1>
      <Paragraph size={subtitleSize} ta="center" col={color} maw={maxWidth} px="$4">
        {subtitle}
      </Paragraph>
      {buttons.length > 0 && (
        <XStack space="$4" mt="$4">
          {buttons.map((button, index) => (
            <Button
              key={index}
              size="$6"
              fontWeight="800"
              theme={button.theme}
              onPress={button.onPress}
            >
              {button.text}
            </Button>
          ))}
        </XStack>
      )}
    </YStack>
  )
}
