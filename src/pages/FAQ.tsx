import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes NeuroSpark different from other task managers?",
    answer: "NeuroSpark is specifically designed for ADHD and neurodivergent brains. We use AI to break down overwhelming tasks into manageable 15-minute microtasks, and our interface is built to minimize distractions and reduce cognitive load."
  },
  {
    question: "How does the AI task breakdown work?",
    answer: "Our AI analyzes your commitment and uses advanced prompt engineering to break it down into specific, achievable microtasks. It considers the complexity of the overall goal and creates steps that can typically be completed in 15 minutes or less. You can review and adjust these tasks before adding them to your schedule."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security seriously. We use Firebase for authentication and data storage, which provides enterprise-grade security. Your personal information and task data are encrypted and protected according to industry best practices. We never share or sell your data to third parties."
  },
  {
    question: "Does NeuroSpark integrate with calendar apps?",
    answer: "Yes! NeuroSpark integrates with Google Calendar, allowing you to see your existing commitments and schedule new tasks without switching between apps. We're working on adding support for other popular calendar services too."
  },
  {
    question: "Do I need to be diagnosed with ADHD to use NeuroSpark?",
    answer: "Not at all. While NeuroSpark is designed with ADHD challenges in mind, anyone who struggles with task initiation, overwhelm, or maintaining focus can benefit from our approach. Many neurotypical users find our microtask approach helpful for productivity."
  },
  {
    question: "What if the AI creates tasks that don't work for me?",
    answer: "You have complete control to review and modify any tasks the AI generates. You can edit, delete, or add your own tasks before finalizing your commitment. Over time, our AI learns from your preferences to create better, more personalized task breakdowns."
  },
  {
    question: "Is there a limit to how many commitments I can create?",
    answer: "The free plan allows you to have up to 3 active commitments at once. Our premium plans offer unlimited commitments, advanced AI coaching, and additional features to enhance your productivity journey."
  },
  {
    question: "How does NeuroSpark help me remember to do tasks?",
    answer: "NeuroSpark sends gentle, timely reminders about upcoming tasks and check-ins to help you stay on track. You can customize when and how you receive notifications based on your preferences. Our approach focuses on reducing anxiety rather than adding pressure."
  },
  {
    question: "Can I use NeuroSpark on my phone?",
    answer: "Yes! NeuroSpark works on all devices with a web browser. We're also developing native mobile apps for iOS and Android for an even better mobile experience, coming soon."
  },
  {
    question: "How do you handle user feedback and feature requests?",
    answer: "We actively encourage feedback from our community. Many of our features come directly from user suggestions, and we regularly conduct user research to understand what's working and what could be improved. As neurodivergent founders, we're committed to an iterative development process to continuously improve NeuroSpark."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
            <p className="text-xl mb-12 text-muted-foreground max-w-2xl">
              Find answers to common questions about NeuroSpark
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Didn't find what you're looking for? We're here to help.
              </p>
              <Button asChild variant="outline">
                <a href="mailto:derekderuiwang@gmail.com">
                  Contact Support
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Ready to Start Your NeuroSpark Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who are transforming how they tackle their goals.
            </p>
            <Button asChild size="lg">
              <Link to="/waitlist">
                Join Our Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
