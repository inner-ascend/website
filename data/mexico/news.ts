export interface NewsItem {
  date: string
  title: string
  description: string
  tag: 'Development' | 'Community' | 'Infrastructure' | 'Partnership'
}

export const newsItems: NewsItem[] = [
  {
    date: 'March 2026',
    title: 'Land Acquisition Complete',
    description: 'Strategic property secured in prime location, marking a major milestone in our sustainable community development.',
    tag: 'Development'
  },
  {
    date: 'February 2026',
    title: 'NFT Whitelist Opens',
    description: 'Community membership NFTs now available for early supporters, with exclusive benefits and governance rights.',
    tag: 'Community'
  },
  {
    date: 'January 2026',
    title: 'Master Plan Approved',
    description: 'Detailed infrastructure and sustainability plans approved by local authorities, paving way for construction.',
    tag: 'Infrastructure'
  },
  {
    date: 'December 2025',
    title: 'Indigenous Partnership',
    description: 'Collaboration established with local indigenous community for cultural preservation and knowledge sharing.',
    tag: 'Partnership'
  }
] 