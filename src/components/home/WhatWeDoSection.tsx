import { BarChart3, Database, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    icon: BarChart3,
    title: 'Healthcare Analytics & Dashboards',
    description: 'Real-time insights and reporting tailored for healthcare operations, patient engagement, and clinical outcomes.',
  },
  {
    icon: Database,
    title: 'Data Engineering & ETL Pipelines',
    description: 'Scalable data pipelines that transform raw healthcare data into actionable, analytics-ready datasets.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation & APIs',
    description: 'Streamline operations with automated workflows and seamless integrations across EHR, claims, and patient systems.',
  },
];

export const WhatWeDoSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end healthcare data solutions designed for scale, security, and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((capability, index) => (
            <Link
              key={capability.title}
              to="/capabilities"
              className="group bg-card rounded-2xl p-8 shadow-soft border border-border/50 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <capability.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {capability.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {capability.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
