import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VirtualTour from "./pages/VirtualTour";
import CulturalCalendar from "./pages/CulturalCalendar";
import Archives from "./pages/Archives";
import MonasteriesList from "./pages/MonasteriesList";
import Gallery from "./pages/Gallery";
import Artifacts from "./pages/Artifacts";
import SikkimInfo from "./pages/SikkimInfo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/cultural-calendar" element={<CulturalCalendar />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/monasteries-list" element={<MonasteriesList />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/artifacts" element={<Artifacts />} />
          <Route path="/sikkim-info" element={<SikkimInfo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
