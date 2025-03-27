import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AtSign, MapPin, Phone, MessagesSquare } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-20">
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                Get in Touch
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Have questions about NeuroSpark? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Contact Form */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Send Us a Message</CardTitle>
                                    <CardDescription>
                                        Fill out the form below and we'll respond within 24 hours.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="first-name">First Name</Label>
                                                <Input id="first-name" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="last-name">Last Name</Label>
                                                <Input id="last-name" required />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" required />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="inquiry-type">Type of Inquiry</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select an option" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="general">General Question</SelectItem>
                                                    <SelectItem value="support">Technical Support</SelectItem>
                                                    <SelectItem value="billing">Billing Inquiry</SelectItem>
                                                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea id="message" className="h-32" required />
                                        </div>

                                        <Button type="submit" className="w-full">Send Message</Button>
                                    </form>
                                </CardContent>
                            </Card>

                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <AtSign className="h-6 w-6 text-primary mt-0.5" />
                                            <div>
                                                <h3 className="font-medium">Email</h3>
                                                <p className="text-muted-foreground">support@neurospark.ai</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <Phone className="h-6 w-6 text-primary mt-0.5" />
                                            <div>
                                                <h3 className="font-medium">Phone</h3>
                                                <p className="text-muted-foreground">+1 (800) 555-8765</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <MapPin className="h-6 w-6 text-primary mt-0.5" />
                                            <div>
                                                <h3 className="font-medium">Address</h3>
                                                <p className="text-muted-foreground">
                                                    123 Innovation Way<br />
                                                    Suite 400<br />
                                                    San Francisco, CA 94105
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center">
                                            <MessagesSquare className="h-5 w-5 mr-2" />
                                            Live Chat Support
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="mb-6 text-muted-foreground">
                                            Need immediate assistance? Our support team is available to chat during business hours.
                                        </p>
                                        <Button className="w-full">Start Live Chat</Button>
                                        <p className="mt-4 text-sm text-muted-foreground text-center">
                                            Available Monday - Friday, 9 AM - 5 PM PT
                                        </p>
                                    </CardContent>
                                </Card>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Frequently Asked Support Questions</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-medium">How do I reset my password?</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Visit the login page and click "Forgot Password" to receive a password reset link.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Can I use NeuroSpark on multiple devices?</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Yes! Your NeuroSpark account works on all your devices, and your data syncs automatically.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">How do I cancel my subscription?</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Go to Account Settings → Billing → Cancel Subscription. You'll have access until the end of your billing period.
                                            </p>
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

export default ContactUs; 