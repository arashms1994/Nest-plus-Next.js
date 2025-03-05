"use client";

import Axios from "@/api/client-api/base";
import { createContext, ReactNode, useContext } from "react";

type Props = {
  children: ReactNode;
  accessToken: string;
  role: string;
};

const AuthContext = createContext({
  accessToken: "",
  role: "",
});

export default function AuthProvider({ children, accessToken, role }: Props) {
  if (accessToken) {
    Axios.defaults.headers.common["Authorization"] = "bearer " + accessToken;
  }
  return (
    <AuthContext.Provider value={{ accessToken, role }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const { accessToken, role } = useContext(AuthContext);
  return { accessToken, role };
}
