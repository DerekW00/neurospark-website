import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, Brain, ArrowRight, Calendar, ListChecks } from 'lucide-react';

const InteractiveDemo = () => {
    const [taskInput, setTaskInput] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    // Sample microtasks that would be generated by AI
    const sampleMicrotasks = [
        { id: 1, title: 'Create project outline', duration: 15, completed: false },
        { id: 2, title: 'Gather reference materials', duration: 15, completed: false },
        { id: 3, title: 'Draft introduction section', duration: 15, completed: false },
        { id: 4, title: 'Write main arguments', duration: 15, completed: false },
        { id: 5, title: 'Add supporting examples', duration: 15, completed: false },
        { id: 6, title: 'Create conclusion', duration: 15, completed: false },
        { id: 7, title: 'Review for clarity', duration: 15, completed: false },
        { id: 8, title: 'Format document', duration: 15, completed: false },
    ];

    // Sample AI coaching responses
    const coachingResponses = [
        "I notice you've been working steadily! Great job maintaining focus. Remember to take a short break after this task.",
        "This task might feel challenging, but breaking it down has made it manageable. Which microtask feels most approachable right now?",
        "You're making excellent progress! Remember that perfectionism can be an ADHD trap - done is better than perfect.",
        "If you're feeling stuck, try the 'body doubling' technique - work alongside someone else (even virtually) to help maintain focus."
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate processing delay
        setTimeout(() => {
            setIsProcessing(false);
            setShowResults(true);
        }, 2000);
    };

    const handleTaskSelect = (task) => {
        setSelectedTask(task);
    };

    const handleReset = () => {
        setTaskInput('');
        setShowResults(false);
        setSelectedTask(null);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-20">
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                Try NeuroSpark Now
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Experience how NeuroSpark breaks down overwhelming tasks into manageable steps. Enter a task below to see it in action.
                            </p>
                        </div>

                        {!showResults ? (
                            <Card className="max-w-2xl mx-auto">
                                <CardHeader>
                                    <CardTitle>Enter a Task to Break Down</CardTitle>
                                    <CardDescription>
                                        Describe a project or task you're working on, and we'll break it down into ADHD-friendly microtasks.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="task">Task or Project</Label>
                                            <Textarea
                                                id="task"
                                                placeholder="e.g., Write a research paper about climate change"
                                                value={taskInput}
                                                onChange={(e) => setTaskInput(e.target.value)}
                                                className="h-32"
                                                required
                                            />
                                        </div>
                                        <Button type="submit" className="w-full" disabled={isProcessing}>
                                            {isProcessing ? 'Processing...' : 'Break Down My Task'}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        ) : (
                            <div className="space-y-8">
                                <Card>
                                    <CardHeader>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <CardTitle>Your Task: {taskInput || 'Write a research paper about climate change'}</CardTitle>
                                                <CardDescription>
                                                    Here's how we've broken down your task into manageable microtasks
                                                </CardDescription>
                                            </div>
                                            <Button variant="outline" onClick={handleReset}>Start Over</Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <Tabs defaultValue="breakdown" className="w-full">
                                            <TabsList className="grid w-full grid-cols-3">
                                                <TabsTrigger value="breakdown">Task Breakdown</TabsTrigger>
                                                <TabsTrigger value="schedule">Suggested Schedule</TabsTrigger>
                                                <TabsTrigger value="coach">AI Coach</TabsTrigger>
                                            </TabsList>

                                            <TabsContent value="breakdown" className="space-y-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                                    {sampleMicrotasks.map((task) => (
                                                        <div
                                                            key={task.id}
                                                            className={`border rounded-lg p-4 cursor-pointer transition-colors ${selectedTask && selectedTask.id === task.id
                                                                    ? 'bg-primary/10 border-primary'
                                                                    : 'hover:bg-muted'
                                                                }`}
                                                            onClick={() => handleTaskSelect(task)}
                                                        >
                                                            <div className="flex items-start space-x-3">
                                                                <Clock className="h-5 w-5 text-primary mt-0.5" />
                                                                <div>
                                                                    <p className="font-medium">{task.title}</p>
                                                                    <p className="text-sm text-muted-foreground">
                                                                        {task.duration} min · {task.completed ? 'Completed' : 'Not started'}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {selectedTask && (
                                                    <Card className="mt-8 border-primary/50">
                                                        <CardHeader>
                                                            <CardTitle className="text-xl">{selectedTask.title}</CardTitle>
                                                            <CardDescription>Details and next steps</CardDescription>
                                                        </CardHeader>
                                                        <CardContent className="space-y-4">
                                                            <div>
                                                                <h4 className="font-medium mb-2">Suggested approach:</h4>
                                                                <p className="text-muted-foreground">
                                                                    Focus on this task for just 15 minutes. Set a timer and try to complete it without distractions. If you need more time, you can continue or take a short break.
                                                                </p>
                                                            </div>
                                                            <div className="flex space-x-2">
                                                                <Button className="flex-1">Mark Complete</Button>
                                                                <Button variant="outline" className="flex-1">Reschedule</Button>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                )}
                                            </TabsContent>

                                            <TabsContent value="schedule">
                                                <div className="mt-6 space-y-6">
                                                    <div className="border rounded-lg overflow-hidden">
                                                        <div className="bg-muted p-4 border-b">
                                                            <h3 className="font-medium">Today's Schedule</h3>
                                                        </div>
                                                        <div className="divide-y">
                                                            <div className="p-4 flex items-center justify-between">
                                                                <div className="flex items-center space-x-3">
                                                                    <Calendar className="h-5 w-5 text-primary" />
                                                                    <div>
                                                                        <p className="font-medium">9:00 AM - 9:15 AM</p>
                                                                        <p className="text-sm text-muted-foreground">Create project outline</p>
                                                                    </div>
                                                                </div>
                                                                <Button size="sm" variant="outline">Reschedule</Button>
                                                            </div>
                                                            <div className="p-4 flex items-center justify-between">
                                                                <div className="flex items-center space-x-3">
                                                                    <Calendar className="h-5 w-5 text-primary" />
                                                                    <div>
                                                                        <p className="font-medium">10:30 AM - 10:45 AM</p>
                                                                        <p className="text-sm text-muted-foreground">Gather reference materials</p>
                                                                    </div>
                                                                </div>
                                                                <Button size="sm" variant="outline">Reschedule</Button>
                                                            </div>
                                                            <div className="p-4 flex items-center justify-between">
                                                                <div className="flex items-center space-x-3">
                                                                    <Calendar className="h-5 w-5 text-primary" />
                                                                    <div>
                                                                        <p className="font-medium">2:00 PM - 2:15 PM</p>
                                                                        <p className="text-sm text-muted-foreground">Draft introduction section</p>
                                                                    </div>
                                                                </div>
                                                                <Button size="sm" variant="outline">Reschedule</Button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <Card>
                                                            <CardHeader className="pb-2">
                                                                <CardTitle className="text-lg">Energy Levels</CardTitle>
                                                            </CardHeader>
                                                            <CardContent>
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between items-center">
                                                                        <span>Morning</span>
                                                                        <div className="w-24 h-3 bg-muted rounded-full overflow-hidden">
                                                                            <div className="w-5/6 h-full bg-green-500"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex justify-between items-center">
                                                                        <span>Afternoon</span>
                                                                        <div className="w-24 h-3 bg-muted rounded-full overflow-hidden">
                                                                            <div className="w-1/2 h-full bg-yellow-500"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex justify-between items-center">
                                                                        <span>Evening</span>
                                                                        <div className="w-24 h-3 bg-muted rounded-full overflow-hidden">
                                                                            <div className="w-2/3 h-full bg-green-500"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>

                                                        <Card>
                                                            <CardHeader className="pb-2">
                                                                <CardTitle className="text-lg">Task Distribution</CardTitle>
                                                            </CardHeader>
                                                            <CardContent>
                                                                <div className="flex items-center justify-center h-20">
                                                                    <div className="flex items-end space-x-2">
                                                                        <div className="h-16 w-8 bg-primary/30 rounded-t"></div>
                                                                        <div className="h-12 w-8 bg-primary/50 rounded-t"></div>
                                                                        <div className="h-8 w-8 bg-primary/70 rounded-t"></div>
                                                                        <div className="h-4 w-8 bg-primary rounded-t"></div>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>

                                                        <Card>
                                                            <CardHeader className="pb-2">
                                                                <CardTitle className="text-lg">Focus Times</CardTitle>
                                                            </CardHeader>
                                                            <CardContent>
                                                                <div className="space-y-2 text-center">
                                                                    <p className="text-3xl font-bold text-primary">8:30 - 11:30 AM</p>
                                                                    <p className="text-sm text-muted-foreground">Recommended focus period</p>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </div>
                                                </div>
                                            </TabsContent>

                                            <TabsContent value="coach">
                                                <div className="mt-6 space-y-6">
                                                    <div className="border rounded-lg p-6 bg-primary/5">
                                                        <div className="flex items-start space-x-4">
                                                            <Brain className="h-8 w-8 text-primary mt-1" />
                                                            <div>
                                                                <h3 className="font-medium text-lg mb-2">Your AI Coach</h3>
                                                                <p className="text-muted-foreground">
                                                                    {coachingResponses[0]}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <Card>
                                                            <CardHeader>
                                                                <CardTitle className="text-lg">ADHD-Friendly Strategies</CardTitle>
                                                            </CardHeader>
                                                            <CardContent className="space-y-3">
                                                                <div className="flex items-start space-x-2">
                                                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                                                    <p>Use the Pomodoro technique: 15 min of focus, then a 5 min break</p>
                                                                </div>
                                                                <div className="flex items-start space-x-2">
                                                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                                                    <p>Set up a distraction-free environment</p>
                                                                </div>
                                                                <div className="flex items-start space-x-2">
                                                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                                                    <p>Use visual cues to maintain focus</p>
                                                                </div>
                                                            </CardContent>
                                                        </Card>

                                                        <Card>
                                                            <CardHeader>
                                                                <CardTitle className="text-lg">Progress Metrics</CardTitle>
                                                            </CardHeader>
                                                            <CardContent>
                                                                <div className="space-y-4">
                                                                    <div>
                                                                        <div className="flex justify-between">
                                                                            <span>Task Completion</span>
                                                                            <span>0/8</span>
                                                                        </div>
                                                                        <div className="w-full h-2 bg-muted rounded-full mt-1">
                                                                            <div className="w-0 h-full bg-primary rounded-full"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="flex justify-between">
                                                                            <span>Focus Time</span>
                                                                            <span>0 minutes</span>
                                                                        </div>
                                                                        <div className="w-full h-2 bg-muted rounded-full mt-1">
                                                                            <div className="w-0 h-full bg-primary rounded-full"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </div>
                                                </div>
                                            </TabsContent>
                                        </Tabs>
                                    </CardContent>
                                </Card>

                                <div className="text-center">
                                    <h3 className="text-2xl font-bold mb-4">Ready to get started with your own tasks?</h3>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <Button asChild size="lg">
                                            <Link to="/pricing">
                                                Sign Up Now
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                        <Button variant="outline" size="lg" asChild>
                                            <Link to="/features">
                                                Learn More
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default InteractiveDemo; 