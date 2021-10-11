import { ReactElement, useCallback } from "react";
import { createContext, useContext, useMemo } from "react";

import { useLocalStorage } from "@rehooks/local-storage";

type AuthContextValues = {
  isLogged: boolean;
  setAuthPub: (authPub: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValues>({
  isLogged: false,
  setAuthPub: () => undefined,
  logout: () => undefined,
});

export const useAuthContextConsumer = () => useContext(AuthContext);

type AuthProviderProps = {
  children: ReactElement;
};

const LOCAL_AUTH_KEY = "LOCAL_AUTH_KEY";

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authPub, setAuthPub, removeAuthPub] = useLocalStorage(
    LOCAL_AUTH_KEY,
    ""
  );

  const isLogged = useMemo(() => !!authPub, [authPub]);

  const handleSetAuthPub = useCallback(
    (newAuthPub: string) => {
      setAuthPub(newAuthPub);
    },
    [setAuthPub]
  );

  const logout = useCallback(() => {
    removeAuthPub();
  }, [removeAuthPub]);

  const providerValues = useMemo(
    () => ({
      isLogged: true,
      setAuthPub: handleSetAuthPub,
      logout,
    }),
    [isLogged, handleSetAuthPub, logout]
  );

  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
