import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import Index from "./pages/Index";
import Capabilities from "./pages/Capabilities";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Integration from "./pages/Integration";
import FDE from "./pages/FDE";
import Partners from "./pages/Partners";
import Infera from "./pages/Infera";
import Apex from "./pages/Apex";
import ApexProfile from "./pages/ApexProfile";
import GetFeatured from "./pages/GetFeatured";
import HCCSuspecting from "./pages/HCCSuspecting";
import MIPSPerformance from "./pages/MIPSPerformance";
import HEDISQuality from "./pages/HEDISQuality";
import AIReceptionist from "./pages/AIReceptionist";
import WhoWeServe from "./pages/WhoWeServe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/platform/integration" element={<Integration />} />
          <Route path="/platform/fde" element={<FDE />} />
          <Route path="/platform/infera" element={<Infera />} />
          <Route path="/resources/apex" element={<Apex />} />
          <Route path="/apex-magazine/:slug" element={<ApexProfile />} />
          <Route path="/solutions/hcc-suspecting" element={<HCCSuspecting />} />
          <Route path="/solutions/mips" element={<MIPSPerformance />} />
          <Route path="/solutions/hedis" element={<HEDISQuality />} />
          <Route path="/solutions/ai-receptionist" element={<AIReceptionist />} />
          <Route path="/get-featured-form" element={<GetFeatured />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
