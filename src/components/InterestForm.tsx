import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, AlertCircle, Smartphone } from 'lucide-react';
import { ENDPOINTS } from '@/config';

// Define the schema for the form
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    phone: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface InterestFormProps {
    title?: string;
    description?: string;
    onSubmitCallback?: (data: FormValues) => void;
}

const InterestForm = ({
    title = "Join the NeuroSpark Waitlist",
    description = "Our exclusive mobile app is in high demand! Reserve your spot now and be among the first to experience this game-changing ADHD tool on your smartphone.",
    onSubmitCallback
}: InterestFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        setError(null);

        try {
            // Submit to Azure Function endpoint
            const response = await fetch(ENDPOINTS.SUBSCRIBE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    submittedAt: new Date().toISOString(),
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit form');
            }

            // Run callback if provided
            if (onSubmitCallback) {
                onSubmitCallback(data);
            }

            setIsSubmitted(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            setError(error instanceof Error ? error.message : 'Failed to submit form. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    {title}
                    <Smartphone className="h-5 w-5 text-primary" />
                </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-6 text-center">
                        <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">You're on the List!</h3>
                        <p className="text-muted-foreground">
                            Thanks for joining our exclusive waitlist! We'll notify you as soon as you've been granted access to the NeuroSpark mobile app.
                        </p>
                    </div>
                ) : (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            {error && (
                                <div className="p-3 mb-3 text-sm bg-destructive/10 text-destructive rounded-md flex items-center">
                                    <AlertCircle className="h-4 w-4 mr-2" />
                                    {error}
                                </div>
                            )}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="you@example.com" type="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone (optional)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="(123) 456-7890" type="tel" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="text-sm text-muted-foreground mb-2">
                                <p>Join thousands of others waiting to transform their productivity with our mobile app. Limited spots available!</p>
                            </div>
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Securing your spot...
                                    </>
                                ) : (
                                    "Reserve My Spot"
                                )}
                            </Button>
                        </form>
                    </Form>
                )}
            </CardContent>
        </Card>
    );
};

export default InterestForm;