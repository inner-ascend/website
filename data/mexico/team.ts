export interface TeamMember {
  name: string
  role: string
  bio: string
  focus: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Chen',
    role: 'Founder & Vision Lead',
    bio: 'Former tech executive turned sustainability advocate. 10+ years experience in community building and regenerative agriculture.',
    focus: 'Community Design',
    image: '/images/team/sarah.jpg'
  },
  {
    name: 'Miguel Rodriguez',
    role: 'Local Operations Director',
    bio: 'Native Oaxacan with deep connections to local communities. Expert in permaculture and traditional farming practices.',
    focus: 'Local Relations',
    image: '/images/team/miguel.jpg'
  },
  {
    name: 'Dr. James Wilson',
    role: 'Sustainability Architect',
    bio: 'PhD in Sustainable Architecture. Pioneered net-zero community designs across South America.',
    focus: 'Infrastructure',
    image: '/images/team/james.jpg'
  },
  {
    name: 'Luna Martinez',
    role: 'Community Manager',
    bio: 'Experienced in intentional communities and digital nomad hubs. Passionate about creating meaningful connections.',
    focus: 'Member Experience',
    image: '/images/team/luna.jpg'
  },
  {
    name: 'David Thompson',
    role: 'Permaculture Lead',
    bio: 'Certified permaculture designer with 15+ years experience in tropical climates. Specializes in food forest design and water management.',
    focus: 'Agriculture',
    image: '/images/team/david.jpg'
  },
  {
    name: 'Ana Sofia Reyes',
    role: 'Cultural Bridge Director',
    bio: 'Anthropologist and community organizer. Facilitates cultural integration and local partnerships while preserving indigenous wisdom.',
    focus: 'Cultural Integration',
    image: '/images/team/ana.jpg'
  }
] 