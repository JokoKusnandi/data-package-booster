
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 'md',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={cn(
      "font-bold flex items-center gap-2", 
      sizeClasses[size],
      className
    )}>
      {variant === 'default' && (
        <div className="relative w-8 h-8 bg-xl-blue rounded-lg flex items-center justify-center text-white overflow-hidden">
          <span className="relative z-10">X</span>
          <div className="absolute inset-0 bg-gradient-to-tr from-xl-dark to-xl-light opacity-50"></div>
        </div>
      )}
      <span className="text-xl-blue font-extrabold">Data<span className="text-xl-light">Booster</span></span>
    </div>
  );
};

export default Logo;
