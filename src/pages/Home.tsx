import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import FeatureSection from '@/components/FeatureSection';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain } from 'lucide-react';
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
                                    Achieve Your Goals with an ADHD-Friendly Approach
                                </h1>
                                <p className="text-xl text-muted-foreground mb-8">
                                    NeuroSpark helps you break down overwhelming tasks into manageable steps, designed for your neurodivergent brain.
                                </p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                    <Button asChild size="lg">
                                        <Link to="/sign-up">
                                            Get Started Free
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
                            <div className="flex-1 flex justify-center">
                                <div className="relative w-72 h-72 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Brain className="h-32 w-32 text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Section */}
                <FeatureSection />

                {/* How It Works */}
                <HowItWorks />

                {/* Stats Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl font-bold tracking-tight mb-12">
                            Why Users Love NeuroSpark
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <p className="text-4xl font-bold text-primary mb-2">78%</p>
                                <p className="text-xl">Increase in task completion rates</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-primary mb-2">15,000+</p>
                                <p className="text-xl">Neurodivergent users and growing</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-primary mb-2">4.8/5</p>
                                <p className="text-xl">Average user rating</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
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