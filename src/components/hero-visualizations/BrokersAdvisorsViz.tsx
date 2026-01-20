import { useState, useEffect } from 'react'

const BrokersAdvisorsViz = () => {
  const [metrics, setMetrics] = useState([
    { name: 'Cost Analysis', status: 0 },
    { name: 'Risk Profile', status: 0 },
    { name: 'Utilization', status: 0 },
    { name: 'Savings', status: 0 },
    { name: 'Claims Data', status: 0 },
    { name: 'Benchmarks', status: 0 },
    { name: 'Outcomes', status: 0 },
    { name: 'Compliance', status: 0 },
    { name: 'ROI Tracking', status: 0 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          status: Math.min(2, metric.status + (Math.random() > 0.6 ? 1 : 0)),
        }))
      )
    }, 800)

    const resetInterval = setInterval(() => {
      setMetrics((prev) => prev.map((m) => ({ ...m, status: 0 })))
    }, 8000)

    return () => {
      clearInterval(interval)
      clearInterval(resetInterval)
    }
  }, [])

  const getStatusColor = (status: number) => {
    if (status === 0)
      return { bg: 'bg-red-100', border: 'border-red-300', dot: 'bg-red-500' }
    if (status === 1)
      return {
        bg: 'bg-yellow-100',
        border: 'border-yellow-300',
        dot: 'bg-yellow-500',
      }
    return {
      bg: 'bg-green-100',
      border: 'border-green-300',
      dot: 'bg-green-500',
    }
  }

  return (
    <div className='relative h-[450px] flex items-center justify-center'>
      <div className='relative w-full max-w-sm'>
        {/* Header */}
        <div className='bg-white rounded-t-2xl border border-b-0 border-border p-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='font-semibold text-foreground'>
                Advisor Dashboard
              </h3>
              <p className='text-xs text-muted-foreground'>
                Real-time client insights
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-xs text-muted-foreground'>Live</span>
              <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className='bg-white rounded-b-2xl border border-border p-4 shadow-xl'>
          <div className='grid grid-cols-3 gap-3'>
            {metrics.map((metric, idx) => {
              const colors = getStatusColor(metric.status)
              return (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border-2 transition-all duration-500 ${colors.bg} ${colors.border}`}
                  style={{
                    animation:
                      metric.status === 2
                        ? 'pulse 2s ease-in-out infinite'
                        : 'none',
                  }}
                >
                  <div className='flex items-center gap-2 mb-2'>
                    <div
                      className={`w-2 h-2 rounded-full ${colors.dot}`}
                    />
                    <span className='text-[10px] font-medium text-foreground/70 truncate'>
                      {metric.name}
                    </span>
                  </div>
                  <div className='text-lg font-bold text-foreground'>
                    {metric.status === 0
                      ? '—'
                      : metric.status === 1
                      ? '~'
                      : '✓'}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Summary bar */}
          <div className='mt-4 pt-4 border-t border-border'>
            <div className='flex items-center justify-between text-xs text-muted-foreground mb-2'>
              <span>Client Portfolio Score</span>
              <span className='font-semibold text-foreground'>
                {Math.round(
                  (metrics.filter((m) => m.status === 2).length /
                    metrics.length) *
                    100
                )}
                %
              </span>
            </div>
            <div className='h-2 bg-slate-100 rounded-full overflow-hidden'>
              <div
                className='h-full bg-gradient-to-r from-primary to-accent transition-all duration-700 rounded-full'
                style={{
                  width: `${
                    (metrics.filter((m) => m.status === 2).length /
                      metrics.length) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrokersAdvisorsViz
