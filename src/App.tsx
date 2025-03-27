import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Pages
import Home from '@/pages/Home';
import Features from '@/pages/Features';
import HowItWorks from '@/pages/HowItWorks';
import FAQ from '@/pages/FAQ';
import NotFound from '@/pages/NotFound';
import Demo from '@/pages/Demo';
import Pricing from '@/pages/Pricing';
import ContactUs from '@/pages/ContactUs';
import InteractiveDemo from '@/pages/InteractiveDemo';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            {/* Product presentation routes */}
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/interactive-demo" element={<InteractiveDemo />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
