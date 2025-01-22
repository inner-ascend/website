export interface NewsItem {
  date: string
  title: string
  description: string
  tag: 'Development' | 'Community' | 'Infrastructure' | 'Partnership'
}

export const newsItems: NewsItem[] = [
  {
    date: 'January 2024',
    title: 'Land Survey Complete',
    description: 'Detailed topographical analysis reveals perfect building sites and confirms three pristine cenotes on the property.',
    tag: 'Development'
  },
  {
    date: 'December 2023',
    title: 'Community Design Workshop',
    description: 'Successful virtual workshop with future residents to finalize sustainable housing designs and community spaces.',
    tag: 'Community'
  },
  {
    date: 'November 2023',
    title: 'Solar Assessment',
    description: 'Technical study confirms excellent solar potential, enabling 100% renewable energy coverage for the community.',
    tag: 'Infrastructure'
  },
  {
    date: 'October 2023',
    title: 'Local Partnership',
    description: 'Agreement signed with local organic farmers to support our permaculture development and knowledge exchange.',
    tag: 'Partnership'
  }
] 