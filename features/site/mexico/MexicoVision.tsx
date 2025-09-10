import { memo } from 'react'
import { YStack, XStack, Text, H2, H3 } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { TintSection } from '~/features/site/home/TintSection'

export const MexicoVision = memo(() => {
  const visionPoints = [
    {
      title: 'Community-Driven Growth',
      description: 'Prioritizing equity and mutual support over profit.',
      icon: '🌱'
    },
    {
      title: 'Human-Centered Healing',
      description: 'Focusing on healing and reciprocity with the Earth.',
      icon: '💚'
    },
    {
      title: 'Indigenous Wisdom',
      description: 'Engaging in decolonized, grounded dialogue with indigenous communities.',
      icon: '🦅'
    },
    {
      title: 'Sovereignty & Autonomy',
      description: 'Enhancing self-sufficiency and freedom from external control.',
      icon: '🕊️'
    }
  ]

  return (
    <YStack bg="#F8F9FA" py="$12" id="vision">
      <ContainerLarge>
        <YStack space="$8">
          <YStack space="$6" ai="center" ta="center">
            <H2
              fontSize="$8"
              fontWeight="700"
              color="$color"
              ta="center"
              $sm={{ fontSize: '$7' }}
            >
              A Regenerative Vision for Sovereign Living
            </H2>
            
            <YStack space="$4" maxWidth={800}>
              <Text
                fontSize="$5"
                color="$color"
                ta="center"
                lineHeight="$1"
                $sm={{ fontSize: '$4' }}
              >
                We are creating an intentional regenerative community dedicated to protecting human integrity and sovereign birthrights: freedom, bodily autonomy, spiritual self-determination, and the right to live in harmony with nature.
              </Text>
              
              <Text
                fontSize="$4"
                color="$color"
                ta="center"
                lineHeight="$1"
                opacity={0.8}
                $sm={{ fontSize: '$3' }}
              >
                This is a regenerative, heart-led social project dedicated to future generations and the defense of human integrity. A community that radiates outward to plant seeds of change, rather than isolating itself.
              </Text>
            </YStack>
          </YStack>

          <XStack
            space="$3"
            jc="center"
            flexWrap="wrap"
            $md={{ flexDirection: 'column', space: '$2' }}
            $sm={{ flexDirection: 'column', space: '$2' }}
          >
            {visionPoints.map((point, index) => {
              const colors = ['#EAF4F1', '#F4E1D2', '#E8F4FD', '#F0F8E8']
              const bgColor = colors[index % colors.length]
              
              return (
                <YStack
                  key={point.title}
                  space="$4"
                  p="$5"
                  bg={bgColor}
                  borderRadius="$4"
                  width={240}
                  height={240}
                  jc="center"
                  ai="center"
                  $md={{ width: '100%', height: 'auto' }}
                  $sm={{ width: '100%', height: 'auto' }}
                >
                  <XStack space="$2" ai="center">
                    <Text fontSize="$4">{point.icon}</Text>
                    <H3
                      fontSize="$3"
                      fontWeight="600"
                      color="$color"
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {point.title}
                    </H3>
                  </XStack>
                  
                  <Text
                    fontSize="$2"
                    color="$color"
                    lineHeight="$1"
                    opacity={0.8}
                    ta="center"
                  >
                    {point.description}
                  </Text>
                </YStack>
              )
            })}
          </XStack>
        </YStack>
      </ContainerLarge>
    </YStack>
  )
})
