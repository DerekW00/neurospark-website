
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Loader2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { breakdownCommitment } from '@/services/llm';
import { useToast } from "@/hooks/use-toast";

const CommitmentForm = () => {
  const { toast } = useToast();
  const [goal, setGoal] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [llmProvider, setLlmProvider] = useState('openai');
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal) return;
    
    if (!apiKey && showApiKeyInput) {
      toast({
        title: "API Key Required",
        description: "Please enter your API key to continue.",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    try {
      // This would be replaced with actual API call to breakdown the commitment
      // For now, we'll simulate it with a timeout
      
      // Simulate an LLM call to break down the task
      // In production, this would use the real API key and provider
      // const tasks = await breakdownCommitment(
      //   llmProvider as any,
      //   goal,
      //   description,
      //   deadline,
      //   estimatedTime,
      //   apiKey
      // );
      
      // Simulate a successful response
      setTimeout(() => {
        setLoading(false);
        toast({
          title: "Commitment Created",
          description: "Your commitment has been broken down into manageable tasks.",
        });
        console.log('Commitment created:', { goal, description, deadline, estimatedTime, llmProvider });
        // Redirect or show the task breakdown would happen here
      }, 2000);
    } catch (error) {
      setLoading(false);
      toast({
        title: "Error",
        description: "Failed to create commitment. Please try again.",
        variant: "destructive"
      });
      console.error('Error:', error);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Create a Commitment</CardTitle>
          <CardDescription>
            Enter a goal you want to achieve, and we'll help break it down into manageable steps.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="goal">What do you want to accomplish?</Label>
            <Input 
              id="goal"
              placeholder="e.g., Prepare for my job interview" 
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="focus-ring"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">
              Additional details (optional)
            </Label>
            <Textarea 
              id="description"
              placeholder="Add any specific requirements or context about your goal"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="focus-ring min-h-[100px]"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="deadline">Deadline</Label>
              <div className="relative">
                <Input 
                  id="deadline"
                  type="date"
                  className="pl-10 focus-ring"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="estimatedTime">Estimated time</Label>
              <div className="relative">
                <Input 
                  id="estimatedTime"
                  type="text"
                  placeholder="e.g., 2 hours"
                  className="pl-10 focus-ring"
                  value={estimatedTime}
                  onChange={(e) => setEstimatedTime(e.target.value)}
                />
                <Clock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="llmProvider">AI Provider for Task Breakdown</Label>
            <Select 
              value={llmProvider} 
              onValueChange={(value) => {
                setLlmProvider(value);
                setShowApiKeyInput(true);
              }}
            >
              <SelectTrigger id="llmProvider">
                <SelectValue placeholder="Select AI provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="openai">OpenAI (GPT-4)</SelectItem>
                <SelectItem value="anthropic">Anthropic (Claude)</SelectItem>
                <SelectItem value="perplexity">Perplexity</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {showApiKeyInput && (
            <div className="space-y-2">
              <Label htmlFor="apiKey">
                {llmProvider === 'openai' ? 'OpenAI' : 
                 llmProvider === 'anthropic' ? 'Anthropic' : 
                 'Perplexity'} API Key
              </Label>
              <Input 
                id="apiKey"
                type="password"
                placeholder="Enter your API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="focus-ring"
              />
              <p className="text-xs text-muted-foreground">
                Your API key is never stored on our servers and is only used for this request.
              </p>
            </div>
          )}
        </CardContent>
        
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={!goal || loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing your goal...
              </>
            ) : (
              "Create and Break Down Goal"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CommitmentForm;
