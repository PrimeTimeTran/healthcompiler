import { Layout } from '@/components/layout/Layout'
import { useState } from 'react'
import { Search, Loader2, Calendar, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useBlogPosts } from '@/hooks/useBlogPosts'
import { Link } from 'react-router-dom'

const POSTS_PER_PAGE = 9

// Skeleton card component for loading state
const BlogCardSkeleton = () => (
  <div className='group block animate-pulse'>
    <div className='relative overflow-hidden rounded-2xl bg-muted h-52 md:h-60 mb-5' />
    <div className='space-y-3'>
      <Skeleton className='h-4 w-24 rounded-full' />
      <Skeleton className='h-6 w-full' />
      <Skeleton className='h-6 w-4/5' />
      <Skeleton className='h-4 w-full' />
      <Skeleton className='h-4 w-2/3' />
    </div>
  </div>
)

const Blogs = () => {
  const { blogPosts, loading, error } = useBlogPosts()
  const [searchQuery, setSearchQuery] = useState('')
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingNewCards, setLoadingNewCards] = useState(false)

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const displayedPosts = filteredPosts.slice(0, visiblePosts)
  const hasMorePosts = visiblePosts < filteredPosts.length

  // Calculate how many skeleton cards to show
  const remainingPosts = filteredPosts.length - visiblePosts
  const skeletonCount = Math.min(POSTS_PER_PAGE, remainingPosts)

  const handleLoadMore = () => {
    setIsLoading(true)
    setLoadingNewCards(true)

    // Simulate loading delay like the source page
    setTimeout(() => {
      setVisiblePosts((prev) =>
        Math.min(prev + POSTS_PER_PAGE, filteredPosts.length)
      )
      setIsLoading(false)
      setLoadingNewCards(false)
    }, 800)
  }

  // Reset visible posts when search query changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setVisiblePosts(POSTS_PER_PAGE)
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className='relative py-20 md:py-28 overflow-hidden'>
        {/* Background gradients */}
        <div className='absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background' />
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-3xl opacity-60' />

        <div className='container mx-auto px-4 text-center relative z-10'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6'>
            <span className='w-2 h-2 rounded-full bg-primary animate-pulse' />
            <span className='text-sm font-medium text-primary'>
              Insights & Resources
            </span>
          </div>

          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 font-display tracking-tight'>
            Our Blog
          </h1>
          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed'>
            Discover insights on Direct Primary Care, Wellness, Health
            Analytics, and innovative healthcare solutions.
          </p>

          {/* Search Bar */}
          <div className='max-w-xl mx-auto relative group'>
            <div className='absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300' />
            <div className='relative'>
              <Input
                type='text'
                placeholder='Search articles...'
                value={searchQuery}
                onChange={handleSearchChange}
                className='pl-5 pr-12 py-4 h-14 bg-card border-border/50 rounded-xl shadow-soft focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 text-base'
              />
              <div className='absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-muted'>
                <Search className='h-4 w-4 text-muted-foreground' />
              </div>
            </div>
          </div>

          {/* Post count */}
          <p className='text-sm text-muted-foreground mt-4'>
            {loading
              ? 'Loading articles...'
              : `${filteredPosts.length} article${
                  filteredPosts.length !== 1 ? 's' : ''
                } available`}
          </p>
        </div>
      </section>

      {/* Error Message */}
      {error && (
        <section className='py-12 md:py-20'>
          <div className='container mx-auto px-4 text-center'>
            <div className='w-20 h-20 mx-auto mb-6 rounded-2xl bg-destructive/10 flex items-center justify-center'>
              <Search className='w-8 h-8 text-destructive' />
            </div>
            <h3 className='text-xl font-semibold text-foreground mb-2 font-display'>
              Failed to load blog posts
            </h3>
            <p className='text-muted-foreground'>{error}</p>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className='py-12 md:py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
            {/* Loading skeletons */}
            {loading &&
              Array.from({ length: POSTS_PER_PAGE }).map((_, index) => (
                <BlogCardSkeleton key={`loading-${index}`} />
              ))}

            {/* Rendered blog posts */}
            {!loading &&
              displayedPosts.map((post, index) => (
                <Link
                  key={post.id || index}
                  to={`/resources/blogs/${post.slug}`}
                  className='group block'
                >
                  {/* Image Container */}
                  <div className='relative overflow-hidden rounded-2xl mb-5 bg-muted'>
                    <div className='aspect-[16/10]'>
                      <img
                        src={post.image}
                        alt={post.title}
                        className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105'
                        loading='lazy'
                      />
                    </div>
                    {/* Overlay on hover */}
                    <div className='absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                    {/* Read More indicator */}
                    <div className='absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
                      <span className='text-white text-sm font-medium'>
                        Read Article
                      </span>
                      <ArrowRight className='w-4 h-4 text-white' />
                    </div>
                  </div>

                  {/* Content */}
                  <div className='space-y-3'>
                    {/* Date */}
                    <div className='flex items-center gap-2 text-muted-foreground'>
                      <Calendar className='w-3.5 h-3.5' />
                      <span className='text-xs font-medium uppercase tracking-wider'>
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className='text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-snug font-display'>
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className='text-muted-foreground text-sm leading-relaxed line-clamp-2'>
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}

            {/* Skeleton cards while loading */}
            {loadingNewCards &&
              Array.from({ length: skeletonCount }).map((_, index) => (
                <BlogCardSkeleton key={`skeleton-${index}`} />
              ))}
          </div>

          {/* No results when not loading */}
          {!loading && filteredPosts.length === 0 && (
            <div className='text-center py-20'>
              <div className='w-20 h-20 mx-auto mb-6 rounded-2xl bg-muted flex items-center justify-center'>
                <Search className='w-8 h-8 text-muted-foreground' />
              </div>
              <h3 className='text-xl font-semibold text-foreground mb-2 font-display'>
                No results found
              </h3>
              <p className='text-muted-foreground'>
                Try adjusting your search to find what you're looking for.
              </p>
            </div>
          )}

          {/* More Posts Button */}
          {!loading && hasMorePosts && !loadingNewCards && (
            <div className='text-center mt-16 space-y-4'>
              <Button
                onClick={handleLoadMore}
                disabled={isLoading}
                size='lg'
                className='group px-10 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-105'
              >
                {isLoading ? (
                  <>
                    <Loader2 className='mr-2 h-5 w-5 animate-spin' />
                    Loading...
                  </>
                ) : (
                  <>
                    Load More Articles
                    <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
                  </>
                )}
              </Button>

              {/* Show remaining count */}
              <p className='text-sm text-muted-foreground'>
                Showing {displayedPosts.length} of {filteredPosts.length}{' '}
                articles
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Blogs
