import { Check } from '@tamagui/lucide-icons'
import { Card, H2, H3, Paragraph, XStack, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'

export function LocationClimate() {
  return (
    <YStack zi={1} space="$6" mb="$8">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: "$8" }}>Location & Climate</HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
          Experience the perfect blend of mountain jungle and coastal proximity in Oaxaca's pristine Sierra Madre del Sur
        </HomeH3>
      </YStack>

      <XStack
        pos="relative"
        jc="center"
        gap="$4"
        $sm={{ fd: 'column' }}
        width="100%"
      >
        <Card 
          f={1} 
          bw={1} 
          bc="$borderColor" 
          br="$6" 
          elevation="$6" 
          shadowRadius={60} 
          width="48%" 
          animation="medium"
          pressStyle={{
            scale: 0.98,
            bc: "$color1",
          }}
          hoverStyle={{
            elevation: "$8",
            borderColor: "$color8",
            scale: 1.01
          }}
          $sm={{ width: '100%' }}
        >
          <YStack jc="center" p="$6" space="$6">
            <YStack space="$4">
              <H2 size="$8">Paradise Found</H2>
              <Paragraph size="$5" theme="alt2">
                Our carefully selected location offers the perfect blend of natural beauty and strategic advantages:
              </Paragraph>
            </YStack>
            <YStack space="$6">
              <XStack ai="flex-start" space="$3" flexWrap="nowrap" width="100%">
                <YStack pt="$1">
                  <Check size={20} color="var(--green10)" />
                </YStack>
                <YStack space="$1" f={1}>
                  <Paragraph size="$4" fontWeight="600">Perfect Growing Climate</Paragraph>
                  <Paragraph size="$3" theme="alt2">Mountain jungle environment at 1200m altitude with ideal growing conditions</Paragraph>
                </YStack>
              </XStack>
              
              <XStack ai="flex-start" space="$3" flexWrap="nowrap" width="100%">
                <YStack pt="$1">
                  <Check size={20} color="var(--green10)" />
                </YStack>
                <YStack space="$1" f={1}>
                  <Paragraph size="$4" fontWeight="600">Natural Resources</Paragraph>
                  <Paragraph size="$3" theme="alt2">Rich biodiversity with pristine mountain springs and diverse flora</Paragraph>
                </YStack>
              </XStack>

              <XStack ai="flex-start" space="$3" flexWrap="nowrap" width="100%">
                <YStack pt="$1">
                  <Check size={20} color="var(--green10)" />
                </YStack>
                <YStack space="$1" f={1}>
                  <Paragraph size="$4" fontWeight="600">Strategic Location</Paragraph>
                  <Paragraph size="$3" theme="alt2">1-hour from Huatulco International Airport and Pacific beaches</Paragraph>
                </YStack>
              </XStack>

              <XStack ai="flex-start" space="$3" flexWrap="nowrap" width="100%">
                <YStack pt="$1">
                  <Check size={20} color="var(--green10)" />
                </YStack>
                <YStack space="$1" f={1}>
                  <Paragraph size="$4" fontWeight="600">Community Integration</Paragraph>
                  <Paragraph size="$3" theme="alt2">Thriving expat community and local cultural experiences</Paragraph>
                </YStack>
              </XStack>

              <XStack ai="flex-start" space="$3" flexWrap="nowrap" width="100%">
                <YStack pt="$1">
                  <Check size={20} color="var(--green10)" />
                </YStack>
                <YStack space="$1" f={1}>
                  <Paragraph size="$4" fontWeight="600">Development Ready</Paragraph>
                  <Paragraph size="$3" theme="alt2">All permits secured and infrastructure planning complete</Paragraph>
                </YStack>
              </XStack>
            </YStack>
          </YStack>
        </Card>

        <Card 
          f={1} 
          bw={1} 
          bc="$borderColor" 
          br="$6" 
          elevation="$6" 
          shadowRadius={60} 
          width="48%" 
          animation="medium"
          pressStyle={{
            scale: 0.98,
            bc: "$color1",
          }}
          hoverStyle={{
            elevation: "$8",
            borderColor: "$color8",
            scale: 1.01
          }}
          $sm={{ width: '100%' }}
        >
          <YStack jc="center" p="$6" space="$6">
            <YStack space="$4">
              <H2 size="$8">Location Details</H2>
              <YStack space="$5">
                <YStack space="$3">
                  <H3 size="$5" theme="alt2">Climate & Environment</H3>
                  <YStack space="$2">
                    <Paragraph size="$4">
                      • Elevation: 1200m above sea level
                    </Paragraph>
                    <Paragraph size="$4">
                      • Average temperature: 20-28°C (68-82°F)
                    </Paragraph>
                    <Paragraph size="$4">
                      • Rainy season: June to October
                    </Paragraph>
                    <Paragraph size="$4">
                      • Climate: Mountain jungle microclimate
                    </Paragraph>
                  </YStack>
                </YStack>

                <YStack space="$3">
                  <H3 size="$5" theme="alt2">Travel & Access</H3>
                  <YStack space="$2">
                    <Paragraph size="$4">
                      • 1 hour from Huatulco International Airport
                    </Paragraph>
                    <Paragraph size="$4">
                      • 1 hour to Pacific beaches
                    </Paragraph>
                    <Paragraph size="$4">
                      • Easy access to local markets
                    </Paragraph>
                    <Paragraph size="$4">
                      • Connected to mountain communities
                    </Paragraph>
                  </YStack>
                </YStack>

                <YStack space="$3">
                  <H3 size="$5" theme="alt2">Property Overview</H3>
                  <YStack space="$2">
                    <Paragraph size="$4">
                      • Pristine mountain jungle terrain
                    </Paragraph>
                    <Paragraph size="$4">
                      • Natural springs and water sources
                    </Paragraph>
                    <Paragraph size="$4">
                      • Rich biodiversity and wildlife
                    </Paragraph>
                    <Paragraph size="$4">
                      • Natural terraced landscape
                    </Paragraph>
                  </YStack>
                </YStack>
              </YStack>
            </YStack>
          </YStack>
        </Card>
      </XStack>
    </YStack>
  )
} 