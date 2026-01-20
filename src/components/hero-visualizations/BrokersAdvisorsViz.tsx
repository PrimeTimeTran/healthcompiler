import ArcHeroViz from '@/components/hero-visualizations/ArcHeroViz'

const BrokersAdvisorsViz = () => {
  return (
    <ArcHeroViz
      id='brokers-advisors'
      centerTitle='Client'
      centerSubtitle='Portfolio'
      segments={[
        { label: 'Cost Analysis' },
        { label: 'Utilization' },
        { label: 'Risk Profile' },
        { label: 'ROI Tracking' },
      ]}
    />
  )
}

export default BrokersAdvisorsViz
