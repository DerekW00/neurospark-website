import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AtSign, MapPin, Phone, Sparkles } from 'lucide-react';
import InterestForm from '@/components/InterestForm';

const WaitlistSignup = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-20">
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                Join Our Exclusive Waitlist
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Our mobile app is in high demand and spots are limited. Sign up now to secure early access when we launch.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Waitlist Form */}
                            <div>
                                <InterestForm
                                    title="Reserve Your Spot"
                                    description="Be among the first to experience the future of ADHD management on your smartphone."
                                />

                                <div className="mt-6 bg-primary/5 rounded-lg p-4">
                                    <div className="flex items-center">
                                        <Sparkles className="h-5 w-5 text-primary mr-2" />
                                        <p className="text-sm font-medium">Limited spots available for early access!</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <span className="text-primary font-bold">1</span>
                                            </div>
                                            <div>
                                                <h3 className="font-medium">Early Access</h3>
                                                <p className="text-muted-foreground">
                                                    Get priority access before the general public launch
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <span className="text-primary font-bold">2</span>
                                            </div>
                                            <div>
                                                <h3 className="font-medium">Special Pricing</h3>
                                                <p className="text-muted-foreground">
                                                    Exclusive launch discounts for our waitlist members
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <span className="text-primary font-bold">3</span>
                                            </div>
                                            <div>
                                                <h3 className="font-medium">Additional Resources</h3>
                                                <p className="text-muted-foreground">
                                                    Find out more about the team behind NeuroSpark:
                                                </p>
                                                <div className="mt-2">
                                                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                                                        <AtSign className="h-4 w-4 mr-2 text-primary" />
                                                        <a href="mailto:derekderuiwang@gmail.com" className="hover:text-foreground transition-colors">
                                                            derekderuiwang@gmail.com
                                                        </a>
                                                    </div>
                                                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                                                        <Phone className="h-4 w-4 mr-2 text-primary" />
                                                        <a href="tel:+15109825319" className="hover:text-foreground transition-colors">
                                                            +1 (510) 982-5319
                                                        </a>
                                                    </div>
                                                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                                                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                                                        <a href="https://derekderuiwang.me" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                                                            derekderuiwang.me
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default WaitlistSignup; 