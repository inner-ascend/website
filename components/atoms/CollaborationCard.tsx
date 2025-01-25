import { Check } from '@tamagui/lucide-icons'
import {
  Button,
  Card,
  H2,
  Image,
  Paragraph,
  Separator,
  Spacer,
  XStack,
  YStack,
  type ThemeName,
} from 'tamagui'

export interface CollaborationCardProps {
  title: string
  description: string
  benefits: string[]
  link: string
  image: string
  theme: ThemeName
  buttonText: string
}

export function CollaborationCard({
  title,
  description,
  benefits,
  link,
  image,
  theme = 'blue',
  buttonText,
}: CollaborationCardProps) {
  return (
    <Card
      elevate
      size="$4"
      bordered
      theme={theme}
      ov="hidden"
      f={1}
      pressStyle={{
        scale: 0.98,
        bc: '$color1',
      }}
      animation="medium"
      hoverStyle={{
        elevation: '$8',
        borderColor: '$color8',
        scale: 1.01,
      }}
    >
      <YStack f={1} space="$4">
        <Card.Header padded>
          <YStack space="$4">
            <YStack height={160} br="$4" ov="hidden">
              <Image
                source={{ uri: image }}
                alt={title}
                width="100%"
                height="100%"
                resizeMode="cover"
              />
            </YStack>
            <H2 size="$6">{title}</H2>
            <Separator />
          </YStack>
        </Card.Header>

        <Card.Footer padded f={1}>
          <YStack f={1} space="$4">
            <Paragraph size="$4" theme="alt2">
              {description}
            </Paragraph>
            <YStack space="$2">
              {benefits.map((benefit, i) => (
                <XStack key={i} space="$2" ai="center">
                  <Check size={16} color={`var(--${theme}10)`} />
                  <Paragraph size="$3" theme="alt2">
                    {benefit}
                  </Paragraph>
                </XStack>
              ))}
            </YStack>
            <Spacer flex={1} />
            <Button
              size="$5"
              theme={theme}
              width="100%"
              fontFamily="$silkscreen"
              pressStyle={{
                scale: 0.97,
              }}
              animation="quick"
              hoverStyle={{
                opacity: 0.9,
                scale: 1.02,
              }}
              onPress={() => (window.location.href = link)}
            >
              {buttonText}
            </Button>
          </YStack>
        </Card.Footer>
      </YStack>
    </Card>
  )
}
