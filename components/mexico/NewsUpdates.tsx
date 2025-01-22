import { ChevronRight } from '@tamagui/lucide-icons'
import { Button, Card, H3, Paragraph, XStack, YStack } from 'tamagui'
import { newsItems } from '~/data/mexico/news'

export function NewsUpdates() {
  return (
    <YStack space="$6">
      <XStack flexWrap="wrap" gap="$4" jc="center">
        {newsItems.map((update, i) => (
          <Card
            key={i}
            bw={1}
            bc="$borderColor"
            br="$6"
            elevation="$4"
            width="48%"
            p="$5"
            space="$3"
            pressStyle={{
              scale: 0.98,
              bc: "$color1",
            }}
            animation="medium"
            hoverStyle={{
              elevation: "$8",
              borderColor: "$color8",
              scale: 1.01
            }}
            $gtSm={{ minWidth: 400 }}
            $sm={{ width: '100%' }}
          >
            <XStack jc="space-between" ai="center">
              <Paragraph size="$3" theme="alt2">{update.date}</Paragraph>
              <YStack 
                backgroundColor={
                  update.tag === 'Development' ? '$green5' :
                  update.tag === 'Community' ? '$blue5' :
                  update.tag === 'Infrastructure' ? '$orange5' :
                  '$purple5'
                }
                px="$2"
                py="$1"
                br="$4"
              >
                <Paragraph 
                  size="$2" 
                  color={
                    update.tag === 'Development' ? '$green10' :
                    update.tag === 'Community' ? '$blue10' :
                    update.tag === 'Infrastructure' ? '$orange10' :
                    '$purple10'
                  }
                >
                  {update.tag}
                </Paragraph>
              </YStack>
            </XStack>
            <H3 size="$6">{update.title}</H3>
            <Paragraph size="$4" theme="alt2">{update.description}</Paragraph>
          </Card>
        ))}
      </XStack>

      <YStack ai="center" mt="$4">
        <Button 
          size="$4" 
          theme="alt2"
          iconAfter={ChevronRight}
          pressStyle={{
            scale: 0.97,
          }}
          animation="quick"
          hoverStyle={{
            opacity: 0.9,
            scale: 1.02
          }}
        >
          View All Updates
        </Button>
      </YStack>
    </YStack>
  )
} 