import { memo } from 'react'
import { TabCardShowcase, type ShowcaseItem } from '../molecules/TabCardShowcase'

const showcaseItems: ShowcaseItem[] = [
  {
    name: 'Ecovillages',
    subtitle: 'join thriving ecovillages and sustainable communities',
    leftCard: {
      title: 'Community Living',
      description:
        'Experience shared resources, permaculture gardens, and collective decision-making in harmonious eco-conscious communities.',
      highlights: ['Shared Community Spaces', 'Renewable Energy Systems', 'Local Food Production'],
    },
    rightCard: {
      title: 'Natural Building',
      description:
        'Learn and practice sustainable building techniques using natural and locally sourced materials.',
      highlights: ['Natural Building Methods', 'Traditional Techniques', 'Eco-friendly Materials'],
    },
  },
  {
    name: 'Land DAO',
    subtitle: 'participate in decentralized land ownership through DAOs',
    leftCard: {
      title: 'Governance',
      description:
        'Vote on land use decisions and contribute to community development through transparent blockchain governance.',
      highlights: ['Democratic Decision Making', 'Transparent Voting', 'Community Proposals'],
    },
    rightCard: {
      title: 'Resource Sharing',
      description:
        'Access shared resources and contribute to the collective growth of the community.',
      highlights: ['Shared Equipment', 'Knowledge Exchange', 'Collective Investments'],
    },
  },
  {
    name: 'Regeneration',
    subtitle: 'contribute to ecological restoration and regeneration',
    leftCard: {
      title: 'Land Restoration',
      description:
        'Participate in reforestation and soil regeneration projects that heal the Earth.',
      highlights: ['Forest Conservation', 'Soil Regeneration', 'Native Species'],
    },
    rightCard: {
      title: 'Water Systems',
      description: 'Implement sustainable water management practices and protect water resources.',
      highlights: ['Water Conservation', 'Rain Harvesting', 'Natural Filtration'],
    },
  },
  {
    name: 'Community',
    subtitle: 'build meaningful connections in conscious communities',
    leftCard: {
      title: 'Skill Sharing',
      description:
        'Exchange knowledge and learn from community members in a collaborative environment.',
      highlights: ['Workshops', 'Mentorship', 'Traditional Skills'],
    },
    rightCard: {
      title: 'Cultural Exchange',
      description:
        'Celebrate diversity and create lasting bonds through shared experiences and events.',
      highlights: ['Cultural Events', 'Art & Music', 'Celebrations'],
    },
  },
]

export const CommunityShowcase = memo(() => (
  <TabCardShowcase title="Building Regenerative Communities Together" items={showcaseItems} />
))
