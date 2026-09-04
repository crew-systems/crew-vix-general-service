import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ServiceAreasIndex } from "./pages/ServiceAreasIndex";
import { ServiceAreaPage } from "./pages/ServiceAreaPage";
import { ServicesIndex } from "./pages/ServicesIndex";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { ScrollToTop } from "./components/ScrollToTop";

import { ErrorBoundary } from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<ServicesIndex />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/service-areas" element={<ServiceAreasIndex />} />
              <Route path="/service-areas/:slug" element={<ServiceAreaPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/estimate" element={<ContactPage />} />
              <Route path="/quote" element={<ContactPage />} />
              <Route path="/free-estimate" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
