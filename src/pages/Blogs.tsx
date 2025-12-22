import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { blogPosts } from "@/data/blogPosts";

const POSTS_PER_PAGE = 9;

// Skeleton card component for loading state
const BlogCardSkeleton = () => (
  <div className="block animate-pulse">
    <Skeleton className="w-full h-48 md:h-56 rounded-lg mb-4" />
    <Skeleton className="h-6 w-full mb-2" />
    <Skeleton className="h-6 w-3/4 mb-2" />
    <Skeleton className="h-4 w-1/3 mb-3" />
    <Skeleton className="h-4 w-full mb-1" />
    <Skeleton className="h-4 w-full mb-1" />
    <Skeleton className="h-4 w-2/3" />
  </div>
);

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingNewCards, setLoadingNewCards] = useState(false);

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;
  
  // Calculate how many skeleton cards to show
  const remainingPosts = filteredPosts.length - visiblePosts;
  const skeletonCount = Math.min(POSTS_PER_PAGE, remainingPosts);

  const handleLoadMore = () => {
    setIsLoading(true);
    setLoadingNewCards(true);
    
    // Simulate loading delay like the source page
    setTimeout(() => {
      setVisiblePosts(prev => Math.min(prev + POSTS_PER_PAGE, filteredPosts.length));
      setIsLoading(false);
      setLoadingNewCards(false);
    }, 800);
  };

  // Reset visible posts when search query changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisiblePosts(POSTS_PER_PAGE);
  };

  return (
    <Layout>
      {/* Hero Section - matching source page style */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4" style={{ fontFamily: 'serif' }}>
            Blogs
          </h1>
          <p className="text-base md:text-lg text-foreground max-w-3xl mx-auto mb-8 font-medium">
            Insights & Resources on Direct Primary Care, Wellness, Health Analytics & More
          </p>
          
          {/* Search Bar - matching source style */}
          <div className="max-w-xl mx-auto relative">
            <Input
              type="text"
              placeholder="Search the blog"
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-4 pr-12 py-3 h-12 bg-card border border-border rounded-md shadow-sm focus:ring-2 focus:ring-primary/20"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rendered blog posts */}
            {displayedPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div>
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Date */}
                  <p className="text-sm text-muted-foreground mb-3">
                    {post.date}
                  </p>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </a>
            ))}
            
            {/* Skeleton cards while loading */}
            {loadingNewCards && Array.from({ length: skeletonCount }).map((_, index) => (
              <BlogCardSkeleton key={`skeleton-${index}`} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-lg">No blog posts found matching your search.</p>
            </div>
          )}

          {/* More Posts Button - matching source style */}
          {hasMorePosts && !loadingNewCards && (
            <div className="text-center mt-12">
              <Button 
                onClick={handleLoadMore}
                disabled={isLoading}
                variant="outline" 
                size="lg" 
                className="px-8 py-3 min-w-[140px] border border-foreground/30 hover:border-foreground hover:bg-muted/30 font-medium rounded-md transition-all"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "More Posts"
                )}
              </Button>
            </div>
          )}
          
          {/* Show remaining count */}
          {hasMorePosts && !loadingNewCards && (
            <p className="text-center text-sm text-muted-foreground mt-4">
              Showing {displayedPosts.length} of {filteredPosts.length} posts
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
