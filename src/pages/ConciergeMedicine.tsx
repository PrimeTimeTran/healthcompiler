import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Reusing images from DPC page
import engagementUtilizationImg from "@/assets/dpc-engagement-utilization.png";
import careGapsImg from "@/assets/dpc-care-gaps.png";
import chronicRiskImg from "@/assets/dpc-chronic-risk.png";
import claimsUtilizationImg from "@/assets/dpc-claims-utilization.png";
import marketingAnalyticsImg from "@/assets/dpc-marketing-analytics.png";

const ConciergeMedicine = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-primary font-medium mb-4">Concierge Medicine</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              AI-Powered Data & Growth Solutions for Concierge Medical Services That Put Care First
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Health Compiler brings the power of advanced analytics and AI to concierge medicine, without adding complexity.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              See how your patients engage. Spot care gaps early. Improve outcomes continuously.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Show me a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Analytics Platform Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Analytics Platform for Concierge Medicine
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer a sophisticated Engagement and Utilization Analytics platform specifically designed for Concierge medicine. This tool simplifies the collection and analysis of key healthcare metrics, providing clear and actionable insights. It transcends basic data gathering by delivering meaningful information that highlights the effectiveness of your services on patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement & Utilization Analytics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Engagement & Utilization Analytics
              </h3>
              <p className="text-lg text-muted-foreground">
                Gain insights into patient interactions to enhance care delivery, empowering healthcare providers to improve patient experiences and overall health outcomes.
              </p>
            </div>
            <div>
              <img 
                src={engagementUtilizationImg} 
                alt="Engagement & Utilization Analytics Dashboard" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Utilization Gaps */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={careGapsImg} 
                alt="Utilization Gaps Dashboard" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Utilization Gaps
              </h3>
              <p className="text-lg text-muted-foreground">
                Comprehensive care coordination fosters better communication and enhances patient outcomes throughout the treatment process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chronic Risk */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Chronic Risk
              </h3>
              <p className="text-lg text-muted-foreground">
                Patients with existing chronic conditions. It showcases top chronic prevailing in your patients' populations.
              </p>
            </div>
            <div>
              <img 
                src={chronicRiskImg} 
                alt="Chronic Risk Dashboard" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Claims Utilization Data */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={claimsUtilizationImg} 
                alt="Claims Utilization Data Dashboard" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Claims Utilization Data
              </h3>
              <p className="text-lg text-muted-foreground">
                Assess service utilization against established benchmarks to identify cost-saving opportunities, with adjustments made for risk factors or demographics to ensure accurate performance evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Growth
              </h3>
              <p className="text-lg text-muted-foreground">
                Expand your Concierge medicine practice by leveraging our effective marketing strategies.
              </p>
            </div>
            <div>
              <img 
                src={marketingAnalyticsImg} 
                alt="Marketing Analytics Dashboard" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Elevate Your Concierge Medicine
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Welcome to a new era of healthcare management. With our Concierge medicine analytics solution, you're not just providing services; you're creating healthcare experiences that are rooted in value.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Schedule a Demo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ConciergeMedicine;
