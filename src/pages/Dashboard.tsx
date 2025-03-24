
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Calendar, CheckCircle, Clock, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

// Dummy data (will be replaced with Firebase data)
const commitments = [
  {
    id: '1',
    title: 'Complete project presentation',
    progress: 30,
    deadline: '2023-11-15',
    tasksTotal: 5,
    tasksCompleted: 2
  },
  {
    id: '2',
    title: 'Clean apartment',
    progress: 60,
    deadline: '2023-11-10',
    tasksTotal: 8,
    tasksCompleted: 5
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">My Dashboard</h1>
            <Link to="/create-commitment">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Commitment
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active Commitments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold flex items-center">
                  {commitments.length}
                  <Brain className="ml-2 h-5 w-5 text-primary" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Completed Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold flex items-center">
                  7
                  <CheckCircle className="ml-2 h-5 w-5 text-green-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Focus Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold flex items-center">
                  3.5h
                  <Clock className="ml-2 h-5 w-5 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">Current Commitments</h2>
          
          {commitments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commitments.map((commitment) => (
                <Card key={commitment.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>{commitment.title}</CardTitle>
                    <CardDescription>Due: {new Date(commitment.deadline).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary" 
                          style={{ width: `${commitment.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{commitment.tasksCompleted} of {commitment.tasksTotal} tasks completed</span>
                        <span>{commitment.progress}% complete</span>
                      </div>
                      <div className="flex space-x-2">
                        <Link to={`/task/${commitment.id}`} className="flex-1">
                          <Button variant="outline" className="w-full">View Tasks</Button>
                        </Link>
                        <Link to="/calendar" className="flex-1">
                          <Button variant="outline" className="w-full">
                            <Calendar className="mr-2 h-4 w-4" />
                            Schedule
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center p-8">
              <CardContent className="pt-8">
                <p className="text-muted-foreground mb-4">You don't have any active commitments yet.</p>
                <Link to="/create-commitment">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Your First Commitment
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
