import { Check } from '@tamagui/lucide-icons'
import { Button, H3, Paragraph, Separator, XStack, YStack } from 'tamagui'

interface MembershipTier {
  name: string
  price: string
  benefits: string[]
  theme: string
  buttonText: string
}

const membershipTiers: MembershipTier[] = [
  {
    name: 'Founding Member',
    price: '5 ETH',
    benefits: [
      'Private villa allocation',
      'Full voting rights',
      'Revenue sharing',
      'Priority access to facilities',
      'Founding member NFT'
    ],
    theme: 'green',
    buttonText: 'Join Waitlist'
  },
  {
    name: 'Core Member',
    price: '2 ETH',
    benefits: [
      'Shared living space',
      'Partial voting rights',
      'Community participation',
      'Access to all facilities',
      'Core member NFT'
    ],
    theme: 'purple',
    buttonText: 'Reserve Spot'
  },
  {
    name: 'Community Member',
    price: '0.5 ETH',
    benefits: [
      'Access to common areas',
      'Community events',
      'Seasonal stays',
      'Basic amenities',
      'Community NFT'
    ],
    theme: 'blue',
    buttonText: 'Join Community'
  }
]

export function MembershipTiers() {
  return (
    <XStack flexWrap="wrap" gap="$4" jc="center" $sm={{ gap: "$3" }}>
      {membershipTiers.map((tier, index) => (
        <YStack
          key={index}
          f={1}
          miw={300}
          maxWidth={350}
          p="$6"
          br="$4"
          space="$4"
          borderWidth={2}
          borderColor="$borderColor"
          theme={tier.theme}
          pressStyle={{
            scale: 0.98,
            bc: "$color1",
          }}
          animation="medium"
          hoverStyle={{
            elevation: "$8",
            borderColor: "$color8"
          }}
          $sm={{ 
            miw: "auto",
            w: "100%",
            p: "$4"
          }}
        >
          <YStack space="$2">
            <H3 size="$6">{tier.name}</H3>
            <Paragraph theme="alt2" size="$8" fontWeight="800">{tier.price}</Paragraph>
          </YStack>
          <Separator />
          <YStack space="$3">
            {tier.benefits.map(benefit => (
              <XStack key={benefit} ai="center" space="$3">
                <Check size={16} color="var(--color)" />
                <Paragraph size="$3">{benefit}</Paragraph>
              </XStack>
            ))}
          </YStack>
          <Button 
            size="$4" 
            theme={`${tier.theme}_alt2`}
            pressStyle={{
              scale: 0.97,
            }}
            animation="quick"
            hoverStyle={{
              opacity: 0.9,
              scale: 1.02
            }}
          >
            {tier.buttonText}
          </Button>
        </YStack>
      ))}
    </XStack>
  )
} 