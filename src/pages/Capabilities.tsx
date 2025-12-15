import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Database, 
  Workflow, 
  Plug, 
  Cloud,
  ArrowRight 
} from 'lucide-react';

const capabilities = [
  {
    icon: BarChart3,
    title: 'Healthcare Analytics',
    description: 'Transform raw data into actionable insights with custom dashboards, real-time reporting, and advanced analytics tailored for healthcare operations.',
    features: [
      'Custom healthcare dashboards',
      'Real-time operational reporting',
      'Patient outcome analytics',
      'Financial performance tracking',
    ],
  },
  {
    icon: Database,
    title: 'Data Pipelines & ETL',
    description: 'Build scalable, reliable data pipelines that extract, transform, and load healthcare data from any source into your analytics infrastructure.',
    features: [
      'Automated data extraction',
      'Data quality validation',
      'Real-time streaming pipelines',
      'Historical data migration',
    ],
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Streamline repetitive tasks and processes with intelligent automation that reduces manual work and improves operational efficiency.',
    features: [
      'Automated reporting workflows',
      'Alert and notification systems',
      'Task scheduling and orchestration',
      'Process optimization',
    ],
  },
  {
    icon: Plug,
    title: 'API & System Integrations',
    description: 'Connect disparate healthcare systems with robust API integrations that enable seamless data flow across your organization.',
    features: [
      'EHR system integrations',
      'Claims data connectivity',
      'Lab and diagnostic integrations',
      'Third-party API development',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud-native Architecture',
    description: 'Deploy on modern cloud infrastructure designed for healthcare compliance, scalability, and high availability.',
    features: [
      'HIPAA-aligned infrastructure',
      'Auto-scaling capabilities',
      'Disaster recovery solutions',
      'Multi-region deployment',
    ],
  },
];

const Capabilities = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-background to-background-secondary">
        <div className="container-tight mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Capabilities
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end healthcare data solutions from analytics to automation, 
            built with security and scalability at the core.
          </p>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="section-padding bg-background">
        <div className="container-tight mx-auto">
          <div className="space-y-12">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
                    <capability.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {capability.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {capability.description}
                  </p>
                  <ul className="space-y-3">
                    {capability.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                    <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
                      <capability.icon className="w-20 h-20 text-primary/40" />
                    </div>
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
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how our capabilities can address your specific healthcare data challenges.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="gap-2">
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Capabilities;
