
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';


const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-12 border-t">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm max-w-xs">
              Unlock the full potential of your XL connection with our premium data packages.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4">Packages</h4>
            <ul className="space-y-2">
              <FooterLink to="/packages/film">Film Package</FooterLink>
              <FooterLink to="/packages/music">Music Package</FooterLink>
              <FooterLink to="/packages/socmed">Social Media Package</FooterLink>
              <FooterLink to="/packages/complete">Complete Package</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/support">Support</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/cookies">Cookie Policy</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} DataBooster. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <SocialLink href="#" label="Twitter" />
            <SocialLink href="#" label="Facebook" />
            <SocialLink href="#" label="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link 
        to={to} 
        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
      >
        {children}
      </Link>
    </li>
  );
};

interface SocialLinkProps {
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
    >
      {label}
    </a>
  );
};

export default Footer;
