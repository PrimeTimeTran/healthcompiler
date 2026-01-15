import { Shield, FileCheck, Scale, BarChart3, FileText } from 'lucide-react'

const features = [
  {
    icon: FileCheck,
    label: 'Vendor accountability',
    description: 'Track vendor performance and compliance',
  },
  {
    icon: Scale,
    label: 'Spend justification',
    description: 'Document and justify every dollar spent',
  },
  {
    icon: BarChart3,
    label: 'Benchmarking',
    description: 'Compare against industry standards',
  },
  {
    icon: FileText,
    label: 'Documentation trails',
    description: 'Complete audit-ready documentation',
  },
]

export function FiduciaryShield() {
  return (
    <section className='py-20 md:py-28 bg-muted/40'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Fiduciary-Grade Oversight
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Built for employers who take ERISA responsibility seriously.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
          {/* Shield Visualization */}
          <div className='relative flex items-center justify-center'>
            <div className='relative'>
              {/* Outer glow */}
              <div className='absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-150 animate-pulse-slow' />

              {/* Shield SVG */}
              <svg
                viewBox='0 0 200 240'
                className='w-64 h-80 md:w-80 md:h-96 relative z-10'
              >
                <defs>
                  <linearGradient
                    id='shieldGradient'
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
                    id='shieldGlow'
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

                {/* Shield shape */}
                <path
                  d='M100,10 L180,50 L180,120 C180,180 100,230 100,230 C100,230 20,180 20,120 L20,50 Z'
                  fill='url(#shieldGradient)'
                  stroke='hsl(var(--primary))'
                  strokeWidth='2'
                  filter='url(#shieldGlow)'
                />

                {/* Data streams */}
                {[0, 1, 2, 3].map((i) => (
                  <g key={i}>
                    <line
                      x1={50 + i * 35}
                      y1='220'
                      x2='100'
                      y2='120'
                      stroke='hsl(var(--primary))'
                      strokeWidth='1'
                      strokeOpacity='0.3'
                      strokeDasharray='4,4'
                    />
                    <circle
                      r='3'
                      fill='hsl(var(--primary))'
                      opacity='0.6'
                    >
                      <animateMotion
                        dur={`${2 + i * 0.5}s`}
                        repeatCount='indefinite'
                        path={`M${50 + i * 35},220 L100,120`}
                      />
                    </circle>
                  </g>
                ))}

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
                  y='105'
                  textAnchor='middle'
                  fill='hsl(var(--primary))'
                  fontSize='24'
                >
                  ✓
                </text>
              </svg>

              {/* Floating badges */}
              <div className='absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/40 text-green-500 text-xs font-medium'>
                ERISA Compliant
              </div>
              <div className='absolute -bottom-2 -left-4 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-500 text-xs font-medium'>
                Audit Ready
              </div>
            </div>
          </div>

          {/* Features */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold mb-6 flex items-center gap-2'>
              <Shield className='w-5 h-5 text-primary' />
              Governance Framework
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
