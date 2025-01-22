import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Card, H3, Paragraph, XStack, YStack } from 'tamagui'

export interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How does the NFT ownership model work?",
    answer: "Each NFT represents a membership tier with specific rights and benefits in the community. Smart contracts ensure transparent ownership, voting rights, and revenue sharing based on your tier level. The NFTs are built on Ethereum and can be traded on secondary markets."
  },
  {
    question: "What are the legal considerations?",
    answer: "Our project operates through a Mexican corporation with proper permits for foreign investment. NFT holders receive membership rights while the legal entity maintains land ownership in compliance with Mexican law. We have established relationships with local authorities and legal experts to ensure full compliance."
  },
  {
    question: "Can I live there year-round?",
    answer: "Yes, Founding Members can live year-round in their private villas. Core Members have extended stay rights, while Community Members enjoy seasonal access. All stays comply with Mexican visa requirements, and we assist members with residency processes."
  },
  {
    question: "How is the community governed?",
    answer: "We use a DAO (Decentralized Autonomous Organization) structure where members vote on key decisions. Voting power is weighted by membership tier, ensuring balanced representation while rewarding higher commitment levels. Regular community meetings and online governance forums facilitate active participation."
  },
  {
    question: "What about healthcare and amenities?",
    answer: "We're located about an hour from Huatulco's hospitals and medical facilities. The community will feature an on-site wellness center and telemedicine facilities. Local markets and shops are accessible in nearby towns, and we're planning regular supply runs for community members."
  },
  {
    question: "How sustainable is the project?",
    answer: "We're implementing solar power, rainwater harvesting, permaculture food systems, and waste recycling. Our mountain location at 1200m provides ideal growing conditions year-round. The goal is 80% self-sufficiency in energy and food production within two years of operation."
  },
  {
    question: "What's the climate like?",
    answer: "Our mountain jungle location at 1200m elevation enjoys a moderate climate with temperatures between 20-28°C (68-82°F). The rainy season runs from June to October, supporting lush vegetation. The elevation provides cooler temperatures than the coast while maintaining tropical biodiversity."
  },
  {
    question: "How accessible is the location?",
    answer: "We're approximately one hour from both Huatulco International Airport and Pacific beaches. The property is accessible via well-maintained roads, with regular transport options available. The strategic location balances privacy with convenience to modern amenities."
  },
  {
    question: "What activities are available?",
    answer: "On-site activities include permaculture workshops, yoga, meditation, hiking trails, and community events. The surrounding area offers access to pristine beaches, cultural sites, local markets, and mountain adventures. We regularly organize group excursions and cultural experiences."
  },
  {
    question: "How do I get involved?",
    answer: "Start by joining our whitelist for priority access to NFT minting. We offer community calls to discuss the project in detail, and you can join our Discord for regular updates. Early supporters receive special benefits and founding member opportunities."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  return (
    <YStack w={650} space="$4" $sm={{ w: "100%" }}>
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

function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onToggle 
}: { 
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <Card 
      bw={1} 
      bc="$borderColor" 
      br="$6" 
      ov="hidden"
      animation="quick"
      w="100%"
    >
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
        <YStack 
          p="$5" 
          pt="$0"
          animation="quick"
        >
          <Paragraph size="$4" theme="alt2">
            {answer}
          </Paragraph>
        </YStack>
      )}
    </Card>
  )
} 