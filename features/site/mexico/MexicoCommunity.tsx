import { memo } from 'react'
import { YStack, XStack, Text, H2, H3 } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { TintSection } from '~/features/site/home/TintSection'

export const MexicoCommunity = memo(() => {
  const coreValues = [
    { name: 'Regeneration', description: 'Healing and restoring the land and community' },
    { name: 'Sovereignty', description: 'Self-determination and autonomy' },
    { name: 'Reciprocity', description: 'Mutual exchange and support' },
    { name: 'Integration', description: 'Holistic approach to living' }
  ]

  const timeline = [
    {
      phase: 'Phase 1 (Now)',
      description: 'Land acquisition, basic infrastructure, founding members'
    },
    {
      phase: 'Year 1',
      description: 'Housing, permaculture, programs'
    },
    {
      phase: 'Year 2',
      description: 'Tech, renewable energy, governance systems'
    },
    {
      phase: 'Year 3',
      description: 'Full village with educational programs & visitor integration'
    }
  ]

  const governance = [
    'Sociocracy (consent-based)',
    'Working Circles (self-organizing teams)',
    'Council Gatherings (community-wide decisions)'
  ]

  const contributionPaths = [
    'Core founding members',
    'Resident contributors',
    'Program participants',
    'Remote supporters'
  ]

  return (
    <YStack bg="#EAF4F1" py="$12" id="community">
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
              Living Together
            </H2>
            
            <Text
              fontSize="$5"
              color="$color"
              ta="center"
              lineHeight="$1"
              maxWidth={800}
              $sm={{ fontSize: '$4' }}
            >
              Our governance combines ancient wisdom with modern design to create resilient, adaptive community structures.
            </Text>
          </YStack>

          {/* Core Values */}
          <YStack space="$6">
            <H3
              fontSize="$6"
              fontWeight="600"
              color="$color"
              ta="center"
              $sm={{ fontSize: '$5' }}
            >
              Core Values
            </H3>
            
            <XStack
              space="$4"
              flexWrap="wrap"
              jc="center"
              $sm={{ flexDirection: 'column' }}
            >
              {coreValues.map((value, index) => {
                const colors = ['#EAF4F1', '#F4E1D2', '#E8F4FD', '#F0F8E8']
                const bgColor = colors[index % colors.length]
                
                return (
                  <YStack
                    key={value.name}
                    space="$3"
                    p="$5"
                    bg={bgColor}
                    borderRadius="$4"
                    borderWidth={0}
                    width={250}
                    $lg={{ width: 250 }}
                    $md={{ width: 220 }}
                    $sm={{ width: '100%' }}
                    elevation="$1"
                    hoverStyle={{
                      elevation: '$3',
                      scale: 1.02
                    }}
                    animation="bouncy"
                  >
                    <Text
                      fontSize="$4"
                      fontWeight="600"
                      color="$color"
                      $sm={{ fontSize: '$3' }}
                    >
                      {value.name}
                    </Text>
                    <Text
                      fontSize="$3"
                      color="$color"
                      opacity={0.8}
                      lineHeight="$1"
                    >
                      {value.description}
                    </Text>
                  </YStack>
                )
              })}
            </XStack>
          </YStack>

          {/* Timeline */}
          <YStack space="$6">
            <H3
              fontSize="$6"
              fontWeight="600"
              color="$color"
              ta="center"
              $sm={{ fontSize: '$5' }}
            >
              Timeline
            </H3>
            
            <YStack space="$4">
              {timeline.map((item, index) => (
                <XStack
                  key={item.phase}
                  space="$4"
                  p="$4"
                  bg="$background"
                  borderRadius="$3"
                  borderWidth={1}
                  borderColor="$borderColor"
                  ai="center"
                >
                  <Text
                    fontSize="$4"
                    fontWeight="600"
                    color="$green9"
                    minWidth={120}
                    $sm={{ fontSize: '$3', minWidth: 100 }}
                  >
                    {item.phase}
                  </Text>
                  <Text
                    fontSize="$4"
                    color="$color"
                    f={1}
                    $sm={{ fontSize: '$3' }}
                  >
                    {item.description}
                  </Text>
                </XStack>
              ))}
            </YStack>
          </YStack>

          {/* Governance & Contribution Paths */}
          <YStack
            space="$6"
            $md={{
              flexDirection: 'row',
              space: '$8'
            }}
          >
            <YStack space="$4" f={1}>
              <H3
                fontSize="$5"
                fontWeight="600"
                color="$color"
                $sm={{ fontSize: '$4' }}
              >
                Governance
              </H3>
              <YStack space="$2">
                {governance.map((item, index) => (
                  <XStack key={index} space="$2" ai="center">
                    <Text fontSize="$3" color="$blue9">•</Text>
                    <Text
                      fontSize="$4"
                      color="$color"
                      $sm={{ fontSize: '$3' }}
                    >
                      {item}
                    </Text>
                  </XStack>
                ))}
              </YStack>
            </YStack>

            <YStack space="$4" f={1}>
              <H3
                fontSize="$5"
                fontWeight="600"
                color="$color"
                $sm={{ fontSize: '$4' }}
              >
                Contribution Paths
              </H3>
              <YStack space="$2">
                {contributionPaths.map((item, index) => (
                  <XStack key={index} space="$2" ai="center">
                    <Text fontSize="$3" color="$purple9">•</Text>
                    <Text
                      fontSize="$4"
                      color="$color"
                      $sm={{ fontSize: '$3' }}
                    >
                      {item}
                    </Text>
                  </XStack>
                ))}
              </YStack>
            </YStack>
          </YStack>
        </YStack>
      </ContainerLarge>
    </YStack>
  )
})
