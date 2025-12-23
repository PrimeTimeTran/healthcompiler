// src/services/strapi.ts
const STRAPI_BASE_URL =
  import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'

export interface StrapiBlogPost {
  id: number
  attributes: {
    title: string
    date: string
    description: string
    content?: string // Add content field for full blog post
    slug?: string // Add slug for URL routing
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
  id: number
  title: string
  date: string
  description: string
  content?: string
  slug?: string
  image: string
  link: string
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch(
      // 'http://localhost:1337/api/articles?populate=*',
      'http://localhost:1337/api/articles?populate=cover',
      {
        headers: {
          Authorization: `Bearer e8d73b614ade3ea31f7f37ea7cc5f05b5d7f28ce84b811a12204a430c2f6bc2d2ad689f58f947f341a67c899ef1ea4e8ce7f0756879cacef78fb6dfa171649f499d7c9be2e5695444ddddfa6b03dee229755dac7b1f5d78b6c5ef8e401796535ea40b1eb17483116014153a79b51cc2bf766c5f65256e2a56bc2595be266f518`,
        },
      }
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()

    // Transform Strapi response to our BlogPost format
    return data.data.map((item: any) => ({
      id: item.id,
      title: item.title || item.attributes?.title,
      date: item.createdAt || item.attributes?.date,
      description: item.description || item.attributes?.description,
      content: item.content || item.attributes?.content,
      slug: item.slug || item.attributes?.slug,
      image: `http://localhost:1337${
        item.cover?.formats?.thumbnail?.url || ''
      }`,
      link: item.link || item.attributes?.link,
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    throw error
  }
}

export const fetchBlogPost = async (id: string): Promise<BlogPost | null> => {
  try {
    const response = await fetch(
      `http://localhost:1337/api/articles/${id}?populate=*`,
      {
        headers: {
          Authorization: `Bearer e8d73b614ade3ea31f7f37ea7cc5f05b5d7f28ce84b811a12204a430c2f6bc2d2ad689f58f947f341a67c899ef1ea4e8ce7f0756879cacef78fb6dfa171649f499d7c9be2e5695444ddddfa6b03dee229755dac7b1f5d78b6c5ef8e401796535ea40b1eb17483116014153a79b51cc2bf766c5f65256e2a56bc2595be266f518`,
        },
      }
    )
    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()

    const item = data.data
    console.log({ IMG: item.cover.formats.thumbnail.url })
    return {
      id: item.id,
      title: item.title || item.attributes?.title,
      date: item.createdAt || item.attributes?.date,
      description: item.description || item.attributes?.description,
      content: item.content || item.attributes?.content,
      slug: item.slug || item.attributes?.slug,
      image: `http://localhost:1337${item.cover.formats.thumbnail.url || ''}`,
      // link: item.link || item.attributes?.link,
      link: item.slug,
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    throw error
  }
}
