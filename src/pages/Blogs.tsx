import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  // Additional posts (loaded on "More Posts" click)
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
];

const POSTS_PER_PAGE = 9;

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay like the source page
    setTimeout(() => {
      setVisiblePosts(prev => prev + POSTS_PER_PAGE);
      setIsLoading(false);
    }, 500);
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
          {hasMorePosts && (
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
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
