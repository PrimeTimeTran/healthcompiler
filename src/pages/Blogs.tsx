import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Search, ArrowRight, Calendar } from "lucide-react";
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
];

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            Insights & Resources
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Health Compiler <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Discover insights on Direct Primary Care, Wellness, Health Analytics, and the future of healthcare technology.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 h-14 bg-card border-border/50 rounded-xl shadow-soft focus:shadow-card transition-shadow"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Read More Indicator */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-card">
                    <ArrowRight className="w-5 h-5 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date Badge */}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.description}
                  </p>
                  
                  {/* Read More Link */}
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </span>
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

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-16">
              <Button variant="outline" size="lg" className="rounded-full px-8 border-2 border-primary/50 hover:border-primary hover:bg-primary/5">
                Load More Posts
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
