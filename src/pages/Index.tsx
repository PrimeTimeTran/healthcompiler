import { Suspense } from 'react'
import { Layout } from '@/components/layout/Layout'
import { HeroSectionAlt } from '@/components/home/HeroSectionAlt'
import { WhatWeDoSection } from '@/components/home/WhatWeDoSection'
import { HowWeHelpSection } from '@/components/home/HowWeHelpSection'
import { IndustriesSection } from '@/components/home/IndustriesSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { CTASection } from '@/components/home/CTASection'

const Index = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSectionAlt />
        <WhatWeDoSection />
        <HowWeHelpSection />
        <IndustriesSection />
        <CTASection />
        <TestimonialsSection />
      </Suspense>
    </Layout>
  )
}

export default Index
