import { create } from 'zustand';
import { User } from '@/types/user.types';
import { supabase } from '@/lib/supabase/client';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  initialized: boolean;
  setUser: (user: User | null) => void;
  signOut: () => Promise<void>;
  checkAuth: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  error: null,
  initialized: false,
  
  setUser: (user) => set({ user }),
  signOut: async () => {
    await supabase.auth.signOut();
  },
  checkAuth: async () => {
    set({ isLoading: true, error: null });
  
    try {
      const { data: { session } } = await supabase.auth.getSession();
  
      set({ 
        user: session?.user ?? null,
        isLoading: false,
        initialized: true,
      });
    } catch (error: any) {
      set({ 
        error,
        isLoading: false,
        initialized: true,
      });
    }
  }
}));