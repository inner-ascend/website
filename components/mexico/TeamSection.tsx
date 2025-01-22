import { User } from '@tamagui/lucide-icons'
import { useEffect, useState } from 'react'
import { Card, H3, Image, Paragraph, Spinner, XStack, YStack } from 'tamagui'
import { teamMembers } from '~/data/mexico/team'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'

export function TeamSection() {
  const [imageStates, setImageStates] = useState<{[key: string]: 'loading' | 'error' | 'loaded'}>({})

  // Pre-load images
  useEffect(() => {
    teamMembers.forEach(member => {
      const img = new window.Image()
      setImageStates(prev => ({ ...prev, [member.name]: 'loading' }))
      
      img.onload = () => {
        setImageStates(prev => ({ ...prev, [member.name]: 'loaded' }))
      }
      
      img.onerror = () => {
        setImageStates(prev => ({ ...prev, [member.name]: 'error' }))
      }
      
      img.src = member.image
    })
  }, [])

  return (
    <YStack space="$6" mb="$8">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: "$8" }}>Meet Our Team</HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: "$5" }}>
          Visionaries and experts bringing sustainable community living to life
        </HomeH3>
      </YStack>

      <XStack 
        flexWrap="wrap" 
        gap="$6" 
        jc="center"
        maxWidth={1200}
        als="center"
        px="$4"
        $sm={{ 
          gap: "$4",
          px: "$2"
        }}
      >
        {teamMembers.map((member, i) => (
          <Card
            key={i}
            bw={1}
            bc="$borderColor"
            br="$6"
            elevation="$4"
            width={280}
            minWidth={280}
            maxWidth={280}
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
            $gtSm={{
              width: 280,
              minWidth: 280,
              maxWidth: 280
            }}
            $sm={{ 
              width: "100%",
              minWidth: "100%",
              maxWidth: "100%",
              mb: "$2"
            }}
          >
            <YStack 
              height={320} 
              minHeight={320}
              maxHeight={320}
              br="$6" 
              ov="hidden" 
              backgroundColor="$color4"
              position="relative"
              $sm={{
                height: 280,
                minHeight: 280,
                maxHeight: 280
              }}
            >
              {imageStates[member.name] === 'loading' && (
                <YStack f={1} ai="center" jc="center">
                  <Spinner size="large" color="$color" />
                </YStack>
              )}
              
              {imageStates[member.name] === 'loaded' && (
                <YStack 
                  position="relative"
                  height="100%"
                  width="100%"
                  overflow="hidden"
                >
                  <Image
                    source={{ uri: member.image }}
                    alt={`${member.name} - ${member.role}`}
                    resizeMode="cover"
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    width="100%"
                    height="100%"
                    onError={() => setImageStates(prev => ({ ...prev, [member.name]: 'error' }))}
                  />
                </YStack>
              )}
              
              {imageStates[member.name] === 'error' && (
                <YStack f={1} ai="center" jc="center" space="$2">
                  <User size={40} color="var(--color)" opacity={0.5} />
                  <Paragraph size="$3" theme="alt2">Photo coming soon</Paragraph>
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