import { useTint } from '@tamagui/logo'
import { Building2, ClipboardList, Shield, Sprout, Users, Vote, Zap } from '@tamagui/lucide-icons'
import { useMemo } from 'react'
import { Button, Card, H1, H3, Paragraph, Separator, Spacer, XStack, YStack } from 'tamagui'

import { ContainerLarge } from '~/components/Containers'
import { HeadInfo } from '~/components/HeadInfo'
import { Link } from '~/components/Link'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { SocialLinksRow } from '~/features/site/home/SocialLinksRow'
import { TintSection } from '~/features/site/home/TintSection'
import { ThemeNameEffect } from '~/features/site/theme/ThemeNameEffect'

function CommunityLayout({ children }: { children: React.ReactNode }) {
  const { tint } = useTint()
  return <YStack theme={tint as any}>{useMemo(() => children, [children])}</YStack>
}

const visionFeatures = [
  {
    name: 'Regenerative Living',
    description: 'Creating self-sustaining communities that heal the Earth',
    features: ['Ecological restoration', 'Zero-waste systems', 'Sustainable practices'],
    icon: Sprout,
    theme: 'green',
  },
  {
    name: 'Conscious Community',
    description: 'Building relationships based on shared values and purpose',
    features: ['Cultural integration', 'Skill sharing', 'Collective growth'],
    icon: Users,
    theme: 'blue',
  },
  {
    name: 'Economic Innovation',
    description: 'Pioneering new models of value creation and exchange',
    features: ['Token economy', 'Resource sharing', 'Sustainable commerce'],
    icon: Building2,
    theme: 'yellow',
  },
]

const governanceFeatures = [
  {
    name: 'Participatory Governance',
    description: 'Shape the future through direct involvement in decision-making',
    features: ['Proposal creation', 'Democratic voting', 'Policy shaping'],
    icon: Vote,
    theme: 'yellow',
  },
  {
    name: 'Domain Leadership',
    description: 'Take ownership of specific areas of community development',
    features: ['Specialized teams', 'Resource allocation', 'Project management'],
    icon: Shield,
    theme: 'blue',
  },
  {
    name: 'Knowledge Commons',
    description: 'Contribute to and benefit from shared wisdom and experience',
    features: ['Documentation', 'Best practices', 'Training programs'],
    icon: Users,
    theme: 'green',
  },
]

const resourceFeatures = [
  {
    name: 'Living Laboratory',
    description: 'Experiment with and develop sustainable living solutions',
    features: ['Research projects', 'Innovation spaces', 'Pilot programs'],
    icon: Building2,
    theme: 'green',
  },
  {
    name: 'Regenerative Systems',
    description: 'Integrated infrastructure supporting life and growth',
    features: ['Food forests', 'Water systems', 'Energy solutions'],
    icon: Zap,
    theme: 'yellow',
  },
  {
    name: 'Community Spaces',
    description: 'Shared environments fostering connection and creativity',
    features: ['Co-working areas', 'Event venues', 'Meditation spaces'],
    icon: Sprout,
    theme: 'blue',
  },
]

const pathwaysFeatures = [
  {
    name: 'Personal Growth',
    description: 'Develop skills and expand consciousness through structured programs',
    features: ['Mentorship', 'Skill development', 'Leadership training'],
    icon: Building2,
    theme: 'blue',
  },
  {
    name: 'Project Incubation',
    description: 'Launch initiatives that benefit the community and beyond',
    features: ['Resource support', 'Expert guidance', 'Implementation tools'],
    icon: Users,
    theme: 'yellow',
  },
  {
    name: 'Global Impact',
    description: 'Connect with and influence the wider regenerative movement',
    features: ['Network building', 'Knowledge sharing', 'Collaborative projects'],
    icon: ClipboardList,
    theme: 'green',
  },
]

function FeatureCard({ item }) {
  const Icon = item.icon
  return (
    <Card bordered theme={item.theme} elevation="$2" p="$4" br="$4" f={1} space>
      <YStack space="$2">
        <XStack space="$2" ai="center">
          <Icon size={24} />
          <H3 size="$6">{item.name}</H3>
        </XStack>
        <Separator />
        <Paragraph size="$4" theme="alt2">
          {item.description}
        </Paragraph>
        <YStack space="$2">
          {item.features.map((feature, i) => (
            <XStack key={i} space="$2" ai="center">
              <Paragraph size="$3" theme="alt2">
                • {feature}
              </Paragraph>
            </XStack>
          ))}
        </YStack>
      </YStack>
    </Card>
  )
}

export default function Community() {
  return (
    <CommunityLayout>
      <ThemeNameEffect />
      <HeadInfo title="Community" />

      {/* Hero Section */}
      <TintSection index={1}>
        <ContainerLarge space="$4">
          <YStack space="$6" maw={800} als="center">
            <H1 size="$10" ta="center" $sm={{ size: '$9' }}>
              A New Way of Living
            </H1>
            <HomeH3 ta="center" theme="alt2">
              Join a pioneering community creating regenerative solutions for humanity's evolution
            </HomeH3>
            <XStack space="$4" ai="center" jc="center">
              <Link href="/collaborate">
                <Button size="$5" theme="blue" iconAfter={Building2}>
                  Get Involved
                </Button>
              </Link>
              <Link href="/mexico">
                <Button size="$5" theme="green" iconAfter={Sprout}>
                  Visit Mexico Hub
                </Button>
              </Link>
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Vision Section */}
      <TintSection index={2}>
        <ContainerLarge>
          <YStack space="$6">
            <YStack space="$4" maw={700} als="center">
              <HomeH2 ta="center">Our Vision</HomeH2>
              <HomeH3 ta="center" theme="alt2">
                Creating regenerative communities that nurture life in all its forms
              </HomeH3>
            </YStack>
            <XStack flexWrap="wrap" space="$4" jc="center">
              {visionFeatures.map((feature, i) => (
                <YStack key={i} w="$20" $sm={{ w: '100%' }}>
                  <FeatureCard item={feature} />
                </YStack>
              ))}
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Governance Section */}
      <TintSection index={3}>
        <ContainerLarge>
          <YStack space="$6">
            <YStack space="$4" maw={700} als="center">
              <HomeH2 ta="center">Participatory Governance</HomeH2>
              <HomeH3 ta="center" theme="alt2">
                Shape the future through direct involvement in community development
              </HomeH3>
            </YStack>
            <XStack flexWrap="wrap" space="$4" jc="center">
              {governanceFeatures.map((feature, i) => (
                <YStack key={i} w="$20" $sm={{ w: '100%' }}>
                  <FeatureCard item={feature} />
                </YStack>
              ))}
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Resources Section */}
      <TintSection index={4}>
        <ContainerLarge>
          <YStack space="$6">
            <YStack space="$4" maw={700} als="center">
              <HomeH2 ta="center">Living Laboratory</HomeH2>
              <HomeH3 ta="center" theme="alt2">
                Experiment with and develop solutions for regenerative living
              </HomeH3>
            </YStack>
            <XStack flexWrap="wrap" space="$4" jc="center">
              {resourceFeatures.map((feature, i) => (
                <YStack key={i} w="$20" $sm={{ w: '100%' }}>
                  <FeatureCard item={feature} />
                </YStack>
              ))}
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Pathways Section */}
      <TintSection index={5}>
        <ContainerLarge>
          <YStack space="$6">
            <YStack space="$4" maw={700} als="center">
              <HomeH2 ta="center">Growth Pathways</HomeH2>
              <HomeH3 ta="center" theme="alt2">
                Develop your potential while contributing to collective evolution
              </HomeH3>
            </YStack>
            <XStack flexWrap="wrap" space="$4" jc="center">
              {pathwaysFeatures.map((feature, i) => (
                <YStack key={i} w="$20" $sm={{ w: '100%' }}>
                  <FeatureCard item={feature} />
                </YStack>
              ))}
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Call to Action */}
      <TintSection index={6}>
        <ContainerLarge>
          <YStack space="$6" ai="center">
            <YStack space="$4" maw={700} als="center">
              <HomeH2 ta="center">Begin Your Journey</HomeH2>
              <HomeH3 ta="center" theme="alt2">
                Join us in creating a regenerative future for all
              </HomeH3>
            </YStack>
            <XStack space="$4" ai="center">
              <Link href="/collaborate">
                <Button size="$5" theme="blue">
                  Explore Opportunities
                </Button>
              </Link>
              <Link href="/mexico">
                <Button size="$5" theme="green">
                  Visit First Hub
                </Button>
              </Link>
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      <Spacer size="$4" />
      <SocialLinksRow />
      <Spacer size="$4" />
    </CommunityLayout>
  )
}
