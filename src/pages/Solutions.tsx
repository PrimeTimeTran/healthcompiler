import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Activity, 
  TrendingUp, 
  Receipt, 
  LayoutDashboard,
  ArrowRight 
} from 'lucide-react';

const solutions = [
  {
    icon: Users,
    title: 'Patient Analytics',
    description: 'Understand patient populations, track engagement metrics, and identify trends to improve care delivery and outcomes.',
    outcomes: ['Patient segmentation', 'Engagement tracking', 'Outcome prediction'],
  },
  {
    icon: Activity,
    title: 'Operational Reporting',
    description: 'Real-time visibility into clinic operations, staff productivity, and resource utilization to optimize performance.',
    outcomes: ['Staff productivity metrics', 'Resource utilization', 'Capacity planning'],
  },
  {
    icon: TrendingUp,
    title: 'Utilization & Engagement Analytics',
    description: 'Track service utilization patterns and patient engagement to identify opportunities for improvement.',
    outcomes: ['Service usage trends', 'Appointment analytics', 'No-show prediction'],
  },
  {
    icon: Receipt,
    title: 'Claims & Financial Data Pipelines',
    description: 'Automate claims processing data flows and financial reporting for improved revenue cycle management.',
    outcomes: ['Claims automation', 'Revenue tracking', 'Denial analytics'],
  },
  {
    icon: LayoutDashboard,
    title: 'Custom Healthcare Dashboards',
    description: 'Bespoke dashboards tailored to your specific KPIs, metrics, and operational needs.',
    outcomes: ['Custom KPI tracking', 'Executive reporting', 'Departmental views'],
  },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-background to-background-secondary">
        <div className="container-tight mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Solutions & Use Cases
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of our healthcare data platform, 
            designed to solve your most pressing operational challenges.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-background">
        <div className="container-tight mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Key Outcomes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.outcomes.map((outcome) => (
                      <span
                        key={outcome}
                        className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background-secondary">
        <div className="container-tight mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Have a Specific Use Case?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We build custom solutions for unique healthcare data challenges. Let's explore what's possible.
          </p>
          <Button variant="primary" size="xl" asChild>
            <Link to="/contact" className="gap-2">
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
