import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Pages
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import Onboarding from '@/pages/Onboarding';
import Dashboard from '@/pages/Dashboard';
import Features from '@/pages/Features';
import HowItWorks from '@/pages/HowItWorks';
import FAQ from '@/pages/FAQ';
import Settings from '@/pages/Settings';
import NotFound from '@/pages/NotFound';
import CreateCommitment from './pages/CreateCommitment';
import Calendar from './pages/Calendar';
import AiCoach from './pages/AiCoach';
import PastConversations from './pages/PastConversations';
import TaskBreakdown from './pages/TaskBreakdown';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faq" element={<FAQ />} />

            {/* Protected routes (in a real app, these would be protected by auth) */}
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />

            {/* Additional routes from original app */}
            <Route path="/create-commitment" element={<CreateCommitment />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/ai-coach" element={<AiCoach />} />
            <Route path="/past-conversations" element={<PastConversations />} />
            <Route path="/task/:id" element={<TaskBreakdown />} />

            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
