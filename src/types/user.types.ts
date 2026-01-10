export type User = {
  id: string;
  email?: string;
  user_metadata?: any;
};

export type AuthState = {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  initialized: boolean;
  setUser: (user: User | null) => void;
  signOut: () => Promise<void>;
  checkAuth: () => Promise<void>;
};
