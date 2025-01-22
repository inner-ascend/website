import { useTint } from '@tamagui/logo'
import { Check, Globe, Heart, Leaf, Palette, Sun, Users } from '@tamagui/lucide-icons'
import { useMemo } from 'react'
import { Button, Card, H1, H2, H3, Paragraph, Separator, Spacer, XStack, YStack } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { HeadInfo } from '~/components/HeadInfo'
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
              <Button size="$5" theme="green">Join Whitelist</Button>
              <Button size="$5" theme="alt1" borderWidth={1}>Learn More</Button>
            </XStack>
          </ContainerLarge>
        </YStack>
      </YStack>

      {/* Key Features */}
      <TintSection index={1} zi={100}>
        <ContainerLarge>
          <XStack flexWrap="wrap" gap="$8" jc="center" $sm={{ gap: "$6" }}>
            <YStack w={250} ai="center" space="$3" $sm={{ w: "100%", maw: 300 }}>
              <YStack p="$4" br="$6" bc="$green5">
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
          <YStack zi={1} space="$6" mb="$8">
            <YStack space="$6" mb="$6">
              <H2 size="$9" ta="center" $sm={{ size: "$8" }}>Location & Climate</H2>
              <Paragraph size="$6" ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
                Experience the perfect blend of natural beauty and modern comfort in Mexico's stunning Riviera Maya
              </Paragraph>
            </YStack>

            <XStack
              pos="relative"
              jc="center"
              gap="$4"
              $sm={{ fd: 'column' }}
              width="100%"
            >
              <Card f={1} bw={1} bc="$borderColor" br="$6" elevation="$6" shadowRadius={60} width="48%" $sm={{ width: '100%' }}>
                <YStack jc="center" p="$6" space="$6">
                  <YStack space="$4">
                    <H2 size="$8">Paradise Found</H2>
                    <Paragraph size="$5" theme="alt2">
                      Our carefully selected location offers the perfect blend of natural beauty and strategic advantages:
                    </Paragraph>
                  </YStack>
                  <YStack space="$6">
                    <XStack ai="center" space="$3">
                      <Check size={20} color="var(--green10)" />
                      <YStack space="$1">
                        <Paragraph size="$4" fontWeight="600">Perfect Growing Climate</Paragraph>
                        <Paragraph size="$3" theme="alt2">Year-round conditions ideal for tropical and subtropical crops</Paragraph>
                      </YStack>
                    </XStack>
                    
                    <XStack ai="center" space="$3">
                      <Check size={20} color="var(--green10)" />
                      <YStack space="$1">
                        <Paragraph size="$4" fontWeight="600">Natural Resources</Paragraph>
                        <Paragraph size="$3" theme="alt2">Crystal-clear cenotes and rich biodiversity on the property</Paragraph>
                      </YStack>
                    </XStack>

                    <XStack ai="center" space="$3">
                      <Check size={20} color="var(--green10)" />
                      <YStack space="$1">
                        <Paragraph size="$4" fontWeight="600">Strategic Location</Paragraph>
                        <Paragraph size="$3" theme="alt2">Easy access to airports, beaches, and modern amenities</Paragraph>
                      </YStack>
                    </XStack>

                    <XStack ai="center" space="$3">
                      <Check size={20} color="var(--green10)" />
                      <YStack space="$1">
                        <Paragraph size="$4" fontWeight="600">Community Integration</Paragraph>
                        <Paragraph size="$3" theme="alt2">Thriving expat community and local cultural experiences</Paragraph>
                      </YStack>
                    </XStack>

                    <XStack ai="center" space="$3">
                      <Check size={20} color="var(--green10)" />
                      <YStack space="$1">
                        <Paragraph size="$4" fontWeight="600">Development Ready</Paragraph>
                        <Paragraph size="$3" theme="alt2">All permits secured and infrastructure planning complete</Paragraph>
                      </YStack>
                    </XStack>
                  </YStack>
                </YStack>
              </Card>

              <Card f={1} bw={1} bc="$borderColor" br="$6" elevation="$6" shadowRadius={60} width="48%" $sm={{ width: '100%' }}>
                <YStack jc="center" p="$6" space="$6">
                  <YStack space="$4">
                    <H2 size="$8">Location Details</H2>
                    <YStack space="$5">
                      <YStack space="$3">
                        <H3 size="$5" theme="alt2">Climate & Environment</H3>
                        <YStack space="$2">
                          <Paragraph size="$4">
                            • Average temperature: 24-29°C (75-84°F)
                          </Paragraph>
                          <Paragraph size="$4">
                            • Rainy season: June to October
                          </Paragraph>
                          <Paragraph size="$4">
                            • Humidity: Moderate tropical climate
                          </Paragraph>
                        </YStack>
                      </YStack>

                      <YStack space="$3">
                        <H3 size="$5" theme="alt2">Travel & Access</H3>
                        <YStack space="$2">
                          <Paragraph size="$4">
                            • 45 min from Cancún International Airport
                          </Paragraph>
                          <Paragraph size="$4">
                            • 20 min to nearest major hospital
                          </Paragraph>
                          <Paragraph size="$4">
                            • 15 min to local markets and amenities
                          </Paragraph>
                          <Paragraph size="$4">
                            • 10 min to pristine beaches
                          </Paragraph>
                        </YStack>
                      </YStack>

                      <YStack space="$3">
                        <H3 size="$5" theme="alt2">Property Overview</H3>
                        <YStack space="$2">
                          <Paragraph size="$4">
                            • 50 acres of pristine tropical land
                          </Paragraph>
                          <Paragraph size="$4">
                            • Multiple natural cenotes on-site
                          </Paragraph>
                          <Paragraph size="$4">
                            • Mix of jungle and clearings
                          </Paragraph>
                          <Paragraph size="$4">
                            • Natural elevation changes
                          </Paragraph>
                        </YStack>
                      </YStack>
                    </YStack>
                  </YStack>
                </YStack>
              </Card>
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* NFT Tiers */}
      <TintSection index={3}>
        <ContainerLarge space="$6">
          <YStack space="$6" mb="$6">
            <H2 size="$9" ta="center" $sm={{ size: "$8" }}>Membership Tiers</H2>
            <Paragraph size="$6" ta="center" theme="alt2" $sm={{ size: "$5" }}>
              Secure your place in our community with blockchain-powered ownership and exclusive benefits
            </Paragraph>
          </YStack>
          <XStack flexWrap="wrap" gap="$4" jc="center" $sm={{ gap: "$3" }}>
            <YStack
              f={1}
              miw={300}
              maxWidth={350}
              p="$6"
              br="$4"
              space="$4"
              borderWidth={2}
              borderColor="$borderColor"
              $sm={{ 
                miw: "auto",
                w: "100%",
                p: "$4"
              }}
            >
              <YStack space="$2">
                <H3 size="$6">Founding Member</H3>
                <Paragraph theme="alt2" size="$8" fontWeight="800">5 ETH</Paragraph>
              </YStack>
              <Separator />
              <YStack space="$3">
                {[
                  'Private villa allocation',
                  'Full voting rights',
                  'Revenue sharing',
                  'Priority access to facilities',
                  'Founding member NFT'
                ].map(benefit => (
                  <XStack key={benefit} ai="center" space="$3">
                    <Check size={16} color="var(--color)" />
                    <Paragraph size="$3">{benefit}</Paragraph>
                  </XStack>
                ))}
              </YStack>
              <Button size="$4" theme="green_alt2">Join Waitlist</Button>
            </YStack>

            <YStack
              f={1}
              miw={300}
              maxWidth={350}
              p="$6"
              br="$4"
              space="$4"
              borderWidth={2}
              borderColor="$borderColor"
              theme="purple"
              $sm={{ 
                miw: "auto",
                w: "100%",
                p: "$4"
              }}
            >
              <YStack space="$2">
                <H3 size="$6">Core Member</H3>
                <Paragraph theme="alt2" size="$8" fontWeight="800">2 ETH</Paragraph>
              </YStack>
              <Separator />
              <YStack space="$3">
                {[
                  'Shared living space',
                  'Partial voting rights',
                  'Community participation',
                  'Access to all facilities',
                  'Core member NFT'
                ].map(benefit => (
                  <XStack key={benefit} ai="center" space="$3">
                    <Check size={16} color="var(--color)" />
                    <Paragraph size="$3">{benefit}</Paragraph>
                  </XStack>
                ))}
              </YStack>
              <Button size="$4" theme="purple_alt2">Reserve Spot</Button>
            </YStack>

            <YStack
              f={1}
              miw={300}
              maxWidth={350}
              p="$6"
              br="$4"
              space="$4"
              borderWidth={2}
              borderColor="$borderColor"
              theme="blue"
              $sm={{ 
                miw: "auto",
                w: "100%",
                p: "$4"
              }}
            >
              <YStack space="$2">
                <H3 size="$6">Community Member</H3>
                <Paragraph theme="alt2" size="$8" fontWeight="800">0.5 ETH</Paragraph>
              </YStack>
              <Separator />
              <YStack space="$3">
                {[
                  'Access to common areas',
                  'Community events',
                  'Seasonal stays',
                  'Basic amenities',
                  'Community NFT'
                ].map(benefit => (
                  <XStack key={benefit} ai="center" space="$3">
                    <Check size={16} color="var(--color)" />
                    <Paragraph size="$3">{benefit}</Paragraph>
                  </XStack>
                ))}
              </YStack>
              <Button size="$4" theme="blue_alt2">Join Community</Button>
            </YStack>
          </XStack>
        </ContainerLarge>
      </TintSection>

      {/* Timeline */}
      <TintSection index={4}>
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

      {/* Call to Action */}
      <HomeSection>
        <ContainerLarge space="$8">
          <YStack ai="center" space="$6">
            <H2 size="$9" ta="center" $sm={{ size: "$8" }}>Ready to Join?</H2>
            <Paragraph size="$6" ta="center" theme="alt2" maw={600} $sm={{ size: "$5" }}>
              Be among the pioneers shaping the future of sustainable living in Mexico. Limited founding memberships available.
            </Paragraph>
            <XStack gap="$4" mt="$4">
              <Button size="$5" theme="green">Join Whitelist</Button>
              <Button size="$5" theme="alt2">Schedule a Call</Button>
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
