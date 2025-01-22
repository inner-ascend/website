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
    answer: "Each NFT represents a membership tier with specific rights and benefits in the community. Smart contracts ensure transparent ownership, voting rights, and revenue sharing based on your tier level."
  },
  {
    question: "What are the legal considerations?",
    answer: "Our project operates through a Mexican corporation with proper permits for foreign investment. NFT holders receive membership rights while the legal entity maintains land ownership in compliance with Mexican law."
  },
  {
    question: "Can I live there year-round?",
    answer: "Yes, Founding Members can live year-round in their private villas. Core Members have extended stay rights, while Community Members enjoy seasonal access. All stays comply with Mexican visa requirements."
  },
  {
    question: "How is the community governed?",
    answer: "We use a DAO (Decentralized Autonomous Organization) structure where members vote on key decisions. Voting power is weighted by membership tier, ensuring balanced representation while rewarding higher commitment levels."
  },
  {
    question: "What about healthcare and amenities?",
    answer: "The property is 20 minutes from a major hospital and 15 minutes from markets and amenities. We'll also have on-site basic medical facilities and wellness centers for community members."
  },
  {
    question: "How sustainable is the project?",
    answer: "We're implementing solar power, rainwater harvesting, permaculture food systems, and waste recycling. Our goal is 80% self-sufficiency in energy and food production within two years of operation."
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