import { useEffect, useState } from 'react'
import { Button, XStack, YStack } from 'tamagui'

export function SalvajeStickyBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsVisible(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <YStack
      pos="fixed"
      top={0}
      left={0}
      right={0}
      zi={1000}
      bg="$background"
      borderBottomWidth={1}
      borderBottomColor="$borderColor"
      py="$3"
      px="$4"
      $sm={{ display: 'none' }}
    >
      <XStack jc="center" gap="$3" maxWidth={1200} als="center" width="100%">
        <Button
          size="$3"
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
          Apply to Join
        </Button>
        <Button
          size="$3"
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
          Schedule Call
        </Button>
      </XStack>
    </YStack>
  )
}
