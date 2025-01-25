import { XStack } from 'tamagui'
import { MembershipCard, MembershipCardProps } from '../atoms/MembershipCard'

interface MembershipGridProps {
  tiers: MembershipCardProps[]
}

export function MembershipGrid({ tiers }: MembershipGridProps) {
  return (
    <XStack flexWrap="wrap" gap="$4" jc="center" $sm={{ gap: '$3' }}>
      {tiers.map((tier, index) => (
        <MembershipCard
          key={index}
          name={tier.name}
          price={tier.price}
          benefits={tier.benefits}
          theme={tier.theme}
          buttonText={tier.buttonText}
        />
      ))}
    </XStack>
  )
}
