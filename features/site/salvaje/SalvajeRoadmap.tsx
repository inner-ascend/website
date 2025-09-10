import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '../home/HomeHeaders'

export function SalvajeRoadmap() {
  return (
    <YStack space="$6" mb="$8" id="roadmap">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Our Three-Year Arc
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          Clear milestones toward regenerative community
        </HomeH3>
      </YStack>

      <YStack space="$4" ai="center" maw={900} als="center">
        <Paragraph size="$6" ta="center" theme="alt1" $sm={{ size: '$5' }}>
          From land acquisition to full retreat center operations, each year brings deeper community connection and expanded impact.
        </Paragraph>

        {/* Horizontal 3-step progress bar */}
        <XStack
          gap="$4"
          mt="$8"
          width="100%"
          $sm={{
            flexDirection: 'column',
            gap: '$4',
          }}
        >
          {/* Year 1 - Foundation */}
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
            position="relative"
          >
            <YStack ai="center" space="$2" mb="$3">
              <YStack
                width={50}
                height={50}
                bg="$salvaje_mango9"
                borderRadius="$10"
                ai="center"
                jc="center"
              >
                <Paragraph size="$4" color="white" fontWeight="700">
                  1
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_mango11" ta="center">
              Year 1 – Foundation
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center">
              Secure land, build first eco-homes, launch retreats.
            </Paragraph>
          </YStack>

          {/* Year 2 - Expansion */}
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
            position="relative"
          >
            <YStack ai="center" space="$2" mb="$3">
              <YStack
                width={50}
                height={50}
                bg="$salvaje_bougainvillea9"
                borderRadius="$10"
                ai="center"
                jc="center"
              >
                <Paragraph size="$4" color="white" fontWeight="700">
                  2
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_bougainvillea11" ta="center">
              Year 2 – Expansion
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center">
              Launch academy, continue construction, broaden programs.
            </Paragraph>
          </YStack>

          {/* Year 3 - Maturity */}
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
            position="relative"
          >
            <YStack ai="center" space="$2" mb="$3">
              <YStack
                width={50}
                height={50}
                bg="$salvaje_ocean9"
                borderRadius="$10"
                ai="center"
                jc="center"
              >
                <Paragraph size="$4" color="white" fontWeight="700">
                  3
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean11" ta="center">
              Year 3 – Maturity
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center">
              Full retreat operations, expanded regeneration, flourishing community.
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
            Follow the Journey
          </Button>
        </XStack>
      </YStack>
    </YStack>
  )
}
