import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const integrations = [
  { name: 'stripe', label: 'Stripe' },
  { name: 'fitbit', label: 'Fitbit' },
  { name: 'hint', label: 'Hint', highlighted: true },
  { name: 'cerbo', label: 'Cerbo', highlighted: true },
  { name: 'oura', label: 'OURA' },
  { name: 'azalea', label: 'Azalea Health' },
  { name: 'advancedmd', label: 'AdvancedMD' },
  { name: 'elation', label: 'Elation', highlighted: true },
  { name: 'dexcom', label: 'Dexcom' },
  { name: 'allscripts', label: 'Allscripts' },
  { name: 'wahoo', label: 'Wahoo' },
  { name: 'akutehealth', label: 'AkuteHealth', highlighted: true },
  { name: 'nextgen', label: 'NextGen' },
  { name: 'netsmart', label: 'Netsmart' },
  { name: 'charmhealth', label: 'CharmHealth', highlighted: true },
  { name: 'lemlist', label: 'Lemlist' },
  { name: 'googlefit', label: 'Google Fit' },
  { name: 'drchrono', label: 'DrChrono' },
  { name: 'garmin', label: 'Garmin' },
  { name: 'spruce', label: 'Spruce' },
  { name: 'trinet', label: 'TriNet' },
  { name: 'quest', label: 'Quest Diagnostics' },
  { name: 'epic', label: 'Epic' },
  { name: 'practicefusion', label: 'Practice Fusion', highlighted: true },
  { name: 'googlesearchconsole', label: 'Google Search Console' },
  { name: 'yuzuhealth', label: 'Yuzu Health' },
  { name: 'omron', label: 'OMRON' },
  { name: 'cerner', label: 'Cerner' },
  { name: 'eclinicalworks', label: 'eClinicalWorks' },
  { name: 'googleanalytics', label: 'Google Analytics' },
  { name: 'workday', label: 'Workday' },
  { name: 'modmed', label: 'ModMed' },
  { name: 'manifestrx', label: 'ManifestRx' },
  { name: 'athenahealth', label: 'AthenaHealth' },
  { name: 'quickbooks', label: 'QuickBooks' },
  { name: 'paycom', label: 'Paycom' },
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Connect with your <span className="text-primary">existing apps</span>
            </h1>
          </div>

          {/* Integrations Cloud */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-12">Integrations</h2>
            
            <div className="relative min-h-[500px] md:min-h-[600px]">
              {/* Central Hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-card border border-border rounded-lg shadow-lg p-6 w-48 md:w-56">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Insights</h3>
                  <p className="text-xs text-muted-foreground mb-3">HealthCompiler</p>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded w-full"></div>
                    <div className="h-2 bg-muted rounded w-3/4"></div>
                    <div className="h-2 bg-muted rounded w-1/2"></div>
                  </div>
                  <div className="mt-4 flex items-end gap-1">
                    <div className="w-4 h-6 bg-primary/30 rounded-sm"></div>
                    <div className="w-4 h-10 bg-primary/50 rounded-sm"></div>
                    <div className="w-4 h-8 bg-primary/40 rounded-sm"></div>
                    <div className="w-4 h-12 bg-primary rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Floating Integration Cards */}
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
                {integrations.map((integration, index) => (
                  <div
                    key={integration.name}
                    className={`
                      flex items-center justify-center p-3 md:p-4 rounded-lg border text-xs md:text-sm font-medium
                      transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer
                      ${integration.highlighted 
                        ? 'border-primary/50 bg-primary/5 text-primary' 
                        : 'border-border bg-card text-foreground hover:border-primary/30'
                      }
                      ${index >= 16 && index < 24 ? 'opacity-0 md:opacity-100' : ''}
                    `}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {integration.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Request Form */}
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              If your app is missing, we can help quickly build an integration
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-center h-14 text-base"
                required
              />
              <Button type="submit" size="lg" className="w-full md:w-auto px-16">
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
