import React from 'react';
import { Button } from "@/components/ui/button";
import { Brain, Calendar, Home, MessageSquare, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 border-b border-border bg-background/80 backdrop-blur-sm fixed top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold tracking-tight">NeuroSpark</h1>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/create-commitment">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Brain className="mr-2 h-4 w-4" />
                  Create
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/calendar">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/ai-coach">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  AI Coach
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <Link to="/how-it-works" className="block p-3 space-y-1 rounded-md hover:bg-accent">
                    <div className="font-medium">How It Works</div>
                    <p className="text-sm text-muted-foreground">
                      Learn how NeuroSpark helps you stay on track
                    </p>
                  </Link>
                  <Link to="/features" className="block p-3 space-y-1 rounded-md hover:bg-accent">
                    <div className="font-medium">Features</div>
                    <p className="text-sm text-muted-foreground">
                      Discover all the tools designed for your ADHD brain
                    </p>
                  </Link>
                  <Link to="/faq" className="block p-3 space-y-1 rounded-md hover:bg-accent">
                    <div className="font-medium">FAQ</div>
                    <p className="text-sm text-muted-foreground">
                      Find answers to frequently asked questions
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex space-x-2">
          <Link to="/settings">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/sign-in">
            <Button size="sm">Sign In</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
