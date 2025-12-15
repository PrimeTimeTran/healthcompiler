import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Code, HeartPulse, Rocket, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We simplify healthcare data so teams can focus on delivering quality care.',
  },
  {
    icon: Code,
    title: 'Engineering Excellence',
    description: 'Every solution is built with robust architecture, clean code, and best practices.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare Expertise',
    description: 'Deep domain knowledge in healthcare workflows, compliance, and data standards.',
  },
  {
    icon: Rocket,
    title: 'Long-term Partnership',
    description: 'We build scalable solutions designed to grow with your organization.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-background to-background-secondary">
        <div className="container-tight mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              About HealthCompiler
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a healthcare data platform company focused on building analytics, 
              automation, and data infrastructure for modern healthcare organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-tight mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Simplifying Healthcare Data
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Healthcare organizations generate massive amounts of data every day—from patient records 
                  and claims to operational metrics and financial reports. Yet most teams struggle to 
                  transform this data into actionable insights.
                </p>
                <p>
                  HealthCompiler was founded to bridge this gap. We combine deep healthcare domain expertise 
                  with modern data engineering practices to build platforms that work.
                </p>
                <p>
                  Our approach is straightforward: understand your workflows, design scalable architecture, 
                  and deliver solutions that drive real operational improvements.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
                <div className="aspect-square bg-secondary rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Abstract visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-primary/30 rounded-full animate-float" />
                    <div className="absolute w-24 h-24 border-4 border-accent/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background-secondary">
        <div className="container-tight mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our values shape every project we take on and every solution we deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border/50"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-tight mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
            Built by the Best
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-5">
            {[
              'Noopur Saligram',
              'Nimish Chougule',
              'Diksha Munot',
              'Shagun Patwa',
              'Vivek Singh',
              'Arya Uplap',
              'Santosh Pujari',
              'Anuj Jain',
              'Sanket Pande',
              'Sukanya Ladi',
              'Burhan',
              'Rahul Kharche',
              'Pradnya Mahabale',
              'Mahesh Meena',
            ].map((name) => (
              <div key={name} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-foreground font-medium text-sm">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="text-foreground font-medium">{name}</span>
              </div>
            ))}
          </div>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 mt-8 text-foreground font-medium hover:text-accent transition-colors group"
          >
            Join the team
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background-secondary">
        <div className="container-tight mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Ready to transform your healthcare data operations? We'd love to hear from you.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="gap-2">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
