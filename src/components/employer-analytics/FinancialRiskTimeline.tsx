import { useState } from 'react'
import { TrendingUp, AlertTriangle, CheckCircle, Sliders } from 'lucide-react'

const timelinePoints = [
  { id: 'current', label: 'Current State', month: 0, risk: 'medium' },
  { id: '6months', label: '6 Months', month: 6, risk: 'high' },
  { id: '12months', label: '12 Months', month: 12, risk: 'low' },
]

const riskColors = {
  low: { bg: 'bg-green-500/20', border: 'border-green-500', text: 'text-green-500', glow: 'shadow-green-500/30' },
  medium: { bg: 'bg-yellow-500/20', border: 'border-yellow-500', text: 'text-yellow-500', glow: 'shadow-yellow-500/30' },
  high: { bg: 'bg-red-500/20', border: 'border-red-500', text: 'text-red-500', glow: 'shadow-red-500/30' },
}

export function FinancialRiskTimeline() {
  const [activePoint, setActivePoint] = useState('current')
  const [scenarioValue, setScenarioValue] = useState(50)

  return (
    <section className='py-20 md:py-28 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6'>
            Financial Intelligence
          </div>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Financial Risk and Forecasting
          </h2>
          <h3 className='text-xl text-muted-foreground mb-6'>
            See Risk Early. Act Before Renewals.
          </h3>
          <div className='space-y-4 text-muted-foreground leading-relaxed'>
            <p>
              Every employer dreads the same moment: the renewal meeting where your broker tells you costs are up 12% and there's nothing you can do about it. HealthCompiler shifts that conversation from reactive to proactive.
            </p>
            <p>
              Our financial intelligence layer gives you rolling 6-month and 12-month cost projections based on your actual claims trajectory — not industry benchmarks that don't reflect your population. You'll see where risk is accumulating, which cohorts are driving cost acceleration, and what levers you can pull to change the outcome before renewal season.
            </p>
          </div>
        </div>

        <div className='max-w-5xl mx-auto'>
          {/* Timeline Visualization */}
          <div className='relative mb-16'>
            <div className='absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-500/50 via-yellow-500/50 to-green-500/50 rounded-full transform -translate-y-1/2' />
            <svg className='absolute inset-0 w-full h-32' viewBox='0 0 1000 100' preserveAspectRatio='none'>
              <path d='M0,70 C150,80 250,60 400,55 C550,50 700,30 850,20 C920,15 1000,10 1000,10' fill='none' stroke='hsl(var(--primary))' strokeWidth='2' strokeDasharray='5,5' opacity='0.6'>
                <animate attributeName='stroke-dashoffset' from='100' to='0' dur='3s' repeatCount='indefinite' />
              </path>
            </svg>
            <div className='relative flex justify-between items-center py-16'>
              {timelinePoints.map((point, index) => {
                const colors = riskColors[point.risk as keyof typeof riskColors]
                const isActive = activePoint === point.id
                return (
                  <div key={point.id} className='relative flex flex-col items-center cursor-pointer group' onClick={() => setActivePoint(point.id)} style={{ perspective: '500px' }}>
                    <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl border-2 ${colors.border} ${colors.bg} backdrop-blur-sm transition-all duration-500 ${isActive ? `scale-110 shadow-xl ${colors.glow}` : 'hover:scale-105'}`} style={{ transform: isActive ? 'rotateY(0deg) translateZ(20px)' : `rotateY(${-10 + index * 10}deg)`, transformStyle: 'preserve-3d' }}>
                      <div className={`absolute inset-2 rounded-xl ${colors.bg} flex items-center justify-center`}>
                        {point.risk === 'high' && <AlertTriangle className={`w-8 h-8 ${colors.text}`} />}
                        {point.risk === 'medium' && <TrendingUp className={`w-8 h-8 ${colors.text}`} />}
                        {point.risk === 'low' && <CheckCircle className={`w-8 h-8 ${colors.text}`} />}
                      </div>
                      {isActive && <div className={`absolute inset-0 rounded-2xl ${colors.bg} animate-pulse opacity-50`} />}
                    </div>
                    <div className='mt-4 text-center'>
                      <span className={`font-semibold ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>{point.label}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Scenario Modeling */}
          <div className='bg-card border rounded-2xl p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                <Sliders className='w-5 h-5 text-primary' />
              </div>
              <div>
                <h3 className='font-semibold'>Scenario Modeling</h3>
                <p className='text-sm text-muted-foreground'>Adjust what-if levers to forecast outcomes</p>
              </div>
            </div>
            <p className='text-muted-foreground text-sm mb-6 leading-relaxed'>
              Adjust a single lever — like plan design changes, network adjustments, or wellness program investments — and see the projected impact across three dimensions:
            </p>
            <div className='space-y-4'>
              <div>
                <div className='flex justify-between text-sm mb-2'>
                  <span className='text-muted-foreground'>Plan Design Changes</span>
                  <span className='font-medium'>{scenarioValue}%</span>
                </div>
                <input type='range' min='0' max='100' value={scenarioValue} onChange={(e) => setScenarioValue(Number(e.target.value))} className='w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary' />
              </div>
              <div className='grid grid-cols-3 gap-4 mt-6 pt-6 border-t'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-green-500'>-12%</div>
                  <div className='text-xs text-muted-foreground'>Projected savings</div>
                  <p className='text-[10px] text-muted-foreground mt-1'>Modeled PMPM impact over 6–12 months</p>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-primary'>+8%</div>
                  <div className='text-xs text-muted-foreground'>Engagement lift</div>
                  <p className='text-[10px] text-muted-foreground mt-1'>Predicted utilization shift from plan changes</p>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-blue-500'>-5%</div>
                  <div className='text-xs text-muted-foreground'>Risk reduction</div>
                  <p className='text-[10px] text-muted-foreground mt-1'>Stop-loss exposure and catastrophic claim probability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
