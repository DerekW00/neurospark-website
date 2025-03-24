import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Brain, CheckCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OnboardingSteps = [
  {
    title: "Welcome",
    description: "Let's get you set up with NeuroSpark",
  },
  {
    title: "Your First Commitment",
    description: "What's something you'd like to accomplish?",
  },
  {
    title: "All Set!",
    description: "You're ready to start your journey",
  }
];

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [commitment, setCommitment] = useState('');
  const [description, setDescription] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (step < OnboardingSteps.length - 1) {
      setStep(step + 1);
    } else {
      // Complete onboarding
      toast({
        title: "Onboarding completed",
        description: "Welcome to NeuroSpark!",
      });
      navigate('/dashboard');
    }
  };

  const isNextDisabled = () => {
    if (step === 1) {
      return !commitment;
    }
    return false;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30 px-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <Brain className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">{OnboardingSteps[step].title}</CardTitle>
          <CardDescription>
            {OnboardingSteps[step].description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 0 && (
            <div className="space-y-6 text-center">
              <p>
                NeuroSpark helps you break down daunting tasks into manageable microtasks.
                Our AI assistant makes it easy to turn overwhelming goals into simple, actionable steps.
              </p>
              <div className="flex flex-col items-center space-y-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <p className="font-medium">Break down big tasks into small steps</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <p className="font-medium">Schedule tasks with ease</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <p className="font-medium">Stay focused and motivated</p>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="commitment">What would you like to accomplish?</Label>
                <Input
                  id="commitment"
                  placeholder="e.g., Prepare for presentation, Clean apartment"
                  value={commitment}
                  onChange={(e) => setCommitment(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Any additional details? (optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Add any notes or specific requirements"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <div className="rounded-full bg-green-100 p-3">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <p className="text-lg font-medium">
                Great! Your first commitment has been created.
              </p>
              <p>
                We've broken down "{commitment}" into manageable microtasks for you.
                You can review and schedule them from your dashboard.
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 0 && (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              Back
            </Button>
          )}
          {step === 0 && <div></div>}
          <Button
            onClick={handleNextStep}
            disabled={isNextDisabled()}
            className={step === OnboardingSteps.length - 1 ? "ml-auto" : ""}
          >
            {step === OnboardingSteps.length - 1 ? "Go to Dashboard" : "Continue"}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Onboarding;
