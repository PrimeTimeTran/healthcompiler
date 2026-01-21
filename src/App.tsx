import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import Index from './pages/Index'
import Capabilities from './pages/Capabilities'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Contact from './pages/Contact'
import Integration from './pages/Integration'
import FDE from './pages/FDE'
import Partners from './pages/Partners'
import Infera from './pages/Infera'
import Apex from './pages/Apex'
import ApexProfile from './pages/ApexProfile'
import GetFeatured from './pages/GetFeatured'
import HCCSuspecting from './pages/HCCSuspecting'
import MIPSPerformance from './pages/MIPSPerformance'
import HEDISQuality from './pages/HEDISQuality'
import AIReceptionist from './pages/AIReceptionist'
import WhoWeServe from './pages/WhoWeServe'
import DirectPrimaryCare from './pages/DirectPrimaryCare'
import DPCNetworks from './pages/DPCNetworks'
import MedicalWeightLoss from './pages/MedicalWeightLoss'
import ConciergeMedicine from './pages/ConciergeMedicine'
import FunctionalMedicine from './pages/FunctionalMedicine'
import Employers from './pages/Employers'
import EmployerAnalytics from './pages/EmployerAnalytics'
import HealthOutcomes from './pages/HealthOutcomes'
import Surveys from './pages/Surveys'
import ACOs from './pages/ACOs'
import UrgentCare from './pages/UrgentCare'
import BrokersAdvisors from './pages/BrokersAdvisors'
import ManagedServiceOrgs from './pages/ManagedServiceOrgs'
import FAQs from './pages/FAQs'
import NewsEvents from './pages/NewsEvents'
import Whitepaper from './pages/Whitepaper'
import Blogs from './pages/Blogs'
import BlogPost from './pages/BlogPost'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
import Careers from './pages/Careers'
import DirectPrimaryCareGuide from './pages/guide/DirectPrimaryCareGuide'
import DirectSpecialtyCareGuide from './pages/guide/DirectSpecialtyCareGuide'
import SelfFundedHealthPlansGuide from './pages/guide/SelfFundedHealthPlansGuide'
import DPCSummit2025 from './pages/articles/DPCSummit2025'
import AkuteHealthPartnership from './pages/articles/AkuteHealthPartnership'
import HarnessingDataFreeMarket from './pages/articles/HarnessingDataFreeMarket'
import HintPartnership from './pages/articles/HintPartnership'
import FMMAMembership from './pages/articles/FMMAMembership'
import ElationPartnership from './pages/articles/ElationPartnership'
import AnalyticsExpansion from './pages/articles/AnalyticsExpansion'
import RosettaFest2024 from './pages/articles/RosettaFest2024'
import HintSummit2025 from './pages/articles/HintSummit2025'
import Marketing from './pages/Marketing'
import Developer from './pages/Developer'
import Form from './pages/Form'
import BookADemo from './pages/BookADemo'
import Pediatrics from './pages/Pediatrics'
import MarketingAutomation from './pages/MarketingAutomation'
import AICallTriaging from './pages/AICallTriaging'
import BrokersAndAdvisors from './pages/BrokersAndAdvisors'
import Captives from './pages/Captives'
import EmployersLoop from './pages/EmployersLoop'
import TPAHealthPlans from './pages/TPAHealthPlans'
import DesignKit from './pages/DesignKit/DesignKit'
import CINs from './pages/CINs'
import Payors from './pages/Payors'
import IndependentPrimaryCare from './pages/IndependentPrimaryCare'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path='/'
            element={<Index />}
          />
          <Route
            path='/design-kit'
            element={<DesignKit />}
          />
          <Route
            path='/brokers-advisors'
            element={<BrokersAndAdvisors />}
          />
          <Route
            path='/cins'
            element={<CINs />}
          />
          <Route
            path='/payors'
            element={<Payors />}
          />
          <Route
            path='/captives'
            element={<Captives />}
          />
          <Route
            path='/employers-loop'
            element={<EmployersLoop />}
          />
          <Route
            path='/tpa-health-plans'
            element={<TPAHealthPlans />}
          />
          <Route
            path='/book-a-demo'
            element={<BookADemo />}
          />
          <Route
            path='/marketing'
            element={<Marketing />}
          />
          <Route
            path='/marketing-automation'
            element={<MarketingAutomation />}
          />
          <Route
            path='/ai-call-triaging'
            element={<AICallTriaging />}
          />
          <Route
            path='/solutions/pediatrics'
            element={<Pediatrics />}
          />
          <Route
            path='/form'
            element={<Form />}
          />
          <Route
            path='/developer'
            element={<Developer />}
          />
          <Route
            path='/platform'
            element={<Capabilities />}
          />
          <Route
            path='/solutions'
            element={<Solutions />}
          />
          <Route
            path='/partners'
            element={<Partners />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='/platform/integration'
            element={<Integration />}
          />
          <Route
            path='/platform/fde'
            element={<FDE />}
          />
          <Route
            path='/platform/infera'
            element={<Infera />}
          />
          <Route
            path='/resources/apex'
            element={<Apex />}
          />
          <Route
            path='/resources/faqs'
            element={<FAQs />}
          />
          <Route
            path='/resources/news-events'
            element={<NewsEvents />}
          />
          <Route
            path='/resources/whitepaper'
            element={<Whitepaper />}
          />
          <Route
            path='/resources/blogs'
            element={<Blogs />}
          />
          <Route
            path='/resources/blogs/:slug'
            element={<BlogPost />}
          />
          <Route
            path='/apex-magazine/:slug'
            element={<ApexProfile />}
          />
          <Route
            path='/solutions/hcc-suspecting'
            element={<HCCSuspecting />}
          />
          <Route
            path='/solutions/mips'
            element={<MIPSPerformance />}
          />
          <Route
            path='/solutions/hedis'
            element={<HEDISQuality />}
          />
          <Route
            path='/solutions/ai-receptionist'
            element={<AIReceptionist />}
          />
          <Route
            path='/who-we-serve/direct-primary-care'
            element={<DirectPrimaryCare />}
          />
          <Route
            path='/who-we-serve/direct-primary-care-networks'
            element={<DPCNetworks />}
          />
          <Route
            path='/medical-weight-loss'
            element={<MedicalWeightLoss />}
          />
          <Route
            path='/solutions/concierge'
            element={<ConciergeMedicine />}
          />
          <Route
            path='/solutions/functional-medicine'
            element={<FunctionalMedicine />}
          />
          <Route
            path='/solutions/employers'
            element={<Employers />}
          />
          <Route
            path='/who-we-serve/employer-analytics'
            element={<EmployerAnalytics />}
          />
          <Route
            path='/solutions/health-outcomes'
            element={<HealthOutcomes />}
          />
          <Route
            path='/solutions/surveys'
            element={<Surveys />}
          />
          <Route
            path='/acos'
            element={<ACOs />}
          />
          <Route
            path='/who-we-serve/independent-primary-care'
            element={<IndependentPrimaryCare />}
          />
          <Route
            path='/solutions/urgent-care'
            element={<UrgentCare />}
          />
          <Route
            path='/solutions/brokers-advisors'
            element={<BrokersAdvisors />}
          />
          <Route
            path='/solutions/managed-service-orgs'
            element={<ManagedServiceOrgs />}
          />
          <Route
            path='/get-featured-form'
            element={<GetFeatured />}
          />
          <Route
            path='/who-we-serve'
            element={<WhoWeServe />}
          />
          <Route
            path='/terms'
            element={<Terms />}
          />
          <Route
            path='/privacy'
            element={<Privacy />}
          />
          <Route
            path='/resources/guide/direct-primary-care'
            element={<DirectPrimaryCareGuide />}
          />
          <Route
            path='/resources/guide/direct-speciality-care'
            element={<DirectSpecialtyCareGuide />}
          />
          <Route
            path='/resources/guide/self-funded-health-plans'
            element={<SelfFundedHealthPlansGuide />}
          />
          <Route
            path='/resources/news-events/dpc-summit-2025'
            element={<DPCSummit2025 />}
          />
          <Route
            path='/resources/news-events/akute-health-partnership'
            element={<AkuteHealthPartnership />}
          />
          <Route
            path='/resources/news-events/harnessing-data-free-market'
            element={<HarnessingDataFreeMarket />}
          />
          <Route
            path='/resources/news-events/hint-partnership'
            element={<HintPartnership />}
          />
          <Route
            path='/resources/news-events/fmma-membership'
            element={<FMMAMembership />}
          />

          <Route
            path='/resources/news-events/elation-partnership'
            element={<ElationPartnership />}
          />
          <Route
            path='/resources/news-events/analytics-expansion'
            element={<AnalyticsExpansion />}
          />
          <Route
            path='/resources/news-events/rosettafest-2024'
            element={<RosettaFest2024 />}
          />
          <Route
            path='/resources/news-events/hint-summit-rosettafest-2025'
            element={<HintSummit2025 />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
          <Route
            path='/careers'
            element={<Careers />}
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
