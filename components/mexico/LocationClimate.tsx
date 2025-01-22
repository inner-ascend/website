import { Check } from '@tamagui/lucide-icons'
import { Card, H2, H3, Paragraph, XStack, YStack } from 'tamagui'

export function LocationClimate() {
  return (
    <YStack zi={1} space="$6" mb="$8">
      <YStack space="$6" mb="$6">
        <H2 size="$9" ta="center" $sm={{ size: "$8" }}>Location & Climate</H2>
        <Paragraph size="$6" ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
          Experience the perfect blend of natural beauty and modern comfort in Mexico's stunning Riviera Maya
        </Paragraph>
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
              <XStack ai="center" space="$3">
                <Check size={20} color="var(--green10)" />
                <YStack space="$1">
                  <Paragraph size="$4" fontWeight="600">Perfect Growing Climate</Paragraph>
                  <Paragraph size="$3" theme="alt2">Year-round conditions ideal for tropical and subtropical crops</Paragraph>
                </YStack>
              </XStack>
              
              <XStack ai="center" space="$3">
                <Check size={20} color="var(--green10)" />
                <YStack space="$1">
                  <Paragraph size="$4" fontWeight="600">Natural Resources</Paragraph>
                  <Paragraph size="$3" theme="alt2">Crystal-clear cenotes and rich biodiversity on the property</Paragraph>
                </YStack>
              </XStack>

              <XStack ai="center" space="$3">
                <Check size={20} color="var(--green10)" />
                <YStack space="$1">
                  <Paragraph size="$4" fontWeight="600">Strategic Location</Paragraph>
                  <Paragraph size="$3" theme="alt2">Easy access to airports, beaches, and modern amenities</Paragraph>
                </YStack>
              </XStack>

              <XStack ai="center" space="$3">
                <Check size={20} color="var(--green10)" />
                <YStack space="$1">
                  <Paragraph size="$4" fontWeight="600">Community Integration</Paragraph>
                  <Paragraph size="$3" theme="alt2">Thriving expat community and local cultural experiences</Paragraph>
                </YStack>
              </XStack>

              <XStack ai="center" space="$3">
                <Check size={20} color="var(--green10)" />
                <YStack space="$1">
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
                      • Average temperature: 24-29°C (75-84°F)
                    </Paragraph>
                    <Paragraph size="$4">
                      • Rainy season: June to October
                    </Paragraph>
                    <Paragraph size="$4">
                      • Humidity: Moderate tropical climate
                    </Paragraph>
                  </YStack>
                </YStack>

                <YStack space="$3">
                  <H3 size="$5" theme="alt2">Travel & Access</H3>
                  <YStack space="$2">
                    <Paragraph size="$4">
                      • 45 min from Cancún International Airport
                    </Paragraph>
                    <Paragraph size="$4">
                      • 20 min to nearest major hospital
                    </Paragraph>
                    <Paragraph size="$4">
                      • 15 min to local markets and amenities
                    </Paragraph>
                    <Paragraph size="$4">
                      • 10 min to pristine beaches
                    </Paragraph>
                  </YStack>
                </YStack>

                <YStack space="$3">
                  <H3 size="$5" theme="alt2">Property Overview</H3>
                  <YStack space="$2">
                    <Paragraph size="$4">
                      • 50 acres of pristine tropical land
                    </Paragraph>
                    <Paragraph size="$4">
                      • Multiple natural cenotes on-site
                    </Paragraph>
                    <Paragraph size="$4">
                      • Mix of jungle and clearings
                    </Paragraph>
                    <Paragraph size="$4">
                      • Natural elevation changes
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