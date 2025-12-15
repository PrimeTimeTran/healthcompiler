import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="section-padding bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-tight mx-auto relative z-10">
        <div className="bg-card rounded-3xl p-10 md:p-16 shadow-card border border-border/50 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Build Your <span className="text-gradient">Healthcare Data Platform</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Start a conversation about your data challenges and discover how we can help you achieve operational excellence.
          </p>
          <Button variant="gradient" size="xl" asChild>
            <Link to="/contact" className="gap-2">
              Schedule a Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
