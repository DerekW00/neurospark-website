import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Brain, CreditCard, Play, Info, HelpCircle, MessageSquare, Calendar, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full py-4 px-4 sm:px-6 border-b border-border bg-background/80 backdrop-blur-sm fixed top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-primary" />
            <div>
              <h1 className="text-xl font-semibold tracking-tight">NeuroSpark</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Your ADHD Commitment Coach</p>
            </div>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/features">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Info className="mr-2 h-4 w-4" />
                  Coach Features
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/how-it-works">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Brain className="mr-2 h-4 w-4" />
                  How Coaching Works
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Experience It</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <Link to="/demo" className="block p-3 space-y-1 rounded-md hover:bg-accent">
                    <div className="font-medium">Coach Demos</div>
                    <p className="text-sm text-muted-foreground">
                      See how your commitment coach helps you stay on track
                    </p>
                  </Link>
                  <Link to="/interactive-demo" className="block p-3 space-y-1 rounded-md hover:bg-accent">
                    <div className="font-medium">Try Your Coach</div>
                    <p className="text-sm text-muted-foreground">
                      Experience accountability coaching with our interactive demo
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/pricing">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Coaching Plans
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

        <div className="hidden md:flex space-x-2">
          <Link to="/contact">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <MessageSquare className="h-5 w-5" />
              <span className="ml-2 hidden sm:inline">Contact</span>
            </Button>
          </Link>
          <Link to="/interactive-demo">
            <Button size="sm" className="bg-primary">
              <Calendar className="mr-2 h-4 w-4" />
              Try Your Coach
            </Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-md z-20 px-4 py-4 flex flex-col space-y-3">
          <Link to="/features" className="flex items-center p-2 hover:bg-accent rounded-md" onClick={toggleMobileMenu}>
            <Info className="mr-2 h-5 w-5 text-primary" />
            <span>Coach Features</span>
          </Link>
          <Link to="/how-it-works" className="flex items-center p-2 hover:bg-accent rounded-md" onClick={toggleMobileMenu}>
            <Brain className="mr-2 h-5 w-5 text-primary" />
            <span>How Coaching Works</span>
          </Link>
          <Link to="/demo" className="flex items-center p-2 hover:bg-accent rounded-md" onClick={toggleMobileMenu}>
            <Play className="mr-2 h-5 w-5 text-primary" />
            <span>Coach Demos</span>
          </Link>
          <Link to="/interactive-demo" className="flex items-center p-2 hover:bg-accent rounded-md" onClick={toggleMobileMenu}>
            <Calendar className="mr-2 h-5 w-5 text-primary" />
            <span>Try Your Coach</span>
          </Link>
          <Link to="/pricing" className="flex items-center p-2 hover:bg-accent rounded-md" onClick={toggleMobileMenu}>
            <CreditCard className="mr-2 h-5 w-5 text-primary" />
            <span>Coaching Plans</span>
          </Link>
          <Link to="/faq" className="flex items-center p-2 hover:bg-accent rounded-md" onClick={toggleMobileMenu}>
            <HelpCircle className="mr-2 h-5 w-5 text-primary" />
            <span>FAQ</span>
          </Link>
          <Link to="/contact" className="flex items-center p-2 hover:bg-accent rounded-md" onClick={toggleMobileMenu}>
            <MessageSquare className="mr-2 h-5 w-5 text-primary" />
            <span>Contact</span>
          </Link>
          <div className="pt-2 border-t border-border">
            <Button asChild className="w-full" size="sm">
              <Link to="/interactive-demo" onClick={toggleMobileMenu}>
                Try Your Coach Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
