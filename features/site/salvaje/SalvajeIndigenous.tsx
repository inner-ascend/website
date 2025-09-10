import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '../home/HomeHeaders'

export function SalvajeIndigenous() {
  return (
    <YStack space="$6" mb="$8" id="indigenous">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Indigenous Integration
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={800} als="center" $sm={{ size: '$5' }}>
          Ancient Wisdom, Modern Times
        </HomeH3>
      </YStack>

      <YStack space="$4" ai="center" maw={900} als="center">
        <Paragraph size="$6" ta="center" theme="alt1" $sm={{ size: '$5' }}>
          We commit to reciprocal relationships with local indigenous communities. Our approach: respect, fair exchange, and honoring indigenous sovereignty.
        </Paragraph>

        {/* Core Principles */}
        <YStack space="$6" mt="$8" width="100%">
          <HomeH3 ta="center" $sm={{ size: '$6' }}>
            Core Principles
          </HomeH3>
          
          <XStack
            gap="$6"
            width="100%"
            $sm={{
              flexDirection: 'column',
              gap: '$6',
            }}
          >
            {/* Employment */}
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
                    💼
                  </Paragraph>
                </YStack>
              </YStack>
              <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean11" ta="center" fontFamily="$heading">
                Employment
              </Paragraph>
              <Paragraph size="$4" theme="alt1" ta="center" lineHeight={1.5}>
                Employment for local community
              </Paragraph>
            </YStack>

            {/* Free Workshops */}
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
                    🎓
                  </Paragraph>
                </YStack>
              </YStack>
              <Paragraph size="$5" fontWeight="600" color="$salvaje_mango11" ta="center" fontFamily="$heading">
                Free Workshops
              </Paragraph>
              <Paragraph size="$4" theme="alt1" ta="center" lineHeight={1.5}>
                Free workshops for indigenous participants
              </Paragraph>
            </YStack>

            {/* Educational Offerings */}
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
                    📚
                  </Paragraph>
                </YStack>
              </YStack>
              <Paragraph size="$5" fontWeight="600" color="$salvaje_bougainvillea11" ta="center" fontFamily="$heading">
                Educational Offerings
              </Paragraph>
              <Paragraph size="$4" theme="alt1" ta="center" lineHeight={1.5}>
                Educational offerings for children & adults
              </Paragraph>
            </YStack>
          </XStack>

          {/* Community Fundraisers */}
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
                  🤝
                </Paragraph>
              </YStack>
            </YStack>
            <Paragraph size="$5" fontWeight="600" color="$salvaje_ocean12" ta="center" fontFamily="$heading">
              Community Fundraisers
            </Paragraph>
            <Paragraph size="$4" theme="alt1" ta="center" lineHeight={1.5}>
              Community fundraisers supporting local initiatives
            </Paragraph>
          </YStack>
        </YStack>

        {/* Ceremonial Practices */}
        <YStack space="$6" mt="$10" width="100%">
          <HomeH3 ta="center" $sm={{ size: '$6' }}>
            Ceremonial Practices
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
                Land ceremonies
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
                Seasonal celebrations
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
                Rites of passage
              </Paragraph>
            </YStack>

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
                Gratitude rituals
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
            Learn More About Our Approach
          </Button>
        </XStack>
      </YStack>
    </YStack>
  )
}
