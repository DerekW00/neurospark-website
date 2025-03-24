import React from 'react';
import { Button } from "@/components/ui/button";
import { HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-20 pb-20 px-4">
        <div className="max-w-md text-center">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold mt-4 mb-6">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/">
              <HomeIcon className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
