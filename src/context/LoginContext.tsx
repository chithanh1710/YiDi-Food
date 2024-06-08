import { ReactNode, createContext, useContext, useState } from "react";

interface LoginProps {
  userName: string;
  setLoginSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  loginSuccess: boolean;
  loginSummit: (email: string, password: string) => void;
  showLogin: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginContext = createContext<LoginProps | null>(null);
const emailDefault = "yidifood@gmail.com";
const passwordDefault = "yidifood";

function LoginContextProvider({ children }: { children: ReactNode }) {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const userName = "YiDi";

  function loginSummit(email: string, password: string) {
    if (!email || !password) return;
    if (email === emailDefault && password === passwordDefault) {
      setLoginSuccess(true);
      setShowLogin(false);
    } else setLoginSuccess(false);
  }

  const value: LoginProps = {
    userName,
    loginSuccess,
    setLoginSuccess,
    loginSummit,
    setShowLogin,
    showLogin,
  };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}

function useLogin() {
  const context = useContext(LoginContext);
  if (!context) return;
  return context;
}

export { LoginContextProvider, useLogin };
