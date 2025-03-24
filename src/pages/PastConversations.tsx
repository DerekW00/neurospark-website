
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageSquare, Search, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// This would be fetched from Firebase in a real implementation
const mockConversations = [
  { 
    id: 'conv1', 
    title: 'Breaking down exam prep', 
    date: '2023-11-02', 
    preview: 'I need help breaking down my exam preparation...',
    messages: 8
  },
  { 
    id: 'conv2', 
    title: 'Apartment cleaning plan', 
    date: '2023-10-28',
    preview: 'I need to clean my apartment but feel overwhelmed...',
    messages: 12
  },
  { 
    id: 'conv3', 
    title: 'Work presentation strategy', 
    date: '2023-10-25',
    preview: 'I have a big presentation next week and need to prepare...',
    messages: 15
  },
  { 
    id: 'conv4', 
    title: 'Fitness routine planning', 
    date: '2023-10-20',
    preview: 'I want to start a consistent workout routine...',
    messages: 10
  },
  { 
    id: 'conv5', 
    title: 'Managing email overload', 
    date: '2023-10-15',
    preview: 'My inbox is overwhelming me. Need strategies...',
    messages: 7
  },
];

const PastConversations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [conversations, setConversations] = useState(mockConversations);
  
  const filteredConversations = searchQuery
    ? conversations.filter(conv => 
        conv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conv.preview.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : conversations;
    
  const handleDelete = (id: string) => {
    // In a real app, this would delete from Firebase
    setConversations(conversations.filter(conv => conv.id !== id));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Link to="/ai-coach">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to AI Coach
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Past Conversations</h1>
              <p className="text-muted-foreground">Review and search your previous coaching sessions</p>
            </div>
            
            <div className="w-full md:w-1/3">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
          
          {filteredConversations.length > 0 ? (
            <div className="space-y-4">
              {filteredConversations.map((conversation) => (
                <Card key={conversation.id} className="hover:shadow-sm transition-shadow">
                  <CardContent className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        <h2 className="font-semibold text-lg">{conversation.title}</h2>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{conversation.preview}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs text-muted-foreground">
                          {conversation.date}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {conversation.messages} messages
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 self-end md:self-auto">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/ai-coach?conversation=${conversation.id}`}>
                          View
                        </Link>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDelete(conversation.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center p-8">
              <CardContent className="pt-8">
                {searchQuery ? (
                  <>
                    <p className="text-muted-foreground mb-4">No conversations found matching "{searchQuery}"</p>
                    <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
                  </>
                ) : (
                  <>
                    <p className="text-muted-foreground mb-4">You don't have any saved conversations yet.</p>
                    <Link to="/ai-coach">
                      <Button>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Start a New Conversation
                      </Button>
                    </Link>
                  </>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PastConversations;
