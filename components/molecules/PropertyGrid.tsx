import { XStack } from 'tamagui'

interface PropertyGridProps {
  children: React.ReactNode
}

export function PropertyGrid({ children }: PropertyGridProps) {
  return (
    <XStack pos="relative" jc="center" gap="$4" $sm={{ fd: 'column' }} width="100%">
      {children}
    </XStack>
  )
}
