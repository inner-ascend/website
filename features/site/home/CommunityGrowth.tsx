import type { SizeTokens } from '@tamagui/core'
import { useTint } from '@tamagui/logo'
import { Play } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Button, ListItem, Paragraph, Separator, Square, XStack, YStack, styled } from 'tamagui'

import { ContainerLarge } from '../../../components/Containers'
import { Link } from '../../../components/Link'
import { HomeH2, HomeH3 } from './HomeHeaders'

const StyledButton = styled(Button, {
  variants: {
    size: {
      '...size': (size: SizeTokens, { tokens }) => {
        return {
          height: tokens.size[size],
          borderRadius: tokens.radius[size],
          gap: tokens.space[size],
        }
      },
    },
  } as const,
})

const growthStages = [
  {
    name: 'Phase 1: Foundation',
    date: 'Sep-Dec 2025',
    description: 'Community and DAO setup',
    features: [
      'Initial DAO token distribution',
      'Core team formation',
      'Community platform launch',
      'Early member onboarding',
    ],
  },
  {
    name: 'Phase 2: Land',
    date: 'Jan-Apr 2026',
    description: 'Land acquisition and planning',
    features: [
      'Land NFT minting',
      'Property evaluation',
      'Legal framework setup',
      'Sustainable design planning',
    ],
  },
  {
    name: 'Phase 3: Infrastructure',
    date: 'May-Dec 2026',
    description: 'Sustainable systems development',
    features: [
      'Renewable energy systems',
      'Water management',
      'Permaculture design',
      'Initial housing units',
    ],
  },
  {
    name: 'Phase 4: Community',
    date: 'Jan-Jun 2027',
    description: 'Building social fabric',
    features: [
      'Governance framework',
      'Resource sharing system',
      'Skills workshops',
      'Cultural events',
    ],
  },
  {
    name: 'Phase 5: Expansion',
    date: 'Jul 2027 →',
    description: 'Scaling the ecosystem',
    features: [
      'Additional land acquisition',
      'New member integration',
      'Inter-community networks',
      'Knowledge sharing platform',
    ],
  },
] as const

export function CommunityGrowth() {
  const { tint } = useTint()
  const [activeStage, setActiveStage] = useState(0)
  const currentStage = growthStages[activeStage]

  return (
    <YStack>
      <ContainerLarge position="relative" space="$8">
        <YStack zi={1} space="$3">
          <HomeH2 pos="relative">
            Community <span className="rainbow clip-text">Growth</span>
          </HomeH2>
          <HomeH3>
            Watch your community evolve through different stages of development, from initial
            planning to thriving ecosystem.
          </HomeH3>
        </YStack>

        <XStack>
          <YStack
            f={2}
            miw="55%"
            als="center"
            zi={100}
            elevation="$4"
            br="$4"
            theme={tint as any}
            space="$4"
          >
            <XStack
              bw={1}
              bc="$borderColor"
              elevation="$1"
              w="100%"
              br="$4"
              ov="hidden"
              h={400}
              als="center"
              x={0}
              $sm={{
                fd: 'column',
                h: 'auto',
              }}
            >
              <YStack
                width="40%"
                theme="alt2"
                bg="$color3"
                f={1}
                jc="space-between"
                pointerEvents="auto"
                $sm={{
                  width: '100%',
                  f: 0,
                  pb: '$2',
                }}
              >
                {growthStages.map((stage, i) => {
                  const isActive = i === activeStage
                  return (
                    <ListItem
                      key={stage.name}
                      theme={isActive ? 'active' : 'alt2'}
                      px="$4"
                      py="$4"
                      f={1}
                      title={stage.name}
                      iconAfter={
                        <XStack jc="unset" $sm={{ jc: 'flex-end', minWidth: '38%' }}>
                          <Paragraph
                            size="$3"
                            o={0.7}
                            fontFamily="$silkscreen"
                            $sm={{ size: '$2' }}
                          >
                            {stage.date}
                          </Paragraph>
                        </XStack>
                      }
                      backgroundColor={isActive ? '$color2' : 'transparent'}
                      subTitle={stage.description}
                      cursor="pointer"
                      onPress={() => setActiveStage(i)}
                      pressStyle={{ scale: 0.97 }}
                    />
                  )
                })}
              </YStack>

              <Separator vertical $sm={{ vertical: false, my: '$0.5' }} />

              <YStack
                f={1}
                p="$4"
                space="$4"
                width="60%"
                bg="$color3"
                $sm={{
                  width: '100%',
                  pt: '$4',
                }}
              >
                <YStack space="$2">
                  <XStack
                    jc="space-between"
                    ai="center"
                    $sm={{ fd: 'column', ai: 'flex-start', gap: '$1' }}
                  >
                    <Paragraph size="$8" fontFamily="$silkscreen" $sm={{ size: '$7' }}>
                      {currentStage.name}
                    </Paragraph>
                    <Paragraph size="$6" fontFamily="$silkscreen" o={0.7} $sm={{ size: '$5' }}>
                      {currentStage.date}
                    </Paragraph>
                  </XStack>
                  <Paragraph size="$5" theme="alt2">
                    {currentStage.description}
                  </Paragraph>
                </YStack>

                <YStack space="$2">
                  {currentStage.features.map((feature, i) => (
                    <XStack key={i} space="$2" ai="center">
                      <Square size={8} bc="$color" br="$1" />
                      <Paragraph theme="alt1">{feature}</Paragraph>
                    </XStack>
                  ))}
                </YStack>
              </YStack>
            </XStack>

            <YStack
              br="$4"
              elevation="$4"
              ov="hidden"
              backgroundColor="$background"
              p="$6"
              bw={1}
              bc="$borderColor"
              bg="$color3"
              w="100%"
              ai="center"
              space="$5"
            >
              <YStack ai="center" space="$2">
                <Paragraph size="$8" fontFamily="$silkscreen">
                  Next Steps
                </Paragraph>
                <Paragraph size="$4" theme="alt2" ta="center" maw={500}>
                  Join our community and be part of the next generation of sustainable living
                </Paragraph>
              </YStack>
              <YStack space="$4" ai="center" w="100%" maw={400}>
                <Link href="/mexico" w="100%">
                  <Button
                    w="100%"
                    size="$5"
                    theme="active"
                    fontFamily="$silkscreen"
                    iconAfter={Play}
                  >
                    Join the DAO
                  </Button>
                </Link>
                <Link href="/mexico" w="100%">
                  <Button w="100%" size="$5" theme="alt2" fontFamily="$silkscreen">
                    View Land NFTs
                  </Button>
                </Link>
                <Link href="/mexico" w="100%">
                  <Button w="100%" size="$5" theme="alt2" fontFamily="$silkscreen">
                    Community Guidelines
                  </Button>
                </Link>
                <Link href="/docs/intro/introduction" w="100%">
                  <Button w="100%" size="$5" theme="alt2" fontFamily="$silkscreen">
                    Docs &raquo;
                  </Button>
                </Link>
              </YStack>
            </YStack>
          </YStack>
        </XStack>
      </ContainerLarge>
    </YStack>
  )
}
