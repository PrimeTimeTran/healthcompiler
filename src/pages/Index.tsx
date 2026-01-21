import { Suspense } from 'react'
import { Layout } from '@/components/layout/Layout'
import { HeroSectionAlt } from '@/components/home/HeroSectionAlt'
import { UnifiedRecordSection } from '@/components/home/UnifiedRecordSection'
import { AIInsightsSection } from '@/components/home/AIInsightsSection'
import { SmartSignalsSection } from '@/components/home/SmartSignalsSection'
import { ActionableReportingSection } from '@/components/home/ActionableReportingSection'
import { PlatformCapabilitiesGrid } from '@/components/home/PlatformCapabilitiesGrid'
import { TrustComplianceStrip } from '@/components/home/TrustComplianceStrip'
import { PlatformCTASection } from '@/components/home/PlatformCTASection'
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
        {/* New platform sections */}
        <UnifiedRecordSection />
        <AIInsightsSection />
        <SmartSignalsSection />
        <ActionableReportingSection />
        <PlatformCapabilitiesGrid />
        <TrustComplianceStrip />
        <PlatformCTASection />
        {/* Existing sections */}
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
