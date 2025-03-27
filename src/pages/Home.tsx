import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import FeatureSection from '@/components/FeatureSection';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, ArrowRightCircle, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-20">
                {/* Hero Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1 text-center lg:text-left">
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                    The ADHD-Friendly Task Management Solution
                                </h1>
                                <p className="text-xl text-muted-foreground mb-8">
                                    NeuroSpark is a specialized productivity tool designed for neurodivergent brains. Break down overwhelming tasks into manageable steps with our intelligent workflow system.
                                </p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                    <Button asChild size="lg">
                                        <Link to="/interactive-demo">
                                            Try It Now
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" asChild>
                                        <Link to="/how-it-works">
                                            Learn More
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="relative w-72 h-72 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Brain className="h-32 w-32 text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product Overview Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Designed for Your Unique Brain</h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                NeuroSpark understands the specific challenges of ADHD and neurodiversity. Our platform offers specialized features tailored to how your brain works.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <div className="bg-background p-8 rounded-lg border hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <Brain className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Micro-Task Breakdown</h3>
                                <p className="text-muted-foreground">Transform overwhelming projects into small, achievable 15-minute tasks that minimize executive function drain.</p>
                            </div>
                            <div className="bg-background p-8 rounded-lg border hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <Check className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Visual Progress Tracking</h3>
                                <p className="text-muted-foreground">See your achievements visually with satisfaction-inducing progress indicators designed to motivate the ADHD brain.</p>
                            </div>
                            <div className="bg-background p-8 rounded-lg border hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <ArrowRightCircle className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Adaptive Reminders</h3>
                                <p className="text-muted-foreground">Smart notifications that learn your productive times and adjust to minimize overwhelm while maximizing focus.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Section */}
                <FeatureSection />

                {/* How It Works */}
                <HowItWorks />

                {/* Interactive Demo Highlight */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Try NeuroSpark Without Commitment</h2>
                                <p className="text-xl mb-6">Experience our core features with our interactive demo. No sign-up required.</p>
                                <Button asChild size="lg">
                                    <Link to="/interactive-demo">
                                        Launch Interactive Demo
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="relative w-full h-72 bg-card rounded-lg border flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <p className="text-xl font-semibold">Demo Interface Preview</p>
                                        <p className="text-muted-foreground mt-2">Click to start your experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials - Keep these as social proof */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold tracking-tight mb-12">
                            What Our Users Say
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-background p-8 rounded-lg border">
                                <p className="italic mb-6">
                                    "NeuroSpark has completely changed how I manage my workload. Breaking tasks into 15-minute chunks makes everything feel achievable, and the AI coach seems to understand exactly what I need to hear."
                                </p>
                                <p className="font-medium">- Alex K., Software Developer</p>
                            </div>
                            <div className="bg-background p-8 rounded-lg border">
                                <p className="italic mb-6">
                                    "As someone with ADHD, I've tried dozens of task managers. NeuroSpark is the first one that actually works with my brain instead of against it. The microtask approach has been a game-changer."
                                </p>
                                <p className="font-medium">- Jamie T., Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
};

export default Home; 