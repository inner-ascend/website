import { MembershipCardProps } from '../atoms/MembershipCard'
import { MembershipGrid } from '../molecules/MembershipGrid'

const membershipTiers: MembershipCardProps[] = [
  {
    name: 'Founding Member',
    price: '5 ETH',
    benefits: [
      'Private villa allocation',
      'Full voting rights',
      'Revenue sharing',
      'Priority access to facilities',
      'Founding member NFT',
    ],
    theme: 'green',
    buttonText: 'Join Waitlist',
  },
  {
    name: 'Core Member',
    price: '2 ETH',
    benefits: [
      'Shared living space',
      'Partial voting rights',
      'Community participation',
      'Access to all facilities',
      'Core member NFT',
    ],
    theme: 'purple',
    buttonText: 'Reserve Spot',
  },
  {
    name: 'Community Member',
    price: '0.5 ETH',
    benefits: [
      'Access to common areas',
      'Community events',
      'Seasonal stays',
      'Basic amenities',
      'Community NFT',
    ],
    theme: 'blue',
    buttonText: 'Join Community',
  },
]

export function MexicoMembership() {
  return <MembershipGrid tiers={membershipTiers} />
}
