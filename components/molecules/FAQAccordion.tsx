import { useState } from 'react'
import { YStack } from 'tamagui'
import { FAQItem } from '../atoms/FAQItem'

export interface FAQData {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQData[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <YStack w={650} space="$4" $sm={{ w: '100%' }}>
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </YStack>
  )
}
