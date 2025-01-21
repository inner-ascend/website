import { ThemeTint } from '@tamagui/logo'
import { memo, useState } from 'react'
import { Button, Card, GetThemeValueForKey, Paragraph, Text, XGroup, XStack, YStack } from 'tamagui'
import { ContainerLarge } from '../../../components/Containers'
import { HomeH2, HomeH3 } from './HomeHeaders'

type CardContent = {
  title: string
  description: string
  highlights: string[]
}

type InfoCardProps = {
  content: CardContent
  width?: number | GetThemeValueForKey<'width'>
}

const InfoCard = memo(({ content, width = '48%' as any }: InfoCardProps) => (
  <Card bw={1} bc="$borderColor" br="$6" elevation="$6" shadowRadius={60} width={width} $sm={{ width: '100%' }}>
    <YStack jc="center" p="$6" space="$4">
      <Paragraph size="$8" fow="400" ls={-1} fontFamily="$silkscreen">
        {content.title}
      </Paragraph>
      <Paragraph size="$5" theme="alt2" fow="400">
        {content.description}
      </Paragraph>
      <YStack space="$2">
        {content.highlights.map((highlight, i) => (
          <Paragraph key={i} size="$4" theme="alt2">
            • {highlight}
          </Paragraph>
        ))}
      </YStack>
    </YStack>
  </Card>
))

type CommunityShowcaseProps = {
  examples?: any // TODO: Add proper type
}

const subtitles = [
  'join thriving ecovillages and sustainable communities',
  'participate in decentralized land ownership through DAOs',
  'contribute to ecological restoration and regeneration',
  'build meaningful connections in conscious communities',
]

const showcaseItems = [
  {
    name: 'Ecovillages',
    content: {
      leftCard: {
        title: 'Community Living',
        description: 'Experience shared resources, permaculture gardens, and collective decision-making in harmonious eco-conscious communities.',
        highlights: [
          'Shared Community Spaces',
          'Renewable Energy Systems',
          'Local Food Production'
        ]
      },
      rightCard: {
        title: 'Natural Building',
        description: 'Learn and practice sustainable building techniques using natural and locally sourced materials.',
        highlights: [
          'Natural Building Methods',
          'Traditional Techniques',
          'Eco-friendly Materials'
        ]
      }
    }
  },
  {
    name: 'Land DAO',
    content: {
      leftCard: {
        title: 'Governance',
        description: 'Vote on land use decisions and contribute to community development through transparent blockchain governance.',
        highlights: [
          'Democratic Decision Making',
          'Transparent Voting',
          'Community Proposals'
        ]
      },
      rightCard: {
        title: 'Resource Sharing',
        description: 'Access shared resources and contribute to the collective growth of the community.',
        highlights: [
          'Shared Equipment',
          'Knowledge Exchange',
          'Collective Investments'
        ]
      }
    }
  },
  {
    name: 'Regeneration',
    content: {
      leftCard: {
        title: 'Land Restoration',
        description: 'Participate in reforestation and soil regeneration projects that heal the Earth.',
        highlights: [
          'Forest Conservation',
          'Soil Regeneration',
          'Native Species'
        ]
      },
      rightCard: {
        title: 'Water Systems',
        description: 'Implement sustainable water management practices and protect water resources.',
        highlights: [
          'Water Conservation',
          'Rain Harvesting',
          'Natural Filtration'
        ]
      }
    }
  },
  {
    name: 'Community',
    content: {
      leftCard: {
        title: 'Skill Sharing',
        description: 'Exchange knowledge and learn from community members in a collaborative environment.',
        highlights: [
          'Workshops',
          'Mentorship',
          'Traditional Skills'
        ]
      },
      rightCard: {
        title: 'Cultural Exchange',
        description: 'Celebrate diversity and create lasting bonds through shared experiences and events.',
        highlights: [
          'Cultural Events',
          'Art & Music',
          'Celebrations'
        ]
      }
    }
  }
]

export const CommunityShowcase = memo(({ examples }: CommunityShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = showcaseItems[activeIndex]

  return (
    <ContainerLarge position="relative">
      <YStack zi={1} space="$6" mb="$4">
        <YStack ai="center" space="$3">
          <HomeH2 maw={850} size="$10" ls={-0.5} $gtSm={{ size: "$11", maw: 950 }}>
            Building Regenerative{' '}
            Communities Together
          </HomeH2>
          <HomeH3 ai="center" jc="center" maw={650} $gtSm={{ maw: 750 }}>
            Our platform enables you to<br />
            <Text fontWeight="bold">{subtitles[activeIndex]}</Text>
          </HomeH3>
        </YStack>

        <ThemeTint>
          <YStack
            $gtSm={{ display: 'none' }}
            flexDirection="row"
            flexWrap="wrap"
            jc="center"
            bg="$color2"
            als="center"
            br="$5"
          >
            {showcaseItems.map((item, i) => (
              <Button
                key={i}
                accessibilityLabel={`See ${item.name}`}
                onPress={() => setActiveIndex(i)}
                theme={i === activeIndex ? 'active' : null}
                chromeless={i !== activeIndex}
                size="$3"
                fontFamily="$silkscreen"
                width="50%"
                br="$5"
              >
                {item.name}
              </Button>
            ))}
          </YStack>

          <XGroup
            scrollable
            bordered
            bg="$color2"
            maxWidth="100%"
            als="center"
            ov="hidden"
            $sm={{ display: 'none' }}
          >
            {showcaseItems.map((item, i) => (
              <XGroup.Item key={i}>
                <Button
                  accessibilityLabel={`See ${item.name}`}
                  onPress={() => setActiveIndex(i)}
                  theme={i === activeIndex ? 'active' : null}
                  chromeless={i !== activeIndex}
                  borderRadius={0}
                  size="$3"
                  fontFamily="$silkscreen"
                >
                  {item.name}
                </Button>
              </XGroup.Item>
            ))}
          </XGroup>
        </ThemeTint>

        <ThemeTint>
          <XStack
            pos="relative"
            jc="center"
            gap="$4"
            $sm={{ fd: 'column' }}
            width="100%"
          >
            <InfoCard content={activeItem.content.leftCard} />
            <InfoCard content={activeItem.content.rightCard} />
          </XStack>
        </ThemeTint>
      </YStack>
    </ContainerLarge>
  )
})
