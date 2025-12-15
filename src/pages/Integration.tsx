import { Layout } from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const integrations = [
  { name: 'Stripe', x: 48, y: 8, highlighted: false },
  { name: 'Fitbit', x: 68, y: 10, highlighted: false },
  { name: 'Hint', x: 58, y: 16, highlighted: true },
  { name: 'Cerbo', x: 72, y: 18, highlighted: true },
  { name: 'OURA', x: 85, y: 14, highlighted: false },
  { name: 'Azalea Health', x: 12, y: 18, highlighted: false },
  { name: 'AdvancedMD', x: 28, y: 16, highlighted: false },
  { name: 'Elation', x: 38, y: 22, highlighted: true },
  { name: 'Dexcom', x: 92, y: 22, highlighted: false },
  { name: 'Allscripts', x: 8, y: 28, highlighted: false },
  { name: 'Wahoo', x: 25, y: 26, highlighted: false },
  { name: 'AkuteHealth', x: 82, y: 28, highlighted: true },
  { name: 'NextGen', x: 94, y: 32, highlighted: false },
  { name: 'Netsmart', x: 18, y: 36, highlighted: false },
  { name: 'CharmHealth', x: 35, y: 34, highlighted: true },
  { name: 'Lemlist', x: 78, y: 36, highlighted: false },
  { name: 'Google Fit', x: 88, y: 38, highlighted: false },
  { name: 'DrChrono', x: 10, y: 42, highlighted: false },
  { name: 'Garmin', x: 22, y: 48, highlighted: false },
  { name: 'Spruce', x: 38, y: 46, highlighted: false },
  { name: 'TriNet', x: 94, y: 48, highlighted: false },
  { name: 'Quest', x: 14, y: 56, highlighted: false },
  { name: 'Epic', x: 30, y: 58, highlighted: false },
  { name: 'Practice Fusion', x: 42, y: 64, highlighted: true },
  { name: 'Google Console', x: 78, y: 52, highlighted: false },
  { name: 'Yuzu Health', x: 88, y: 56, highlighted: false },
  { name: 'OMRON', x: 14, y: 68, highlighted: false },
  { name: 'Cerner', x: 32, y: 72, highlighted: false },
  { name: 'eClinicalWorks', x: 52, y: 74, highlighted: false },
  { name: 'Google Analytics', x: 74, y: 64, highlighted: false },
  { name: 'Workday', x: 84, y: 66, highlighted: false },
  { name: 'ModMed', x: 94, y: 72, highlighted: false },
  { name: 'ManifestRx', x: 60, y: 78, highlighted: false },
  { name: 'AthenaHealth', x: 75, y: 76, highlighted: false },
  { name: 'QuickBooks', x: 86, y: 80, highlighted: false },
  { name: 'Paycom', x: 95, y: 84, highlighted: false },
];

const categories = [
  'Electronic Health Records',
  'Claims',
  'Wearables',
  'Communication',
  'Labs',
  'Continuous Glucose Monitoring',
  'Dental',
  'Billing',
  'Human Capital',
];

// SVG animated connection paths
const ConnectionLines = () => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      <defs>
        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Animated flowing lines from integrations to center */}
      {[
        "M 10% 30% Q 30% 40% 50% 50%",
        "M 20% 55% Q 35% 50% 50% 50%",
        "M 15% 70% Q 32% 60% 50% 50%",
        "M 90% 25% Q 70% 38% 50% 50%",
        "M 85% 45% Q 68% 48% 50% 50%",
        "M 92% 65% Q 72% 58% 50% 50%",
        "M 30% 15% Q 40% 32% 50% 50%",
        "M 70% 12% Q 60% 32% 50% 50%",
        "M 25% 80% Q 38% 65% 50% 50%",
        "M 80% 82% Q 65% 66% 50% 50%",
      ].map((path, i) => (
        <g key={i}>
          <path
            d={path}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="1"
            opacity="0.4"
          />
          <circle r="3" fill="hsl(var(--primary))" opacity="0.8" filter="url(#glow)">
            <animateMotion
              dur={`${3 + i * 0.3}s`}
              repeatCount="indefinite"
              path={path}
            />
          </circle>
        </g>
      ))}
    </svg>
  );
};

const Integration = () => {
  const [email, setEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Request submitted!",
        description: "We'll be in touch about building your integration.",
      });
      setEmail('');
    }
  };

  return (
    <Layout>
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#1a1a2e 1px, transparent 1px),
                           linear-gradient(90deg, #1a1a2e 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />

        <div className="container mx-auto px-4 relative">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Connect with your <span className="text-gradient">existing apps</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seamlessly integrate with 50+ healthcare and business applications
            </p>
          </div>

          {/* Integrations Title */}
          <div className="max-w-6xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-foreground">Integrations</h2>
          </div>

          {/* Integrations Cloud with Central Hub */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative h-[550px] md:h-[650px] bg-white/50 rounded-2xl border border-border/50 overflow-hidden">
              {/* Grid Pattern Background */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }}></div>
              </div>

              {/* Animated Connection Lines */}
              <ConnectionLines />

              {/* Central Insights Hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  {/* Pulsing glow */}
                  <div className="absolute inset-0 -m-6 bg-primary/20 rounded-2xl blur-xl animate-pulse"></div>
                  
                  <div className="relative bg-white border border-border rounded-xl shadow-elevated p-5 w-48 md:w-56">
                    {/* Window controls */}
                    <div className="flex items-center gap-1.5 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center">
                        <span className="text-xs">📊</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground leading-tight">Insights</h3>
                        <p className="text-[10px] text-primary font-medium">HealthCompiler</p>
                      </div>
                    </div>
                    
                    {/* Skeleton lines */}
                    <div className="space-y-2 mb-4">
                      <div className="h-2 bg-muted rounded-full w-full"></div>
                      <div className="h-2 bg-muted rounded-full w-3/4"></div>
                      <div className="h-2 bg-muted rounded-full w-1/2"></div>
                    </div>
                    
                    {/* Mini chart */}
                    <div className="flex items-end gap-1 h-12">
                      {[30, 50, 40, 70, 55, 45, 65].map((h, i) => (
                        <div 
                          key={i}
                          className="flex-1 bg-primary/40 rounded-t-sm transition-all duration-500"
                          style={{ 
                            height: `${h}%`,
                            animation: `pulse ${1.5 + i * 0.2}s ease-in-out infinite`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Integration Cards */}
              {integrations.map((integration, index) => (
                <div
                  key={integration.name}
                  className={`
                    absolute px-3 py-2 md:px-4 md:py-2.5 rounded-lg border text-xs md:text-sm font-medium
                    transition-all duration-300 cursor-pointer z-10 whitespace-nowrap
                    hover:scale-105 hover:z-30 hover:shadow-lg
                    ${integration.highlighted 
                      ? 'border-primary bg-primary/10 text-primary shadow-md' 
                      : 'border-border bg-white text-foreground hover:border-primary/50'
                    }
                  `}
                  style={{
                    left: `${integration.x}%`,
                    top: `${integration.y}%`,
                    transform: 'translate(-50%, -50%)',
                    animation: `float ${3 + (index % 4)}s ease-in-out infinite`,
                    animationDelay: `${index * 0.08}s`,
                  }}
                >
                  {integration.name}
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                    ${activeCategory === category 
                      ? 'bg-foreground text-background border-foreground' 
                      : 'bg-white border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Request Form */}
          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg text-foreground mb-8">
              If your app is missing, we can help quickly build an integration
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 text-base bg-white border-border rounded-lg"
                required
              />
              <Button 
                type="submit" 
                size="lg" 
                className="w-full sm:w-auto h-14 px-16 text-base font-semibold rounded-lg"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-6px); }
        }
      `}</style>
    </Layout>
  );
};

export default Integration;
