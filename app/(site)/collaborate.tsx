import { useTint } from '@tamagui/logo'
import { useMemo } from 'react'
import { YStack, type ThemeName } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { HeadInfo } from '~/components/HeadInfo'
import { Hero } from '~/components/molecules/Hero'
import { CollaborateFAQ } from '~/components/organisms/CollaborateFAQ'
import { CollaborationWays } from '~/components/organisms/CollaborationWays'
import { ContactSection } from '~/components/organisms/ContactSection'
import { CurrentProjects } from '~/components/organisms/CurrentProjects'
import { MexicoRoadmap } from '~/components/organisms/MexicoRoadmap'
import { PriorityRoles } from '~/components/organisms/PriorityRoles'
import { VisionSection } from '~/components/organisms/VisionSection'
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
      <Hero
        imageUrl="/images/natural-building.jpg"
        title="Join Our Mission"
        subtitle="Help us build regenerative communities and create positive change in the world"
        buttons={[
          {
            text: 'View Opportunities',
            theme: 'active',
            onPress: () => (window.location.href = '#opportunities'),
          },
        ]}
      />

      {/* Vision Section */}
      <TintSection index={1}>
        <ContainerLarge space="$4">
          <VisionSection
            title="Our Vision for Collaboration"
            subtitle="We're building a network of regenerative communities through collective effort and shared vision"
            points={[
              'Create self-sustaining communities that harmonize with nature',
              'Foster innovation in regenerative technologies and practices',
              'Build a global network of like-minded individuals and communities',
              'Share knowledge and resources to accelerate positive change',
              'Develop replicable models for sustainable living',
            ]}
          />
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
          <ContactSection
            title="Get in Touch"
            subtitle="Have questions or want to discuss collaboration opportunities? Reach out to us through our social channels or send us a message."
            buttons={[
              {
                text: 'Send Message',
                theme: 'blue',
                onPress: () => (window.location.href = '/contact'),
              },
            ]}
          />
        </ContainerLarge>
      </TintSection>
    </CommunityLayout>
  )
}
