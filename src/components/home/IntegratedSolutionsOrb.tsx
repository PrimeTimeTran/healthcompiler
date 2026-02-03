import { useState } from 'react'
import { 
  Search, Activity, Building2, Users, Phone, MessageSquare, 
  Globe, Mic, ClipboardList, FileCheck, TrendingUp, Heart, Calculator,
  Pill, FlaskConical, Watch, MonitorSmartphone, Radio, CreditCard, 
  PhoneCall, Database, Network, Sparkles, Shield, Zap, BarChart3
} from 'lucide-react'
import { Link } from 'react-router-dom'

const solutions = [
  { label: 'SEO / GEO / AEO', icon: Search },
  { label: 'Patient Outcomes', icon: Activity },
  { label: 'Employer Analytics', icon: Building2 },
  { label: 'CRM', icon: Users },
  { label: 'AI Voice Agents', icon: Phone },
  { label: 'Membership', icon: MessageSquare },
  { label: 'Website Mgmt', icon: Globe },
  { label: 'Voice Triaging', icon: Mic },
  { label: 'Surveys', icon: ClipboardList },
  { label: 'HEDIS', icon: FileCheck },
  { label: 'MIPS', icon: TrendingUp },
  { label: 'HCC Suspecting', icon: Heart },
  { label: 'Capitation', icon: Calculator },
]

const integrations = [
  { label: 'Rx', icon: Pill },
  { label: 'Labs', icon: FlaskConical },
  { label: 'Wearables', icon: Watch },
  { label: 'EHRs', icon: MonitorSmartphone },
  { label: 'Communication', icon: Radio },
  { label: 'Billing', icon: CreditCard },
  { label: 'VoIP', icon: PhoneCall },
  { label: 'Registries', icon: Database },
  { label: 'HIEs', icon: Network },
]

export const IntegratedSolutionsOrb = () => {
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null)
  const [isOrbHovered, setIsOrbHovered] = useState(false)

  return (
    <section className="py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Subtle gradient halo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/8 via-accent/5 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - More compact */}
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            Integrated Platform
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
            One Platform. Every Workflow. Fully Connected.
          </h2>
        </div>

        {/* Compact Orb Schematic */}
        <div className="relative max-w-4xl mx-auto">
          {/* SVG Connection Lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 600 600"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="orbLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="orbCoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="50%" stopColor="hsl(var(--primary) / 0.9)" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
              <filter id="orbGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Animated orbit ring */}
            <circle
              cx="300"
              cy="300"
              r="250"
              fill="none"
              stroke="url(#orbLineGradient)"
              strokeWidth="1"
              strokeDasharray="4 8"
              opacity="0.3"
              className="animate-spin-slow"
              style={{ transformOrigin: '300px 300px' }}
            />

            {/* Inner decorative ring */}
            <circle
              cx="300"
              cy="300"
              r="160"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="1"
              strokeDasharray="2 6"
              opacity="0.2"
              className="animate-spin-reverse"
              style={{ transformOrigin: '300px 300px' }}
            />
            
            {/* Connection lines from solutions to center */}
            {solutions.map((_, index) => {
              const angle = (index * (360 / solutions.length) - 90) * (Math.PI / 180)
              const outerRadius = 250
              const innerRadius = 85
              const x1 = 300 + Math.cos(angle) * outerRadius
              const y1 = 300 + Math.sin(angle) * outerRadius
              const x2 = 300 + Math.cos(angle) * innerRadius
              const y2 = 300 + Math.sin(angle) * innerRadius
              
              const isActive = hoveredSolution === index
              
              return (
                <g key={`line-${index}`}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#orbLineGradient)"
                    strokeWidth={isActive ? 2 : 1}
                    strokeDasharray="3 3"
                    className="transition-all duration-300"
                    opacity={isActive ? 1 : 0.3}
                    filter={isActive ? 'url(#orbGlow)' : ''}
                  >
                    {isActive && (
                      <animate
                        attributeName="stroke-dashoffset"
                        values="6;0"
                        dur="0.5s"
                        repeatCount="indefinite"
                      />
                    )}
                  </line>
                  {/* Data flow particle */}
                  {isActive && (
                    <circle r="3" fill="hsl(var(--accent))">
                      <animateMotion
                        dur="0.8s"
                        repeatCount="indefinite"
                        path={`M${x1},${y1} L${x2},${y2}`}
                      />
                    </circle>
                  )}
                </g>
              )
            })}

            {/* Central orb layers */}
            {/* Outer glow */}
            <circle
              cx="300"
              cy="300"
              r={isOrbHovered ? 95 : 90}
              fill="url(#orbCoreGradient)"
              opacity="0.15"
              filter="url(#softGlow)"
              className="transition-all duration-500"
            >
              <animate attributeName="r" values="90;95;90" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Middle ring */}
            <circle
              cx="300"
              cy="300"
              r="80"
              fill="none"
              stroke="url(#orbCoreGradient)"
              strokeWidth="2"
              opacity="0.4"
              filter="url(#orbGlow)"
            >
              <animate attributeName="r" values="80;85;80" dur="2.5s" repeatCount="indefinite" />
            </circle>

            {/* Core orb */}
            <circle
              cx="300"
              cy="300"
              r="70"
              fill="url(#orbCoreGradient)"
              filter="url(#orbGlow)"
              className="transition-all duration-300"
            />

            {/* Inner highlight */}
            <circle
              cx="285"
              cy="285"
              r="25"
              fill="hsl(var(--primary-foreground))"
              opacity="0.1"
            />

            {/* Pulse rings */}
            <circle
              cx="300"
              cy="300"
              r="70"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              opacity="0"
            >
              <animate attributeName="r" values="70;120" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle
              cx="300"
              cy="300"
              r="70"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              opacity="0"
            >
              <animate attributeName="r" values="70;120" dur="2s" begin="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* Central Orb Content */}
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            {/* Orb text content - centered */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center cursor-pointer"
              onMouseEnter={() => setIsOrbHovered(true)}
              onMouseLeave={() => setIsOrbHovered(false)}
            >
              <div className={`transition-transform duration-300 ${isOrbHovered ? 'scale-105' : ''}`}>
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Sparkles className="w-3 h-3 text-primary-foreground" />
                  <span className="text-[10px] text-primary-foreground/80 uppercase tracking-wider font-medium">
                    Powered by
                  </span>
                </div>
                <h3 className="text-sm lg:text-base font-bold text-primary-foreground">
                  Health Compiler
                </h3>
                <div className="flex items-center justify-center gap-1 mt-1.5 text-[9px] text-primary-foreground/70">
                  <Zap className="w-2.5 h-2.5" />
                  <span>Data</span>
                  <span className="opacity-50">•</span>
                  <BarChart3 className="w-2.5 h-2.5" />
                  <span>AI</span>
                  <span className="opacity-50">•</span>
                  <Shield className="w-2.5 h-2.5" />
                  <span>HIPAA</span>
                </div>
              </div>
            </div>

            {/* Solution Nodes */}
            {solutions.map((solution, index) => {
              const angle = (index * (360 / solutions.length) - 90) * (Math.PI / 180)
              const radius = 41.5
              const x = 50 + Math.cos(angle) * radius
              const y = 50 + Math.sin(angle) * radius
              const Icon = solution.icon
              const isActive = hoveredSolution === index

              return (
                <div
                  key={solution.label}
                  className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  onMouseEnter={() => setHoveredSolution(index)}
                  onMouseLeave={() => setHoveredSolution(null)}
                >
                  <div 
                    className={`
                      group flex flex-col items-center gap-1 p-1.5 lg:p-2 rounded-lg 
                      bg-card/90 backdrop-blur-sm border shadow-soft cursor-pointer
                      transition-all duration-300
                      ${isActive 
                        ? 'border-primary shadow-elevated scale-110 bg-card' 
                        : 'border-border/50 hover:border-primary/30 hover:shadow-card hover:scale-105'
                      }
                    `}
                  >
                    <div className={`
                      w-7 h-7 lg:w-8 lg:h-8 rounded-md flex items-center justify-center
                      transition-all duration-300
                      ${isActive 
                        ? 'bg-gradient-to-br from-primary to-accent' 
                        : 'bg-muted group-hover:bg-primary/10'
                      }
                    `}>
                      <Icon className={`
                        w-3.5 h-3.5 lg:w-4 lg:h-4 transition-colors duration-300
                        ${isActive ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-primary'}
                      `} />
                    </div>
                    <span className={`
                      text-[8px] lg:text-[9px] font-medium text-center max-w-[55px] lg:max-w-[65px] leading-tight
                      transition-colors duration-300
                      ${isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}
                    `}>
                      {solution.label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Compact Integration Band */}
        <div className="mt-8 lg:mt-10">
          <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Integrated Across the Healthcare Stack
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {integrations.map((integration) => {
              const Icon = integration.icon
              return (
                <div
                  key={integration.label}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-card/80 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-soft group"
                >
                  <Icon className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-[10px] text-foreground font-medium">{integration.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-6">
          <Link 
            to="/platform/infera" 
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-300 group"
          >
            See the Platform in Action
            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
