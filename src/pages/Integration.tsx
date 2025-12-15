import { Layout } from "@/components/layout/Layout";
import { FlaskConical, Pill, FileText, Stethoscope, Heart, Smartphone, Database, TrendingUp, Users, Activity } from "lucide-react";

const dataSources = [
  { icon: FlaskConical, label: "Labs" },
  { icon: Pill, label: "Pharmacy" },
  { icon: FileText, label: "Claims" },
  { icon: Stethoscope, label: "EMRs" },
  { icon: Heart, label: "SdoH" },
  { icon: Smartphone, label: "Consumer & Digital Health" },
  { icon: Database, label: "Third-party Data" },
];

const processSteps = [
  {
    title: "Integrate",
    description: "Raw data is received from source systems & stored in a data lake.",
    highlighted: false,
  },
  {
    title: "Harmonize",
    description: "Data is parsed & codified, then stored in a simple data structure.",
    highlighted: false,
  },
  {
    title: "Unify",
    description: "Patient & provider information are aggregated into a single record.",
    highlighted: true,
  },
  {
    title: "Process",
    description: "Intelligent algorithms enrich the data with quality measures, gaps in care, & more.",
    highlighted: false,
  },
  {
    title: "Analyze",
    description: "Data is denormalized into a structure for analytics & AI.",
    highlighted: false,
  },
];

const outcomes = [
  { icon: TrendingUp, label: "Drive VBC performance" },
  { icon: Activity, label: "Deliver intelligent experiences" },
  { icon: Users, label: "Reduce provider burden" },
];

const Integration = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container-wide mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              DAP turns healthcare data into
              <br />
              <span className="text-accent">actionable intelligence</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              powered by <span className="text-accent font-semibold">HealthCompiler AI</span>
            </p>
          </div>

          {/* Main Pipeline Visualization */}
          <div className="relative max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
              {/* Data Sources */}
              <div className="flex flex-col gap-3 w-full lg:w-auto">
                {dataSources.map((source, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <source.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{source.label}</span>
                  </div>
                ))}
              </div>

              {/* Process Steps */}
              <div className="flex flex-col md:flex-row gap-4 flex-1 justify-center">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col items-center p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 min-w-[160px] ${
                      step.highlighted
                        ? "bg-accent border-accent text-white shadow-xl"
                        : "bg-background border-border hover:border-accent/50"
                    }`}
                  >
                    {/* Grid Icon */}
                    <div className={`mb-4 ${step.highlighted ? "text-white" : "text-accent"}`}>
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="8" cy="8" r="3" fill="currentColor" />
                        <circle cx="20" cy="8" r="3" fill="currentColor" />
                        <circle cx="32" cy="8" r="3" fill="currentColor" />
                        <circle cx="8" cy="20" r="3" fill="currentColor" />
                        <circle cx="20" cy="20" r="3" fill="currentColor" />
                        <circle cx="32" cy="20" r="3" fill="currentColor" />
                        <circle cx="8" cy="32" r="3" fill="currentColor" />
                        <circle cx="20" cy="32" r="3" fill="currentColor" />
                        <circle cx="32" cy="32" r="3" fill="currentColor" />
                      </svg>
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 ${step.highlighted ? "text-white" : "text-foreground"}`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs text-center leading-relaxed ${step.highlighted ? "text-white/90" : "text-muted-foreground"}`}>
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Outcomes */}
              <div className="flex flex-col gap-4 w-full lg:w-auto">
                {outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <outcome.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{outcome.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connection Lines - Decorative */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
              style={{ zIndex: -1 }}
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--border))" />
                  <stop offset="50%" stopColor="hsl(var(--accent))" />
                  <stop offset="100%" stopColor="hsl(var(--border))" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Data Integration Pipeline
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our integration platform connects disparate healthcare data sources, 
              enabling seamless data flow and unified patient records across your organization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <h3 className="font-semibold text-foreground mb-2">50+ Integrations</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with leading EHRs, labs, and healthcare applications
                </p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <h3 className="font-semibold text-foreground mb-2">Real-time Sync</h3>
                <p className="text-sm text-muted-foreground">
                  Data flows continuously for up-to-date insights
                </p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <h3 className="font-semibold text-foreground mb-2">HIPAA Compliant</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade security for protected health information
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Integration;