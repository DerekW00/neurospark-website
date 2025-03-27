import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Play, Brain, ListChecks, Calendar, MessageSquare } from 'lucide-react';

const Demo = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-20">
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            See NeuroSpark in Action
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                            Watch how NeuroSpark transforms overwhelming tasks into manageable steps, designed specifically for neurodivergent brains.
                        </p>

                        <Tabs defaultValue="task-breakdown" className="max-w-4xl mx-auto mb-16">
                            <TabsList className="grid w-full grid-cols-4 mb-8">
                                <TabsTrigger value="task-breakdown">Task Breakdown</TabsTrigger>
                                <TabsTrigger value="ai-coach">AI Coach</TabsTrigger>
                                <TabsTrigger value="calendar">Smart Calendar</TabsTrigger>
                                <TabsTrigger value="analytics">Progress Analytics</TabsTrigger>
                            </TabsList>

                            <TabsContent value="task-breakdown" className="relative">
                                <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden shadow-xl flex items-center justify-center relative">
                                    <img
                                        src="/images/demos/task-breakdown-demo.png"
                                        alt="Task Breakdown Demo"
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Button size="lg" className="rounded-full w-16 h-16 p-0">
                                            <Play className="h-8 w-8" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="mt-8 text-left">
                                    <h3 className="text-2xl font-bold mb-4">Intelligent Task Breakdown</h3>
                                    <p className="text-lg text-muted-foreground mb-4">
                                        NeuroSpark analyzes your tasks and breaks them down into 15-minute microtasks that are easier for ADHD brains to process. No more overwhelming to-do lists!
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        <div className="flex items-start">
                                            <ListChecks className="mr-2 h-5 w-5 text-primary" />
                                            <p>Automatic task segmentation based on complexity</p>
                                        </div>
                                        <div className="flex items-start">
                                            <Brain className="mr-2 h-5 w-5 text-primary" />
                                            <p>Neurodivergent-friendly sequencing</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="ai-coach" className="relative">
                                <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden shadow-xl flex items-center justify-center relative">
                                    <img
                                        src="/images/demos/ai-coach-demo.png"
                                        alt="AI Coach Demo"
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Button size="lg" className="rounded-full w-16 h-16 p-0">
                                            <Play className="h-8 w-8" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="mt-8 text-left">
                                    <h3 className="text-2xl font-bold mb-4">Supportive AI Coach</h3>
                                    <p className="text-lg text-muted-foreground mb-4">
                                        Get personalized guidance and motivation from an AI coach that understands ADHD challenges and provides strategies to overcome them.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        <div className="flex items-start">
                                            <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                                            <p>Personalized motivational prompts</p>
                                        </div>
                                        <div className="flex items-start">
                                            <Brain className="mr-2 h-5 w-5 text-primary" />
                                            <p>ADHD-specific productivity strategies</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="calendar" className="relative">
                                <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden shadow-xl flex items-center justify-center relative">
                                    <img
                                        src="/images/demos/calendar-demo.png"
                                        alt="Smart Calendar Demo"
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Button size="lg" className="rounded-full w-16 h-16 p-0">
                                            <Play className="h-8 w-8" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="mt-8 text-left">
                                    <h3 className="text-2xl font-bold mb-4">Smart Calendar Integration</h3>
                                    <p className="text-lg text-muted-foreground mb-4">
                                        NeuroSpark intelligently schedules your tasks at times when you're most likely to complete them, based on your energy patterns and preferences.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        <div className="flex items-start">
                                            <Calendar className="mr-2 h-5 w-5 text-primary" />
                                            <p>Time-blocking optimized for your brain</p>
                                        </div>
                                        <div className="flex items-start">
                                            <Brain className="mr-2 h-5 w-5 text-primary" />
                                            <p>Energy level tracking and optimization</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="analytics" className="relative">
                                <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden shadow-xl flex items-center justify-center relative">
                                    <img
                                        src="/images/demos/analytics-demo.png"
                                        alt="Progress Analytics Demo"
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Button size="lg" className="rounded-full w-16 h-16 p-0">
                                            <Play className="h-8 w-8" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="mt-8 text-left">
                                    <h3 className="text-2xl font-bold mb-4">Insightful Progress Analytics</h3>
                                    <p className="text-lg text-muted-foreground mb-4">
                                        Visualize your progress and identify patterns to better understand your productivity strengths and challenges.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        <div className="flex items-start">
                                            <ListChecks className="mr-2 h-5 w-5 text-primary" />
                                            <p>Visual productivity patterns</p>
                                        </div>
                                        <div className="flex items-start">
                                            <Brain className="mr-2 h-5 w-5 text-primary" />
                                            <p>Personalized improvement suggestions</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>

                        <div className="mt-12">
                            <h2 className="text-3xl font-bold mb-8">Ready to try it yourself?</h2>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button asChild size="lg">
                                    <Link to="/interactive-demo">
                                        Try Interactive Demo
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link to="/pricing">
                                        View Pricing
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Demo; 