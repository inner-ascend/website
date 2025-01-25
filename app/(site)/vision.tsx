import { useTint } from '@tamagui/logo'
import { Button, H1, Paragraph, Spacer, XStack, YStack } from 'tamagui'
import { ContainerLarge } from '~/components/Containers'
import { HeadInfo } from '~/components/HeadInfo'
import { SocialLinksRow } from '~/features/site/home/SocialLinksRow'
import { ThemeNameEffect } from '~/features/site/theme/ThemeNameEffect'

function VisionLayout({ children }: { children: React.ReactNode }) {
  const { tint } = useTint()
  return <YStack theme={tint as any}>{children}</YStack>
}

export default function Vision() {
  return (
    <VisionLayout>
      <ThemeNameEffect />
      <HeadInfo
        title="Vision | Inner Ascend"
        description="Transform the Future of Community Living through NFT-Powered Membership"
      />

      {/* Hero Section with Background */}
      <YStack pos="relative" height={700} $sm={{ height: 500 }}>
        <YStack
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          style={{
            backgroundImage: 'url(/images/hero/community-living.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <YStack
          fullscreen
          zi={1}
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%), linear-gradient(0deg, rgba(0,100,100,0.15) 0%, rgba(0,0,0,0) 100%)',
          }}
        />
        <YStack zi={2} py="$12" space="$6" ai="center" jc="center" f={1}>
          <ContainerLarge space="$4">
            <H1
              size="$12"
              ta="center"
              className="hero-text"
              color="white"
              fontWeight="900"
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}
              $sm={{ size: '$10' }}
            >
              Transform the Future of Community Living
            </H1>
            <Paragraph
              size="$8"
              ta="center"
              color="white"
              o={0.9}
              fontWeight="500"
              style={{
                textShadow: '0 1px 8px rgba(0,0,0,0.3)',
              }}
              $sm={{ size: '$6' }}
            >
              Access Sustainable Communities Worldwide Through NFT-Powered Membership
            </Paragraph>
            <Paragraph
              size="$6"
              ta="center"
              color="white"
              o={0.9}
              maw={800}
              als="center"
              fontWeight="400"
              style={{
                textShadow: '0 1px 8px rgba(0,0,0,0.3)',
              }}
              $sm={{ size: '$4' }}
            >
              Inner Ascend DAO is revolutionizing conscious community living. Through NFT
              membership, access regenerative spaces globally, participate in governance, and shape
              the future of sustainable communities.
            </Paragraph>
            <XStack
              jc="center"
              mt="$6"
              gap="$4"
              $sm={{
                flexDirection: 'column',
                ai: 'center',
                gap: '$3',
                maxWidth: 200,
                als: 'center',
              }}
            >
              <Button
                size="$5"
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
                Join Whitelist
              </Button>
              <Button
                size="$5"
                theme="alt1"
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
                Learn More
              </Button>
            </XStack>
          </ContainerLarge>
        </YStack>
      </YStack>

      <Spacer />
      <SocialLinksRow />
      <Spacer size="$10" />
    </VisionLayout>
  )
}
