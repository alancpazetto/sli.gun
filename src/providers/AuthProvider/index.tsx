import { createContext, useContext } from "react";

type AuthContextValues = {
  isLogged: boolean;
};

const AuthContext = createContext<AuthContextValues>({
  isLogged: false,
});

export const useAuthContextConsumer = () => useContext(AuthContext);
