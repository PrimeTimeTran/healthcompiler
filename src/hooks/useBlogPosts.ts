// src/hooks/useBlogPosts.ts
import { useState, useEffect } from 'react'
import { fetchBlogPosts, BlogPost } from '@/services/strapi'

import { STRAPI_API_TOKEN } from '../lib/constants'

export const STRAPI_URL = 'https://strapi-app-890407456021.us-east1.run.app'

export const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setLoading(true)
        const posts = await fetchBlogPosts()
        setBlogPosts(posts)
        setError(null)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load blog posts'
        )
        console.error('Error loading blog posts:', err)
      } finally {
        setLoading(false)
      }
    }

    loadBlogPosts()
  }, [])

  return { blogPosts, loading, error }
}

export async function getBlogPostBySlug(slug: string) {
  const res = await fetch(
    `${STRAPI_URL}/api/articles/?filters[slug][$eq]=${slug}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch blog post')
  }

  const json = await res.json()
  return json.data?.[0] ?? null
}

export const useBlogPost = (slug: string) => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return

    const loadBlogPost = async () => {
      try {
        setLoading(true)
        const post = await getBlogPostBySlug(slug)
        setBlogPost(post)
        setError(null)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load blog post'
        )
        console.error('Error loading blog post:', err)
      } finally {
        setLoading(false)
      }
    }

    loadBlogPost()
  }, [slug])

  return { blogPost, loading, error }
}
