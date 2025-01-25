import { YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { ProjectGrid } from '../molecules/ProjectGrid'

const projects = [
  {
    title: 'Mexico Ecovillage',
    description: 'Join us in building a self-sustaining community in the heart of Mexico.',
    buttonText: 'Learn More',
    href: '/mexico',
  },
] as const

export function CurrentProjects() {
  return (
    <YStack space="$4" ai="center">
      <YStack space="$2" ai="center">
        <HomeH2>Current Projects</HomeH2>
        <HomeH3>Join our active initiatives</HomeH3>
      </YStack>
      <ProjectGrid projects={projects} theme="blue" />
    </YStack>
  )
}
