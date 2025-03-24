
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-pulse-gentle">
          ADHD-Friendly Commitment Coach
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-in">
          Turn Your Goals Into <span className="text-primary">Achievable Steps</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          We use AI to break down your goals into manageable microtasks, making it easier to start, focus, and finish what matters to you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Button size="lg" className="group">
            Create Your First Commitment
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline">
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
