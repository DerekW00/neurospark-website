import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import FeatureSection from '@/components/FeatureSection';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, ArrowRightCircle, Check, MessageSquare, Calendar } from 'lucide-react';
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
                                <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
                                    Built by and for people with ADHD
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                    Your Personal Commitment Coach in Your Pocket
                                </h1>
                                <p className="text-xl text-muted-foreground mb-8">
                                    NeuroSpark is more than just a task manager — it's an affordable commitment coach that checks in, bugs you when needed, and provides emotional support to help neurodivergent brains actually finish what they start.
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
                            <h2 className="text-3xl font-bold tracking-tight mb-4">A Coach That Understands Your ADHD Brain</h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Created by a team of ADHD individuals, NeuroSpark replicates the experience of having a personal commitment coach at a fraction of the cost.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                            <div className="bg-background p-8 rounded-lg border hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <Brain className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Breaks Down Overwhelm</h3>
                                <p className="text-muted-foreground">Just like a real coach, we help transform paralysis-inducing projects into small, doable 15-minute tasks that bypass executive function barriers.</p>
                            </div>
                            <div className="bg-background p-8 rounded-lg border hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <MessageSquare className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Persistent Accountability</h3>
                                <p className="text-muted-foreground">We'll check in, nudge you, and provide supportive follow-ups so you don't forget commitments when the novelty wears off. No ghosting allowed!</p>
                            </div>
                            <div className="bg-background p-8 rounded-lg border hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <Calendar className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Time Blindness Solution</h3>
                                <p className="text-muted-foreground">Like a coach who helps you plan realistically, we visualize your time commitments to overcome time blindness and build sustainable routines.</p>
                            </div>
                            <div className="bg-background p-8 rounded-lg border hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <ArrowRightCircle className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Emotional Support</h3>
                                <p className="text-muted-foreground">Our coach provides the understanding and encouragement you need, reducing shame and celebrating your wins to keep you motivated through challenges.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Section */}
                <FeatureSection />

                {/* How It Works */}
                <HowItWorks />

                {/* ADHD Creator Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight mb-6">Created by People Who Get It</h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                Our team of neurodivergent creators built NeuroSpark to solve our own ADHD challenges. We've experienced the frustration of forgotten tasks, overwhelming projects, and inconsistent focus firsthand.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1">
                                <div className="bg-background p-6 rounded-lg border space-y-4">
                                    <p className="italic">
                                        "As someone with ADHD, I was tired of productivity tools that didn't understand how my brain works. Traditional coaches were helpful but expensive. We built NeuroSpark to provide that same personalized support at a price anyone can afford."
                                    </p>
                                    <p className="font-medium">- The NeuroSpark Team</p>
                                </div>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="bg-primary/10 rounded-xl p-6 w-full">
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <Check className="h-6 w-6 text-primary mr-3 mt-0.5" />
                                            <span>Built by a team who personally understand ADHD challenges</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-6 w-6 text-primary mr-3 mt-0.5" />
                                            <span>Features designed based on what actually works for ADHD brains</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-6 w-6 text-primary mr-3 mt-0.5" />
                                            <span>Continuous improvement based on neurodiversity research</span>
                                        </li>
                                    </ul>
                                </div>
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
                                    "NeuroSpark feels like having a commitment coach on standby 24/7. The check-ins are perfectly timed when I'm about to get distracted, and the emotional support feels surprisingly genuine. It's transformed how I manage my work."
                                </p>
                                <p className="font-medium">- Alex K., Software Developer with ADHD</p>
                            </div>
                            <div className="bg-background p-8 rounded-lg border">
                                <p className="italic mb-6">
                                    "I couldn't afford an ADHD coach, but NeuroSpark gives me the same benefits at a fraction of the cost. The way it bugs me (in a good way!) and helps break down my overwhelming tasks has been life-changing."
                                </p>
                                <p className="font-medium">- Jamie T., Student with ADHD</p>
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