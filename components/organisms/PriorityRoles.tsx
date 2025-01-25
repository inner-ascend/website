import { type ThemeName } from 'tamagui'
import { CategoryGrid } from '../molecules/CategoryGrid'

const priorityRoles: Array<{
  title: string
  items: string[]
  theme: ThemeName
}> = [
  {
    title: 'Technical Development',
    items: [
      'Full-stack Developer',
      'Blockchain Developer',
      'AI/ML Engineer',
      'DevOps Engineer',
      'UI/UX Designer',
    ],
    theme: 'blue',
  },
  {
    title: 'Land & Sustainability',
    items: [
      'Permaculture Designer',
      'Land Planning Expert',
      'Sustainable Architect',
      'Natural Builder',
      'Water Systems Specialist',
    ],
    theme: 'green',
  },
  {
    title: 'Community & Operations',
    items: [
      'Community Manager',
      'Social Media Strategist',
      'Content Creator',
      'Project Coordinator',
      'Executive Assistant',
    ],
    theme: 'purple',
  },
  {
    title: 'Research & Innovation',
    items: [
      'AI Research Lead',
      'Sustainability Researcher',
      'Documentation Writer',
      'Grant Writer',
      'Innovation Strategist',
    ],
    theme: 'yellow',
  },
  {
    title: 'Education & Culture',
    items: [
      'Workshop Facilitator',
      'Language Teacher',
      'Cultural Liaison',
      'Educational Content Creator',
      'Community Events Organizer',
    ],
    theme: 'orange',
  },
  {
    title: 'Health & Wellbeing',
    items: [
      'Holistic Health Practitioner',
      'Yoga/Meditation Teacher',
      'Nutritionist',
      'Mental Health Advocate',
      'Wellness Program Coordinator',
    ],
    theme: 'pink',
  },
]

export function PriorityRoles() {
  return (
    <CategoryGrid
      title="Priority Roles"
      subtitle="We're actively seeking passionate individuals for these key positions"
      categories={priorityRoles}
    />
  )
}
