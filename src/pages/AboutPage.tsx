
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Smartphone, Clock } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      <div className="page-container">
        {/* Hero Section */}
        <section className="pb-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-xl-blue/10 text-xl-blue">
                About Us
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-6">Enhancing Your Digital Experience</h1>
            <p className="text-lg text-muted-foreground">
              XL DataBooster provides specialized data packages designed to optimize your mobile experience 
              for the activities you love most.
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-secondary rounded-3xl">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-xl-blue to-xl-light/70 flex items-center justify-center p-12 animate-pulse-slow">
                  <div className="w-full h-full rounded-2xl bg-white/20 backdrop-blur-sm p-8 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl font-bold mb-2">15GB+</div>
                      <div className="text-xl opacity-80">Specialized Data</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 order-1 lg:order-2 animate-slide-up">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground">
                  At XL DataBooster, we understand that different online activities require different data solutions. 
                  That's why we've created specialized packages that give you more of what you love, whether that's 
                  streaming movies, listening to music, or connecting on social media.
                </p>
                <p className="text-muted-foreground">
                  Our mission is to provide affordable, transparent, and tailored data solutions that enhance your 
                  digital lifestyle without the worry of unexpected charges or data limitations.
                </p>
                <div className="pt-4">
                  <Button asChild className="bg-xl-blue hover:bg-xl-dark text-white">
                    <Link to="/packages" className="flex items-center gap-2">
                      Explore Our Packages <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do as we strive to provide the best mobile data experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Shield size={24} />}
              title="Reliability"
              description="We deliver consistent, high-quality data services you can count on every day."
            />
            <ValueCard 
              icon={<Zap size={24} />}
              title="Performance"
              description="Our packages are optimized for speed and efficiency in their specialized categories."
            />
            <ValueCard 
              icon={<Smartphone size={24} />}
              title="Innovation"
              description="We continuously improve our offerings to match evolving digital needs."
            />
            <ValueCard 
              icon={<Clock size={24} />}
              title="Transparency"
              description="Clear pricing, no hidden fees, and straightforward terms you can understand."
            />
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-secondary rounded-3xl">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The dedicated professionals behind XL DataBooster who work tirelessly to enhance your mobile experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TeamMember 
                name="Budi Winarno"
                role="Product Director"
                bio="Budi has over 15 years of experience in the telecommunications industry and leads our product development team."
              />
              <TeamMember 
                name="Rina Wijaya"
                role="Customer Experience Lead"
                bio="Rina ensures that our customers receive exceptional support and that our packages meet real user needs."
              />
              <TeamMember 
                name="Hadi Sutrisno"
                role="Technical Operations Manager"
                bio="Hadi oversees the technical infrastructure that keeps our data packages running smoothly and efficiently."
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose from our specialized data packages and transform your mobile experience today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-xl-blue hover:bg-xl-dark text-white">
                <Link to="/packages">
                  Get Started
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-xl-blue/20 text-xl-blue hover:bg-xl-blue/5">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-xl border border-border bg-white hover:shadow-md transition-all animate-fade-in">
      <div className="h-12 w-12 rounded-lg bg-xl-blue/10 flex items-center justify-center text-xl-blue mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio }) => {
  return (
    <div className="p-6 rounded-xl bg-white border border-border hover:shadow-md transition-all animate-fade-in">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-xl-blue to-xl-light mx-auto mb-4"></div>
      <div className="text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-xl-blue font-medium text-sm mb-3">{role}</p>
        <p className="text-muted-foreground text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default AboutPage;
