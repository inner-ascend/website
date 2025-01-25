import { useTint } from '@tamagui/logo'
import { Button, Card, H1, H3, Paragraph, Spacer, XStack, YStack } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { HeadInfo } from '~/components/HeadInfo'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { SocialLinksRow } from '~/features/site/home/SocialLinksRow'
import { TintSection } from '~/features/site/home/TintSection'
import { ThemeNameEffect } from '~/features/site/theme/ThemeNameEffect'

function VisionLayout({ children }: { children: React.ReactNode }) {
  const { tint } = useTint()
  return <YStack theme={tint as any}>{children}</YStack>
}

export default function Vision() {
  return (
    <VisionLayout>
      <ThemeNameEffect />
      <HeadInfo
        title="Vision | Inner Ascend"
        description="Transform the Future of Community Living through NFT-Powered Membership"
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
            backgroundImage: 'url(/images/hero/community-living.jpg)',
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
              Transform the Future of Community Living
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
              Access Sustainable Communities Worldwide Through NFT-Powered Membership
            </Paragraph>
            <Paragraph
              size="$6"
              ta="center"
              color="white"
              o={0.9}
              maw={800}
              als="center"
              fontWeight="400"
              style={{
                textShadow: '0 1px 8px rgba(0,0,0,0.3)',
              }}
              $sm={{ size: '$4' }}
            >
              Inner Ascend DAO is revolutionizing conscious community living. Through NFT
              membership, access regenerative spaces globally, participate in governance, and shape
              the future of sustainable communities.
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

      {/* Core Vision Section */}
      <TintSection index={1}>
        <ContainerLarge space="$6">
          <YStack space="$6" mb="$6">
            <HomeH2 ta="center" $sm={{ size: '$8' }}>
              Core Vision
            </HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
              Building a Global Network of Regenerative Communities
            </HomeH3>
          </YStack>

          <YStack>
            <XStack flexWrap="wrap" gap="$5" rowGap="$3" w="100%">
              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="green" f={1}>
                  <H3 size="$7" mb="$4">
                    Our Vision
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$4">
                    We're creating a world where sustainable communities thrive across borders,
                    connected through technology and united by shared values. A world where
                    conscious living is accessible, mobile, and governed by its members.
                  </Paragraph>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="blue" f={1}>
                  <H3 size="$7" mb="$4">
                    Our Mission
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$4">
                    To empower the creation and connection of regenerative communities worldwide
                    through NFT-based access rights, decentralized governance, and collective
                    resource sharing.
                  </Paragraph>
                </Card>
              </XStack>
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* How It Works Section */}
      <TintSection index={2}>
        <ContainerLarge space="$6">
          <YStack space="$6" mb="$6">
            <HomeH2 ta="center" $sm={{ size: '$8' }}>
              How It Works
            </HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
              A New Model for Community Living
            </HomeH3>
          </YStack>

          <YStack>
            <XStack flexWrap="wrap" gap="$5" rowGap="$3" w="100%">
              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="orange" f={1}>
                  <H3 size="$7" mb="$4">
                    NFT Access Rights
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$4">
                    Purchase NFTs to gain access rights to specific communities and spaces. Each NFT
                    represents real ownership and governance rights within the community ecosystem.
                  </Paragraph>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="purple" f={1}>
                  <H3 size="$7" mb="$4">
                    DAO Governance
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$4">
                    Participate in community decisions through our decentralized governance system.
                    Vote on proposals, allocate resources, and shape the future of your community.
                  </Paragraph>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="yellow" f={1}>
                  <H3 size="$7" mb="$4">
                    Resource Sharing
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$4">
                    Access shared resources across our network of communities. From workspaces to
                    tools, benefit from collective ownership and sustainable resource management.
                  </Paragraph>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="pink" f={1}>
                  <H3 size="$7" mb="$4">
                    Global Mobility
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$4">
                    Move freely between communities in our growing network. Experience different
                    cultures and environments while maintaining your membership benefits.
                  </Paragraph>
                </Card>
              </XStack>
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Membership Options Section */}
      <TintSection index={3}>
        <ContainerLarge space="$6">
          <YStack space="$6" mb="$6">
            <HomeH2 ta="center" $sm={{ size: '$8' }}>
              Choose Your Path
            </HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
              Flexible Options for Every Journey
            </HomeH3>
          </YStack>

          {/* Lifetime NFT Membership */}
          <YStack space="$6" mb="$8">
            <H3 size="$8" ta="center" theme="alt2">
              Lifetime NFT Membership
            </H3>
            <Paragraph size="$5" ta="center" theme="alt2" mb="$4">
              Own your piece of the community forever
            </Paragraph>

            <XStack flexWrap="wrap" gap="$5" rowGap="$3" w="100%">
              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="green" f={1}>
                  <H3 size="$7" mb="$4">
                    Explorer NFT
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$2">
                    Starting from $10,000
                  </Paragraph>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • 3 months annual access to any community
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Base governance rights
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Community resource access
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="blue" f={1}>
                  <H3 size="$7" mb="$4">
                    Creator NFT
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$2">
                    Starting from $20,000
                  </Paragraph>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • 6 months annual access
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Enhanced governance rights
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Priority resource access
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Revenue sharing
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="orange" f={1}>
                  <H3 size="$7" mb="$4">
                    Sovereign NFT
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$2">
                    Starting from $40,000
                  </Paragraph>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • Full year access
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Maximum governance rights
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • First access to resources
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Higher revenue sharing
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="purple" f={1}>
                  <H3 size="$7" mb="$4">
                    Legacy NFT
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$2">
                    Starting from $100,000 (Limited to 10)
                  </Paragraph>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • Unlimited access
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Supreme governance rights
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Founding member status
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>
            </XStack>
          </YStack>

          {/* Annual Membership */}
          <YStack space="$6" mb="$6">
            <H3 size="$8" ta="center" theme="alt2">
              Annual Renewable Membership
            </H3>
            <Paragraph size="$5" ta="center" theme="alt2" mb="$4">
              Flexible access with lower initial commitment
            </Paragraph>

            <XStack flexWrap="wrap" gap="$5" rowGap="$3" w="100%">
              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="yellow" f={1}>
                  <H3 size="$7" mb="$4">
                    Explorer Membership
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$2">
                    From $5,000/year
                  </Paragraph>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • 3 months annual access
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Basic governance rights
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="pink" f={1}>
                  <H3 size="$7" mb="$4">
                    Creator Membership
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$2">
                    From $9,000/year
                  </Paragraph>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • 6 months annual access
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Enhanced rights
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="blue" f={1}>
                  <H3 size="$7" mb="$4">
                    Sovereign Membership
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$2">
                    From $15,000/year
                  </Paragraph>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • Full year access
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Premium benefits
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Oaxaca Details Section */}
      <TintSection index={4}>
        <ContainerLarge space="$6">
          <YStack space="$6" mb="$6">
            <HomeH2 ta="center" $sm={{ size: '$8' }}>
              Paradise Found
            </HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
              Nestled in Mexico's Sierra Madre del Sur
            </HomeH3>
          </YStack>

          <YStack>
            <XStack flexWrap="wrap" gap="$5" rowGap="$3" w="100%">
              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="green" f={1}>
                  <H3 size="$7" mb="$4">
                    Natural Environment
                  </H3>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • Mountain jungle environment
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Proximity to Pacific beaches
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Year-round temperate climate
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="blue" f={1}>
                  <H3 size="$7" mb="$4">
                    Sustainable Systems
                  </H3>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • Regenerative agriculture
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Food forests
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Sustainable energy systems
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="orange" f={1}>
                  <H3 size="$7" mb="$4">
                    Community Spaces
                  </H3>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • Creation and coworking areas
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Holistic wellness facilities
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Natural building practices
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="purple" f={1}>
                  <H3 size="$7" mb="$4">
                    Cultural Integration
                  </H3>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • Local community connections
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Traditional knowledge exchange
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Cultural events and workshops
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* First Community Section */}
      <TintSection index={5}>
        <ContainerLarge space="$6">
          <YStack space="$6" mb="$6">
            <HomeH2 ta="center" $sm={{ size: '$8' }}>
              Our First Community
            </HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
              Oaxaca, Mexico - A Blueprint for Regenerative Living
            </HomeH3>
          </YStack>

          <YStack>
            <XStack flexWrap="wrap" gap="$5" rowGap="$3" w="100%">
              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="green" f={1}>
                  <H3 size="$7" mb="$4">
                    Location & Climate
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$4">
                    Located in the Sierra Norte region of Oaxaca, Mexico. Experience a temperate
                    climate perfect for year-round cultivation, with abundant water resources and
                    pristine natural surroundings.
                  </Paragraph>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="blue" f={1}>
                  <H3 size="$7" mb="$4">
                    Infrastructure
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$4">
                    Development of sustainable housing, renewable energy systems, water management,
                    and communal spaces. Designed for both private living and collaborative work.
                  </Paragraph>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="orange" f={1}>
                  <H3 size="$7" mb="$4">
                    Community Focus
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$4">
                    Emphasis on permaculture, sustainable technology, and cultural integration.
                    Strong connections with local communities and traditional ecological knowledge.
                  </Paragraph>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="purple" f={1}>
                  <H3 size="$7" mb="$4">
                    Join the Pioneer Community
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$4">
                    Be part of our founding community. Help shape the future of regenerative living
                    while enjoying the beauty and culture of Oaxaca, Mexico.
                  </Paragraph>
                </Card>
              </XStack>
            </XStack>
          </YStack>

          <YStack ai="center" mt="$6">
            <Button
              size="$5"
              theme="green"
              fontFamily="$silkscreen"
              pressStyle={{ scale: 0.97 }}
              animation="quick"
              hoverStyle={{ opacity: 0.9, scale: 1.02 }}
            >
              Learn More About Oaxaca
            </Button>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Community Creation Section */}
      <TintSection index={6}>
        <ContainerLarge space="$6">
          <YStack space="$6" mb="$6">
            <HomeH2 ta="center" $sm={{ size: '$8' }}>
              Community Creation
            </HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
              Build the Future of Sustainable Living
            </HomeH3>
          </YStack>

          <YStack>
            <XStack flexWrap="wrap" gap="$5" rowGap="$3" w="100%">
              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="green" f={1}>
                  <H3 size="$7" mb="$4">
                    For Visionaries
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$4">
                    Have a vision for a sustainable community?
                  </Paragraph>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • Submit your land proposal
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Build your community team
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Access collective funding
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Join our global network
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="blue" f={1}>
                  <H3 size="$7" mb="$4">
                    For Members
                  </H3>
                  <Paragraph size="$5" theme="alt2" mb="$4">
                    Ready to experience conscious community living?
                  </Paragraph>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • Choose your membership tier
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Access communities worldwide
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Participate in governance
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Shape our collective future
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Why Now Section */}
      <TintSection index={7}>
        <ContainerLarge space="$6">
          <YStack space="$6" mb="$6">
            <HomeH2 ta="center" $sm={{ size: '$8' }}>
              Why Now?
            </HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
              The Time for Change is Here
            </HomeH3>
          </YStack>

          <YStack>
            <Card elevation={2} theme="orange" f={1} p="$6">
              <Paragraph size="$6" theme="alt2" ta="center" mb="$6">
                The world is ready for a new paradigm of living that:
              </Paragraph>
              <XStack flexWrap="wrap" gap="$5" rowGap="$3" w="100%" jc="center">
                <YStack space="$2" w="48%" miw={250}>
                  <Paragraph size="$5" theme="alt2">
                    • Transcends traditional property ownership
                  </Paragraph>
                  <Paragraph size="$5" theme="alt2">
                    • Enables global mobility
                  </Paragraph>
                </YStack>
                <YStack space="$2" w="48%" miw={250}>
                  <Paragraph size="$5" theme="alt2">
                    • Regenerates our planet
                  </Paragraph>
                  <Paragraph size="$5" theme="alt2">
                    • Builds resilient communities
                  </Paragraph>
                </YStack>
                <YStack space="$2" w="48%" miw={250}>
                  <Paragraph size="$5" theme="alt2">
                    • Fosters personal and collective growth
                  </Paragraph>
                </YStack>
              </XStack>
            </Card>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Membership Benefits Section */}
      <TintSection index={8}>
        <ContainerLarge space="$6">
          <YStack space="$6" mb="$6">
            <HomeH2 ta="center" $sm={{ size: '$8' }}>
              Membership Benefits
            </HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
              Comprehensive Value for Members
            </HomeH3>
          </YStack>

          <YStack>
            <XStack flexWrap="wrap" gap="$5" rowGap="$3" w="100%">
              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="green" f={1}>
                  <H3 size="$7" mb="$4">
                    Access
                  </H3>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • Multiple sustainable communities
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Shared resources and facilities
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Learning opportunities
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Global network
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="blue" f={1}>
                  <H3 size="$7" mb="$4">
                    Governance
                  </H3>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • Voting rights (weighted by tier)
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Proposal submission
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Resource allocation
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Community decisions
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="orange" f={1}>
                  <H3 size="$7" mb="$4">
                    Economic
                  </H3>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • Revenue sharing (NFT holders)
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Resource sharing
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Community marketplace
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Value appreciation potential
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="purple" f={1}>
                  <H3 size="$7" mb="$4">
                    Community
                  </H3>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • Global connections
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Skill sharing
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Events and gatherings
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Cultural exchange
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Call to Action Section */}
      <TintSection index={9}>
        <ContainerLarge space="$6">
          <YStack space="$6" mb="$6">
            <HomeH2 ta="center" $sm={{ size: '$8' }}>
              Join the Movement
            </HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
              Be Part of the Future of Community Living
            </HomeH3>
          </YStack>

          <YStack ai="center" space="$6">
            <Card elevation={2} theme="green" maw={800} p="$6">
              <YStack space="$4" ai="center">
                <H3 size="$7" ta="center">
                  Ready to Transform Community Living?
                </H3>
                <Paragraph size="$5" theme="alt2" ta="center" mb="$4">
                  Choose your path and join our growing network of conscious communities.
                </Paragraph>
                <XStack flexWrap="wrap" gap="$4" jc="center">
                  <Button
                    size="$5"
                    theme="green"
                    fontFamily="$silkscreen"
                    pressStyle={{ scale: 0.97 }}
                    animation="quick"
                    hoverStyle={{ opacity: 0.9, scale: 1.02 }}
                  >
                    Join Whitelist
                  </Button>
                  <Button
                    size="$5"
                    theme="blue"
                    fontFamily="$silkscreen"
                    pressStyle={{ scale: 0.97 }}
                    animation="quick"
                    hoverStyle={{ opacity: 0.9, scale: 1.02 }}
                  >
                    View Membership Options
                  </Button>
                  <Button
                    size="$5"
                    theme="orange"
                    fontFamily="$silkscreen"
                    pressStyle={{ scale: 0.97 }}
                    animation="quick"
                    hoverStyle={{ opacity: 0.9, scale: 1.02 }}
                  >
                    Submit Land Proposal
                  </Button>
                </XStack>
              </YStack>
            </Card>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Technical Details Section */}
      <TintSection index={10}>
        <ContainerLarge space="$6">
          <YStack space="$6" mb="$6">
            <HomeH2 ta="center" $sm={{ size: '$8' }}>
              Technical Framework
            </HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
              Built on Web3 Technology
            </HomeH3>
          </YStack>

          <YStack>
            <XStack flexWrap="wrap" gap="$5" rowGap="$3" w="100%">
              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="blue" f={1}>
                  <H3 size="$7" mb="$4">
                    Smart Contracts
                  </H3>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • ERC-721 NFT standard
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Automated access rights
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Secure ownership transfer
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="purple" f={1}>
                  <H3 size="$7" mb="$4">
                    DAO Structure
                  </H3>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • Multi-sig treasury
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Token-weighted voting
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Transparent governance
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="orange" f={1}>
                  <H3 size="$7" mb="$4">
                    Token System
                  </H3>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • NFT-based membership
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Governance tokens
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Revenue distribution
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>

              <XStack w="48%" miw={250}>
                <Card elevation={2} theme="green" f={1}>
                  <H3 size="$7" mb="$4">
                    Security
                  </H3>
                  <YStack space="$2">
                    <Paragraph size="$4" theme="alt2">
                      • Audited contracts
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Multi-sig wallets
                    </Paragraph>
                    <Paragraph size="$4" theme="alt2">
                      • Secure access control
                    </Paragraph>
                  </YStack>
                </Card>
              </XStack>
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      <Spacer />
      <SocialLinksRow />
      <Spacer size="$10" />
    </VisionLayout>
  )
}
