import { useState } from 'react'
import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { HomeH2, HomeH3 } from '../home/HomeHeaders'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Can I live on the land full-time?",
    answer: "Yes, Anchor Stewards ($100K-150K) receive lifetime residency rights and can build their own eco-home on a private land plot. Core Contributors have seasonal stay privileges."
  },
  {
    question: "How are contributions structured?",
    answer: "All contributions are sacred investments into Earth restoration, never speculative real estate. Funds go directly toward land acquisition, infrastructure development, and community programs."
  },
  {
    question: "How do you work with local communities?",
    answer: "We prioritize hiring local workers (5-20 jobs by Year 3), offer free workshops to indigenous neighbors, and engage in cultural exchange programs that honor traditional knowledge."
  },
  {
    question: "What protections are in place for contributors?",
    answer: "We have clear legal structures for land use, environmental protection commitments, and community guidelines. All contributions are documented with transparent financial reporting."
  },
  {
    question: "What happens if the project doesn't proceed?",
    answer: "In the unlikely event the project cannot proceed, all contributions would be returned to stewards. We have contingency plans and legal protections in place."
  },
  {
    question: "How do you ensure environmental protection?",
    answer: "We follow permaculture principles, use only natural building materials, implement comprehensive waste management systems, and work with environmental consultants to ensure minimal impact."
  },
  {
    question: "Can I visit before committing?",
    answer: "Yes, we offer discovery calls and can arrange site visits for serious prospective stewards. We believe in transparency and want you to feel confident in your decision."
  },
  {
    question: "What's the application process?",
    answer: "Submit an application through our form, schedule a discovery call, and if aligned, we'll guide you through the stewardship selection process. We're looking for committed individuals who share our vision."
  }
]

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <YStack space="$3" p="$4" bg="$background" borderRadius="$4" borderWidth={1} borderColor="$borderColor">
      <XStack ai="center" jc="space-between" onPress={onToggle} cursor="pointer">
        <Paragraph size="$5" fontWeight="600" color="$color" f={1}>
          {item.question}
        </Paragraph>
        {isOpen ? <ChevronUp size={20} color="$color" /> : <ChevronDown size={20} color="$color" />}
      </XStack>
      {isOpen && (
        <Paragraph size="$4" theme="alt1" mt="$2">
          {item.answer}
        </Paragraph>
      )}
    </YStack>
  )
}

export function SalvajeFAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <YStack space="$6" mb="$8">
      <YStack space="$6" mb="$6">
        <HomeH2 ta="center" $sm={{ size: '$8' }}>
          Your Questions, Answered
        </HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
          Everything you need to know about joining Proyecto Salvaje
        </HomeH3>
      </YStack>

      <YStack space="$4" ai="center" maw={800} als="center">
        <Paragraph size="$6" ta="center" theme="alt1" $sm={{ size: '$5' }}>
          We believe in transparency and clear communication. Here are answers to the most common questions about our sanctuary and community.
        </Paragraph>

        <YStack space="$3" mt="$6" width="100%">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </YStack>

        <XStack
          gap="$4"
          mt="$6"
          $sm={{
            flexDirection: 'column',
            ai: 'center',
            gap: '$3',
          }}
        >
          <Button
            size="$4"
            theme="green"
            fontFamily="$silkscreen"
            pressStyle={{
              scale: 0.97,
            }}
            animation="quick"
            hoverStyle={{
              opacity: 0.9,
              scale: 1.02,
            }}
          >
            Still Have Questions?
          </Button>
          <Button
            size="$4"
            theme="alt2"
            fontFamily="$silkscreen"
            borderWidth={1}
            pressStyle={{
              scale: 0.97,
            }}
            animation="quick"
            hoverStyle={{
              opacity: 0.9,
              scale: 1.02,
            }}
          >
            Schedule a Call
          </Button>
        </XStack>
      </YStack>
    </YStack>
  )
}
