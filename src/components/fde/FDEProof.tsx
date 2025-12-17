import { ArrowRight } from "lucide-react";

const proofCards = [
  {
    before: "Manual reports",
    after: "Automated weekly exec scorecard",
    color: "from-red-500/10 to-green-500/10",
  },
  {
    before: "Disconnected tools",
    after: "Unified member + claims view",
    color: "from-orange-500/10 to-blue-500/10",
  },
  {
    before: "Reactive ops",
    after: "Proactive alerts + routing",
    color: "from-yellow-500/10 to-purple-500/10",
  },
];

export const FDEProof = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Proof of Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real transformations from our FDE engagements.
          </p>
        </div>

        {/* Proof cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {proofCards.map((card, index) => (
            <div
              key={card.before}
              className="group relative p-8 bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-500 overflow-hidden scroll-reveal"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative space-y-6">
                {/* Before */}
                <div className="space-y-2">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Before</span>
                  <p className="text-lg font-medium text-muted-foreground line-through decoration-red-400/50 decoration-2">
                    {card.before}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-border via-accent/50 to-border" />
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-border via-accent/50 to-border" />
                </div>

                {/* After */}
                <div className="space-y-2">
                  <span className="text-xs font-medium text-accent uppercase tracking-widest">After</span>
                  <p className="text-lg font-semibold text-foreground">
                    {card.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
