import { useState, useEffect } from 'react';

const orbitingNodes = [
  { id: 'analytics', label: 'Employer Analytics', color: 'from-blue-400 to-blue-600', angle: 0 },
  { id: 'outcomes', label: 'Health Outcomes', color: 'from-emerald-400 to-emerald-600', angle: 45 },
  { id: 'receptionist', label: 'AI Receptionist', color: 'from-violet-400 to-violet-600', angle: 90 },
  { id: 'triaging', label: 'AI Call Triaging', color: 'from-amber-400 to-amber-600', angle: 135 },
  { id: 'marketing', label: 'Marketing Automation', color: 'from-rose-400 to-rose-600', angle: 180 },
  { id: 'engagement', label: 'Patient Engagement', color: 'from-cyan-400 to-cyan-600', angle: 225 },
  { id: 'hcc', label: 'HCC Suspecting', color: 'from-orange-400 to-orange-600', angle: 270 },
  { id: 'hedis', label: 'HEDIS & MIPS', color: 'from-pink-400 to-pink-600', angle: 315 },
];

export const HeroVisualization = () => {
  const [activeNode, setActiveNode] = useState<string | null>('receptionist');
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.3) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      const nodeIds = orbitingNodes.map(n => n.id);
      setActiveNode(prev => {
        const currentIndex = nodeIds.indexOf(prev || '');
        return nodeIds[(currentIndex + 1) % nodeIds.length];
      });
    }, 3000);
    return () => clearInterval(cycleInterval);
  }, []);

  const getNodeDetails = (id: string) => {
    switch(id) {
      case 'analytics':
        return { title: 'Employer Analytics', subtitle: 'DATA & INSIGHTS', features: ['Cost analysis', 'Utilization trends', 'ROI tracking'] };
      case 'outcomes':
        return { title: 'Health Outcomes', subtitle: 'QUALITY METRICS', features: ['Care gaps', 'Risk scores', 'Population health'] };
      case 'receptionist':
        return { title: 'AI Receptionist', subtitle: 'FRONT DESK & SCHEDULING', features: ['Appointment scheduling', 'Patient check-in', 'Front desk support'] };
      case 'triaging':
        return { title: 'AI Call Triaging', subtitle: 'PATIENT ROUTING', features: ['Symptom assessment', 'Priority routing', 'Care navigation'] };
      case 'marketing':
        return { title: 'Marketing Automation', subtitle: 'PATIENT OUTREACH', features: ['Campaign management', 'Lead nurturing', 'Multi-channel'] };
      case 'engagement':
        return { title: 'Patient Engagement', subtitle: 'COMMUNICATION', features: ['Reminders', 'Follow-ups', 'Feedback loops'] };
      case 'hcc':
        return { title: 'HCC Suspecting', subtitle: 'RISK ADJUSTMENT', features: ['Code optimization', 'Documentation', 'RAF scoring'] };
      case 'hedis':
        return { title: 'HEDIS & MIPS', subtitle: 'COMPLIANCE', features: ['Quality measures', 'Reporting', 'Gap closure'] };
      default:
        return { title: '', subtitle: '', features: [] };
    }
  };

  const activeDetails = activeNode ? getNodeDetails(activeNode) : null;

  return (
    <div className="w-full max-w-5xl mx-auto h-[320px] md:h-[380px] relative mb-6">
      {/* Central hub card */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="bg-card border border-border/50 rounded-2xl shadow-elevated p-5 w-[240px] md:w-[280px] transition-all duration-500">
          {activeDetails && (
            <>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${orbitingNodes.find(n => n.id === activeNode)?.color} flex items-center justify-center shadow-lg`}>
                  <div className="w-5 h-5 bg-white/30 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{activeDetails.title}</h4>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{activeDetails.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-1.5 mb-4">
                {activeDetails.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-foreground text-background text-xs font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Explore {activeDetails.title}
                <span className="text-accent">✦</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Orbital ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
        <div className="absolute inset-0 rounded-full border border-border/30" />
        <div className="absolute inset-8 rounded-full border border-border/20" />
      </div>

      {/* Orbiting nodes */}
      {orbitingNodes.map((node) => {
        const adjustedAngle = node.angle + rotation;
        const radius = 220;
        const x = Math.cos((adjustedAngle * Math.PI) / 180) * radius;
        const y = Math.sin((adjustedAngle * Math.PI) / 180) * radius * 0.5;
        const isActive = activeNode === node.id;
        const zIndex = y > 0 ? 10 : 30;

        return (
          <div
            key={node.id}
            className="absolute left-1/2 top-1/2 transition-all duration-300 cursor-pointer"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              zIndex,
            }}
            onMouseEnter={() => setActiveNode(node.id)}
          >
            <div className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
              isActive 
                ? 'bg-card shadow-elevated border border-border scale-110' 
                : 'bg-card/80 shadow-soft border border-border/50 hover:bg-card hover:shadow-card'
            }`}>
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${node.color} flex items-center justify-center shadow-md`}>
                <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse-slow" />
              </div>
              <span className={`text-xs font-medium whitespace-nowrap transition-colors ${
                isActive ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                {node.label}
              </span>
            </div>
          </div>
        );
      })}

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-accent/20 animate-float"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + (i % 4) * 18}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4 + i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};