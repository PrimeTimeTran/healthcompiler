import { Layout } from '@/components/layout/Layout'
import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/hooks/use-toast'
import { Search, ArrowRight, Zap, ExternalLink } from 'lucide-react'

const categories = [
  'All',
  'EHR / EMR',
  'Wearables & Devices',
  'Billing & Payments',
  'Analytics',
  'CRM',
  'Fitness',
  'Lab & Diagnostics',
  'Other',
] as const

type Category = (typeof categories)[number]

interface IntegrationItem {
  name: string
  category: Category[]
  description: string
  connected?: boolean
}

const integrations: IntegrationItem[] = [
  { name: 'Epic', category: ['EHR / EMR'], description: 'Connect patient records from Epic directly into HealthCompiler' },
  { name: 'Cerner', category: ['EHR / EMR'], description: 'Sync clinical data from Oracle Cerner seamlessly' },
  { name: 'eClinicalWorks', category: ['EHR / EMR'], description: 'Pull patient charts and encounters from eClinicalWorks' },
  { name: 'athenaHealth', category: ['EHR / EMR'], description: 'Integrate with athenaHealth for comprehensive care data', connected: true },
  { name: 'DrChrono', category: ['EHR / EMR'], description: 'Access DrChrono EHR data for analytics and reporting' },
  { name: 'AdvancedMD', category: ['EHR / EMR'], description: 'Connect AdvancedMD practice management and EHR data' },
  { name: 'Allscripts', category: ['EHR / EMR'], description: 'Unify Allscripts clinical data into your platform' },
  { name: 'NextGen', category: ['EHR / EMR'], description: 'Integrate NextGen Healthcare records and workflows' },
  { name: 'Netsmart', category: ['EHR / EMR'], description: 'Behavioral health data from Netsmart integrated seamlessly' },
  { name: 'ModMed', category: ['EHR / EMR'], description: 'Specialty-specific EHR data from Modernizing Medicine' },
  { name: 'AkuteHealth', category: ['EHR / EMR'], description: 'Connect AkuteHealth for DPC practice management data', connected: true },
  { name: 'CharmHealth', category: ['EHR / EMR'], description: 'Integrate CharmHealth EHR and practice management' },
  { name: 'Elation', category: ['EHR / EMR'], description: 'Primary care data from Elation Health connected in real time', connected: true },
  { name: 'Cerbo', category: ['EHR / EMR'], description: 'Concierge and DPC practice data from Cerbo EHR' },
  { name: 'ManifestRx', category: ['EHR / EMR'], description: 'Prescription and pharmacy data integration via ManifestRx' },
  { name: 'Azalea Health', category: ['EHR / EMR'], description: 'Rural and community health data from Azalea Health' },
  { name: 'Fitbit', category: ['Wearables & Devices', 'Fitness'], description: 'Track patient activity and wellness data from Fitbit' },
  { name: 'OURA', category: ['Wearables & Devices'], description: 'Sleep and readiness data from OURA Ring integrated' },
  { name: 'Garmin', category: ['Wearables & Devices', 'Fitness'], description: 'Fitness and health metrics from Garmin devices' },
  { name: 'Wahoo', category: ['Wearables & Devices', 'Fitness'], description: 'Cycling and fitness performance data from Wahoo' },
  { name: 'Dexcom', category: ['Wearables & Devices'], description: 'Continuous glucose monitoring data from Dexcom CGM' },
  { name: 'OMRON', category: ['Wearables & Devices'], description: 'Blood pressure and vital sign data from OMRON devices' },
  { name: 'Google Fit', category: ['Wearables & Devices', 'Fitness'], description: 'Aggregate fitness data from Google Fit ecosystem' },
  { name: 'Stripe', category: ['Billing & Payments'], description: 'Payment processing and subscription management via Stripe' },
  { name: 'QuickBooks', category: ['Billing & Payments'], description: 'Accounting and billing data synced from QuickBooks' },
  { name: 'TriNet', category: ['Billing & Payments'], description: 'HR and payroll data integration through TriNet' },
  { name: 'Google Analytics', category: ['Analytics'], description: 'Website and engagement analytics from Google Analytics' },
  { name: 'Google Console', category: ['Analytics'], description: 'Search performance and indexing data from Google Console' },
  { name: 'Insights', category: ['Analytics'], description: 'HealthCompiler native analytics and reporting engine', connected: true },
  { name: 'Quest', category: ['Lab & Diagnostics'], description: 'Lab results and diagnostics data from Quest Diagnostics' },
  { name: 'GoHighLevel', category: ['CRM'], description: 'Marketing automation, CRM, and pipeline management via GoHighLevel' },
  { name: 'HubSpot', category: ['CRM'], description: 'CRM, marketing, and sales hub integration through HubSpot' },
  { name: 'Lemlist', category: ['Other'], description: 'Outreach and email automation powered by Lemlist' },
  { name: 'Hint', category: ['Other'], description: 'DPC membership and billing data from Hint Health', connected: true },
  { name: 'Specter', category: ['Other'], description: 'Market intelligence and data enrichment via Specter' },
]

const getCategoryColor = (cat: Category): string => {
  const colors: Record<string, string> = {
    'EHR / EMR': 'bg-primary/15 text-primary-foreground',
    'Wearables & Devices': 'bg-accent/15 text-accent-foreground',
    'Billing & Payments': 'bg-secondary text-secondary-foreground',
    'Analytics': 'bg-muted text-muted-foreground',
    'Fitness': 'bg-accent/10 text-accent-foreground',
    'CRM': 'bg-primary/12 text-primary-foreground',
    'Lab & Diagnostics': 'bg-primary/10 text-primary-foreground',
    'Other': 'bg-muted text-muted-foreground',
  }
  return colors[cat] || 'bg-muted text-muted-foreground'
}

const Integration = () => {
  const [email, setEmail] = useState('')
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    return integrations.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category.includes(activeCategory)
      const matchesSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast({ title: 'Request submitted!', description: "We'll be in touch about building your integration." })
      setEmail('')
    }
  }

  return (
    <Layout>
      {/* Hero */}
      <section className='pt-20 pb-12 md:pt-28 md:pb-16 bg-background'>
        <div className='container mx-auto px-4 text-center max-w-3xl'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-sm font-medium text-foreground mb-6'>
            <Zap className='w-4 h-4 text-primary' />
            50+ Integrations Available
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-4'>
            Connect with your{' '}
            <span className='text-primary'>existing apps</span>
          </h1>
          <p className='text-lg text-muted-foreground mb-10 max-w-xl mx-auto'>
            Seamlessly integrate with 50+ healthcare and business applications
          </p>
          <div className='relative max-w-lg mx-auto'>
            <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground' />
            <Input
              type='text'
              placeholder='Search integrations...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='h-14 pl-12 text-base bg-card border-border rounded-xl shadow-sm'
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className='sticky top-16 z-30 bg-background/80 backdrop-blur-md border-b border-border'>
        <div className='container mx-auto px-4'>
          <div className='flex gap-2 py-3 overflow-x-auto no-scrollbar'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted/60 text-muted-foreground hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className='py-12 md:py-16 bg-background'>
        <div className='container mx-auto px-4'>
          {filtered.length === 0 ? (
            <div className='text-center py-20 text-muted-foreground'>
              <p className='text-lg'>No integrations found matching your search.</p>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
              {filtered.map((item) => (
                <div
                  key={item.name}
                  className='group bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300'
                >
                  <div className='flex items-start gap-3 mb-3'>
                    <div className='w-11 h-11 rounded-lg bg-muted flex items-center justify-center shrink-0 text-sm font-bold text-muted-foreground'>
                      {item.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className='min-w-0'>
                      <h3 className='font-semibold text-foreground truncate'>{item.name}</h3>
                      <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${getCategoryColor(item.category[0])}`}>
                        {item.category[0]}
                      </span>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2'>
                    {item.description}
                  </p>
                  <div className='flex items-center justify-between'>
                    {item.connected ? (
                      <span className='inline-flex items-center gap-1.5 text-xs font-medium text-primary'>
                        <span className='w-1.5 h-1.5 rounded-full bg-primary' />
                        Connected
                      </span>
                    ) : (
                      <button className='inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline'>
                        Learn More <ExternalLink className='w-3.5 h-3.5' />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className='py-16 md:py-20 bg-primary/5'>
        <div className='container mx-auto px-4 text-center max-w-2xl'>
          <h2 className='text-2xl md:text-3xl font-display font-bold text-foreground mb-3'>
            Don't see your integration?
          </h2>
          <p className='text-lg text-foreground/80 mb-2'>
            We can build it fast.
          </p>
          <p className='text-sm text-muted-foreground mb-8'>
            Our team typically delivers custom integrations within 2–4 weeks.
          </p>
          <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
            <Input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='h-12 text-base bg-card border-border rounded-lg flex-1'
              required
            />
            <Button type='submit' className='h-12 px-6 rounded-lg bg-primary hover:bg-primary/90 font-semibold'>
              Request Integration <ArrowRight className='w-4 h-4 ml-1' />
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Integration
