
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import axios from "axios";
// import { supabase } from '@/integrations/supabase/client';

type AuthMode = 'signin' | 'signup';

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [mode, setMode] = useState<AuthMode>('signin');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === 'signin') {
        // const response = await axios.post(
        //     "http://localhost:8080/api/auth/login",
        //     {
        //         email,
        //         password,
        //     }
        // );
        // const token = response.data.token;
        // localStorage.setItem("token", token);

        const user = {
            username: email.split("@")[0],
            fullName: email.split("@")[0],
            email,
            password:"test123"
        };

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", "dummy-token");
        
        toast.success('Signed in successfully!');
        navigate('/');
      } else {
        // For signup, include profile data in user_metadata
        // const response = await axios.post(
        //     "http://localhost:8080/api/auth/register",
        //     {
        //         username,
        //         fullName,
        //         email,
        //         password,
        //     }
        // );

        const user = {
            username,
            fullName,
            email,
        };

         localStorage.setItem("user", JSON.stringify(user));

        toast.success('Signup successful! Please check your email for verification.');
        setMode("signin");
      }
    } catch (err: any) {

            toast.error(
                err.response?.data?.message ??
                err.message
            );
        } finally {
        setLoading(false);
        }
    };

    // const handleGoogleAuth = () => {
    //     window.location.href =
    //         "http://localhost:8080/oauth2/authorization/google";
    // };

    const handleGoogleAuth = () => {
        const user = {
            username: "googleuser",
            fullName: "Google User",
            email: "google@example.com",
        };

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", "google-token");

        toast.success("Google Login Success");

        navigate("/");
    };

  return (
    <div className="w-full max-w-md mx-auto space-y-8 p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          {mode === 'signin' ? 'Sign in to your account' : 'Create a new account'}
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          {mode === 'signin' 
            ? "Don't have an account? " 
            : "Already have an account? "}
          <button 
            className="text-xl-blue hover:text-xl-dark font-medium"
            onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
          >
            {mode === 'signin' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>

      <form onSubmit={handleEmailAuth} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com" 
            required 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••" 
            required 
          />
        </div>

        {mode === 'signup' && (
          <>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username" 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="johndoe" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input 
                id="fullName" 
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe" 
              />
            </div>
          </>
        )}

        <Button 
          type="submit" 
          className="w-full" 
          disabled={loading}
        >
          {loading 
            ? 'Loading...' 
            : mode === 'signin' ? 'Sign In' : 'Sign Up'}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <Button 
        type="button" 
        variant="outline" 
        className="w-full flex items-center justify-center gap-2" 
        onClick={handleGoogleAuth}
        disabled={loading}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" width="24" height="24">
          <path fill="#EA4335" d="M5.26 11c0-.74.14-1.44.39-2.09H0v4.18h5.26c-.13-.68-.39-1.4-.39-2.09z"/>
          <path fill="#FBBC05" d="M12 5.38c-1.69 0-3.05.57-4.09 1.53L10.87 10c.61-.41 1.39-.66 2.26-.66 1.74 0 3.28.86 4.09 2.09h3.04V6.48C18.13 5.84 15.39 5.38 12 5.38z"/>
          <path fill="#4285F4" d="M12 0C7.38 0 3.06 2.79 1.31 6.79l4.35 3.33C6.69 6.85 9.33 4.3 12 4.3c2.22 0 4.01.92 5.31 2.17l3.04-3.04C17.26 1.1 14.16 0 12 0z"/>
          <path fill="#34A853" d="M20.48 2.52L17.44 5.56C15.95 4.01 14.08 3 12 3 8.13 3 5 5.43 5 12s3.13 9 7 9c4.08 0 6.71-2.33 6.71-6.92 0-.73-.07-1.45-.19-2.08H12v4.17h5.26c-.23 1.13-.87 2.02-1.74 2.63l3.04 3.04C21.1 19.76 24 16.55 24 12c0-2.92-.78-4.95-3.52-9.48z"/>
        </svg>
        Google
      </Button>
    </div>
  );
};

export default AuthForm;
