import { ThemeTint, ThemeTintAlt, useTint } from '@tamagui/logo'
import { memo } from 'react'
import { Button, Paragraph, SizableText, Spacer, Text, XStack, YStack, styled } from 'tamagui'
import { ContainerLarge } from '../../../components/Containers'
import { Link } from '../../../components/Link'
import { seasons } from '../seasons/SeasonTogglePopover'

import { HeroTitle } from '~/components/molecules/HeroTitle'
import { HomeHeroBelow } from '~/components/organisms/HomeHeroBelow'
import { HomeHeroText } from '~/components/organisms/HomeHeroText'

export function Hero() {
  const { name } = useTint()

  return (
    <>
      <div className={`${name}-season _dsp-contents`}>
        <HeroContents />
      </div>
      <HomeHeroBelow />
    </>
  )
}

const HeroContents = memo(function HeroContents() {
  const { name, tint, tintAlt } = useTint()

  return (
    <ContainerLarge contain="layout" pos="relative">
      <YStack
        fullscreen
        left={-500}
        right={-500}
        bottom={-100}
        style={{
          maskImage: `linear-gradient(#000 50%, transparent)`,
        }}
      >
        <YStack
          className="bg-grid"
          fullscreen
          pe="none"
          o={0.125}
          style={{
            maskImage: `radial-gradient(ellipse at bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%)`,
          }}
        />
      </YStack>
      <YStack
        f={1}
        ov="hidden"
        gap="$3"
        position="relative"
        pt="$16"
        mb="$4"
        $sm={{
          maxWidth: '100%',
          mx: 'auto',
          pb: '$4',
        }}
      >
        {/* <>
          <XGroup pos="absolute" als="center" y={-80} br="$8">
            <Link href="/takeout">
              <XGroup.Item>
                <Button
                  // animation="bouncy"
                  bc="$color6"
                  size="$3"
                  br="$10"
                  elevation="$0.5"
                  fontFamily="$silkscreen"
                  fontSize={12}
                  brw={0.5}
                >
                  Takeout
                  <YStack y={-1} dsp="inline-flex">
                    <TakeoutIcon scale={0.75} />
                  </YStack>
                  <Text
                    y={-0.5}
                    ff="$body"
                    fontSize="$4"
                    color="$color10"
                    $sm={{ dsp: 'none' }}
                  >
                    starter
                  </Text>
                </Button>
              </XGroup.Item>
            </Link>

            <Theme name="tan">
              <Link href="/bento">
                <XGroup.Item>
                  <Button
                    // animation="bouncy"
                    blw={0.5}
                    bc="$color3"
                    size="$3"
                    br="$10"
                    elevation="$0.5"
                    fontFamily="$silkscreen"
                    fontSize={12}
                    hoverStyle={{
                      bc: '$color3',
                      bg: '$color2',
                    }}
                  >
                    Bento
                    <YStack dsp="inline-flex">
                      <BentoIcon scale={0.75} />
                    </YStack>
                    <Text
                      y={-0.5}
                      ff="$body"
                      fontSize="$4"
                      color="$color10"
                      $sm={{ dsp: 'none' }}
                    >
                      more ui
                    </Text>
                  </Button>
                </XGroup.Item>
              </Link>
            </Theme>

            {/* <FigmaButton circular /> */}
        {/* <GithubButton /> */}
        {/* </XGroup>
        </> */}

        <YStack ai="flex-start" $gtSm={{ ai: 'center' }} gap="$4">
          <HeroTitle title="Inner Ascend" subtitle="DAO" />
          <HomeHeroText />
        </YStack>

        <Spacer size="$8" />
        {/* <InstallInput /> */}
        <Spacer size="$14" />

        <XStack ai="center" jc="center" gap="$2" $xxs={{ ai: 'center', fw: 'wrap', gap: 0 }}>
          {/* <Link target="_blank" href="https://t.me/+dv4zmhAQfHMzYWFk">
            <TooltipSimple placement="top" delay={0} restMs={25} label="Telegram">
              <YStack p="$5" $sm={{ p: '$3' }} opacity={0.65} hoverStyle={{ opacity: 1 }}>
                <VisuallyHidden>
                  <Text>Telegram</Text>
                </VisuallyHidden>
                <TelegramIcon width={24} />
              </YStack>
            </TooltipSimple>
          </Link> */}

          <ThemeTint>
            <Link
              asChild
              href="https://astralintegration.notion.site/Inner-Ascend-White-Paper-136c4d6657888066bbd9c3bee9bf6f96"
            >
              <Button
                aria-label="Get started (docs)"
                fontFamily="$silkscreen"
                size="$5"
                fontSize="$6"
                borderRadius={1000}
                bordered
                bw={2}
                mx="$2"
                tabIndex="0"
                elevation="$1"
                pressStyle={{
                  elevation: '$0',
                }}
                // TODO this is applying in dark mode...
                // $theme-light={{
                //   bg: '$color1',
                //   hoverStyle: {
                //     bg: '$color2',
                //     color: '$color10',
                //   },
                // }}
              >
                Start
              </Button>
            </Link>
          </ThemeTint>

          {/* <TooltipSimple placement="top" delay={0} restMs={25} label="Discord">
            <Link asChild target="_blank" href="https://discord.gg/xdJNttaFrZ">
              <YStack
                tag="a"
                p="$5"
                $sm={{ p: '$3' }}
                opacity={0.65}
                hoverStyle={{ opacity: 1 }}
              >
                <VisuallyHidden>
                  <Text>Discord</Text>
                </VisuallyHidden>
                <DiscordIcon plain width={24} />
              </YStack>
            </Link>
          </TooltipSimple> */}
        </XStack>

        {name !== 'tamagui' && (
          <SizableText
            size="$10"
            h={200}
            my={-213 / 2}
            rotate="-8deg"
            als="center"
            y={-100}
            x={-115}
            zi={100}
            pe="none"
          >
            {seasons[name]}
          </SizableText>
        )}
      </YStack>

      <Spacer size="$7" />
    </ContainerLarge>
  )
})

const Subtitle = styled(Paragraph, {
  color: '$gray10',
  size: '$6',
  fontFamily: '$silkscreen',
  ta: 'left',
  ls: -1,

  $gtSm: {
    ta: 'center',
    size: '$8',
    ls: -1,
  },

  $gtMd: {
    size: '$8',
    ls: -1,
  },

  $gtLg: {
    size: '$9',
    lh: 50,
    ls: -1,
  },
})

const Tag = styled(Text, {
  tag: 'a',
  className: 'hero-tag text-decoration-none',
  fontFamily: '$silkscreen',
  fontSize: 'inherit' as any,
  borderRadius: '$2',
  px: '$1',
  mx: '$-1',
  cursor: 'pointer',
  color: '$color10',
  bg: '$color3',

  hoverStyle: {
    color: '$color',
    bg: '$color4',
  },

  variants: {
    active: {
      true: {
        color: '$color10',
        bg: '$color5',

        hoverStyle: {
          color: '$color12',
          bg: '$color5',
        },
      },
    },
  } as const,
})

const HeroText = styled(Text, {
  position: 'absolute',

  $sm: {
    t: 0,
    l: -4,
  },

  $gtSm: {
    t: 2,
  },

  $gtMd: {
    t: 4,
  },

  $gtLg: {
    t: 8,
  },
})

const TextWithEffects = ({ text }: { text: string }) => {
  // for a fade in delay effect
  // const [show, setShow] = useState(false)

  // useEffect(() => {
  //   const tm = setTimeout(() => {
  //     setShow(true)
  //   }, 500)
  //   return () => {
  //     clearTimeout(tm)
  //   }
  // }, [])
  return (
    <>
      <span style={{ opacity: 0 }}>{text}</span>
      <YStack
        animation="lazy"
        fullscreen
        // {...(!show && {
        //   y: -10,
        //   o: 0,
        // })}
        // {...(show && {
        //   y: 0,
        //   o: 1,
        // })}
      >
        <HeroText
          className="clip-text rainbow"
          l={-4}
          $sm={{ l: 0 }}
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
        <ThemeTintAlt offset={2}>
          <HeroText
            className="mask-gradient-down"
            style={{ mixBlendMode: 'hard-light' }}
            pe="none"
            o={0.5}
            col="$color8"
            $sm={{ l: 3 }}
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        </ThemeTintAlt>
        <ThemeTintAlt offset={1}>
          <HeroText
            l={-3}
            className="mask-gradient-up"
            style={{ mixBlendMode: 'hard-light' }}
            pe="none"
            col="$color8"
            $sm={{ l: 1.5 }}
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        </ThemeTintAlt>
        <ThemeTintAlt offset={-2}>
          <HeroText
            l={0}
            className="mask-gradient-right"
            pe="none"
            col="$color8"
            o={0.26}
            $sm={{ l: 3 }}
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        </ThemeTintAlt>
        <ThemeTintAlt offset={-3}>
          <HeroText
            l={0}
            className="mask-gradient-right"
            pe="none"
            col="$color8"
            o={0.5}
            $sm={{ l: 3 }}
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        </ThemeTintAlt>
      </YStack>
    </>
  )
}
