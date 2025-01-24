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
      'We have four main collaboration areas: 1) Technical: blockchain development, AI/ML engineering, full-stack development, DevOps, UI/UX design, 2) Sustainability: permaculture design, natural building, renewable energy systems, water management, 3) Community: project management, content creation, education, events coordination, 4) Research: sustainability research, documentation, grant writing. Each area offers both remote and on-site positions, with flexible engagement levels.',
  },
  {
    question: 'How does the compensation and ownership model work?',
    answer:
      'We use a hybrid model that combines traditional compensation with Web3 elements. This includes revenue sharing, NFT-based ownership rights, and governance tokens. Long-term collaborators can earn ownership stakes in our projects and communities through our DAO structure. On-site roles may also include accommodation and additional benefits.',
  },
  {
    question: "What's the current focus of the Mexico project?",
    answer:
      "We're in Phase 1, focusing on land development and initial infrastructure. Key priorities include permaculture design implementation, sustainable building construction, community platform development, and establishing our first on-site team. We're particularly seeking collaborators in natural building, permaculture, and technical infrastructure.",
  },
  {
    question: 'Can I start remotely and transition to on-site?',
    answer:
      'Yes! Many collaborators start remotely and transition to on-site roles as opportunities arise. We have a structured pathway: starting with remote work, participating in virtual meetings, short-term project visits (2-4 weeks), extended stays (1-3 months), and eventually full relocation for key team members. We provide support throughout this journey.',
  },
  {
    question: 'What skills and qualities are you looking for?',
    answer:
      "Beyond technical skills, we value: passion for sustainability and regenerative living, ability to work in a decentralized environment, strong communication skills in English (Spanish is a plus), self-motivation, and alignment with community values. We're looking for people who can grow with us and contribute to our long-term vision.",
  },
  {
    question: 'How does the mentorship and training work?',
    answer:
      'Each collaborator is paired with an experienced team member in their area. We provide access to our knowledge base, regular skill-sharing sessions, and structured learning paths. Technical roles include code reviews and architecture guidance, while sustainability roles include hands-on training and expert workshops.',
  },
  {
    question: "What's the collaboration process like?",
    answer:
      "After initial contact, we schedule a call to discuss your interests and experience. If there's mutual interest, we start with a small trial project or paid trial period (2-4 weeks). You'll be integrated into our communication channels, assigned a mentor, and given clear objectives. Regular feedback ensures alignment and growth.",
  },
  {
    question: 'How are decisions made in the community?',
    answer:
      'We use a DAO (Decentralized Autonomous Organization) structure where collaborators participate in decision-making based on their role and contribution level. Day-to-day decisions are made by team leads, while strategic and community-wide decisions use token-weighted voting through our DAO. Regular community calls and online forums facilitate discussions.',
  },
  {
    question: 'What immediate opportunities are available?',
    answer:
      'Our priority roles are listed above, with immediate needs in technical development (full-stack, blockchain), sustainability (natural building, permaculture), and community building. We also have ongoing opportunities in content creation, research, and project coordination. Check our current projects section for the most urgent needs.',
  },
  {
    question: 'How do I take the next step?',
    answer:
      "1) Review our priority roles and identify areas where you can contribute, 2) Prepare a brief introduction highlighting your relevant experience and interests, 3) Join our Discord community to connect with current collaborators, 4) Reach out through our contact form, 5) We'll schedule an initial discussion. For technical roles, please include links to previous work.",
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
