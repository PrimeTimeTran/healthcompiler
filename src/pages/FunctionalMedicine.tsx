import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import automatedTrackingImg from "@/assets/fm-automated-tracking.png";
import hipaaComplianceImg from "@/assets/fm-hipaa-compliance.png";
import employerInsightsImg from "@/assets/fm-employer-insights.png";
import dataDrivenGrowthImg from "@/assets/fm-data-driven-growth.png";
import dashboardsImg from "@/assets/fm-dashboards.png";

const FunctionalMedicine = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-primary font-medium mb-4">Functional Medicine</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              AI Powered Data Solutions for Functional Medicine Practices
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Clear insights. Zero extra work.
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              You bring a personalized approach to every patient. We bring the data support to match.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Health Compiler helps functional medicine practitioners stay ahead of patient needs, with structured insights into engagement, outcomes, chronic trends, and coordinated care. No extra clicks. Just the value clarity you need.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Book A Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Moves the Needle Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Moves the Needle in Patient Health
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              When data is fragmented, it's easy to miss the bigger picture.
            </p>
            <p className="text-lg text-muted-foreground">
              Health Compiler helps you close the loop, spot what's missing, and make informed clinical decisions faster.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Health Compiler helps you close the loop, spot what's missing, and make informed clinical decisions faster.
              </h2>
              <p className="text-lg font-semibold text-foreground mb-4">
                Your insights should match your intentions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We help you stay fully in tune with your patients, with no extra documentation or manual tracking.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Seamless System Integration
              </h3>
              <p className="text-lg text-muted-foreground">
                Easily connect with your existing communication platforms like Spruce and electronic medical record (EMR) systems such as Elation and Hint, ensuring a smooth data collection process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Key Features and Benefits
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automated Tracking */}
            <div className="bg-card rounded-lg p-6 shadow-md">
              <img 
                src={automatedTrackingImg} 
                alt="Automated Tracking" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-foreground mb-3">Automated Tracking</h4>
              <p className="text-muted-foreground">
                Our platform automatically tracks essential utilization and engagement metrics, eliminating the need for manual data gathering.
              </p>
            </div>

            {/* HIPAA Compliance */}
            <div className="bg-card rounded-lg p-6 shadow-md">
              <img 
                src={hipaaComplianceImg} 
                alt="HIPAA Compliance" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-foreground mb-3">HIPAA Compliance</h4>
              <p className="text-muted-foreground">
                Rest assured that all data management and analysis are fully HIPAA compliant, maintaining the highest standards of privacy and security.
              </p>
            </div>

            {/* Accessible Employer Insights */}
            <div className="bg-card rounded-lg p-6 shadow-md">
              <img 
                src={employerInsightsImg} 
                alt="Accessible Employer Insights" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-foreground mb-3">Accessible Employer Insights</h4>
              <p className="text-muted-foreground">
                Employers can log in to view crucial utilization metrics, including message volume, after-hours interactions, and key trends in patient encounters.
              </p>
            </div>

            {/* Data-Driven Growth */}
            <div className="bg-card rounded-lg p-6 shadow-md">
              <img 
                src={dataDrivenGrowthImg} 
                alt="Data-Driven Growth" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-foreground mb-3">Data-Driven Growth</h4>
              <p className="text-muted-foreground">
                Leverage these consolidated metrics to demonstrate your practice's effectiveness, attracting new patients and expanding your business.
              </p>
            </div>

            {/* Personalized Primary Care Dashboards */}
            <div className="bg-card rounded-lg p-6 shadow-md">
              <img 
                src={dashboardsImg} 
                alt="Personalized Primary Care Dashboards" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-foreground mb-3">Personalized Primary Care Dashboards</h4>
              <p className="text-muted-foreground">
                As a Functional medicine provider, you can access tailored dashboards to gain insights into utilization and engagement, empowering you to continuously enhance care quality and service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-lg text-muted-foreground mb-2">30+ Integrations with wearables, med devices & health systems</p>
            </div>
            <div>
              <p className="text-lg text-muted-foreground mb-2">HIPAA & SOC 2 Compliant</p>
            </div>
            <div>
              <p className="text-lg text-muted-foreground mb-2">Solutions</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-center mt-8">
            <div>
              <p className="text-3xl font-bold text-primary">100,000+</p>
              <p className="text-lg text-muted-foreground">API calls average supported per customer</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">12,000+</p>
              <p className="text-lg text-muted-foreground">data elements curated from 150+ Health Systems & Wearables</p>
            </div>
          </div>
        </div>
      </section>

      {/* Measure What Matters Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Measure What Matters
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Functional medicine is intentional and deeply personalized. Your data should reflect that.
            </p>
            <p className="text-lg text-muted-foreground">
              We help you surface meaningful signals from noise, without adding to your admin burden.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold text-foreground mb-3">Patient engagement reports</h4>
              <p className="text-muted-foreground">
                See how often your patients interact with care, spot gaps in follow-up, and track engagement trends over time.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold text-foreground mb-3">Chronic Risk Insights</h4>
              <p className="text-muted-foreground">
                Identify patients with rising risk, unmanaged conditions, or missed screenings, before they escalate.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold text-foreground mb-3">Metrics For Coordinated Care</h4>
              <p className="text-muted-foreground">
                Track whether patients are completing essential care steps, like imaging, labs, and procedures, and identify where coordination may be falling short.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold text-foreground mb-3">Customized Dashboards Built for How You Practice</h4>
              <p className="text-muted-foreground">
                Visualize the data that matters most to your clinic, with layouts tailored to your workflows.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold text-foreground mb-3">Patient-Facing Insights & Cost-Savings Reports</h4>
              <p className="text-muted-foreground">
                Equip patients with personalized "health report cards" and cost-savings summaries, backed by real data from your practice.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Talk To Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clarity Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Clarity behind the scenes. Confidence in the room.
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            You stay present with patients. We keep the data engine running behind the scenes.
          </p>
        </div>
      </section>

      {/* Built Around Your Practice Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built Around Your Practice
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Health Compiler works alongside your team to shape analytics that align with your care philosophy. No generic metrics, just relevant, meaningful insights that reflect how you practice.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Schedule a Demo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FunctionalMedicine;
