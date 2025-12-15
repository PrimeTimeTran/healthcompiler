import { useState, useEffect, useRef } from "react";
import { Search, Link, Zap, Cog } from "lucide-react";

const steps = [
  {
    id: "discover",
    title: "Discover",
    description: "Audit your data landscape and map critical workflows to identify high-impact opportunities.",
    icon: Search,
  },
  {
    id: "integrate",
    title: "Integrate",
    description: "Connect disparate systems into a unified data layer with clean, reliable pipelines.",
    icon: Link,
  },
  {
    id: "activate",
    title: "Activate",
    description: "Deploy AI-driven automation and real-time insights that drive immediate action.",
    icon: Zap,
  },
  {
    id: "operationalize",
    title: "Operationalize",
    description: "Embed solutions into daily workflows with training, monitoring, and continuous optimization.",
    icon: Cog,
  },
];

export const FDELoop = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate progress through section
      const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
      const stepIndex = Math.min(3, Math.floor(progress * 4));
      
      setActiveStep(stepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            The FDE Loop
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology for turning complex healthcare data into operational outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Loop Diagram */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer ring */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <circle
                  cx="200"
                  cy="200"
                  r="160"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />
                {/* Progress arc */}
                <circle
                  cx="200"
                  cy="200"
                  r="160"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${(activeStep + 1) * 251.33} 1005.31`}
                  transform="rotate(-90 200 200)"
                  className="transition-all duration-700 ease-out"
                />
              </svg>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 border border-accent/30 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-lg font-semibold text-accent">FDE</span>
                </div>
              </div>

              {/* Step nodes */}
              {steps.map((step, index) => {
                const angle = (index * 90 - 90) * (Math.PI / 180);
                const x = 200 + 160 * Math.cos(angle);
                const y = 200 + 160 * Math.sin(angle);
                const Icon = step.icon;
                
                return (
                  <div
                    key={step.id}
                    className={`absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 cursor-pointer ${
                      activeStep === index ? "scale-110 z-10" : "opacity-70 hover:opacity-100"
                    }`}
                    style={{ left: `${(x / 400) * 100}%`, top: `${(y / 400) * 100}%` }}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`w-full h-full rounded-xl flex items-center justify-center transition-all duration-500 ${
                      activeStep === index 
                        ? "bg-accent text-white shadow-lg shadow-accent/40" 
                        : "bg-card border border-border text-muted-foreground hover:border-accent/50"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Label */}
                    <span className={`absolute whitespace-nowrap text-xs font-medium transition-all duration-300 ${
                      index === 0 ? "-top-6 left-1/2 -translate-x-1/2" :
                      index === 1 ? "top-1/2 -translate-y-1/2 left-[calc(100%+8px)]" :
                      index === 2 ? "-bottom-6 left-1/2 -translate-x-1/2" :
                      "top-1/2 -translate-y-1/2 right-[calc(100%+8px)]"
                    } ${activeStep === index ? "text-accent" : "text-muted-foreground"}`}>
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Step Details */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className={`flex gap-5 p-5 rounded-xl border transition-all duration-500 cursor-pointer ${
                    activeStep === index 
                      ? "bg-card border-accent/30 shadow-lg scale-[1.02]" 
                      : "bg-transparent border-transparent hover:bg-card/50"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    activeStep === index ? "bg-accent text-white" : "bg-muted text-muted-foreground"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                      activeStep === index ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm transition-all duration-300 ${
                      activeStep === index ? "text-muted-foreground opacity-100" : "text-muted-foreground/60 opacity-80"
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
