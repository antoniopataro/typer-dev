import React, { createContext, useState, useEffect } from "react";

export interface UserData {
  data: {
    _id: string;
    name: string;
    email: string;
    picture?: string;
    scores?: {
      accuracy: number;
      elapsedTime: string;
      errors: number;
      wpm: number;
    }[];
  };
}

interface AuthContextData {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ChildrenData {
  children?: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: ChildrenData) {
  const storagedInfo = JSON.parse(localStorage.getItem("context") || "{}");

  const [user, setUser] = useState<UserData>(storagedInfo?.user || ({} as UserData));
  const [isLogged, setIsLogged] = useState(storagedInfo?.isLogged || false);

  useEffect(() => {
    localStorage.setItem("context", JSON.stringify({ user, isLogged }));
  }, [user, isLogged]);

  return <AuthContext.Provider value={{ user, setUser, isLogged, setIsLogged }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
