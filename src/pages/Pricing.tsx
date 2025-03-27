import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, Lock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BlurredText } from '@/components/ui/blurred-text';
import { Link } from 'react-router-dom';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-20">
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Transparent Pricing, Free to Try
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                            Try our full featured trial now, no credit card required. When you're ready, choose a plan that works best for you.
                        </p>
                        <div className="flex justify-center mb-12">
                            <Button size="lg" className="bg-primary" asChild>
                                <Link to="/try-it-now">Start Your Free Trial</Link>
                            </Button>
                        </div>

                        <div className="flex justify-center items-center mb-6 text-sm text-muted-foreground">
                            <span className="flex items-center">
                                <Lock className="h-4 w-4 mr-2" />
                                <span>Prices are blurred during our early access period -</span>
                            </span>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span className="underline ml-1 cursor-help">
                                            Why?
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-xs">
                                        <p>We're still finalizing our pricing structure. Hover over the blurred prices to reveal them, but please note they may change before public launch.</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>

                        <Tabs defaultValue="monthly" className="max-w-4xl mx-auto mb-12">
                            <div className="flex justify-center mb-8">
                                <TabsList>
                                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                                    <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="monthly" className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Basic Plan */}
                                    <Card className="flex flex-col h-full">
                                        <CardHeader>
                                            <CardTitle className="text-2xl">Basic</CardTitle>
                                            <CardDescription>For individuals just getting started</CardDescription>
                                            <div className="mt-4 flex items-center">
                                                <span className="text-4xl font-bold">$</span>
                                                <BlurredText className="text-4xl font-bold" revealOnHover intensity="strong">9</BlurredText>
                                                <span className="text-muted-foreground">/month</span>
                                                <Lock className="h-4 w-4 ml-2 text-muted-foreground" />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Task breakdown into microtasks</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Basic calendar integration</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Up to 10 active tasks</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <XCircle className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                                                    <span className="text-muted-foreground">AI coach access</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <XCircle className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                                                    <span className="text-muted-foreground">Advanced analytics</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full" asChild>
                                                <Link to="/try-it-now">Try It Free</Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>

                                    {/* Pro Plan */}
                                    <Card className="flex flex-col h-full relative border-primary">
                                        <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                                            <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                                                Most Popular
                                            </span>
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="text-2xl">Pro</CardTitle>
                                            <CardDescription>Perfect for busy individuals</CardDescription>
                                            <div className="mt-4 flex items-center">
                                                <span className="text-4xl font-bold">$</span>
                                                <BlurredText className="text-4xl font-bold" revealOnHover intensity="strong">19</BlurredText>
                                                <span className="text-muted-foreground">/month</span>
                                                <Lock className="h-4 w-4 ml-2 text-muted-foreground" />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Everything in Basic</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Unlimited active tasks</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>AI coach access (10 sessions/month)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Advanced calendar optimization</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Basic productivity analytics</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full" variant="default" asChild>
                                                <Link to="/try-it-now">Try It Free</Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>

                                    {/* Premium Plan */}
                                    <Card className="flex flex-col h-full">
                                        <CardHeader>
                                            <CardTitle className="text-2xl">Premium</CardTitle>
                                            <CardDescription>For those who need maximum support</CardDescription>
                                            <div className="mt-4 flex items-center">
                                                <span className="text-4xl font-bold">$</span>
                                                <BlurredText className="text-4xl font-bold" revealOnHover intensity="strong">29</BlurredText>
                                                <span className="text-muted-foreground">/month</span>
                                                <Lock className="h-4 w-4 ml-2 text-muted-foreground" />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Everything in Pro</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Unlimited AI coach access</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Advanced productivity analytics</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Custom microtask templates</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Priority support</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full" asChild>
                                                <Link to="/try-it-now">Try It Free</Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>

                            <TabsContent value="yearly" className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Basic Plan - Yearly */}
                                    <Card className="flex flex-col h-full">
                                        <CardHeader>
                                            <CardTitle className="text-2xl">Basic</CardTitle>
                                            <CardDescription>For individuals just getting started</CardDescription>
                                            <div className="mt-4 flex items-center">
                                                <span className="text-4xl font-bold">$</span>
                                                <BlurredText className="text-4xl font-bold" revealOnHover intensity="strong">86</BlurredText>
                                                <span className="text-muted-foreground">/year</span>
                                                <Lock className="h-4 w-4 ml-2 text-muted-foreground" />
                                            </div>
                                            <p className="text-sm text-green-600 mt-1">Save <BlurredText className="text-green-600" revealOnHover intensity="strong">$22</BlurredText> (20% off)</p>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Task breakdown into microtasks</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Basic calendar integration</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Up to 10 active tasks</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <XCircle className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                                                    <span className="text-muted-foreground">AI coach access</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <XCircle className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                                                    <span className="text-muted-foreground">Advanced analytics</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full" asChild>
                                                <Link to="/try-it-now">Try It Free</Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>

                                    {/* Pro Plan - Yearly */}
                                    <Card className="flex flex-col h-full relative border-primary">
                                        <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                                            <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                                                Most Popular
                                            </span>
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="text-2xl">Pro</CardTitle>
                                            <CardDescription>Perfect for busy individuals</CardDescription>
                                            <div className="mt-4 flex items-center">
                                                <span className="text-4xl font-bold">$</span>
                                                <BlurredText className="text-4xl font-bold" revealOnHover intensity="strong">182</BlurredText>
                                                <span className="text-muted-foreground">/year</span>
                                                <Lock className="h-4 w-4 ml-2 text-muted-foreground" />
                                            </div>
                                            <p className="text-sm text-green-600 mt-1">Save <BlurredText className="text-green-600" revealOnHover intensity="strong">$46</BlurredText> (20% off)</p>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Everything in Basic</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Unlimited active tasks</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>AI coach access (10 sessions/month)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Advanced calendar optimization</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Basic productivity analytics</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full" variant="default" asChild>
                                                <Link to="/try-it-now">Try It Free</Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>

                                    {/* Premium Plan - Yearly */}
                                    <Card className="flex flex-col h-full">
                                        <CardHeader>
                                            <CardTitle className="text-2xl">Premium</CardTitle>
                                            <CardDescription>For those who need maximum support</CardDescription>
                                            <div className="mt-4 flex items-center">
                                                <span className="text-4xl font-bold">$</span>
                                                <BlurredText className="text-4xl font-bold" revealOnHover intensity="strong">278</BlurredText>
                                                <span className="text-muted-foreground">/year</span>
                                                <Lock className="h-4 w-4 ml-2 text-muted-foreground" />
                                            </div>
                                            <p className="text-sm text-green-600 mt-1">Save <BlurredText className="text-green-600" revealOnHover intensity="strong">$70</BlurredText> (20% off)</p>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Everything in Pro</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Unlimited AI coach access</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Advanced productivity analytics</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Custom microtask templates</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                                    <span>Priority support</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full" asChild>
                                                <Link to="/try-it-now">Try It Free</Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>

                        {/* FAQs */}
                        <div className="max-w-3xl mx-auto mt-16">
                            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-6 text-left">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Can I cancel anytime?</h3>
                                    <p className="text-muted-foreground">
                                        Yes, you can cancel your subscription at any time. If you cancel during your free trial, you won't be charged.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">How does the free trial work?</h3>
                                    <p className="text-muted-foreground">
                                        All plans come with a 14-day free trial. You'll only be charged once the trial period ends, and we'll send you a reminder before that happens.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Can I change plans later?</h3>
                                    <p className="text-muted-foreground">
                                        Absolutely! You can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, the change will take effect at the start of your next billing cycle.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
                                    <p className="text-muted-foreground">
                                        We offer a 30-day money-back guarantee. When we launch, all subscribers will be eligible for a full refund if they're not satisfied within the first 30 days.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground mt-6">
                            Not satisfied with NeuroSpark within your first 30 days?
                            <Link to="/waitlist" className="text-primary hover:underline ml-1">Join our waitlist</Link> to learn about
                            our satisfaction guarantee when we launch.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Pricing; 