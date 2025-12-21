import { useState } from 'react';
import { Clock, Puzzle, CalendarOff, AlertCircle } from 'lucide-react';

const challenges = [
  { 
    id: 'manual', 
    label: 'Manual surveys', 
    description: 'Surveys are sent manually—or not at all',
    color: 'from-orange-500/20 to-orange-600/30', 
    icon: Clock 
  },
  { 
    id: 'disconnected', 
    label: 'Disconnected tools', 
    description: 'Feedback lives across disconnected tools',
    color: 'from-purple-500/20 to-purple-600/30', 
    icon: Puzzle 
  },
  { 
    id: 'late', 
    label: 'Late requests', 
    description: 'Reviews are requested too late, when sentiment has faded',
    color: 'from-red-500/20 to-red-600/30', 
    icon: CalendarOff 
  },
  { 
    id: 'result', 
    label: 'Missed signals', 
    description: 'The result: missed signals and delayed action',
    color: 'from-cyan-500/20 to-cyan-600/30', 
    icon: AlertCircle 
  },
];

export function WhyFeedbackMissed() {
  const [activeChallenge, setActiveChallenge] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Feedback Often Gets Missed</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Teams care deeply about experience. What's hard is collecting feedback consistently, at the right moment, and without adding work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative" style={{ perspective: '1000px' }}>
            {challenges.map((challenge, index) => {
              const isActive = activeChallenge === challenge.id;
              return (
                <div
                  key={challenge.id}
                  className={`relative rounded-2xl p-6 mb-4 cursor-pointer transition-all duration-500 border backdrop-blur-sm ${
                    isActive ? 'scale-105 shadow-2xl z-10' : 'hover:scale-102'
                  }`}
                  style={{
                    transform: `rotateX(-8deg) translateZ(${index * 20}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                  onMouseEnter={() => setActiveChallenge(challenge.id)}
                  onMouseLeave={() => setActiveChallenge(null)}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${challenge.color} ${
                    isActive ? 'opacity-100' : 'opacity-60'
                  } transition-opacity`} />
                  <div className="relative flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-primary/20' : 'bg-muted/50'
                    } transition-colors`}>
                      <challenge.icon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <span className={`font-semibold ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {challenge.description}
                    </span>
                  </div>
                  {isActive && (
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
