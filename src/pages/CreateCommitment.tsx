
import React from 'react';
import Header from '@/components/Header';
import CommitmentForm from '@/components/CommitmentForm';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CreateCommitment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Button variant="ghost" className="mb-6" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight mb-3">Create Your Commitment</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Start by defining what you want to accomplish. We'll help you break it down into achievable microtasks.
            </p>
          </div>
          
          <CommitmentForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateCommitment;
