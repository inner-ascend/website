import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '../home/HomeHeaders'

export function SalvajeSocialProof() {
  return (
    <YStack space="$6" mb="$8" id="proof">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Trusted by Stewards & Allies
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          Join a network of committed regenerators
        </HomeH3>
      </YStack>

      <YStack space="$4" ai="center" maw={800} als="center">
        <Paragraph size="$6" ta="center" theme="alt1" $sm={{ size: '$5' }}>
          Our founding stewards include permaculture experts, healing practitioners, and community leaders dedicated to Earth restoration.
        </Paragraph>

        {/* Testimonial carousel */}
        <YStack space="$4" mt="$6" width="100%">
          <YStack space="$3" p="$5" bg="$salvaje_ocean2" borderRadius="$4" borderWidth={2} borderColor="$salvaje_ocean6">
            <Paragraph size="$4" theme="alt1" fontStyle="italic" ta="center">
              "This project is the future of regenerative living."
            </Paragraph>
            <Paragraph size="$3" theme="alt2" fontWeight="500" ta="center">
              — Supporter
            </Paragraph>
          </YStack>

          <YStack space="$3" p="$5" bg="$salvaje_mango2" borderRadius="$4" borderWidth={2} borderColor="$salvaje_mango6">
            <Paragraph size="$4" theme="alt1" fontStyle="italic" ta="center">
              "Proyecto Salvaje represents everything I've dreamed of for regenerative community living. The vision is clear, the land is sacred, and the people are committed to true stewardship."
            </Paragraph>
            <Paragraph size="$3" theme="alt2" fontWeight="500" ta="center">
              — Maria Santos, Permaculture Designer
            </Paragraph>
          </YStack>

          <YStack space="$3" p="$5" bg="$salvaje_bougainvillea2" borderRadius="$4" borderWidth={2} borderColor="$salvaje_bougainvillea6">
            <Paragraph size="$4" theme="alt1" fontStyle="italic" ta="center">
              "This isn't just another retreat center. It's a living laboratory for human sovereignty and Earth restoration. I'm honored to be part of the founding circle."
            </Paragraph>
            <Paragraph size="$3" theme="alt2" fontWeight="500" ta="center">
              — Dr. Alejandro Rivera, Healing Practitioner
            </Paragraph>
          </YStack>
        </YStack>

        {/* Impact stats counters */}
        <XStack
          gap="$8"
          mt="$6"
          $sm={{
            flexDirection: 'column',
            gap: '$4',
          }}
        >
          <YStack ai="center" space="$2">
            <Paragraph size="$8" fontWeight="700" color="$salvaje_mango11">
              12
            </Paragraph>
            <Paragraph size="$3" theme="alt2" ta="center">
              Founding Stewards
            </Paragraph>
          </YStack>
          <YStack ai="center" space="$2">
            <Paragraph size="$8" fontWeight="700" color="$salvaje_bougainvillea11">
              5
            </Paragraph>
            <Paragraph size="$3" theme="alt2" ta="center">
              Partner Organizations
            </Paragraph>
          </YStack>
          <YStack ai="center" space="$2">
            <Paragraph size="$8" fontWeight="700" color="$salvaje_ocean11">
              100%
            </Paragraph>
            <Paragraph size="$3" theme="alt2" ta="center">
              Regenerative Focus
            </Paragraph>
          </YStack>
        </XStack>

        {/* Partner logos placeholder */}
        <YStack
          mt="$6"
          p="$4"
          bg="$salvaje_ocean2"
          borderRadius="$4"
          borderWidth={1}
          borderColor="$salvaje_ocean6"
          width="100%"
          ai="center"
          jc="center"
        >
          <Paragraph size="$3" theme="alt2" ta="center">
            Partner Organization Logos
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
            Meet the Team
          </Button>
        </XStack>
      </YStack>
    </YStack>
  )
}
