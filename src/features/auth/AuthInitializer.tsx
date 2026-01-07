import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { supabase } from '@/lib/supabase/client';

const AuthInitializer = () => {
  const { checkAuth, setUser, initialized } = useAuthStore();

  useEffect(() => {
    if (!initialized) {
      checkAuth();
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        setUser(session.user);
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [checkAuth, setUser, initialized]);

  return null;
};

export default AuthInitializer;