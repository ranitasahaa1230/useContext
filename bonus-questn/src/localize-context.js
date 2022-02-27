import { createContext, useContext, useState } from "react";

const LocaliseContext = createContext({
  language: "english",
  setLanguage: () => {}
});

const LocalisationProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");

  return (
    <LocaliseContext.Provider value={{ language, setLanguage }}>
      {children}
    </LocaliseContext.Provider>
  );
};

const useLanguage = () => useContext(LocaliseContext);
export { useLanguage, LocalisationProvider };
