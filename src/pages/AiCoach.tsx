
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Bot, MessageSquare, Search, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';

// This would be fetched from Firebase in a real implementation
const conversationHistory = [
  { 
    id: 'conv1', 
    title: 'Breaking down exam prep', 
    date: '2023-11-02', 
    messages: [
      { role: 'user', content: 'I need help breaking down my exam preparation.' },
      { role: 'assistant', content: 'I can help with that. What subject are you studying for?' },
      // More messages...
    ]
  },
  { 
    id: 'conv2', 
    title: 'Apartment cleaning plan', 
    date: '2023-10-28',
    messages: [
      { role: 'user', content: 'I need to clean my apartment but feel overwhelmed.' },
      { role: 'assistant', content: 'Let\'s break this down into smaller tasks. How many rooms do you need to clean?' },
      // More messages...
    ]
  }
];

const AiCoach = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: string, content: string}[]>([
    { role: 'assistant', content: 'Hi there! I\'m your ADHD Focus Coach. How can I help you today?' }
  ]);
  const [loading, setLoading] = useState(false);
  const [llmProvider, setLlmProvider] = useState('openai');
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: 'user', content: message };
    setChatHistory([...chatHistory, userMessage]);
    setMessage('');
    setLoading(true);
    
    // In a real implementation, this would call an API endpoint
    // that interfaces with OpenAI, Claude, or Perplexity
    setTimeout(() => {
      const aiResponse = { 
        role: 'assistant', 
        content: 'I understand you need help with this task. Let\'s break it down into manageable steps. What specific challenges are you facing with this commitment?' 
      };
      setChatHistory(prev => [...prev, aiResponse]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">AI Coach</h1>
            <Link to="/past-conversations">
              <Button variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                Past Conversations
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <Tabs defaultValue="chat">
                <TabsList className="mb-4">
                  <TabsTrigger value="chat">Chat</TabsTrigger>
                  <TabsTrigger value="prompt-templates">Prompt Templates</TabsTrigger>
                </TabsList>
                
                <TabsContent value="chat" className="mt-0">
                  <Card className="h-[70vh] flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl">Chat with your AI Coach</CardTitle>
                      <CardDescription>
                        Ask for help breaking down tasks, staying motivated, or overcoming procrastination
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-grow overflow-y-auto space-y-4 pb-0">
                      {chatHistory.map((msg, index) => (
                        <div 
                          key={index} 
                          className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`flex max-w-[80%] ${
                              msg.role === 'user' 
                                ? 'ml-auto bg-primary text-primary-foreground' 
                                : 'bg-muted'
                            } rounded-lg px-4 py-2`}
                          >
                            {msg.role === 'assistant' && (
                              <Bot className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                            )}
                            <div className="break-words">{msg.content}</div>
                            {msg.role === 'user' && (
                              <User className="h-5 w-5 ml-2 flex-shrink-0 mt-1" />
                            )}
                          </div>
                        </div>
                      ))}
                      {loading && (
                        <div className="flex justify-start">
                          <div className="flex bg-muted rounded-lg px-4 py-2">
                            <Bot className="h-5 w-5 mr-2 flex-shrink-0" />
                            <p>Thinking...</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                    
                    <CardFooter className="pt-4">
                      <form onSubmit={handleSendMessage} className="w-full flex space-x-2">
                        <Input
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Type your message..."
                          className="flex-grow"
                          disabled={loading}
                        />
                        <Button type="submit" disabled={!message.trim() || loading}>
                          Send
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="prompt-templates" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Prompt Templates</CardTitle>
                      <CardDescription>
                        Custom prompts to help with different aspects of your ADHD journey
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button className="w-full justify-start h-auto py-3 px-4" variant="outline">
                        <div className="text-left">
                          <h3 className="font-medium mb-1">Task Breakdown</h3>
                          <p className="text-sm text-muted-foreground">
                            "Help me break down [task] into small, manageable steps."
                          </p>
                        </div>
                      </Button>
                      
                      <Button className="w-full justify-start h-auto py-3 px-4" variant="outline">
                        <div className="text-left">
                          <h3 className="font-medium mb-1">Overcome Procrastination</h3>
                          <p className="text-sm text-muted-foreground">
                            "I'm struggling to start [task]. Help me overcome my procrastination."
                          </p>
                        </div>
                      </Button>
                      
                      <Button className="w-full justify-start h-auto py-3 px-4" variant="outline">
                        <div className="text-left">
                          <h3 className="font-medium mb-1">Motivation Boost</h3>
                          <p className="text-sm text-muted-foreground">
                            "I need motivation to continue working on [task]."
                          </p>
                        </div>
                      </Button>
                      
                      <Button className="w-full justify-start h-auto py-3 px-4" variant="outline">
                        <div className="text-left">
                          <h3 className="font-medium mb-1">Time Management</h3>
                          <p className="text-sm text-muted-foreground">
                            "Help me create a schedule for completing [task] by [deadline]."
                          </p>
                        </div>
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>AI Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">LLM Provider</label>
                    <Select value={llmProvider} onValueChange={setLlmProvider}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select LLM provider" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="openai">OpenAI (GPT-4)</SelectItem>
                        <SelectItem value="anthropic">Anthropic (Claude)</SelectItem>
                        <SelectItem value="perplexity">Perplexity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Custom System Prompt</label>
                    <Textarea 
                      placeholder="You are an ADHD coach helping break tasks into manageable steps..."
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="outline" className="w-full">
                      <Settings className="mr-2 h-4 w-4" />
                      Advanced Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Recent Conversations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {conversationHistory.slice(0, 3).map((conv) => (
                    <Button key={conv.id} variant="ghost" className="w-full justify-start h-auto py-2">
                      <div className="text-left">
                        <h3 className="font-medium">{conv.title}</h3>
                        <p className="text-xs text-muted-foreground">{conv.date}</p>
                      </div>
                    </Button>
                  ))}
                </CardContent>
                <CardFooter>
                  <Link to="/past-conversations" className="w-full">
                    <Button variant="outline" size="sm" className="w-full">
                      View All Conversations
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AiCoach;
