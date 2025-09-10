import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '../home/HomeHeaders'

export function SalvajePrograms() {
  return (
    <YStack space="$6" mb="$8" id="programs">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Programs
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          Educational, healing, and regenerative programs designed to cultivate skills and wisdom
        </HomeH3>
      </YStack>

      <YStack space="$4" ai="center" maw={800} als="center">
        <Paragraph size="$6" ta="center" theme="alt1" $sm={{ size: '$5' }}>
          Educational, healing, and regenerative programs designed to cultivate skills and wisdom.
        </Paragraph>

        {/* 4-column card grid */}
        <XStack
          gap="$4"
          mt="$6"
          width="100%"
          $sm={{
            flexDirection: 'column',
            gap: '$4',
          }}
        >
          {/* Educational Curriculums */}
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
                  📚
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean11" ta="center">
              Permaculture
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center">
              Sustainable agriculture, natural building, and ecological design.
            </Paragraph>
          </YStack>

          {/* Transformational Experiences */}
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
                  🌱
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_mango11" ta="center">
              Health & Well-being
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center">
              Nervous system health, emotional intelligence, and holistic healing.
            </Paragraph>
          </YStack>

          {/* Healing Modalities */}
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
                  🧘
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_bougainvillea11" ta="center">
              Traditional Skills
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center">
              Ancestral healing, traditional crafts, and community resilience practices.
            </Paragraph>
          </YStack>

          {/* Community Resilience */}
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
                  🤝
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean12" ta="center">
              Community Resilience
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center">
              Building strong, supportive communities and mutual aid networks.
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
            theme="salvaje_bougainvillea"
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
            Explore Programs
          </Button>
        </XStack>
      </YStack>
    </YStack>
  )
}
