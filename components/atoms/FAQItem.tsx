import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { Card, H3, Paragraph, XStack, YStack } from 'tamagui'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
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
