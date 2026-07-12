
import React from 'react';
import { cn } from '@/lib/utils';
import { Film, Music, Share2, Layout, Briefcase, Calendar, Clock, Phone } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn(
      "relative p-6 rounded-2xl transition-all", 
      "border border-border hover:border-xl-blue/20",
      "bg-white hover:shadow-md",
      className
    )}>
      <div className="flex gap-5">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-xl-blue/10 text-xl-blue">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const PackageFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Specialized Data Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package that fits your digital lifestyle. Our specialized data plans are designed to enhance your online activities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Feature 
            icon={<Film size={24} />}
            title="Film Package"
            description="15GB dedicated for streaming movies, TV shows and videos. Never worry about buffering again."
            className="animate-fade-in"
          />
          <Feature 
            icon={<Music size={24} />}
            title="Music Package"
            description="15GB for music streaming services. Listen to your favorite tracks anytime, anywhere."
            className="animate-fade-in"
          />
          <Feature 
            icon={<Share2 size={24} />}
            title="Social Media Package"
            description="15GB for all your social networking needs. Stay connected with friends and family."
            className="animate-fade-in"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Feature 
            icon={<Layout size={24} />}
            title="Complete Package"
            description="30GB for everything you love. The ultimate package for digital enthusiasts."
            className="animate-fade-in"
          />
          <Feature 
            icon={<Briefcase size={24} />}
            title="PRIO Bekerja & Belajar"
            description="Optimized packages for work and study with prioritized bandwidth for productivity applications."
            className="animate-fade-in"
          />
          <Feature 
            icon={<Calendar size={24} />}
            title="PAKET BOOSTER Bulanan"
            description="High-capacity monthly packages from 30GB to 75GB with subscription savings."
            className="animate-fade-in"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <Feature 
            icon={<Clock size={24} />}
            title="PAKET BOOSTER Harian"
            description="Short-term data solutions for 3 or 5 days with 2GB capacity for temporary needs."
            className="animate-fade-in"
          />
          <Feature 
            icon={<Phone size={24} />}
            title="OffNet Booster"
            description="Call and SMS packages for communication with other networks, available as one-time or recurring purchases."
            className="animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default PackageFeatures;
