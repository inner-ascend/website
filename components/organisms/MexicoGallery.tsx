import { useState } from 'react'
import { galleryData } from '~/data/mexico/gallery'
import { GalleryGrid } from '../molecules/GalleryGrid'
import { GalleryModal } from '../molecules/GalleryModal'

export function MexicoGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)

  const handleNext = () => {
    if (!currentCategory) return

    if (currentIndex < galleryData[currentCategory].images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      const categories = Object.keys(galleryData)
      const currentCategoryIndex = categories.indexOf(currentCategory)
      if (currentCategoryIndex < categories.length - 1) {
        const nextCategory = categories[currentCategoryIndex + 1]
        setCurrentCategory(nextCategory)
        setCurrentIndex(0)
      } else {
        setCurrentCategory(categories[0])
        setCurrentIndex(0)
      }
    }
  }

  const handlePrevious = () => {
    if (!currentCategory) return

    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      const categories = Object.keys(galleryData)
      const currentCategoryIndex = categories.indexOf(currentCategory)
      if (currentCategoryIndex > 0) {
        const prevCategory = categories[currentCategoryIndex - 1]
        setCurrentCategory(prevCategory)
        setCurrentIndex(galleryData[prevCategory].images.length - 1)
      } else {
        const lastCategory = categories[categories.length - 1]
        setCurrentCategory(lastCategory)
        setCurrentIndex(galleryData[lastCategory].images.length - 1)
      }
    }
  }

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category)
    setCurrentCategory(category)
    setCurrentIndex(0)
  }

  return (
    <>
      <GalleryGrid categories={galleryData} onSelectCategory={handleSelectCategory} />

      {selectedCategory && currentCategory && (
        <GalleryModal
          isOpen={!!selectedCategory}
          onClose={() => {
            setSelectedCategory(null)
            setCurrentCategory(null)
            setCurrentIndex(0)
          }}
          category={currentCategory}
          currentImage={galleryData[currentCategory].images[currentIndex]}
          totalImages={galleryData[currentCategory].images.length}
          currentIndex={currentIndex}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSelectImage={setCurrentIndex}
        />
      )}
    </>
  )
}
