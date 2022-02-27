import "./styles.css";
import { Cart } from "./Cart";
import { ProductListing } from "./ProductListing";
import { useLanguage } from "./localisation-context";
import { languageHelper } from "./languageHelper";

export default function App() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="App">
      <button onClick={toggleLanguage}>Toggle Language</button>
      <span>{language}</span>
      <h1 className="app-header">{languageHelper[language]["app"]}</h1>
      <div className="app-body">
        <Cart languageHelper={languageHelper[language].cart} />
        <ProductListing languageHelper={languageHelper[language]["product"]} />
      </div>
    </div>
  );
}
