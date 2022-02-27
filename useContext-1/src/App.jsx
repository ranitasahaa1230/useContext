import "./styles.css";
import { useContext } from "react";
import { CartContext } from "./createContext";

export function ProductListing() {
  return ["1", "2", "3", "4"].map((item) => <h2 key={item}>Product {item}</h2>);
}

export function Cart() {
  const { items, logger } = useContext(CartContext);

  return <h1 onClick={logger}> Items in cart {items} </h1>;
}

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
