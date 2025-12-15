import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Zap, Shield, RefreshCw } from "lucide-react";

const integrations = [
  { name: 'Hint Health', color: 'from-blue-500 to-cyan-400' },
  { name: 'Elation', color: 'from-emerald-500 to-teal-400' },
  { name: 'Cerbo', color: 'from-violet-500 to-purple-400' },
  { name: 'Epic', color: 'from-orange-500 to-amber-400' },
  { name: 'Stripe', color: 'from-indigo-500 to-blue-400' },
  { name: 'Fitbit', color: 'from-pink-500 to-rose-400' },
  { name: 'OURA', color: 'from-slate-600 to-slate-400' },
  { name: 'Dexcom', color: 'from-green-500 to-emerald-400' },
  { name: 'Garmin', color: 'from-sky-500 to-blue-400' },
  { name: 'Cerner', color: 'from-red-500 to-orange-400' },
  { name: 'AthenaHealth', color: 'from-purple-500 to-pink-400' },
  { name: 'DrChrono', color: 'from-teal-500 to-cyan-400' },
];

const categories = [
  'All',
  'EHR Systems',
  'Wearables',
  'Billing',
  'Labs',
  'Communication',
];

const Integration = () => {
  const [email, setEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

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
      {/* Hero Section */}
      <section className="relative min-h-screen bg-slate-950 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container relative z-10 pt-32 pb-24">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-white/70">50+ Active Integrations</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
              Connect Everything
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
              Seamlessly integrate with the healthcare tools you already use
            </p>
          </div>

          {/* Central Hub with Orbital Icons */}
          <div className="relative max-w-4xl mx-auto h-[500px] flex items-center justify-center">
            {/* Center hub */}
            <div className="relative z-20">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-primary via-primary/80 to-violet-600 p-[2px] shadow-2xl shadow-primary/40">
                <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">HC</div>
                    <div className="text-xs text-white/50 mt-1">Hub</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbital rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-white/5" />
              <div className="absolute w-[450px] h-[450px] md:w-[550px] md:h-[550px] rounded-full border border-white/5" />
            </div>

            {/* Floating integration cards */}
            {integrations.map((integration, index) => {
              const angle = (index * 30) - 60;
              const radius = index % 2 === 0 ? 180 : 240;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div
                  key={integration.name}
                  className="absolute group cursor-pointer"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                    animation: `orbit ${20 + index * 2}s linear infinite`,
                  }}
                >
                  <div className="relative">
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${integration.color} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300`} />
                    
                    {/* Card */}
                    <div className="relative px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${integration.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                          {integration.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-white/90 whitespace-nowrap">
                          {integration.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connection lines animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
                style={{
                  left: `${20 + i * 12}%`,
                  top: '20%',
                  height: '60%',
                  animation: `pulse ${2 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                  opacity: 0.3
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === category 
                    ? 'bg-foreground text-background shadow-lg' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Instant Sync",
                description: "Real-time data synchronization across all connected platforms"
              },
              {
                icon: Shield,
                title: "HIPAA Compliant",
                description: "Enterprise-grade security for all your healthcare data"
              },
              {
                icon: RefreshCw,
                title: "Auto Updates",
                description: "Integrations stay current with automatic version updates"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-foreground/20 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Need a custom integration?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Tell us what you need and our team will build it for you
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 text-base bg-background border-border rounded-full px-6"
                required
              />
              <Button 
                type="submit" 
                size="lg" 
                className="h-14 px-8 rounded-full font-semibold gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(0px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(0deg) translateX(0px) rotate(0deg); }
        }
      `}</style>
    </Layout>
  );
};

export default Integration;