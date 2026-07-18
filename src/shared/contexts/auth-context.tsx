import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

import api from "@/shared/services/api"
import { postUsersAuthenticate } from "@/shared/services/user/user.service"
import type { postUsersAuthenticateData } from "@/shared/services/user/user.types"

import Cookies from "js-cookie"

interface AuthContextType {
  user: any | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: postUsersAuthenticateData) => Promise<void>;
  logout: () => void;
  refreshUser: () => void;
  updateUser: (userData: any) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const COOKIE_OPTIONS = {
  expires: 7,
  secure: import.meta.env.PROD,
  sameSite: 'strict' as const,
  path: '/',
};

function setAuthToken(token: string | null) {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isAuthenticated = !!user;

  const saveAuthData = (token: string, userData: any) => {
    Cookies.set('auth_token', token, COOKIE_OPTIONS);
    Cookies.set('auth_user', JSON.stringify(userData), COOKIE_OPTIONS);
  };

  const clearAuthData = () => {
    Cookies.remove('auth_token', { path: '/' });
    Cookies.remove('auth_user', { path: '/' });
  };

  const loadAuthData = () => {
    const token = Cookies.get('auth_token');
    const userData = Cookies.get('auth_user');

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData) as any;
        setUser(parsedUser);
        setAuthToken(token);
      } catch (error) {
        console.error('Erro ao parsear dados do usuário:', error);
        clearAuthData();
      }
    }
  };

  const login = async (credentials: postUsersAuthenticateData) => {
    setIsLoading(true);
    try {
      const response = await postUsersAuthenticate(credentials);

      saveAuthData(response.token, response.user);
      setUser(response.user);
      setAuthToken(response.token);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    clearAuthData();
    setAuthToken(null);
    setUser(null);
  };

  const refreshUser = () => {
    loadAuthData();
  };

  const updateUser = (userData: any) => {
    const token = Cookies.get('auth_token');
    if (token) {
      saveAuthData(token, userData);
      setUser(userData);
    }
  };

  useEffect(() => {
    loadAuthData();
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    refreshUser,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}
