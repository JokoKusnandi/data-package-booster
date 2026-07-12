
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import AuthForm from '@/components/AuthForm';
// import { supabase } from '@/integrations/supabase/client';

const AuthPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/");
        }
    
  }, [navigate]);

  return (
    <Layout>
      <div className="py-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center justify-center">
        <AuthForm />
      </div>
    </Layout>
  );
};

export default AuthPage;