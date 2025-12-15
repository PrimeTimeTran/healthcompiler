import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Target, Layers } from 'lucide-react';
import { HeroVisualization } from './HeroVisualization';

const trustSignals = [
  { icon: Shield, label: 'HIPAA-Aligned' },
  { icon: Lock, label: 'Secure by Design' },
  { icon: Target, label: 'US Healthcare Focus' },
  { icon: Layers, label: 'Scalable Architecture' },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background-secondary min-h-[calc(100vh-80px)]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 md:py-16 relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left">
            {/* Main headline */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 animate-fade-in">
              Intelligent Data & Workflow{' '}
              <span className="text-gradient">Activation Layer</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Unifying healthcare data, AI automation, and operational workflows that drive lower costs, better care, and higher performance across self-funded employers, direct care, and value-based organizations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/capabilities">View Capabilities</Link>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="grid grid-cols-2 gap-3">
                {trustSignals.map((signal, index) => (
                  <div
                    key={signal.label}
                    className="flex items-center gap-2 text-muted-foreground"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <signal.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{signal.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Visualization */}
          <div className="animate-fade-in lg:pl-4">
            <HeroVisualization />
          </div>
        </div>
      </div>
    </section>
  );
};
