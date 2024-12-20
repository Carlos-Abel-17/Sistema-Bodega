'use client';

import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';


// Define el tipo del contexto
interface AuthContextType {
  login: (userData: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  
  const router = useRouter();

  const login = (userData: string) => {
    console.log("soy  datos de contexto",userData);
    
    // router.push('/Dashboard'); // Redirige al dashboard
  };
 

  return (
    <AuthContext.Provider value={{ login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
