import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Pricing = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-20">
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Simple, Transparent Pricing
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                            Choose the plan that works best for you. All plans include a 14-day free trial.
                        </p>

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
                                            <div className="mt-4">
                                                <span className="text-4xl font-bold">$9</span>
                                                <span className="text-muted-foreground">/month</span>
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
                                            <Button className="w-full">Start Free Trial</Button>
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
                                            <div className="mt-4">
                                                <span className="text-4xl font-bold">$19</span>
                                                <span className="text-muted-foreground">/month</span>
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
                                            <Button className="w-full" variant="default">Start Free Trial</Button>
                                        </CardFooter>
                                    </Card>

                                    {/* Premium Plan */}
                                    <Card className="flex flex-col h-full">
                                        <CardHeader>
                                            <CardTitle className="text-2xl">Premium</CardTitle>
                                            <CardDescription>For those who need maximum support</CardDescription>
                                            <div className="mt-4">
                                                <span className="text-4xl font-bold">$29</span>
                                                <span className="text-muted-foreground">/month</span>
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
                                            <Button className="w-full">Start Free Trial</Button>
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
                                            <div className="mt-4">
                                                <span className="text-4xl font-bold">$86</span>
                                                <span className="text-muted-foreground">/year</span>
                                            </div>
                                            <p className="text-sm text-green-600 mt-1">Save $22 yearly</p>
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
                                            <Button className="w-full">Start Free Trial</Button>
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
                                            <div className="mt-4">
                                                <span className="text-4xl font-bold">$182</span>
                                                <span className="text-muted-foreground">/year</span>
                                            </div>
                                            <p className="text-sm text-green-600 mt-1">Save $46 yearly</p>
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
                                            <Button className="w-full" variant="default">Start Free Trial</Button>
                                        </CardFooter>
                                    </Card>

                                    {/* Premium Plan - Yearly */}
                                    <Card className="flex flex-col h-full">
                                        <CardHeader>
                                            <CardTitle className="text-2xl">Premium</CardTitle>
                                            <CardDescription>For those who need maximum support</CardDescription>
                                            <div className="mt-4">
                                                <span className="text-4xl font-bold">$278</span>
                                                <span className="text-muted-foreground">/year</span>
                                            </div>
                                            <p className="text-sm text-green-600 mt-1">Save $70 yearly</p>
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
                                            <Button className="w-full">Start Free Trial</Button>
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
                                        We offer a 30-day money-back guarantee. If you're not satisfied with NeuroSpark within your first 30 days, contact our support team for a full refund.
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

export default Pricing; 