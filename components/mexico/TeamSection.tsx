import { useState } from 'react'
import { Card, H3, Paragraph, XStack, YStack } from 'tamagui'
import { teamMembers } from '~/data/mexico/team'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'

export function TeamSection() {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({})

  return (
    <YStack space="$6" mb="$8">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: "$8" }}>Meet Our Team</HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
          Visionaries and experts bringing sustainable community living to life
        </HomeH3>
      </YStack>

      <XStack flexWrap="wrap" gap="$6" jc="center">
        {teamMembers.map((member, i) => (
          <Card
            key={i}
            bw={1}
            bc="$borderColor"
            br="$6"
            elevation="$4"
            width={280}
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
            $sm={{ width: '100%' }}
          >
            <YStack 
              height={320} 
              br="$6" 
              ov="hidden" 
              backgroundColor="$color4"
              style={!imageErrors[member.name] ? {
                backgroundImage: `url(${member.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              } : undefined}
            >
              {imageErrors[member.name] && (
                <YStack f={1} ai="center" jc="center">
                  <Paragraph size="$3" theme="alt2">Image not available</Paragraph>
                </YStack>
              )}
            </YStack>
            <YStack p="$4" space="$2">
              <H3 size="$6">{member.name}</H3>
              <Paragraph size="$4" theme="alt2" fontWeight="600">{member.role}</Paragraph>
              <Paragraph size="$3" theme="alt2">{member.bio}</Paragraph>
              <XStack mt="$2" ai="center" space="$2">
                <YStack backgroundColor="$color4" px="$2" py="$1" br="$4">
                  <Paragraph size="$2" color="$color11">
                    {member.focus}
                  </Paragraph>
                </YStack>
              </XStack>
            </YStack>
          </Card>
        ))}
      </XStack>
    </YStack>
  )
} 