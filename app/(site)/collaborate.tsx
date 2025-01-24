import { useTint } from '@tamagui/logo'
import { ArrowRight, Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
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
import { ProjectRoadmap } from '~/components/mexico/ProjectRoadmap'
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

interface FAQItem {
  question: string
  answer: string
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

      {/* Current Projects Section */}
      <TintSection index={2}>
        <ContainerLarge>
          <YStack space="$6" mb="$8">
            <YStack space="$6" mb="$6">
              <HomeH2 ta="center" $sm={{ size: '$8' }}>
                Current Project: Mexico Ecovillage
              </HomeH2>
              <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
                Join us in building our first regenerative community
              </HomeH3>
            </YStack>

            <YStack pos="relative" height={300} br="$4" ov="hidden" mb="$6">
              <YStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                style={{
                  backgroundImage: 'url(/images/hero/oaxaca-paradise.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <YStack
                fullscreen
                zi={1}
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)',
                }}
              />
              <YStack f={1} ai="center" jc="center" zi={2}>
                <XStack space="$4">
                  <Button
                    size="$6"
                    theme="green"
                    fontFamily="$silkscreen"
                    onPress={() => (window.location.href = '/mexico#team-section')}
                  >
                    Join Our Team
                  </Button>
                  <Button
                    size="$6"
                    theme="alt1"
                    fontFamily="$silkscreen"
                    onPress={() => (window.location.href = '/mexico')}
                  >
                    Learn More
                  </Button>
                </XStack>
              </YStack>
            </YStack>

            <XStack fw="wrap" gap="$4" jc="center">
              <Card bordered theme="green" elevation="$2" p="$4" br="$4" f={1} miw={250} maw={300}>
                <YStack space="$2">
                  <H2 size="$6">Phase 1 Active</H2>
                  <Separator />
                  <Paragraph size="$4" theme="alt2">
                    Land acquisition and initial infrastructure development
                  </Paragraph>
                  <XStack space="$2" ai="center" mt="$2">
                    <ArrowRight size={16} />
                    <Button
                      theme="green"
                      size="$3"
                      onPress={() => (window.location.href = '/mexico#project-roadmap')}
                    >
                      View Roadmap
                    </Button>
                  </XStack>
                </YStack>
              </Card>

              <Card bordered theme="blue" elevation="$2" p="$4" br="$4" f={1} miw={250} maw={300}>
                <YStack space="$2">
                  <H2 size="$6">Location</H2>
                  <Separator />
                  <Paragraph size="$4" theme="alt2">
                    Oaxaca, Mexico - Mountain jungle near Pacific beaches
                  </Paragraph>
                  <XStack space="$2" ai="center" mt="$2">
                    <ArrowRight size={16} />
                    <Button
                      theme="blue"
                      size="$3"
                      onPress={() => (window.location.href = '/mexico#location-climate')}
                    >
                      View Location
                    </Button>
                  </XStack>
                </YStack>
              </Card>

              <Card bordered theme="purple" elevation="$2" p="$4" br="$4" f={1} miw={250} maw={300}>
                <YStack space="$2">
                  <H2 size="$6">Membership</H2>
                  <Separator />
                  <Paragraph size="$4" theme="alt2">
                    NFT-based ownership and governance model
                  </Paragraph>
                  <XStack space="$2" ai="center" mt="$2">
                    <ArrowRight size={16} />
                    <Button
                      theme="purple"
                      size="$3"
                      onPress={() => (window.location.href = '/mexico#membership-tiers')}
                    >
                      View Tiers
                    </Button>
                  </XStack>
                </YStack>
              </Card>
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Collaboration Journey */}
      <TintSection index={3}>
        <ContainerLarge position="relative">
          <ProjectRoadmap />
        </ContainerLarge>
      </TintSection>

      {/* Priority Roles Section */}
      <TintSection index={2}>
        <ContainerLarge>
          <YStack space="$6">
            <YStack space="$6" mb="$6">
              <HomeH2 ta="center" $sm={{ size: '$8' }}>
                Priority Roles
              </HomeH2>
              <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
                We're actively seeking passionate individuals for these key positions
              </HomeH3>
            </YStack>

            <XStack flexWrap="wrap" gap="$8" rowGap="$8" jc="center" $sm={{ gap: '$4' }} pb="$8">
              {priorityRoles.map((category, i) => (
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
                    theme={category.theme}
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
                      <Card padded>
                        <YStack space="$4">
                          <H2 size="$6">{category.title}</H2>
                          <Separator />
                        </YStack>
                        <Spacer size="$6"></Spacer>
                        <YStack f={1} space="$4">
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
                      </Card>
                    </YStack>
                  </Card>
                </YStack>
              ))}
            </XStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* FAQ Section */}
      <TintSection index={4}>
        <ContainerLarge>
          <YStack space="$6" mb="$8">
            <YStack space="$6" mb="$6">
              <HomeH2 ta="center" $sm={{ size: '$8' }}>
                Frequently Asked Questions
              </HomeH2>
              <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
                Common questions about collaborating with Inner Ascend
              </HomeH3>
            </YStack>

            <YStack space="$4" als="center">
              <FAQSection />
            </YStack>
          </YStack>
        </ContainerLarge>
      </TintSection>

      {/* Contact Section */}
      <TintSection index={2}>
        <ContainerLarge space="$4">
          <YStack space="$4" ai="center">
            <HomeH2 ta="center">Get in Touch</HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={600}>
              Have questions or want to discuss collaboration opportunities? Reach out to us through
              our social channels or send us a message.
            </HomeH3>
            <Spacer size="$2" />
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

const faqs: FAQItem[] = [
  {
    question: 'What types of collaboration opportunities are available?',
    answer:
      'We offer diverse opportunities including technical roles (development, AI, blockchain), sustainability roles (permaculture, natural building), community roles (management, content creation), and research positions. Both remote and on-site positions are available, with flexible engagement levels from part-time to full-time commitment.',
  },
  {
    question: 'How does the compensation and ownership model work?',
    answer:
      'We have a unique hybrid model combining traditional compensation with Web3 elements. This includes revenue sharing, NFT-based ownership rights, governance tokens, and for certain roles, accommodation in our communities. Long-term collaborators can earn ownership stakes through our DAO structure and participate in key decision-making.',
  },
  {
    question: "What's the collaboration process like?",
    answer:
      "We start with an initial discussion to understand your interests and skills, followed by a trial period to ensure mutual fit. You'll be paired with a mentor and given access to our learning resources. Regular feedback sessions and clear milestone tracking help guide your progress and growth within the community.",
  },
  {
    question: 'Can I transition between different roles?',
    answer:
      "Yes! We encourage skill development and role exploration. Many collaborators start in one area and expand their involvement as they discover new interests. We provide training and mentorship to support these transitions, whether it's moving between technical and community roles or shifting from remote to on-site positions.",
  },
  {
    question: 'What resources and support are provided?',
    answer:
      'Collaborators receive access to our knowledge base, training programs, development tools, and community resources. We provide mentorship, regular skill-sharing sessions, and opportunities to learn from experienced team members. For on-site roles, we assist with accommodation and integration into the local community.',
  },
  {
    question: 'How does remote collaboration work?',
    answer:
      'Remote collaborators are fully integrated into our community through digital platforms. We use a mix of async and real-time communication tools, regular video calls, and project management systems. Remote team members have equal access to learning resources and can participate in decision-making through our DAO structure.',
  },
  {
    question: 'What are the current priority projects?',
    answer:
      "Our main focus is the Mexico ecovillage project, where we're developing sustainable infrastructure, permaculture systems, and community spaces. We're also building our digital platform for community management and expanding our educational content. Priority roles are updated regularly based on project phases.",
  },
  {
    question: 'What makes an ideal collaborator?',
    answer:
      'We value passion for sustainability, openness to learning, and alignment with our community values. While specific skills are important, we equally value adaptability, initiative, and ability to work in a decentralized environment. Strong communication skills and comfort with both independent and collaborative work are essential.',
  },
  {
    question: 'How can I start contributing immediately?',
    answer:
      'You can begin by joining our community channels, participating in discussions, and exploring our documentation. We often have small starter projects available for new collaborators to get familiar with our workflow. Reach out through our contact form or social channels to discuss specific opportunities that match your interests.',
  },
  {
    question: 'What long-term opportunities exist?',
    answer:
      "Long-term collaborators can grow into leadership roles, develop new project initiatives, and gain ownership stakes in our communities. We're building a network of sustainable communities, offering opportunities for international collaboration and the chance to help shape the future of regenerative living.",
  },
]

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

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <YStack w={650} space="$4" $sm={{ w: '100%' }}>
      {faqs.map((faq, index) => (
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
