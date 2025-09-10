import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '../home/HomeHeaders'

export function SalvajeImpact() {
  return (
    <YStack space="$6" mb="$8" id="impact">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Regenerating Land, Uplifting Community
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          Our commitment to Oaxaca communities and Earth healing
        </HomeH3>
      </YStack>

      {/* Background image placeholder */}
      <YStack
        pos="relative"
        width="100%"
        height={300}
        bg="$salvaje_mango3"
        borderRadius="$4"
        borderWidth={2}
        borderColor="$salvaje_mango6"
        ai="center"
        jc="center"
        mb="$6"
        $sm={{ height: 200 }}
      >
        <Paragraph size="$4" theme="alt2" ta="center">
          Background: Local collaboration workshop
        </Paragraph>
      </YStack>

      <YStack space="$4" ai="center" maw={800} als="center">
        <Paragraph size="$6" ta="center" theme="alt1" $sm={{ size: '$5' }}>
          Through permaculture, reforestation, and cultural exchange, we're creating jobs for local communities while restoring degraded ecosystems.
        </Paragraph>

        {/* Three icon-bullets with animated counters */}
        <XStack
          gap="$8"
          mt="$6"
          $sm={{
            flexDirection: 'column',
            gap: '$4',
          }}
        >
          <YStack ai="center" space="$2">
            <YStack
              width={60}
              height={60}
              bg="$salvaje_mango9"
              borderRadius="$10"
              ai="center"
              jc="center"
              mb="$2"
            >
              <Paragraph size="$6" color="white" fontWeight="700">
                🌱
              </Paragraph>
            </YStack>
            <Paragraph size="$4" theme="alt1" ta="center">
              Restoring ecosystems through permaculture & reforestation
            </Paragraph>
          </YStack>

          <YStack ai="center" space="$2">
            <YStack
              width={60}
              height={60}
              bg="$salvaje_bougainvillea9"
              borderRadius="$10"
              ai="center"
              jc="center"
              mb="$2"
            >
              <Paragraph size="$6" color="white" fontWeight="700">
                👥
              </Paragraph>
            </YStack>
            <Paragraph size="$4" theme="alt1" ta="center">
              Creating 5–20 local jobs by Year 3
            </Paragraph>
          </YStack>

          <YStack ai="center" space="$2">
            <YStack
              width={60}
              height={60}
              bg="$salvaje_ocean9"
              borderRadius="$10"
              ai="center"
              jc="center"
              mb="$2"
            >
              <Paragraph size="$6" color="white" fontWeight="700">
                🤝
              </Paragraph>
            </YStack>
            <Paragraph size="$4" theme="alt1" ta="center">
              Free workshops and cultural exchanges for indigenous neighbors
            </Paragraph>
          </YStack>
        </XStack>

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
            See Impact Plan
          </Button>
        </XStack>
      </YStack>
    </YStack>
  )
}
