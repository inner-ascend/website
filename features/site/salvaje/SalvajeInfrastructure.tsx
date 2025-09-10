import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '../home/HomeHeaders'

export function SalvajeInfrastructure() {
  return (
    <YStack space="$6" mb="$8" id="infrastructure">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Living Lightly, Building for Generations
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          Phase 1 creates eco-cabañas, family homes, a communal kitchen, a ceremonial shala, volunteer dormitories, natural dip-in pools, and essential systems for solar, water capture, and waste management — all built with natural, local, regenerative materials.
        </HomeH3>
      </YStack>

      {/* Interactive site plan */}
      <YStack space="$4" ai="center" maw={900} als="center">
        <YStack
          width="100%"
          height={400}
          bg="$salvaje_ocean2"
          borderRadius="$4"
          borderWidth={2}
          borderColor="$salvaje_ocean6"
          ai="center"
          jc="center"
          position="relative"
          $sm={{ height: 300 }}
        >
          {/* Site plan placeholder with hoverable pins */}
          <Paragraph size="$4" theme="alt2" ta="center" mb="$4">
            Interactive Site Plan
          </Paragraph>
          
          {/* Hoverable infrastructure points */}
          <XStack gap="$6" $sm={{ flexDirection: 'column', gap: '$3' }}>
            <YStack
              ai="center"
              space="$2"
              p="$3"
              bg="$salvaje_mango3"
              borderRadius="$3"
              borderWidth={1}
              borderColor="$salvaje_mango6"
              hoverStyle={{
                scale: 1.05,
                bg: "$salvaje_mango4",
              }}
              animation="quick"
              cursor="pointer"
            >
              <YStack width={12} height={12} bg="$salvaje_mango9" borderRadius="$10" />
              <Paragraph size="$2" fontWeight="600" color="$salvaje_mango11">
                Eco-cabañas
              </Paragraph>
            </YStack>
            
            <YStack
              ai="center"
              space="$2"
              p="$3"
              bg="$salvaje_bougainvillea3"
              borderRadius="$3"
              borderWidth={1}
              borderColor="$salvaje_bougainvillea6"
              hoverStyle={{
                scale: 1.05,
                bg: "$salvaje_bougainvillea4",
              }}
              animation="quick"
              cursor="pointer"
            >
              <YStack width={12} height={12} bg="$salvaje_bougainvillea9" borderRadius="$10" />
              <Paragraph size="$2" fontWeight="600" color="$salvaje_bougainvillea11">
                Communal Kitchen
              </Paragraph>
            </YStack>
            
            <YStack
              ai="center"
              space="$2"
              p="$3"
              bg="$salvaje_ocean3"
              borderRadius="$3"
              borderWidth={1}
              borderColor="$salvaje_ocean6"
              hoverStyle={{
                scale: 1.05,
                bg: "$salvaje_ocean4",
              }}
              animation="quick"
              cursor="pointer"
            >
              <YStack width={12} height={12} bg="$salvaje_ocean9" borderRadius="$10" />
              <Paragraph size="$2" fontWeight="600" color="$salvaje_ocean11">
                Ceremonial Shala
              </Paragraph>
            </YStack>
          </XStack>
        </YStack>

        {/* Secondary photo strip */}
        <XStack
          gap="$3"
          mt="$4"
          width="100%"
          $sm={{
            flexDirection: 'column',
            gap: '$3',
          }}
        >
          <YStack
            f={1}
            height={120}
            bg="$salvaje_mango3"
            borderRadius="$4"
            borderWidth={2}
            borderColor="$salvaje_mango6"
            ai="center"
            jc="center"
          >
            <Paragraph size="$3" theme="alt2" ta="center">
              Eco-cabaña
            </Paragraph>
          </YStack>
          <YStack
            f={1}
            height={120}
            bg="$salvaje_bougainvillea3"
            borderRadius="$4"
            borderWidth={2}
            borderColor="$salvaje_bougainvillea6"
            ai="center"
            jc="center"
          >
            <Paragraph size="$3" theme="alt2" ta="center">
              Communal Kitchen
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
              Natural Pools
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
            See the Site Plan
          </Button>
        </XStack>
      </YStack>
    </YStack>
  )
}
