import { AlertTriangle, DollarSign, FileX, ShieldAlert } from 'lucide-react'

const painPoints = [
  { icon: FileX, label: 'Fragmented reports from TPA, PBM, and stop-loss carriers' },
  { icon: DollarSign, label: '20–40% of compensation budget spent on healthcare blindly' },
  { icon: ShieldAlert, label: 'Fiduciary risk from inability to defend spending decisions' },
  { icon: AlertTriangle, label: 'Guessing at the single biggest P&L line item after payroll' },
]

export function TheProblemSection() {
  return (
    <section className='py-20 md:py-28 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-sm font-medium text-destructive mb-6'>
            The Challenge
          </div>

          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Most Employers Are Flying Blind on Healthcare Spend
          </h2>

          <div className='space-y-6 text-muted-foreground leading-relaxed text-lg'>
            <p>
              Here's the reality for most self-funded employers: you're spending 20–40% of your total compensation budget on healthcare, and you don't really know what you're getting for it. Your TPA sends one report. Your PBM sends another. Your stop-loss carrier has their own version of the truth. And by the time anyone stitches it together, open enrollment is already over.
            </p>
            <p>
              That's not just inconvenient — it's a fiduciary risk. When you can't see where the money goes, you can't defend how it's spent. And when you can't connect health outcomes to plan design choices, you're guessing at the single biggest line item on your P&L after payroll.
            </p>
            <p className='font-semibold text-foreground'>
              HealthCompiler was built to change that.
            </p>
          </div>

          <div className='grid sm:grid-cols-2 gap-4 mt-10'>
            {painPoints.map((point, i) => (
              <div key={i} className='flex items-start gap-3 p-4 rounded-xl bg-card border'>
                <div className='w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0'>
                  <point.icon className='w-5 h-5 text-destructive' />
                </div>
                <span className='text-sm text-muted-foreground'>{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
