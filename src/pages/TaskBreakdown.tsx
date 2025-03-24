
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Calendar, Clock, Edit } from 'lucide-react';

// Dummy data (would come from Firebase)
const commitments = {
  '1': {
    id: '1',
    title: 'Complete project presentation',
    description: 'Prepare and finalize the quarterly project presentation for the team meeting',
    deadline: '2023-11-15',
    progress: 30,
    tasks: [
      { id: 't1', title: 'Research industry trends', completed: true, duration: 30 },
      { id: 't2', title: 'Gather project metrics', completed: true, duration: 15 },
      { id: 't3', title: 'Create outline of slides', completed: false, duration: 20 },
      { id: 't4', title: 'Design visuals and charts', completed: false, duration: 45 },
      { id: 't5', title: 'Practice delivery', completed: false, duration: 30 },
    ]
  },
  '2': {
    id: '2',
    title: 'Clean apartment',
    description: 'Deep clean the apartment before visitors arrive on Saturday',
    deadline: '2023-11-10',
    progress: 60,
    tasks: [
      { id: 't6', title: 'Declutter living room', completed: true, duration: 15 },
      { id: 't7', title: 'Vacuum all floors', completed: true, duration: 20 },
      { id: 't8', title: 'Clean kitchen surfaces', completed: true, duration: 15 },
      { id: 't9', title: 'Mop kitchen and bathroom', completed: true, duration: 15 },
      { id: 't10', title: 'Clean bathroom fixtures', completed: true, duration: 10 },
      { id: 't11', title: 'Dust shelves and furniture', completed: false, duration: 15 },
      { id: 't12', title: 'Change bedsheets', completed: false, duration: 10 },
      { id: 't13', title: 'Take out trash', completed: false, duration: 5 },
    ]
  }
};

const TaskBreakdown = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, we would fetch this data from Firebase
  const commitment = id ? commitments[id as keyof typeof commitments] : null;
  
  if (!commitment) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Card className="text-center p-8">
              <CardContent className="pt-8">
                <p className="text-muted-foreground mb-4">Commitment not found.</p>
                <Link to="/dashboard">
                  <Button>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Return to Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const tasksCompleted = commitment.tasks.filter(task => task.completed).length;
  const totalTasks = commitment.tasks.length;
  const progressPercentage = Math.round((tasksCompleted / totalTasks) * 100);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">{commitment.title}</h1>
            <p className="text-muted-foreground mb-4">{commitment.description}</p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                <span>Due: {new Date(commitment.deadline).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                <span>Total time: ~{commitment.tasks.reduce((acc, task) => acc + task.duration, 0)} mins</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm text-muted-foreground">{progressPercentage}%</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="text-sm text-muted-foreground">
                {tasksCompleted} of {totalTasks} tasks completed
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Microtasks</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Edit className="mr-2 h-4 w-4" />
                Edit Tasks
              </Button>
              <Button size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule All
              </Button>
            </div>
          </div>
          
          <div className="space-y-3">
            {commitment.tasks.map((task) => (
              <Card key={task.id} className={task.completed ? "bg-secondary/50" : ""}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Checkbox id={task.id} checked={task.completed} />
                    <label
                      htmlFor={task.id}
                      className={`font-medium cursor-pointer ${task.completed ? "line-through text-muted-foreground" : ""}`}
                    >
                      {task.title}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-sm text-muted-foreground">{task.duration} mins</span>
                    <Button variant="ghost" size="sm" className="ml-2">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TaskBreakdown;
