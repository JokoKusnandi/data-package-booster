
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn("relative overflow-hidden py-20 sm:py-32", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-background -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-xl-blue/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-slide-down">
            <div className="inline-block mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-xl-blue/10 text-xl-blue">
                XL Data Package Booster
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
              Supercharge Your <span className="text-xl-blue">Mobile Experience</span> with Premium Data Packages
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unlock unlimited streaming, faster downloads, and seamless connectivity with XL Booster packages tailored to your digital lifestyle.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-200">
            <Button asChild size="lg" className="bg-xl-blue hover:bg-xl-dark text-white">
              <Link to="/packages">
                Explore Packages
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-xl-blue/20 text-xl-blue hover:bg-xl-blue/5">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;