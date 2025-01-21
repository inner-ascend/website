import { useTint } from '@tamagui/logo'
import { useRef, useState } from 'react'
import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { Link } from '../../../components/Link'

import { ContainerLarge } from '../../../components/Containers'
import { useOnIntersecting } from '../../../hooks/useOnIntersecting'
import { BenchmarkChartWeb } from '../benchmarks/BenchmarkChartWeb'
import { HomeH2, HomeH3 } from './HomeHeaders'

export function SustainableImpact() {
  const ref = useRef<HTMLElement>(null)
  const [show, setShow] = useState(false)

  useOnIntersecting(ref, ([entry]) => {
    if (entry?.isIntersecting) {
      setTimeout(() => {
        setShow(true)
      }, 800)
    }
  })

  return (
    <ContainerLarge position="relative">
      <YStack ai="center" zi={1} gap="$4">
        <YStack ai="center" gap="$2">
          <HomeH2 size="$10" maw={500} ref={ref}>
            Sustainable Impact
          </HomeH2>
          <HomeH3>
            Track your community's environmental impact, resource usage, and regenerative practices
          </HomeH3>
        </YStack>

        <YStack
          pos="relative"
          px="$2"
          mb="$2"
          $sm={{ px: '$0', mx: -20, width: 'calc(100% + 40px)' }}
          h={141}
          br="$8"
          width="100%"
          ai="stretch"
          jc="center"
        >
          <Paragraph
            pos="absolute"
            b={-20}
            r={20}
            mt={-20}
            theme="alt2"
            size="$2"
            $sm={{ display: 'none' }}
          >
            Higher percentages indicate better sustainability impact. Updated quarterly.
          </Paragraph>

          {show && <BenchmarkChartWeb />}
        </YStack>

        <XStack flexWrap="wrap" gap="$4" ai="center" jc="center">
          <BenchmarksLink />
          <CompilerLink />
        </XStack>
      </YStack>
    </ContainerLarge>
  )
}

const BenchmarksLink = () => {
  const { tint } = useTint()
  return (
    <Link href="/docs/intro/benchmarks">
      <Button
        accessibilityLabel="View sustainability metrics"
        fontFamily="$silkscreen"
        theme={tint as any}
      >
        Impact Metrics &raquo;
      </Button>
    </Link>
  )
}

const CompilerLink = () => {
  const { tint } = useTint()
  return (
    <Link href="/docs/intro/why-a-compiler">
      <Button accessibilityLabel="Learn more" fontFamily="$silkscreen" theme={tint as any}>
        Learn More &raquo;
      </Button>
    </Link>
  )
}
