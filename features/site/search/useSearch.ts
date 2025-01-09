import { useCallback, useMemo, useState } from 'react'

// This is a simple example - you can expand this with your actual content
const searchableContent = [
  {
    title: 'Home',
    url: '/',
    content: 'Welcome to the homepage'
  },
  {
    title: 'About',
    url: '/about',
    content: 'Learn more about us'
  }
]

export const useSearch = () => {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query) return []
    
    const searchTerm = query.toLowerCase()
    return searchableContent.filter(item => {
      return (
        item.title.toLowerCase().includes(searchTerm) ||
        item.content.toLowerCase().includes(searchTerm)
      )
    })
  }, [query])

  const search = useCallback((term: string) => {
    setQuery(term)
  }, [])

  return {
    search,
    results,
    query
  }
} 