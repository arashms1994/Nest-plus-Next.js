"use client";

import Axios from "@/api/client-api/base";
import { createContext, ReactNode, useContext } from "react";

type Props = {
  children: ReactNode;
  accessToken: string;
};

const AuthContext = createContext({
  accessToken: "",
});

export default function AuthProvider({ children, accessToken }: Props) {
  if (accessToken) {
    Axios.defaults.headers.common["Authorization"] = "bearer" + accessToken;
  }
  return (
    <AuthContext.Provider value={{ accessToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const { accessToken } = useContext(AuthContext);
  return accessToken;
}
