import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const integrations = [
  { name: 'Stripe', x: 45, y: 5, highlighted: false },
  { name: 'Fitbit', x: 65, y: 8, highlighted: false },
  { name: 'Hint', x: 55, y: 15, highlighted: true },
  { name: 'Cerbo', x: 70, y: 18, highlighted: true },
  { name: 'OURA', x: 85, y: 12, highlighted: false },
  { name: 'Azalea Health', x: 8, y: 18, highlighted: false },
  { name: 'AdvancedMD', x: 25, y: 15, highlighted: false },
  { name: 'Elation', x: 35, y: 22, highlighted: true },
  { name: 'Dexcom', x: 88, y: 25, highlighted: false },
  { name: 'Allscripts', x: 5, y: 28, highlighted: false },
  { name: 'Wahoo', x: 22, y: 28, highlighted: false },
  { name: 'AkuteHealth', x: 78, y: 28, highlighted: true },
  { name: 'NextGen', x: 92, y: 32, highlighted: false },
  { name: 'Netsmart', x: 18, y: 38, highlighted: false },
  { name: 'CharmHealth', x: 32, y: 35, highlighted: true },
  { name: 'Lemlist', x: 75, y: 38, highlighted: false },
  { name: 'Google Fit', x: 85, y: 42, highlighted: false },
  { name: 'DrChrono', x: 8, y: 42, highlighted: false },
  { name: 'Garmin', x: 20, y: 50, highlighted: false },
  { name: 'Spruce', x: 35, y: 48, highlighted: false },
  { name: 'TriNet', x: 92, y: 50, highlighted: false },
  { name: 'Quest', x: 12, y: 58, highlighted: false },
  { name: 'Epic', x: 28, y: 62, highlighted: false },
  { name: 'Practice Fusion', x: 38, y: 68, highlighted: true },
  { name: 'Google Console', x: 75, y: 55, highlighted: false },
  { name: 'Yuzu Health', x: 85, y: 60, highlighted: false },
  { name: 'OMRON', x: 10, y: 72, highlighted: false },
  { name: 'Cerner', x: 28, y: 75, highlighted: false },
  { name: 'eClinicalWorks', x: 48, y: 78, highlighted: false },
  { name: 'Analytics', x: 70, y: 70, highlighted: false },
  { name: 'Workday', x: 80, y: 68, highlighted: false },
  { name: 'ModMed', x: 90, y: 75, highlighted: false },
  { name: 'ManifestRx', x: 55, y: 82, highlighted: false },
  { name: 'AthenaHealth', x: 72, y: 80, highlighted: false },
  { name: 'QuickBooks', x: 82, y: 85, highlighted: false },
  { name: 'Paycom', x: 92, y: 82, highlighted: false },
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
      <section className="py-20 md:py-28 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Connect with your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">existing apps</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seamlessly integrate with 50+ healthcare and business applications
            </p>
          </div>

          {/* Integrations Cloud */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
              <h2 className="text-xl font-semibold text-foreground">Integrations</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
            </div>
            
            <div className="relative h-[600px] md:h-[700px] bg-gradient-to-br from-secondary/30 via-transparent to-primary/5 rounded-3xl border border-border/50 overflow-hidden">
              {/* Grid Pattern Background */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              {/* Glow Effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

              {/* Central Hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 -m-4 border-2 border-primary/20 rounded-2xl animate-pulse"></div>
                  <div className="absolute inset-0 -m-8 border border-primary/10 rounded-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  
                  <div className="bg-card/95 backdrop-blur-xl border border-border/80 rounded-2xl shadow-2xl p-6 w-52 md:w-64 relative">
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full border-4 border-background animate-pulse"></div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">Insights</h3>
                    <p className="text-xs text-primary font-medium mb-4">HealthCompiler</p>
                    <div className="space-y-2 mb-4">
                      <div className="h-2 bg-gradient-to-r from-muted to-muted/50 rounded-full w-full"></div>
                      <div className="h-2 bg-gradient-to-r from-muted to-muted/50 rounded-full w-3/4"></div>
                      <div className="h-2 bg-gradient-to-r from-muted to-muted/50 rounded-full w-1/2"></div>
                    </div>
                    <div className="flex items-end gap-1 h-16">
                      <div className="w-6 h-6 bg-primary/30 rounded-t-sm animate-pulse"></div>
                      <div className="w-6 h-10 bg-primary/50 rounded-t-sm animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-6 h-8 bg-primary/40 rounded-t-sm animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      <div className="w-6 h-14 bg-gradient-to-t from-primary to-primary/70 rounded-t-sm animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                      <div className="w-6 h-12 bg-accent/60 rounded-t-sm animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Integration Cards */}
              {integrations.map((integration, index) => (
                <div
                  key={integration.name}
                  className={`
                    absolute px-3 py-2 md:px-4 md:py-2.5 rounded-xl border text-xs md:text-sm font-medium
                    transition-all duration-500 cursor-pointer z-10
                    hover:scale-110 hover:z-30 hover:shadow-xl
                    ${integration.highlighted 
                      ? 'border-primary bg-primary/10 text-primary shadow-lg shadow-primary/20 hover:bg-primary/20' 
                      : 'border-border/60 bg-card/80 backdrop-blur-sm text-foreground hover:border-primary/50 hover:bg-card'
                    }
                  `}
                  style={{
                    left: `${integration.x}%`,
                    top: `${integration.y}%`,
                    transform: 'translate(-50%, -50%)',
                    animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {integration.name}
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-20">
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

          {/* Request Form */}
          <div className="max-w-xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-10">
              <p className="text-xl text-center text-foreground font-medium mb-2">
                Missing your app?
              </p>
              <p className="text-center text-muted-foreground mb-8">
                We can help quickly build an integration for you
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-base bg-background/50 border-border/50 focus:border-primary/50 rounded-xl"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-base font-semibold rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-8px); }
        }
      `}</style>
    </Layout>
  );
};

export default Integration;
