import { useTint } from '@tamagui/logo'
import { ChevronRight } from '@tamagui/lucide-icons'
import { useMemo } from 'react'
import { Button, Card, H1, H3, Paragraph, Spacer, XStack, YStack } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { HeadInfo } from '~/components/HeadInfo'
import { FAQSection } from '~/components/mexico/FAQ'
import { GallerySection } from '~/components/mexico/Gallery'
import { KeyFeatures } from '~/components/mexico/KeyFeatures'
import { LocationClimate } from '~/components/mexico/LocationClimate'
import { MembershipTiers } from '~/components/mexico/MembershipTiers'
import { NewsUpdates } from '~/components/mexico/NewsUpdates'
import { ProjectImpact } from '~/components/mexico/ProjectImpact'
import { ProjectRoadmap } from '~/components/mexico/ProjectRoadmap'
import { teamMembers } from '~/data/mexico/team'
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
            background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%), linear-gradient(0deg, rgba(0,100,100,0.15) 0%, rgba(0,0,0,0) 100%)',
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
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}
              $sm={{ size: "$10" }}
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
                textShadow: '0 1px 8px rgba(0,0,0,0.3)'
              }}
              $sm={{ size: "$6" }}
            >
              Join a visionary community where sustainable living meets tropical paradise
            </Paragraph>
            <XStack jc="center" mt="$6" gap="$4">
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
                  scale: 1.02
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
                  scale: 1.02
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
        <ContainerLarge position="relative">
          <LocationClimate />
        </ContainerLarge>
      </TintSection>

      {/* Image Gallery */}
      <TintSection index={3}>
        <ContainerLarge space="$6">
          <YStack space="$6" mb="$6">
            <HomeH2 ta="center" $sm={{ size: "$8" }}>Experience Paradise</HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
              Discover the natural beauty and planned amenities of our sustainable community
            </HomeH3>
          </YStack>
          
          <GallerySection />
        </ContainerLarge>
      </TintSection>

      {/* NFT Tiers */}
      <TintSection index={4}>
        <ContainerLarge space="$6">
          <YStack space="$6" mb="$6">
            <HomeH2 ta="center" $sm={{ size: "$8" }}>Membership Tiers</HomeH2>
            <HomeH3 ta="center" theme="alt2" $sm={{ size: "$5" }}>
              Secure your place in our community with blockchain-powered ownership and exclusive benefits
            </HomeH3>
          </YStack>
          <MembershipTiers />
        </ContainerLarge>
      </TintSection>

      {/* Timeline */}
      <TintSection index={5}>
        <ContainerLarge position="relative">
          <ProjectRoadmap />
        </ContainerLarge>
      </TintSection>

      {/* Social Proof */}
      <TintSection index={6}>
        <ContainerLarge>
          <ProjectImpact />
        </ContainerLarge>
      </TintSection>

      {/* News & Updates */}
      <TintSection index={7}>
        <ContainerLarge>
          <YStack space="$6" mb="$8">
            <YStack space="$6" mb="$6">
              <HomeH2 ta="center" $sm={{ size: "$8" }}>News & Updates</HomeH2>
              <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
                Follow our journey as we build a sustainable paradise
              </HomeH3>
            </YStack>

            <NewsUpdates />
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Team Section */}
      <TintSection index={8}>
        <ContainerLarge>
          <YStack space="$6" mb="$8">
            <YStack space="$6" mb="$6">
              <HomeH2 ta="center" $sm={{ size: "$8" }}>Meet Our Team</HomeH2>
              <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
                Visionaries and experts bringing sustainable community living to life
              </HomeH3>
            </YStack>

            <XStack flexWrap="wrap" gap="$6" jc="center">
              {teamMembers.map((member, i) => (
                <Card
                  key={i}
                  bw={1}
                  bc="$borderColor"
                  br="$6"
                  elevation="$4"
                  width={280}
                  pressStyle={{
                    scale: 0.98,
                    bc: "$color1",
                  }}
                  animation="medium"
                  hoverStyle={{
                    elevation: "$8",
                    borderColor: "$color8",
                    scale: 1.01
                  }}
                  $sm={{ width: '100%' }}
                >
                  <YStack height={320} br="$6" ov="hidden" style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }} />
                  <YStack p="$4" space="$2">
                    <H3 size="$6">{member.name}</H3>
                    <Paragraph size="$4" theme="alt2" fontWeight="600">{member.role}</Paragraph>
                    <Paragraph size="$3" theme="alt2">{member.bio}</Paragraph>
                    <XStack mt="$2" ai="center" space="$2">
                      <YStack backgroundColor="$color4" px="$2" py="$1" br="$4">
                        <Paragraph size="$2" color="$color11">
                          {member.focus}
                        </Paragraph>
                      </YStack>
                    </XStack>
                  </YStack>
                </Card>
              ))}
            </XStack>

            <YStack space="$4" ai="center" mt="$6">
              <Button 
                size="$4" 
                theme="alt2"
                fontFamily="$silkscreen"
                iconAfter={ChevronRight}
                pressStyle={{
                  scale: 0.97,
                }}
                animation="quick"
                hoverStyle={{
                  opacity: 0.9,
                  scale: 1.02
                }}
              >
                Full Team & Advisors
              </Button>
            </YStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* FAQ Section */}
      <TintSection index={9}>
        <ContainerLarge>
          <YStack space="$6" mb="$8">
            <YStack space="$6" mb="$6">
              <HomeH2 ta="center" $sm={{ size: "$8" }}>Frequently Asked Questions</HomeH2>
              <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
                Everything you need to know about joining our community
              </HomeH3>
            </YStack>

            <YStack space="$4" als="center" px="$4">
              <FAQSection />
            </YStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Call to Action */}
      <HomeSection>
        <ContainerLarge space="$8">
          <YStack ai="center" space="$6">
            <HomeH2 ta="center" $sm={{ size: "$8" }}>Ready to Join?</HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={680} $sm={{ size: "$5" }}>
              Be among the pioneers shaping the future of sustainable living in Mexico. Limited founding memberships available.
            </HomeH3>
            <XStack gap="$4" mt="$4">
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
                  scale: 1.02
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
                  scale: 1.02
                }}
              >
                Schedule a Call
              </Button>
            </XStack>
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
