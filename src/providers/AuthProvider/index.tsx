import { ReactElement, useState } from "react";
import { createContext, useContext, useMemo } from "react";

type AuthContextValues = {
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
};

const AuthContext = createContext<AuthContextValues>({
  isLogged: false,
  setIsLogged: () => undefined,
});

export const useAuthContextConsumer = () => useContext(AuthContext);

type AuthProviderProps = {
  children: ReactElement;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogged, setIsLogged] = useState(false);

  const providerValues = useMemo(
    () => ({
      isLogged,
      setIsLogged,
    }),
    [isLogged, setIsLogged]
  );

  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
