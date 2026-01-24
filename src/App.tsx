import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Solutions from "./pages/Solutions";
import Media from "./pages/Media";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Solution subpages
import ProjectDevelopment from "./pages/solutions/ProjectDevelopment";
import EngineeringConstruction from "./pages/solutions/EngineeringConstruction";
import RD from "./pages/solutions/RD";
import CNGRetail from "./pages/solutions/CNGRetail";
import BioGas from "./pages/solutions/BioGas";
import OM from "./pages/solutions/OM";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/project-development" element={<ProjectDevelopment />} />
          <Route path="/solutions/engineering-construction" element={<EngineeringConstruction />} />
          <Route path="/solutions/rd" element={<RD />} />
          <Route path="/solutions/cng-retail" element={<CNGRetail />} />
          <Route path="/solutions/bio-gas" element={<BioGas />} />
          <Route path="/solutions/om" element={<OM />} />
          <Route path="/media" element={<Media />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;