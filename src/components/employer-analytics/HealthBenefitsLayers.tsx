import { useState } from 'react'
import {
  DollarSign, Pill, Stethoscope, Shield,
  TrendingUp, Users, BarChart3, Target, Eye,
} from 'lucide-react'

const layers = [
  { id: 'claims', label: 'Claims (Medical, Rx)', color: 'from-orange-500/20 to-orange-600/30', icon: DollarSign },
  { id: 'dpc', label: 'DPC / Direct Care', color: 'from-cyan-500/20 to-cyan-600/30', icon: Stethoscope },
  { id: 'specialty', label: 'Specialty & High-Cost Care', color: 'from-purple-500/20 to-purple-600/30', icon: Pill },
  { id: 'stoploss', label: 'Stop-Loss & Risk Layers', color: 'from-green-500/20 to-green-600/30', icon: Shield },
]

const dataPoints = [
  { icon: TrendingUp, label: 'PMPM trend analysis', description: 'Track per-member-per-month costs over rolling periods, segmented by plan, location, or demographic. Spot acceleration before it compounds.' },
  { icon: BarChart3, label: 'Cost driver identification', description: 'Know exactly which diagnostic categories, provider networks, or pharmacy classes are moving the needle. Stop guessing at where the spend is going.' },
  { icon: Users, label: 'High-cost claimant patterns', description: 'Identify emerging high-cost members early through clinical signals, not just after the catastrophic claim hits. Early intervention saves real money.' },
  { icon: Target, label: 'Plan design performance', description: 'Compare how different plan tiers, copay structures, or deductible levels are actually performing against each other. Design with data, not assumptions.' },
  { icon: Eye, label: 'Vendor ROI visibility', description: 'Finally hold your point solutions accountable. See whether your diabetes management program, MSK vendor, or mental health partner is delivering measurable outcomes — or just billing you.' },
]

export function HealthBenefitsLayers() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null)

  return (
    <section className='py-20 md:py-28 bg-gradient-to-b from-background to-muted/20'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6'>
            Benefits Analytics
          </div>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Health Benefits Intelligence
          </h2>
          <h3 className='text-xl text-muted-foreground mb-6'>
            Know Where Every Dollar Goes — and Whether It Worked
          </h3>
          <div className='space-y-4 text-muted-foreground leading-relaxed'>
            <p>
              Self-funded employers pour millions into health plans every year. But most can't answer a simple question: is our benefits strategy actually working?
            </p>
            <p>
              HealthCompiler's benefits intelligence layer gives you full visibility into medical and pharmacy claims, direct primary care utilization, specialty and high-cost care patterns, and stop-loss attachment activity. Instead of waiting for end-of-year reports, you're seeing cost drivers as they emerge — and catching surprises before they become budget emergencies.
            </p>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Stacked Layers */}
          <div className='relative perspective-1000'>
            <div className='relative w-full max-w-lg mx-auto' style={{ perspective: '1000px' }}>
              {layers.map((layer, index) => {
                const isActive = activeLayer === layer.id
                return (
                  <div key={layer.id} className={`relative rounded-2xl p-6 mb-4 cursor-pointer transition-all duration-500 border backdrop-blur-sm ${isActive ? 'scale-105 shadow-2xl z-10' : 'hover:scale-102'}`} style={{ transform: `rotateX(-8deg) translateZ(${index * 20}px)`, transformStyle: 'preserve-3d' }} onMouseEnter={() => setActiveLayer(layer.id)} onMouseLeave={() => setActiveLayer(null)}>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${layer.color} ${isActive ? 'opacity-100' : 'opacity-60'} transition-opacity`} />
                    <div className='relative flex items-center gap-4'>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isActive ? 'bg-primary/20' : 'bg-muted/50'} transition-colors`}>
                        <layer.icon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <span className={`font-semibold ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>{layer.label}</span>
                    </div>
                    {isActive && <div className='absolute -right-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary animate-pulse' />}
                  </div>
                )
              })}
            </div>
            <div className='absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl' />
            <div className='absolute -bottom-10 -right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl' />
          </div>

          {/* Data Points with descriptions */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold mb-6'>What you'll see</h3>
            <div className='space-y-4'>
              {dataPoints.map((point, index) => (
                <div key={index} className='flex items-start gap-3 p-4 rounded-xl bg-card border hover:border-primary/30 transition-colors group'>
                  <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors'>
                    <point.icon className='w-5 h-5 text-primary' />
                  </div>
                  <div>
                    <span className='text-sm font-semibold'>{point.label}</span>
                    <p className='text-xs text-muted-foreground mt-1 leading-relaxed'>{point.description}</p>
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
