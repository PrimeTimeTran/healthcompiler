import { useState } from "react";
import { DollarSign, Users, FileCheck, Activity, ClipboardList, BarChart3, ChevronDown } from "lucide-react";

const deployments = [
  {
    icon: DollarSign,
    title: "Employer Cost + Claims Insights",
    summary: "Real-time visibility into healthcare spend and utilization patterns.",
    details: {
      ships: "Automated claims dashboard with cost trend analysis",
      metric: "30% reduction in time to identify high-cost claimants",
    },
  },
  {
    icon: Users,
    title: "Direct Care Ops + Member Lifecycle",
    summary: "End-to-end member journey orchestration from enrollment to engagement.",
    details: {
      ships: "Unified member portal with automated outreach workflows",
      metric: "2x increase in member engagement rates",
    },
  },
  {
    icon: FileCheck,
    title: "Prior Auth / Referrals Automation",
    summary: "Streamlined authorization workflows that reduce admin burden.",
    details: {
      ships: "Automated prior auth submission and tracking system",
      metric: "65% reduction in authorization processing time",
    },
  },
  {
    icon: Activity,
    title: "Risk / HCC Suspecting + Gap Closure",
    summary: "AI-powered risk identification and care gap prioritization.",
    details: {
      ships: "Predictive risk scoring with provider-facing gap alerts",
      metric: "40% improvement in RAF score accuracy",
    },
  },
  {
    icon: ClipboardList,
    title: "Eligibility + Roster Automation",
    summary: "Automated eligibility verification and roster management.",
    details: {
      ships: "Real-time eligibility checks with roster sync pipelines",
      metric: "90% reduction in eligibility-related claim denials",
    },
  },
  {
    icon: BarChart3,
    title: "Executive Scorecards for CFO / Ops",
    summary: "Leadership-ready dashboards with key performance metrics.",
    details: {
      ships: "Automated weekly executive reports with drill-down analytics",
      metric: "From 2 days of manual reporting to instant access",
    },
  },
];

export const FDEDeployments = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Common Deployments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real solutions we've shipped for healthcare organizations like yours.
          </p>
        </div>

        {/* Deployment tiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deployments.map((deployment, index) => {
            const Icon = deployment.icon;
            const isExpanded = expandedIndex === index;
            
            return (
              <div
                key={deployment.title}
                className={`group relative bg-card rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                  isExpanded 
                    ? "border-accent/40 shadow-elevated" 
                    : "border-border/50 hover:border-accent/30 hover:shadow-lg"
                }`}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`} />
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                    {deployment.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {deployment.summary}
                  </p>

                  {/* Expanded content */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    isExpanded ? "max-h-40 mt-5 pt-5 border-t border-border/50" : "max-h-0"
                  }`}>
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-medium text-accent uppercase tracking-wide">What Ships</span>
                        <p className="text-sm text-foreground mt-1">{deployment.details.ships}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-accent uppercase tracking-wide">Metric Moved</span>
                        <p className="text-sm text-foreground mt-1">{deployment.details.metric}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
