import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              How NeuroSpark Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our ADHD-friendly approach uses AI to break down overwhelming tasks into manageable microtasks, designed for your unique brain.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/sign-up">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/features">
                  View Features
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <HowItWorks />

        {/* Detailed Explanation */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
              The Science Behind NeuroSpark
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">ADHD-Friendly Design</h3>
                <p className="text-muted-foreground">
                  Our interface is specifically designed for neurodivergent brains. We minimize
                  distractions, use clear visual hierarchies, and provide immediate feedback to
                  keep you engaged and focused.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Reduced cognitive load with simplified UI</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Clear visual cues and consistent navigation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Immediate feedback and positive reinforcement</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">AI-Powered Task Breakdown</h3>
                <p className="text-muted-foreground">
                  Our advanced AI uses techniques from cognitive behavioral therapy and ADHD
                  research to break down overwhelming tasks into 15-minute microtasks
                  that feel achievable and maintain dopamine levels.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Custom GPT model trained on ADHD task management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Personalized difficulty calibration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Progressive challenge to build momentum</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials (Placeholder) */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-12">
              Success Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <p className="italic mb-4">
                  "NeuroSpark has completely changed how I approach my work. Breaking tasks into
                  15-minute chunks made everything feel possible."
                </p>
                <p className="font-medium">- Alex K.</p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <p className="italic mb-4">
                  "As someone with ADHD, I've always struggled with starting big projects. This app
                  has been a game-changer for my productivity."
                </p>
                <p className="font-medium">- Jamie T.</p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <p className="italic mb-4">
                  "The AI coach feels like having a supportive friend who understands how my brain works.
                  It's like it knows exactly what I need to hear."
                </p>
                <p className="font-medium">- Sam R.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Transform Your Productivity?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start breaking down your big goals into achievable microtasks today.
            </p>
            <Button asChild size="lg">
              <Link to="/sign-up">
                Get Started For Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
