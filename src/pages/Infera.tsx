import { Layout } from '@/components/layout/Layout';
import { DAPFlowSection } from '@/components/platform/DAPFlowSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Healthcare-Native AI',
    description: 'Purpose-built machine learning models trained on healthcare data for accurate predictions and insights.',
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description: 'Process millions of data points in real-time to deliver instant actionable intelligence.',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Enterprise-grade security with full HIPAA compliance and SOC 2 Type II certification.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description: 'Models continuously improve based on outcomes, ensuring ever-increasing accuracy.',
  },
];

const Infera = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-background to-background-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              AI Engine
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet <span className="text-gradient">Infera</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Healthcare-native AI that powers intelligent automation, predictive analytics, and personalized patient experiences across your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/capabilities">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DAP Flow Section */}
      <DAPFlowSection />

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Infera?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built specifically for healthcare, Infera delivers intelligence that generic AI platforms simply cannot match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to unlock your data?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            See how Infera can transform your healthcare data into actionable intelligence.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Infera;
