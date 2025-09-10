import { memo, useState } from 'react'
import { YStack, XStack, Text, H2, H3, Button, Input, TextArea, Select, Adapt, Sheet } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { TintSection } from '~/features/site/home/TintSection'

export const MexicoJoin = memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  })

  const participationOptions = [
    { value: 'general', label: 'General' },
    { value: 'land-steward', label: 'Founding Land Steward' },
    { value: 'investor', label: 'Aligned Investor' },
    { value: 'contributor', label: 'Community Contributor' },
    { value: 'visitor', label: 'Future Visitor & Participant' }
  ]

  const waysToParticipate = [
    {
      title: 'Founding Land Stewards',
      description: 'Families ready to build the village and commit to long-term community living.',
      icon: '🏡'
    },
    {
      title: 'Aligned Investors',
      description: 'Support financially in alignment with regenerative principles and community values.',
      icon: '💰'
    },
    {
      title: 'Community Contributors',
      description: 'Share skills, time, and wisdom to support the community development.',
      icon: '🤝'
    },
    {
      title: 'Future Visitors & Participants',
      description: 'Join retreats, workshops, and programs as they become available.',
      icon: '🌱'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <YStack bg="#F4E1D2" py="$12" id="join">
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
              The Sacred Invitation
            </H2>
            
            <YStack space="$4" maxWidth={800}>
              <Text
                fontSize="$5"
                color="$color"
                ta="center"
                lineHeight="$1"
                $sm={{ fontSize: '$4' }}
              >
                This is a call to those who feel the fire — to stand for truth, care for the land, and embody sacred leadership. There are many ways to contribute.
              </Text>
            </YStack>
          </YStack>

          {/* Ways to Participate */}
          <YStack space="$6">
            <H3
              fontSize="$6"
              fontWeight="600"
              color="$color"
              ta="center"
              $sm={{ fontSize: '$5' }}
            >
              Ways to Participate
            </H3>
            
            <XStack
              space="$3"
              jc="center"
              flexWrap="wrap"
              $md={{ flexDirection: 'column', space: '$2' }}
              $sm={{ flexDirection: 'column', space: '$2' }}
            >
              {waysToParticipate.map((way, index) => {
                const colors = ['#EAF4F1', '#F4E1D2', '#E8F4FD', '#F0F8E8']
                const bgColor = colors[index % colors.length]
                
                return (
                  <YStack
                    key={way.title}
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
                      <Text fontSize="$4">{way.icon}</Text>
                      <H3
                        fontSize="$3"
                        fontWeight="600"
                        color="$color"
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {way.title}
                      </H3>
                    </XStack>
                    
                    <Text
                      fontSize="$2"
                      color="$color"
                      lineHeight="$1"
                      opacity={0.8}
                      ta="center"
                    >
                      {way.description}
                    </Text>
                  </YStack>
                )
              })}
            </XStack>
          </YStack>

          {/* Contact Form */}
          <YStack
            space="$6"
            p="$8"
            bg="$background"
            borderRadius="$4"
            borderWidth={1}
            borderColor="$borderColor"
            maxWidth={600}
            mx="auto"
            width="100%"
          >
            <H3
              fontSize="$5"
              fontWeight="600"
              color="$color"
              ta="center"
              $sm={{ fontSize: '$4' }}
            >
              Get in Touch
            </H3>
            
            <YStack space="$4" as="form" onSubmit={handleSubmit}>
              <YStack space="$2">
                <Text fontSize="$3" color="$color" fontWeight="500">
                  Name *
                </Text>
                <Input
                  value={formData.name}
                  onChangeText={(value) => handleInputChange('name', value)}
                  placeholder="Your full name"
                  borderColor="$borderColor"
                  focusStyle={{ borderColor: '$blue9' }}
                />
              </YStack>

              <YStack space="$2">
                <Text fontSize="$3" color="$color" fontWeight="500">
                  Email *
                </Text>
                <Input
                  value={formData.email}
                  onChangeText={(value) => handleInputChange('email', value)}
                  placeholder="your@email.com"
                  borderColor="$borderColor"
                  focusStyle={{ borderColor: '$blue9' }}
                />
              </YStack>

              <YStack space="$2">
                <Text fontSize="$3" color="$color" fontWeight="500">
                  Your Interest
                </Text>
                <Select
                  value={formData.interest}
                  onValueChange={(value) => handleInputChange('interest', value)}
                >
                  <Select.Trigger borderColor="$borderColor" focusStyle={{ borderColor: '$blue9' }}>
                    <Select.Value placeholder="Select your interest" />
                  </Select.Trigger>
                  <Adapt when="sm" platform="touch">
                    <Sheet modal dismissOnSnapToBottom>
                      <Sheet.Frame>
                        <Sheet.ScrollView>
                          <Adapt.Contents />
                        </Sheet.ScrollView>
                      </Sheet.Frame>
                      <Sheet.Overlay />
                    </Sheet>
                  </Adapt>
                  <Select.Content zIndex={200000}>
                    <Select.ScrollUpButton />
                    <Select.Viewport>
                      {participationOptions.map((option, index) => (
                        <Select.Item key={option.value} index={index} value={option.value}>
                          <Select.ItemText>{option.label}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                    <Select.ScrollDownButton />
                  </Select.Content>
                </Select>
              </YStack>

              <YStack space="$2">
                <Text fontSize="$3" color="$color" fontWeight="500">
                  Message
                </Text>
                <TextArea
                  value={formData.message}
                  onChangeText={(value) => handleInputChange('message', value)}
                  placeholder="Tell us about yourself and your interest in joining our community..."
                  borderColor="$borderColor"
                  focusStyle={{ borderColor: '$blue9' }}
                  minHeight={120}
                />
              </YStack>

              <Button
                type="submit"
                size="$4"
                bg="#2E7D32"
                color="white"
                fontWeight="600"
                borderRadius="$3"
                hoverStyle={{ 
                  bg: '#256628',
                  scale: 1.05
                }}
                pressStyle={{ scale: 0.95 }}
                animation="bouncy"
                mt="$4"
              >
                Send Message
              </Button>
            </YStack>
          </YStack>
        </YStack>
      </ContainerLarge>
    </YStack>
  )
})
