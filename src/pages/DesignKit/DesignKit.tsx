import { Layout } from '@/components/layout/Layout'
import {
  ShowcaseThemes,
  ShowcaseColors,
  ShowcaseForms,
  ShowcaseButtons,
  ShowcaseTypography,
  ShowcaseBadges,
} from './showcases'

const DesignKit = () => {
  return (
    <Layout>
      <div className='fixed top-16 md:top-20 left-0 right-0 z-[10000] bg-background border-b'>
        <ShowcaseThemes />
      </div>
      <div className='h-[160px]' />
      <ShowcaseBadges />
      <ShowcaseButtons />
      <ShowcaseTypography />
      <ShowcaseColors />
      <ShowcaseForms />
    </Layout>
  )
}

export default DesignKit
