import { Stethoscope, Code2, Building2, BarChart } from 'lucide-react';

const industries = [
  {
    icon: Stethoscope,
    title: 'Direct Primary Care',
    description: 'Streamlined patient data management and engagement analytics.',
  },
  {
    icon: Code2,
    title: 'Healthcare SaaS',
    description: 'Scalable data infrastructure for health tech products.',
  },
  {
    icon: Building2,
    title: 'Clinics & Practices',
    description: 'Operational reporting and workflow automation.',
  },
  {
    icon: BarChart,
    title: 'Health Analytics Teams',
    description: 'Custom dashboards and data pipeline solutions.',
  },
];

export const IndustriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions for diverse healthcare organizations across the US.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {industry.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
