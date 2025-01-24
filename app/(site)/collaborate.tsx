import { useTint } from '@tamagui/logo'
import { Check } from '@tamagui/lucide-icons'
import { useMemo } from 'react'
import {
  Button,
  Card,
  H1,
  H2,
  Image,
  Paragraph,
  Separator,
  Spacer,
  XStack,
  YStack,
  type ThemeName,
} from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { HeadInfo } from '~/components/HeadInfo'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { SocialLinksRow } from '~/features/site/home/SocialLinksRow'
import { HomeSection, TintSection } from '~/features/site/home/TintSection'
import { ThemeNameEffect } from '~/features/site/theme/ThemeNameEffect'

interface CollaborationCard {
  title: string
  description: string
  benefits: string[]
  link: string
  image: string
  theme: ThemeName
  buttonText: string
}

function CommunityLayout({ children }: { children: React.ReactNode }) {
  const { tint } = useTint()
  return <YStack theme={tint as any}>{useMemo(() => children, [children])}</YStack>
}

export default function Collaborate() {
  return (
    <CommunityLayout>
      <ThemeNameEffect />
      <HeadInfo
        title="Collaborate | Inner Ascend"
        description="Join forces with Inner Ascend - Ways to contribute and support our regenerative living projects"
      />

      {/* Hero Section */}
      <YStack pos="relative" height={500} $sm={{ height: 400 }}>
        <YStack
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          style={{
            backgroundImage: 'url(/images/natural-building.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <YStack
          fullscreen
          zi={1}
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)',
          }}
        />
        <YStack zi={2} py="$12" space="$6" ai="center" jc="center" f={1}>
          <H1 size="$10" ta="center" color="$color12">
            Join Our Mission
          </H1>
          <Paragraph size="$6" ta="center" col="$color12" maw={600} px="$4">
            Help us build regenerative communities and create positive change in the world
          </Paragraph>
          <XStack space="$4" mt="$4">
            <Button
              size="$6"
              fontWeight="800"
              theme="active"
              onPress={() => (window.location.href = '#opportunities')}
            >
              View Opportunities
            </Button>
          </XStack>
        </YStack>
      </YStack>

      {/* Vision Section */}
      <TintSection index={1}>
        <ContainerLarge space="$4">
          <YStack space="$6" ai="center" maw={800} mx="auto" py="$8">
            <HomeH2 ta="center">Our Vision for Collaboration</HomeH2>
            <HomeH3 ta="center" theme="alt2">
              We're building a network of regenerative communities through collective effort and
              shared vision
            </HomeH3>
            <YStack space="$4" mt="$4">
              {visionPoints.map((point, i) => (
                <XStack key={i} space="$4" ai="center">
                  <Check size={24} color="var(--green10)" />
                  <Paragraph size="$5">{point}</Paragraph>
                </XStack>
              ))}
            </YStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Collaboration Opportunities */}
      <HomeSection id="opportunities">
        <ContainerLarge space="$4">
          <HomeH2 ta="center">Ways to Collaborate</HomeH2>
          <HomeH3 ta="center" theme="alt2" maw={700} mx="auto" mb="$8">
            Choose your path to contribute and make a lasting impact
          </HomeH3>
          <YStack space="$6" mt="$8">
            <XStack flexWrap="wrap" gap="$8" rowGap="$12" jc="center" $sm={{ gap: '$4' }} pb="$8">
              {collaborationCards.map((card, i) => (
                <YStack
                  key={i}
                  f={1}
                  miw={300}
                  maxWidth={400}
                  $sm={{
                    miw: 'auto',
                    w: '100%',
                  }}
                >
                  <Card
                    elevate
                    size="$4"
                    bordered
                    theme={card.theme}
                    ov="hidden"
                    f={1}
                    pressStyle={{
                      scale: 0.98,
                      bc: '$color1',
                    }}
                    animation="medium"
                    hoverStyle={{
                      elevation: '$8',
                      borderColor: '$color8',
                      scale: 1.01,
                    }}
                  >
                    <YStack f={1} space="$4">
                      <Card.Header padded>
                        <YStack space="$4">
                          <YStack height={160} br="$4" ov="hidden">
                            <Image
                              source={{ uri: card.image }}
                              alt={card.title}
                              width="100%"
                              height="100%"
                              resizeMode="cover"
                            />
                          </YStack>
                          <H2 size="$6">{card.title}</H2>
                          <Separator />
                        </YStack>
                      </Card.Header>

                      <Card.Footer padded f={1}>
                        <YStack f={1} space="$4">
                          <Paragraph size="$4" theme="alt2">
                            {card.description}
                          </Paragraph>
                          <YStack space="$2">
                            {card.benefits.map((benefit, i) => (
                              <XStack key={i} space="$2" ai="center">
                                <Check size={16} color={`var(--${card.theme}10)`} />
                                <Paragraph size="$3" theme="alt2">
                                  {benefit}
                                </Paragraph>
                              </XStack>
                            ))}
                          </YStack>
                          <Spacer flex={1} />
                          <Button
                            size="$5"
                            theme={card.theme}
                            width="100%"
                            fontFamily="$silkscreen"
                            pressStyle={{
                              scale: 0.97,
                            }}
                            animation="quick"
                            hoverStyle={{
                              opacity: 0.9,
                              scale: 1.02,
                            }}
                            onPress={() => (window.location.href = card.link)}
                          >
                            {card.buttonText}
                          </Button>
                        </YStack>
                      </Card.Footer>
                    </YStack>
                  </Card>
                </YStack>
              ))}
            </XStack>
          </YStack>
        </ContainerLarge>
      </HomeSection>

      {/* Contact Section */}
      <TintSection index={2}>
        <ContainerLarge space="$4" my="$8">
          <YStack space="$4" ai="center">
            <HomeH2 ta="center">Get in Touch</HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={600}>
              Have questions or want to discuss collaboration opportunities? Reach out to us through
              our social channels or send us a message.
            </HomeH3>
            <Spacer size="$4" />
            <SocialLinksRow />
            <Button
              size="$6"
              theme="active"
              mt="$6"
              onPress={() => (window.location.href = 'mailto:contact@inner-ascend.org')}
            >
              Contact Us
            </Button>
          </YStack>
        </ContainerLarge>
      </TintSection>
    </CommunityLayout>
  )
}

const visionPoints = [
  'Create self-sustaining communities that harmonize with nature',
  'Foster innovation in regenerative technologies and practices',
  'Build a global network of like-minded individuals and communities',
  'Share knowledge and resources to accelerate positive change',
  'Develop replicable models for sustainable living',
]

const collaborationCards: CollaborationCard[] = [
  {
    title: 'Technical Skills',
    description:
      'Contribute your expertise in software development, architecture, sustainable building, or permaculture design.',
    benefits: [
      'Work on cutting-edge sustainability projects',
      'Shape the future of community living',
      'Learn from experienced practitioners',
    ],
    link: '#technical',
    image: '/images/collaborate/tech-collab.jpg',
    theme: 'blue',
    buttonText: 'Join Tech Team',
  },
  {
    title: 'Community Building',
    description:
      'Help grow our community through content creation, social media management, or community organizing.',
    benefits: [
      'Connect with global change-makers',
      'Share inspiring stories and knowledge',
      'Build meaningful relationships',
    ],
    link: '#community',
    image: '/images/collaborate/community-collab.jpg',
    theme: 'green',
    buttonText: 'Build Community',
  },
  {
    title: 'Investment',
    description:
      'Support our vision through financial investment or by participating in our NFT-based ownership model.',
    benefits: [
      'Be part of innovative ownership models',
      'Support sustainable development',
      'Earn potential returns while doing good',
    ],
    link: '#investment',
    image: '/images/collaborate/investment-collab.jpg',
    theme: 'purple',
    buttonText: 'Invest Now',
  },
  {
    title: 'On-site Support',
    description:
      'Join us on the ground to help with construction, gardening, or other practical aspects of building our communities.',
    benefits: [
      'Gain hands-on experience',
      'Live in beautiful natural settings',
      'Learn valuable sustainable living skills',
    ],
    link: '#onsite',
    image: '/images/collaborate/onsite-collab.jpg',
    theme: 'yellow',
    buttonText: 'Get Involved',
  },
]
