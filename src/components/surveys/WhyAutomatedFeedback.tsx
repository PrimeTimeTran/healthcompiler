import { Clock, Lightbulb, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Timely feedback',
    result: 'faster response',
    color: '#f97316',
  },
  {
    icon: Lightbulb,
    title: 'Integrated feedback',
    result: 'better decisions',
    color: '#06b6d4',
  },
  {
    icon: TrendingUp,
    title: 'Automated feedback',
    result: 'continuous improvement at scale',
    color: '#22c55e',
  },
];

export function WhyAutomatedFeedback() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Automated Feedback Matters
          </h2>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center justify-center gap-4 p-6 rounded-2xl bg-card border hover:shadow-lg transition-all duration-300"
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${benefit.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: benefit.color }} />
                  </div>
                  <p className="text-lg md:text-xl">
                    <span className="font-semibold">{benefit.title}</span>
                    <span className="text-muted-foreground"> enables </span>
                    <span className="font-semibold" style={{ color: benefit.color }}>{benefit.result}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
