
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import PackageFeatures from '@/components/PackageFeatures';
import PackageCard from '@/components/PackageCard';
import packagesData from '@/data/packages';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const Index = () => {
  // Feature the Complete package
  const featuredPackage = packagesData.find(pkg => pkg.id === 'complete-30gb');
  
  return (
    <Layout>
      <Hero />
      
      <PackageFeatures />
      
      {/* Featured Package */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-xl animate-slide-up">
              <div className="inline-block mb-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-xl-blue/10 text-xl-blue">
                  Featured Package
                </span>
              </div>
              
              <h2 className="text-3xl font-bold leading-tight">
                Get the Complete Package for the Ultimate Experience
              </h2>
              
              <p className="text-muted-foreground">
                Our most popular package gives you 30GB of data for all your streaming, social media, and browsing needs. 
                Save 20% with a monthly subscription!
              </p>
              
              <ul className="space-y-3">
                {featuredPackage?.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-xl-blue/10 flex items-center justify-center text-xl-blue">
                      <Check size={14} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <Button asChild className="bg-xl-blue hover:bg-xl-dark text-white">
                  <Link to="/packages" className="flex items-center gap-2">
                    View All Packages <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              {featuredPackage && (
                <PackageCard 
                  packageData={featuredPackage} 
                  featured={true} 
                  className="max-w-md mx-auto"
                />
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who have boosted their mobile experience with our data packages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial 
              quote="The Film package is exactly what I needed. Now I can stream my favorite shows without worrying about running out of data."
              author="Ahmad Rizky"
              role="Film Enthusiast"
            />
            <Testimonial 
              quote="I use the Music package every day during my commute. The sound quality is amazing and my data never runs out!"
              author="Sari Dewi"
              role="Music Lover"
              featured={true}
            />
            <Testimonial 
              quote="With the Complete package, I can do everything I want online. It's worth every rupiah for the convenience."
              author="Budi Santoso"
              role="Digital Nomad"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-xl-blue/5 border-y border-xl-blue/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Boost Your XL Experience?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose the perfect data package that suits your digital lifestyle and enjoy seamless connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </Layout>
  );
};

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  featured?: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, featured = false }) => {
  return (
    <div className={`p-6 rounded-2xl animate-fade-in ${
      featured 
        ? 'bg-white border-xl-blue/20 border shadow-lg' 
        : 'bg-white border border-border hover:shadow-md'
    } transition-all`}>
      <div className="mb-4 text-xl-blue">
        {"★".repeat(5)}
      </div>
      <p className="text-foreground mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

export default Index;
