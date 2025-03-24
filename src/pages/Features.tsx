import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Calendar, CheckCircle, Clock, MessageSquare, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Features Designed for Your ADHD Brain
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              NeuroSpark offers a powerful set of tools specifically crafted to help neurodivergent minds thrive.
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
              Core Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Task Breakdown</h3>
                <p className="text-muted-foreground mb-4">
                  Our advanced AI analyzes your commitments and breaks them down into manageable 15-minute microtasks tailored to your abilities.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Transform overwhelming goals into achievable steps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Customized difficulty based on your energy levels</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Scheduling</h3>
                <p className="text-muted-foreground mb-4">
                  Seamlessly schedule your tasks with intelligent timing that adapts to your daily rhythms and availability.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Google Calendar integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>One-click scheduling that respects your existing commitments</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Coaching</h3>
                <p className="text-muted-foreground mb-4">
                  Receive personalized guidance and motivation from an AI coach that understands ADHD challenges.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Supportive check-ins customized to your needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Strategies for overcoming executive function challenges</span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Intelligent Notifications</h3>
                <p className="text-muted-foreground mb-4">
                  Receive reminders and check-ins that help you stay on track without becoming overwhelming.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Gentle reminders when you need them most</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Customizable notification preferences</span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Visual Progress Tracking</h3>
                <p className="text-muted-foreground mb-4">
                  See your accomplishments with visual progress indicators that provide dopamine-boosting feedback.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Satisfying progress bars and animations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Achievement badges and celebration moments</span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">ADHD-Friendly Design</h3>
                <p className="text-muted-foreground mb-4">
                  A clean, distraction-free interface designed specifically for neurodivergent minds.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Reduced cognitive load with clear visual hierarchy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Customizable interface based on your preferences</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Coming Soon
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              We're constantly improving NeuroSpark with new features designed for ADHD minds.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">Community Accountability</h3>
                <p className="text-muted-foreground">
                  Connect with others who understand your challenges and celebrate successes together.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
                <p className="text-muted-foreground">
                  Identify your productivity patterns and optimize your schedule for peak performance.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">Body Doubling Sessions</h3>
                <p className="text-muted-foreground">
                  Virtual co-working sessions to help you stay accountable and focused on tasks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Start Your NeuroSpark Journey Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience a productivity system designed specifically for your ADHD brain.
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

export default Features;
