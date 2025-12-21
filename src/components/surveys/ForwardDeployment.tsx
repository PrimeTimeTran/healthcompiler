import { Wrench, GitBranch, Route, FileBarChart } from 'lucide-react';

const customizations = [
  { icon: GitBranch, label: 'Survey triggers', description: 'When surveys are sent' },
  { icon: Route, label: 'Logic & routing', description: 'How responses flow' },
  { icon: FileBarChart, label: 'Reporting', description: 'How insights surface' },
  { icon: Wrench, label: 'Workflows', description: 'How teams take action' },
];

export function ForwardDeployment() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Customized Through Forward Deployment Engineering
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every organization works differently. Through Forward Deployment Engineering, we tailor survey triggers, logic, routing, and reporting to match your real workflows—without forcing rigid templates or one-size-fits-all forms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {customizations.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-2xl bg-card border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              This isn't just survey software.
            </p>
            <p className="text-xl font-semibold text-foreground mt-2">
              It's feedback infrastructure, built around how you operate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
