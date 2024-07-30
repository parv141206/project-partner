// Contexts/AuthContext.tsx
import firebase_app from "@/Firebase/connection";
import {
  getAuth,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";
import { createContext, useState, useEffect, ReactNode } from "react";

interface User {
  uid: string;
  email: string | null;
  username: string | null;
}

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth(firebase_app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser: FirebaseUser | null) => {
        if (currentUser) {
          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            username: currentUser.displayName,
          });
        } else {
          setUser(null);
        }
      },
    );

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
