import { useCart } from "./cart-context";
import { getFont } from "./getFont";
// import { languageHelper } from "./languageHelper";
// import { useLanguage } from "./localization-context";
import { useTheme } from "./theme-context";

export function ProductListing({ languageHelp }) {
  const { addToCart } = useCart();
  const { theme } = useTheme();
  // const { language } = useLanguage();

  return ["1", "2", "3", "4"].map((product) => (
    <div key={product} style={{ color: getFont(theme) }}>
      <h2>
        {/* {`${languageHelper[language].product}`} {product} */}
        {languageHelp} {product}
      </h2>
      <button onClick={addToCart}>
        {languageHelp}
        {/* {`${languageHelper[language]["addToCart"]}`} */}
      </button>
    </div>
  ));
}
