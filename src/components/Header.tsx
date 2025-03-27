import React from 'react';
import { Button } from "@/components/ui/button";
import { Brain, CreditCard, Play, Info, HelpCircle, MessageSquare } from 'lucide-react';
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
              <Link to="/features">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Info className="mr-2 h-4 w-4" />
                  Features
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/how-it-works">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Brain className="mr-2 h-4 w-4" />
                  How It Works
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Demos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <Link to="/demo" className="block p-3 space-y-1 rounded-md hover:bg-accent">
                    <div className="font-medium">Video Demos</div>
                    <p className="text-sm text-muted-foreground">
                      Watch NeuroSpark in action with guided demos
                    </p>
                  </Link>
                  <Link to="/interactive-demo" className="block p-3 space-y-1 rounded-md hover:bg-accent">
                    <div className="font-medium">Interactive Demo</div>
                    <p className="text-sm text-muted-foreground">
                      Try out NeuroSpark's core features yourself
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/pricing">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pricing
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/faq">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  FAQ
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex space-x-2">
          <Link to="/contact">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <MessageSquare className="h-5 w-5" />
              <span className="ml-2 hidden sm:inline">Contact</span>
            </Button>
          </Link>
          <Link to="/interactive-demo">
            <Button size="sm" className="bg-primary">
              <Play className="mr-2 h-4 w-4" />
              Try Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
