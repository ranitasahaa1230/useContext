import { useCart } from "./cart-context";
import { getFontColor } from "./getFontColor";
import { useTheme } from "./theme-context";
import { useLanguage } from "./localize-context";
import { languageLib } from "./languageLib";

export function Cart() {
  const { items, logger } = useCart();
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <h1 onClick={logger} style={{ color: getFontColor(theme) }}>
      {/* {`${languageLib[language]["cart"]} ${items}`}  */}
      <h1>{`${languageLib[language].cart} ${items}`}</h1>
      {/* //coming 4rm localize-context */}
    </h1>
  );
}
