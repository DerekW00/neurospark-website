import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, CheckCircle, Clock, MessageSquare, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              By ADHD brains, for ADHD brains
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Your Commitment Coach Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              NeuroSpark functions like a personal commitment coach that checks in, bugs you when needed, and provides emotional support — all at a fraction of the cost of traditional coaching.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/try-it-now">
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

        {/* Coaching Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
              How Your Commitment Coach Helps You Succeed
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Overcomes ADHD Paralysis</h3>
                <p className="text-muted-foreground">
                  Our coach understands the executive function challenges that cause task paralysis.
                  We help convert overwhelming projects into tiny, dopamine-friendly microtasks that
                  bypass the brain's resistance to starting.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Reduces overwhelm through strategic task breakdown</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Creates clear "next action" steps when you're stuck</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Adjusts task difficulty based on your current energy</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Combats Time Blindness</h3>
                <p className="text-muted-foreground">
                  ADHD often comes with a distorted perception of time. Our coach makes time
                  visible and concrete through visual scheduling, realistic time estimates,
                  and smart reminders at exactly the right moments.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Visualizes time commitments on your calendar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Prevents overcommitment with realistic scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Includes buffer time to accommodate ADHD time estimation issues</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Persistent Accountability</h3>
                <p className="text-muted-foreground">
                  The ADHD brain can quickly forget commitments once the novelty wears off.
                  Our coach maintains steady accountability through persistent check-ins
                  that adapt to your response patterns and needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Morning, mid-day, and evening check-ins</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Non-judgmental follow-ups when you get off track</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Celebrates progress to maintain dopamine motivation</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Energy-Aware Support</h3>
                <p className="text-muted-foreground">
                  ADHD often involves inconsistent energy and motivation levels. Your coach
                  adapts to these fluctuations, providing extra support during low periods
                  and helping you capitalize on high-energy times.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Quick mood and energy check-ins</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Adjusts expectations during low-energy periods</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Suggests optimal task types based on your current state</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Built It */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Built By People Who Understand
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We created NeuroSpark because we needed it ourselves. As people with ADHD, we understand the frustration of forgetting commitments, struggling with overwhelming tasks, and inconsistent motivation.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="italic mb-6">
                    "Traditional ADHD coaching changed my life, but at $150 per session, it wasn't sustainable. I wanted to create a tool that provided the same quality of support — breaking down tasks, consistent check-ins, emotional support — at a price anyone could afford."
                  </p>
                  <p className="font-medium">- Alex, NeuroSpark Founder (diagnosed with ADHD at 28)</p>
                </div>
                <div className="flex-1">
                  <p className="italic mb-6">
                    "What separates NeuroSpark from typical productivity apps is that we don't give up on you. We understand what it's like to be paralyzed by a task or to completely forget a commitment once the novelty wears off. That's why we built persistent check-ins and emotional support directly into the experience."
                  </p>
                  <p className="font-medium">- Sam, Lead Developer (living with ADHD for 15+ years)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-12">
              Success Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <p className="italic mb-4">
                  "I tried multiple task managers, but I'd always abandoned them after a week. NeuroSpark is different because it feels like having a coach who actually cares if I complete my tasks. The check-ins keep me accountable."
                </p>
                <p className="font-medium">- Alex K., ADHD Adult</p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <p className="italic mb-4">
                  "As someone with severe executive dysfunction, starting tasks was my biggest hurdle. The way NeuroSpark breaks down my projects into tiny steps makes starting so much easier. It's like having a coach say 'just do this one small thing.'"
                </p>
                <p className="font-medium">- Jamie T., ADHD Student</p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <p className="italic mb-4">
                  "I couldn't afford weekly coaching sessions, but NeuroSpark gives me that same support for a fraction of the cost. The non-judgmental check-ins when I miss deadlines are exactly what my rejection-sensitive brain needs."
                </p>
                <p className="font-medium">- Sam R., Professional with ADHD</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready for a Commitment Coach in Your Pocket?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the benefits of personalized ADHD coaching at a fraction of the cost. We'll help you break down tasks, stay accountable, and actually finish what you start.
            </p>
            <Button asChild size="lg">
              <Link to="/waitlist">
                Join Our Waitlist
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
