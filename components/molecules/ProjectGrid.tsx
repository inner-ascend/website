import { XStack } from 'tamagui'
import { ProjectLinkCard, ProjectLinkCardProps } from '../atoms/ProjectLinkCard'

export interface ProjectGridProps {
  projects: Omit<ProjectLinkCardProps, 'theme'>[]
  theme?: ProjectLinkCardProps['theme']
}

export function ProjectGrid({ projects, theme = 'blue' }: ProjectGridProps) {
  return (
    <XStack fw="wrap" gap="$4" jc="center">
      {projects.map((project, index) => (
        <ProjectLinkCard key={index} {...project} theme={theme} />
      ))}
    </XStack>
  )
}
