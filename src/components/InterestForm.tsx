import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from 'lucide-react';

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
    title = "Interested in NeuroSpark?",
    description = "Leave your details and we'll keep you updated on our progress.",
    onSubmitCallback
}: InterestFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

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

        try {
            // Simulate API call with a delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Submit to actual backend service
            if (onSubmitCallback) {
                onSubmitCallback(data);
            } else {
                // Default implementation to store in localStorage (for demonstration)
                const interests = JSON.parse(localStorage.getItem('interests') || '[]');
                interests.push({ ...data, submittedAt: new Date().toISOString() });
                localStorage.setItem('interests', JSON.stringify(interests));
            }

            setIsSubmitted(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            // You could add error handling here
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-6 text-center">
                        <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                        <p className="text-muted-foreground">
                            We've received your information and will be in touch soon.
                        </p>
                    </div>
                ) : (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Please wait
                                    </>
                                ) : (
                                    "Stay Updated"
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