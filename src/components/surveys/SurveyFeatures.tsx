import { Star, ThumbsUp, MessageSquare, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'NPS Surveys',
    description: 'Measure loyalty over time, spot trends early, and understand what is driving satisfaction across your population.',
    color: '#f97316',
  },
  {
    icon: ThumbsUp,
    title: 'CSAT Surveys',
    description: 'Capture satisfaction immediately after interactions to improve service quality while context is still fresh.',
    color: '#06b6d4',
  },
  {
    icon: MessageSquare,
    title: 'Google Review Automation',
    description: 'Automatically request reviews from satisfied users and strengthen your online presence without manual follow-up.',
    color: '#8b5cf6',
  },
  {
    icon: Smartphone,
    title: 'Multi-Channel Delivery',
    description: 'Send surveys via SMS, email, or embedded workflows—based on how your users actually engage.',
    color: '#22c55e',
  },
];

export function SurveyFeatures() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Feedback That Fits Into Everyday Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collect the right feedback at the right moment, through the channels your users prefer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group p-8 rounded-2xl bg-card border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient background on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{ backgroundColor: feature.color }}
                />
                
                <div className="relative">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: feature.color }} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
                
                {/* Decorative corner */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at top right, ${feature.color}, transparent)`,
                    borderTopRightRadius: '1rem',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
