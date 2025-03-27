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
import ComingSoon from '@/components/ComingSoon';

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

            {/* Company pages */}
            <Route path="/about" element={<ComingSoon title="About Us" description="Learn more about our team and mission. This page is under development. This is a conceptual demonstration, not the final product." />} />
            <Route path="/blog" element={<ComingSoon title="Blog" description="Our blog is coming soon with articles about ADHD, productivity, and neurodivergence. This is a conceptual demonstration, not the final product." />} />
            <Route path="/privacy" element={<ComingSoon title="Privacy Policy" description="Our privacy policy is being developed. This is a conceptual demonstration, not the final product." />} />
            <Route path="/terms" element={<ComingSoon title="Terms of Service" description="Our terms of service are being developed. This is a conceptual demonstration, not the final product." />} />

            {/* Coming soon routes */}
            <Route path="/dashboard" element={<InteractiveDemo />} />
            <Route path="/sign-in" element={<InteractiveDemo />} />
            <Route path="/sign-up" element={<InteractiveDemo />} />
            <Route path="/calendar" element={<ComingSoon title="Calendar Coming Soon" description="The calendar functionality is currently under development. This is a conceptual demonstration, not the final product." />} />
            <Route path="/ai-coach" element={<ComingSoon title="AI Coach Coming Soon" description="The AI coaching functionality is currently under development. This is a conceptual demonstration, not the final product." />} />
            <Route path="/task-breakdown" element={<ComingSoon title="Task Breakdown Coming Soon" description="The task breakdown functionality is currently under development. This is a conceptual demonstration, not the final product." />} />
            <Route path="/onboarding" element={<ComingSoon title="Onboarding Coming Soon" description="The onboarding process is currently under development. This is a conceptual demonstration, not the final product." />} />
            <Route path="/settings" element={<ComingSoon title="Settings Coming Soon" description="The settings page is currently under development. This is a conceptual demonstration, not the final product." />} />
            <Route path="/past-conversations" element={<ComingSoon title="Past Conversations Coming Soon" description="The conversation history functionality is currently under development. This is a conceptual demonstration, not the final product." />} />

            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
