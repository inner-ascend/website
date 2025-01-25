import { useTint } from '@tamagui/logo'
import { Check } from '@tamagui/lucide-icons'
import { useMemo } from 'react'
import { Button, H1, Paragraph, Spacer, XStack, YStack, type ThemeName } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { HeadInfo } from '~/components/HeadInfo'
import { CollaborateFAQ } from '~/components/organisms/CollaborateFAQ'
import { CollaborationWays } from '~/components/organisms/CollaborationWays'
import { CurrentProjects } from '~/components/organisms/CurrentProjects'
import { MexicoRoadmap } from '~/components/organisms/MexicoRoadmap'
import { PriorityRoles } from '~/components/organisms/PriorityRoles'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { SocialLinksRow } from '~/features/site/home/SocialLinksRow'
import { HomeSection, TintSection } from '~/features/site/home/TintSection'
import { ThemeNameEffect } from '~/features/site/theme/ThemeNameEffect'

interface CollaborationCard {
  title: string
  description: string
  benefits: string[]
  link: string
  image: string
  theme: ThemeName
  buttonText: string
}

interface FAQItem {
  question: string
  answer: string
}

function CommunityLayout({ children }: { children: React.ReactNode }) {
  const { tint } = useTint()
  return <YStack theme={tint as any}>{useMemo(() => children, [children])}</YStack>
}

export default function Collaborate() {
  return (
    <CommunityLayout>
      <ThemeNameEffect />
      <HeadInfo
        title="Collaborate | Inner Ascend"
        description="Join forces with Inner Ascend - Ways to contribute and support our regenerative living projects"
      />

      {/* Hero Section */}
      <YStack pos="relative" height={500} $sm={{ height: 400 }}>
        <YStack
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          style={{
            backgroundImage: 'url(/images/natural-building.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <YStack
          fullscreen
          zi={1}
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)',
          }}
        />
        <YStack zi={2} py="$12" space="$6" ai="center" jc="center" f={1}>
          <H1 size="$10" ta="center" color="$color12">
            Join Our Mission
          </H1>
          <Paragraph size="$6" ta="center" col="$color12" maw={600} px="$4">
            Help us build regenerative communities and create positive change in the world
          </Paragraph>
          <XStack space="$4" mt="$4">
            <Button
              size="$6"
              fontWeight="800"
              theme="active"
              onPress={() => (window.location.href = '#opportunities')}
            >
              View Opportunities
            </Button>
          </XStack>
        </YStack>
      </YStack>

      {/* Vision Section */}
      <TintSection index={1}>
        <ContainerLarge space="$4">
          <YStack space="$6" ai="center" maw={800} mx="auto" py="$8">
            <HomeH2 ta="center">Our Vision for Collaboration</HomeH2>
            <HomeH3 ta="center" theme="alt2">
              We're building a network of regenerative communities through collective effort and
              shared vision
            </HomeH3>
            <YStack space="$4" mt="$4">
              {visionPoints.map((point, i) => (
                <XStack key={i} space="$4" ai="center">
                  <Check size={24} color="var(--green10)" />
                  <Paragraph size="$5">{point}</Paragraph>
                </XStack>
              ))}
            </YStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Collaboration Opportunities */}
      <HomeSection id="opportunities">
        <ContainerLarge space="$4">
          <CollaborationWays />
        </ContainerLarge>
      </HomeSection>

      {/* Current Projects Section */}
      <TintSection index={2}>
        <ContainerLarge>
          <CurrentProjects />
        </ContainerLarge>
      </TintSection>

      {/* Collaboration Journey */}
      <TintSection index={3}>
        <ContainerLarge position="relative">
          <MexicoRoadmap />
        </ContainerLarge>
      </TintSection>

      {/* Priority Roles Section */}
      <TintSection index={2}>
        <ContainerLarge>
          <PriorityRoles />
        </ContainerLarge>
      </TintSection>

      {/* FAQ Section */}
      <TintSection index={4}>
        <ContainerLarge>
          <CollaborateFAQ />
        </ContainerLarge>
      </TintSection>

      {/* Contact Section */}
      <TintSection index={2}>
        <ContainerLarge space="$4">
          <YStack space="$4" ai="center">
            <HomeH2 ta="center">Get in Touch</HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={600}>
              Have questions or want to discuss collaboration opportunities? Reach out to us through
              our social channels or send us a message.
            </HomeH3>
            <Spacer size="$2" />
          </YStack>
        </ContainerLarge>
        <SocialLinksRow />
      </TintSection>
    </CommunityLayout>
  )
}

const visionPoints = [
  'Create self-sustaining communities that harmonize with nature',
  'Foster innovation in regenerative technologies and practices',
  'Build a global network of like-minded individuals and communities',
  'Share knowledge and resources to accelerate positive change',
  'Develop replicable models for sustainable living',
]
