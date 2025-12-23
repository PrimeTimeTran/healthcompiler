// src/hooks/useBlogPosts.ts
import { useState, useEffect } from 'react'
import { fetchBlogPosts, BlogPost } from '@/services/strapi'

export const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setLoading(true)
        const posts = await fetchBlogPosts()
        console.log({ posts })
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
