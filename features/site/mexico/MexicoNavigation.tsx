import { memo } from 'react'
import { YStack, XStack, Button, Text } from 'tamagui'
import { Link } from '~/components/Link'

export const MexicoNavigation = memo(() => {
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Vision', href: '#vision' },
    { label: 'The Land', href: '#land' },
    { label: 'Community', href: '#community' },
    { label: 'Programs', href: '#programs' },
    { label: 'Join Us', href: '#join' },
    { label: 'Contact', href: '#contact' },
  ]

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
    >
      <XStack
        maxWidth={1200}
        width="100%"
        mx="auto"
        jc="space-between"
        ai="center"
      >
        <Text fontSize="$6" fontWeight="600" color="$color">
          Proyecto Salvaje
        </Text>
        
        <XStack space="$4" display="none" $md={{ display: 'flex' }}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <Button
                variant="ghost"
                size="$3"
                color="$color"
                hoverStyle={{ bg: '$backgroundHover' }}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </XStack>

        <Button
          size="$3"
          bg="$blue9"
          color="white"
          hoverStyle={{ bg: '$blue10' }}
          $md={{ display: 'none' }}
        >
          Menu
        </Button>
      </XStack>
    </YStack>
  )
})
