import { useEffect, useMemo, useState } from 'react'

type ArcHeroVizSegment = {
  label: string
}

type ArcHeroVizProps = {
  /** Unique prefix to avoid SVG <defs> id collisions */
  id: string
  segments: ArcHeroVizSegment[]
  centerTitle: string
  centerSubtitle?: string
  cycleMs?: number
}

const ArcHeroViz = ({
  id,
  segments,
  centerTitle,
  centerSubtitle,
  cycleMs = 2000,
}: ArcHeroVizProps) => {
  const [activeSegment, setActiveSegment] = useState(0)

  const palette = useMemo(() => {
    // Warm, brand-consistent palette derived from design tokens.
    const a = 'hsl(var(--primary))'
    const b = 'hsl(var(--accent))'
    const aSoft = 'hsl(var(--primary) / 0.65)'
    const bSoft = 'hsl(var(--accent) / 0.65)'
    return [a, b, aSoft, bSoft]
  }, [])

  useEffect(() => {
    if (!segments.length) return
    const interval = window.setInterval(() => {
      setActiveSegment((prev) => (prev + 1) % segments.length)
    }, cycleMs)
    return () => window.clearInterval(interval)
  }, [segments.length, cycleMs])

  return (
    <div className='relative w-full h-[400px] flex items-center justify-center'>
      <svg
        viewBox='0 0 400 400'
        className='w-full h-full max-w-md'
        role='img'
        aria-label='Animated data visualization'
      >
        <defs>
          <linearGradient
            id={`${id}-coreGradient`}
            x1='0%'
            y1='0%'
            x2='100%'
            y2='100%'
          >
            <stop offset='0%' stopColor='hsl(var(--primary))' />
            <stop offset='100%' stopColor='hsl(var(--accent))' />
          </linearGradient>
          <filter id={`${id}-glow`}>
            <feGaussianBlur stdDeviation='3' result='blur' />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter id={`${id}-softGlow`}>
            <feGaussianBlur stdDeviation='8' result='blur' />
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
          const startAngle = (i * (360 / segments.length) - 90) * (Math.PI / 180)
          const endAngle =
            ((i + 1) * (360 / segments.length) - 90) * (Math.PI / 180)
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

          const color = palette[i % palette.length]

          return (
            <path
              key={segment.label}
              d={d}
              fill={isActive ? color : 'hsl(var(--muted))'}
              opacity={isActive ? (i === activeSegment ? 1 : 0.7) : 0.2}
              filter={i === activeSegment ? `url(#${id}-glow)` : ''}
              className='transition-all duration-500'
            />
          )
        })}

        {/* Segment labels */}
        {segments.map((segment, i) => {
          const angle =
            (i * (360 / segments.length) + (180 / segments.length) - 90) *
            (Math.PI / 180)
          const labelRadius = 135
          const x = 200 + Math.cos(angle) * labelRadius
          const y = 200 + Math.sin(angle) * labelRadius
          const isActive = i === activeSegment
          const color = palette[i % palette.length]

          return (
            <g key={`label-${segment.label}`}>
              <circle
                cx={x}
                cy={y}
                r='28'
                fill={isActive ? color : 'hsl(var(--card))'}
                stroke={isActive ? color : 'hsl(var(--border))'}
                strokeWidth={isActive ? '2' : '1'}
                filter={isActive ? `url(#${id}-glow)` : ''}
                className='transition-all duration-300'
              />
              <text
                x={x}
                y={y + 4}
                textAnchor='middle'
                className={`text-[8px] font-medium ${
                  isActive ? 'fill-primary-foreground' : 'fill-muted-foreground'
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
            fill={`url(#${id}-coreGradient)`}
            opacity='0.15'
            filter={`url(#${id}-softGlow)`}
          >
            <animate attributeName='r' values='55;60;55' dur='3s' repeatCount='indefinite' />
          </circle>

          <circle
            cx='200'
            cy='200'
            r='45'
            fill={`url(#${id}-coreGradient)`}
            filter={`url(#${id}-glow)`}
          >
            <animate attributeName='r' values='45;48;45' dur='2s' repeatCount='indefinite' />
          </circle>

          <circle cx='200' cy='200' r='35' fill='hsl(var(--card))' opacity='0.2' />

          <text
            x='200'
            y='195'
            textAnchor='middle'
            className='fill-primary-foreground text-[11px] font-semibold'
          >
            {centerTitle}
          </text>
          {centerSubtitle ? (
            <text
              x='200'
              y='210'
              textAnchor='middle'
              className='fill-primary-foreground opacity-80 text-[9px]'
            >
              {centerSubtitle}
            </text>
          ) : null}
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
          <animate attributeName='r' values='50;90' dur='2.5s' repeatCount='indefinite' />
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
            fill='hsl(var(--accent))'
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

export default ArcHeroViz
