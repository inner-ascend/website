import { XStack } from 'tamagui'
import { ProjectInfoCard } from '../atoms/ProjectInfoCard'

interface ProjectInfo {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  theme: 'blue' | 'purple' | 'green'
}

interface ProjectInfoGridProps {
  items: ProjectInfo[]
}

export function ProjectInfoGrid({ items }: ProjectInfoGridProps) {
  return (
    <XStack fw="wrap" gap="$4" jc="center">
      {items.map((item, index) => (
        <ProjectInfoCard key={index} {...item} />
      ))}
    </XStack>
  )
}
