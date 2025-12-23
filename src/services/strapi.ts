// src/services/strapi.ts
const STRAPI_BASE_URL =
  import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'

export interface StrapiBlogPost {
  id: number
  attributes: {
    title: string
    date: string
    description: string
    image: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    link: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export interface BlogPost {
  title: string
  date: string
  description: string
  image: string
  link: string
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch('http://localhost:1337/api/articles', {
      headers: {
        Authorization: `Bearer e8d73b614ade3ea31f7f37ea7cc5f05b5d7f28ce84b811a12204a430c2f6bc2d2ad689f58f947f341a67c899ef1ea4e8ce7f0756879cacef78fb6dfa171649f499d7c9be2e5695444ddddfa6b03dee229755dac7b1f5d78b6c5ef8e401796535ea40b1eb17483116014153a79b51cc2bf766c5f65256e2a56bc2595be266f518`,
      },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()

    // Transform Strapi response to our BlogPost format
    //localhost:1337/uploads/a_bug_is_becoming_a_meme_on_the_internet_acf568da5f.jpeg
    return data.data.map((item: StrapiBlogPost) => ({
      title: item.title,
      date: item.createdAt,
      description: item.description,
      image:
        'http://localhost:1337/uploads/a_bug_is_becoming_a_meme_on_the_internet_acf568da5f.jpeg',
      // image: item.image?.data?.attributes?.url
      //   // ? `${STRAPI_BASE_URL}${item.image.data.attributes.url}`
      //   ? `http://localhost:1337/uploads/${item.image.data.attributes.url}`
      //   : '',
      // link: item.attributes.link,
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    throw error
  }
}
