
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "This app has changed how I approach big projects. Breaking things down into microtasks makes starting so much easier.",
    name: "Alex Johnson",
    role: "Marketing Professional",
    avatar: "/placeholder.svg"
  },
  {
    quote: "As someone with ADHD, I've always struggled with overwhelming to-do lists. This approach actually works for my brain.",
    name: "Jamie Williams",
    role: "Graphic Designer",
    avatar: "/placeholder.svg"
  },
  {
    quote: "The way tasks are broken down and the gentle reminders have helped me stay consistent with my goals for the first time.",
    name: "Sam Taylor",
    role: "Software Developer",
    avatar: "/placeholder.svg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from people who have transformed how they approach their commitments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-0 overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="mb-6 text-lg italic text-foreground/90">"{testimonial.quote}"</div>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 border-2 border-primary/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
