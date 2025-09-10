import { Button, H1, Paragraph, XStack, YStack } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'

export function SalvajeHero() {
  return (
    <YStack pos="relative" height={700} $sm={{ height: 500 }} id="hero">
      {/* Background image */}
      <YStack
        pos="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        style={{
          backgroundImage: 'url(/images/hero/oaxaca-paradise.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay */}
      <YStack
        fullscreen
        zi={1}
        style={{
          background:
            'linear-gradient(180deg, rgba(15,76,92,0.6) 0%, rgba(15,76,92,0.3) 50%, rgba(15,76,92,0.7) 100%), linear-gradient(0deg, rgba(245,166,35,0.1) 0%, rgba(0,0,0,0) 100%)',
        }}
      />
      {/* Content */}
      <YStack zi={2} py="$12" space="$6" ai="center" jc="center" f={1}>
        <ContainerLarge space="$4">
            <H1
              size="$12"
              ta="center"
              className="hero-text"
              color="white"
              fontWeight="700"
              fontFamily="$heading"
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.4)',
              }}
              $sm={{ size: '$10' }}
            >
              Regenerative Village School
            </H1>
            <Paragraph
              size="$8"
              ta="center"
              color="white"
              o={0.95}
              fontWeight="500"
              fontFamily="$body"
              maw={900}
              als="center"
              style={{
                textShadow: '0 1px 8px rgba(0,0,0,0.3)',
              }}
              $sm={{ size: '$6' }}
            >
              Creation of an intentional regenerative community for human integrity and sovereign living. A healing village, real-life school, and educational center dedicated to protecting freedom, bodily autonomy, and living in harmony with nature.
            </Paragraph>
          
          {/* Icon bullets */}
          <XStack
            jc="center"
            gap="$6"
            mt="$4"
            $sm={{
              flexDirection: 'column',
              gap: '$3',
            }}
          >
            <XStack ai="center" gap="$2">
              <YStack width={8} height={8} bg="$mango9" borderRadius="$10" />
              <Paragraph size="$4" color="white" fontWeight="500">
                12 acres near Mazunte
              </Paragraph>
            </XStack>
            <XStack ai="center" gap="$2">
              <YStack width={8} height={8} bg="$mango9" borderRadius="$10" />
              <Paragraph size="$4" color="white" fontWeight="500">
                20 eco-homes planned
              </Paragraph>
            </XStack>
            <XStack ai="center" gap="$2">
              <YStack width={8} height={8} bg="$mango9" borderRadius="$10" />
              <Paragraph size="$4" color="white" fontWeight="500">
                Year-round education & retreats
              </Paragraph>
            </XStack>
          </XStack>

          <XStack
            jc="center"
            mt="$8"
            gap="$4"
            $sm={{
              flexDirection: 'column',
              ai: 'center',
              gap: '$3',
              maxWidth: 200,
              als: 'center',
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
                Join Our Community
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
                Explore Our Vision
              </Button>
              <Button
                size="$5"
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
                Begin the Journey
              </Button>
          </XStack>
        </ContainerLarge>
      </YStack>
    </YStack>
  )
}
