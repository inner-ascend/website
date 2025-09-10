import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '../home/HomeHeaders'

export function SalvajeCommunity() {
  return (
    <YStack space="$6" mb="$8" id="community">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Living Together
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={800} als="center" $sm={{ size: '$5' }}>
          Our Community Structure
        </HomeH3>
      </YStack>

      <YStack space="$4" ai="center" maw={900} als="center">
        <Paragraph size="$6" ta="center" theme="alt1" $sm={{ size: '$5' }}>
          Our governance combines ancient wisdom with modern design to create resilient, adaptive community structures.
        </Paragraph>

        {/* Core Community Values */}
        <YStack space="$6" mt="$8" width="100%">
          <HomeH3 ta="center" $sm={{ size: '$6' }}>
            Core Community Values
          </HomeH3>
          
          <XStack
            gap="$6"
            width="100%"
            $sm={{
              flexDirection: 'column',
              gap: '$6',
            }}
          >
            {/* Regeneration */}
            <YStack
              f={1}
              space="$4"
              p="$6"
              bg="$background"
              borderRadius="$6"
              borderWidth={3}
              borderColor="$salvaje_ocean6"
              shadowColor="$salvaje_ocean4"
              shadowOffset={{ width: 0, height: 4 }}
              shadowOpacity={0.1}
              shadowRadius={8}
              hoverStyle={{
                scale: 1.02,
                shadowOpacity: 0.2,
              }}
              animation="quick"
            >
              <YStack ai="center" space="$3" mb="$4">
                <YStack
                  width={60}
                  height={60}
                  bg="$salvaje_ocean9"
                  borderRadius="$12"
                  ai="center"
                  jc="center"
                  shadowColor="$salvaje_ocean6"
                  shadowOffset={{ width: 0, height: 2 }}
                  shadowOpacity={0.3}
                  shadowRadius={4}
                >
                  <Paragraph size="$5" color="white" fontWeight="700">
                    🌱
                  </Paragraph>
                </YStack>
              </YStack>
              <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean11" ta="center" fontFamily="$heading">
                Regeneration
              </Paragraph>
              <Paragraph size="$4" theme="alt1" ta="center" lineHeight={1.5}>
                We design systems that enhance the health and vitality of natural ecosystems, ensuring our actions build rather than deplete.
              </Paragraph>
            </YStack>

            {/* Sovereignty */}
            <YStack
              f={1}
              space="$4"
              p="$6"
              bg="$background"
              borderRadius="$6"
              borderWidth={3}
              borderColor="$salvaje_mango6"
              shadowColor="$salvaje_mango4"
              shadowOffset={{ width: 0, height: 4 }}
              shadowOpacity={0.1}
              shadowRadius={8}
              hoverStyle={{
                scale: 1.02,
                shadowOpacity: 0.2,
              }}
              animation="quick"
            >
              <YStack ai="center" space="$3" mb="$4">
                <YStack
                  width={60}
                  height={60}
                  bg="$salvaje_mango9"
                  borderRadius="$12"
                  ai="center"
                  jc="center"
                  shadowColor="$salvaje_mango6"
                  shadowOffset={{ width: 0, height: 2 }}
                  shadowOpacity={0.3}
                  shadowRadius={4}
                >
                  <Paragraph size="$5" color="white" fontWeight="700">
                    🦅
                  </Paragraph>
                </YStack>
              </YStack>
              <Paragraph size="$5" fontWeight="600" color="$salvaje_mango11" ta="center" fontFamily="$heading">
                Sovereignty
              </Paragraph>
              <Paragraph size="$4" theme="alt1" ta="center" lineHeight={1.5}>
                We honor the autonomy of each individual while recognizing our interdependence within the larger community and ecosystem.
              </Paragraph>
            </YStack>

            {/* Reciprocity */}
            <YStack
              f={1}
              space="$4"
              p="$6"
              bg="$background"
              borderRadius="$6"
              borderWidth={3}
              borderColor="$salvaje_bougainvillea6"
              shadowColor="$salvaje_bougainvillea4"
              shadowOffset={{ width: 0, height: 4 }}
              shadowOpacity={0.1}
              shadowRadius={8}
              hoverStyle={{
                scale: 1.02,
                shadowOpacity: 0.2,
              }}
              animation="quick"
            >
              <YStack ai="center" space="$3" mb="$4">
                <YStack
                  width={60}
                  height={60}
                  bg="$salvaje_bougainvillea9"
                  borderRadius="$12"
                  ai="center"
                  jc="center"
                  shadowColor="$salvaje_bougainvillea6"
                  shadowOffset={{ width: 0, height: 2 }}
                  shadowOpacity={0.3}
                  shadowRadius={4}
                >
                  <Paragraph size="$5" color="white" fontWeight="700">
                    🤝
                  </Paragraph>
                </YStack>
              </YStack>
              <Paragraph size="$5" fontWeight="600" color="$salvaje_bougainvillea11" ta="center" fontFamily="$heading">
                Reciprocity
              </Paragraph>
              <Paragraph size="$4" theme="alt1" ta="center" lineHeight={1.5}>
                We build relationships based on mutual benefit, ensuring fair exchange that respects all beings, including the land itself.
              </Paragraph>
            </YStack>
          </XStack>

          {/* Integration */}
          <YStack
            space="$4"
            p="$6"
            mt="$6"
            bg="$background"
            borderRadius="$6"
            borderWidth={3}
            borderColor="$salvaje_ocean7"
            shadowColor="$salvaje_ocean4"
            shadowOffset={{ width: 0, height: 4 }}
            shadowOpacity={0.1}
            shadowRadius={8}
            hoverStyle={{
              scale: 1.02,
              shadowOpacity: 0.2,
            }}
            animation="quick"
            maw={800}
          >
            <YStack ai="center" space="$3" mb="$4">
              <YStack
                width={60}
                height={60}
                bg="$salvaje_ocean10"
                borderRadius="$12"
                ai="center"
                jc="center"
                shadowColor="$salvaje_ocean6"
                shadowOffset={{ width: 0, height: 2 }}
                shadowOpacity={0.3}
                shadowRadius={4}
              >
                <Paragraph size="$5" color="white" fontWeight="700">
                  🌿
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean12" ta="center" fontFamily="$heading">
              Integration
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center" lineHeight={1.5}>
              We embrace the full spectrum of human experience, weaving together inner and outer work, traditional wisdom and modern knowledge.
            </Paragraph>
          </YStack>
        </YStack>

        {/* Development Timeline */}
        <YStack space="$6" mt="$10" width="100%">
          <HomeH3 ta="center" $sm={{ size: '$6' }}>
            Development Timeline
          </HomeH3>
          
          <XStack
            gap="$4"
            width="100%"
            $sm={{
              flexDirection: 'column',
              gap: '$4',
            }}
          >
            {/* Phase 1 (Now) */}
            <YStack
              f={1}
              space="$3"
              p="$5"
              bg="$salvaje_mango2"
              borderRadius="$4"
              borderWidth={2}
              borderColor="$salvaje_mango6"
              hoverStyle={{
                scale: 1.02,
                borderColor: "$salvaje_mango8",
              }}
              animation="quick"
            >
              <Paragraph size="$5" fontWeight="600" color="$salvaje_mango11" ta="center">
                Phase 1 (Now)
              </Paragraph>
              <Paragraph size="$4" theme="alt1" ta="center">
                Land acquisition, basic infrastructure, founding members
              </Paragraph>
            </YStack>

            {/* Year 1 */}
            <YStack
              f={1}
              space="$3"
              p="$5"
              bg="$salvaje_bougainvillea2"
              borderRadius="$4"
              borderWidth={2}
              borderColor="$salvaje_bougainvillea6"
              hoverStyle={{
                scale: 1.02,
                borderColor: "$salvaje_bougainvillea8",
              }}
              animation="quick"
            >
              <Paragraph size="$5" fontWeight="600" color="$salvaje_bougainvillea11" ta="center">
                Year 1
              </Paragraph>
              <Paragraph size="$4" theme="alt1" ta="center">
                Housing, permaculture, programs
              </Paragraph>
            </YStack>

            {/* Year 2 */}
            <YStack
              f={1}
              space="$3"
              p="$5"
              bg="$salvaje_ocean2"
              borderRadius="$4"
              borderWidth={2}
              borderColor="$salvaje_ocean6"
              hoverStyle={{
                scale: 1.02,
                borderColor: "$salvaje_ocean8",
              }}
              animation="quick"
            >
              <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean11" ta="center">
                Year 2
              </Paragraph>
              <Paragraph size="$4" theme="alt1" ta="center">
                Tech, renewable energy, governance systems
              </Paragraph>
            </YStack>

            {/* Year 3 */}
            <YStack
              f={1}
              space="$3"
              p="$5"
              bg="$salvaje_mango3"
              borderRadius="$4"
              borderWidth={2}
              borderColor="$salvaje_mango7"
              hoverStyle={{
                scale: 1.02,
                borderColor: "$salvaje_mango9",
              }}
              animation="quick"
            >
              <Paragraph size="$5" fontWeight="600" color="$salvaje_mango12" ta="center">
                Year 3
              </Paragraph>
              <Paragraph size="$4" theme="alt1" ta="center">
                Full village with educational programs & visitor integration
              </Paragraph>
            </YStack>
          </XStack>
        </YStack>

        {/* Governance */}
        <YStack space="$6" mt="$10" width="100%">
          <HomeH3 ta="center" $sm={{ size: '$6' }}>
            Governance
          </HomeH3>
          
          <XStack
            gap="$6"
            width="100%"
            $sm={{
              flexDirection: 'column',
              gap: '$4',
            }}
          >
            <YStack
              f={1}
              space="$3"
              p="$5"
              bg="$salvaje_ocean2"
              borderRadius="$4"
              borderWidth={2}
              borderColor="$salvaje_ocean6"
              hoverStyle={{
                scale: 1.02,
                borderColor: "$salvaje_ocean8",
              }}
              animation="quick"
            >
              <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean11" ta="center">
                Sociocracy
              </Paragraph>
              <Paragraph size="$4" theme="alt1" ta="center">
                Consent-based decision making
              </Paragraph>
            </YStack>

            <YStack
              f={1}
              space="$3"
              p="$5"
              bg="$salvaje_mango2"
              borderRadius="$4"
              borderWidth={2}
              borderColor="$salvaje_mango6"
              hoverStyle={{
                scale: 1.02,
                borderColor: "$salvaje_mango8",
              }}
              animation="quick"
            >
              <Paragraph size="$5" fontWeight="600" color="$salvaje_mango11" ta="center">
                Working Circles
              </Paragraph>
              <Paragraph size="$4" theme="alt1" ta="center">
                Self-organizing teams
              </Paragraph>
            </YStack>

            <YStack
              f={1}
              space="$3"
              p="$5"
              bg="$salvaje_bougainvillea2"
              borderRadius="$4"
              borderWidth={2}
              borderColor="$salvaje_bougainvillea6"
              hoverStyle={{
                scale: 1.02,
                borderColor: "$salvaje_bougainvillea8",
              }}
              animation="quick"
            >
              <Paragraph size="$5" fontWeight="600" color="$salvaje_bougainvillea11" ta="center">
                Council Gatherings
              </Paragraph>
              <Paragraph size="$4" theme="alt1" ta="center">
                Community-wide decisions
              </Paragraph>
            </YStack>
          </XStack>
        </YStack>

        {/* Contribution Paths */}
        <YStack space="$6" mt="$10" width="100%">
          <HomeH3 ta="center" $sm={{ size: '$6' }}>
            Contribution Paths
          </HomeH3>
          
          <XStack
            gap="$4"
            width="100%"
            $sm={{
              flexDirection: 'column',
              gap: '$4',
            }}
          >
            <YStack
              f={1}
              space="$3"
              p="$5"
              bg="$salvaje_ocean3"
              borderRadius="$4"
              borderWidth={2}
              borderColor="$salvaje_ocean7"
              hoverStyle={{
                scale: 1.02,
                borderColor: "$salvaje_ocean9",
              }}
              animation="quick"
            >
              <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean12" ta="center">
                Core founding members
              </Paragraph>
            </YStack>

            <YStack
              f={1}
              space="$3"
              p="$5"
              bg="$salvaje_mango3"
              borderRadius="$4"
              borderWidth={2}
              borderColor="$salvaje_mango7"
              hoverStyle={{
                scale: 1.02,
                borderColor: "$salvaje_mango9",
              }}
              animation="quick"
            >
              <Paragraph size="$5" fontWeight="600" color="$salvaje_mango12" ta="center">
                Resident contributors
              </Paragraph>
            </YStack>

            <YStack
              f={1}
              space="$3"
              p="$5"
              bg="$salvaje_bougainvillea3"
              borderRadius="$4"
              borderWidth={2}
              borderColor="$salvaje_bougainvillea7"
              hoverStyle={{
                scale: 1.02,
                borderColor: "$salvaje_bougainvillea9",
              }}
              animation="quick"
            >
              <Paragraph size="$5" fontWeight="600" color="$salvaje_bougainvillea12" ta="center">
                Program participants
              </Paragraph>
            </YStack>

            <YStack
              f={1}
              space="$3"
              p="$5"
              bg="$salvaje_ocean4"
              borderRadius="$4"
              borderWidth={2}
              borderColor="$salvaje_ocean8"
              hoverStyle={{
                scale: 1.02,
                borderColor: "$salvaje_ocean10",
              }}
              animation="quick"
            >
              <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean12" ta="center">
                Remote supporters
              </Paragraph>
            </YStack>
          </XStack>
        </YStack>

        <XStack
          gap="$4"
          mt="$6"
          $sm={{
            flexDirection: 'column',
            ai: 'center',
            gap: '$3',
          }}
        >
          <Button
            size="$4"
            theme="salvaje_mango"
            fontFamily="$body"
            fontWeight="600"
            pressStyle={{
              scale: 0.97,
            }}
            animation="quick"
            hoverStyle={{
              opacity: 0.9,
              scale: 1.02,
            }}
          >
            Learn About Governance
          </Button>
        </XStack>
      </YStack>
    </YStack>
  )
}
