// import { useContext } from "react";
// import { useCart } from "./cart-context";
import { Cart } from "./Cart";
import { ProductListing } from "./ProductListing";
import { Nav } from "./Nav";
import { getFontColor } from "./getFontColor";
import { useTheme } from "./theme-context";
import "./styles.css";

export default function App() {
  const { theme } = useTheme();

  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "light" ? "white" : "black" }}
    >
      <h1 className="app-header" style={{ color: getFontColor(theme) }}>
        eCommerce
      </h1>
      <div className="app-body">
        <Nav />
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
