import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ theme: "light" });

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // function toggle(){
  //   setTheme((theme)=>theme==="light"?"dark":"light");
  // }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
