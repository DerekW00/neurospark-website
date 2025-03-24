import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Transform How You Achieve Your Goals?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join NeuroSpark today and experience a new approach to managing tasks and commitments.
        </p>
        <Button size="lg" className="group">
          Get Started for Free
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
