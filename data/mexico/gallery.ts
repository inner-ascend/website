export interface GalleryImage {
  url: string
  caption: string
}

export interface GalleryCategory {
  images: GalleryImage[]
}

export interface GalleryData {
  [key: string]: GalleryCategory
}

export const galleryData: GalleryData = {
  "Natural Cenotes": {
    images: [
      { url: "/images/gallery/cenote.jpg", caption: "Crystal-clear waters perfect for swimming" },
      { url: "/images/gallery/cenote-2.jpg", caption: "Ancient limestone formations create natural pools" },
      { url: "/images/gallery/cenote-3.jpg", caption: "Underground water systems feed our cenotes" }
    ]
  },
  "Lush Jungle": {
    images: [
      { url: "/images/gallery/jungle.jpg", caption: "50 acres of pristine tropical forest" },
      { url: "/images/gallery/jungle-2.jpg", caption: "Rich biodiversity with native species" },
      { url: "/images/gallery/jungle-3.jpg", caption: "Natural trails through the property" }
    ]
  },
  "Community Spaces": {
    images: [
      { url: "/images/gallery/community.jpg", caption: "Shared areas for connection & creativity" },
      { url: "/images/gallery/community-2.jpg", caption: "Open-air gathering spaces" },
      { url: "/images/gallery/community-3.jpg", caption: "Collaborative work areas" }
    ]
  },
  "Sustainable Villas": {
    images: [
      { url: "/images/gallery/villa.jpg", caption: "Eco-friendly homes with modern amenities" },
      { url: "/images/gallery/villa-2.jpg", caption: "Solar-powered living spaces" },
      { url: "/images/gallery/villa-3.jpg", caption: "Natural building materials" }
    ]
  },
  "Nearby Beaches": {
    images: [
      { url: "/images/gallery/beach.jpg", caption: "Just minutes from pristine coastline" },
      { url: "/images/gallery/beach-2.jpg", caption: "Crystal clear Caribbean waters" },
      { url: "/images/gallery/beach-3.jpg", caption: "White sand beaches nearby" }
    ]
  }
} 