import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface PackageData {
  id: string;
  title: string;
  type: 'Film' | 'Music' | 'Socmed' | 'Complete' | 'PRIO' | 'Monthly' | 'Daily' | 'OffNet';
  size: string;
  oneTimePurchase: number;
  subscription: number | null;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  validity?: string;
  mechanism?: 'OTC' | 'REC';
}

interface PackageCardProps {
  packageData: PackageData;
  featured?: boolean;
  className?: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ 
  packageData, 
  featured = false,
  className 
}) => {
  const { id, title, type, size, oneTimePurchase, subscription, description, features, icon, color, validity } = packageData;
  
  // Color mapping to handle different color values
  const getColorClasses = (colorName: string) => {
    const colorMap: Record<string, { bg: string, text: string, border: string }> = {
      'red': { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200' },
      'green': { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' },
      'blue': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
      'purple': { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' },
      'amber': { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200' },
      'indigo': { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-200' },
      'orange': { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200' },
      'cyan': { bg: 'bg-cyan-100', text: 'text-cyan-700', border: 'border-cyan-200' }
    };
    
    return colorMap[colorName] || { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200' };
  };
  
  const colorClasses = getColorClasses(color);
  
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 border",
      featured ? "shadow-xl scale-105 border-xl-blue/20" : "hover:shadow-md hover:-translate-y-1",
      className
    )}>
      {featured && (
        <div className="bg-xl-blue text-white text-xs font-medium py-1 text-center">
          RECOMMENDED
        </div>
      )}
      
      <CardHeader className={cn("pb-4")}>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className={cn("font-medium", colorClasses.bg, colorClasses.text, colorClasses.border)}>
            {type}
          </Badge>
          <div className={cn(`p-2 rounded-full bg-muted flex items-center justify-center ${colorClasses.text}`)}>
            {icon}
          </div>
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-xl-blue font-bold">{size}</span>
          {validity && (
            <Badge variant="secondary" className="text-xs">
              {validity}
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm">{description}</p>
        
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">One-time Purchase</span>
            <span className="font-bold text-lg">Rp {oneTimePurchase.toLocaleString()}</span>
          </div>
          {subscription !== null && (
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Monthly Subscription</span>
              <span className="font-bold text-lg text-xl-blue">Rp {subscription.toLocaleString()}</span>
            </div>
          )}
        </div>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm flex items-start gap-2">
              <span className="text-xl-blue text-lg">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="flex flex-col space-y-3 pt-2">
        {subscription !== null ? (
          <>
            <Button asChild className="w-full bg-xl-blue hover:bg-xl-dark">
              <Link to={`/purchase/${id}`}>
                Subscribe
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full border-xl-blue/20 text-xl-blue hover:bg-xl-blue/5">
              <Link to={`/purchase/${id}?type=one-time`}>
                One-time Purchase
              </Link>
            </Button>
          </>
        ) : (
          <Button asChild className="w-full bg-xl-blue hover:bg-xl-dark">
            <Link to={`/purchase/${id}?type=one-time`}>
              Purchase
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
