import { ArrowRight } from '@tamagui/lucide-icons'
import { Button, Card, H2, Paragraph, Separator, ThemeName, XStack, YStack } from 'tamagui'

export interface ProjectLinkCardProps {
  title: string
  description: string
  buttonText: string
  href: string
  theme?: ThemeName
}

export function ProjectLinkCard({
  title,
  description,
  buttonText,
  href,
  theme = 'blue',
}: ProjectLinkCardProps) {
  return (
    <Card
      bordered
      theme={theme}
      elevation="$2"
      p="$4"
      br="$4"
      f={1}
      miw={250}
      maw={300}
      animation="medium"
      pressStyle={{ scale: 0.98 }}
      hoverStyle={{ scale: 1.01, borderColor: '$borderColorHover' }}
    >
      <YStack space="$2">
        <H2 size="$6">{title}</H2>
        <Separator />
        <Paragraph size="$4" theme="alt2">
          {description}
        </Paragraph>
        <XStack space="$2" ai="center" mt="$2">
          <ArrowRight size={16} />
          <Button theme={theme} size="$3" onPress={() => (window.location.href = href)}>
            {buttonText}
          </Button>
        </XStack>
      </YStack>
    </Card>
  )
}
