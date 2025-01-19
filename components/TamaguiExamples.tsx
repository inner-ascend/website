import type { getCompilationExamples } from '@tamagui/mdx-2'
import { createContext, useContext } from 'react'
import { Spacer } from 'tamagui'
import { HeroContainer } from '../features/docs/HeroContainer'
import { CommunityShowcase } from '../features/site/home/CommunityShowcase'

export const TamaguiExamples = createContext<ReturnType<
  typeof getCompilationExamples
> | null>(null)

export function TamaguiExamplesCode() {
  try {
    const examples = useContext(TamaguiExamples)
    return (
      <HeroContainer noScroll noPad>
        <Spacer />
        <CommunityShowcase onlyDemo examples={examples?.compilationExamples} />
        <Spacer />
      </HeroContainer>
    )
  } catch {
    return null
  }
}
