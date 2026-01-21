import { useEffect, useRef, useState } from 'react'

const integrations = [
  // Wearables / Health data
  { name: 'Oura', category: 'wearable' },
  { name: 'Garmin', category: 'wearable' },
  { name: 'Withings', category: 'wearable' },
  { name: 'Strava', category: 'wearable' },
  { name: 'Dexcom', category: 'wearable' },
  { name: 'Omron', category: 'wearable' },
  { name: 'Polar', category: 'wearable' },
  { name: 'Fitbit', category: 'wearable' },
  { name: 'Apple Health', category: 'wearable' },
  { name: 'Google Fit', category: 'wearable' },
  // Clinical + care signals
  { name: 'Elation', category: 'clinical' },
  { name: 'Cerbo', category: 'clinical' },
  { name: 'Tenovi', category: 'clinical' },
  { name: 'InBody', category: 'clinical' },
]

interface IntegrationTileProps {
  name: string
  category: string
  index: number
  totalCount: number
}

function IntegrationTile({ name, category, index, totalCount }: IntegrationTileProps) {
  const tileRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let animationId: number
    let startTime = Date.now()
    
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000
      const floatX = Math.sin(elapsed * 0.5 + index * 0.5) * 2
      const floatY = Math.cos(elapsed * 0.4 + index * 0.3) * 2
      setOffset({ x: floatX, y: floatY })
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    return () => cancelAnimationFrame(animationId)
  }, [index])

  const isClinical = category === 'clinical'

  return (
    <div
      ref={tileRef}
      className={`
        px-4 py-3 rounded-xl bg-card border border-border/60 shadow-soft
        transition-all duration-300 hover:shadow-card hover:scale-105
        flex items-center justify-center text-sm font-medium
        ${isClinical ? 'text-primary' : 'text-foreground'}
      `}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    >
      {name}
    </div>
  )
}

function CentralHub() {
  return (
    <div className='relative flex items-center justify-center'>
      {/* Outer pulse ring */}
      <div className='absolute w-40 h-40 rounded-full border-2 border-primary/20 animate-ping-slow' />
      <div 
        className='absolute w-48 h-48 rounded-full border border-primary/10 animate-ping-slow'
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Hub container */}
      <div className='relative w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/40 flex items-center justify-center shadow-glow'>
        <div className='text-center'>
          <div className='text-xs font-semibold text-muted-foreground uppercase tracking-wider'>Health Compiler</div>
          <div className='text-sm font-bold text-foreground mt-1'>Outcomes Layer</div>
        </div>
      </div>
    </div>
  )
}

function ConnectorPaths() {
  return (
    <svg 
      className='absolute inset-0 w-full h-full pointer-events-none'
      viewBox='0 0 800 500'
      preserveAspectRatio='xMidYMid meet'
    >
      <defs>
        {/* Gradient for connector lines */}
        <linearGradient id='connectorGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='0%' stopColor='hsl(var(--primary))' stopOpacity='0.3' />
          <stop offset='50%' stopColor='hsl(var(--accent))' stopOpacity='0.5' />
          <stop offset='100%' stopColor='hsl(var(--primary))' stopOpacity='0.3' />
        </linearGradient>
        
        {/* Moving dot animation */}
        <circle id='movingDot' r='3' fill='hsl(var(--accent))'>
          <animate attributeName='opacity' values='0.8;1;0.8' dur='1.5s' repeatCount='indefinite' />
        </circle>
      </defs>

      {/* Left side connectors */}
      <g className='opacity-60'>
        <path d='M80,80 Q200,100 400,250' fill='none' stroke='url(#connectorGradient)' strokeWidth='1.5' strokeDasharray='4,4'>
          <animate attributeName='stroke-dashoffset' values='0;-16' dur='2s' repeatCount='indefinite' />
        </path>
        <circle r='2.5' fill='hsl(var(--accent))'>
          <animateMotion dur='3s' repeatCount='indefinite' path='M80,80 Q200,100 400,250' />
        </circle>
      </g>
      
      <g className='opacity-60'>
        <path d='M100,160 Q250,180 400,250' fill='none' stroke='url(#connectorGradient)' strokeWidth='1.5' strokeDasharray='4,4'>
          <animate attributeName='stroke-dashoffset' values='0;-16' dur='2.2s' repeatCount='indefinite' />
        </path>
        <circle r='2.5' fill='hsl(var(--accent))'>
          <animateMotion dur='3.5s' repeatCount='indefinite' path='M100,160 Q250,180 400,250' />
        </circle>
      </g>
      
      <g className='opacity-60'>
        <path d='M70,250 Q200,250 400,250' fill='none' stroke='url(#connectorGradient)' strokeWidth='1.5' strokeDasharray='4,4'>
          <animate attributeName='stroke-dashoffset' values='0;-16' dur='1.8s' repeatCount='indefinite' />
        </path>
        <circle r='2.5' fill='hsl(var(--accent))'>
          <animateMotion dur='2.8s' repeatCount='indefinite' path='M70,250 Q200,250 400,250' />
        </circle>
      </g>
      
      <g className='opacity-60'>
        <path d='M100,340 Q250,320 400,250' fill='none' stroke='url(#connectorGradient)' strokeWidth='1.5' strokeDasharray='4,4'>
          <animate attributeName='stroke-dashoffset' values='0;-16' dur='2.4s' repeatCount='indefinite' />
        </path>
        <circle r='2.5' fill='hsl(var(--accent))'>
          <animateMotion dur='3.2s' repeatCount='indefinite' path='M100,340 Q250,320 400,250' />
        </circle>
      </g>
      
      <g className='opacity-60'>
        <path d='M80,420 Q200,400 400,250' fill='none' stroke='url(#connectorGradient)' strokeWidth='1.5' strokeDasharray='4,4'>
          <animate attributeName='stroke-dashoffset' values='0;-16' dur='2s' repeatCount='indefinite' />
        </path>
        <circle r='2.5' fill='hsl(var(--accent))'>
          <animateMotion dur='3.8s' repeatCount='indefinite' path='M80,420 Q200,400 400,250' />
        </circle>
      </g>

      {/* Right side connectors */}
      <g className='opacity-60'>
        <path d='M720,80 Q600,100 400,250' fill='none' stroke='url(#connectorGradient)' strokeWidth='1.5' strokeDasharray='4,4'>
          <animate attributeName='stroke-dashoffset' values='0;-16' dur='2.1s' repeatCount='indefinite' />
        </path>
        <circle r='2.5' fill='hsl(var(--accent))'>
          <animateMotion dur='3.3s' repeatCount='indefinite' path='M720,80 Q600,100 400,250' />
        </circle>
      </g>
      
      <g className='opacity-60'>
        <path d='M700,160 Q550,180 400,250' fill='none' stroke='url(#connectorGradient)' strokeWidth='1.5' strokeDasharray='4,4'>
          <animate attributeName='stroke-dashoffset' values='0;-16' dur='1.9s' repeatCount='indefinite' />
        </path>
        <circle r='2.5' fill='hsl(var(--accent))'>
          <animateMotion dur='3.1s' repeatCount='indefinite' path='M700,160 Q550,180 400,250' />
        </circle>
      </g>
      
      <g className='opacity-60'>
        <path d='M730,250 Q600,250 400,250' fill='none' stroke='url(#connectorGradient)' strokeWidth='1.5' strokeDasharray='4,4'>
          <animate attributeName='stroke-dashoffset' values='0;-16' dur='2.3s' repeatCount='indefinite' />
        </path>
        <circle r='2.5' fill='hsl(var(--accent))'>
          <animateMotion dur='2.9s' repeatCount='indefinite' path='M730,250 Q600,250 400,250' />
        </circle>
      </g>
      
      <g className='opacity-60'>
        <path d='M700,340 Q550,320 400,250' fill='none' stroke='url(#connectorGradient)' strokeWidth='1.5' strokeDasharray='4,4'>
          <animate attributeName='stroke-dashoffset' values='0;-16' dur='2.5s' repeatCount='indefinite' />
        </path>
        <circle r='2.5' fill='hsl(var(--accent))'>
          <animateMotion dur='3.4s' repeatCount='indefinite' path='M700,340 Q550,320 400,250' />
        </circle>
      </g>
      
      <g className='opacity-60'>
        <path d='M720,420 Q600,400 400,250' fill='none' stroke='url(#connectorGradient)' strokeWidth='1.5' strokeDasharray='4,4'>
          <animate attributeName='stroke-dashoffset' values='0;-16' dur='2.2s' repeatCount='indefinite' />
        </path>
        <circle r='2.5' fill='hsl(var(--accent))'>
          <animateMotion dur='3.6s' repeatCount='indefinite' path='M720,420 Q600,400 400,250' />
        </circle>
      </g>
    </svg>
  )
}

export function IntegrationHub() {
  const wearables = integrations.filter(i => i.category === 'wearable')
  const clinical = integrations.filter(i => i.category === 'clinical')

  return (
    <div className='relative py-12'>
      {/* Desktop layout */}
      <div className='hidden md:block'>
        <div className='relative min-h-[500px]'>
          {/* SVG Connectors */}
          <ConnectorPaths />
          
          {/* Left column - Wearables */}
          <div className='absolute left-0 top-0 w-[200px] space-y-3'>
            {wearables.slice(0, 5).map((integration, idx) => (
              <IntegrationTile 
                key={integration.name} 
                {...integration} 
                index={idx}
                totalCount={integrations.length}
              />
            ))}
          </div>
          
          {/* Left column bottom */}
          <div className='absolute left-0 bottom-0 w-[200px] space-y-3'>
            {wearables.slice(5).map((integration, idx) => (
              <IntegrationTile 
                key={integration.name} 
                {...integration} 
                index={idx + 5}
                totalCount={integrations.length}
              />
            ))}
          </div>
          
          {/* Center Hub */}
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
            <CentralHub />
          </div>
          
          {/* Right column - Clinical */}
          <div className='absolute right-0 top-1/2 -translate-y-1/2 w-[200px] space-y-3'>
            {clinical.map((integration, idx) => (
              <IntegrationTile 
                key={integration.name} 
                {...integration} 
                index={idx + 10}
                totalCount={integrations.length}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout - scrollable row */}
      <div className='md:hidden'>
        <div className='flex justify-center mb-8'>
          <CentralHub />
        </div>
        
        <div className='overflow-x-auto pb-4 -mx-4 px-4'>
          <div className='flex gap-3 min-w-max'>
            {integrations.map((integration, idx) => (
              <div key={integration.name} className='flex-shrink-0'>
                <IntegrationTile 
                  {...integration} 
                  index={idx}
                  totalCount={integrations.length}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Simple connector lines on mobile */}
        <div className='flex justify-center mt-4'>
          <div className='w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent' />
        </div>
      </div>
    </div>
  )
}
