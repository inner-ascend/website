import { memo } from 'react'
import { YStack, XStack, Button, Text, H1, H2 } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { Link } from '~/components/Link'

export const MexicoHero = memo(() => {
  return (
    <YStack
      id="hero"
      pos="relative"
      height={700}
      $sm={{ height: 500 }}
      bg="linear-gradient(135deg, $green2 0%, $blue2 100%)"
    >
      {/* Background Pattern */}
      <YStack
        pos="absolute"
        fullscreen
        opacity={0.1}
        style={{
          backgroundImage: 'url(/grain.svg)',
          backgroundSize: '200px 200px',
        }}
      />
      
      <ContainerLarge>
        <YStack
          f={1}
          jc="center"
          ai="center"
          space="$8"
          py="$12"
          $sm={{ py: '$8', space: '$6' }}
        >
          <YStack space="$4" ai="center" ta="center" maxWidth={800}>
            <H1
              fontSize="$10"
              fontWeight="700"
              color="$color"
              ta="center"
              $sm={{ fontSize: '$8' }}
            >
              Regenerative Village School
            </H1>
            
            <H2
              fontSize="$6"
              fontWeight="400"
              color="$color"
              ta="center"
              lineHeight="$1"
              $sm={{ fontSize: '$5' }}
            >
              Creation of an intentional regenerative community for human integrity and sovereign living.
            </H2>
            
            <Text
              fontSize="$5"
              color="$color"
              ta="center"
              lineHeight="$1"
              maxWidth={600}
              $sm={{ fontSize: '$4' }}
            >
              A healing village, real-life school, and educational center dedicated to protecting freedom, bodily autonomy, and living in harmony with nature.
            </Text>
          </YStack>

          <XStack
            space="$4"
            ai="center"
            $sm={{ flexDirection: 'column', space: '$3' }}
          >
            <Link href="#join">
              <Button
                size="$5"
                bg="#2E7D32"
                color="white"
                fontWeight="600"
                borderRadius="$3"
                hoverStyle={{ 
                  bg: '#256628',
                  scale: 1.05
                }}
                pressStyle={{ scale: 0.95 }}
                animation="bouncy"
                $sm={{ width: '100%' }}
              >
                Join Our Community
              </Button>
            </Link>
            
            <Link href="#vision">
              <Button
                size="$5"
                bg="#E07A5F"
                color="white"
                fontWeight="600"
                borderRadius="$3"
                hoverStyle={{ 
                  bg: '#D2691E',
                  scale: 1.05
                }}
                pressStyle={{ scale: 0.95 }}
                animation="bouncy"
                $sm={{ width: '100%' }}
              >
                Explore Our Vision
              </Button>
            </Link>
            
            <Link href="#programs">
              <Button
                size="$5"
                bg="#3A86FF"
                color="white"
                fontWeight="600"
                borderRadius="$3"
                hoverStyle={{ 
                  bg: '#2563EB',
                  scale: 1.05
                }}
                pressStyle={{ scale: 0.95 }}
                animation="bouncy"
                $sm={{ width: '100%' }}
              >
                Begin the Journey
              </Button>
            </Link>
          </XStack>
        </YStack>
      </ContainerLarge>
    </YStack>
  )
})
