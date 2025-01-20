import { useTint } from '@tamagui/logo'
import { useMemo } from 'react'
import { H1, Spacer, YStack } from 'tamagui'

import { ContainerLarge } from '~/components/Containers'
import { HeadInfo } from '~/components/HeadInfo'
import { SocialLinksRow } from '~/features/site/home/SocialLinksRow'
import { ThemeNameEffect } from '~/features/site/theme/ThemeNameEffect'

export default function Community() {
  return (
    <CommunityLayout>
      <ThemeNameEffect />
      <HeadInfo title="Community" />

      <Spacer size="$4" />

      <ContainerLarge space="$4">
        <Spacer />

        <H1 als="center">Community</H1>

        <Spacer />

        <SocialLinksRow />

        <Spacer size="$10" />
      </ContainerLarge>
    </CommunityLayout>
  )
}

function CommunityLayout({ children }: { children: any }) {
  const { tint } = useTint()
  return <YStack theme={tint as any}>{useMemo(() => children, [children])}</YStack>
}
