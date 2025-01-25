import { ArrowRight } from '@tamagui/lucide-icons'
import { Button, Card, H2, Paragraph, Separator, XStack, YStack } from 'tamagui'

interface ProjectInfoCardProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  theme: 'blue' | 'purple' | 'green'
}

export function ProjectInfoCard({
  title,
  description,
  buttonText,
  buttonLink,
  theme,
}: ProjectInfoCardProps) {
  return (
    <Card bordered theme={theme} elevation="$2" p="$4" br="$4" f={1} miw={250} maw={300}>
      <YStack space="$2">
        <H2 size="$6">{title}</H2>
        <Separator />
        <Paragraph size="$4" theme="alt2">
          {description}
        </Paragraph>
        <XStack space="$2" ai="center" mt="$2">
          <ArrowRight size={16} />
          <Button theme={theme} size="$3" onPress={() => (window.location.href = buttonLink)}>
            {buttonText}
          </Button>
        </XStack>
      </YStack>
    </Card>
  )
}
