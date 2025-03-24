import React from 'react';

const steps = [
  {
    number: "01",
    title: "Create a Commitment",
    description: "Set a goal you want to achieve, like 'Prepare for my presentation' or 'Clean my apartment'."
  },
  {
    number: "02",
    title: "Get AI-Generated Microtasks",
    description: "Our AI breaks down your goal into specific, actionable tasks that take 15 minutes or less."
  },
  {
    number: "03",
    title: "Schedule with One Click",
    description: "Add tasks to your calendar with intelligent scheduling that works with your available time."
  },
  {
    number: "04",
    title: "Stay on Track",
    description: "Receive gentle reminders and check-ins to keep you focused and celebrate your progress."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Simple Steps to Get Started</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            NeuroSpark makes it easy to turn overwhelming goals into manageable tasks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-bold text-primary/20 mb-2">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent -translate-x-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
