import { createContext, ReactNode, useContext, useState } from "react";
import { userType } from "../utils/type/type";

interface AuthContextProps {
  user: userType | null;
  setUser: (user: userType | null) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<userType | null>((): userType | null => {
    const storageUser = localStorage.getItem("loginUser");
    console.log(storageUser);
    if (storageUser) {
      try {
        return JSON.parse(storageUser) as userType;
      } catch (error) {
        console.error("Failed to parse loginUser from localStorage:", error);
      }
    }
    return null;
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
