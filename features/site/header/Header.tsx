import { ThemeTint } from '@tamagui/logo'
import { usePathname } from 'one'
import * as React from 'react'
import { TooltipGroup, XGroup, XStack, YStack, isClient } from 'tamagui'
import { Link } from '../../../components/Link'
import { bannerHeight } from '../../../components/PromoBanner'
/* Dependencies commented out
import { GithubIcon } from '../../icons/GithubIcon'
import { SeasonTogglePopover } from '../seasons/SeasonTogglePopover'
*/
import { InnerAscendLogo } from '../logo/InnerAscendLogo'
import { ThemeToggle } from '../theme/ThemeToggle'
import { HeaderLinks } from './HeaderLinks'
import { HeaderMenu } from './HeaderMenu'
import type { HeaderProps } from './types'

export function Header(props: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  // const isStudio = usePathname().startsWith('/studio')
  // const isScrolled = isStudio ? true : isScrolled_

  if (isClient) {
    React.useEffect(() => {
      const onScroll = () => {
        setIsScrolled(window.scrollY > 30)
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }, [])
  }

  return (
    <>
      <XStack
        // @ts-ignore
        pos="fixed"
        t={0}
        l={0}
        r={0}
        ai="center"
        pe="none"
        jc="center"
        zi={50000}
        className="all ease-out s1"
        // y={isStudio ? -70 : 0}
        $gtSm={{
          px: '$1',
        }}
      >
        <XStack pe="auto" width="100%" maw={1200} pos="relative">
          <XStack
            className={`ease-out all ms300`}
            py="$1.5"
            y={bannerHeight}
            ov="hidden"
            contain="paint"
            width="100%"
            bc="transparent"
            br="$10"
            $sm={{
              br: 0,
              bw: 0,
              y: -1 + (isScrolled ? 0 : bannerHeight),
              py: '$2',
            }}
            {...(isScrolled && {
              $gtSm: {
                y: 6,
              },
            })}
            {...(props.hasBanner && {
              $gtSm: {
                y: isScrolled ? 6 : 35,
              },
            })}
          >
            <YStack
              pos="absolute"
              inset={0}
              className={'ease-out all ms100'}
              style={{
                ...(isScrolled && {
                  backdropFilter: `blur(16px)`,
                  WebkitBackdropFilter: `blur(16px)`,
                }),
              }}
            />
            <YStack
              o={isScrolled ? 0.6 : 0}
              className={`ease-out all ms300`}
              fullscreen
              bg="$color2"
              $theme-dark={{
                bg: '$color7',
              }}
            />
            <YStack mx="auto" px="$4" w="100%">
              <ThemeTint>
                <HeaderContents floating {...props} />
              </ThemeTint>
            </YStack>
          </XStack>
          {/* do shadow separate so we can contain paint because its causing perf issues */}
          <XStack
            className={`ease-in-out all ms200`}
            zi={-1}
            br="$10"
            fullscreen
            {...(isScrolled && {
              $gtSm: {
                py: '$2',
                y: 5,
                // elevation: isStudio ? '$0.5' : '$3',
                elevation: '$10',
              },
            })}
          />
        </XStack>
      </XStack>
      <YStack height={54} w="100%" />
    </>
  )
}

const tooltipDelay = { open: 0, close: 150 }

export const HeaderContents = React.memo((props: HeaderProps) => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  /* Seasonal toggle functionality (commented out)
  const tint = useTint()
  */
  // const isTakeout = router.pathname === '/takeout'

  return (
    <XStack
      ai="center"
      position="relative"
      tag="header"
      jc="space-between"
      pos="relative"
      py={props.minimal ? '$4' : props.floating ? 0 : '$2'}
      zi={50000}
    >
      {!props.minimal && (
        <XStack ai="center" gap="$4">
          {/* Seasonal toggle section (commented out)
          <Link href="/">
            <SeasonTogglePopover>
              <YStack
                px="$2"
                cur="pointer"
                o={1}
                {...(isHome && {
                  onPress(e) {
                    e.preventDefault()
                    e.stopPropagation()
                    tint.setNextTint()
                  },
                })}
              >
                <TamaguiLogo downscale={props.floating ? 2 : 1.5} />
              </YStack>
            </SeasonTogglePopover>
          </Link>
          */}

          <TooltipGroup delay={tooltipDelay}>
            <XGroup mah={32} bc="transparent" ai="center" size="$4">
              <XGroup.Item>
                <ThemeToggle borderWidth={0} chromeless />
              </XGroup.Item>
            </XGroup>
          </TooltipGroup>

          {/* <SearchButton size="$2" br="$10" elevation="$0.5" /> */}

          {/* GitHub link section (commented out)
          <Link target="_blank" href="https://github.com/tamagui/tamagui">
            <XStack group>
              <XStack
                ai="center"
                gap="$2"
                p="$2"
                opacity={0.9}
                hoverStyle={{ opacity: 1 }}
              >
                <GithubIcon width={26} />
                <SizableText
                  $md={{ display: 'none' }}
                  size="$3"
                  color="$color12"
                  o={0.5}
                  $group-hover={{
                    o: 0.8,
                  }}
                >
                  GitHub
                </SizableText>
              </XStack>
            </XStack>
          </Link>
          */}
        </XStack>
      )}

      <XStack
        position="absolute"
        $md={{
          opacity: 1,
          pointerEvents: 'auto',
        }}
        zIndex={-1}
        jc="center"
        fullscreen
        ai="center"
      >
        <Link href="/" aria-label="Homepage">
          <XStack
            cursor={isHome ? 'default' : 'pointer'}
            pointerEvents="auto"
            als="center"
          >
            <XStack
              $gtMd={{
                display: 'none'
              }}
            >
              <InnerAscendLogo showWords downscale={1.75} />
            </XStack>
            <XStack
              $md={{
                display: 'none'
              }}
            >
              <InnerAscendLogo animated />
            </XStack>
          </XStack>
        </Link>
      </XStack>

      {/*  prevent layout shift */}
      {!props.minimal && (
        <XStack h={40} jc="flex-end" pointerEvents="auto" tag="nav">
          <XStack ai="center" gap="$2">
            <HeaderLinks isHeader {...props} />
            <HeaderMenu />
          </XStack>
        </XStack>
      )}
    </XStack>
  )
})
