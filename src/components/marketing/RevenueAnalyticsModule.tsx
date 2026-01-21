import { useEffect, useState } from 'react'
import { TrendingUp, Users, DollarSign, BarChart2, PieChart } from 'lucide-react'

const RevenueAnalyticsModule = () => {
  const [animateCharts, setAnimateCharts] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateCharts(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('revenue-analytics-module')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const insights = [
    'Where new patient revenue is coming from',
    'Which campaigns generate the highest-value patients',
    'Referral partners driving real dollars',
    'Marketing spend vs revenue return',
    'Organic vs paid vs referral mix',
  ]

  const chartBars = [
    { label: 'Organic', value: 65, color: 'bg-primary' },
    { label: 'Paid', value: 45, color: 'bg-accent' },
    { label: 'Referral', value: 80, color: 'bg-green-500' },
    { label: 'Email', value: 35, color: 'bg-blue-500' },
  ]

  const funnelSteps = [
    { label: 'Inquiries', value: 1240, width: '100%' },
    { label: 'Appointments', value: 680, width: '55%' },
    { label: 'Visits', value: 520, width: '42%' },
    { label: 'Revenue', value: '$156K', width: '35%' },
  ]

  return (
    <section id='revenue-analytics-module' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Revenue Intelligence for Modern Practices
          </h2>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left - Insights */}
          <div className='space-y-4'>
            {insights.map((insight, index) => (
              <div
                key={index}
                className='flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50'
              >
                <div className='w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0'>
                  <TrendingUp className='w-4 h-4 text-primary' />
                </div>
                <span className='text-foreground'>{insight}</span>
              </div>
            ))}
          </div>

          {/* Right - Animated Dashboard */}
          <div className='bg-card rounded-2xl border border-border p-6 shadow-lg'>
            <div className='flex items-center justify-between mb-6'>
              <div className='flex items-center gap-2'>
                <BarChart2 className='w-5 h-5 text-primary' />
                <span className='font-semibold text-foreground'>Revenue Dashboard</span>
              </div>
              <span className='text-xs text-muted-foreground'>Live Preview</span>
            </div>

            {/* Revenue by Source Chart */}
            <div className='mb-6'>
              <div className='text-sm text-muted-foreground mb-3'>Revenue by Source</div>
              <div className='space-y-3'>
                {chartBars.map((bar, index) => (
                  <div key={index} className='space-y-1'>
                    <div className='flex justify-between text-xs'>
                      <span className='text-foreground'>{bar.label}</span>
                      <span className='text-muted-foreground'>${Math.round(bar.value * 1.2)}K</span>
                    </div>
                    <div className='h-2 bg-muted rounded-full overflow-hidden'>
                      <div
                        className={`h-full ${bar.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: animateCharts ? `${bar.value}%` : '0%',
                          transitionDelay: `${index * 150}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversion Funnel */}
            <div className='mb-6'>
              <div className='text-sm text-muted-foreground mb-3'>Conversion Funnel</div>
              <div className='space-y-2'>
                {funnelSteps.map((step, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-3'
                    style={{
                      opacity: animateCharts ? 1 : 0,
                      transform: animateCharts ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `all 0.5s ease-out ${index * 100 + 400}ms`,
                    }}
                  >
                    <div
                      className='h-8 bg-gradient-to-r from-primary/80 to-primary/40 rounded flex items-center px-3'
                      style={{ width: step.width }}
                    >
                      <span className='text-xs text-white font-medium truncate'>{step.label}</span>
                    </div>
                    <span className='text-sm font-semibold text-foreground'>{step.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Trend */}
            <div>
              <div className='text-sm text-muted-foreground mb-3'>Monthly Revenue Trend</div>
              <div className='flex items-end justify-between h-16 gap-1'>
                {[40, 55, 45, 70, 65, 85, 75, 90, 80, 95, 88, 100].map((height, index) => (
                  <div
                    key={index}
                    className='flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t transition-all duration-700 ease-out'
                    style={{
                      height: animateCharts ? `${height}%` : '0%',
                      transitionDelay: `${index * 50 + 800}ms`,
                    }}
                  />
                ))}
              </div>
              <div className='flex justify-between text-xs text-muted-foreground mt-1'>
                <span>Jan</span>
                <span>Dec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RevenueAnalyticsModule
