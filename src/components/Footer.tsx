import React from 'react';
import { Brain, Heart, Github, Twitter, Mail, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import DisclaimerBanner from './DisclaimerBanner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FooterSignupForm from './FooterSignupForm';

const Footer = () => {
  return (
    <>
      <DisclaimerBanner />
      <footer className="bg-muted/30 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-primary" />
                <span className="text-xl font-semibold tracking-tight">NeuroSpark</span>
              </div>
              <p className="text-muted-foreground mb-4">
                An ADHD-friendly commitment coach that helps you break down goals into achievable steps.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:derekderuiwang@gmail.com" className="hover:text-foreground transition-colors">derekderuiwang@gmail.com</a>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+15109825319" className="hover:text-foreground transition-colors">+1 (510) 982-5319</a>
                </div>
              </div>
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
                <li><Link to="/try-it-now" className="text-muted-foreground hover:text-foreground transition-colors">Try It Free</Link></li>
                <li><Link to="/waitlist" className="text-muted-foreground hover:text-foreground transition-colors">Join Waitlist</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link to="/waitlist" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Subscribe to Updates</h3>
              <FooterSignupForm />
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} NeuroSpark. All rights reserved.</p>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="font-medium">Prototype:</span> This website demonstrates the NeuroSpark concept and is not a fully functional product.
            </p>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://github.com/DerekW00"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/derekderuiwang"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="mr-1">Built by</span>
                <Heart className="h-4 w-4 text-red-500 mx-1" />
                <a href="https://derekderuiwang.me" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                  Derui (Derek) Wang
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
