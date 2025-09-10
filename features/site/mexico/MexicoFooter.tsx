import { memo } from 'react'
import { YStack, XStack, Text, Button, Input } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { Link } from '~/components/Link'

export const MexicoFooter = memo(() => {
  const quickLinks = [
    { label: 'Vision', href: '#vision' },
    { label: 'Programs', href: '#programs' },
    { label: 'Join', href: '#join' },
    { label: 'Connect', href: '#contact' }
  ]

  return (
    <YStack
      bg="$background"
      borderTopWidth={1}
      borderTopColor="$borderColor"
      py="$8"
      id="contact"
    >
      <ContainerLarge>
        <YStack space="$8">
          {/* Main Footer Content */}
          <XStack
            space="$8"
            $md={{
              flexDirection: 'row',
              jc: 'space-between'
            }}
            $sm={{
              flexDirection: 'column',
              space: '$6'
            }}
          >
            {/* Brand & Description */}
            <YStack space="$4" f={1} maxWidth={400}>
              <Text fontSize="$6" fontWeight="700" color="$color">
                Proyecto Salvaje
              </Text>
              
              <Text
                fontSize="$4"
                color="$color"
                lineHeight="$1"
                opacity={0.8}
                $sm={{ fontSize: '$3' }}
              >
                A regenerative village school dedicated to human integrity, sovereign living, and harmony with nature in Oaxaca, Mexico.
              </Text>
            </YStack>

            {/* Quick Links */}
            <YStack space="$4" f={1}>
              <Text fontSize="$4" fontWeight="600" color="$color">
                Quick Links
              </Text>
              
              <YStack space="$2">
                {quickLinks.map((link) => (
                  <Link key={link.label} href={link.href}>
                    <Button
                      variant="ghost"
                      size="$3"
                      color="$color"
                      hoverStyle={{ bg: '$backgroundHover' }}
                      jc="flex-start"
                      p="$2"
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </YStack>
            </YStack>

            {/* Newsletter Signup */}
            <YStack space="$4" f={1} maxWidth={300}>
              <Text fontSize="$4" fontWeight="600" color="$color">
                Stay Connected
              </Text>
              
              <YStack space="$3">
                <Input
                  placeholder="Enter your email"
                  borderColor="$borderColor"
                  focusStyle={{ borderColor: '$blue9' }}
                />
                <Button
                  size="$3"
                  bg="$blue9"
                  color="white"
                  hoverStyle={{ bg: '$blue10' }}
                >
                  Subscribe
                </Button>
              </YStack>
            </YStack>
          </XStack>

          {/* Contact Info */}
          <YStack
            space="$4"
            p="$6"
            bg="$backgroundHover"
            borderRadius="$3"
            $md={{
              flexDirection: 'row',
              jc: 'space-between',
              ai: 'center'
            }}
            $sm={{
              flexDirection: 'column',
              space: '$3'
            }}
          >
            <YStack space="$2">
              <Text fontSize="$4" fontWeight="600" color="$color">
                Contact Information
              </Text>
              
              <YStack space="$1">
                <Text fontSize="$3" color="$color" opacity={0.8}>
                  Email: info@proyectosalvaje.com
                </Text>
                <Text fontSize="$3" color="$color" opacity={0.8}>
                  Location: Mazunte, Oaxaca, Mexico
                </Text>
              </YStack>
            </YStack>

            <Text fontSize="$3" color="$color" opacity={0.6}>
              Copyright © 2025 Proyecto Salvaje. All rights reserved.
            </Text>
          </YStack>
        </YStack>
      </ContainerLarge>
    </YStack>
  )
})
