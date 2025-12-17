import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users, Activity, BarChart3, Target } from "lucide-react";

// Import images
import engagementUtilization from "@/assets/dpc-engagement-utilization.png";
import careGaps from "@/assets/dpc-care-gaps.png";
import chronicRisk from "@/assets/dpc-chronic-risk.png";
import claimsUtilization from "@/assets/dpc-claims-utilization.png";
import marketingAnalytics from "@/assets/dpc-marketing-analytics.png";

const DirectPrimaryCare = () => {
  const dataSolutions = [
    {
      title: "ROI",
      description: "Show measurable savings and the long-term value of your care model."
    },
    {
      title: "Engagement & Utilization Analytics",
      description: "Highlight how patients use and benefit from your services."
    },
    {
      title: "Chronic Risk Coordination",
      description: "Track, manage, and report risk across your patient panel."
    },
    {
      title: "Care Gaps & Preventive Metrics",
      description: "Capture missed screenings or follow-ups before they escalate."
    },
    {
      title: "Population Insights",
      description: "Give employers clear, actionable reporting on workforce health."
    }
  ];

  const growthFeatures = [
    {
      title: "SEO & Marketing Automation",
      description: "Attract the right patients with optimized content and targeted campaigns."
    },
    {
      title: "AI Chatbots",
      description: "Provide 24/7 patient support, answer questions, and capture leads instantly."
    },
    {
      title: "AI Outreach System",
      description: "Personalized outreach that keeps your practice top of mind with patients and employers."
    },
    {
      title: "Automated Lead Capture",
      description: "Every inquiry flows straight into your pipeline, no opportunities lost."
    }
  ];

  const featureCards = [
    {
      title: "Engagement & Utilization Analytics",
      description: "Gain insights into patient interactions to enhance care delivery, empowering healthcare providers to improve patient experiences and overall health outcomes.",
      image: engagementUtilization,
      imagePosition: "right" as const
    },
    {
      title: "Utilization Gaps",
      description: "Comprehensive care coordination fosters better communication and enhances patient outcomes throughout the treatment process.",
      image: careGaps,
      imagePosition: "left" as const
    },
    {
      title: "Chronic Risk",
      description: "Patients with existing chronic conditions. It showcases top chronic prevailing in your patients' populations.",
      image: chronicRisk,
      imagePosition: "right" as const
    },
    {
      title: "Claims Utilization Data",
      description: "Assess service utilization against established benchmarks to identify cost-saving opportunities, with adjustments made for risk factors or demographics to ensure accurate performance evaluation.",
      image: claimsUtilization,
      imagePosition: "left" as const
    },
    {
      title: "Growth",
      description: "Expand your Concierge medicine practice by leveraging our effective marketing strategies.",
      image: marketingAnalytics,
      imagePosition: "right" as const
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold mb-4">Direct Primary Care</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              An Analytics & Growth Platform Built for Direct Primary Care
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Smarter patient care. Stronger growth. All powered by AI-driven insights and data solutions designed for DPC practices.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Show me a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Data Solution Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Data Solution for Direct Primary Care
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl">
            Employers want proof of value. We make it simple for your DPC practice to deliver it. With Health Compiler, you get <span className="font-semibold text-foreground">direct primary care solutions</span> that track outcomes, streamline operations, and prove impact, without extra dashboards or manual reporting.
          </p>
          
          <p className="text-lg font-semibold text-foreground mb-6">Our data solutions help you demonstrate:</p>
          
          <div className="space-y-4 mb-8">
            {dataSolutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{solution.title}</span> – {solution.description}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-muted-foreground max-w-4xl">
            With Health Compiler's <span className="font-semibold text-foreground">patient data analytics</span> and <span className="font-semibold text-foreground">patient data management</span>, you'll have everything you need to build trust with patients and employers.
          </p>
        </div>
      </section>

      {/* EHR Integration Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            EHR Integration Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl">
            Your practice shouldn't waste time managing disconnected systems. Our platform provides seamless <span className="font-semibold text-foreground">EHR integration solutions</span>, bringing labs, imaging, procedures, and clinical notes together into one connected record. No double entry. No lost data. Just smarter, unified <span className="font-semibold text-foreground">patient data solutions</span> for DPC.
          </p>
        </div>
      </section>

      {/* AI-Powered Growth Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            AI-Powered Growth for DPC Practices
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl">
            Growing a Direct Primary Care practice takes more than excellent care, it takes visibility. That's why we built <span className="font-semibold text-foreground">AI-powered growth solutions</span> designed specifically for DPC:
          </p>
          
          <div className="space-y-4 mb-8">
            {growthFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{feature.title}</span> – {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-muted-foreground max-w-4xl">
            With these tools, our <span className="font-semibold text-foreground">direct primary care solutions</span> help you grow sustainably while keeping patient care at the center.
          </p>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16 md:space-y-24">
            {featureCards.map((card, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${card.imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
              >
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {card.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {card.description}
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            See How Data + AI Can Grow Your DPC Practice
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Your time belongs with your patients. Let us handle the data and growth tools that fuel success.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Schedule a Demo
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default DirectPrimaryCare;
