
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Clock, Plus } from 'lucide-react';

// Dummy events data (will connect to Firebase later)
const events = [
  { id: '1', title: 'Research topics', time: '9:00 AM - 10:00 AM', commitmentId: '1' },
  { id: '2', title: 'Outline presentation', time: '2:00 PM - 3:00 PM', commitmentId: '1' },
  { id: '3', title: 'Clean kitchen', time: '4:00 PM - 5:00 PM', commitmentId: '2' },
];

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Schedule Task
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
              </CardHeader>
              <CardContent>
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>
                  {date ? date.toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  }) : 'Schedule'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {events.length > 0 ? (
                  <div className="space-y-4">
                    {events.map((event) => (
                      <div key={event.id} className="flex items-start p-3 rounded-lg border hover:bg-accent transition-colors">
                        <div className="mr-4 mt-0.5">
                          <Clock className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.time}</p>
                        </div>
                        <Button variant="ghost" size="sm">View</Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-muted-foreground mb-4">No tasks scheduled for this day</p>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Task
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calendar;
