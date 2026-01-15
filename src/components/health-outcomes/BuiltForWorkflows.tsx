import {
  Workflow,
  Stethoscope,
  ClipboardCheck,
  Zap,
  Shield,
} from 'lucide-react'

const features = [
  {
    icon: Workflow,
    label: 'Seamless integration',
    description: 'Fits into existing clinical workflows',
  },
  {
    icon: Stethoscope,
    label: 'Care management',
    description: 'Designed for care teams and managers',
  },
  {
    icon: ClipboardCheck,
    label: 'Actionable insights',
    description: 'Clear, actionable data without complexity',
  },
  {
    icon: Zap,
    label: 'Real-time updates',
    description: 'Continuous visibility, not periodic snapshots',
  },
]

export function BuiltForWorkflows() {
  return (
    <section className='py-20 md:py-28 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Built for Real-World Population Health Workflows
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Clear, actionable insights without added operational burden. Health
            outcomes intelligence designed to fit seamlessly into daily clinical
            and care management workflows.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
          {/* Visualization */}
          <div className='relative flex items-center justify-center'>
            <div className='relative'>
              {/* Outer glow */}
              <div className='absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-150 animate-pulse-slow' />

              {/* Workflow SVG */}
              <svg
                viewBox='0 0 200 200'
                className='w-64 h-64 md:w-80 md:h-80 relative z-10'
              >
                <defs>
                  <linearGradient
                    id='workflowGradient'
                    x1='0%'
                    y1='0%'
                    x2='100%'
                    y2='100%'
                  >
                    <stop
                      offset='0%'
                      stopColor='hsl(var(--primary))'
                      stopOpacity='0.2'
                    />
                    <stop
                      offset='100%'
                      stopColor='hsl(var(--accent))'
                      stopOpacity='0.1'
                    />
                  </linearGradient>
                  <filter
                    id='workflowGlow'
                    x='-20%'
                    y='-20%'
                    width='140%'
                    height='140%'
                  >
                    <feGaussianBlur
                      stdDeviation='4'
                      result='coloredBlur'
                    />
                    <feMerge>
                      <feMergeNode in='coloredBlur' />
                      <feMergeNode in='SourceGraphic' />
                    </feMerge>
                  </filter>
                </defs>

                {/* Central circle */}
                <circle
                  cx='100'
                  cy='100'
                  r='80'
                  fill='url(#workflowGradient)'
                  stroke='hsl(var(--primary))'
                  strokeWidth='2'
                  filter='url(#workflowGlow)'
                />

                {/* Inner rings */}
                <circle
                  cx='100'
                  cy='100'
                  r='60'
                  fill='none'
                  stroke='hsl(var(--primary))'
                  strokeWidth='1'
                  strokeOpacity='0.3'
                  strokeDasharray='4 4'
                />
                <circle
                  cx='100'
                  cy='100'
                  r='40'
                  fill='none'
                  stroke='hsl(var(--primary))'
                  strokeWidth='1'
                  strokeOpacity='0.5'
                  strokeDasharray='4 4'
                />

                {/* Data flow arrows */}
                {[0, 1, 2, 3].map((i) => {
                  const angle = (i / 4) * Math.PI * 2 - Math.PI / 2
                  const outerX = 100 + Math.cos(angle) * 70
                  const outerY = 100 + Math.sin(angle) * 70

                  return (
                    <g key={i}>
                      <line
                        x1={outerX}
                        y1={outerY}
                        x2='100'
                        y2='100'
                        stroke='hsl(var(--primary))'
                        strokeWidth='1'
                        strokeOpacity='0.4'
                      />
                      <circle
                        r='4'
                        fill='hsl(var(--primary))'
                        opacity='0.7'
                      >
                        <animateMotion
                          dur={`${2 + i * 0.3}s`}
                          repeatCount='indefinite'
                          path={`M${outerX},${outerY} L100,100`}
                        />
                      </circle>
                    </g>
                  )
                })}

                {/* Center icon */}
                <circle
                  cx='100'
                  cy='100'
                  r='25'
                  fill='hsl(var(--card))'
                  stroke='hsl(var(--primary))'
                  strokeWidth='2'
                />
                <text
                  x='100'
                  y='106'
                  textAnchor='middle'
                  fill='hsl(var(--primary))'
                  fontSize='20'
                >
                  ⚡
                </text>
              </svg>

              {/* Floating badges */}
              <div className='absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/40 text-green-500 text-xs font-medium'>
                Real-time
              </div>
              <div className='absolute -bottom-2 -left-4 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-500 text-xs font-medium'>
                Actionable
              </div>
            </div>
          </div>

          {/* Features */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold mb-6 flex items-center gap-2'>
              <Shield className='w-5 h-5 text-primary' />
              Workflow Integration
            </h3>
            <div className='space-y-4'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='flex items-start gap-4 p-5 rounded-xl bg-card border hover:border-primary/30 hover:shadow-lg transition-all group'
                >
                  <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors'>
                    <feature.icon className='w-6 h-6 text-primary' />
                  </div>
                  <div>
                    <h4 className='font-semibold mb-1'>{feature.label}</h4>
                    <p className='text-sm text-muted-foreground'>
                      {feature.description}
                    </p>
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
