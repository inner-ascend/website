// @ts-nocheck responsive props
import { Book, Leaf, Star, Users } from '@tamagui/lucide-icons'
import { useEffect, useState } from 'react'
import { Button, Circle, H2, H3, Paragraph, XStack, YStack } from 'tamagui'

const views = {
  xs: {
    title: "Overview",
    description: "Discover our regenerative community spaces",
    content: [
      {
        name: 'Sacred Circle',
        icon: Users,
        description: 'Central gathering space for community rituals, ceremonies, and celebrations',
        features: ['Daily meditation', 'Weekly ceremonies', 'Monthly gatherings'],
        theme: 'yellow'
      },
      {
        name: 'Living Food Forest',
        icon: Leaf,
        description: 'Regenerative permaculture gardens and food systems',
        features: ['Organic produce', 'Seed saving', 'Composting'],
        theme: 'green'
      },
      {
        name: 'Wisdom Temple',
        icon: Book,
        description: 'Space for learning, sharing wisdom, and spiritual growth',
        features: ['Sacred teachings', 'Knowledge library', 'Meditation space'],
        theme: 'blue'
      }
    ]
  },
  sm: {
    title: "Schedule",
    description: "Join our transformative community activities",
    content: [
      { 
        day: "Dawn", 
        activity: "Sacred Movement", 
        time: "6:00 AM", 
        location: "Temple Garden",
        description: "Start your day with mindful movement and meditation",
        theme: "blue"
      },
      { 
        day: "Morning", 
        activity: "Community Circle", 
        time: "10:00 AM", 
        location: "Sacred Circle",
        description: "Share intentions and connect with community",
        theme: "yellow"
      },
      { 
        day: "Midday", 
        activity: "Forest Tending", 
        time: "2:00 PM", 
        location: "Food Forest",
        description: "Nurture our living food systems together",
        theme: "green"
      },
      { 
        day: "Evening", 
        activity: "Wisdom Sharing", 
        time: "6:00 PM", 
        location: "Wisdom Temple",
        description: "Learn and grow through shared knowledge",
        theme: "purple"
      },
      { 
        day: "Dusk", 
        activity: "Sacred Fire", 
        time: "8:00 PM", 
        location: "Fire Circle",
        description: "Gather around the fire for stories and connection",
        theme: "orange"
      }
    ]
  },
  md: {
    title: "Resources",
    description: "Explore our shared abundance",
    content: [
      { 
        item: "Sacred Tools", 
        available: 12, 
        total: 15, 
        category: "Ceremony",
        description: "Tools for rituals and ceremonies",
        icon: "🔮",
        theme: "purple"
      },
      { 
        item: "Earth Kitchen", 
        available: 3, 
        total: 4, 
        category: "Nourishment",
        description: "Community cooking and food processing",
        icon: "🌱",
        theme: "green"
      },
      { 
        item: "Temple Spaces", 
        available: 2, 
        total: 3, 
        category: "Wisdom",
        description: "Spaces for learning and meditation",
        icon: "🏛️",
        theme: "blue"
      },
      { 
        item: "Garden Wisdom", 
        available: 8, 
        total: 10, 
        category: "Nature",
        description: "Permaculture tools and knowledge",
        icon: "🌿",
        theme: "yellow"
      },
      { 
        item: "Creation Studio", 
        available: 20, 
        total: 25, 
        category: "Art",
        description: "Tools for creative expression",
        icon: "🎨",
        theme: "orange"
      }
    ]
  },
  lg: {
    title: "Governance",
    description: "Co-creating through sacred stewardship",
    content: [
      { 
        level: "Sacred Circle", 
        members: "All community", 
        meetings: "Monthly",
        decisions: "Vision & Values",
        description: "Heart-centered community gatherings for major decisions",
        icon: "⭕",
        theme: "purple"
      },
      { 
        level: "Wisdom Council", 
        members: "Elected guides", 
        meetings: "Weekly",
        decisions: "Strategic Direction",
        description: "Experienced members guiding community development",
        icon: "🌟",
        theme: "yellow"
      },
      { 
        level: "Guardian Circles", 
        members: "Stewards", 
        meetings: "Daily",
        decisions: "Implementation",
        description: "Dedicated teams managing specific areas",
        icon: "🛡️",
        theme: "blue"
      }
    ]
  }
}

export default function ResponsiveDemo() {
  const [currentView, setCurrentView] = useState(views.xs)

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      const view = Object.entries(views).find(([_, data]) => data.title === hash)?.[1]
      if (view) setCurrentView(view)
    }

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      const view = Object.entries(views).find(([_, data]) => data.title === hash)?.[1]
      if (view) setCurrentView(view)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderContent = () => {
    switch (currentView) {
      case views.xs:
        return (
          <XStack flexWrap="wrap" jc="center" gap="$4" p="$4">
            {currentView.content.map((space) => (
              <Card
                key={space.name}
                theme={space.theme}
                width={300}
                p="$4"
                space="$4"
                br="$6"
                bw={1}
                hoverStyle={{ scale: 1.02, y: -5 }}
                pressStyle={{ scale: 0.98 }}
                animation="bouncy"
              >
                <XStack ai="center" space="$3">
                  <YStack 
                    width={60} 
                    height={60} 
                    br="$6" 
                    backgroundColor="$color5" 
                    ai="center" 
                    jc="center"
                    shadowColor="$shadowColor"
                    shadowRadius={10}
                    elevation={2}
                  >
                    <space.icon size={30} color="$background" />
                  </YStack>
                  <H3 size="$6" fontWeight="800">{space.name}</H3>
                </XStack>
                <Paragraph theme="alt2" size="$4" o={0.8}>{space.description}</Paragraph>
                <YStack space="$2" pt="$2">
                  {space.features.map((feature, i) => (
                    <XStack key={i} ai="center" space="$2">
                      <Circle size={6} backgroundColor="$color5" />
                      <Paragraph size="$3" theme="alt1">{feature}</Paragraph>
                    </XStack>
                  ))}
                </YStack>
              </Card>
            ))}
          </XStack>
        )
      
      case views.sm:
        return (
          <YStack space="$4" p="$4">
            {currentView.content.map((event) => (
              <Card
                key={event.day}
                theme={event.theme}
                br="$6" 
                bw={1}
                p="$4"
                space="$4"
                ai="center"
                animation="bouncy"
                hoverStyle={{ scale: 1.01, y: -2 }}
              >
                <YStack f={1} space="$2">
                  <XStack space="$3" ai="center">
                    <H3 size="$7" color="$color" fontWeight="800">{event.day}</H3>
                    <Paragraph size="$5" theme="alt1" fontWeight="600">{event.activity}</Paragraph>
                  </XStack>
                  <Paragraph theme="alt2" size="$4" o={0.8}>{event.description}</Paragraph>
                </YStack>
                <XStack ai="center" space="$4" pt="$2">
                  <Paragraph theme="alt2" o={0.7}>{event.time}</Paragraph>
                  <Button size="$3" icon={Star} chromeless themeInverse>
                    {event.location}
                  </Button>
                </XStack>
              </Card>
            ))}
          </YStack>
        )

      case views.md:
        return (
          <YStack space="$4" p="$4">
            {currentView.content.map((resource) => (
              <Card
                key={resource.item}
                theme={resource.theme}
                br="$6" 
                bw={1}
                p="$4"
                space="$4"
                ai="center"
                animation="bouncy"
                hoverStyle={{ scale: 1.01, y: -2 }}
              >
                <XStack f={1} space="$4" ai="center">
                  <YStack
                    width={50}
                    height={50}
                    br="$4"
                    backgroundColor="$color5"
                    ai="center"
                    jc="center"
                    shadowColor="$shadowColor"
                    shadowRadius={8}
                    elevation={2}
                  >
                    <Paragraph size="$8">{resource.icon}</Paragraph>
                  </YStack>
                  <YStack space="$2" f={1}>
                    <H3 size="$6" fontWeight="800">{resource.item}</H3>
                    <Paragraph theme="alt2" size="$4" o={0.8}>{resource.description}</Paragraph>
                  </YStack>
                </XStack>
                <XStack ai="center" jc="space-between" pt="$2" width="100%">
                  <XStack space="$2" ai="center">
                    <Circle size={6} backgroundColor="$color5" />
                    <Paragraph theme="alt2" o={0.7}>
                      {resource.available}/{resource.total} Available
                    </Paragraph>
                  </XStack>
                  <Button 
                    size="$3" 
                    chromeless
                    themeInverse
                  >
                    {resource.available > 0 ? 'Reserve' : 'Waitlist'}
                  </Button>
                </XStack>
              </Card>
            ))}
          </YStack>
        )

      case views.lg:
        return (
          <YStack space="$4" p="$4">
            {currentView.content.map((level) => (
              <Card
                key={level.level}
                theme={level.theme}
                br="$6" 
                bw={1}
                p="$4"
                space="$3"
                animation="bouncy"
                hoverStyle={{ scale: 1.01, y: -2 }}
              >
                <XStack jc="space-between" ai="center" space="$4">
                  <XStack space="$3" ai="center">
                    <YStack
                      width={50}
                      height={50}
                      br="$4"
                      backgroundColor="$color5"
                      ai="center"
                      jc="center"
                      shadowColor="$shadowColor"
                      shadowRadius={8}
                      elevation={2}
                    >
                      <Paragraph size="$8">{level.icon}</Paragraph>
                    </YStack>
                    <YStack>
                      <H3 size="$6" fontWeight="800">{level.level}</H3>
                      <Paragraph theme="alt2" o={0.7}>{level.members}</Paragraph>
                    </YStack>
                  </XStack>
                  <Button size="$3" chromeless themeInverse>
                    {level.meetings}
                  </Button>
                </XStack>
                <Paragraph size="$4" theme="alt2" o={0.8}>{level.description}</Paragraph>
                <XStack space="$2" ai="center">
                  <Circle size={6} backgroundColor="$color5" />
                  <Paragraph theme="alt1">Focus: {level.decisions}</Paragraph>
                </XStack>
              </Card>
            ))}
          </YStack>
        )
    }
  }

  return (
    <YStack backgroundColor="$backgroundHover" mah="100vh" ov="hidden" space="$4">
      <YStack p="$6" space="$4">
        <H2 ta="center" size="$9" fontWeight="900" theme="alt1">{currentView.title}</H2>
        <Paragraph ta="center" theme="alt2" size="$5" o={0.7}>
          {currentView.description}
        </Paragraph>
      </YStack>

      <YStack f={1}>
        {renderContent()}
      </YStack>
    </YStack>
  )
}

const Card = ({ children, theme, ...props }) => (
  <YStack
    theme={theme}
    backgroundColor="$background"
    borderColor="$borderColor"
    shadowColor="$shadowColor"
    shadowRadius={15}
    shadowOffset={{ width: 0, height: 4 }}
    elevation={4}
    {...props}
  >
    {children}
  </YStack>
) 