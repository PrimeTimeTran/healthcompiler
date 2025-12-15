import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Target, Layers } from 'lucide-react';

const trustSignals = [
  { icon: Shield, label: 'HIPAA-Aligned' },
  { icon: Lock, label: 'Secure by Design' },
  { icon: Target, label: 'US Healthcare Focus' },
  { icon: Layers, label: 'Scalable Architecture' },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background-secondary">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-tight mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Intelligent Data & Workflow{' '}
            <span className="text-gradient">Activation Layer</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Unifying healthcare data, AI automation, and operational workflows that drive lower costs, better care, and higher performance across self-funded employers, direct care, and value-based organizations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/capabilities">View Capabilities</Link>
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {trustSignals.map((signal, index) => (
                <div
                  key={signal.label}
                  className="flex items-center gap-2 text-muted-foreground"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <signal.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{signal.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
