
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectFinance from "./pages/ProjectFinance";
import Projects from "./pages/Projects";
import AssetManagement from "./pages/AssetManagement";
import Blog from "./pages/Blog";
import MergerAcquisitions from "./pages/MergerAcquisitions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project-finance" element={<ProjectFinance />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/asset-management" element={<AssetManagement />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/merger-acquisitions" element={<MergerAcquisitions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
