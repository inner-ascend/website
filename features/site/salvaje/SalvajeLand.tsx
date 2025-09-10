import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '../home/HomeHeaders'

export function SalvajeLand() {
  return (
    <YStack space="$6" mb="$8" id="land">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          The Land
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          The Land Calling Us Home
        </HomeH3>
      </YStack>

      {/* Stats counters overlay */}
      <XStack
        jc="center"
        gap="$8"
        mb="$6"
        $sm={{
          flexDirection: 'column',
          gap: '$4',
        }}
      >
        <YStack ai="center" space="$2">
          <Paragraph size="$8" fontWeight="700" color="$salvaje_ocean11">
            12
          </Paragraph>
          <Paragraph size="$3" theme="alt2" ta="center">
            acres
          </Paragraph>
        </YStack>
        <YStack ai="center" space="$2">
          <Paragraph size="$8" fontWeight="700" color="$salvaje_ocean11">
            20
          </Paragraph>
          <Paragraph size="$3" theme="alt2" ta="center">
            eco-homes
          </Paragraph>
        </YStack>
        <YStack ai="center" space="$2">
          <Paragraph size="$8" fontWeight="700" color="$salvaje_ocean11">
            40
          </Paragraph>
          <Paragraph size="$3" theme="alt2" ta="center">
            residents capacity
          </Paragraph>
        </YStack>
      </XStack>

      {/* Split layout: gallery on left, text on right */}
      <XStack
        gap="$8"
        $sm={{
          flexDirection: 'column',
          gap: '$6',
        }}
      >
        {/* Left - Photo gallery */}
        <YStack f={1} space="$3">
          <YStack
            height={200}
            bg="$salvaje_ocean3"
            borderRadius="$4"
            borderWidth={2}
            borderColor="$salvaje_ocean6"
            ai="center"
            jc="center"
          >
            <Paragraph size="$4" theme="alt2" ta="center">
              Aerial view of land
            </Paragraph>
          </YStack>
          <XStack gap="$3">
            <YStack
              f={1}
              height={120}
              bg="$salvaje_ocean3"
              borderRadius="$4"
              borderWidth={2}
              borderColor="$salvaje_ocean6"
              ai="center"
              jc="center"
            >
              <Paragraph size="$3" theme="alt2" ta="center">
                Mangroves
              </Paragraph>
            </YStack>
            <YStack
              f={1}
              height={120}
              bg="$salvaje_ocean3"
              borderRadius="$4"
              borderWidth={2}
              borderColor="$salvaje_ocean6"
              ai="center"
              jc="center"
            >
              <Paragraph size="$3" theme="alt2" ta="center">
                Sierra Madre
              </Paragraph>
            </YStack>
          </XStack>
        </YStack>

        {/* Right - Text content */}
        <YStack f={1} space="$4">
          <Paragraph size="$6" theme="alt1" $sm={{ size: '$5' }}>
            The project is rooted in Oaxaca, Mexico — a land of resistance, indigenous rights, and rich cultural history. The property includes forests, fertile valleys, streams, and panoramic mountain views.
          </Paragraph>

          {/* Key Facts organized into 3 groups */}
          <YStack space="$6" mt="$6" width="100%">
            {/* Topography & Access */}
            <YStack space="$3">
              <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean11" fontFamily="$heading">
                Topography & Access
              </Paragraph>
              <YStack space="$2" pl="$3">
                <XStack ai="center" gap="$3">
                  <YStack width={6} height={6} bg="$salvaje_ocean9" borderRadius="$10" />
                  <Paragraph size="$4" theme="alt1">12 acres diverse terrain</Paragraph>
                </XStack>
                <XStack ai="center" gap="$3">
                  <YStack width={6} height={6} bg="$salvaje_ocean9" borderRadius="$10" />
                  <Paragraph size="$4" theme="alt1">Flat & hilly areas</Paragraph>
                </XStack>
                <XStack ai="center" gap="$3">
                  <YStack width={6} height={6} bg="$salvaje_ocean9" borderRadius="$10" />
                  <Paragraph size="$4" theme="alt1">Year-round water access</Paragraph>
                </XStack>
                <XStack ai="center" gap="$3">
                  <YStack width={6} height={6} bg="$salvaje_ocean9" borderRadius="$10" />
                  <Paragraph size="$4" theme="alt1">Private road</Paragraph>
                </XStack>
              </YStack>
            </YStack>

            {/* Location & Community */}
            <YStack space="$3">
              <Paragraph size="$5" fontWeight="600" color="$salvaje_mango11" fontFamily="$heading">
                Location & Community
              </Paragraph>
              <YStack space="$2" pl="$3">
                <XStack ai="center" gap="$3">
                  <YStack width={6} height={6} bg="$salvaje_mango9" borderRadius="$10" />
                  <Paragraph size="$4" theme="alt1">Near Mazunte, Oaxaca</Paragraph>
                </XStack>
                <XStack ai="center" gap="$3">
                  <YStack width={6} height={6} bg="$salvaje_mango9" borderRadius="$10" />
                  <Paragraph size="$4" theme="alt1">1 hr to international airport</Paragraph>
                </XStack>
                <XStack ai="center" gap="$3">
                  <YStack width={6} height={6} bg="$salvaje_mango9" borderRadius="$10" />
                  <Paragraph size="$4" theme="alt1">Connected by highway</Paragraph>
                </XStack>
                <XStack ai="center" gap="$3">
                  <YStack width={6} height={6} bg="$salvaje_mango9" borderRadius="$10" />
                  <Paragraph size="$4" theme="alt1">Vibrant, eclectic local network</Paragraph>
                </XStack>
              </YStack>
            </YStack>

            {/* Development Potential */}
            <YStack space="$3">
              <Paragraph size="$5" fontWeight="600" color="$salvaje_bougainvillea11" fontFamily="$heading">
                Development Potential
              </Paragraph>
              <YStack space="$2" pl="$3">
                <XStack ai="center" gap="$3">
                  <YStack width={6} height={6} bg="$salvaje_bougainvillea9" borderRadius="$10" />
                  <Paragraph size="$4" theme="alt1">Space for 20 eco-homes</Paragraph>
                </XStack>
                <XStack ai="center" gap="$3">
                  <YStack width={6} height={6} bg="$salvaje_bougainvillea9" borderRadius="$10" />
                  <Paragraph size="$4" theme="alt1">Comfortable for 40 residents</Paragraph>
                </XStack>
                <XStack ai="center" gap="$3">
                  <YStack width={6} height={6} bg="$salvaje_bougainvillea9" borderRadius="$10" />
                  <Paragraph size="$4" theme="alt1">Rich soil & electricity access</Paragraph>
                </XStack>
                <XStack ai="center" gap="$3">
                  <YStack width={6} height={6} bg="$salvaje_bougainvillea9" borderRadius="$10" />
                  <Paragraph size="$4" theme="alt1">One of the last intact parcels</Paragraph>
                </XStack>
              </YStack>
            </YStack>
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
              theme="salvaje_ocean"
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
              View the Land Gallery
            </Button>
          </XStack>
        </YStack>
      </XStack>
    </YStack>
  )
}
