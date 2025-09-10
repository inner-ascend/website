import { memo } from 'react'
import { YStack, XStack, Text, H2, H3 } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { TintSection } from '~/features/site/home/TintSection'

export const MexicoIndigenous = memo(() => {
  const corePrinciples = [
    {
      title: 'Employment for local community',
      description: 'Creating meaningful work opportunities for indigenous community members'
    },
    {
      title: 'Free Workshops for indigenous participants',
      description: 'Educational programs and skill-sharing without financial barriers'
    },
    {
      title: 'Educational Offerings for children & adults',
      description: 'Comprehensive learning opportunities for all ages'
    },
    {
      title: 'Community Fundraisers supporting local initiatives',
      description: 'Supporting indigenous-led projects and community development'
    }
  ]

  const ceremonialPractices = [
    'Land ceremonies',
    'Seasonal celebrations',
    'Rites of passage',
    'Gratitude rituals'
  ]

  return (
    <YStack bg="white" py="$12" id="indigenous">
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
              Ancient Wisdom, Modern Times
            </H2>
            
            <YStack space="$4" maxWidth={800}>
              <Text
                fontSize="$5"
                color="$color"
                ta="center"
                lineHeight="$1"
                $sm={{ fontSize: '$4' }}
              >
                We commit to reciprocal relationships with local indigenous communities. Our approach: respect, fair exchange, and honoring indigenous sovereignty.
              </Text>
            </YStack>
          </YStack>

          {/* Core Principles */}
          <YStack space="$6">
            <H3
              fontSize="$6"
              fontWeight="600"
              color="$color"
              ta="center"
              $sm={{ fontSize: '$5' }}
            >
              Core Principles
            </H3>
            
            <XStack
              space="$3"
              jc="center"
              flexWrap="wrap"
              $md={{ flexDirection: 'column', space: '$2' }}
              $sm={{ flexDirection: 'column', space: '$2' }}
            >
              {corePrinciples.map((principle, index) => {
                const colors = ['#EAF4F1', '#F4E1D2', '#E8F4FD', '#F0F8E8']
                const bgColor = colors[index % colors.length]
                
                return (
                  <YStack
                    key={principle.title}
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
                    <Text
                      fontSize="$4"
                      fontWeight="600"
                      color="$color"
                      ta="center"
                      $sm={{ fontSize: '$3' }}
                    >
                      {principle.title}
                    </Text>
                    
                    <Text
                      fontSize="$2"
                      color="$color"
                      lineHeight="$1"
                      opacity={0.8}
                      ta="center"
                    >
                      {principle.description}
                    </Text>
                  </YStack>
                )
              })}
            </XStack>
          </YStack>

          {/* Ceremonial Practices */}
          <YStack space="$6">
            <H3
              fontSize="$6"
              fontWeight="600"
              color="$color"
              ta="center"
              $sm={{ fontSize: '$5' }}
            >
              Ceremonial Practices
            </H3>
            
            <XStack
              space="$3"
              jc="center"
              flexWrap="wrap"
              $md={{ flexDirection: 'column', space: '$2' }}
              $sm={{ flexDirection: 'column', space: '$2' }}
            >
              {ceremonialPractices.map((practice, index) => {
                const colors = ['#EAF4F1', '#F4E1D2', '#E8F4FD', '#F0F8E8']
                const bgColor = colors[index % colors.length]
                
                return (
                  <YStack
                    key={practice}
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
                    <Text
                      fontSize="$4"
                      color="$color"
                      ta="center"
                      fontWeight="500"
                      $sm={{ fontSize: '$3' }}
                    >
                      {practice}
                    </Text>
                  </YStack>
                )
              })}
            </XStack>
          </YStack>

          {/* Call to Action */}
          <YStack
            space="$4"
            p="$8"
            bg="$background"
            borderRadius="$4"
            borderWidth={1}
            borderColor="$borderColor"
            ai="center"
            ta="center"
          >
            <Text
              fontSize="$5"
              fontWeight="600"
              color="$color"
              $sm={{ fontSize: '$4' }}
            >
              Honoring Indigenous Sovereignty
            </Text>
            
            <Text
              fontSize="$4"
              color="$color"
              ta="center"
              lineHeight="$1"
              opacity={0.8}
              maxWidth={600}
              $sm={{ fontSize: '$3' }}
            >
              We recognize that this land has been stewarded by indigenous peoples for generations. Our commitment is to learn, respect, and support indigenous sovereignty while building bridges of understanding and mutual benefit.
            </Text>
          </YStack>
        </YStack>
      </ContainerLarge>
    </YStack>
  )
})
