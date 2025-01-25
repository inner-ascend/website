import type { ThemeName } from 'tamagui'
import { Button, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'

interface ContactButton {
  text: string
  theme: ThemeName
  onPress: () => void
}

interface ContactContentProps {
  title: string
  subtitle: string
  buttons?: ContactButton[]
  maxWidth?: number
}

export function ContactContent({
  title,
  subtitle,
  buttons = [],
  maxWidth = 600,
}: ContactContentProps) {
  return (
    <YStack space="$4" ai="center">
      <HomeH2 ta="center">{title}</HomeH2>
      <HomeH3 ta="center" theme="alt2" maw={maxWidth}>
        {subtitle}
      </HomeH3>
      {buttons.length > 0 && (
        <XStack space="$4" mt="$6" flexWrap="wrap" jc="center">
          {buttons.map((button, index) => (
            <Button key={index} size="$6" theme={button.theme} onPress={button.onPress}>
              {button.text}
            </Button>
          ))}
        </XStack>
      )}
    </YStack>
  )
}
