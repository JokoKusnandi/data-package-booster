
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
// import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import Logo from './Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  // const [user, setUser] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  // const [profile, setProfile] = useState<any>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // useEffect(() => {
  //   const getUser = async () => {
  //     const { data } = await supabase.auth.getUser();
  //     setUser(data.user);
      
  //     // Fetch user profile if logged in
  //     if (data.user) {
  //       const { data: profileData, error } = await supabase
  //         .from('profiles')
  //         .select('*')
  //         .eq('id', data.user.id)
  //         .single();
          
  //       if (!error && profileData) {
  //         setProfile(profileData);
  //       }
  //     }
  //   };
    
  //   getUser();
    
  //   const { data: { subscription } } = supabase.auth.onAuthStateChange(
  //     async (_event, session) => {
  //       setUser(session?.user || null);
        
  //       // Update profile when auth changes
  //       if (session?.user) {
  //         const { data: profileData, error } = await supabase
  //           .from('profiles')
  //           .select('*')
  //           .eq('id', session.user.id)
  //           .single();
            
  //         if (!error && profileData) {
  //           setProfile(profileData);
  //         }
  //       } else {
  //         setProfile(null);
  //       }
  //     }
  //   );
    
  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // const handleSignOut = async () => {
  //   try {
  //     await supabase.auth.signOut();
  //     setProfile(null);
  //     toast.success('Signed out successfully');
  //     navigate('/');
  //   } catch (error: any) {
  //     toast.error(error.message || 'Failed to sign out');
  //   }
  // };
  

  const handleSignOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setUser(null);

    toast.success("Signed out successfully");

    navigate("/");
  };

    // const displayName = profile?.username || profile?.full_name || user?.email?.split('@')[0] || 'User';
    const displayName =
  user?.username ||
  user?.fullName ||
  user?.email?.split("@")[0] ||
  "User";
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
      scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center space-x-1">
          <NavItem to="/" label="Home" />
          <NavItem to="/packages" label="Packages" />
          <NavItem to="/about" label="About" />
        </div>
        
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-foreground hidden md:inline">
                Hello, {displayName}
              </span>
              <Button 
                variant="ghost" 
                className="text-xl-blue hover:text-xl-dark hover:bg-xl-light/10"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Button 
              variant="ghost" 
              className="text-xl-blue hover:text-xl-dark hover:bg-xl-light/10"
              onClick={() => navigate('/auth')}
            >
              Sign In
            </Button>
          )}
          
          <Button 
            className="bg-xl-blue hover:bg-xl-dark text-white"
            onClick={() => navigate(user ? '/packages' : '/auth')}
          >
            {user ? 'Get Packages' : 'Get Started'}
          </Button>
        </div>
      </div>
    </header>
  );
};

interface NavItemProps {
  to: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label }) => {
  return (
    <Link 
      to={to} 
      className="px-3 py-2 rounded-md text-foreground/80 hover:text-xl-blue transition-colors"
    >
      {label}
    </Link>
  );
};

export default Header;
