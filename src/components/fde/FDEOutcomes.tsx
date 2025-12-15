import { Clock, Settings, TrendingUp } from "lucide-react";

const outcomes = [
  {
    icon: Clock,
    title: "Faster Time-to-Value",
    description: "Ship production outcomes in weeks, not quarters",
  },
  {
    icon: Settings,
    title: "Lower Ops Load",
    description: "Reduce manual processes with automated workflows",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description: "Track metrics that move from day one",
  },
];

export const FDEOutcomes = () => {
  return (
    <section className="py-16 bg-secondary/30 border-y border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.title}
              className="group flex items-center gap-5 p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <outcome.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">{outcome.title}</h3>
                <p className="text-sm text-muted-foreground">{outcome.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
