import { Card, Paragraph, SizableText, Text, XStack, YStack } from 'tamagui'

import { CheckCircle } from '../../../components/CheckCircle'
import { ContainerLarge } from '../../../components/Containers'

const FeatureItem = ({ label, children }) => {
  return (
    <SizableText>
      <SizableText size="$5" fow="800">
        {label}
      </SizableText>
      &nbsp;&nbsp;-&nbsp;&nbsp;
      <SizableText size="$5" tag="span" theme="alt2">
        {children}
      </SizableText>
    </SizableText>
  )
}

const Features = ({ items, ...props }: any) => {
  return (
    <YStack space {...props}>
      {items.map((feature, i) => (
        <Card key={i} p="$6" elevation="$1" $sm={{ p: '$4' }}>
          <XStack tag="li">
            <Text color="$green9">
              <CheckCircle />
            </Text>
            <Paragraph color="$gray11">{feature}</Paragraph>
          </XStack>
        </Card>
      ))}
    </YStack>
  )
}

export const HomeExampleProps = () => {
  return (
    <ContainerLarge position="relative">
      <XStack px="$6" pt="$8" space="$4" $sm={{ flexDirection: 'column', px: 0 }}>
        <YStack w="50%" $sm={{ w: '100%' }}>
          <Features
            space="$4"
            items={[
              <FeatureItem label="Community Engagement">
                Participate in community events, decision-making, and shared activities.
              </FeatureItem>,
              <FeatureItem label="Land Stewardship">
                Contribute to ecological restoration and sustainable land management.
              </FeatureItem>,
              <FeatureItem label="Shared Resources">
                Access community tools, spaces, and knowledge bases.
              </FeatureItem>,
            ]}
          />
        </YStack>
        <YStack w="50%" $sm={{ w: `100%` }}>
          <Features
            space="$4"
            items={[
              <FeatureItem label="Sustainable Living">
                Practice eco-friendly lifestyle with renewable energy and natural building.
              </FeatureItem>,
              <FeatureItem label="Cultural Activities">
                Join workshops, celebrations, and skill-sharing sessions.
              </FeatureItem>,
              <FeatureItem label="Governance Rights">
                Vote on community decisions through transparent DAO structure.
              </FeatureItem>,
            ]}
          />
        </YStack>
      </XStack>
    </ContainerLarge>
  )
}
