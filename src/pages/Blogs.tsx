import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const blogPosts = [
  {
    title: "Level Funded vs. Self Funded Health Plans: A Practical Guide for Employers",
    date: "December 5, 2025",
    description: "Compare level funded vs self funded health plans, risks, savings, and flexibility to choose the best option for your company's benefits strategy.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+1-1920w.png",
    link: "https://www.healthcompiler.com/level-funded-vs-self-funded-health-plans-a-practical-guide-for-employers"
  },
  {
    title: "Why CEOs Should Partner with CFOs and Benefits Teams at Renewals",
    date: "December 3, 2025",
    description: "Discover why CEOs, CFOs, and benefits teams must align during employee benefits renewal to improve healthcare cost management and control risk.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2835%29-1920w.png",
    link: "https://www.healthcompiler.com/why-ceos-should-partner-with-cfos-and-benefits-teams-at-renewals"
  },
  {
    title: "Cost Plus Drugs vs. TrumpRx: How to Save on Prescription Medications in 2026",
    date: "November 27, 2025",
    description: "Discover the differences between Cost Plus Drugs and TrumpRx in 2026. See how each program works, where the best savings come from, and what patients should know.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2834%29-1920w.png",
    link: "https://www.healthcompiler.com/cost-plus-drugs-vs-trumprx-how-to-save-on-prescription-medications-in-2026"
  },
  {
    title: "How a Voice AI Agent Can Transform DPC Clinic Operations",
    date: "November 7, 2025",
    description: "See how AI voice agents for healthcare streamline scheduling, triage, refills, and after-hours support in DPC clinics with HIPAA-compliant automation.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2830%29-1920w.png",
    link: "https://www.healthcompiler.com/how-a-voice-ai-agent-can-transform-dpc-clinic-operations"
  },
  {
    title: "How to Build Clinician Confidence in Voice-Enabled AI",
    date: "October 27, 2025",
    description: "Explore how AI voice agents for healthcare enhance workflows, boost clinician trust, and drive digital transformation across healthcare voice platforms.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2829%29-1920w.png",
    link: "https://www.healthcompiler.com/how-to-build-clinician-confidence-in-voice-enabled-ai"
  },
  {
    title: "What Is a Captive Health Insurance Plan and How Does It Work?",
    date: "October 13, 2025",
    description: "Learn what captive insurance is, how captive health insurance companies work, and why more small business owners choose this model for cost control and flexibility.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2828%29-1920w.png",
    link: "https://www.healthcompiler.com/what-is-a-captive-health-insurance-plan-and-how-does-it-work"
  },
  {
    title: "ERISA Explained: The Federal Law Governing Employee Health & Pension Plans",
    date: "October 9, 2025",
    description: "Learn what ERISA law means for employee benefit plans. Understand self-funded ERISA plans, pension rules, and compliance essentials with Health Compiler.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2827%29-1920w.png",
    link: "https://www.healthcompiler.com/erisa-explained-the-federal-law-governing-employee-health-pension-plans"
  },
  {
    title: "AI Agents in Healthcare: How AI Voice and Support Agents Transform Care in 2025",
    date: "October 7, 2025",
    description: "Discover how AI voice agents and AI-powered healthcare agents enhance workflows, patient engagement, and outcomes in 2025 with Health Compiler.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2826%29-1920w.png",
    link: "https://www.healthcompiler.com/ai-agents-in-healthcare-how-ai-voice-and-support-agents-transform-care-in-2025"
  },
  {
    title: "Improving Patient Outcomes with Cloud-Native Healthcare Solutions",
    date: "September 30, 2025",
    description: "Learn how cloud-native healthcare on Google Cloud enables real-time data, analytics, and collaboration to drive better patient outcomes.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2825%29-1920w.png",
    link: "https://www.healthcompiler.com/improving-patient-outcomes-with-cloud-native-healthcare-solutions"
  },
  // Second batch (loaded on first "More Posts" click)
  {
    title: "The Future of Healthcare Data Interoperability",
    date: "September 25, 2025",
    description: "Explore how FHIR standards and modern APIs are enabling seamless data exchange between healthcare systems and improving care coordination.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2824%29-1920w.png",
    link: "https://www.healthcompiler.com/the-future-of-healthcare-data-interoperability"
  },
  {
    title: "Understanding Risk Adjustment in Value-Based Care",
    date: "September 18, 2025",
    description: "A comprehensive guide to HCC coding, risk adjustment factors, and how they impact reimbursement in Medicare Advantage and ACO programs.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2823%29-1920w.png",
    link: "https://www.healthcompiler.com/understanding-risk-adjustment-in-value-based-care"
  },
  {
    title: "How DPC Practices Can Leverage Data Analytics for Growth",
    date: "September 10, 2025",
    description: "Discover how Direct Primary Care practices use data-driven insights to improve patient outcomes, reduce costs, and scale their membership.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2822%29-1920w.png",
    link: "https://www.healthcompiler.com/how-dpc-practices-can-leverage-data-analytics-for-growth"
  },
  {
    title: "Employer Healthcare Benefits: Trends for 2026",
    date: "September 3, 2025",
    description: "What employers need to know about emerging healthcare benefit trends, from personalized medicine to mental health support and preventive care.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2821%29-1920w.png",
    link: "https://www.healthcompiler.com/employer-healthcare-benefits-trends-for-2026"
  },
  {
    title: "Building a Patient-Centered Healthcare Technology Stack",
    date: "August 28, 2025",
    description: "How to select and integrate healthcare technologies that put patients first while maintaining operational efficiency and data security.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2820%29-1920w.png",
    link: "https://www.healthcompiler.com/building-a-patient-centered-healthcare-technology-stack"
  },
  {
    title: "The Role of Preventive Care in Reducing Healthcare Costs",
    date: "August 20, 2025",
    description: "Evidence-based insights on how preventive care programs deliver significant ROI for employers and improve long-term health outcomes.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2819%29-1920w.png",
    link: "https://www.healthcompiler.com/the-role-of-preventive-care-in-reducing-healthcare-costs"
  },
  {
    title: "Navigating HIPAA Compliance in the Age of AI",
    date: "August 12, 2025",
    description: "Essential guidelines for healthcare organizations implementing AI solutions while maintaining strict HIPAA compliance and patient privacy.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2818%29-1920w.png",
    link: "https://www.healthcompiler.com/navigating-hipaa-compliance-in-the-age-of-ai"
  },
  {
    title: "How TPAs Can Modernize Claims Processing with AI",
    date: "August 5, 2025",
    description: "Third-party administrators are revolutionizing claims management through intelligent automation, reducing errors and accelerating payments.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2817%29-1920w.png",
    link: "https://www.healthcompiler.com/how-tpas-can-modernize-claims-processing-with-ai"
  },
  {
    title: "Direct Primary Care: A Solution for Rising Healthcare Costs",
    date: "July 29, 2025",
    description: "Learn how Direct Primary Care practices offer transparent pricing, better access to care, and significant cost savings for patients and employers.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2816%29-1920w.png",
    link: "https://www.healthcompiler.com/direct-primary-care-a-solution-for-rising-healthcare-costs"
  },
  // Third batch (loaded on second "More Posts" click)
  {
    title: "Maximizing ROI on Employee Wellness Programs",
    date: "July 22, 2025",
    description: "Data-driven strategies for designing and measuring effective corporate wellness initiatives that improve employee health and reduce costs.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2815%29-1920w.png",
    link: "https://www.healthcompiler.com/maximizing-roi-on-employee-wellness-programs"
  },
  {
    title: "The Impact of Social Determinants on Health Outcomes",
    date: "July 15, 2025",
    description: "Understanding how social factors like housing, education, and food security affect patient health and how healthcare providers can address them.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2814%29-1920w.png",
    link: "https://www.healthcompiler.com/the-impact-of-social-determinants-on-health-outcomes"
  },
  {
    title: "Telemedicine Best Practices for Primary Care Providers",
    date: "July 8, 2025",
    description: "How to deliver high-quality virtual care that maintains patient relationships and meets clinical standards in the evolving healthcare landscape.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2813%29-1920w.png",
    link: "https://www.healthcompiler.com/telemedicine-best-practices-for-primary-care-providers"
  },
  {
    title: "Healthcare Analytics: Turning Data Into Actionable Insights",
    date: "July 1, 2025",
    description: "A practical guide for healthcare organizations looking to leverage their data for better decision-making and improved patient outcomes.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2812%29-1920w.png",
    link: "https://www.healthcompiler.com/healthcare-analytics-turning-data-into-actionable-insights"
  },
  {
    title: "The Rise of Concierge Medicine in America",
    date: "June 24, 2025",
    description: "Exploring the growth of concierge medical practices and what this membership-based model means for the future of personalized healthcare.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2811%29-1920w.png",
    link: "https://www.healthcompiler.com/the-rise-of-concierge-medicine-in-america"
  },
  {
    title: "Chronic Disease Management in the Digital Age",
    date: "June 17, 2025",
    description: "How technology-enabled care management programs are improving outcomes for patients with diabetes, heart disease, and other chronic conditions.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%2810%29-1920w.png",
    link: "https://www.healthcompiler.com/chronic-disease-management-in-the-digital-age"
  },
  {
    title: "Value-Based Care: What Employers Need to Know",
    date: "June 10, 2025",
    description: "Understanding how value-based care arrangements can help employers control healthcare costs while improving quality of care for employees.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%289%29-1920w.png",
    link: "https://www.healthcompiler.com/value-based-care-what-employers-need-to-know"
  },
  {
    title: "Mental Health in the Workplace: A Strategic Priority",
    date: "June 3, 2025",
    description: "Why mental health benefits are essential for employee wellbeing and how organizations can build supportive mental health programs.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%288%29-1920w.png",
    link: "https://www.healthcompiler.com/mental-health-in-the-workplace-a-strategic-priority"
  },
  {
    title: "Healthcare Price Transparency: New Rules and Opportunities",
    date: "May 27, 2025",
    description: "How new federal price transparency requirements are changing healthcare and what it means for providers, payers, and patients.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+Blog+Images+%287%29-1920w.png",
    link: "https://www.healthcompiler.com/healthcare-price-transparency-new-rules-and-opportunities"
  },
];

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
