import { useState } from 'react'
import { 
  Search, Activity, Building2, Users, Phone, MessageSquare, 
  Globe, Mic, ClipboardList, FileCheck, TrendingUp, Heart, Calculator,
  Pill, FlaskConical, Watch, MonitorSmartphone, Radio, CreditCard, 
  PhoneCall, Database, Network
} from 'lucide-react'
import { Link } from 'react-router-dom'

const solutions = [
  { label: 'SEO / GEO / AEO', icon: Search },
  { label: 'Patient Outcomes Analytics', icon: Activity },
  { label: 'Employer Health Analytics', icon: Building2 },
  { label: 'CRM', icon: Users },
  { label: 'AI Voice Agents', icon: Phone },
  { label: 'Membership Conversations', icon: MessageSquare },
  { label: 'Website Development', icon: Globe },
  { label: 'Voice-Based Triaging', icon: Mic },
  { label: 'Surveys & Feedback', icon: ClipboardList },
  { label: 'HEDIS Reporting', icon: FileCheck },
  { label: 'MIPS Performance', icon: TrendingUp },
  { label: 'HCC Suspecting', icon: Heart },
  { label: 'Capitation Management', icon: Calculator },
]

const integrations = [
  { label: 'Rx', icon: Pill },
  { label: 'Labs', icon: FlaskConical },
  { label: 'Wearables', icon: Watch },
  { label: 'EHRs', icon: MonitorSmartphone },
  { label: 'Websites', icon: Globe },
  { label: 'Communication', icon: Radio },
  { label: 'Billing', icon: CreditCard },
  { label: 'VoIP Systems', icon: PhoneCall },
  { label: 'Registries', icon: Database },
  { label: 'HIEs', icon: Network },
]

const coreFeatures = [
  'Data Unification',
  'AI Intelligence Layer',
  'Real-time Analytics',
  'Secure Infrastructure',
]

export const IntegratedSolutionsOrb = () => {
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle gradient halo behind orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 via-accent/5 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Integrated Platform
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            One Platform. Every Workflow. Fully Connected.
          </h2>
        </div>

        {/* Orb Schematic */}
        <div className="relative max-w-5xl mx-auto">
          {/* SVG Connection Lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 800"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Connection lines from solutions to center */}
            {solutions.map((_, index) => {
              const angle = (index * (360 / solutions.length) - 90) * (Math.PI / 180)
              const outerRadius = 340
              const innerRadius = 120
              const x1 = 400 + Math.cos(angle) * outerRadius
              const y1 = 400 + Math.sin(angle) * outerRadius
              const x2 = 400 + Math.cos(angle) * innerRadius
              const y2 = 400 + Math.sin(angle) * innerRadius
              
              return (
                <line
                  key={`line-${index}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#lineGradient)"
                  strokeWidth={hoveredSolution === index ? 2 : 1}
                  strokeDasharray="4 4"
                  className="transition-all duration-300"
                  opacity={hoveredSolution === index ? 1 : 0.5}
                  filter={hoveredSolution === index ? 'url(#glow)' : ''}
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="8;0"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </line>
              )
            })}

            {/* Outer orbit ring */}
            <circle
              cx="400"
              cy="400"
              r="340"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="1"
              strokeDasharray="2 4"
              opacity="0.3"
            />

            {/* Inner orbit ring */}
            <circle
              cx="400"
              cy="400"
              r="200"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="1"
              strokeDasharray="2 4"
              opacity="0.2"
            />
          </svg>

          {/* Central Orb */}
          <div className="relative w-full aspect-square max-w-[800px] mx-auto">
            {/* Orb Container - centered */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              {/* Ambient pulse rings */}
              <div className="absolute inset-0 -m-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-ping-slow" />
              </div>
              <div className="absolute inset-0 -m-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 animate-pulse-slow" />
              </div>

              {/* Main orb */}
              <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-primary via-primary/90 to-accent shadow-elevated flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-sm lg:text-base font-bold text-primary-foreground mb-2">
                  Health Compiler Platform
                </h3>
                <p className="text-[10px] lg:text-xs text-primary-foreground/80 mb-3">
                  Unified Data • AI • Automation
                </p>
                
                {/* Core features */}
                <div className="space-y-1">
                  {coreFeatures.map((feature) => (
                    <p key={feature} className="text-[9px] lg:text-[10px] text-primary-foreground/70">
                      {feature}
                    </p>
                  ))}
                </div>

                {/* HIPAA badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <span className="text-[8px] bg-card text-muted-foreground px-2 py-0.5 rounded-full border border-border">
                    HIPAA-ready
                  </span>
                </div>
              </div>
            </div>

            {/* Solution Nodes - positioned in orbit */}
            {solutions.map((solution, index) => {
              const angle = (index * (360 / solutions.length) - 90) * (Math.PI / 180)
              const radius = 42.5 // percentage from center
              const x = 50 + Math.cos(angle) * radius
              const y = 50 + Math.sin(angle) * radius
              const Icon = solution.icon

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
                      group flex flex-col items-center gap-1.5 p-2 lg:p-3 rounded-xl 
                      bg-card border border-border shadow-soft cursor-pointer
                      transition-all duration-300 hover:shadow-elevated hover:-translate-y-1
                      ${hoveredSolution === index ? 'border-primary/50 shadow-elevated' : ''}
                    `}
                  >
                    <div className={`
                      w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center
                      transition-colors duration-300
                      ${hoveredSolution === index ? 'bg-primary/20' : 'bg-muted'}
                    `}>
                      <Icon className={`
                        w-4 h-4 lg:w-5 lg:h-5 transition-colors duration-300
                        ${hoveredSolution === index ? 'text-primary' : 'text-muted-foreground'}
                      `} />
                    </div>
                    <span className="text-[9px] lg:text-[10px] font-medium text-foreground text-center max-w-[70px] lg:max-w-[80px] leading-tight">
                      {solution.label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Integration Band */}
        <div className="mt-20 lg:mt-24">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Fully Integrated Across the Healthcare Stack
            </p>
          </div>

          {/* Integration icons with connection lines */}
          <div className="relative">
            {/* Connection line to orb */}
            <div className="absolute left-1/2 -top-8 w-px h-8 bg-gradient-to-b from-transparent via-border to-border" />
            
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-4xl mx-auto">
              {integrations.map((integration) => {
                const Icon = integration.icon
                return (
                  <div
                    key={integration.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border hover:border-primary/30 transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-foreground font-medium">{integration.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Micro-copy */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          One platform. Every workflow. Fully connected.
        </p>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link 
            to="/platform/infera" 
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-300"
          >
            See the Platform in Action
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
