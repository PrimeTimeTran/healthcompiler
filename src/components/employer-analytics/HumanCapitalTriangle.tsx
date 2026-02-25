import { useState } from 'react'
import { Heart, TrendingUp, Users, Clock, Brain, AlertCircle, Zap, BarChart3 } from 'lucide-react'

const trianglePoints = [
  { id: 'health', label: 'Health', icon: Heart, position: 'top', color: '#ef4444' },
  { id: 'productivity', label: 'Productivity', icon: TrendingUp, position: 'bottom-left', color: '#22c55e' },
  { id: 'retention', label: 'Retention', icon: Users, position: 'bottom-right', color: '#3b82f6' },
]

const signals = [
  { icon: Clock, label: 'Absenteeism', description: 'Track unplanned absences by team, location, and tenure. Cross-reference with clinical data to understand the "why" behind missed workdays.' },
  { icon: Brain, label: 'Presenteeism', description: 'Quantify the productivity drag from employees who show up but aren\'t well. This hidden cost often exceeds absenteeism by a factor of three.' },
  { icon: AlertCircle, label: 'Attrition risk', description: 'Identify which employee segments are showing early warning signs of turnover. When health-related dissatisfaction drives resignation, it\'s preventable — if you catch it early.' },
  { icon: Zap, label: 'Burnout indicators', description: 'Monitor utilization of behavioral health services, short-term disability claims, and self-reported stress metrics. Burnout is a trailing indicator — but the signals that predict it are available now.' },
  { icon: BarChart3, label: 'Engagement trends', description: 'Track how workforce engagement correlates with benefit plan satisfaction, health outcomes, and retention over time. The pattern is clear: healthier employees stay longer.' },
]

export function HumanCapitalTriangle() {
  const [activePoint, setActivePoint] = useState<string | null>(null)

  return (
    <section className='py-20 md:py-28 bg-muted/40'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6'>
            Human Capital
          </div>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Human Capital Intelligence
          </h2>
          <h3 className='text-xl text-muted-foreground mb-6'>
            Health, Productivity, and Retention — Connected
          </h3>
          <div className='space-y-4 text-muted-foreground leading-relaxed'>
            <p>
              Here's the conversation most benefits teams haven't had yet: your healthcare strategy is a workforce strategy. When employees are managing uncontrolled chronic conditions, dealing with untreated mental health challenges, or burning out from workload stress, it doesn't just show up in claims — it shows up in absenteeism, turnover, and declining productivity.
            </p>
            <p>
              HealthCompiler connects the dots between health data and human capital signals. For the first time, you can see how workforce health actually impacts the metrics your CHRO and CFO care about.
            </p>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Triangle Visualization */}
          <div className='relative h-[400px] md:h-[500px]'>
            <svg viewBox='0 0 400 400' className='w-full h-full'>
              <defs>
                <linearGradient id='triangleGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                  <stop offset='0%' stopColor='hsl(var(--primary))' stopOpacity='0.1' />
                  <stop offset='100%' stopColor='hsl(var(--accent))' stopOpacity='0.1' />
                </linearGradient>
                <filter id='glow'>
                  <feGaussianBlur stdDeviation='3' result='coloredBlur' />
                  <feMerge><feMergeNode in='coloredBlur' /><feMergeNode in='SourceGraphic' /></feMerge>
                </filter>
              </defs>
              <polygon points='200,50 50,350 350,350' fill='url(#triangleGradient)' stroke='hsl(var(--border))' strokeWidth='2' />
              <line x1='200' y1='50' x2='200' y2='200' stroke='hsl(var(--primary))' strokeOpacity='0.3' strokeWidth='1' strokeDasharray='4' />
              <line x1='50' y1='350' x2='200' y2='200' stroke='hsl(var(--primary))' strokeOpacity='0.3' strokeWidth='1' strokeDasharray='4' />
              <line x1='350' y1='350' x2='200' y2='200' stroke='hsl(var(--primary))' strokeOpacity='0.3' strokeWidth='1' strokeDasharray='4' />
              <circle cx='200' cy='200' r='30' fill='hsl(var(--card))' stroke='hsl(var(--primary))' strokeWidth='2' filter='url(#glow)' />
              <text x='200' y='205' textAnchor='middle' fill='hsl(var(--foreground))' fontSize='10' fontWeight='600'>HCI</text>
              {[0, 1, 2].map((i) => (
                <circle key={i} r='4' fill='hsl(var(--primary))' opacity='0.6'>
                  <animateMotion dur={`${3 + i}s`} repeatCount='indefinite' path={i === 0 ? 'M200,50 L200,200' : i === 1 ? 'M50,350 L200,200' : 'M350,350 L200,200'} />
                </circle>
              ))}
            </svg>
            {trianglePoints.map((point) => {
              const positions = { top: 'top-4 left-1/2 -translate-x-1/2', 'bottom-left': 'bottom-4 left-4', 'bottom-right': 'bottom-4 right-4' }
              return (
                <div key={point.id} className={`absolute ${positions[point.position as keyof typeof positions]} cursor-pointer group`} onMouseEnter={() => setActivePoint(point.id)} onMouseLeave={() => setActivePoint(null)}>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm transition-all ${activePoint === point.id ? 'scale-110 shadow-lg' : ''}`} style={{ backgroundColor: `${point.color}15`, borderColor: `${point.color}40` }}>
                    <point.icon className='w-5 h-5' style={{ color: point.color }} />
                    <span className='font-semibold text-sm'>{point.label}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Signals */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold mb-6'>Signals Visualized</h3>
            <div className='space-y-3'>
              {signals.map((signal, index) => (
                <div key={index} className='flex items-start gap-4 p-4 rounded-xl bg-card border hover:border-primary/30 hover:shadow-md transition-all'>
                  <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0'>
                    <signal.icon className='w-5 h-5 text-primary' />
                  </div>
                  <div className='flex-1'>
                    <span className='font-medium'>{signal.label}</span>
                    <p className='text-xs text-muted-foreground mt-1 leading-relaxed'>{signal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
