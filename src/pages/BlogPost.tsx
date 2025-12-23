import { Layout } from '@/components/layout/Layout'
import { useBlogPost } from '@/hooks/useBlogPosts'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'

const BlogPostSkeleton = () => (
  <div className='space-y-8'>
    <div className='space-y-4'>
      <Skeleton className='h-4 w-24' />
      <Skeleton className='h-12 w-full' />
      <Skeleton className='h-6 w-3/4' />
    </div>
    <Skeleton className='h-96 w-full rounded-2xl' />
    <div className='space-y-4'>
      <Skeleton className='h-4 w-full' />
      <Skeleton className='h-4 w-full' />
      <Skeleton className='h-4 w-3/4' />
    </div>
  </div>
)

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const { blogPost, loading, error } = useBlogPost(slug || '')
  console.log({ blogPost })

  if (loading) {
    return (
      <Layout>
        <div className='container mx-auto px-4 py-20'>
          <BlogPostSkeleton />
        </div>
      </Layout>
    )
  }

  if (error || !blogPost) {
    return (
      <Layout>
        <div className='container mx-auto px-4 py-20 text-center'>
          <div className='w-20 h-20 mx-auto mb-6 rounded-2xl bg-destructive/10 flex items-center justify-center'>
            <Share2 className='w-8 h-8 text-destructive' />
          </div>
          <h1 className='text-2xl font-bold text-foreground mb-4'>
            Blog Post Not Found
          </h1>
          <p className='text-muted-foreground mb-8'>
            {error || "The blog post you're looking for doesn't exist."}
          </p>
          <Button asChild>
            <Link to='/blogs'>
              <ArrowLeft className='w-4 h-4 mr-2' />
              Back to Blogs
            </Link>
          </Button>
        </div>
      </Layout>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <Layout>
      {/* Back Navigation */}
      <div className='border-b bg-background/50 backdrop-blur-sm sticky top-0 z-40'>
        <div className='container mx-auto px-4 py-4'>
          <Button
            variant='ghost'
            asChild
            className='group'
          >
            <Link
              to='/resources/blogs'
              className='flex items-center gap-2'
            >
              <ArrowLeft className='w-4 h-4 group-hover:-translate-x-1 transition-transform' />
              Back to Blogs
            </Link>
          </Button>
        </div>
      </div>

      <article className='container mx-auto px-4 py-12 max-w-4xl'>
        {/* Article Header */}
        <header className='mb-12'>
          {/* Meta Information */}
          <div className='flex items-center gap-4 mb-6'>
            <Badge
              variant='secondary'
              className='flex items-center gap-2'
            >
              <Calendar className='w-3 h-3' />
              {formatDate(blogPost.date)}
            </Badge>
            <Badge
              variant='outline'
              className='flex items-center gap-2'
            >
              <Clock className='w-3 h-3' />5 min read
            </Badge>
          </div>

          {/* Title */}
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight font-display'>
            {blogPost.title}
          </h1>

          {/* Description */}
          <p className='text-xl text-muted-foreground leading-relaxed max-w-3xl'>
            {blogPost.description}
          </p>
        </header>

        {/* Featured Image */}
        {blogPost.image && (
          <div className='mb-12'>
            <div className='relative overflow-hidden rounded-2xl bg-muted'>
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className='w-full h-auto'
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className='prose prose-lg max-w-none'>
          {blogPost.content ? (
            <div
              className='text-foreground leading-relaxed space-y-6'
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          ) : (
            <div className='text-muted-foreground italic'>
              Content for this blog post is not available yet.
            </div>
          )}
        </div>

        {/* Article Footer */}
        <footer className='mt-16 pt-8 border-t'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Button
                variant='outline'
                size='sm'
              >
                <Share2 className='w-4 h-4 mr-2' />
                Share
              </Button>
            </div>
            <Button asChild>
              <Link to='/blogs'>Read More Articles</Link>
            </Button>
          </div>
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPost
