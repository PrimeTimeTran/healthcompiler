import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { WhatWeDoSection } from '@/components/home/WhatWeDoSection';
import { HowWeHelpSection } from '@/components/home/HowWeHelpSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <HowWeHelpSection />
      <IndustriesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
