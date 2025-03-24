import React from 'react';
import { Brain, Calendar, CheckCircle, ListTodo } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "AI Task Breakdown",
    description: "Our AI assistant breaks down your goals into achievable microtasks of 15 minutes or less."
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "Smart Scheduling",
    description: "Effortlessly schedule your microtasks in your calendar with intelligent time allocation."
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: "Progress Tracking",
    description: "Visual indicators show your progress and provide positive reinforcement."
  },
  {
    icon: <ListTodo className="h-10 w-10 text-primary" />,
    title: "Minimal Interface",
    description: "Clean, distraction-free design reduces cognitive load and helps maintain focus."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">How NeuroSpark Helps You</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Designed specifically for ADHD minds, our app helps you overcome common challenges and achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
