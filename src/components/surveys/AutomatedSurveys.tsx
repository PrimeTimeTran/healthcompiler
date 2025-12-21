import { Zap, CheckCircle, Clock, Target } from 'lucide-react';

export function AutomatedSurveys() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                Event-Driven Automation
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Automated Surveys, Triggered by Real Events
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Health Compiler automates feedback collection based on what actually happens—visits, milestones, resolutions—not generic schedules.
              </p>
              
              <p className="text-muted-foreground">
                Surveys are sent when engagement is highest, and responses flow directly into your systems, not into a forgotten inbox.
              </p>
              
              <p className="text-foreground font-medium">
                This makes feedback timely, actionable, and easy to act on.
              </p>
            </div>
            
            {/* Right - Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-card to-muted/30 rounded-2xl p-8 border shadow-xl">
                {/* Event flow visualization */}
                <div className="space-y-6">
                  {[
                    { icon: CheckCircle, label: 'Visit Complete', color: '#22c55e' },
                    { icon: Target, label: 'Milestone Reached', color: '#f97316' },
                    { icon: Clock, label: 'Issue Resolved', color: '#8b5cf6' },
                  ].map((event, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${event.color}15` }}
                      >
                        <event.icon className="w-6 h-6" style={{ color: event.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-gradient-to-r from-muted to-transparent rounded-full">
                          <div 
                            className="h-2 rounded-full animate-pulse"
                            style={{ 
                              width: '70%', 
                              backgroundColor: event.color,
                              animationDelay: `${index * 0.3}s`
                            }}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{event.label}</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
