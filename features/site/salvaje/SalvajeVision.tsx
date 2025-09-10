import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '../home/HomeHeaders'

export function SalvajeVision() {
  return (
    <YStack space="$6" mb="$8" id="vision">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Our Vision
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={800} als="center" $sm={{ size: '$5' }}>
          A Regenerative Vision for Sovereign Living
        </HomeH3>
      </YStack>

      <YStack space="$4" ai="center" maw={900} als="center">
        <Paragraph size="$6" ta="center" theme="alt1" $sm={{ size: '$5' }}>
          We are creating an intentional regenerative community dedicated to protecting human integrity and sovereign birthrights: freedom, bodily autonomy, spiritual self-determination, and the right to live in harmony with nature.
        </Paragraph>

        <Paragraph size="$5" ta="center" theme="alt1" $sm={{ size: '$4' }}>
          This is a regenerative, heart-led social project dedicated to future generations and the defense of human integrity. A community that radiates outward to plant seeds of change, rather than isolating itself.
        </Paragraph>

        {/* Vision pillars */}
        <XStack
          gap="$6"
          mt="$8"
          width="100%"
          $sm={{
            flexDirection: 'column',
            gap: '$6',
          }}
        >
          {/* Community-Driven Growth */}
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
              Community-Driven Growth
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center" lineHeight={1.5}>
              Prioritizing equity and mutual support over profit.
            </Paragraph>
          </YStack>

          {/* Human-Centered Healing */}
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
                  🧘
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_mango11" ta="center" fontFamily="$heading">
              Human-Centered Healing
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center" lineHeight={1.5}>
              Focusing on healing and reciprocity with the Earth.
            </Paragraph>
          </YStack>

          {/* Indigenous Wisdom */}
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
                  🌿
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_bougainvillea11" ta="center" fontFamily="$heading">
              Indigenous Wisdom
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center" lineHeight={1.5}>
              Engaging in decolonized, grounded dialogue with indigenous communities.
            </Paragraph>
          </YStack>
        </XStack>

        {/* Sovereignty & Autonomy */}
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
                🦅
              </Paragraph>
            </YStack>
          </YStack>
          <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean12" ta="center" fontFamily="$heading">
            Sovereignty & Autonomy
          </Paragraph>
          <Paragraph size="$4" theme="alt1" ta="center" lineHeight={1.5}>
            Enhancing self-sufficiency and freedom from external control.
          </Paragraph>
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
            Begin the Journey
          </Button>
        </XStack>
      </YStack>
    </YStack>
  )
}
