import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

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
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-medium mb-4">Blogs</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Blogs
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Insights & Resources on Direct Primary Care, Wellness, Health Analytics & More
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search the blog"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 h-12 bg-background border-border rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {post.date}
                  </p>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts found matching your search.</p>
            </div>
          )}

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                More Posts
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
