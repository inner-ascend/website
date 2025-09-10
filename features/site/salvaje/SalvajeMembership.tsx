import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '../home/HomeHeaders'

export function SalvajeMembership() {
  return (
    <YStack space="$6" mb="$8" id="participate">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Choose Your Path
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          Four ways to participate in the regenerative sanctuary
        </HomeH3>
      </YStack>

      <YStack space="$4" ai="center" maw={900} als="center">
        <Paragraph size="$6" ta="center" theme="alt1" $sm={{ size: '$5' }}>
          All contributions are sacred investments into Earth restoration, never speculative real estate. Each path offers unique benefits and deeper community connection.
        </Paragraph>

        {/* 4 participation cards */}
        <XStack
          gap="$4"
          mt="$6"
          width="100%"
          $sm={{
            flexDirection: 'column',
            gap: '$4',
          }}
        >
          {/* Resident */}
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
            <YStack ai="center" space="$2" mb="$3">
              <YStack
                width={40}
                height={40}
                bg="$salvaje_ocean9"
                borderRadius="$10"
                ai="center"
                jc="center"
              >
                <Paragraph size="$3" color="white" fontWeight="700">
                  🏠
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean11" ta="center">
              Resident
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center">
              Live on the land, co-steward daily life.
            </Paragraph>
          </YStack>

          {/* Founding Steward */}
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
            <YStack ai="center" space="$2" mb="$3">
              <YStack
                width={40}
                height={40}
                bg="$salvaje_mango9"
                borderRadius="$10"
                ai="center"
                jc="center"
              >
                <Paragraph size="$3" color="white" fontWeight="700">
                  🌟
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_mango11" ta="center">
              Founding Steward
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center">
              Contribute to land & shared spaces; receive recognition, lifetime access.
            </Paragraph>
          </YStack>

          {/* Volunteer / Work-Trade */}
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
            <YStack ai="center" space="$2" mb="$3">
              <YStack
                width={40}
                height={40}
                bg="$salvaje_bougainvillea9"
                borderRadius="$10"
                ai="center"
                jc="center"
              >
                <Paragraph size="$3" color="white" fontWeight="700">
                  🤝
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_bougainvillea11" ta="center">
              Volunteer / Work-Trade
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center">
              Help with building, gardens, hospitality.
            </Paragraph>
          </YStack>

          {/* Retreat Guest */}
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
            <YStack ai="center" space="$2" mb="$3">
              <YStack
                width={40}
                height={40}
                bg="$salvaje_ocean10"
                borderRadius="$10"
                ai="center"
                jc="center"
              >
                <Paragraph size="$3" color="white" fontWeight="700">
                  🧘
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean12" ta="center">
              Retreat Guest
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center">
              Join short-term regenerative hospitality and courses.
            </Paragraph>
          </YStack>
        </XStack>

        <XStack
          gap="$4"
          mt="$8"
          $sm={{
            flexDirection: 'column',
            ai: 'center',
            gap: '$3',
          }}
        >
          <Button
            size="$5"
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
            Apply to Join
          </Button>
          <Button
            size="$5"
            theme="salvaje_ocean"
            fontFamily="$body"
            fontWeight="600"
            borderWidth={2}
            borderColor="$salvaje_ocean9"
            pressStyle={{
              scale: 0.97,
            }}
            animation="quick"
            hoverStyle={{
              opacity: 0.9,
              scale: 1.02,
            }}
          >
            Download Prospectus
          </Button>
        </XStack>
      </YStack>
    </YStack>
  )
}
