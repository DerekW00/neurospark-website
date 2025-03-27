import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { ENDPOINTS } from '@/config';

// Define the simple schema for the footer form
const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
});

type FormValues = z.infer<typeof formSchema>;

const FooterSignupForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        setError(null);

        try {
            // Submit to Azure Function endpoint with minimal data
            const response = await fetch(ENDPOINTS.SUBSCRIBE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    name: "Footer Signup",
                    submittedAt: new Date().toISOString(),
                    source: "footer",
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit form');
            }

            setIsSubmitted(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            setError(error instanceof Error ? error.message : 'Failed to submit. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full">
            {isSubmitted ? (
                <div className="flex items-center text-sm my-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-muted-foreground">Thanks for signing up!</span>
                </div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        {error && (
                            <div className="p-2 text-xs text-destructive flex items-center">
                                <AlertCircle className="h-3 w-3 mr-1" />
                                {error}
                            </div>
                        )}
                        <div className="flex gap-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your email"
                                                type="email"
                                                className="h-9 text-sm"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                size="sm"
                                className="h-9"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <Send className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Stay updated with our latest features and announcements.
                        </p>
                    </form>
                </Form>
            )}
        </div>
    );
};

export default FooterSignupForm; 