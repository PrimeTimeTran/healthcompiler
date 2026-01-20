import { useState, useEffect } from 'react'

const BrokersAdvisorsViz = () => {
  const [activeSegment, setActiveSegment] = useState(0)

  const segments = [
    { label: 'Cost Analysis', color: 'hsl(var(--primary))' },
    { label: 'Utilization', color: 'hsl(217, 91%, 60%)' },
    { label: 'Risk Profile', color: 'hsl(142, 76%, 36%)' },
    { label: 'ROI Tracking', color: 'hsl(262, 83%, 58%)' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSegment((prev) => (prev + 1) % segments.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative w-full h-[400px] flex items-center justify-center'>
      <svg
        viewBox='0 0 400 400'
        className='w-full h-full max-w-md'
      >
        <defs>
          <linearGradient
            id='advisorCoreGradient'
            x1='0%'
            y1='0%'
            x2='100%'
            y2='100%'
          >
            <stop
              offset='0%'
              stopColor='hsl(var(--primary))'
            />
            <stop
              offset='100%'
              stopColor='hsl(262, 83%, 58%)'
            />
          </linearGradient>
          <filter id='advisorGlow'>
            <feGaussianBlur
              stdDeviation='3'
              result='blur'
            />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter id='advisorSoftGlow'>
            <feGaussianBlur
              stdDeviation='8'
              result='blur'
            />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>

        {/* Background rings */}
        <circle
          cx='200'
          cy='200'
          r='160'
          fill='none'
          stroke='hsl(var(--border))'
          strokeWidth='1'
          strokeDasharray='4 4'
          opacity='0.3'
        />
        <circle
          cx='200'
          cy='200'
          r='120'
          fill='none'
          stroke='hsl(var(--border))'
          strokeWidth='1'
          strokeDasharray='2 2'
          opacity='0.2'
        />

        {/* Data arc segments */}
        {segments.map((segment, i) => {
          const startAngle = (i * 90 - 90) * (Math.PI / 180)
          const endAngle = ((i + 1) * 90 - 90) * (Math.PI / 180)
          const innerRadius = 75
          const outerRadius = 95
          const isActive = i <= activeSegment

          const x1Inner = 200 + Math.cos(startAngle) * innerRadius
          const y1Inner = 200 + Math.sin(startAngle) * innerRadius
          const x1Outer = 200 + Math.cos(startAngle) * outerRadius
          const y1Outer = 200 + Math.sin(startAngle) * outerRadius
          const x2Inner = 200 + Math.cos(endAngle) * innerRadius
          const y2Inner = 200 + Math.sin(endAngle) * innerRadius
          const x2Outer = 200 + Math.cos(endAngle) * outerRadius
          const y2Outer = 200 + Math.sin(endAngle) * outerRadius

          const d = `M ${x1Inner} ${y1Inner} 
                     L ${x1Outer} ${y1Outer} 
                     A ${outerRadius} ${outerRadius} 0 0 1 ${x2Outer} ${y2Outer}
                     L ${x2Inner} ${y2Inner}
                     A ${innerRadius} ${innerRadius} 0 0 0 ${x1Inner} ${y1Inner}`

          return (
            <path
              key={segment.label}
              d={d}
              fill={isActive ? segment.color : 'hsl(var(--muted))'}
              opacity={isActive ? (i === activeSegment ? 1 : 0.7) : 0.2}
              filter={i === activeSegment ? 'url(#advisorGlow)' : ''}
              className='transition-all duration-500'
            />
          )
        })}

        {/* Segment labels */}
        {segments.map((segment, i) => {
          const angle = (i * 90 + 45 - 90) * (Math.PI / 180)
          const labelRadius = 135
          const x = 200 + Math.cos(angle) * labelRadius
          const y = 200 + Math.sin(angle) * labelRadius
          const isActive = i === activeSegment

          return (
            <g key={`label-${segment.label}`}>
              <circle
                cx={x}
                cy={y}
                r='28'
                fill={isActive ? segment.color : 'hsl(var(--card))'}
                stroke={isActive ? segment.color : 'hsl(var(--border))'}
                strokeWidth={isActive ? '2' : '1'}
                filter={isActive ? 'url(#advisorGlow)' : ''}
                className='transition-all duration-300'
              />
              <text
                x={x}
                y={y + 4}
                textAnchor='middle'
                className={`text-[7px] font-medium ${
                  isActive ? 'fill-white' : 'fill-muted-foreground'
                }`}
              >
                {segment.label.split(' ').map((word, wi) => (
                  <tspan key={wi} x={x} dy={wi === 0 ? '-0.3em' : '1.1em'}>
                    {word}
                  </tspan>
                ))}
              </text>
            </g>
          )
        })}

        {/* Central core */}
        <g>
          <circle
            cx='200'
            cy='200'
            r='55'
            fill='url(#advisorCoreGradient)'
            opacity='0.15'
            filter='url(#advisorSoftGlow)'
          >
            <animate
              attributeName='r'
              values='55;60;55'
              dur='3s'
              repeatCount='indefinite'
            />
          </circle>

          <circle
            cx='200'
            cy='200'
            r='45'
            fill='url(#advisorCoreGradient)'
            filter='url(#advisorGlow)'
          >
            <animate
              attributeName='r'
              values='45;48;45'
              dur='2s'
              repeatCount='indefinite'
            />
          </circle>

          <circle
            cx='200'
            cy='200'
            r='35'
            fill='hsl(var(--card))'
            opacity='0.2'
          />

          <text
            x='200'
            y='195'
            textAnchor='middle'
            className='fill-white text-[11px] font-semibold'
          >
            Client
          </text>
          <text
            x='200'
            y='210'
            textAnchor='middle'
            className='fill-white/80 text-[9px]'
          >
            Portfolio
          </text>
        </g>

        {/* Pulse effect */}
        <circle
          cx='200'
          cy='200'
          r='50'
          fill='none'
          stroke='hsl(var(--primary))'
          strokeWidth='1'
          opacity='0'
        >
          <animate
            attributeName='r'
            values='50;90'
            dur='2.5s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.5;0'
            dur='2.5s'
            repeatCount='indefinite'
          />
        </circle>

        {/* Data particles */}
        {[0, 1, 2].map((i) => (
          <circle
            key={`particle-${i}`}
            r='4'
            fill='hsl(var(--primary))'
            opacity='0.8'
          >
            <animateMotion
              dur={`${3 + i * 0.5}s`}
              repeatCount='indefinite'
              path='M0,160 Q80,80 0,0 Q-80,-80 0,-160 Q80,-80 0,0 Q-80,80 0,160'
              begin={`${i * 1}s`}
            />
          </circle>
        ))}
      </svg>
    </div>
  )
}

export default BrokersAdvisorsViz
