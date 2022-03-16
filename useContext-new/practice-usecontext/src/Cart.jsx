import { useCart } from "./cart-context";
import { useTheme } from "./theme-context";
import { getFont } from "./getFont";
import { useLanguage } from "./localization-context";
import { languageHelper } from "./languageHelper";

export function Cart() {
  const { products, logger } = useCart();
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <h1 onClick={logger} style={{ color: getFont(theme) }}>
      {`${languageHelper[language]["itemInCart"]} ${products}`}
    </h1>
  );
}
