import { useTint } from '@tamagui/logo'
import { ChevronRight, Globe, Heart, Leaf, Palette, Sun, Users } from '@tamagui/lucide-icons'
import { useMemo } from 'react'
import { Button, Card, H1, H2, H3, Paragraph, Spacer, XStack, YStack } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { HeadInfo } from '~/components/HeadInfo'
import { SocialLinksRow } from '~/features/site/home/SocialLinksRow'
import { HomeSection, TintSection } from '~/features/site/home/TintSection'
import { ThemeNameEffect } from '~/features/site/theme/ThemeNameEffect'
import { FAQSection } from './components/FAQ'
import { GallerySection } from './components/Gallery'
import { LocationClimate } from './components/LocationClimate'
import { MembershipTiers } from './components/MembershipTiers'
import { NewsUpdates } from './components/NewsUpdates'
import { teamMembers } from './data/team'

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
          <XStack flexWrap="wrap" gap="$8" jc="center" $sm={{ gap: "$6" }}>
            <YStack w={250} ai="center" space="$3" $sm={{ w: "100%", maw: 300 }}>
              <YStack 
                p="$4" 
                br="$6" 
                bc="$green5"
                pressStyle={{
                  scale: 0.98,
                  opacity: 0.85
                }}
                animation="quick"
              >
                <Leaf size={24} color="var(--green10)" />
              </YStack>
              <H3 size="$5" ta="center" $sm={{ size: "$4" }}>Regenerative Agriculture</H3>
              <YStack space="$2">
                <Paragraph size="$3" ta="center" theme="alt2">
                  Beyond organic farming: our food forests and permaculture systems restore soil health while producing abundant tropical fruits and vegetables.
                </Paragraph>
                <Paragraph size="$2" ta="center" theme="alt2" o={0.8}>
                  Food forests • Aquaponics • Seed saving • Composting
                </Paragraph>
              </YStack>
            </YStack>

            <YStack w={250} ai="center" space="$3" $sm={{ w: "100%", maw: 300 }}>
              <YStack p="$4" br="$6" bc="$blue5">
                <Users size={24} color="var(--blue10)" />
              </YStack>
              <H3 size="$5" ta="center" $sm={{ size: "$4" }}>Community Living</H3>
              <YStack space="$2">
                <Paragraph size="$3" ta="center" theme="alt2">
                  Experience life in a purpose-driven community with shared workspaces, communal gardens, and a governance system that empowers all members.
                </Paragraph>
                <Paragraph size="$2" ta="center" theme="alt2" o={0.8}>
                  Co-working • Shared kitchen • Events space • Learning center
                </Paragraph>
              </YStack>
            </YStack>

            <YStack w={250} ai="center" space="$3" $sm={{ w: "100%", maw: 300 }}>
              <YStack p="$4" br="$6" bc="$yellow5">
                <Sun size={24} color="var(--yellow10)" />
              </YStack>
              <H3 size="$5" ta="center" $sm={{ size: "$4" }}>Sustainable Energy</H3>
              <YStack space="$2">
                <Paragraph size="$3" ta="center" theme="alt2">
                  Powered by Mexico's abundant sunshine through solar arrays and smart microgrids, with integrated water management systems.
                </Paragraph>
                <Paragraph size="$2" ta="center" theme="alt2" o={0.8}>
                  Solar arrays • Battery storage • Smart metering • Greywater
                </Paragraph>
              </YStack>
            </YStack>

            <YStack w={250} ai="center" space="$3" $sm={{ w: "100%", maw: 300 }}>
              <YStack p="$4" br="$6" bc="$purple5">
                <Heart size={24} color="var(--purple10)" />
              </YStack>
              <H3 size="$5" ta="center" $sm={{ size: "$4" }}>Wellness Focus</H3>
              <YStack space="$2">
                <Paragraph size="$3" ta="center" theme="alt2">
                  Nurture mind and body with dedicated spaces for yoga, meditation, and holistic health practices in harmony with nature.
                </Paragraph>
                <Paragraph size="$2" ta="center" theme="alt2" o={0.8}>
                  Yoga deck • Meditation garden • Natural pool • Healing center
                </Paragraph>
              </YStack>
            </YStack>

            <YStack w={250} ai="center" space="$3" $sm={{ w: "100%", maw: 300 }}>
              <YStack p="$4" br="$6" bc="$orange5">
                <Palette size={24} color="var(--orange10)" />
              </YStack>
              <H3 size="$5" ta="center" $sm={{ size: "$4" }}>Creative Spaces</H3>
              <YStack space="$2">
                <Paragraph size="$3" ta="center" theme="alt2">
                  Express yourself in dedicated maker spaces and art studios, fostering a vibrant creative community culture.
                </Paragraph>
                <Paragraph size="$2" ta="center" theme="alt2" o={0.8}>
                  Art studio • Workshop • Music room • Performance space
                </Paragraph>
              </YStack>
            </YStack>

            <YStack w={250} ai="center" space="$3" $sm={{ w: "100%", maw: 300 }}>
              <YStack p="$4" br="$6" bc="$pink5">
                <Globe size={24} color="var(--pink10)" />
              </YStack>
              <H3 size="$5" ta="center" $sm={{ size: "$4" }}>Cultural Integration</H3>
              <YStack space="$2">
                <Paragraph size="$3" ta="center" theme="alt2">
                  Bridge global and local communities through cultural exchange programs and partnerships with local artisans.
                </Paragraph>
                <Paragraph size="$2" ta="center" theme="alt2" o={0.8}>
                  Local markets • Language exchange • Artisan workshops • Festivals
                </Paragraph>
              </YStack>
            </YStack>
          </XStack>
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
            <H2 size="$9" ta="center" $sm={{ size: "$8" }}>Experience Paradise</H2>
            <Paragraph size="$6" ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
              Discover the natural beauty and planned amenities of our sustainable community
            </Paragraph>
          </YStack>
          
          <GallerySection />
        </ContainerLarge>
      </TintSection>

      {/* NFT Tiers */}
      <TintSection index={4}>
        <ContainerLarge space="$6">
          <YStack space="$6" mb="$6">
            <H2 size="$9" ta="center" $sm={{ size: "$8" }}>Membership Tiers</H2>
            <Paragraph size="$6" ta="center" theme="alt2" $sm={{ size: "$5" }}>
              Secure your place in our community with blockchain-powered ownership and exclusive benefits
            </Paragraph>
          </YStack>
          <MembershipTiers />
        </ContainerLarge>
      </TintSection>

      {/* Timeline */}
      <TintSection index={5}>
        <ContainerLarge position="relative">
          <YStack zi={1} space="$6" mb="$4">
            <YStack space="$6" mb="$6">
              <H2 size="$9" ta="center" $sm={{ size: "$8" }}>Project Roadmap</H2>
              <Paragraph size="$6" ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
                Strategic milestones for developing our sustainable community
              </Paragraph>
            </YStack>
            <XStack
              pos="relative"
              jc="center"
              flexWrap="wrap"
              gap="$4"
              width="100%"
            >
              {[
                {
                  date: 'Q4 2024',
                  title: 'Land Acquisition',
                  items: [
                    'Property purchase finalized',
                    'Initial permits secured',
                    'Community NFT launch'
                  ]
                },
                {
                  date: 'Q2 2025',
                  title: 'Infrastructure',
                  items: [
                    'Solar installation',
                    'Water systems',
                    'Initial housing units'
                  ]
                },
                {
                  date: 'Q4 2025',
                  title: 'Community Launch',
                  items: [
                    'First residents move in',
                    'Farm operations begin',
                    'Community spaces open'
                  ]
                },
                {
                  date: '2026+',
                  title: 'Expansion',
                  items: [
                    'Additional housing',
                    'Education center',
                    'Wellness facilities'
                  ]
                }
              ].map((phase, i) => (
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
        </ContainerLarge>
      </TintSection>

      {/* Social Proof */}
      <TintSection index={6}>
        <ContainerLarge>
          <YStack space="$6" mb="$8">
            <YStack space="$6" mb="$6">
              <H2 size="$9" ta="center" $sm={{ size: "$8" }}>Project Impact</H2>
              <Paragraph size="$6" ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
                Join a growing community of visionaries committed to sustainable living
              </Paragraph>
            </YStack>

            <XStack flexWrap="wrap" gap="$8" jc="center" $sm={{ gap: "$6" }}>
              <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
                <H2 size="$9" color="$green10">50</H2>
                <Paragraph size="$4" ta="center" theme="alt2">Acres of Pristine Land</Paragraph>
              </YStack>

              <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
                <H2 size="$9" color="$blue10">100+</H2>
                <Paragraph size="$4" ta="center" theme="alt2">Interested Members</Paragraph>
              </YStack>

              <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
                <H2 size="$9" color="$yellow10">3</H2>
                <Paragraph size="$4" ta="center" theme="alt2">Natural Cenotes</Paragraph>
              </YStack>

              <YStack w={200} ai="center" space="$2" $sm={{ w: "45%" }}>
                <H2 size="$9" color="$purple10">24/7</H2>
                <Paragraph size="$4" ta="center" theme="alt2">Solar Power</Paragraph>
              </YStack>
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* News & Updates */}
      <TintSection index={7}>
        <ContainerLarge>
          <YStack space="$6" mb="$8">
            <YStack space="$6" mb="$6">
              <H2 size="$9" ta="center" $sm={{ size: "$8" }}>News & Updates</H2>
              <Paragraph size="$6" ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
                Follow our journey as we build a sustainable paradise
              </Paragraph>
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
              <H2 size="$9" ta="center" $sm={{ size: "$8" }}>Meet Our Team</H2>
              <Paragraph size="$6" ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
                Visionaries and experts bringing sustainable community living to life
              </Paragraph>
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
              <H2 size="$9" ta="center" $sm={{ size: "$8" }}>Frequently Asked Questions</H2>
              <Paragraph size="$6" ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
                Everything you need to know about joining our community
              </Paragraph>
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
            <H2 size="$9" ta="center" $sm={{ size: "$8" }}>Ready to Join?</H2>
            <Paragraph size="$6" ta="center" theme="alt2" maw={600} $sm={{ size: "$5" }}>
              Be among the pioneers shaping the future of sustainable living in Mexico. Limited founding memberships available.
            </Paragraph>
            <XStack gap="$4" mt="$4">
              <Button 
                size="$5" 
                theme="green"
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
