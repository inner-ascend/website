import { memo } from 'react'
import { YStack, XStack, Text, H2, H3 } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { TintSection } from '~/features/site/home/TintSection'

export const MexicoLand = memo(() => {
  const landFacts = [
    {
      category: 'Topography & Access',
      items: [
        '12 acres diverse terrain',
        'Flat & hilly areas',
        'Year-round water access',
        'Private road'
      ]
    },
    {
      category: 'Location & Community',
      items: [
        'Near Mazunte, Oaxaca',
        '1 hr to international airport',
        'Connected by highway',
        'Vibrant, eclectic local network'
      ]
    },
    {
      category: 'Development Potential',
      items: [
        'Space for 20 eco-homes',
        'Comfortable for 40 residents',
        'Rich soil & electricity access',
        'One of the last intact parcels'
      ]
    }
  ]

  return (
    <YStack bg="white" py="$12" id="land">
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
              The Land Calling Us Home
            </H2>
            
            <YStack space="$4" maxWidth={800}>
              <Text
                fontSize="$5"
                color="$color"
                ta="center"
                lineHeight="$1"
                $sm={{ fontSize: '$4' }}
              >
                The project is rooted in Oaxaca, Mexico — a land of resistance, indigenous rights, and rich cultural history. The property includes forests, fertile valleys, streams, and panoramic mountain views.
              </Text>
            </YStack>
          </YStack>

          {/* Gallery Placeholder */}
          <YStack
            height={400}
            bg="$background"
            borderRadius="$4"
            borderWidth={1}
            borderColor="$borderColor"
            jc="center"
            ai="center"
            mb="$8"
          >
            <Text fontSize="$4" color="$color" opacity={0.6}>
              Gallery: Streams, valleys, permaculture design, mountain vistas, biodiversity
            </Text>
          </YStack>

          {/* Key Facts */}
          <XStack
            space="$4"
            flexWrap="wrap"
            jc="center"
            $sm={{ flexDirection: 'column' }}
          >
            {landFacts.map((category, index) => {
              const colors = ['#F4E1D2', '#E8F4FD', '#F0F8E8']
              const bgColor = colors[index % colors.length]
              
              return (
                <YStack
                  key={category.category}
                  space="$4"
                  p="$5"
                  bg={bgColor}
                  borderRadius="$6"
                  borderWidth={0}
                  width={300}
                  $lg={{ width: 300 }}
                  $md={{ width: 280 }}
                  $sm={{ width: '100%' }}
                  elevation="$2"
                  hoverStyle={{
                    elevation: '$4',
                    scale: 1.02
                  }}
                  animation="bouncy"
                >
                  <H3
                    fontSize="$5"
                    fontWeight="600"
                    color="$color"
                    mb="$2"
                    $sm={{ fontSize: '$4' }}
                  >
                    {category.category}
                  </H3>
                  
                  <YStack space="$3">
                    {category.items.map((item, itemIndex) => (
                      <XStack key={itemIndex} space="$3" ai="center">
                        <Text fontSize="$4" color="#2E7D32">•</Text>
                        <Text
                          fontSize="$4"
                          color="$color"
                          lineHeight="$1"
                          $sm={{ fontSize: '$3' }}
                        >
                          {item}
                        </Text>
                      </XStack>
                    ))}
                  </YStack>
                </YStack>
              )
            })}
          </XStack>
        </YStack>
      </ContainerLarge>
    </YStack>
  )
})
