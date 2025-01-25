import { Button, XStack, YStack, type ThemeName } from 'tamagui'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { ProjectHeroImage } from '../atoms/ProjectHeroImage'
import { ProjectInfoGrid } from '../molecules/ProjectInfoGrid'

interface ProjectInfo {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  theme: 'blue' | 'purple' | 'green'
}

interface Project {
  name: string
  subtitle: string
  heroImage: string
  ctaButtons: Array<{
    text: string
    link: string
    theme: ThemeName
  }>
  infoCards: ProjectInfo[]
}

const mexicoProject: Project = {
  name: 'Mexico Ecovillage',
  subtitle: 'Join us in building our first regenerative community',
  heroImage: '/images/hero/oaxaca-paradise.jpg',
  ctaButtons: [
    {
      text: 'Join Our Team',
      link: '/mexico#team-section',
      theme: 'green',
    },
    {
      text: 'Learn More',
      link: '/mexico',
      theme: 'alt1',
    },
  ] as const,
  infoCards: [
    {
      title: 'Phase 1 Active',
      description: 'Land acquisition and initial infrastructure development',
      buttonText: 'View Roadmap',
      buttonLink: '/mexico#project-roadmap',
      theme: 'green' as const,
    },
    {
      title: 'Location',
      description: 'Oaxaca, Mexico - Mountain jungle near Pacific beaches',
      buttonText: 'View Location',
      buttonLink: '/mexico#location-climate',
      theme: 'blue' as const,
    },
    {
      title: 'Membership',
      description: 'NFT-based ownership and governance model',
      buttonText: 'View Tiers',
      buttonLink: '/mexico#membership-tiers',
      theme: 'purple' as const,
    },
  ],
}

interface CurrentProjectsProps {
  projects?: Project[]
}

export function CurrentProjects({ projects = [mexicoProject] }: CurrentProjectsProps) {
  return (
    <YStack space="$8">
      {projects.map((project, index) => (
        <YStack key={index} space="$6" mb={index < projects.length - 1 ? '$8' : undefined}>
          <YStack space="$6" mb="$6">
            <HomeH2 ta="center" $sm={{ size: '$8' }}>
              Current Project: {project.name}
            </HomeH2>
            <HomeH3 ta="center" theme="alt2" maw={700} als="center" $sm={{ size: '$5' }}>
              {project.subtitle}
            </HomeH3>
          </YStack>

          <YStack pos="relative" mb="$6">
            <ProjectHeroImage imageUrl={project.heroImage} />
            <YStack f={1} ai="center" jc="center" zi={2} pos="absolute" fullscreen>
              <XStack space="$4">
                {project.ctaButtons.map((button, buttonIndex) => (
                  <Button
                    key={buttonIndex}
                    size="$6"
                    theme={button.theme}
                    fontFamily="$silkscreen"
                    onPress={() => (window.location.href = button.link)}
                  >
                    {button.text}
                  </Button>
                ))}
              </XStack>
            </YStack>
          </YStack>

          <ProjectInfoGrid items={project.infoCards} />
        </YStack>
      ))}
    </YStack>
  )
}
