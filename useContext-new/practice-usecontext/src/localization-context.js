import { createContext, useContext, useState } from "react";

const LocalizationContext = createContext({ language: "en" });

const LocalizationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((lang) => (lang === "en" ? "hi" : "en"));
  };
  return (
    <LocalizationContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LocalizationContext.Provider>
  );
};

const useLanguage = () => useContext(LocalizationContext);

export { useLanguage, LocalizationProvider };
