import { createContext, useContext, useState } from "react";

const LoginContext = createContext({ status: "User Logged In ✔" });

const LoginProvider = ({ children }) => {
  const [status, setLoggedIn] = useState(true);

  return (
    <LoginContext.Provider value={{ status, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => useContext(LoginContext);

export { useLogin, LoginProvider };
