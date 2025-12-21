import { Link2, BarChart3, Users, MessageCircle, Settings } from 'lucide-react';

const integrations = [
  { icon: BarChart3, label: 'Analytics', color: '#f97316' },
  { icon: Users, label: 'CRM', color: '#06b6d4' },
  { icon: MessageCircle, label: 'Communication', color: '#8b5cf6' },
  { icon: Settings, label: 'Operations', color: '#22c55e' },
];

export function IntegratedTools() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="relative bg-gradient-to-br from-card to-muted/30 rounded-2xl p-8 border shadow-xl">
                {/* Central hub */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Link2 className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl animate-pulse" />
                  </div>
                </div>
                
                {/* Connected tools */}
                <div className="grid grid-cols-2 gap-4">
                  {integrations.map((integration, index) => {
                    const Icon = integration.icon;
                    return (
                      <div 
                        key={index}
                        className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border"
                      >
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${integration.color}15` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: integration.color }} />
                        </div>
                        <span className="font-medium text-sm">{integration.label}</span>
                      </div>
                    );
                  })}
                </div>
                
                {/* Decorative */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fully Integrated With Your Favorite Tools
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Feedback shouldn't live in a silo.
              </p>
              
              <p className="text-muted-foreground">
                Health Compiler integrates survey responses directly into your analytics, CRM, communication, and operational systems—so teams can follow up, respond, and improve in real time.
              </p>
              
              <div className="flex flex-wrap gap-3 text-sm text-foreground font-medium">
                <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary">No copying</span>
                <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent">No chasing</span>
                <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground">No context switching</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
