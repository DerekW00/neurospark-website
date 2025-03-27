import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import InterestForm from './InterestForm';

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5 rounded-lg mx-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Your Affordable Commitment Coach Awaits</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Experience the benefits of personalized ADHD coaching at a fraction of the cost. Get the accountability, support, and structure your brain needs.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/try-it-now">
                Try It Free Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div>
            <InterestForm
              title="Join Our Limited Waitlist"
              description="Our exclusive mobile app is coming soon. Secure your spot now for early access when we launch."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
