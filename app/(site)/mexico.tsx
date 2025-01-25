import { useTint } from '@tamagui/logo'
import { useMemo } from 'react'
import { Button, H1, Paragraph, Spacer, XStack, YStack } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { HeadInfo } from '~/components/HeadInfo'
import { KeyFeatures } from '~/components/organisms/KeyFeatures'
import { MexicoFAQ } from '~/components/organisms/MexicoFAQ'
import { MexicoGallery } from '~/components/organisms/MexicoGallery'
import { MexicoImpact } from '~/components/organisms/MexicoImpact'
import { MexicoMembership } from '~/components/organisms/MexicoMembership'
import { MexicoNews } from '~/components/organisms/MexicoNews'
import { MexicoProperty } from '~/components/organisms/MexicoProperty'
import { MexicoRoadmap } from '~/components/organisms/MexicoRoadmap'
import { MexicoTeam } from '~/components/organisms/MexicoTeam'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { SocialLinksRow } from '~/features/site/home/SocialLinksRow'
import { HomeSection, TintSection } from '~/features/site/home/TintSection'
import { ThemeNameEffect } from '~/features/site/theme/ThemeNameEffect'

export default function Community() {
  return (
    <CommunityLayout>
      <ThemeNameEffect />
      <HeadInfo
        title="Mexico Project | Inner Ascend"
        description="Join our regenerative living project in Mexico through NFT-based community ownership"
      />

      {/* Hero Section with Background */}
      <YStack pos="relative" height={700} $sm={{ height: 500 }}>
        <YStack
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          style={{
            backgroundImage: 'url(/images/hero/oaxaca-paradise.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <YStack
          fullscreen
          zi={1}
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%), linear-gradient(0deg, rgba(0,100,100,0.15) 0%, rgba(0,0,0,0) 100%)',
          }}
        />
        <YStack zi={2} py="$12" space="$6" ai="center" jc="center" f={1}>
          <ContainerLarge space="$4">
            <H1
              size="$12"
              ta="center"
              className="hero-text"
              color="white"
              fontWeight="900"
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}
              $sm={{ size: '$10' }}
            >
              Regenerative Living in Mexico
            </H1>
            <Paragraph
              size="$8"
              ta="center"
              color="white"
              o={0.9}
              fontWeight="500"
              style={{
                textShadow: '0 1px 8px rgba(0,0,0,0.3)',
              }}
              $sm={{ size: '$6' }}
            >
              Join a visionary community where sustainable living meets tropical paradise
            </Paragraph>
            <XStack
              jc="center"
              mt="$6"
              gap="$4"
              $sm={{
                flexDirection: 'column',
                ai: 'center',
                gap: '$3',
                maxWidth: 200,
                als: 'center',
              }}
            >
              <Button
                size="$5"
                theme="green"
                fontFamily="$silkscreen"
                pressStyle={{
                  scale: 0.97,
                }}
                animation="quick"
                hoverStyle={{
                  opacity: 0.9,
                  scale: 1.02,
                }}
              >
                Join Whitelist
              </Button>
              <Button
                size="$5"
                theme="alt1"
                fontFamily="$silkscreen"
                borderWidth={1}
                pressStyle={{
                  scale: 0.97,
                }}
                animation="quick"
                hoverStyle={{
                  opacity: 0.9,
                  scale: 1.02,
                }}
              >
                Learn More
              </Button>
            </XStack>
          </ContainerLarge>
        </YStack>
      </YStack>

      {/* Key Features */}
      <TintSection index={1} zi={100}>
        <ContainerLarge>
          <KeyFeatures />
        </ContainerLarge>
      </TintSection>

      {/* Location & Climate */}
      <TintSection index={2}>
        <ContainerLarge
          position="relative"
          id="location-climate"
          style={{ scrollMarginTop: '100px' }}
        >
          <MexicoProperty />
        </ContainerLarge>
      </TintSection>

      {/* Gallery Section */}
      <TintSection index={3}>
        <ContainerLarge>
          <YStack space="$6" mb="$8">
            <YStack space="$6" mb="$6">
              <HomeH2 ta="center" $sm={{ size: '$8' }}>
                Gallery
              </HomeH2>
              <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
                Explore our vision through stunning visuals
              </HomeH3>
            </YStack>

            <MexicoGallery />
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* NFT Tiers */}
      <TintSection index={4}>
        <ContainerLarge space="$6" id="membership-tiers" style={{ scrollMarginTop: '100px' }}>
          <YStack space="$6" mb="$6">
            <HomeH2 ta="center" $sm={{ size: '$8' }}>
              Membership Tiers
            </HomeH2>
            <HomeH3 ta="center" theme="alt2" $sm={{ size: '$5' }}>
              Secure your place in our community with blockchain-powered ownership and exclusive
              benefits
            </HomeH3>
          </YStack>
          <MexicoMembership />
        </ContainerLarge>
      </TintSection>

      {/* Timeline */}
      <TintSection index={5}>
        <ContainerLarge
          position="relative"
          id="project-roadmap"
          style={{ scrollMarginTop: '100px' }}
        >
          <MexicoRoadmap />
        </ContainerLarge>
      </TintSection>

      {/* Social Proof */}
      <TintSection index={6}>
        <ContainerLarge>
          <MexicoImpact useCards={false} />
        </ContainerLarge>
      </TintSection>

      {/* News & Updates */}
      <TintSection index={7}>
        <ContainerLarge>
          <YStack space="$6" mb="$8">
            <YStack space="$6" mb="$6">
              <HomeH2 ta="center" $sm={{ size: '$8' }}>
                News & Updates
              </HomeH2>
              <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
                Follow our journey as we build a sustainable paradise
              </HomeH3>
            </YStack>

            <MexicoNews />
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Team Section */}
      <TintSection index={8}>
        <ContainerLarge id="team-section" style={{ scrollMarginTop: '100px' }}>
          <MexicoTeam />
        </ContainerLarge>
      </TintSection>

      {/* FAQ Section */}
      <TintSection index={9}>
        <ContainerLarge>
          <YStack space="$6" mb="$8">
            <YStack space="$6" mb="$6">
              <HomeH2 ta="center" $sm={{ size: '$8' }}>
                Frequently Asked Questions
              </HomeH2>
              <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
                Everything you need to know about joining our community
              </HomeH3>
            </YStack>

            <YStack space="$4" als="center" px="$4">
              <MexicoFAQ />
            </YStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Call to Action */}
      <HomeSection>
        <ContainerLarge space="$8">
          <YStack ai="center" space="$6">
            <HomeH2 ta="center" $sm={{ size: '$8' }}>
              Ready to Join?
            </HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={600} $sm={{ size: '$5' }}>
              Be among the pioneers shaping the future of sustainable living in our mountain jungle
              sanctuary, just an hour from pristine Pacific beaches.
            </HomeH3>
            <XStack
              gap="$4"
              mt="$4"
              $sm={{
                flexDirection: 'column',
                ai: 'center',
                gap: '$3',
                als: 'center',
              }}
            >
              <Button
                size="$5"
                theme="green"
                fontFamily="$silkscreen"
                pressStyle={{
                  scale: 0.97,
                }}
                animation="quick"
                hoverStyle={{
                  opacity: 0.9,
                  scale: 1.02,
                }}
              >
                Join Whitelist
              </Button>
              <Button
                size="$5"
                theme="alt2"
                fontFamily="$silkscreen"
                pressStyle={{
                  scale: 0.97,
                }}
                animation="quick"
                hoverStyle={{
                  opacity: 0.9,
                  scale: 1.02,
                }}
              >
                Schedule a Call
              </Button>
            </XStack>
            <Paragraph size="$3" theme="alt2" ta="center" o={0.8}>
              Limited founding memberships available. Early supporters receive priority access.
            </Paragraph>
          </YStack>
        </ContainerLarge>
      </HomeSection>

      <Spacer />
      <SocialLinksRow />
      <Spacer size="$10" />
    </CommunityLayout>
  )
}

function CommunityLayout({ children }: { children: any }) {
  const { tint } = useTint()
  return <YStack theme={tint as any}>{useMemo(() => children, [children])}</YStack>
}
