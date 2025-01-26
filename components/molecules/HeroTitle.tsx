import { ThemeTintAlt, useTint } from '@tamagui/logo'
import { H1, Text, YStack } from 'tamagui'

interface HeroTitleProps {
  title: string
  subtitle?: string
}

const HeroText = ({ text }: { text: string }) => {
  return (
    <>
      <span style={{ opacity: 0 }}>{text}</span>
      <YStack fullscreen>
        <Text
          className="clip-text rainbow"
          style={{
            position: 'absolute',
            left: -4,
          }}
          $sm={{ left: 0 }}
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
        <ThemeTintAlt offset={2}>
          <Text
            className="mask-gradient-down"
            style={{ mixBlendMode: 'hard-light', position: 'absolute' }}
            pe="none"
            o={0.5}
            col="$color8"
            $sm={{ left: 3 }}
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        </ThemeTintAlt>
        <ThemeTintAlt offset={1}>
          <Text
            style={{ mixBlendMode: 'hard-light', position: 'absolute', left: -3 }}
            className="mask-gradient-up"
            pe="none"
            col="$color8"
            $sm={{ left: 1.5 }}
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        </ThemeTintAlt>
        <ThemeTintAlt offset={-2}>
          <Text
            style={{ position: 'absolute' }}
            className="mask-gradient-right"
            pe="none"
            col="$color8"
            o={0.26}
            $sm={{ left: 3 }}
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        </ThemeTintAlt>
        <ThemeTintAlt offset={-3}>
          <Text
            style={{ position: 'absolute' }}
            className="mask-gradient-right"
            pe="none"
            col="$color8"
            o={0.5}
            $sm={{ left: 3 }}
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        </ThemeTintAlt>
      </YStack>
    </>
  )
}

export function HeroTitle({ title, subtitle }: HeroTitleProps) {
  const { tint } = useTint()

  return (
    <H1
      ta="left"
      size="$10"
      maw={500}
      pos="relative"
      $gtSm={{
        mx: 0,
        maxWidth: 800,
        size: '$14',
        h: 250,
        ta: 'center',
        als: 'center',
      }}
      $gtMd={{
        maxWidth: 900,
        size: '$15',
        h: 310,
      }}
      $gtLg={{
        size: '$16',
        lh: 146,
        maxWidth: 1200,
        h: 310,
      }}
    >
      <Text
        className="clip-text"
        bg="$color"
        $theme-light={{
          backgroundImage: `-webkit-linear-gradient(
            -90deg,
            transparent,
            var(--${tint}12) 70%
          )`,
        }}
      >
        {title}
      </Text>
      {subtitle && (
        <>
          <br />
          <span style={{ position: 'relative' }}>
            <HeroText text={subtitle} />
          </span>
        </>
      )}
    </H1>
  )
}
