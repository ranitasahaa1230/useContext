import "./styles.css";
import { ProductListing } from "./ProductListing";
import { Cart } from "./Cart";
import { Nav } from "./Nav";
import { getFont } from "./getFont";
import { useTheme } from "./theme-context";
import { useLanguage } from "./localization-context";
import { languageHelper } from "./languageHelper";

export default function App() {
  const { language, toggleLanguage } = useLanguage();

  const { theme } = useTheme();
  // const { language } = useLanguage();

  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "light" ? "white" : "black" }}
    >
      {/* <h1 className="app-header" style={{ color: getFont(theme) }}>
        {`${languageHelper[language].app}`}
      </h1> */}
      <h1 className="app-header" style={{ color: getFont(theme) }}>
        {languageHelper[language]["app"]}{" "}
      </h1>
      <div>
        <button onClick={toggleLanguage}>Toggle Language</button>
        <span>{language}</span>
      </div>
      <div className="app-body">
        <Nav />
        <Cart languageHelp={languageHelper[language]["itemInCart"]} />
        <ProductListing languageHelp={languageHelper[language]["product"]} />
      </div>
    </div>
  );
}
