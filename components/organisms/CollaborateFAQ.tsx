import { YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { FAQAccordion, FAQData } from '../molecules/FAQAccordion'

const faqs: FAQData[] = [
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

export function CollaborateFAQ() {
  return (
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
        <FAQAccordion items={faqs} />
      </YStack>
    </YStack>
  )
}
