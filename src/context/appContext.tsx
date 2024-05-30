'use client';

// context/appContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { registerRequest } from '@/utils/auth';

interface AppContextType {
  data: any;
  isAuth: boolean;
  register: (user: any) => Promise<void>;
  updateServices: (services: any[]) => void;
  services: any[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [services, setServices] = useState<any[]>([]);
  const router = useRouter();

  const register = async (user: any) => {
    try {
      const response = await registerRequest(user);
      if (response.status === 200) {
        setData(response.data);
        setIsAuth(true);
        setTimeout(() => {
          router.push('/dashboard');
        }, 800); // Espera 2 segundos antes de redirigir
      }
    } catch (error) {
      console.error(error);
      setData(null);
      setIsAuth(false);
    }
  };

  const updateServices = (newServices: any[]) => {
    setServices(newServices);
  };

  return (
    <AppContext.Provider
      value={{ data, isAuth, register, services, updateServices }}
    >
      {children}
    </AppContext.Provider>
  );
};
