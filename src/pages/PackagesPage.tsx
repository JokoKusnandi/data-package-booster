
import React from 'react';
import Layout from '@/components/Layout';
import PackageCard from '@/components/PackageCard';
import packagesData from '@/data/packages';

const PackagesPage = () => {
  return (
    <Layout>
      <div className="page-container">
        <section className="pb-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-xl-blue/10 text-xl-blue">
                Data Packages
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-6">Choose Your Perfect XL Booster Package</h1>
            <p className="text-lg text-muted-foreground">
              Select from our range of specialized data packages designed to enhance your digital experience. 
              Subscribe monthly for the best value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packagesData.map((pkg) => (
              <div key={pkg.id} className="animate-fade-in">
                <PackageCard 
                  packageData={pkg} 
                  featured={pkg.id === 'complete-30gb'} 
                />
              </div>
            ))}
          </div>
        </section>
        
        <section className="py-16 border-t">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <FaqItem 
                question="How do I activate my data package?"
                answer="After purchasing your chosen package, you'll receive an activation SMS. Follow the instructions to activate your package immediately. Alternatively, you can activate through the XL mobile app."
              />
              <FaqItem 
                question="What's the difference between one-time purchase and subscription?"
                answer="A one-time purchase is valid for 30 days and doesn't renew automatically. A subscription will automatically renew each month and comes with a discount."
              />
              <FaqItem 
                question="Can I cancel my subscription anytime?"
                answer="Yes, you can cancel your subscription at any time through your account settings or by contacting our customer support. The package will remain active until the end of the current billing period."
              />
              <FaqItem 
                question="Do unused data roll over to the next month?"
                answer="No, unused data does not roll over to the next month. Each package is valid for 30 days from activation."
              />
              <FaqItem 
                question="Which streaming platforms are covered in the Film package?"
                answer="The Film package covers all major streaming platforms including Netflix, Disney+, HBO Max, Amazon Prime Video, and local streaming services."
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <div className="border-b pb-4 animate-fade-in">
      <h3 className="text-lg font-medium mb-2">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
};

export default PackagesPage;
