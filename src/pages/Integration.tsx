import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { IntegrationScene3D } from "@/components/integration/IntegrationScene3D";

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


          {/* 3D Integrations Cloud */}
          <div className="max-w-6xl mx-auto mb-16">
            <IntegrationScene3D />
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
                className="w-full sm:w-auto h-14 px-16 text-base font-semibold rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Integration;
