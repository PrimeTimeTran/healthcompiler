import { useState } from 'react'
import { TrendingDown, AlertTriangle, Pill, Eye } from 'lucide-react'

const challenges = [
  {
    id: 'chronic',
    label: 'Chronic conditions progress',
    description: 'Chronic conditions progress without obvious signals',
    color: 'from-red-500/20 to-red-600/30',
    icon: TrendingDown,
  },
  {
    id: 'preventive',
    label: 'Preventive care gaps',
    description: 'Preventive care gaps expand across patient populations',
    color: 'from-orange-500/20 to-orange-600/30',
    icon: AlertTriangle,
  },
  {
    id: 'medication',
    label: 'Medication adherence',
    description: 'Medication adherence issues emerge without timely alerts',
    color: 'from-purple-500/20 to-purple-600/30',
    icon: Pill,
  },
  {
    id: 'visibility',
    label: 'Longitudinal insight',
    description:
      'Without longitudinal insight, population health risks often go unnoticed until intervention becomes reactive',
    color: 'from-cyan-500/20 to-cyan-600/30',
    icon: Eye,
  },
]

export function MissedBetweenVisits() {
  const [activeChallenge, setActiveChallenge] = useState<string | null>(null)

  return (
    <section className='py-20 md:py-28 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            What Gets Missed Between Visits
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            Care teams deliver excellent care during visits. What's harder is
            maintaining visibility into patient health between visits, where
            small changes can quietly impact outcomes.
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div
            className='relative'
            style={{ perspective: '1000px' }}
          >
            {challenges.map((challenge, index) => {
              const isActive = activeChallenge === challenge.id
              return (
                <div
                  key={challenge.id}
                  className={`relative rounded-2xl p-6 mb-4 cursor-pointer transition-all duration-500 border backdrop-blur-sm ${
                    isActive ? 'scale-105 shadow-2xl z-10' : 'hover:scale-102'
                  }`}
                  style={{
                    transform: `rotateX(-8deg) translateZ(${index * 20}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                  onMouseEnter={() => setActiveChallenge(challenge.id)}
                  onMouseLeave={() => setActiveChallenge(null)}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
                      challenge.color
                    } ${
                      isActive ? 'opacity-100' : 'opacity-60'
                    } transition-opacity`}
                  />
                  <div className='relative flex items-center gap-4'>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-primary/20' : 'bg-muted/50'
                      } transition-colors`}
                    >
                      <challenge.icon
                        className={`w-6 h-6 ${
                          isActive ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      />
                    </div>
                    <span
                      className={`font-semibold ${
                        isActive ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {challenge.description}
                    </span>
                  </div>
                  {isActive && (
                    <div className='absolute -right-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary animate-pulse' />
                  )}
                </div>
              )
            })}
          </div>

          {/* Decorative elements */}
          <div className='absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl' />
          <div className='absolute -bottom-10 -right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl' />
        </div>
      </div>
    </section>
  )
}
