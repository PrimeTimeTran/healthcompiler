// src/services/strapi.ts

import { VITE_STRAPI_URL, VITE_STRAPI_API_TOKEN } from '../lib/constants'

export interface StrapiBlogPost {
  id: number
  attributes: {
    title: string
    date: string
    description: string
    content?: string
    slug?: string
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
      `${VITE_STRAPI_URL}/api/articles?populate=cover`,
      {
        headers: {
          Authorization: `Bearer ${VITE_STRAPI_API_TOKEN}`,
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
      image: `${VITE_STRAPI_URL}${item.cover?.formats?.thumbnail?.url || ''}`,
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
      `${VITE_STRAPI_URL}/api/articles/${id}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${VITE_STRAPI_API_TOKEN}`,
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
    return {
      id: item.id,
      title: item.title || item.attributes?.title,
      date: item.createdAt || item.attributes?.date,
      description: item.description || item.attributes?.description,
      content: item.content || item.attributes?.content,
      slug: item.slug || item.attributes?.slug,
      image: `${VITE_STRAPI_URL}${item.cover.formats.thumbnail.url || ''}`,
      // link: item.link || item.attributes?.link,
      link: item.slug,
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    throw error
  }
}
