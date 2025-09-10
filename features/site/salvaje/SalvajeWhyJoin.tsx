import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '../home/HomeHeaders'

export function SalvajeWhyJoin() {
  return (
    <YStack space="$6" mb="$8" id="why-now">
      {/* Badge */}
      <XStack jc="center" mb="$4">
        <YStack
          px="$4"
          py="$2"
          bg="$salvaje_mango9"
          borderRadius="$10"
          borderWidth={2}
          borderColor="$salvaje_mango11"
        >
          <Paragraph size="$3" fontWeight="700" color="white">
            Founding Phase 2025
          </Paragraph>
        </YStack>
      </XStack>

      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          The Founding Circle Is Forming
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          We are laying foundations: planting trees, raising eco-structures, and welcoming the first stewards and residents.
        </HomeH3>
      </YStack>

      {/* 2-column layout */}
      <XStack
        gap="$8"
        $sm={{
          flexDirection: 'column',
          gap: '$6',
        }}
      >
        {/* Left column - Text */}
        <YStack f={1} space="$4">
          <Paragraph size="$6" theme="alt1" $sm={{ size: '$5' }}>
            This is a chance to be part of the sanctuary from the beginning — shaping culture, holding the land, and co-creating a place of truth and regeneration.
          </Paragraph>

          <YStack space="$3" mt="$4">
            <XStack ai="center" gap="$3">
              <YStack width={8} height={8} bg="$salvaje_mango9" borderRadius="$10" />
              <Paragraph size="$4" theme="alt1">
                Limited early homesites
              </Paragraph>
            </XStack>
            <XStack ai="center" gap="$3">
              <YStack width={8} height={8} bg="$salvaje_mango9" borderRadius="$10" />
              <Paragraph size="$4" theme="alt1">
                Seasonal residencies
              </Paragraph>
            </XStack>
            <XStack ai="center" gap="$3">
              <YStack width={8} height={8} bg="$salvaje_mango9" borderRadius="$10" />
              <Paragraph size="$4" theme="alt1">
                Volunteer roles now open
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
              See How to Join
            </Button>
          </XStack>
        </YStack>

        {/* Right column - Image placeholder */}
        <YStack f={1} ai="center" jc="center">
          <YStack
            width="100%"
            height={300}
            bg="$salvaje_ocean3"
            borderRadius="$4"
            borderWidth={2}
            borderColor="$salvaje_ocean6"
            ai="center"
            jc="center"
            $sm={{ height: 200 }}
          >
            <Paragraph size="$4" theme="alt2" ta="center">
              Image: People planting trees and first builds
            </Paragraph>
          </YStack>
        </YStack>
      </XStack>

      {/* Highlight bar */}
      <YStack
        mt="$6"
        p="$4"
        bg="$salvaje_bougainvillea3"
        borderRadius="$4"
        borderWidth={1}
        borderColor="$salvaje_bougainvillea6"
      >
        <Paragraph size="$4" ta="center" fontWeight="600" color="$salvaje_bougainvillea11">
          Limited spots available for founding stewards. Early supporters receive priority access and lifetime recognition.
        </Paragraph>
      </YStack>
    </YStack>
  )
}
