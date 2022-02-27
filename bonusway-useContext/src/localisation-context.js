import { createContext, useContext, useState } from "react";

const LocaliseContext = createContext({
  language: "English",
  setLanguage: () => {}
});

const LocalisationProvider = ({ children }) => {
  const [language, setLanguage] = useState("English");

  const toggleLanguage = (e) => {
    setLanguage((prevLang) => (prevLang === "English" ? "Hindi" : "English"));
  };

  return (
    <LocaliseContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LocaliseContext.Provider>
  );
};

const useLanguage = () => useContext(LocaliseContext);

export { useLanguage, LocalisationProvider };
