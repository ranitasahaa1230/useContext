import "./styles.css";
// import { useCart } from "./createContext";
import { ProductListing } from "./ProductListing";
import { Cart } from "./Cart";

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">eCommerce</h1>
      <div className="app-body">
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
