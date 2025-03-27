import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Calendar, CheckCircle, Clock, MessageSquare, Sparkles, Bell, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              Created by a team with ADHD
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              A Personal Commitment Coach That Actually Gets You
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              NeuroSpark is more than just an app — it's an affordable commitment coach that provides the accountability, structure, and emotional support your ADHD brain needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/sign-up">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/how-it-works">
                  See How It Works
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
              Your Coach's Toolkit
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Task Breakdown Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  Just like a real coach, we help you overcome paralyzing overwhelm by breaking tasks into 15-minute microtasks that bypass executive dysfunction.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Transforms overwhelming goals into immediate next steps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Adjusts difficulty based on your current energy level</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Time Blindness Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  We help you visualize time realistically, just like a coach would walk you through planning your schedule with buffer time included.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Visual calendar that makes abstract time concrete</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Prevents overcommitment by making time limits visible</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Persistent Check-ins</h3>
                <p className="text-muted-foreground mb-4">
                  Unlike apps that give up on you, we'll persistently follow up like a real coach would — checking in at the right moments with supportive accountability.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Morning prep, mid-day check-ins, and evening reflection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Non-judgmental follow-ups when you get off track</span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Reminders</h3>
                <p className="text-muted-foreground mb-4">
                  We'll bug you (in a good way!) with well-timed reminders that accommodate the "out of sight, out of mind" challenge of ADHD.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Notifications that arrive when you need them most</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Adjusts based on your response patterns</span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Emotional Support</h3>
                <p className="text-muted-foreground mb-4">
                  Like a coach who understands rejection sensitivity and frustration, we provide encouragement and positive reinforcement throughout your journey.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Non-judgmental responses when plans change</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Celebrates small wins to maintain dopamine rewards</span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Energy-Aware Coaching</h3>
                <p className="text-muted-foreground mb-4">
                  We adapt to your fluctuating energy levels and mood, just as a good coach adjusts strategies based on your current capacity.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Quick energy check-ins to calibrate your day's plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Suggests easier tasks during low-energy periods</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Coach vs App Comparison */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
              The Best of Both Worlds
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-background rounded-lg border p-6 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-4">Traditional ADHD Coach</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Personalized strategies and support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Breaks down tasks into manageable steps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Provides accountability and check-ins</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <svg className="h-5 w-5 text-red-400 mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>$75-200+ per session</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <svg className="h-5 w-5 text-red-400 mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Limited availability, often weekly</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-lg border border-primary/20 p-6 text-center md:text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl">
                  Best Value
                </div>
                <h3 className="text-xl font-semibold mb-4">NeuroSpark</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>AI-powered personalized task breakdown</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Visual time management tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Multiple daily check-ins and reminders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Fraction of the cost of coaching</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Available 24/7, whenever you need it</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Coming Soon
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              We're continuously improving your coaching experience based on feedback from real ADHD users.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">Accountability Partners</h3>
                <p className="text-muted-foreground">
                  Optional buddy system to pair with others working on similar goals for enhanced social accountability.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">Pattern Recognition</h3>
                <p className="text-muted-foreground">
                  Analytics to identify your productivity patterns and optimize scheduling for peak performance times.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">Virtual Body Doubling</h3>
                <p className="text-muted-foreground">
                  Scheduled co-working sessions with your coach checking in periodically to maintain focus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Your Affordable Commitment Coach Awaits
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the benefits of personalized ADHD coaching at a fraction of the cost. Start your journey today.
            </p>
            <Button asChild size="lg">
              <Link to="/sign-up">
                Get Started Now
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

export default Features;
