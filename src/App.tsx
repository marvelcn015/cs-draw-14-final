
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Food from "./pages/Food";
import Housing from "./pages/Housing";
import Transport from "./pages/Transport";
import Education from "./pages/Education";
import Entertainment from "./pages/Entertainment";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/cs-draw-14-final">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/food" element={<Food />} />
          <Route path="/housing" element={<Housing />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/education" element={<Education />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
