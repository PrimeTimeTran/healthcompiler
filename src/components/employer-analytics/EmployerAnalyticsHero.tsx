import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

import {
  Zap,
  Heart,
  Users,
  Shield,
  Database,
  Activity,
  TrendingUp,
  ArrowRight,
  DollarSign,
} from 'lucide-react'

import { CTAButton, GridSection } from '@/components/ui'

const orbitData = [
  { label: 'Health Benefits', icon: Heart, color: '#f97316' },
  { label: 'Workforce Health', icon: Activity, color: '#06b6d4' },
  { label: 'Human Capital', icon: Users, color: '#8b5cf6' },
  { label: 'Financial Risk', icon: DollarSign, color: '#22c55e' },
  { label: 'Fiduciary', icon: Shield, color: '#ec4899' },
]

export function EmployerAnalyticsHero() {
  const [activeOrbit, setActiveOrbit] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOrbit((prev) => (prev + 1) % orbitData.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <GridSection>
      <div className='container mx-auto px-6 py-24 lg:py-32'>
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
          <div className='space-y-8'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
              Employer Intelligence,{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
                Unified
              </span>
            </h1>

            <h2 className='text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl'>
              A single analytics layer for health benefits, workforce health,
              and human capital performance.
            </h2>

            <p className='text-muted-foreground/80 max-w-lg'>
              Unifying claims, clinical data, benefits, and people data into
              actionable employer insight.
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <CTAButton
                link='/contact'
                text='See Your Intelligence Layer'
                iconSuffix={
                  <ArrowRight className='ml-2 transition-transform group-hover:translate-x-1' />
                }
              />
              <Button
                asChild
                size='lg'
                variant='outline'
              >
                <Link to='/contact'>Talk to an Expert</Link>
              </Button>
            </div>

            <p className='text-sm text-muted-foreground flex items-center gap-4 flex-wrap'>
              <span className='flex items-center gap-1.5'>
                <Zap className='w-4 h-4 text-primary' /> Real-time insights
              </span>
              <span className='flex items-center gap-1.5'>
                <Database className='w-4 h-4 text-primary' /> Unified data
              </span>
              <span className='flex items-center gap-1.5'>
                <Shield className='w-4 h-4 text-primary' /> Fiduciary-grade
              </span>
            </p>
          </div>

          {/* Right - Orbiting Visualization */}
          <div className='relative h-[450px] flex items-center justify-center'>
            {/* Central Core */}
            <div className='relative'>
              {/* Glow effect */}
              <div className='absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl animate-pulse' />

              {/* Core card */}
              <div className='relative bg-white rounded-2xl border-2 border-primary/20 shadow-2xl p-6 w-[180px] z-10'>
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5' />
                <div className='relative text-center space-y-3'>
                  <div className='w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
                    <TrendingUp className='w-7 h-7 text-white' />
                  </div>
                  <div>
                    <div className='text-xs text-muted-foreground uppercase tracking-wider'>
                      Health Compiler
                    </div>
                    <div className='text-sm font-semibold text-foreground'>
                      Employer Analytics
                    </div>
                    <div className='text-[10px] text-muted-foreground mt-1'>
                      Layer
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting items */}
            <svg className='absolute inset-0 w-full h-full pointer-events-none'>
              <defs>
                {orbitData.map((orbit, idx) => (
                  <linearGradient
                    key={`grad-${idx}`}
                    id={`orbitGrad${idx}`}
                    x1='0%'
                    y1='0%'
                    x2='100%'
                    y2='0%'
                  >
                    <stop
                      offset='0%'
                      stopColor={orbit.color}
                      stopOpacity='0.1'
                    />
                    <stop
                      offset='50%'
                      stopColor={orbit.color}
                      stopOpacity='0.5'
                    />
                    <stop
                      offset='100%'
                      stopColor={orbit.color}
                      stopOpacity='0.1'
                    />
                  </linearGradient>
                ))}
              </defs>

              {/* Orbit rings */}
              {[140, 170, 200].map((r, i) => (
                <circle
                  key={r}
                  cx='50%'
                  cy='50%'
                  r={r}
                  fill='none'
                  stroke='#e5e7eb'
                  strokeWidth='1'
                  strokeDasharray='4 4'
                  opacity={0.5}
                />
              ))}

              {/* Flow lines from orbiting items to center */}
              {orbitData.map((orbit, idx) => {
                const angle =
                  (idx / orbitData.length) * Math.PI * 2 - Math.PI / 2
                const radius = 180
                const cx = 225
                const cy = 225
                const x = Math.cos(angle) * radius + cx
                const y = Math.sin(angle) * radius + cy
                const isActive = idx === activeOrbit

                return (
                  <g key={idx}>
                    <path
                      d={`M ${x} ${y} Q ${(x + cx) / 2} ${
                        (y + cy) / 2 - 20
                      } ${cx} ${cy}`}
                      fill='none'
                      stroke={`url(#orbitGrad${idx})`}
                      strokeWidth='2'
                      strokeDasharray='6 4'
                      className={`transition-opacity duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-20'
                      }`}
                    />
                    {isActive && (
                      <circle
                        r='4'
                        fill={orbit.color}
                      >
                        <animateMotion
                          dur='1.5s'
                          repeatCount='indefinite'
                          path={`M ${x} ${y} Q ${(x + cx) / 2} ${
                            (y + cy) / 2 - 20
                          } ${cx} ${cy}`}
                        />
                      </circle>
                    )}
                  </g>
                )
              })}
            </svg>

            {/* Orbiting cards */}
            {orbitData.map((orbit, idx) => {
              const angle = (idx / orbitData.length) * Math.PI * 2 - Math.PI / 2
              const radius = 180
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              const Icon = orbit.icon
              const isActive = idx === activeOrbit

              return (
                <div
                  key={orbit.label}
                  className='absolute transition-all duration-500'
                  style={{
                    left: `calc(50% + ${x}px - 50px)`,
                    top: `calc(50% + ${y}px - 30px)`,
                  }}
                >
                  <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border bg-white shadow-lg transition-all duration-500 ${
                      isActive ? 'scale-110 border-2' : 'scale-100 opacity-70'
                    }`}
                    style={{
                      borderColor: isActive ? orbit.color : '#e5e7eb',
                      boxShadow: isActive
                        ? `0 0 25px ${orbit.color}30`
                        : 'none',
                    }}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500`}
                      style={{ backgroundColor: `${orbit.color}15` }}
                    >
                      <Icon
                        className='w-4 h-4'
                        style={{ color: orbit.color }}
                      />
                    </div>
                    <span
                      className={`text-xs font-medium whitespace-nowrap transition-colors ${
                        isActive ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {orbit.label}
                    </span>
                  </div>
                </div>
              )
            })}

            {/* Animated pulse rings */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
              <div
                className='w-40 h-40 rounded-full border border-primary/20 animate-ping opacity-30'
                style={{ animationDuration: '3s' }}
              />
              <div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-accent/10 animate-ping opacity-20'
                style={{ animationDuration: '4s', animationDelay: '0.5s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  )
}
