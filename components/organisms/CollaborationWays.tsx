import { type ThemeName, YStack } from 'tamagui'
import { HomeH2, HomeH3 } from '~/features/site/home/HomeHeaders'
import { CollaborationGrid } from '../molecules/CollaborationGrid'

const collaborationCards = [
  {
    title: 'Technical Skills',
    description:
      'Contribute your expertise in software development, architecture, sustainable building, or permaculture design.',
    benefits: [
      'Work on cutting-edge sustainability projects',
      'Shape the future of community living',
      'Learn from experienced practitioners',
    ],
    link: '#technical',
    image: '/images/collaborate/tech-collab.jpg',
    theme: 'blue' as ThemeName,
    buttonText: 'Join Tech Team',
  },
  {
    title: 'Community Building',
    description:
      'Help grow our community through content creation, social media management, or community organizing.',
    benefits: [
      'Connect with global change-makers',
      'Share inspiring stories and knowledge',
      'Build meaningful relationships',
    ],
    link: '#community',
    image: '/images/collaborate/community-collab.jpg',
    theme: 'green' as ThemeName,
    buttonText: 'Build Community',
  },
  {
    title: 'Investment',
    description:
      'Support our vision through financial investment or by participating in our NFT-based ownership model.',
    benefits: [
      'Be part of innovative ownership models',
      'Support sustainable development',
      'Earn potential returns while doing good',
    ],
    link: '#investment',
    image: '/images/collaborate/investment-collab.jpg',
    theme: 'purple' as ThemeName,
    buttonText: 'Invest Now',
  },
  {
    title: 'On-site Support',
    description:
      'Join us on the ground to help with construction, gardening, or other practical aspects of building our communities.',
    benefits: [
      'Gain hands-on experience',
      'Live in beautiful natural settings',
      'Learn valuable sustainable living skills',
    ],
    link: '#onsite',
    image: '/images/collaborate/onsite-collab.jpg',
    theme: 'yellow' as ThemeName,
    buttonText: 'Get Involved',
  },
]

export function CollaborationWays() {
  return (
    <YStack space="$6">
      <YStack space="$4" ai="center">
        <HomeH2 ta="center">Ways to Collaborate</HomeH2>
        <HomeH3 ta="center" theme="alt2" maw={700} mx="auto" mb="$8">
          Choose your path to contribute and make a lasting impact
        </HomeH3>
      </YStack>
      <CollaborationGrid cards={collaborationCards} />
    </YStack>
  )
}
