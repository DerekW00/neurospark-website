import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InterestForm from '@/components/InterestForm';

const Waitlist = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-20">
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Join the NeuroSpark Waitlist
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                            Our mobile app is in high demand and spots are limited. Sign up now to secure early access when we launch.
                        </p>

                        <div className="max-w-md mx-auto">
                            <InterestForm
                                title="Reserve Your Spot"
                                description="Be among the first to experience the future of ADHD management on your smartphone."
                            />
                        </div>

                        <div className="mt-16 max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="flex flex-col items-center">
                                    <div className="rounded-full bg-primary/10 p-4 mb-4">
                                        <span className="text-2xl font-bold text-primary">1</span>
                                    </div>
                                    <h3 className="text-lg font-medium mb-2">Early Access</h3>
                                    <p className="text-sm text-muted-foreground text-center">
                                        Get priority access before the general public
                                    </p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="rounded-full bg-primary/10 p-4 mb-4">
                                        <span className="text-2xl font-bold text-primary">2</span>
                                    </div>
                                    <h3 className="text-lg font-medium mb-2">Special Pricing</h3>
                                    <p className="text-sm text-muted-foreground text-center">
                                        Exclusive launch discounts for waitlist members
                                    </p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="rounded-full bg-primary/10 p-4 mb-4">
                                        <span className="text-2xl font-bold text-primary">3</span>
                                    </div>
                                    <h3 className="text-lg font-medium mb-2">Development Updates</h3>
                                    <p className="text-sm text-muted-foreground text-center">
                                        Receive news and behind-the-scenes content
                                    </p>
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

export default Waitlist; 