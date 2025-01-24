import { useTint } from '@tamagui/logo'
import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useMemo, useState } from 'react'
import {
  Button,
  Card,
  H1,
  H2,
  H3,
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

      {/* Priority Roles Section */}
      <TintSection index={2}>
        <ContainerLarge>
          <YStack space="$6" mb="$8">
            <YStack space="$6" mb="$6">
              <HomeH2 ta="center" $sm={{ size: '$8' }}>
                Priority Roles
              </HomeH2>
              <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
                We're actively seeking passionate individuals for these key positions
              </HomeH3>
            </YStack>

            <XStack flexWrap="wrap" gap="$6" jc="center">
              {priorityRoles.map((category, i) => (
                <YStack
                  key={i}
                  width={300}
                  p="$5"
                  br="$6"
                  bw={1}
                  bc="$borderColor"
                  space="$4"
                  elevation="$4"
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
                  <H3 size="$6" color={`var(--${category.theme}10)`}>
                    {category.title}
                  </H3>
                  <YStack space="$2">
                    {category.roles.map((role, j) => (
                      <XStack key={j} space="$2" ai="center">
                        <Check size={16} color={`var(--${category.theme}10)`} />
                        <Paragraph size="$4" theme="alt2">
                          {role}
                        </Paragraph>
                      </XStack>
                    ))}
                  </YStack>
                </YStack>
              ))}
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* FAQ Section */}
      <TintSection index={3}>
        <ContainerLarge>
          <YStack space="$6" mb="$8">
            <YStack space="$6" mb="$6">
              <HomeH2 ta="center" $sm={{ size: '$8' }}>
                Frequently Asked Questions
              </HomeH2>
              <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
                Everything you need to know about joining our collaboration network
              </HomeH3>
            </YStack>

            <YStack space="$4" als="center" px="$4">
              <CollaborationFAQ />
            </YStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Contact Section */}
      <TintSection index={4}>
        <ContainerLarge space="$4" my="$8">
          <YStack space="$4" ai="center">
            <HomeH2 ta="center">Get in Touch</HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={600}>
              Have questions or want to discuss collaboration opportunities? Reach out to us through
              our social channels or send us a message.
            </HomeH3>
            <Spacer size="$2" />

            {/* <Button
              size="$6"
              theme="active"
              mt="$6"
              onPress={() => (window.location.href = 'mailto:contact@inner-ascend.org')}
            >
              Contact Us
            </Button> */}
          </YStack>
        </ContainerLarge>
        <SocialLinksRow />
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

const collaborationFaqs = [
  {
    question: 'How do I get started as a collaborator?',
    answer:
      "Start by choosing your area of interest from our collaboration opportunities. Each path has a specific onboarding process. For technical collaborators, you can join our GitHub. For community builders, you'll get access to our content and social media guidelines. Investment collaborators will be guided through our NFT-based ownership model.",
  },
  {
    question: 'What is the time commitment expected?',
    answer:
      'We welcome both full-time and part-time collaborators. You can contribute as little as a few hours per week for most roles. Full-time positions are available for key roles. We value quality and impact over quantity of hours, and work asynchronously to accommodate different time zones and schedules.',
  },
  {
    question: 'Are there remote opportunities available?',
    answer:
      'Yes! Many of our collaboration opportunities are remote-friendly, especially in technical development, community building, and content creation. On-site opportunities are available but optional for most roles, with exceptions for physical construction and permaculture projects.',
  },
  {
    question: 'What skills or experience do I need?',
    answer:
      'Requirements vary by role. Technical collaborators should have relevant development or design experience. Community builders need strong communication skills. On-site roles may require physical capabilities. Most importantly, we value alignment with our vision and willingness to learn.',
  },
  {
    question: 'Is there compensation for collaborators?',
    answer:
      'Compensation varies by role and commitment level. Some positions offer traditional compensation, while others provide NFT-based ownership stakes. All collaborators receive access to our network, learning opportunities, and potential revenue sharing based on contribution level.',
  },
  {
    question: 'How does the NFT-based ownership work?',
    answer:
      'Our NFTs represent ownership stakes in the community and its projects. Different tiers offer varying levels of voting rights, revenue sharing, and access to facilities. The value of these NFTs can appreciate as the community grows and projects succeed.',
  },
  {
    question: 'Can I collaborate from another country?',
    answer:
      "Absolutely! We're a global community with collaborators from many countries. Remote roles have no location restrictions. For on-site roles, we can assist with necessary documentation and provide guidance on Mexican visa requirements.",
  },
  {
    question: 'What tools and platforms do you use?',
    answer:
      'We use industry-standard tools for each domain: GitHub for development, Discord for community, professional design tools for creative work. All collaborators get access to our internal documentation and communication platforms.',
  },
  {
    question: 'Is there a mentorship program?',
    answer:
      'Yes, we pair new collaborators with experienced team members in their domain. Our goal is to foster knowledge sharing and skill development while building our community. Regular workshops and learning sessions are also available.',
  },
  {
    question: 'How can I switch between different collaboration areas?',
    answer:
      'We encourage cross-domain collaboration! You can start in one area and expand your involvement based on your interests and community needs. Many of our most valuable contributors work across multiple domains.',
  },
]

function CollaborationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <YStack w={650} space="$4" $sm={{ w: '100%' }}>
      {collaborationFaqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </YStack>
  )
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <Card bw={1} bc="$borderColor" br="$6" ov="hidden" animation="quick" w="100%">
      <XStack
        p="$5"
        pr="$4"
        jc="space-between"
        ai="center"
        cursor="pointer"
        pressStyle={{ opacity: 0.8 }}
        onPress={onToggle}
        w="100%"
      >
        <YStack f={1} pr="$4">
          <H3 size="$6">{question}</H3>
        </YStack>
        <YStack>
          {isOpen ? (
            <ChevronUp size={20} color="var(--color)" />
          ) : (
            <ChevronDown size={20} color="var(--color)" />
          )}
        </YStack>
      </XStack>
      {isOpen && (
        <YStack p="$5" pt="$0" animation="quick">
          <Paragraph size="$4" theme="alt2">
            {answer}
          </Paragraph>
        </YStack>
      )}
    </Card>
  )
}

const priorityRoles = [
  {
    title: 'Technical Development',
    theme: 'blue',
    roles: [
      'Full-stack Developer',
      'Blockchain Developer',
      'AI/ML Engineer',
      'DevOps Engineer',
      'UI/UX Designer',
    ],
  },
  {
    title: 'Land & Sustainability',
    theme: 'green',
    roles: [
      'Permaculture Designer',
      'Land Planning Expert',
      'Sustainable Architect',
      'Natural Builder',
      'Water Systems Specialist',
    ],
  },
  {
    title: 'Community & Operations',
    theme: 'purple',
    roles: [
      'Community Manager',
      'Social Media Strategist',
      'Content Creator',
      'Project Coordinator',
      'Executive Assistant',
    ],
  },
  {
    title: 'Research & Innovation',
    theme: 'yellow',
    roles: [
      'AI Research Lead',
      'Sustainability Researcher',
      'Documentation Writer',
      'Grant Writer',
      'Innovation Strategist',
    ],
  },
  {
    title: 'Education & Culture',
    theme: 'orange',
    roles: [
      'Workshop Facilitator',
      'Language Teacher',
      'Cultural Liaison',
      'Educational Content Creator',
      'Community Events Organizer',
    ],
  },
  {
    title: 'Health & Wellbeing',
    theme: 'pink',
    roles: [
      'Holistic Health Practitioner',
      'Yoga/Meditation Teacher',
      'Nutritionist',
      'Mental Health Advocate',
      'Wellness Program Coordinator',
    ],
  },
]
