import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '../home/HomeHeaders'

export function SalvajeLand() {
  return (
    <YStack space="$6" mb="$8" id="land">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Mazunte, Oaxaca — Where Mountain Meets Ocean
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          Our 12-acre site lies within a rich ecological corridor, bordered by natural reserves, mangroves, and lagoons.
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
            The land holds old-growth trees, fertile soils, abundant water, and is zoned for 20 eco-homes and ~40 residents — just one hour from an international airport.
          </Paragraph>

          <YStack space="$3" mt="$4">
            <XStack ai="center" gap="$3">
              <YStack width={8} height={8} bg="$salvaje_ocean9" borderRadius="$10" />
              <Paragraph size="$4" theme="alt1">
                Natural reserves and mangroves
              </Paragraph>
            </XStack>
            <XStack ai="center" gap="$3">
              <YStack width={8} height={8} bg="$salvaje_ocean9" borderRadius="$10" />
              <Paragraph size="$4" theme="alt1">
                Old-growth trees and abundant water
              </Paragraph>
            </XStack>
            <XStack ai="center" gap="$3">
              <YStack width={8} height={8} bg="$salvaje_ocean9" borderRadius="$10" />
              <Paragraph size="$4" theme="alt1">
                Perfect permaculture environment
              </Paragraph>
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
