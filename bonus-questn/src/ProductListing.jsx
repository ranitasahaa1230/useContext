import { useCart } from "./cart-context";
import { getFontColor } from "./getFontColor";
import { useTheme } from "./theme-context";

export function ProductListing() {
  const { addToCart } = useCart();
  const { theme } = useTheme();

  return [1, 2, 3, 4].map((item) => (
    <div key={item} style={{ color: getFontColor(theme) }}>
      <h2>Product {item}</h2>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  ));
}
