import { memo } from 'react'
import { YStack } from 'tamagui'
import { useTint } from '@tamagui/logo'
import { HeadInfo } from '~/components/HeadInfo'
import { MexicoHero } from '~/features/site/mexico/MexicoHero'
import { MexicoVision } from '~/features/site/mexico/MexicoVision'
import { MexicoLand } from '~/features/site/mexico/MexicoLand'
import { MexicoCommunity } from '~/features/site/mexico/MexicoCommunity'
import { MexicoIndigenous } from '~/features/site/mexico/MexicoIndigenous'
import { MexicoPrograms } from '~/features/site/mexico/MexicoPrograms'
import { MexicoJoin } from '~/features/site/mexico/MexicoJoin'
import { MexicoNavigation } from '~/features/site/mexico/MexicoNavigation'
import { MexicoFooter } from '~/features/site/mexico/MexicoFooter'

export default memo(function MexicoPage() {
  return (
    <LayoutComponent>
      <HeadInfo title="Proyecto Salvaje - Regenerative Village School" description="Creation of an intentional regenerative community for human integrity and sovereign living in Oaxaca, Mexico." />
      {/* <MexicoNavigation /> */}
      <MexicoHero />
      <MexicoVision />
      <MexicoLand />
      <MexicoCommunity />
      <MexicoIndigenous />
      <MexicoPrograms />
      <MexicoJoin />
    </LayoutComponent>
  )
})

function LayoutComponent({ children }: { children: any }) {
  const { tint } = useTint()
  return <YStack theme={tint as any} pt="$16">{children}</YStack>
}
