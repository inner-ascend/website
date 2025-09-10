import { memo } from 'react'
import { YStack, XStack, Text, H2, H3 } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { TintSection } from '~/features/site/home/TintSection'

export const MexicoPrograms = memo(() => {
  const programs = [
    {
      title: 'Permaculture',
      description: 'Learn regenerative agriculture, water management, and sustainable land stewardship practices.',
      icon: '🌱',
      features: [
        'Food forest design',
        'Water catchment systems',
        'Soil regeneration',
        'Composting & waste management'
      ]
    },
    {
      title: 'Health & Well-being',
      description: 'Holistic approaches to physical, mental, and spiritual wellness in harmony with nature.',
      icon: '💚',
      features: [
        'Natural healing practices',
        'Movement & breathwork',
        'Nutrition & herbal medicine',
        'Mental health support'
      ]
    },
    {
      title: 'Traditional Skills',
      description: 'Preserving and teaching ancient wisdom and practical skills for self-sufficient living.',
      icon: '🛠️',
      features: [
        'Natural building techniques',
        'Traditional crafts',
        'Food preservation',
        'Energy systems'
      ]
    },
    {
      title: 'Community Resilience',
      description: 'Building strong, adaptive communities through collaboration and mutual support.',
      icon: '🤝',
      features: [
        'Conflict resolution',
        'Decision-making processes',
        'Resource sharing',
        'Emergency preparedness'
      ]
    }
  ]

  return (
    <TintSection index={5}>
      <ContainerLarge>
        <YStack space="$8" py="$12" id="programs">
          <YStack space="$6" ai="center" ta="center">
            <H2
              fontSize="$8"
              fontWeight="700"
              color="$color"
              ta="center"
              $sm={{ fontSize: '$7' }}
            >
              Educational Programs
            </H2>
            
            <Text
              fontSize="$5"
              color="$color"
              ta="center"
              lineHeight="$1"
              maxWidth={800}
              $sm={{ fontSize: '$4' }}
            >
              Educational, healing, and regenerative programs designed to cultivate skills and wisdom for sustainable living.
            </Text>
          </YStack>

          <XStack
            space="$3"
            jc="center"
            flexWrap="wrap"
            $md={{ flexDirection: 'column', space: '$2' }}
            $sm={{ flexDirection: 'column', space: '$2' }}
          >
            {programs.map((program, index) => {
              const colors = ['#EAF4F1', '#F4E1D2', '#E8F4FD', '#F0F8E8']
              const bgColor = colors[index % colors.length]
              
              return (
                <YStack
                  key={program.title}
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
                    <Text fontSize="$4">{program.icon}</Text>
                    <H3
                      fontSize="$3"
                      fontWeight="600"
                      color="$color"
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {program.title}
                    </H3>
                  </XStack>
                  
                  <Text
                    fontSize="$2"
                    color="$color"
                    lineHeight="$1"
                    opacity={0.8}
                    ta="center"
                  >
                    {program.description}
                  </Text>
                </YStack>
              )
            })}
          </XStack>

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
              Ready to Begin Your Journey?
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
              Join our programs and become part of a community dedicated to regenerative living, personal growth, and creating positive change in the world.
            </Text>
          </YStack>
        </YStack>
      </ContainerLarge>
    </TintSection>
  )
})
