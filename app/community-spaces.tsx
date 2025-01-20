// @ts-nocheck responsive props
import { Book, Leaf, Users } from '@tamagui/lucide-icons'
import { useEffect, useState } from 'react'
import { Button, H2, H3, Paragraph, Theme, XStack, YStack } from 'tamagui'

const views = {
  xs: {
    title: "Overview",
    description: "Quick glance at our community spaces",
    content: [
      {
        name: 'Community Center',
        icon: Users,
        description: 'Central hub for gatherings and events',
      },
      {
        name: 'Food Forest',
        icon: Leaf,
        description: 'Regenerative food production',
      },
      {
        name: 'Learning Hub',
        icon: Book,
        description: 'Education and skill sharing',
      }
    ]
  },
  sm: {
    title: "Schedule",
    description: "Weekly events and activities",
    content: [
      { day: "Monday", activity: "Morning Yoga", time: "7:00 AM", location: "Wellness Center" },
      { day: "Tuesday", activity: "Community Lunch", time: "12:00 PM", location: "Cafe" },
      { day: "Wednesday", activity: "Gardening Workshop", time: "4:00 PM", location: "Food Forest" },
      { day: "Thursday", activity: "Art Class", time: "6:00 PM", location: "Maker Space" },
      { day: "Friday", activity: "Community Meeting", time: "5:00 PM", location: "Community Center" }
    ]
  },
  md: {
    title: "Resources",
    description: "Community tools and resources",
    content: [
      { item: "Tool Library", available: 12, total: 15, category: "DIY" },
      { item: "Shared Kitchen", available: 3, total: 4, category: "Food" },
      { item: "Meeting Rooms", available: 2, total: 3, category: "Space" },
      { item: "Garden Tools", available: 8, total: 10, category: "Garden" },
      { item: "Art Supplies", available: 20, total: 25, category: "Creative" }
    ]
  },
  lg: {
    title: "Governance",
    description: "How we make decisions together",
    content: [
      { level: "Community Circle", members: "All residents", meetings: "Monthly", decisions: "Vision & Values" },
      { level: "Working Groups", members: "Volunteers", meetings: "Weekly", decisions: "Implementation" },
      { level: "Stewardship", members: "Rotating", meetings: "Daily", decisions: "Operations" }
    ]
  }
}

export default function ResponsiveDemo() {
  const [currentView, setCurrentView] = useState(views.xs)

  useEffect(() => {
    // Initial view from hash
    const hash = window.location.hash.slice(1)
    if (hash) {
      const view = Object.entries(views).find(([_, data]) => data.title === hash)?.[1]
      if (view) setCurrentView(view)
    }

    // Listen for hash changes
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
          <XStack flexWrap="wrap" jc="center" gap="$4">
            {currentView.content.map((space) => (
              <YStack
                key={space.name}
                width={300}
                p="$4"
                space="$3"
                br="$4"
                bw={1}
                bc="$borderColor"
                hoverStyle={{ scale: 1.02 }}
                pressStyle={{ scale: 0.98 }}
                animation="bouncy"
              >
                <XStack ai="center" space="$3">
                  <YStack width={50} height={50} br="$4" bg="$color5" ai="center" jc="center">
                    <space.icon size={24} color="var(--color)" />
                  </YStack>
                  <H3>{space.name}</H3>
                </XStack>
                <Paragraph theme="alt2">{space.description}</Paragraph>
              </YStack>
            ))}
          </XStack>
        )
      
      case views.sm:
        return (
          <YStack space="$4" p="$4">
            {currentView.content.map((event) => (
              <XStack 
                key={event.day} 
                br="$4" 
                bw={1} 
                bc="$borderColor" 
                p="$4"
                jc="space-between"
                ai="center"
              >
                <XStack f={1} space="$4">
                  <H3>{event.day}</H3>
                  <Paragraph theme="alt2">{event.activity}</Paragraph>
                </XStack>
                <XStack space="$4" ai="center">
                  <Paragraph>{event.time}</Paragraph>
                  <Button size="$2">{event.location}</Button>
                </XStack>
              </XStack>
            ))}
          </YStack>
        )

      case views.md:
        return (
          <YStack space="$4" p="$4">
            {currentView.content.map((resource) => (
              <XStack 
                key={resource.item} 
                br="$4" 
                bw={1} 
                bc="$borderColor" 
                p="$4"
                jc="space-between"
                ai="center"
              >
                <XStack f={1} space="$4">
                  <H3>{resource.item}</H3>
                  <Paragraph theme="alt2">{resource.category}</Paragraph>
                </XStack>
                <XStack space="$2" ai="center">
                  <Paragraph>Available: {resource.available}/{resource.total}</Paragraph>
                  <Button size="$2" theme={resource.available > 0 ? "green" : "red"}>
                    {resource.available > 0 ? "Reserve" : "Waitlist"}
                  </Button>
                </XStack>
              </XStack>
            ))}
          </YStack>
        )

      case views.lg:
        return (
          <YStack space="$4" p="$4">
            {currentView.content.map((level) => (
              <YStack 
                key={level.level} 
                br="$4" 
                bw={1} 
                bc="$borderColor" 
                p="$4"
                space="$2"
              >
                <XStack jc="space-between" ai="center">
                  <H3>{level.level}</H3>
                  <Button size="$2" theme="blue">{level.meetings}</Button>
                </XStack>
                <Paragraph theme="alt2">Members: {level.members}</Paragraph>
                <Paragraph>Decisions: {level.decisions}</Paragraph>
              </YStack>
            ))}
          </YStack>
        )
    }
  }

  return (
    <Theme name="light">
      <YStack mah="100vh" ov="hidden" space="$4">
        <YStack p="$4" space="$2">
          <H2 ta="center" size="$8">{currentView.title}</H2>
          <Paragraph ta="center" theme="alt2" size="$5">
            {currentView.description}
          </Paragraph>
        </YStack>

        {renderContent()}
      </YStack>
    </Theme>
  )
} 