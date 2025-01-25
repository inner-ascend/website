import { Check } from '@tamagui/lucide-icons'
import { Button, H3, Paragraph, Separator, Spacer, XStack, YStack, type ThemeName } from 'tamagui'

export interface MembershipCardProps {
  name: string
  price: string
  benefits: string[]
  theme: ThemeName
  buttonText: string
}

export function MembershipCard({ name, price, benefits, theme, buttonText }: MembershipCardProps) {
  return (
    <YStack
      f={1}
      miw={300}
      maxWidth={350}
      p="$6"
      br="$4"
      space="$4"
      borderWidth={2}
      borderColor="$borderColor"
      theme={theme}
      pressStyle={{
        scale: 0.98,
        bc: '$color1',
      }}
      animation="medium"
      hoverStyle={{
        elevation: '$8',
        borderColor: '$color8',
      }}
      $sm={{
        miw: 'auto',
        w: '100%',
        p: '$4',
      }}
    >
      <YStack space="$2">
        <H3 size="$6">{name}</H3>
        <Paragraph theme="alt2" size="$8" fontWeight="800">
          {price}
        </Paragraph>
      </YStack>
      <Separator />
      <YStack space="$3">
        {benefits.map((benefit) => (
          <XStack key={benefit} ai="center" space="$3">
            <Check size={16} color="var(--color)" />
            <Paragraph size="$3">{benefit}</Paragraph>
          </XStack>
        ))}
      </YStack>
      <Spacer size="$1" />
      <Button
        size="$4"
        theme={theme}
        fontFamily="$silkscreen"
        pressStyle={{
          scale: 0.97,
        }}
        animation="quick"
        hoverStyle={{
          opacity: 0.9,
          scale: 1.02,
        }}
      >
        {buttonText}
      </Button>
    </YStack>
  )
}
