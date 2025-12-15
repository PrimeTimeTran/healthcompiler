import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const integrations = [
  { name: 'Stripe', size: 'sm' },
  { name: 'Fitbit', size: 'md' },
  { name: 'Hint', size: 'lg', highlighted: true },
  { name: 'Cerbo', size: 'lg', highlighted: true },
  { name: 'OURA', size: 'sm' },
  { name: 'Azalea Health', size: 'md' },
  { name: 'AdvancedMD', size: 'sm' },
  { name: 'Elation', size: 'lg', highlighted: true },
  { name: 'Dexcom', size: 'sm' },
  { name: 'Allscripts', size: 'md' },
  { name: 'Wahoo', size: 'sm' },
  { name: 'AkuteHealth', size: 'lg', highlighted: true },
  { name: 'NextGen', size: 'sm' },
  { name: 'Netsmart', size: 'md' },
  { name: 'CharmHealth', size: 'lg', highlighted: true },
  { name: 'Lemlist', size: 'sm' },
  { name: 'Google Fit', size: 'md' },
  { name: 'DrChrono', size: 'sm' },
  { name: 'Garmin', size: 'md' },
  { name: 'Spruce', size: 'sm' },
  { name: 'Epic', size: 'lg', highlighted: true },
  { name: 'Quest', size: 'md' },
  { name: 'Practice Fusion', size: 'sm' },
  { name: 'Cerner', size: 'md' },
  { name: 'AthenaHealth', size: 'sm' },
  { name: 'QuickBooks', size: 'md' },
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

// Generate curved path positions for icons
const generateCurvedPositions = (count: number) => {
  const positions: { x: number; y: number }[] = [];
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    // Create a curved wave path from left to right
    const x = 5 + t * 90;
    const baseY = 50;
    const wave = Math.sin(t * Math.PI * 1.5) * 25;
    const y = baseY + wave + (Math.random() - 0.5) * 15;
    positions.push({ x, y });
  }
  return positions;
};

const positions = generateCurvedPositions(integrations.length);

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
      {/* Hero Section with Gradient */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Beautiful gradient background like reference */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsl(205, 85%, 65%) 0%, hsl(240, 70%, 75%) 30%, hsl(280, 55%, 80%) 50%, hsl(30, 85%, 85%) 75%, hsl(35, 90%, 90%) 100%)"
          }}
        />
        
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
        
        {/* Flowing connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="20%" stopColor="white" stopOpacity="0.4" />
              <stop offset="50%" stopColor="white" stopOpacity="0.6" />
              <stop offset="80%" stopColor="white" stopOpacity="0.4" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 55% Q 25% 45%, 50% 55% T 100% 45%"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
          />
          <path
            d="M 0 60% Q 25% 50%, 50% 60% T 100% 50%"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1"
          />
          <path
            d="M 0 65% Q 25% 55%, 50% 65% T 100% 55%"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="0.5"
          />
        </svg>

        <div className="container relative z-10 pt-28 pb-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg tracking-tight">
              Integrations
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-lg mx-auto leading-relaxed">
              Connect to your favorite tools and upgrade your HealthCompiler experience.
            </p>
          </div>

          {/* Floating Integration Icons in Curved Wave Pattern */}
          <div className="relative h-[420px] max-w-6xl mx-auto mt-8">
            {integrations.map((integration, index) => {
              const pos = positions[index];
              const sizeConfig = {
                sm: { size: 'w-11 h-11 md:w-14 md:h-14', text: 'text-xs md:text-sm' },
                md: { size: 'w-14 h-14 md:w-16 md:h-16', text: 'text-sm md:text-base' },
                lg: { size: 'w-18 h-18 md:w-20 md:h-20', text: 'text-base md:text-lg' }
              };
              const config = sizeConfig[integration.size as keyof typeof sizeConfig];
              
              return (
                <div
                  key={integration.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    animation: `floatSmooth ${4 + (index % 3)}s ease-in-out infinite`,
                    animationDelay: `${index * 0.15}s`
                  }}
                >
                  <div 
                    className={`
                      ${config.size} rounded-full flex items-center justify-center font-semibold
                      transition-all duration-300 cursor-pointer
                      ${integration.highlighted 
                        ? 'bg-gradient-to-br from-orange-100 via-orange-50 to-white text-orange-600 shadow-xl shadow-orange-200/60 ring-2 ring-white/80' 
                        : 'bg-white/95 text-slate-600 shadow-lg shadow-black/10 ring-1 ring-white/50'
                      }
                      hover:scale-110 hover:shadow-2xl hover:z-20
                      backdrop-blur-sm
                    `}
                  >
                    <span className={`${config.text} font-bold`}>
                      {integration.name.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Hover tooltip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-30">
                    <span className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-slate-700 shadow-lg whitespace-nowrap border border-white/50">
                      {integration.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-background border-b border-border/50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                className={`
                  px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === category 
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' 
                    : 'bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground hover:shadow-md'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Seamless Connectivity
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform integrates with the tools you already use, making your workflow smoother than ever.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "EHR Systems",
                description: "Connect with leading electronic health record systems for seamless data flow.",
                icon: "🏥"
              },
              {
                title: "Billing Platforms",
                description: "Integrate with billing and payment systems to streamline revenue cycles.",
                icon: "💳"
              },
              {
                title: "Communication Tools",
                description: "Sync with your team's communication platforms for better collaboration.",
                icon: "💬"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-display font-bold text-center text-foreground mb-2">
                Missing your app?
              </h3>
              <p className="text-center text-muted-foreground mb-8">
                We can help quickly build an integration for you
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-base bg-background border-border focus:border-primary rounded-xl"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-base font-semibold rounded-xl"
                >
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes floatSmooth {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-12px); }
        }
      `}</style>
    </Layout>
  );
};

export default Integration;