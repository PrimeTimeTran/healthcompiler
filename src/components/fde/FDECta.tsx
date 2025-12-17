import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FDECta = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-secondary/50 via-background to-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative element */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Ready to transform your workflows?</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
            Bring us your messiest workflow.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            We'll turn it into a live deployment with measurable outcomes.
          </p>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[hsl(340,75%,60%)] to-[hsl(28,90%,60%)] hover:from-[hsl(340,75%,55%)] hover:to-[hsl(28,90%,55%)] text-white font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            Start a conversation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust line */}
          <p className="mt-8 text-sm text-muted-foreground">
            No commitment required. 20-minute scoping call.
          </p>
        </div>
      </div>
    </section>
  );
};
