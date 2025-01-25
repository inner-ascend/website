import { YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { Stat, StatsGrid } from '../molecules/StatsGrid'

const stats: Stat[] = [
  {
    value: '1200m',
    label: 'Elevation in Mountain Jungle',
    color: '$green10',
  },
  {
    value: '80%',
    label: 'Self-Sufficiency Goal',
    color: '$blue10',
  },
  {
    value: '100+',
    label: 'Native Plant Species',
    color: '$yellow10',
  },
  {
    value: '365',
    label: 'Growing Days Per Year',
    color: '$purple10',
  },
  {
    value: '4+',
    label: 'Water Springs',
    color: '$orange10',
  },
  {
    value: '30+',
    label: 'Local Partnerships',
    color: '$pink10',
  },
  {
    value: '250+',
    label: 'Interested Members',
    color: '$red10',
  },
  {
    value: '1hr',
    label: 'To Beach & Airport',
    color: '$blue10',
  },
] as const

export interface MexicoImpactProps {
  useCards?: boolean
}

export function MexicoImpact({ useCards = true }: MexicoImpactProps) {
  return (
    <YStack space="$6" mb="$8">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Community Impact
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          Building a regenerative community that benefits both people and planet
        </HomeH3>
      </YStack>

      <StatsGrid stats={stats} useCards={useCards} />
    </YStack>
  )
}
