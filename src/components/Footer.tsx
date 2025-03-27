import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold tracking-tight">NeuroSpark</span>
            </div>
            <p className="text-muted-foreground">
              An ADHD-friendly commitment coach that helps you break down goals into achievable steps.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Demos</h3>
            <ul className="space-y-3">
              <li><Link to="/demo" className="text-muted-foreground hover:text-foreground transition-colors">Video Demos</Link></li>
              <li><Link to="/interactive-demo" className="text-muted-foreground hover:text-foreground transition-colors">Interactive Demo</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Sales</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><a href="https://neurospark.ai/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="https://neurospark.ai/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><a href="https://neurospark.ai/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="https://neurospark.ai/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NeuroSpark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
