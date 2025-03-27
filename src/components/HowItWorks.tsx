import React from 'react';

const steps = [
  {
    number: "01",
    title: "Share Your Commitments",
    description: "Tell your coach what you need to accomplish, whether it's a presentation, cleaning your apartment, or a personal goal you've been struggling with."
  },
  {
    number: "02",
    title: "Get a Personalized Plan",
    description: "Your coach breaks down overwhelming projects into bite-sized 15-minute microtasks designed specifically for your ADHD brain."
  },
  {
    number: "03",
    title: "See Your Schedule Visually",
    description: "Combat time blindness by seeing your tasks on your calendar, helping you understand exactly when and how long each commitment will take."
  },
  {
    number: "04",
    title: "Receive Ongoing Support",
    description: "Your coach checks in regularly with timely reminders, emotional support, and gentle accountability to keep you on track even when motivation fades."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Your Commitment Coach Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            NeuroSpark replicates the proven methods of effective ADHD coaching at a fraction of the cost
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-center">
                <div className="text-5xl font-bold text-primary/20">{step.number}</div>

                {/* Connector line to the next step */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block h-px bg-primary/20 flex-grow ml-4" />
                )}
              </div>

              <h3 className="text-xl font-semibold mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
