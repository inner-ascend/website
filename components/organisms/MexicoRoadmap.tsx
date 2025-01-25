import { YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { RoadmapGrid } from '../molecules/RoadmapGrid'

const roadmapPhases = [
  {
    date: 'Sep-Dec 2025',
    title: 'Foundation',
    items: [
      'Property purchase finalized',
      'Initial permits secured',
      'Community NFT launch',
      'Core team established',
    ],
  },
  {
    date: 'Jan-Apr 2026',
    title: 'Land Development',
    items: [
      'Land assessment complete',
      'Architectural plans approved',
      'Infrastructure planning',
      'Sustainability framework',
    ],
  },
  {
    date: 'May-Dec 2026',
    title: 'Infrastructure',
    items: [
      'Solar installation begins',
      'Water systems setup',
      'Initial housing construction',
      'Permaculture zones marked',
    ],
  },
  {
    date: 'Jan 2027+',
    title: 'Community Launch',
    items: [
      'First residents move in',
      'Farm operations begin',
      'Community spaces open',
      'Education programs start',
    ],
  },
]

export function MexicoRoadmap() {
  return (
    <YStack zi={1} space="$6" mb="$4">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Project Roadmap
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          Strategic milestones for developing our sustainable community
        </HomeH3>
      </YStack>

      <RoadmapGrid phases={roadmapPhases} />
    </YStack>
  )
}
