'use client'

import { Button, H1, Paragraph, YStack } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { Link } from '~/components/Link'

export default function NotFound() {
  return (
    <YStack f={1} backgroundColor="$background">
      <ContainerLarge>
        <YStack
          ai="center"
          jc="center"
          py="$20"
          px="$4"
          space="$6"
          mih="70vh"
        >
          <H1 
            size="$13" 
            ta="center" 
            fontFamily="$silkscreen"
            theme="alt2"
          >
            404
          </H1>
          <Paragraph 
            size="$7" 
            ta="center" 
            theme="alt2"
            maw={500}
          >
            Oops! Looks like you've ventured into uncharted territory.
          </Paragraph>
          <Link href="/">
            <Button
              size="$5"
              theme="purple"
              fontFamily="$silkscreen"
              pressStyle={{
                scale: 0.97,
              }}
              animation="quick"
              hoverStyle={{
                opacity: 0.9,
                scale: 1.02
              }}
            >
              Return Home
            </Button>
          </Link>
        </YStack>
      </ContainerLarge>
    </YStack>
  )
} 