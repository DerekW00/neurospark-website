import React from 'react';
import { Button } from "@/components/ui/button";
import { HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ComingSoonProps {
    title?: string;
    description?: string;
}

const ComingSoon = ({
    title = "Coming Soon",
    description = "This page is under development. We're working hard to bring you this feature soon. This is a conceptual demonstration, not the final product."
}: ComingSoonProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center pt-20 pb-20 px-4">
                <div className="max-w-xl text-center">
                    <div className="w-24 h-24 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <svg
                            className="w-12 h-12 text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                        {title}
                    </h1>
                    <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                        {description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg">
                            <Link to="/">
                                <HomeIcon className="mr-2 h-4 w-4" />
                                Return Home
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link to="/waitlist">
                                Join Waitlist
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ComingSoon; 