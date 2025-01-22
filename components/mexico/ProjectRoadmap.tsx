import { Card, H3, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'

const roadmapPhases = [
  {
    date: 'Sep-Dec 2025',
    title: 'Foundation',
    items: [
      'Property purchase finalized',
      'Initial permits secured',
      'Community NFT launch',
      'Core team established'
    ]
  },
  {
    date: 'Jan-Apr 2026',
    title: 'Land Development',
    items: [
      'Land assessment complete',
      'Architectural plans approved',
      'Infrastructure planning',
      'Sustainability framework'
    ]
  },
  {
    date: 'May-Dec 2026',
    title: 'Infrastructure',
    items: [
      'Solar installation begins',
      'Water systems setup',
      'Initial housing construction',
      'Permaculture zones marked'
    ]
  },
  {
    date: 'Jan 2027+',
    title: 'Community Launch',
    items: [
      'First residents move in',
      'Farm operations begin',
      'Community spaces open',
      'Education programs start'
    ]
  }
]

export function ProjectRoadmap() {
  return (
    <YStack zi={1} space="$6" mb="$4">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: "$8" }}>Project Roadmap</HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
          Strategic milestones for developing our sustainable community
        </HomeH3>
      </YStack>
      <XStack
        pos="relative"
        jc="center"
        flexWrap="wrap"
        gap="$4"
        width="100%"
      >
        {roadmapPhases.map((phase, i) => (
          <Card 
            key={i}
            bw={1}
            bc="$borderColor"
            br="$6"
            elevation="$6"
            shadowRadius={60}
            width="23%"
            pressStyle={{
              scale: 0.98,
              bc: "$color1",
            }}
            animation="medium"
            hoverStyle={{
              elevation: "$8",
              borderColor: "$color8",
              scale: 1.02
            }}
            $gtSm={{ minWidth: 220 }}
            $sm={{ width: '100%' }}
          >
            <YStack jc="center" p="$4" space="$2">
              <H3 size="$4" theme="alt2">{phase.date}</H3>
              <H3 size="$5">{phase.title}</H3>
              <YStack space="$1">
                {phase.items.map((item, j) => (
                  <Paragraph key={j} size="$3" theme="alt2">
                    • {item}
                  </Paragraph>
                ))}
              </YStack>
            </YStack>
          </Card>
        ))}
      </XStack>
    </YStack>
  )
} 